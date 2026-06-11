import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { 
  Building2, User, Mail, Phone, MapPin, 
  Briefcase, CheckCircle2, ArrowRight, ShieldCheck, 
  CreditCard, Sparkles, ChevronRight, Check, AlertCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "@/context/LocationContext";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Dealer Onboarding — Vendor99" },
    ],
  }),
  component: PartnerPage,
});

const PLANS = [
  {
    id: "basic",
    name: "Basic Dealer",
    price: 999,
    description: "Perfect for getting started on Vendor99.",
    features: [
      "Dealer Profile",
      "Business Listing",
      "Contact Details Display",
      "Category Listing"
    ],
    color: "bg-slate-100 border-slate-200 text-slate-800",
    buttonColor: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    id: "growth",
    name: "Growth Dealer",
    price: 2999,
    description: "Accelerate your business with digital marketing.",
    features: [
      "Everything in Basic",
      "Digital Marketing",
      "Social Media Marketing",
      "Priority Listing"
    ],
    isPopular: true,
    color: "bg-brand/5 border-brand/20 text-slate-900",
    buttonColor: "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/30",
  },
  {
    id: "premium",
    name: "Premium Dealer",
    price: 4999,
    description: "Maximum visibility and priority support.",
    features: [
      "Everything in Growth",
      "Lead Generation",
      "Featured Placement",
      "Homepage Recommendation",
      "Priority Support"
    ],
    color: "bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 text-white",
    buttonColor: "bg-white hover:bg-slate-100 text-slate-900 shadow-xl",
    textColor: "text-slate-300",
    checkColor: "text-emerald-400"
  }
];

// Configuration
const USE_MOCK_PAYMENT = false; // Using real Razorpay payment

function PartnerPage() {
  const { location, isLocating, fetchDynamicLocation } = useLocation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    city: "",
    category: "CCTV & Security Solutions",
    experience: "0–2 Years"
  });

  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [transactionDetails, setTransactionDetails] = useState<any>(null);
  
  // Mock Payment UI State
  const [showMockPayment, setShowMockPayment] = useState(false);
  const [mockPaymentStatus, setMockPaymentStatus] = useState<"idle" | "processing" | "success" | "failure">("idle");

  useEffect(() => {
    if (location && location !== "Detecting...") {
      setFormData(prev => ({ ...prev, city: location }));
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (formData.businessName && formData.ownerName && formData.email && formData.phone && formData.city) {
        setStep(2);
      } else {
        alert("Please fill all required fields.");
      }
    } else if (step === 2) {
      if (selectedPlan) setStep(3);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const initiatePayment = async () => {
    if (USE_MOCK_PAYMENT) {
      setShowMockPayment(true);
      return;
    }

    setIsSubmitting(true);
    const res = await loadRazorpayScript();
    
    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      setIsSubmitting(false);
      return;
    }

    const options = {
      key: "rzp_live_T0FloreMRW0cEB",
      amount: selectedPlan.price * 100, // Amount in paise
      currency: "INR",
      name: "Vendor99",
      description: `Dealer Registration - ${selectedPlan.name}`,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Vendor99",
      handler: function (response: any) {
        handlePaymentSuccess("RZP_ORDER_SKIPPED", response.razorpay_payment_id);
      },
      prefill: {
        name: formData.ownerName,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#f97316", // Brand color
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.on("payment.failed", function (response: any) {
      alert("Payment failed: " + response.error.description);
      setIsSubmitting(false);
    });
    
    paymentObject.open();
    setIsSubmitting(false);
  };

  const handleMockPaymentAction = async (status: "success" | "failure") => {
    setMockPaymentStatus("processing");
    await new Promise(res => setTimeout(res, 2000));
    
    if (status === "success") {
      setMockPaymentStatus("success");
      await new Promise(res => setTimeout(res, 1000));
      setShowMockPayment(false);
      handlePaymentSuccess(`ORDER_${Math.floor(Math.random() * 1000000)}`, `TXN_${Math.floor(Math.random() * 1000000)}`);
    } else {
      setMockPaymentStatus("failure");
      await new Promise(res => setTimeout(res, 2000));
      setMockPaymentStatus("idle");
      setShowMockPayment(false);
    }
  };

  const handlePaymentSuccess = async (orderId: string, txnId: string) => {
    setIsSubmitting(true);
    
    const newDealerId = `DLR-${Math.floor(Math.random() * 1000000)}`;
    const dealerData = {
      ...formData,
      plan: selectedPlan.name,
      amount: selectedPlan.price,
      orderId: orderId,
      transactionId: txnId,
      paymentId: `PAY_${Math.floor(Math.random() * 1000000)}`, // From Cashfree webhook
      paymentDate: new Date().toISOString(),
      status: "Active"
    };

    try {
      // Save to Firebase Firestore
      try {
        await setDoc(doc(db, "dealers", newDealerId), dealerData);
        console.log("Saved dealer data to Firebase");
      } catch (dbErr: any) {
         console.error("Failed to save to Firebase:", dbErr);
         throw new Error("Failed to save to database. Check your Firestore rules.");
      }

      // Automatically trigger the Email Webhook
      try {
        // Wait for user to provide the Apps Script Web App URL
        const emailWebhookUrl = "YOUR_WEBHOOK_URL_HERE"; 
        if (emailWebhookUrl !== "YOUR_WEBHOOK_URL_HERE") {
          await fetch(emailWebhookUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ownerName: formData.ownerName,
              email: formData.email,
              dealerId: newDealerId,
              planName: selectedPlan.name
            })
          });
          console.log("Sent welcome email webhook");
        }
      } catch(e) {
        console.error("Failed to send welcome email webhook", e);
      }

      setTransactionDetails({
        id: newDealerId,
        txnId: txnId,
        plan: selectedPlan.name,
        amount: selectedPlan.price
      });
      setStep(4);
    } catch (error: any) {
      console.error("Error finalizing onboarding:", error);
      alert("Registration failed: " + (error.message || "Please contact support."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <div className="bg-[#f8fafc] min-h-screen py-12 font-sans relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-12">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-bold mb-4"
            >
               <Sparkles className="h-4 w-4" /> Join Vendor99 Network
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Dealer Registration
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Partner with Vendor99 to grow your business. Select a plan and start receiving premium leads today.
            </p>
          </div>

          {/* Stepper */}
          {step < 4 && (
             <div className="flex items-center justify-center mb-12 max-w-2xl mx-auto">
               {[
                 { num: 1, label: "Business Details" }, 
                 { num: 2, label: "Select Plan" }, 
                 { num: 3, label: "Payment" }
               ].map((s, idx, arr) => (
                  <div key={s.num} className="flex items-center w-full relative">
                     <div className="flex flex-col items-center relative z-10 w-full">
                        <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                           step > s.num ? 'bg-brand text-white shadow-md shadow-brand/30' : 
                           step === s.num ? 'bg-white border-2 border-brand text-brand shadow-lg' : 
                           'bg-slate-200 text-slate-500'
                        }`}>
                           {step > s.num ? <CheckCircle2 className="h-6 w-6" /> : s.num}
                        </div>
                        <span className={`text-xs md:text-sm font-bold mt-2 absolute -bottom-6 whitespace-nowrap ${step >= s.num ? 'text-slate-800' : 'text-slate-400'}`}>
                           {s.label}
                        </span>
                     </div>
                     {idx < arr.length - 1 && (
                        <div className="absolute top-6 left-[50%] w-full h-[2px] -z-10">
                           <div className={`h-full transition-all duration-500 ${step > s.num ? 'bg-brand' : 'bg-slate-200'}`} style={{ width: '100%' }} />
                        </div>
                     )}
                  </div>
               ))}
             </div>
          )}

          <AnimatePresence mode="wait">
            {/* STEP 1: REGISTRATION FORM */}
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 max-w-3xl mx-auto"
              >
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="bg-brand/10 p-3 rounded-2xl">
                    <Building2 className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-slate-800">Business Information</h2>
                     <p className="text-sm text-slate-500">Provide your primary contact and business details.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Briefcase className="h-4 w-4 text-slate-400"/> Business Name *</label>
                    <input name="businessName" value={formData.businessName} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all" placeholder="TechVision Security" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><User className="h-4 w-4 text-slate-400"/> Owner Name *</label>
                    <input name="ownerName" value={formData.ownerName} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Mail className="h-4 w-4 text-slate-400"/> Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all" placeholder="dealer@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Phone className="h-4 w-4 text-slate-400"/> Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-400"/> City / Location *</label>
                    <div className="relative">
                      <input name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all" placeholder="Hyderabad" />
                      <button 
                         type="button" 
                         onClick={() => fetchDynamicLocation(false)} 
                         disabled={isLocating}
                         className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold bg-brand/10 text-brand px-3 py-1.5 rounded-lg hover:bg-brand hover:text-white transition-colors"
                      >
                         {isLocating ? "Detecting..." : "Detect"}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Business Category *</label>
                    <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all font-medium text-slate-700">
                      <option>CCTV & Security Solutions</option>
                      <option>Home Construction</option>
                      <option>Interior Design</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Experience *</label>
                    <select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all font-medium text-slate-700">
                      <option>0–2 Years</option>
                      <option>2–5 Years</option>
                      <option>5–10 Years</option>
                      <option>10+ Years</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                   <button 
                      onClick={handleNextStep}
                      className="bg-brand hover:bg-brand-dark text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-brand/20 flex items-center gap-2 group"
                   >
                      Continue to Plans <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DEALER SUBSCRIPTION PLANS */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-6xl mx-auto"
              >
                <div className="text-center mb-8">
                   <h2 className="text-3xl font-bold text-slate-900">Choose Your Plan</h2>
                   <p className="text-slate-600 mt-2">Select the best subscription tier for your business growth.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                   {PLANS.map((plan) => (
                      <div 
                         key={plan.id}
                         onClick={() => setSelectedPlan(plan)}
                         className={`relative rounded-3xl p-8 border-2 transition-all cursor-pointer flex flex-col hover:-translate-y-2 hover:shadow-xl ${
                            selectedPlan?.id === plan.id 
                               ? 'border-brand ring-4 ring-brand/10 scale-[1.02]' 
                               : `${plan.color} ${plan.isPopular ? 'shadow-lg border-brand/30' : 'hover:border-slate-300'}`
                         }`}
                      >
                         {plan.isPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                               Most Popular
                            </div>
                         )}
                         <div className="mb-6">
                            <h3 className={`text-xl font-bold mb-2 ${plan.id === 'premium' ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                            <p className={`text-sm ${plan.textColor || 'text-slate-500'} h-10`}>{plan.description}</p>
                         </div>
                         <div className="mb-8">
                            <span className="text-4xl font-black">₹{plan.price}</span>
                            <span className={`text-sm font-medium ${plan.textColor || 'text-slate-500'}`}>/year</span>
                         </div>
                         <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, idx) => (
                               <li key={idx} className="flex items-start gap-3">
                                  <Check className={`h-5 w-5 shrink-0 ${plan.checkColor || 'text-brand'}`} />
                                  <span className={`text-sm font-medium ${plan.id === 'premium' ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                               </li>
                            ))}
                         </ul>
                         <button 
                            className={`w-full py-3.5 rounded-xl font-bold transition-all ${
                               selectedPlan?.id === plan.id 
                                  ? 'bg-brand text-white shadow-lg shadow-brand/30' 
                                  : plan.buttonColor
                            }`}
                         >
                            {selectedPlan?.id === plan.id ? 'Selected' : `Choose ${plan.name.split(' ')[0]}`}
                         </button>
                      </div>
                   ))}
                </div>

                <div className="mt-10 flex justify-between">
                   <button onClick={() => setStep(1)} className="text-slate-500 hover:text-slate-800 font-bold px-6 py-3 transition-colors">
                      Back to Details
                   </button>
                   <button 
                      onClick={handleNextStep}
                      disabled={!selectedPlan}
                      className="bg-brand hover:bg-brand-dark disabled:bg-slate-300 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-brand/20 flex items-center gap-2"
                   >
                      Proceed to Summary <ChevronRight className="h-5 w-5" />
                   </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: ORDER SUMMARY */}
            {step === 3 && selectedPlan && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40"
              >
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                  <div className="bg-slate-100 p-3 rounded-2xl">
                    <ShieldCheck className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold text-slate-800">Order Summary</h2>
                     <p className="text-sm text-slate-500">Review your details before payment.</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 space-y-4">
                   <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Business Name</p>
                         <p className="text-sm font-bold text-slate-800">{formData.businessName}</p>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Owner Name</p>
                         <p className="text-sm font-bold text-slate-800">{formData.ownerName}</p>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Category</p>
                         <p className="text-sm font-bold text-slate-800">{formData.category}</p>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                         <p className="text-sm font-bold text-slate-800">{formData.city}</p>
                      </div>
                   </div>

                   <div className="flex justify-between items-center pt-2">
                      <div>
                         <p className="text-sm font-bold text-brand bg-brand/10 px-3 py-1 rounded-full inline-block mb-1">{selectedPlan.name}</p>
                         <p className="text-xs text-slate-500">1 Year Subscription</p>
                      </div>
                      <div className="text-right">
                         <p className="text-xl font-black text-slate-900">₹{selectedPlan.price}</p>
                      </div>
                   </div>
                   
                   <div className="flex justify-between items-center text-sm text-slate-500 pt-2 border-t border-slate-200/50">
                      <p>GST (Included)</p>
                      <p>₹0</p>
                   </div>
                   <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                      <p className="font-bold text-slate-800">Total Amount</p>
                      <p className="text-2xl font-black text-brand">₹{selectedPlan.price}</p>
                   </div>
                </div>

                <div className="flex justify-between items-center">
                   <button onClick={() => setStep(2)} className="text-slate-500 hover:text-slate-800 font-bold px-4 py-3 transition-colors">
                      Back
                   </button>
                   <button 
                      onClick={initiatePayment}
                      disabled={isSubmitting}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2"
                   >
                      {isSubmitting ? "Processing..." : "Proceed to Payment"} <CreditCard className="h-5 w-5" />
                   </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS PAGE */}
            {step === 4 && transactionDetails && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-emerald-100 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                   <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>
                
                <h2 className="text-3xl font-black text-slate-900 mb-2">🎉 Registration Successful</h2>
                <p className="text-slate-600 mb-8 font-medium">Welcome to the Vendor99 Dealer Network. Your account is now Active.</p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto">
                   <div className="text-center mb-6 border-b border-slate-200 pb-6">
                      <p className="text-slate-500 text-sm mb-2 uppercase tracking-widest font-bold">Your Official Dealer ID</p>
                      <div className="text-4xl font-black text-brand tracking-widest bg-brand/10 inline-block px-6 py-3 rounded-2xl border border-brand/20 shadow-inner">{transactionDetails.id}</div>
                      <p className="text-xs text-slate-400 mt-3">An email has been sent to you with this ID.</p>
                   </div>
                   <div className="flex justify-between mb-3">
                      <span className="text-slate-500 text-sm">Plan Details</span>
                      <span className="font-bold text-slate-800">{transactionDetails.plan}</span>
                   </div>
                   <div className="flex justify-between mb-3">
                      <span className="text-slate-500 text-sm">Amount Paid</span>
                      <span className="font-bold text-slate-800">₹{transactionDetails.amount}</span>
                   </div>
                   <div className="flex justify-between pt-3 border-t border-slate-200">
                      <span className="text-slate-500 text-sm">Transaction ID</span>
                      <span className="font-mono text-xs font-bold text-slate-700 bg-slate-200 px-2 py-1 rounded">{transactionDetails.txnId}</span>
                   </div>
                </div>

                <div className="flex justify-center gap-4">
                   <Link to="/" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-6 rounded-xl transition-all">
                      View Profile
                   </Link>
                   <Link to="/dealer-portal" className="bg-brand hover:bg-brand-dark text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md">
                      Go To Dashboard
                   </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mock Payment Overlay */}
          <AnimatePresence>
             {showMockPayment && (
                <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                   className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                   <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                      className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
                   >
                      <div className="bg-slate-900 p-6 text-white text-center">
                         <div className="flex items-center justify-center gap-2 mb-2">
                            <ShieldCheck className="h-6 w-6 text-emerald-400" />
                            <span className="font-bold text-lg tracking-widest">CASHFREE PAYMENTS</span>
                         </div>
                         <p className="text-slate-400 text-sm">Mock Checkout Environment</p>
                      </div>
                      
                      <div className="p-8 text-center">
                         {mockPaymentStatus === "idle" && (
                            <>
                               <p className="text-2xl font-black text-slate-900 mb-2">₹{selectedPlan?.price}</p>
                               <p className="text-sm text-slate-500 mb-8">Pay securely for {selectedPlan?.name}</p>
                               
                               <div className="space-y-3">
                                  <button onClick={() => handleMockPaymentAction("success")} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-colors">
                                     Simulate Successful Payment
                                  </button>
                                  <button onClick={() => handleMockPaymentAction("failure")} className="w-full bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold py-3.5 rounded-xl transition-colors">
                                     Simulate Payment Failure
                                  </button>
                                  <button onClick={() => setShowMockPayment(false)} className="w-full text-slate-400 hover:text-slate-600 font-bold py-3.5 transition-colors text-sm">
                                     Cancel Checkout
                                  </button>
                               </div>
                            </>
                         )}

                         {mockPaymentStatus === "processing" && (
                            <div className="py-12">
                               <div className="w-12 h-12 border-4 border-slate-200 border-t-brand rounded-full animate-spin mx-auto mb-4"></div>
                               <p className="font-bold text-slate-600">Processing Payment...</p>
                            </div>
                         )}

                         {mockPaymentStatus === "success" && (
                            <div className="py-12 text-emerald-600">
                               <CheckCircle2 className="h-16 w-16 mx-auto mb-4" />
                               <p className="font-bold text-xl">Payment Successful!</p>
                            </div>
                         )}

                         {mockPaymentStatus === "failure" && (
                            <div className="py-12 text-rose-600">
                               <AlertCircle className="h-16 w-16 mx-auto mb-4" />
                               <p className="font-bold text-xl">Payment Failed</p>
                            </div>
                         )}
                      </div>
                   </motion.div>
                </motion.div>
             )}
          </AnimatePresence>

        </div>
      </div>
    </SiteLayout>
  );
}
