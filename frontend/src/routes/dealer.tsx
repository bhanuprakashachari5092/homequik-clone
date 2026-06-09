import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Search, Star, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/dealer")({
  head: () => ({
    meta: [
      { title: "Find Nearest Dealer — Vendor99" },
      { name: "description", content: "Locate verified CCTV and security system dealers near you." },
    ],
  }),
  component: DealerPage,
});

function DealerPage() {
  return (
    <SiteLayout>
      <div className="bg-[#f0f4f8] min-h-screen py-10 font-sans">
        <div className="max-w-5xl mx-auto px-6 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
              Find Your Nearest Dealer
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We have a network of 10,000+ verified installation partners across India. Enter your pincode or city to find experts near you.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-lg border border-slate-100 p-4 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Enter Pincode or City Name..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand font-medium text-lg"
                />
              </div>
              <button className="bg-brand hover:bg-brand-hover text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shrink-0">
                <Search className="h-5 w-5" /> Search Dealers
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-brand/10 p-3 rounded-xl group-hover:bg-brand group-hover:text-white transition-colors">
                    <MapPin className="h-6 w-6 text-brand group-hover:text-white" />
                  </div>
                  <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-xs font-bold">
                    <Star className="h-3 w-3 fill-current" /> 4.9
                  </div>
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-1">TechVision Security</h3>
                <p className="text-sm text-slate-500 mb-4">Authorized Hikvision & CP Plus Dealer</p>
                <div className="space-y-2 text-sm text-slate-600 mb-6">
                  <p>📍 123, Electronics Market, Area {i}</p>
                  <p>📞 +91 98765 0000{i}</p>
                </div>
                <button className="w-full border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold py-2.5 rounded-xl transition-colors">
                  Contact Dealer
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </SiteLayout>
  );
}
