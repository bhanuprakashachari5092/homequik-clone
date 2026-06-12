import { useState } from "react";
import { useOffers } from "@/context/OfferContext";
import { Tag, CheckCircle2, X } from "lucide-react";

export function CouponBar() {
  const { appliedCoupon, applyCoupon, removeCoupon } = useOffers();
  const [code, setCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  if (appliedCoupon) {
    return (
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shadow-lg px-4 py-3 rounded-2xl">
        <div className="bg-emerald-100 text-emerald-600 p-2 rounded-full">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-emerald-700 font-semibold uppercase">Coupon Applied</p>
          <p className="text-sm font-bold text-emerald-900 dark:text-emerald-400 tracking-wider">{appliedCoupon}</p>
        </div>
        <button 
          onClick={removeCoupon} 
          className="ml-2 text-emerald-600 hover:bg-emerald-200 p-1.5 rounded-full transition-colors"
          title="Remove Coupon"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {isOpen && (
        <div className="bg-white dark:bg-card border border-border shadow-xl p-3 rounded-2xl animate-in slide-in-from-bottom-2 flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Enter promo code" 
            value={code} 
            onChange={(e) => setCode(e.target.value)}
            className="bg-secondary/50 border border-border outline-none rounded-lg px-3 py-2 text-sm w-40 focus:border-brand focus:ring-1 focus:ring-brand"
            autoFocus
          />
          <button 
            onClick={() => {
              if (code) {
                const success = applyCoupon(code);
                if (success) {
                  setIsOpen(false);
                  setCode("");
                }
              }
            }}
            className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
          >
            Apply
          </button>
          <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground p-1">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white dark:bg-card border border-border shadow-lg hover:shadow-xl px-4 py-3 rounded-2xl flex items-center gap-2 text-sm font-bold transition-all hover:scale-105"
        >
          <Tag className="h-4 w-4 text-brand" />
          <span>Have a Promo Code?</span>
        </button>
      )}
    </div>
  );
}
