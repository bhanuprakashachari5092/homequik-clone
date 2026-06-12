import React from 'react';
import { useOffers } from '@/context/OfferContext';

interface DynamicPriceProps {
  originalPrice: string;
  category: string;
  className?: string;
  discountClassName?: string;
}

export function DynamicPrice({ originalPrice, category, className = "", discountClassName = "text-brand font-black" }: DynamicPriceProps) {
  const { getApplicableOffer } = useOffers();
  const offer = getApplicableOffer(category);

  if (!offer || !offer.discountValue) {
    return <span className={className}>{originalPrice}</span>;
  }

  // Parse the original price string. It could be something like:
  // "₹2,499 - ₹2,999" or "Starts at ₹5,499" or "₹1,100 - ₹1,600"
  
  const calculateDiscountedStr = (str: string) => {
    // Regex to match ₹ followed by numbers and commas
    const regex = /₹([\d,]+)/g;
    return str.replace(regex, (match, p1) => {
      const numStr = p1.replace(/,/g, '');
      const originalNum = parseInt(numStr, 10);
      if (isNaN(originalNum)) return match;

      let newNum = originalNum;
      if (offer.discountType === 'percentage') {
         newNum = originalNum - (originalNum * (offer.discountValue! / 100));
      } else {
         newNum = originalNum - offer.discountValue!;
         if (newNum < 0) newNum = 0;
      }
      
      return `₹${Math.round(newNum).toLocaleString('en-IN')}`;
    });
  };

  const discountedStr = calculateDiscountedStr(originalPrice);

  // If the parsing didn't change anything (e.g. "Custom Quote"), just return original
  if (discountedStr === originalPrice) {
     return <span className={className}>{originalPrice}</span>;
  }

  return (
    <div className={`flex flex-col sm:flex-row sm:items-center gap-1.5 ${className}`}>
      <strike className="text-slate-400 text-sm font-medium">{originalPrice}</strike>
      <span className={discountClassName}>{discountedStr}</span>
    </div>
  );
}
