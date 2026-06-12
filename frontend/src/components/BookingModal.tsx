import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, MapPin, Calendar, Clock, CheckCircle2, Loader2, FileText } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { useOffers } from "@/context/OfferContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  selectedItems?: string[];
}

export function BookingModal({ isOpen, onClose, serviceName, selectedItems = [] }: BookingModalProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { getApplicableOffer } = useOffers();
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

      const bookingData = {
        bookingId: generatedId,
        customerName: formData.fullName,
        customerPhone: formData.phone,
        customerAddress: formData.address,
        serviceName: serviceName,
        selectedItems: selectedItems,
        bookingDate: formData.date,
        bookingTime: formData.time,
        notes: formData.notes,
        amount: calculatedAmount > 0 ? `₹${calculatedAmount.toLocaleString('en-IN')}` : "₹0",
        numericAmount: calculatedAmount,
        status: "Pending",
        createdAt: serverTimestamp()
      };

      // 1. Save to Google Sheets
      try {
        await fetch("https://script.google.com/macros/s/AKfycbxcEHZaSWkogoxOp6PNL0VhLVTNw0X11YEDekRNmCFobqWhL5V4HfMaB9SKTay6DXkK/exec", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        });
        console.log("Sent to Google Sheets");
      } catch (err) {
        console.error("Error saving to Google Sheets:", err);
      }

      // 2. Save to Firebase (Admin Dashboard uses this)
      const docRef = await addDoc(collection(db, "bookings"), bookingData);

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

      // Show success animation before requiring WhatsApp click
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
    setStep("form");
    const today = new Date();
    setFormData({ 
      fullName: "", phone: "", address: "", 
      date: today.toLocaleDateString('en-CA'), 
      time: today.toTimeString().split(' ')[0].substring(0, 5), 
      notes: "" 
    });
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
          className="bg-white rounded-[2rem] shadow-premium w-full max-w-lg overflow-hidden relative"
        >
          {/* Header */}
          <div className="bg-gradient-premium p-6 text-white relative">
            <button 
              onClick={resetAndClose}
              className="absolute top-4 right-4 h-8 w-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold tracking-tight">Book Service</h2>
            <p className="text-white/80 text-sm mt-1">{serviceName}</p>
          </div>

          <div className="p-6">
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
                            Discount {offer?.discountCode ? `(${offer.discountCode})` : `(${offer?.title || 'Offer'})`}:
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
                  className="w-24 h-24 bg-gradient-to-tr from-success to-emerald-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-success/30 transform rotate-3"
                >
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 className="h-12 w-12 text-white" />
                  </motion.div>
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="text-3xl font-black mb-3 bg-gradient-to-r from-success to-emerald-600 bg-clip-text text-transparent"
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
                  className="w-full bg-white/50 backdrop-blur-md border border-slate-200/60 rounded-[2rem] p-6 mb-8 text-left space-y-4 shadow-xl shadow-slate-200/20"
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
