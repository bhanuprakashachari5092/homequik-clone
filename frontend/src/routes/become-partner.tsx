import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Building2, UserPlus, CheckCircle2, ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/become-partner")({
  head: () => ({
    meta: [
      { title: "Become a Partner — Vendor99" },
      { name: "description", content: "Join India's fastest growing network of professionals." },
    ],
  }),
  component: BecomePartnerPage,
});

function BecomePartnerPage() {
  const [businessName, setBusinessName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [expertise, setExpertise] = useState("System Integrator");
  const [experience, setExperience] = useState("0-2 Years");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const WHATSAPP_NUMBER = "919141052539";
    const text = `*New Partner Application*\n\n*Business Name:* ${businessName}\n*Contact Person:* ${contactPerson}\n*Phone:* ${phoneNumber}\n*City/Pincode:* ${city}\n*Expertise:* ${expertise}\n*Experience:* ${experience}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <SiteLayout>
      <div className="bg-[#f0f4f8] min-h-screen py-10 font-sans">
        <div className="max-w-6xl mx-auto px-6 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
              Grow Your Business With Us
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Join India's largest network of tech professionals. Get verified leads, manage bookings, and increase your revenue.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-8">
               <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50">
                  <div className="bg-brand/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                     <Building2 className="h-8 w-8 text-brand" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Why Partner with Vendor99?</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                     We bring customers directly to you. No marketing spend required. Focus on what you do best—delivering quality service.
                  </p>
                  <ul className="space-y-4">

                     <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-brand shrink-0 mt-0.5" />
                        <div>
                           <span className="font-bold text-slate-800 block">Wholesale Equipment</span>
                           <span className="text-sm text-slate-500">Access our inventory at exclusive B2B prices.</span>
                        </div>
                     </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-brand shrink-0 mt-0.5" />
                        <div>
                           <span className="font-bold text-slate-800 block">Brand Trust</span>
                           <span className="text-sm text-slate-500">Leverage the Vendor99 brand for higher conversion rates.</span>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
               <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-800">Partner Application Form</h3>
                  <p className="text-slate-500 text-sm mt-1">Fill out the form below and our team will contact you. No registration fee required.</p>
               </div>
               
               <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Business Name</label>
                      <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="TechVision Security" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Contact Person</label>
                      <input type="text" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="John Doe" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">City / Pincode</label>
                      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="500081" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Primary Expertise</label>
                    <select value={expertise} onChange={(e) => setExpertise(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all appearance-none font-medium text-slate-700">
                      <option>System Integrator</option>
                      <option>Freelance Technician</option>
                      <option>Distributor</option>
                      <option>Other Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Years of Experience</label>
                    <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all appearance-none font-medium text-slate-700">
                      <option>0-2 Years</option>
                      <option>3-5 Years</option>
                      <option>5-10 Years</option>
                      <option>10+ Years</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md mt-4">
                    Send via WhatsApp <UserPlus className="h-5 w-5" />
                  </button>
               </form>
            </div>

          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
