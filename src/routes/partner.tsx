import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Building2, UserPlus, CheckCircle2, ArrowLeft, ShieldCheck, QrCode, UploadCloud, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useLocation } from "@/context/LocationContext";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Dealer Registration — Vendor99" },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  const { location, isLocating, fetchDynamicLocation } = useLocation();
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoVerifiedStatus, setAutoVerifiedStatus] = useState(false);

  // Form State
  const [businessName, setBusinessName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [expertise, setExpertise] = useState("CCTV Dealer & Installer");
  const [experience, setExperience] = useState("0-2 Years");

  useEffect(() => {
    if (location && location !== "Detecting..." && !city) {
      setCity(location);
    }
  }, [location]);

  const handleNextStep = () => {
    if (step === 1 && agreed) setStep(2);
    else if (step === 2 && businessName && contactPerson && phoneNumber && email && password && confirmPassword && city) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!utrNumber && !screenshot) {
      alert("Please enter the UTR number or upload a payment screenshot.");
      return;
    }

    setIsSubmitting(true);
    let autoVerified = false;

    try {

      await addDoc(collection(db, "dealers"), {
        name: businessName,
        contact: contactPerson,
        phone: phoneNumber,
        email: email,
        password: password,
        city: city,
        expertise: expertise,
        experience: experience,
        status: "Pending",
        paymentStatus: "Pending Verification",
        agreedToRules: agreed,
        createdAt: serverTimestamp()
      });
      setStep(4);
    } catch (error: any) {
      console.error("Error submitting registration:", error);
      alert("Registration failed: " + (error.message || "Something went wrong. Please check your connection and try again."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <div className="bg-[#f0f4f8] min-h-screen py-10 font-sans">
        <div className="max-w-4xl mx-auto px-6 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
              Dealer Registration
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Join the Vendor99 network in 3 easy steps.
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((s) => (
               <div key={s} className="flex items-center">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-brand text-white shadow-md shadow-brand/30' : 'bg-slate-200 text-slate-500'}`}>
                     {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
                  </div>
                  {s < 3 && <div className={`h-1 w-12 sm:w-24 mx-2 rounded-full ${step > s ? 'bg-brand' : 'bg-slate-200'}`} />}
               </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden">
             
             {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="bg-brand/10 p-3 rounded-xl">
                         <ShieldCheck className="h-8 w-8 text-brand" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">Rules & Regulations</h2>
                   </div>
                   
                   <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl h-64 overflow-y-auto text-slate-700 space-y-4 text-sm leading-relaxed mb-6">
                      <p><strong>1. Code of Conduct:</strong> Dealers must maintain a professional attitude when interacting with customers assigned through Vendor99.</p>
                      <p><strong>2. Pricing Policy:</strong> You agree not to overcharge customers. All wholesale equipment purchased via Vendor99 must be sold at the agreed-upon margin.</p>
                      <p><strong>3. Registration Fee:</strong> A one-time non-refundable registration and verification fee of ₹1 is required to activate your account and background check.</p>
                      <p><strong>4. Verification Process:</strong> Upon payment, our team will verify your UTR and business details within 24-48 hours. If rejected for compliance issues, the fee will not be refunded.</p>
                      <p><strong>5. Quality of Work:</strong> Continuous poor ratings from customers will result in permanent suspension from the Dealer Network.</p>
                   </div>

                   <div className="flex items-center gap-3 mb-8">
                      <input 
                         type="checkbox" 
                         id="agree" 
                         checked={agreed} 
                         onChange={(e) => setAgreed(e.target.checked)}
                         className="h-5 w-5 rounded text-brand focus:ring-brand border-slate-300"
                      />
                      <label htmlFor="agree" className="font-bold text-slate-700 cursor-pointer select-none">
                         I have read and agree to the Vendor99 Dealer Terms & Conditions
                      </label>
                   </div>

                   <button 
                      onClick={handleNextStep}
                      disabled={!agreed}
                      className="w-full bg-brand hover:bg-brand-dark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                   >
                      Proceed to Details <ArrowLeft className="h-5 w-5 rotate-180" />
                   </button>
                </div>
             )}

             {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="bg-brand/10 p-3 rounded-xl">
                         <Building2 className="h-8 w-8 text-brand" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">Business Details</h2>
                   </div>

                   <div className="grid md:grid-cols-2 gap-6 mb-8">
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Business/Shop Name *</label>
                       <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="TechVision Security" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Contact Person *</label>
                       <input type="text" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Your Name" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                       <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="+91 98765 43210" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Email Address *</label>
                       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="dealer@example.com" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Password *</label>
                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Create a password" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Confirm Password *</label>
                       <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Confirm your password" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">City / District *</label>
                       <div className="relative">
                         <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Hyderabad" />
                         <button 
                            type="button" 
                            onClick={async () => {
                               if (location && location !== "Detecting...") {
                                  setCity(location);
                               } else {
                                  await fetchDynamicLocation(false);
                               }
                            }} 
                            disabled={isLocating}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold bg-brand/10 text-brand px-3 py-1.5 rounded-lg hover:bg-brand hover:text-white transition-colors disabled:opacity-50"
                         >
                            {isLocating ? "Detecting..." : "Detect"}
                         </button>
                       </div>
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Primary Expertise</label>
                       <select value={expertise} onChange={(e) => setExpertise(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand">
                         <option>CCTV Surveillance</option>
                         <option>Smart Home Automation</option>
                         <option>Electrical Works</option>
                       </select>
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Experience</label>
                       <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand">
                         <option>0-2 Years</option>
                         <option>3-5 Years</option>
                         <option>5+ Years</option>
                       </select>
                     </div>
                   </div>

                    <div className="flex gap-4 mt-6">
                       <button onClick={() => setStep(1)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-xl transition-all">Back</button>
                       <button onClick={handleNextStep} disabled={!businessName || !contactPerson || !phoneNumber || !email || !password || !confirmPassword || !city} className="flex-[2] bg-brand hover:bg-brand-dark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all">Proceed to Payment</button>
                    </div>
                </div>
             )}

             {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="bg-brand/10 p-3 rounded-xl">
                         <QrCode className="h-8 w-8 text-brand" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800">Verification Payment</h2>
                   </div>

                   <div className="flex flex-col items-center justify-center mb-8 text-center">
                      <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl max-w-lg mb-6">
                         <h3 className="text-xl font-bold text-slate-800 mb-2">Registration Fee</h3>
                         <p className="text-3xl font-black text-brand mb-2">₹999</p>
                         <p className="text-sm text-slate-600">Secure one-time payment for lifetime dealer access.</p>
                      </div>
                   </div>

                   <form onSubmit={handleSubmit} className="flex gap-4 pt-4 border-t border-slate-100">
                      <button type="button" onClick={() => setStep(2)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-xl transition-all">Back</button>
                      <button type="submit" disabled={isSubmitting} className="flex-[2] bg-brand hover:bg-brand-dark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20">
                         {isSubmitting ? "Processing..." : "Pay ₹999 & Register"}
                      </button>
                   </form>
                </div>
             )}

             {step === 4 && (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                   <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-6 shadow-xl shadow-emerald-100">
                      <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                   </div>
                   <h2 className="text-3xl font-extrabold text-slate-800 mb-4">
                      {autoVerifiedStatus ? "Payment Verified Successfully!" : "Successfully Registered!"}
                   </h2>
                   <p className="text-lg text-slate-600 max-w-md mx-auto mb-8">
                      {autoVerifiedStatus 
                        ? "Your payment screenshot was automatically verified! Your dealer account is now Active and listed on the Vendor99 network."
                        : "We have received your details. Our team will verify the payment and activate your dealer account within 24 hours."
                      }
                   </p>
                   <Link to="/dealer-portal" className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md">
                      Go to Partner Portal
                   </Link>
                </div>
             )}

          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
