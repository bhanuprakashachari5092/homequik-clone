import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { 
  Building2, CheckCircle2, ArrowLeft, 
  Crown, ShieldCheck, Zap, CreditCard, ChevronRight, Check
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/become-partner")({
  head: () => ({
    meta: [
      { title: "Become a Partner — Vendor99" },
      { name: "description", content: "Join India's fastest growing network of professionals." },
    ],
  }),
  component: BecomePartnerPage,
});

const PLANS = [
  {
    id: "basic",
    name: "Basic Dealer",
    price: 999,
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    popular: false,
    features: [
      "Dealer Profile",
      "Business Listing",
      "Contact Details Display",
      "Category Listing"
    ]
  },
  {
    id: "growth",
    name: "Growth Dealer",
    price: 2999,
    icon: Zap,
    color: "text-brand",
    bg: "bg-brand/10",
    border: "border-brand/20",
    popular: true,
    features: [
      "Everything in Basic",
      "Digital Marketing",
      "Social Media Marketing",
      "Priority Listing"
    ]
  },
  {
    id: "premium",
    name: "Premium Dealer",
    price: 4999,
    icon: Crown,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    popular: false,
    features: [
      "Everything in Growth",
      "Lead Generation",
      "Featured Placement",
      "Homepage Recommendation",
      "Priority Support"
    ]
  }
];

function BecomePartnerPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth");
  const [transactionId, setTransactionId] = useState("");

  // Load Cashfree JS
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); }
  }, []);

  const selectedPlan = PLANS.find(p => p.id === selectedPlanId);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePayment = async () => {
    setLoading(true);
    setError("");
    
    try {
      // 1. Call Firebase function to create Cashfree Order
      // const createOrderFn = httpsCallable(functions, 'createCashfreeOrder');
      // const orderResult = await createOrderFn({ amount: selectedPlan?.price, customer_phone: formData.phone, customer_email: formData.email });
      // const paymentSessionId = orderResult.data.payment_session_id;

      // Mocking payment for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockOrderId = "ORDER_" + Math.random().toString(36).substring(7).toUpperCase();
      const mockPaymentId = "PAY_" + Math.random().toString(36).substring(7).toUpperCase();

      // 2. Save data to Firestore (mock successful payment)
      const dealerId = "DLR-" + Math.floor(1000 + Math.random() * 9000);
      
      await setDoc(doc(db, "dealers", dealerId), {
        id: dealerId,
        ...formData,
        plan: selectedPlan?.name,
        amount: selectedPlan?.price,
        orderId: mockOrderId,
        paymentId: mockPaymentId,
        transactionId: mockPaymentId,
        paymentDate: new Date().toISOString(),
        status: "Active"
      });

      // 3. Call Firebase function to sync to Google Sheets
      // await httpsCallable(functions, 'syncToGoogleSheets')({ dealerId });

      setTransactionId(mockPaymentId);
      setStep(5);
    } catch (err: any) {
      setError(err.message || "Payment verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <div className="bg-[#f0f4f8] min-h-screen py-10 font-sans relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
              Join Vendor99 Dealer Network
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Get verified leads, premium listings, and priority support.
            </p>
          </div>

          <div className="flex justify-center mb-8">
             <div className="flex items-center gap-2 md:gap-4 text-sm font-bold">
                <span className={`px-4 py-2 rounded-full border ${step >= 1 ? 'bg-brand text-white border-brand' : 'bg-white text-slate-400 border-slate-200'}`}>1. Details</span>
                <span className="w-8 h-px bg-slate-300"></span>
                <span className={`px-4 py-2 rounded-full border ${step >= 2 ? 'bg-brand text-white border-brand' : 'bg-white text-slate-400 border-slate-200'}`}>2. Plan</span>
                <span className="w-8 h-px bg-slate-300"></span>
                <span className={`px-4 py-2 rounded-full border ${step >= 3 ? 'bg-brand text-white border-brand' : 'bg-white text-slate-400 border-slate-200'}`}>3. Checkout</span>
             </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white"
              >
                <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                  <div className="bg-brand/10 p-4 rounded-2xl">
                    <Building2 className="h-8 w-8 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Business Details</h3>
                    <p className="text-slate-500 font-medium">Tell us about your business</p>
                  </div>
                </div>

                <form onSubmit={handleNextStep} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Name *</label>
                      <input required type="text" value={formData.businessName} onChange={(e) => setFormData({...formData, businessName: e.target.value})} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all" placeholder="Enter business name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Owner Name *</label>
                      <input required type="text" value={formData.ownerName} onChange={(e) => setFormData({...formData, ownerName: e.target.value})} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all" placeholder="Enter owner name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                      <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all" placeholder="you@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                      <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all" placeholder="+91 00000 00000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">City / Location *</label>
                    <input required type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all" placeholder="Enter city" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Category *</label>
                      <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all">
                        <option>CCTV & Security Solutions</option>
                        <option>Home Construction</option>
                        <option>Interior Design</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience *</label>
                      <select value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all">
                        <option>0–2 Years</option>
                        <option>2–5 Years</option>
                        <option>5–10 Years</option>
                        <option>10+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button type="submit" className="bg-brand text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 hover:bg-brand-dark transition-all shadow-md">
                      Continue to Plans <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              >
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {PLANS.map((plan) => (
                    <div 
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`relative bg-white rounded-3xl p-8 border-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                        selectedPlanId === plan.id ? `border-brand shadow-xl ring-4 ring-brand/10` : `border-slate-100 shadow-sm hover:shadow-lg`
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                          Most Popular
                        </div>
                      )}
                      
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.bg}`}>
                        <plan.icon className={`h-7 w-7 ${plan.color}`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-800">{plan.name}</h3>
                      <div className="mt-4 mb-6 flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-slate-900">₹{plan.price}</span>
                        <span className="text-slate-500 font-medium">/year</span>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                            <span className="text-slate-600 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`w-full py-3.5 rounded-xl text-center font-bold transition-all ${
                        selectedPlanId === plan.id 
                          ? 'bg-brand text-white shadow-md' 
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}>
                        Choose {plan.name.split(' ')[0]}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="max-w-6xl mx-auto mt-10 flex justify-between items-center bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white">
                   <button onClick={() => setStep(1)} className="text-slate-500 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors">
                     Back
                   </button>
                   <button onClick={() => setStep(3)} className="bg-slate-900 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-md flex items-center gap-2">
                     Review Order <ChevronRight className="h-5 w-5" />
                   </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white"
              >
                <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                  <div className="bg-slate-900 p-4 rounded-2xl">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Order Summary</h3>
                    <p className="text-slate-500 font-medium">Review your details before payment</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <div className="flex justify-between border-b border-slate-200 pb-4">
                      <span className="text-slate-500 font-medium">Business Name</span>
                      <span className="font-bold text-slate-800">{formData.businessName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-4">
                      <span className="text-slate-500 font-medium">Owner Name</span>
                      <span className="font-bold text-slate-800">{formData.ownerName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-4">
                      <span className="text-slate-500 font-medium">Category</span>
                      <span className="font-bold text-slate-800">{formData.category}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-slate-500 font-medium">Location</span>
                      <span className="font-bold text-slate-800">{formData.city}</span>
                    </div>
                  </div>

                  <div className="bg-brand/5 p-6 rounded-2xl border border-brand/20">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-slate-800 text-lg">Selected Plan</span>
                      <span className="bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">{selectedPlan?.name}</span>
                    </div>
                    <div className="space-y-3">
                       <div className="flex justify-between">
                         <span className="text-slate-600">Amount</span>
                         <span className="font-bold text-slate-800">₹{selectedPlan?.price}</span>
                       </div>
                       <div className="flex justify-between">
                         <span className="text-slate-600">GST (0%)</span>
                         <span className="font-bold text-slate-800">₹0</span>
                       </div>
                       <div className="flex justify-between border-t border-brand/10 pt-3 mt-3">
                         <span className="font-bold text-slate-800 text-lg">Total Payable</span>
                         <span className="font-extrabold text-brand text-2xl">₹{selectedPlan?.price}</span>
                       </div>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl font-bold text-sm border border-red-100">
                    {error}
                  </div>
                )}

                <div className="flex justify-between items-center">
                   <button disabled={loading} onClick={() => setStep(2)} className="text-slate-500 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors disabled:opacity-50">
                     Back
                   </button>
                   <button disabled={loading} onClick={handlePayment} className="bg-brand text-white font-bold px-8 py-4 rounded-2xl hover:bg-brand-dark transition-all shadow-md flex items-center gap-2 disabled:opacity-70">
                     {loading ? <Loader size="xs" text="Processing..." /> : "Proceed to Payment"}
                   </button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-50 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-4 border-white">
                    <Check className="h-10 w-10 text-emerald-600" strokeWidth={3} />
                  </div>
                  
                  <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Registration Successful</h2>
                  <p className="text-slate-500 font-medium mb-8">Welcome to Vendor99 Dealer Network. Your Dealer Account has been Activated.</p>

                  <div className="bg-slate-50 rounded-2xl p-5 mb-8 text-left space-y-3 border border-slate-100">
                    <div className="flex justify-between">
                      <span className="text-slate-500 text-sm font-medium">Plan</span>
                      <span className="font-bold text-slate-800 text-sm">{selectedPlan?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 text-sm font-medium">Amount Paid</span>
                      <span className="font-bold text-slate-800 text-sm">₹{selectedPlan?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 text-sm font-medium">Transaction ID</span>
                      <span className="font-mono font-bold text-slate-800 text-sm bg-white px-2 py-0.5 rounded border border-slate-200">{transactionId}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button onClick={() => router.navigate({ to: "/dealer-portal" })} className="w-full bg-brand text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-brand-dark transition-all">
                      Go To Dashboard
                    </button>
                    <button onClick={() => router.navigate({ to: "/" })} className="w-full bg-white text-slate-600 border border-slate-200 font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-all">
                      View Homepage
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SiteLayout>
  );
}
