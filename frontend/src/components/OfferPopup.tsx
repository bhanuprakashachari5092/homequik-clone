import { useState, useEffect, useRef } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { X, Gift, Copy, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SafeImage } from "@/hooks/useLocalSafeImage";


export function OfferPopup() {
  const [activeOffer, setActiveOffer] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const initialLoadRef = useRef(true);

  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "denied") {
      Notification.requestPermission();
    }

    const q = query(collection(db, "offers"), where("isActive", "==", true));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // Find the most recent active offer
      let latestOffer: any = null;
      
      snapshot.forEach(doc => {
         const data = doc.data();
         if (!latestOffer || (data.createdAt?.seconds > latestOffer.createdAt?.seconds)) {
            latestOffer = { id: doc.id, ...data };
         }
      });

      if (!initialLoadRef.current) {
         // Check for new additions
         snapshot.docChanges().forEach((change) => {
            if (change.type === "added" && change.doc.data().isActive) {
               const newOfferData: any = { id: change.doc.id, ...change.doc.data() };
               
               // Show Web Notification
               if (Notification.permission === "granted") {
                  new Notification("Vendor99 🎉 Festival Discount!", {
                     body: newOfferData.title,
                     icon: newOfferData.imageUrl || "/logo.png"
                  });
               }

               // Automatically show popup for the new offer
               setActiveOffer(newOfferData);
               setIsOpen(true);
            }
         });
      } else {
         initialLoadRef.current = false;
         
         // On initial load, check if we should show the latest offer
         if (latestOffer) {
            const dismissedOffers = JSON.parse(sessionStorage.getItem("dismissedOffers") || "[]");
            if (!dismissedOffers.includes(latestOffer.id)) {
               setActiveOffer(latestOffer);
               // Add a small delay so it doesn't pop up instantly on page load
               setTimeout(() => setIsOpen(true), 1500);
            }
         }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (activeOffer) {
       const dismissedOffers = JSON.parse(sessionStorage.getItem("dismissedOffers") || "[]");
       if (!dismissedOffers.includes(activeOffer.id)) {
          dismissedOffers.push(activeOffer.id);
          sessionStorage.setItem("dismissedOffers", JSON.stringify(dismissedOffers));
       }
    }
  };

  const handleCopyCode = () => {
     if (activeOffer?.discountCode) {
        navigator.clipboard.writeText(activeOffer.discountCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
     }
  };

  return (
    <AnimatePresence>
      {isOpen && activeOffer && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {activeOffer.imageUrl ? (
               <div className={`w-full relative ${activeOffer.imageSize ? activeOffer.imageSize.split(' ')[0] : 'h-48'}`}>
                  <SafeImage src={activeOffer.imageUrl} alt={activeOffer.title} className={`w-full h-full ${activeOffer.imageSize ? activeOffer.imageSize.split(' ').slice(1).join(' ') : 'object-cover'}`} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
               </div>
            ) : (
               <div className="h-32 w-full relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: activeOffer.themeColor || '#f97316' }}>
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                  <Gift className="h-16 w-16 text-white opacity-90" />
               </div>
            )}
            
            <button 
               onClick={handleClose}
               className="absolute top-4 right-4 h-8 w-8 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
               <X className="h-5 w-5" />
            </button>

            <div className="p-8 text-center">
               <div 
                  className="inline-block font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-4"
                  style={{ backgroundColor: `${activeOffer.themeColor || '#f97316'}1A`, color: activeOffer.themeColor || '#f97316' }}
               >
                  Limited Time Offer
               </div>
               <h3 className="text-2xl font-extrabold text-slate-800 mb-3">{activeOffer.title}</h3>
               <p className="text-slate-600 mb-8 leading-relaxed font-medium">{activeOffer.description}</p>
               
               {activeOffer.discountCode && (
                  <div className="mb-6">
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Use Promo Code</p>
                     <div className="flex items-center justify-between bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-2 pl-4">
                        <span className="font-mono font-bold text-lg text-slate-800 tracking-wider">{activeOffer.discountCode}</span>
                        <button 
                           onClick={handleCopyCode}
                           className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all text-white hover:brightness-110`}
                           style={copied ? { backgroundColor: '#10b981' } : { backgroundColor: activeOffer.themeColor || '#f97316' }}
                        >
                           {copied ? <><CheckCircle2 className="h-4 w-4" /> Copied!</> : <><Copy className="h-4 w-4" /> Copy</>}
                        </button>
                     </div>
                  </div>
               )}
               
               <button 
                  onClick={handleClose}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition-colors"
               >
                  Maybe Later
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
