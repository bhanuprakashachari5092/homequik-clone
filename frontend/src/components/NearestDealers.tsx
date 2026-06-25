import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { MapPin, Phone, Star, User, ShieldCheck, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useDistanceCalculator } from "@/hooks/useDistanceCalculator";

interface NearestDealersProps {
  targetCity?: string;
  address?: string;
  customerCoords?: { latitude: number; longitude: number } | null;
  assignedDealerId?: string | null;
}

export function NearestDealers({ targetCity, address, customerCoords, assignedDealerId }: NearestDealersProps) {
  const [dealers, setDealers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { getDistance } = useDistanceCalculator();

  const formatDistanceBoth = (meters: number): string => {
    if (meters >= 9999999) return "Distance N/A";
    const roundedMeters = Math.round(meters);
    const km = (meters / 1000).toFixed(2);
    return `${roundedMeters} m (${km} km)`;
  };

  useEffect(() => {
    async function fetchDealers() {
      try {
        const q = query(
          collection(db, "dealers"),
          where("status", "==", "Active")
        );
        const snapshot = await getDocs(q);
        const list: any[] = [];
        snapshot.forEach(doc => {
          list.push({ id: doc.id, ...doc.data() });
        });

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

        if (customerCoords) {
          const dealersWithDistance = await Promise.all(
            list.map(async (dealer) => {
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
                const dist = getDistance(customerCoords.latitude, customerCoords.longitude, dLat, dLng);
                return { ...dealer, distance: dist };
              }
              return { ...dealer, distance: 9999999 };
            })
          );

          // Sort by distance ascending
          dealersWithDistance.sort((a, b) => a.distance - b.distance);
          setDealers(dealersWithDistance.slice(0, 5));
        } else if (address || targetCity) {
          // Match algorithm: check if keywords in targetCity or address match dealer's city
          const cleanAddress = (address || "").toLowerCase();
          const cleanTargetCity = (targetCity || "").toLowerCase();

          const filtered = list.filter(dealer => {
            const dealerCity = (dealer.city || "").toLowerCase();
            const words = dealerCity.split(/[\s,]+/);
            // Match any word of length > 2
            return words.some((word: string) => 
              word.length > 2 && (cleanAddress.includes(word) || cleanTargetCity.includes(word))
            );
          });

          if (filtered.length > 0) {
            setDealers(filtered);
          } else {
            // Fallback: show first 3 active dealers
            setDealers(list.slice(0, 3));
          }
        } else {
          setDealers(list.slice(0, 3));
        }
      } catch (err) {
        console.error("Error fetching nearest dealers:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDealers();
  }, [targetCity, address, customerCoords]);

  if (loading) {
    return (
      <div className="py-8 text-center text-sm text-slate-500 font-medium animate-pulse flex items-center justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-brand animate-ping" />
        Locating nearest verified dealers...
      </div>
    );
  }

  if (dealers.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 text-left space-y-4 w-full">
      <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
        <div className="h-6 w-6 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
          <ShieldCheck className="h-4 w-4" />
        </div>
        <h4 className="font-extrabold text-slate-800 text-lg tracking-tight">Nearest Verified Partners</h4>
      </div>
      
      <div className="grid gap-4 w-full">
        {dealers.map((dealer, idx) => (
          <motion.div 
            key={dealer.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.01, y: -2 }}
            className={`border rounded-2xl p-5 transition-all shadow-sm hover:shadow-md flex flex-col justify-between ${
              assignedDealerId === dealer.id
                ? "bg-emerald-50/40 hover:bg-emerald-50/60 border-emerald-500/50 shadow-emerald-100"
                : "bg-slate-50/80 hover:bg-white border-slate-200/50"
            }`}
          >
            <div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h5 className="font-black text-slate-800 text-base leading-tight flex flex-wrap items-center gap-2">
                    {dealer.businessName || dealer.ownerName}
                    {assignedDealerId === dealer.id && (
                      <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white ring-1 ring-inset ring-emerald-600/10">
                        ⚡ Assigned Technician
                      </span>
                    )}
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">
                      ✓ Verified
                    </span>
                  </h5>
                  <p className="text-xs text-brand font-bold uppercase tracking-wider mt-1">{dealer.category || "CCTV & Security Solutions"}</p>
                  {dealer.distance !== undefined && (
                    <p className="text-xs font-bold text-indigo-600 mt-1 flex items-center gap-1">
                      <span>📍 Distance:</span>
                      <span>{formatDistanceBoth(dealer.distance)}</span>
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-xs font-black shrink-0">
                  <Star className="h-3.5 w-3.5 fill-current text-amber-500" /> 4.9
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-600 mt-4 border-t border-slate-200/40 pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                <span className="truncate">{dealer.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-slate-400 shrink-0" />
                <span className="truncate">Representative: {dealer.ownerName}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2 mt-2 w-full">
                <button
                  type="button"
                  onClick={() => {
                     const text = `Hi Vendor99, I want to connect with verified partner "${dealer.businessName || dealer.ownerName}" (${dealer.id}) for my service booking.`;
                     window.open(`https://wa.me/919141052539?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md hover:shadow-lg w-full justify-center cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 fill-current text-white shrink-0" />
                  <span>Connect via WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
