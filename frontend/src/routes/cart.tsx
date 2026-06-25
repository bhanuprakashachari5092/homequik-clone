import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ShoppingBag, Trash2, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { SafeImage } from "@/hooks/useLocalSafeImage";
import { useLocation } from "@/context/LocationContext";
import { NearestDealers } from "@/components/NearestDealers";
import { usePreciseLocation } from "@/hooks/usePreciseLocation";
import { useDistanceCalculator } from "@/hooks/useDistanceCalculator";
import { reverseGeocodeNominatim } from "@/services/nominatimService";

import { toast } from "sonner";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [{ title: "Your cart — Vendor99" }],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, removeFromCart, checkout, isCheckingOut, totalItems } = useCart();
  const { user } = useAuth();
  const { location, coords } = useLocation();
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [address, setAddress] = useState("");

  const {
    coords: preciseCoords,
    isLocating: isLocatingGPS,
    error: locationError,
    waitingForPrecise,
    permissionStatus,
    retry: retryGPS
  } = usePreciseLocation();
  const { getDistance } = useDistanceCalculator();
  const [assignedDealerId, setAssignedDealerId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (preciseCoords && !address) {
      reverseGeocodeNominatim(preciseCoords.latitude, preciseCoords.longitude).then((res) => {
        if (isMounted && res && res.fullAddress) {
          setAddress(res.fullAddress);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [preciseCoords]);

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please login to complete your booking.");
      router.navigate({ to: "/login" });
      return;
    }

    if (!address.trim()) {
      toast.error("Please enter your service address.");
      return;
    }
    
    try {
      const userName = user.displayName || user.email || "Customer";
      
      const totalNumericAmount = items.reduce((acc, i) => {
        const priceNum = parseInt(i.price.replace(/[^0-9]/g, '')) || 0;
        return acc + (priceNum * i.quantity);
      }, 0);

      const generatedId = "HQ-" + Math.random().toString(36).substring(2, 8).toUpperCase();

      // Fetch active dealers to find the 5 nearest by coordinates (distance in meters/km)
      let eligibleDealerIds: string[] = [];
      const dealerDistancesMap: { [dealerId: string]: string } = {};
      let customerCoords: { latitude: number, longitude: number } | null = null;
      try {
        const dealersQuery = query(collection(db, "dealers"), where("status", "==", "Active"));
        const dealersSnapshot = await getDocs(dealersQuery);
        const allDealers: any[] = [];
        dealersSnapshot.forEach(doc => {
          allDealers.push({ id: doc.id, ...doc.data() });
        });

        // 1. Geocoding helpers
        const geocodeString = async (queryStr: string): Promise<{ latitude: number, longitude: number } | null> => {
          try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(queryStr)}&limit=1`, {
              headers: {
                "Accept-Language": "en-US,en;q=0.9",
                "User-Agent": "Vendor99-Precise-Locator/1.0 (contact: support@vendor99.com)"
              }
            });
            if (res.ok) {
              const data = await res.json();
              if (data && data.length > 0) {
                return { latitude: parseFloat(data[0].lat), longitude: parseFloat(data[0].lon) };
              }
            }
          } catch (err) {
            console.error("Geocoding failed for:", queryStr, err);
          }
          return null;
        };

        // 2. Resolve customer coordinates
        if (preciseCoords) {
          customerCoords = { latitude: preciseCoords.latitude, longitude: preciseCoords.longitude };
        } else {
          const fullAddressQuery = location ? `${address}, ${location}` : address;
          customerCoords = await geocodeString(fullAddressQuery);
          if (!customerCoords && coords) {
            customerCoords = coords;
          }
        }

        if (customerCoords) {
          // Calculate distances to active dealers using getDistance
          const dealersWithDistance = await Promise.all(allDealers.map(async (dealer) => {
            let dLat = dealer.latitude;
            let dLng = dealer.longitude;

            if ((dLat === null || dLat === undefined || dLng === null || dLng === undefined) && dealer.city) {
              const coords = await geocodeString(dealer.city);
              if (coords) {
                dLat = coords.latitude;
                dLng = coords.longitude;
              }
            }

            if (dLat !== null && dLat !== undefined && dLng !== null && dLng !== undefined) {
              const distanceInMeters = getDistance(customerCoords!.latitude, customerCoords!.longitude, dLat, dLng);
              return { dealer, distance: distanceInMeters };
            }

            return { dealer, distance: 9999999 };
          }));

          dealersWithDistance.sort((a, b) => a.distance - b.distance);
          const eligibleDealers = dealersWithDistance.slice(0, 5);
          eligibleDealerIds = eligibleDealers.map(x => x.dealer.id);
          
          eligibleDealers.forEach(x => {
            if (x.distance !== 9999999) {
              const roundedMeters = Math.round(x.distance);
              const km = (x.distance / 1000).toFixed(2);
              dealerDistancesMap[x.dealer.id] = `${roundedMeters} m (${km} km)`;
            } else {
              dealerDistancesMap[x.dealer.id] = "N/A";
            }
          });
        } else {
          console.warn("Geocoding failed. Falling back to keyword matching.");
          const cleanAddress = (address || "").toLowerCase();
          const cleanTargetCity = (location || "").toLowerCase();

          const matchedDealers = allDealers.filter(dealer => {
            const dealerCity = (dealer.city || "").toLowerCase();
            const words = dealerCity.split(/[\s,]+/);
            return words.some((word: string) => 
              word.length > 2 && (cleanAddress.includes(word) || cleanTargetCity.includes(word))
            );
          });

          const eligibleDealers = matchedDealers.length > 0 
            ? matchedDealers.slice(0, 5) 
            : allDealers.slice(0, 5);

          eligibleDealerIds = eligibleDealers.map(d => d.id);
          eligibleDealerIds.forEach(id => {
            dealerDistancesMap[id] = "N/A";
          });
        }
      } catch (err) {
        console.error("Error matching dealers on cart checkout:", err);
      }

      const bookingData = {
        bookingId: generatedId,
        customerName: userName,
        customerEmail: user.email,
        customerPhone: user.phoneNumber || "",
        customerAddress: address,
        customerLat: customerCoords?.latitude || null,
        customerLng: customerCoords?.longitude || null,
        serviceName: items.map(i => `${i.title} (Qty: ${i.quantity})`).join(", "),
        selectedItems: items.map(i => `${i.title} (Qty: ${i.quantity})`),
        bookingDate: new Date().toISOString().split('T')[0],
        bookingTime: new Date().toTimeString().split(' ')[0].substring(0, 5),
        notes: "Booked via Shopping Cart",
        amount: `₹${totalNumericAmount.toLocaleString('en-IN')}`,
        numericAmount: totalNumericAmount,
        status: "Pending",
        createdAt: serverTimestamp(),
        eligibleDealers: eligibleDealerIds,
        dealerDistances: dealerDistancesMap,
        dealerId: eligibleDealerIds[0] || null // Auto assign nearest available technician!
      };

      setAssignedDealerId(eligibleDealerIds[0] || null);

      // 1. Save to Google Sheets (Bookings Sheet1 & Leads tab in one single request)
      try {
        await fetch("https://script.google.com/macros/s/AKfycbylfcX1xeYmnGfMR9j6d-VL-9iUCiTolApZ_YURJfpHb3KquLNULAP-mk8K-r6gfVbO/exec", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...bookingData,
            createdAt: new Date().toISOString(),
            selectedItems: bookingData.selectedItems,
            latitude: customerCoords?.latitude || "",
            longitude: customerCoords?.longitude || ""
          }),
        });
        console.log("Sent cart checkout booking to Google Sheets");
      } catch (err) {
        console.error("Error saving cart checkout to Google Sheets:", err);
      }

      // 2. Save to Firebase
      const docRef = await addDoc(collection(db, "bookings"), bookingData);

      // 3. Create notifications in Firebase
      try {
        for (const dealerId of eligibleDealerIds) {
          const distanceText = dealerDistancesMap[dealerId] || "N/A";
          await addDoc(collection(db, "notifications"), {
            dealerId: dealerId,
            title: "New Lead Nearby",
            message: `New booking request from ${userName} for Cart items in ${address}`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: "lead",
            bookingId: docRef.id,
            customerName: userName,
            serviceRequired: items.map(i => i.title).join(", "),
            area: address,
            exactDistance: distanceText,
            createdAt: serverTimestamp()
          });
        }
      } catch (err) {
        console.error("Error creating dealer notifications from cart:", err);
      }

      // 4. Send push notifications via Expo
      try {
        for (const dealerId of eligibleDealerIds) {
          const dlrDoc = await getDoc(doc(db, "dealers", dealerId));
          if (dlrDoc.exists()) {
            const dlrData = dlrDoc.data();
            const pushToken = dlrData.pushToken;
            const distanceText = dealerDistancesMap[dealerId] || "N/A";
            
            if (pushToken) {
              await fetch("https://exp.host/--/api/v2/send", {
                method: "POST",
                headers: {
                  "Accept": "application/json",
                  "Accept-encoding": "gzip, deflate",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  to: pushToken,
                  sound: "default",
                  title: `⚡ New Lead Nearby: ${distanceText}!`,
                  body: `🛠️ ${items.map(i => i.title).join(", ")} requested by ${userName} in ${address.split(',')[0]}`,
                  channelId: "new-leads",
                  data: {
                    leadId: docRef.id,
                    customerName: userName,
                    serviceRequired: items.map(i => i.title).join(", "),
                    area: address,
                    exactDistance: distanceText
                  }
                })
              });
              console.log(`Sent push notification to dealer ${dealerId}`);
            }
          }
        }
      } catch (pushErr) {
        console.error("Error sending push notifications from cart:", pushErr);
      }

      // Clear the cart
      await checkout();

      // Show success modal
      setShowSuccessModal(true);
    } catch (err: any) {
      toast.error(err.message || "Failed to complete checkout.");
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    router.navigate({ to: "/" });
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 min-h-[calc(100vh-64px)] relative">
        <div className="absolute top-0 right-10 w-100 h-100 rounded-full bg-brand/5 blur-[80px] -z-10 animate-float" />
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          Your Cart
        </motion.h1>
        
        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 text-center py-24 glass rounded-[3rem] shadow-card border border-white/20"
          >
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-primary/10 mb-8">
              <ShoppingBag className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">Your cart is empty</h2>
            <p className="mt-4 text-muted-foreground text-lg">Discover premium B2B services and add your first booking.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-premium px-8 py-4 text-base font-bold text-white shadow-lg transition-all"
              >
                Explore Services <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_400px]">
            <div className="space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    className="group flex gap-6 p-6 rounded-4xl border border-border/50 bg-white hover:border-primary/30 shadow-sm hover:shadow-card transition-all items-center"
                  >
                    {item.image && (
                      <div className="h-28 w-28 bg-muted rounded-2xl overflow-hidden shrink-0 shadow-inner">
                        <SafeImage src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                      <p className="text-sm font-semibold text-primary mt-1">{item.price}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted/50 w-fit px-4 py-1.5 rounded-full">
                        Quantity: {item.quantity}
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromCart(item.id)}
                      className="p-4 text-muted-foreground hover:text-danger hover:bg-danger/10 rounded-2xl transition-colors"
                    >
                      <Trash2 className="h-6 w-6" />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[2.5rem] border border-white/40 glass p-8 shadow-premium h-fit sticky top-28"
            >
              <h3 className="font-extrabold text-2xl mb-8 tracking-tight">Booking Summary</h3>
              <div className="space-y-5 text-base border-b border-border/50 pb-8 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-medium">Total Services</span>
                  <span className="font-extrabold text-lg">{totalItems}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-medium">Consultation Fee</span>
                  <span className="font-bold text-success flex items-center gap-1.5 bg-success/10 px-3 py-1 rounded-full text-sm">
                    <CheckCircle2 className="h-4 w-4" /> Free
                  </span>
                </div>
              </div>

              <div className="mb-6">
                 <label className="text-sm font-bold text-slate-700 block mb-2">Service Address *</label>
                 <textarea 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter full address for the service..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                    rows={3}
                 />
                 {/* Precise Geolocation Status */}
                 <div className="text-[11px] mt-1 space-y-1 text-left">
                   {isLocatingGPS && (
                     <p className="text-blue-600 font-bold animate-pulse flex items-center gap-1">
                       <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                       Detecting precise GPS coordinates...
                     </p>
                   )}
                   {waitingForPrecise && (
                     <p className="text-amber-600 font-bold flex items-center gap-1 animate-pulse">
                       ⚠️ Waiting for precise GPS location (accuracy: {preciseCoords ? `${preciseCoords.accuracy.toFixed(1)}m` : "checking..."})...
                     </p>
                   )}
                   {permissionStatus === "denied" && (
                     <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 space-y-1.5">
                       <p className="font-bold">GPS permission is denied.</p>
                       <p className="text-[10px] text-red-600 leading-normal font-medium">
                         Please enable location access in your browser settings (click the lock icon in the browser address bar) to automatically resolve your address.
                       </p>
                       <button
                         type="button"
                         onClick={retryGPS}
                         className="bg-red-600 hover:bg-red-700 text-white font-black px-3 py-1 rounded-lg text-[9px] uppercase tracking-wider transition-colors cursor-pointer"
                       >
                         Retry GPS Detection
                       </button>
                     </div>
                   )}
                   {!isLocatingGPS && !waitingForPrecise && preciseCoords && (
                     <p className="text-emerald-600 font-bold flex items-center gap-1">
                       ✓ Precise location resolved (accuracy: {preciseCoords.accuracy.toFixed(1)}m)
                     </p>
                   )}
                 </div>
              </div>

              <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-medium">
                By proceeding, you agree to our terms. Your selected B2B services will be booked and our representative will call you to finalize the contract.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full flex justify-center items-center rounded-2xl bg-gradient-premium px-4 py-5 text-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  user ? "Confirm & Book Now" : "Login to Book"
                )}
              </motion.button>
            </motion.div>
          </div>
        )}
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden text-center"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-premium" />
              <div className="mx-auto w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-success" />
              </div>
              <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Thank you for your booking. We have sent a confirmation message to your WhatsApp and our AI representative will call you shortly!
              </p>
              
              <div className="max-h-65 overflow-y-auto pr-1.5 mb-8 border-b border-slate-100 pb-2 custom-scrollbar text-left font-medium">
                <NearestDealers 
                  targetCity={location} 
                  address={address} 
                  customerCoords={preciseCoords} 
                  assignedDealerId={assignedDealerId} 
                />
              </div>

              <button
                onClick={closeSuccessModal}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl"
              >
                Return to Home
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
