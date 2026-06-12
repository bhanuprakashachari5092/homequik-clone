import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { toast } from "sonner";

export interface Offer {
  id: string;
  title: string;
  description: string;
  discountCode?: string;
  imageUrl?: string;
  isActive: boolean;
  themeColor?: string;
  borderStyle?: string;
  imageSize?: string;
  validityEnd?: string;
  targetCategory?: string;
  discountType?: 'percentage' | 'flat';
  discountValue?: number;
  createdAt?: any;
}

interface OfferContextType {
  offers: Offer[];
  getApplicableOffer: (category: string) => Offer | null;
  appliedCoupon: string;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
}

const OfferContext = createContext<OfferContextType | null>(null);

export const OfferProvider = ({ children }: { children: React.ReactNode }) => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<string>("");

  useEffect(() => {
    const q = query(collection(db, "offers"), where("isActive", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedOffers: Offer[] = [];
      const now = new Date();
      
      snapshot.forEach(doc => {
        const data = doc.data() as Offer;
        // Check validity end date if it exists
        if (data.validityEnd) {
           const endDate = new Date(data.validityEnd);
           if (endDate < now) return; // Skip expired offers
        }
        fetchedOffers.push({ ...data, id: doc.id });
      });
      
      setOffers(fetchedOffers);
    });

    return () => unsubscribe();
  }, []);

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    console.log("Attempting to apply coupon code:", cleanCode);
    console.log("Current active offers loaded in context:", offers);
    const couponOffer = offers.find(o => o.discountCode?.trim().toUpperCase() === cleanCode);
    if (couponOffer) {
      setAppliedCoupon(cleanCode);
      toast.success(`Coupon ${cleanCode} applied successfully!`);
      return true;
    }
    toast.error("Invalid or expired coupon code.");
    return false;
  };

  const removeCoupon = () => {
    setAppliedCoupon("");
    toast.info("Coupon removed.");
  };

  const getApplicableOffer = (category: string): Offer | null => {
    // 1. If user typed a coupon, prioritize it
    if (appliedCoupon) {
       const couponOffer = offers.find(o => o.discountCode?.toUpperCase() === appliedCoupon && (o.targetCategory === category || o.targetCategory === "All" || !o.targetCategory));
       if (couponOffer) return couponOffer;
    }
    
    // 2. Fallback to automatic offers (offers without a discountCode)
    const specificOffer = offers.find(o => o.targetCategory === category && (!o.discountCode || o.discountCode.trim() === ""));
    if (specificOffer) return specificOffer;
    
    const generalOffer = offers.find(o => (o.targetCategory === "All" || !o.targetCategory) && (!o.discountCode || o.discountCode.trim() === ""));
    return generalOffer || null;
  };

  return (
    <OfferContext.Provider value={{ offers, getApplicableOffer, appliedCoupon, applyCoupon, removeCoupon }}>
      {children}
    </OfferContext.Provider>
  );
};

export const useOffers = () => {
  const context = useContext(OfferContext);
  if (!context) throw new Error("useOffers must be used within an OfferProvider");
  return context;
};
