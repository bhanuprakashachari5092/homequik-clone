import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, MapPin, Calendar, Clock, CheckCircle2, Loader2, FileText } from "lucide-react";
import { collection, addDoc, serverTimestamp, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { useOffers } from "@/context/OfferContext";
import { useLocation } from "@/context/LocationContext";
import { NearestDealers } from "@/components/NearestDealers";
import { usePreciseLocation } from "@/hooks/usePreciseLocation";
import { useDistanceCalculator } from "@/hooks/useDistanceCalculator";
import { reverseGeocodeNominatim } from "@/services/nominatimService";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  selectedItems?: string[];
  onSuccess?: () => void;
}

export function BookingModal({ isOpen, onClose, serviceName, selectedItems = [], onSuccess }: BookingModalProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { getApplicableOffer } = useOffers();
  const { location: userLocation, coords: userCoords } = useLocation();
  const [step, setStep] = useState<"form" | "submitting" | "success">("form");
  const [bookingId, setBookingId] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const [loadingText, setLoadingText] = useState("Submitting Booking...");

  const today = new Date();
  const defaultDate = today.toLocaleDateString('en-CA'); // Format: YYYY-MM-DD
  const defaultTime = today.toTimeString().split(' ')[0].substring(0, 5); // Format: HH:MM

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    date: defaultDate,
    time: defaultTime,
    notes: ""
  });

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
    if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: prev.fullName || user.displayName || "",
        phone: prev.phone || user.phoneNumber || ""
      }));
    }
  }, [user]);

  useEffect(() => {
    let isMounted = true;
    if (preciseCoords && !formData.address) {
      reverseGeocodeNominatim(preciseCoords.latitude, preciseCoords.longitude).then((res) => {
        if (isMounted && res && res.fullAddress) {
          setFormData(prev => ({
            ...prev,
            address: res.fullAddress
          }));
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [preciseCoords]);

  const getPriceDetails = () => {
    let originalAmount = 0;
    let hasRepair = false;
    selectedItems.forEach(item => {
      if (item.startsWith("Repair:")) {
        hasRepair = true;
      } else {
        const match = item.match(/\[₹?\s*([\d,]+)/);
        if (match) {
           originalAmount += parseInt(match[1].replace(/,/g, ''), 10);
        }
      }
    });
    if (hasRepair) originalAmount += 450;

    const offer = getApplicableOffer(serviceName);
    let discountAmount = 0;
    let finalAmount = originalAmount;

    if (offer && offer.discountValue && originalAmount > 0) {
      if (offer.discountType === 'percentage') {
         discountAmount = originalAmount * (offer.discountValue / 100);
      } else {
         discountAmount = offer.discountValue;
      }
      finalAmount = Math.max(0, Math.round(originalAmount - discountAmount));
      discountAmount = originalAmount - finalAmount;
    }

    return { originalAmount, discountAmount, finalAmount, offer };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Book button clicked");
    
    if (!user) {
      toast.error("Please login to proceed with booking.");
      onClose();
      navigate({ to: "/login" });
      return;
    }

    if (!formData.fullName || !formData.phone || !formData.address || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setStep("submitting");

    try {
      const generatedId = "HQ-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      
      setTimeout(() => setLoadingText("Saving Data..."), 1000);
      setTimeout(() => setLoadingText("Confirming Booking..."), 2000);

      let calculatedAmount = 0;
      let hasRepair = false;
      selectedItems.forEach(item => {
        if (item.startsWith("Repair:")) {
          hasRepair = true;
        } else {
          const match = item.match(/\[₹?\s*([\d,]+)/);
          if (match) {
             calculatedAmount += parseInt(match[1].replace(/,/g, ''), 10);
          }
        }
      });
      if (hasRepair) calculatedAmount += 450;

      const offer = getApplicableOffer(serviceName);
      if (offer && offer.discountValue && calculatedAmount > 0) {
        if (offer.discountType === 'percentage') {
           calculatedAmount = calculatedAmount - (calculatedAmount * (offer.discountValue / 100));
        } else {
           calculatedAmount -= offer.discountValue;
        }
        calculatedAmount = Math.max(0, Math.round(calculatedAmount));
      }

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
          const fullAddressQuery = userLocation ? `${formData.address}, ${userLocation}` : formData.address;
          customerCoords = await geocodeString(fullAddressQuery);
          if (!customerCoords && userCoords) {
            customerCoords = userCoords;
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

          // Sort by distance ascending
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
          console.warn("Geocoding and GPS failed. Falling back to keyword-based matching.");
          const cleanAddress = (formData.address || "").toLowerCase();
          const cleanTargetCity = (userLocation || "").toLowerCase();

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
        console.error("Error matching dealers on booking creation:", err);
      }

      const bookingData = {
        bookingId: generatedId,
        customerName: formData.fullName,
        customerPhone: formData.phone,
        customerAddress: formData.address,
        customerLat: customerCoords?.latitude || null,
        customerLng: customerCoords?.longitude || null,
        serviceName: serviceName,
        selectedItems: selectedItems,
        bookingDate: formData.date,
        bookingTime: formData.time,
        notes: formData.notes,
        amount: calculatedAmount > 0 ? `₹${calculatedAmount.toLocaleString('en-IN')}` : "₹0",
        numericAmount: calculatedAmount,
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
            selectedItems: selectedItems || [],
            latitude: customerCoords?.latitude || "",
            longitude: customerCoords?.longitude || ""
          }),
        });
        console.log("Sent unified booking to Google Sheets");
      } catch (err) {
        console.error("Error saving to Google Sheets:", err);
      }

      // 2. Save to Firebase (Admin Dashboard uses this)
      const docRef = await addDoc(collection(db, "bookings"), bookingData);

      // 3. Create notifications for the 5 nearest dealers in Firebase
      try {
        for (const dealerId of eligibleDealerIds) {
          const distanceText = dealerDistancesMap[dealerId] || "N/A";
          await addDoc(collection(db, "notifications"), {
            dealerId: dealerId,
            title: "New Lead Nearby",
            message: `New booking request from ${formData.fullName} for ${serviceName} in ${formData.address}`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: "lead",
            bookingId: docRef.id,
            customerName: formData.fullName,
            serviceRequired: serviceName,
            area: formData.address,
            exactDistance: distanceText,
            createdAt: serverTimestamp()
          });
        }
      } catch (err) {
        console.error("Error creating dealer notifications:", err);
      }

      // 4. Send real-time push notifications via Expo Push API to the 5 nearest dealers
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
                  body: `🛠️ ${serviceName} requested by ${formData.fullName} in ${formData.address.split(',')[0]}`,
                  channelId: "new-leads",
                  data: {
                    leadId: docRef.id,
                    customerName: formData.fullName,
                    serviceRequired: serviceName,
                    area: formData.address,
                    exactDistance: distanceText
                  }
                })
              });
              console.log(`Sent push notification to dealer ${dealerId}`);
            }
          }
        }
      } catch (pushErr) {
        console.error("Error sending push notifications:", pushErr);
      }

      console.log("SUCCESS:", docRef.id);

      setBookingId(generatedId);
      
      let text = `Hello Vendor99,\n\n*New Booking Request:*\n`;
      text += `- Service: ${serviceName}\n`;
      if (selectedItems && selectedItems.length > 0) {
          text += `- Items: ${selectedItems.join(", ")}\n`;
      }
      text += `\n*Customer Details:*\n`;
      text += `- Name: ${formData.fullName}\n`;
      text += `- Phone: ${formData.phone}\n`;
      text += `- Address: ${formData.address}\n`;
      text += `- Schedule: ${formData.date} at ${formData.time}\n`;
      if (formData.notes) text += `- Notes: ${formData.notes}\n`;

      const WHATSAPP_NUMBER = "919141052539";
      setWhatsappLink(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`);

      setTimeout(() => {
        setStep("success");
      }, 3500); 
    } catch (error) {
      console.error("FIRESTORE ERROR:", error);
      toast.error("Failed to create booking. Please try again.");
      setStep("form");
    }
  };

  const resetAndClose = () => {
    if (step === "success" && onSuccess) {
      onSuccess();
    }
    setStep("form");
    const today = new Date();
    setFormData({ 
      fullName: "", phone: "", address: "", 
      date: today.toLocaleDateString('en-CA'), 
      time: today.toTimeString().split(' ')[0].substring(0, 5), 
      notes: "" 
    });
    setAssignedDealerId(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-4xl shadow-premium w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden relative"
        >
          {/* Header */}
          <div className="bg-gradient-premium p-6 text-white relative shrink-0">
            <button 
              onClick={resetAndClose}
              className="absolute top-4 right-4 h-8 w-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold tracking-tight">Book Service</h2>
            <p className="text-white/80 text-sm mt-1">{serviceName}</p>
          </div>

          <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
            {step === "form" && (
              <motion.form 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" className="w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input required type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Complete Address" className="w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                  </div>
                  {/* Precise Geolocation Status */}
                  <div className="text-[11px] mt-1 space-y-1">
                    {isLocatingGPS && (
                      <p className="text-blue-600 font-bold animate-pulse flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                        Detecting precise GPS coordinates...
                      </p>
                    )}
                    {waitingForPrecise && (
                      <p className="text-amber-600 font-bold flex items-center gap-1 animate-pulse">
                        ⚠️ Waiting for precise GPS location (accuracy: {preciseCoords ? `${preciseCoords.accuracy?.toFixed(1)}m` : "checking..."})...
                      </p>
                    )}
                    {permissionStatus === "denied" && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 space-y-1.5">
                        <p className="font-bold">GPS permission is denied.</p>
                        <p className="text-[10px] text-red-600 leading-normal">
                          Please enable location access in your browser settings (click the lock icon in the browser address bar) to automatically resolve your address.
                        </p>
                        <button
                          type="button"
                          onClick={retryGPS}
                          className="bg-red-600 hover:bg-red-700 text-white font-black px-3 py-1 rounded-lg text-[9px] uppercase tracking-wider transition-colors"
                        >
                          Retry GPS Detection
                        </button>
                      </div>
                    )}
                    {!isLocatingGPS && !waitingForPrecise && preciseCoords && (
                      <p className="text-emerald-600 font-bold flex items-center gap-1">
                        ✓ Precise location resolved (accuracy: {preciseCoords.accuracy?.toFixed(1)}m)
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm" />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm" />
                    </div>
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Additional Notes (Optional)" rows={3} className="w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none" />
                  </div>
                </div>

                {selectedItems.length > 0 && (
                  <div className="bg-brand-soft/30 p-4 rounded-xl border border-brand/20 text-sm">
                    <span className="font-bold text-brand">Selected:</span> {selectedItems.join(", ")}
                  </div>
                )}

                {(() => {
                  const { originalAmount, discountAmount, finalAmount, offer } = getPriceDetails();
                  if (originalAmount === 0) return null;
                  return (
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-sm mt-3">
                      <div className="flex justify-between items-center text-slate-500">
                        <span>Original Price:</span>
                        <span className="font-semibold text-slate-700">₹{originalAmount.toLocaleString('en-IN')}</span>
                      </div>
                      {discountAmount > 0 && (
                        <div className="flex justify-between items-center text-emerald-600 font-medium">
                          <span>
                            Discount {offer?.discountCode ? `(${offer?.discountCode})` : `(${offer?.title || 'Offer'})`}:
                          </span>
                          <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      <div className="border-t border-slate-200/60 pt-2 flex justify-between items-center font-bold text-slate-800 text-base">
                        <span>Total Payable:</span>
                        <span className="text-brand font-black">₹{finalAmount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  );
                })()}

                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-md mt-4"
                >
                  Confirm Booking
                </motion.button>
              </motion.form>
            )}

            {step === "submitting" && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-16 space-y-8"
              >
                <div className="w-48 h-48 flex items-center justify-center">
                  <Loader size="lg" text="" />
                </div>
                <div className="text-center space-y-2">
                  <motion.h3 
                    key={loadingText}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-black text-slate-800 tracking-tight"
                  >
                    {loadingText}
                  </motion.h3>
                  <p className="text-muted-foreground font-medium">Please wait while we secure your slot...</p>
                </div>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center relative"
              >
                {/* Background success glow */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                  className="absolute top-10 w-64 h-64 bg-success/10 blur-[60px] rounded-full -z-10"
                />

                <motion.div 
                  initial={{ scale: 0, rotate: -180 }} 
                  animate={{ scale: 1, rotate: 0 }} 
                  transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
                  className="w-24 h-24 bg-linear-to-tr from-success to-emerald-600 rounded-4xl flex items-center justify-center mb-8 shadow-2xl shadow-success/30 transform rotate-3"
                >
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 className="h-12 w-12 text-white" />
                  </motion.div>
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="text-3xl font-black mb-3 bg-linear-to-r from-success to-emerald-600 bg-clip-text text-transparent"
                >
                  Booking Confirmed!
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                  className="text-slate-600 mb-8 font-medium text-lg px-4"
                >
                  Your request is secured. Our AI agent will contact you shortly!
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  className="w-full bg-white/50 backdrop-blur-md border border-slate-200/60 rounded-4xl p-6 mb-8 text-left space-y-4 shadow-xl shadow-slate-200/20"
                >
                  <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                    <span className="text-slate-500 font-medium">Tracking ID</span>
                    <span className="font-black text-brand bg-brand/10 px-3 py-1 rounded-lg text-sm tracking-wider">{bookingId}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                    <span className="text-slate-500 font-medium">Service</span>
                    <span className="font-bold text-slate-800 text-sm max-w-[60%] text-right">{serviceName}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                    <span className="text-slate-500 font-medium">Schedule</span>
                    <span className="font-bold text-slate-800 text-sm text-right bg-slate-100 px-3 py-1 rounded-lg">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Total Amount</span>
                    <span className="font-bold text-emerald-600 text-base">₹{getPriceDetails().finalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </motion.div>

                <div className="w-full max-h-65 overflow-y-auto pr-1.5 mb-6 border-b border-slate-100 pb-2 custom-scrollbar">
                  <NearestDealers 
                    targetCity={userLocation} 
                    address={formData.address} 
                    customerCoords={preciseCoords} 
                    assignedDealerId={assignedDealerId} 
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                  onClick={() => {
                     window.open(whatsappLink, '_blank');
                     resetAndClose();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-black text-lg py-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-all"
                >
                  <Phone className="h-6 w-6" /> Send via WhatsApp
                </motion.button>
                <button type="button" onClick={resetAndClose} className="mt-4 text-sm text-slate-500 font-medium hover:text-slate-800 transition-colors">
                  Close without sending
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
