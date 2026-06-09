import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Send, FileText, CheckCircle2, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get Free Quote — Vendor99" },
      {
        name: "description",
        content: "Request a free quote for CCTV installation, biometrics, and security solutions.",
      },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <SiteLayout>
      <div className="bg-[#f8fafc] min-h-screen py-10 font-sans">
        <div className="max-w-4xl mx-auto px-6 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-brand/10 rounded-full mb-4">
              <FileText className="h-8 w-8 text-brand" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
              Get a Free Quote
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Tell us about your requirements, and our experts will get back to you with a customized estimate within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-[#1e293b] p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex gap-3"><CheckCircle2 className="h-6 w-6 text-brand shrink-0" /> Wholesale Prices</li>
                    <li className="flex gap-3"><CheckCircle2 className="h-6 w-6 text-brand shrink-0" /> Verified Installers</li>
                    <li className="flex gap-3"><CheckCircle2 className="h-6 w-6 text-brand shrink-0" /> 1 Year Warranty</li>
                    <li className="flex gap-3"><CheckCircle2 className="h-6 w-6 text-brand shrink-0" /> Dedicated Support</li>
                  </ul>
                </div>
                <div className="mt-12">
                  <p className="text-sm text-slate-400">Need immediate help?</p>
                  <p className="text-xl font-bold mt-1">+91 91410 52439</p>
                </div>
              </div>

              <div className="md:col-span-3 p-10">
                <form 
                  className="space-y-6" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const fname = formData.get('fname') as string;
                    const lname = formData.get('lname') as string;
                    const phone = formData.get('phone') as string;
                    const service = formData.get('service') as string;
                    const details = formData.get('details') as string;
                
                    const message = `*New Quote Request*\n\n*Name:* ${fname} ${lname}\n*Phone:* ${phone}\n*Service:* ${service}\n*Details:* ${details}`;
                    
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/919141052439?text=${encodedMessage}`, '_blank');
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">First Name</label>
                      <input name="fname" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Last Name</label>
                      <input name="lname" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input name="phone" required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Required</label>
                    <select name="service" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all appearance-none text-slate-700 font-medium">
                      <option>CCTV Installation</option>
                      <option>CCTV Repair & Maintenance</option>
                      <option>Biometric Systems</option>
                      <option>Home Automation</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Additional Details</label>
                    <textarea name="details" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="E.g., I need 4 cameras installed for my retail store..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
                    Request Quote <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
