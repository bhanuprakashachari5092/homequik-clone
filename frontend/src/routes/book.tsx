import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CheckCircle2, Calendar, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Service — Vendor99" },
      { name: "description", content: "Book CCTV and tech services online instantly." },
    ],
  }),
  component: BookServicePage,
});

function BookServicePage() {
  return (
    <SiteLayout>
      <div className="bg-[#f0f4f8] min-h-screen py-10 font-sans">
        <div className="max-w-4xl mx-auto px-6 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center p-4 bg-brand/10 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-brand" />
             </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
              Book a Service
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Select your required service and book a verified professional in under 2 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             {/* CCTV */}
             <div className="bg-white rounded-[2rem] border border-border/50 p-8 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">CCTV & Surveillance</h3>
                <p className="text-slate-500 mb-6">Installation, Repair, and Maintenance</p>
                <ul className="space-y-3 mb-8">
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Quick Installation</li>
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Flat Visit Charge</li>
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Expert Diagnostics</li>
                </ul>
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all">
                   Select Service
                </button>
             </div>

             {/* Biometric */}
             <div className="bg-white rounded-[2rem] border border-border/50 p-8 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Biometric Systems</h3>
                <p className="text-slate-500 mb-6">Attendance & Access Control</p>
                <ul className="space-y-3 mb-8">
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Setup & Config</li>
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Software Integration</li>
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Repair Services</li>
                </ul>
                <button className="w-full border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold py-3 rounded-xl transition-all">
                   Select Service
                </button>
             </div>

             {/* Smart Home */}
             <div className="bg-white rounded-[2rem] border border-border/50 p-8 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Home Automation</h3>
                <p className="text-slate-500 mb-6">Smart Lights, PDLC Glass, Alexa setup</p>
                <ul className="space-y-3 mb-8">
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Premium Hardware</li>
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Clean Install</li>
                </ul>
                <button className="w-full border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold py-3 rounded-xl transition-all">
                   Select Service
                </button>
             </div>

             {/* Electrical */}
             <div className="bg-white rounded-[2rem] border border-border/50 p-8 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Electrical Work</h3>
                <p className="text-slate-500 mb-6">Wiring, UPS, Inverter setup</p>
                <ul className="space-y-3 mb-8">
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Certified Electricians</li>
                   <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-brand" /> Safe Wiring</li>
                </ul>
                <button className="w-full border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold py-3 rounded-xl transition-all">
                   Select Service
                </button>
             </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
