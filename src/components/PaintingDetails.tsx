import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, ShieldCheck, Clock, 
  Paintbrush, Settings, Home, Target,
  Phone, CheckCircle2, Layers, Briefcase
} from "lucide-react";

export function PaintingDetails() {
  const WHATSAPP_NUMBER = "919141052539"; 
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const toggleSelection = (serviceName: string) => {
    setSelectedItems(prev => 
      prev.includes(serviceName) 
        ? prev.filter(item => item !== serviceName)
        : [...prev, serviceName]
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<string>("General Inquiry");

  const handleWhatsApp = (serviceName?: string) => {
    setActiveService(serviceName || "General Inquiry");
    setIsModalOpen(true);
  };

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Header */}
      <header className="bg-foreground text-background py-10 px-6">
        <div className="mx-auto max-w-5xl">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-background/70 hover:text-background transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-brand font-bold tracking-widest uppercase text-sm mb-2">Vendor99 Painting</p>
              <h1 className="text-3xl md:text-5xl font-bold">PROFESSIONAL PAINTING<br/>SERVICES (2026)</h1>
            </div>
            <button 
              onClick={() => handleWhatsApp("Painting Consultation")}
              className="bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors"
            >
              <Phone className="h-5 w-5" />Send Request</button>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-6 flex items-start gap-4">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full text-red-600 dark:text-red-400">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Laser Tech Scoping</h3>
              <p className="text-sm text-muted-foreground mt-1">Precise area measurements ensuring transparent structural pricing.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">100% Genuine Materials</h3>
              <p className="text-sm text-muted-foreground mt-1">Brand-sealed delivery directly to your site for complete authenticity.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">1-Year Service Warranty</h3>
              <p className="text-sm text-muted-foreground mt-1">Comprehensive quality warranty on all execution layers and finishes.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-12">
        
        {/* 1. Space-by-Space Modular Pricing */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Layers className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">1. Space-by-Space Modular Pricing</h2>
          </div>
          <p className="text-muted-foreground mb-6">Targeted refreshes varying depending on room configuration and localized preparation requirements.</p>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_100px_150px_120px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid">
              <div>Service Segment</div>
              <div>Standard Coverage Scope</div>
              <div>Timeline</div>
              <div className="text-right">Starting Price</div>
              <div className="text-center">Action</div>
            </div>
            
            <div className="divide-y divide-border">
              {[
                { name: "Accent Wall Painting", scope: "Single focal wall, multi-coat premium finish", time: "9 Hours", price: "₹2,499 - ₹2,999" },
                { name: "Standard Bedroom", scope: "4 Walls + 1 Ceiling (Up to 450 sq ft area)", time: "2 Days", price: "₹5,499 - ₹5,785" },
                { name: "Living Room", scope: "Comprehensive wall area + specialized ceiling masking", time: "2 Days", price: "₹6,499 - ₹7,876" },
                { name: "Dining Room", scope: "Standard walls with standard surface preparation", time: "2 Days", price: "₹5,999 - ₹6,500" },
                { name: "Combined Living & Dining", scope: "Open layout configurations, uniform coat mapping", time: "2 Days", price: "₹9,499" },
                { name: "Kitchen Unit", scope: "Oil-based distemper or advanced stain resistant paint", time: "2 Days", price: "₹3,499 - ₹4,072" },
                { name: "Bathroom / Wet Areas", scope: "Anti-fungal, moisture-resistant layer map", time: "9 Hours", price: "₹2,499 - ₹2,999" },
                { name: "Balcony Area", scope: "Weather-proof exterior grade baseline application", time: "9 Hours", price: "₹2,499 - ₹3,499" },
                { name: "Lobby / Pathways", scope: "High-traffic scuff-resistant paint coats", time: "2 Days", price: "₹3,499" },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_100px_150px_120px] gap-4 p-6 items-center">
                  <h3 className="font-bold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.scope}</p>
                  <div className="text-sm font-semibold flex items-center gap-1"><Clock className="h-3 w-3" /> {item.time}</div>
                  <div className="text-lg font-bold md:text-right whitespace-nowrap">{item.price}</div>
                  <div className="md:text-center">
                    <button 
                      onClick={() => toggleSelection(`Modular: ${item.name}`)} 
                      className={`px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${
                        selectedItems.includes(`Modular: ${item.name}`)
                          ? "bg-brand text-white"
                          : "bg-brand/10 text-brand hover:bg-brand hover:text-white"
                      }`}
                    >
                      {selectedItems.includes(`Modular: ${item.name}`) ? "ADDED ✓" : "ADD +"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Turnkey Flat Packages */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Home className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">2. Turnkey Flat Packages (Full House)</h2>
          </div>
          <p className="text-muted-foreground mb-6">Comprehensive renovations splitting unfurnished and furnished structures.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            {/* Economy Tier */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                Economy Tier <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground font-medium">Tractor Emulsion Grade</span>
              </h3>
              <div className="flex justify-between items-center bg-secondary/30 p-4 rounded-xl border border-border">
                <div>
                  <h4 className="font-bold">1 BHK Economy Pack</h4>
                  <p className="text-xs text-muted-foreground mt-1">1 Living Room, 1 Bedroom, Kitchen, Bathroom</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl">Starts ₹8,000</p>
                  <button 
                    onClick={() => toggleSelection("1 BHK Economy Pack")} 
                    className="text-brand text-xs font-bold uppercase mt-1 hover:underline"
                  >
                    {selectedItems.includes("1 BHK Economy Pack") ? "SELECTED ✓" : "SELECT PACK"}
                  </button>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl p-6 shadow-sm flex gap-4">
              <Settings className="h-6 w-6 text-red-500 shrink-0" />
              <div>
                <h3 className="font-bold text-red-900 dark:text-red-400">Area Calculation Protocol</h3>
                <p className="text-sm text-red-800 dark:text-red-500 mt-2">
                  Final billing values are tied to accurate carpet and wall surface data extracted via on-site laser measurements. 
                  <br/><br/>
                  <strong>Standardized Formulation:</strong><br/>
                  Total Area = 3.5 × Carpet Area
                </p>
              </div>
            </div>
          </div>

          {/* Standard & Premium Tiers */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_120px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid">
              <div>Apartment Size</div>
              <div>Unfurnished Layout</div>
              <div>Furnished Layout</div>
              <div>Ops Period</div>
              <div className="text-center">Action</div>
            </div>
            
            <div className="divide-y divide-border">
              {[
                { size: "1 BHK Apartment", unfurnished: "Starts at ₹9,499", furnished: "Starts at ₹9,999", time: "1 - 3 Days" },
                { size: "2 BHK Apartment", unfurnished: "Starts at ₹12,999", furnished: "Starts at ₹13,499", time: "3 - 4 Days" },
                { size: "3 BHK Apartment", unfurnished: "Starts at ₹16,999", furnished: "Starts at ₹25,499", time: "3 - 5 Days" },
              ].map((pack, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_120px] gap-4 p-6 items-center">
                  <h3 className="font-bold text-foreground">{pack.size}</h3>
                  <div className="text-sm font-medium"><span className="md:hidden text-muted-foreground">Unfurnished: </span>{pack.unfurnished}</div>
                  <div className="text-sm font-medium"><span className="md:hidden text-muted-foreground">Furnished: </span>{pack.furnished}</div>
                  <div className="text-sm text-muted-foreground">{pack.time}</div>
                  <div className="md:text-center">
                    <button 
                      onClick={() => toggleSelection(`Turnkey: ${pack.size}`)} 
                      className={`px-4 py-2 rounded-lg font-bold transition w-full ${
                        selectedItems.includes(`Turnkey: ${pack.size}`)
                          ? "bg-brand text-white"
                          : "bg-foreground text-background hover:bg-foreground/90"
                      }`}
                    >
                      {selectedItems.includes(`Turnkey: ${pack.size}`) ? "SELECTED ✓" : "SELECT"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Material Catalog & Per Sq. Ft. */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Asian Paints Catalog</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm border-b border-border pb-2">
                <div>
                  <div className="font-bold">Royale Shyne</div>
                  <div className="text-muted-foreground text-xs">Ultra-Premium High Gloss</div>
                </div>
                <div className="font-bold">₹31 / sq.ft</div>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-border pb-2">
                <div>
                  <div className="font-bold">Royale Luxury Emulsion</div>
                  <div className="text-muted-foreground text-xs">Premium Matte/Satin</div>
                </div>
                <div className="font-bold">₹30 / sq.ft</div>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-border pb-2">
                <div>
                  <div className="font-bold">Apcolite Advanced Emulsion</div>
                  <div className="text-muted-foreground text-xs">Mid-tier Durable Finish</div>
                </div>
                <div className="font-bold">₹20 - ₹21 / sq.ft</div>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-border pb-2">
                <div>
                  <div className="font-bold">Apcolite Premium Emulsion</div>
                  <div className="text-muted-foreground text-xs">Value Tier Interior Paint</div>
                </div>
                <div className="font-bold">₹17 / sq.ft</div>
              </li>
              <li className="flex justify-between items-center text-sm">
                <div>
                  <div className="font-bold">Ace Exterior Emulsion</div>
                  <div className="text-muted-foreground text-xs">Standard Exterior Weather Guard</div>
                </div>
                <div className="font-bold">~₹30 / sq.ft</div>
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Dulux Paints Catalog</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm border-b border-border pb-2">
                <div>
                  <div className="font-bold">Super Clean 3-in-1</div>
                  <div className="text-muted-foreground text-xs">Stain Resistant Matte</div>
                </div>
                <div className="font-bold">Starts ₹22 / sq.ft</div>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-border pb-2">
                <div>
                  <div className="font-bold">Super Cover / Promise Premium</div>
                  <div className="text-muted-foreground text-xs">Economy Smooth Finish</div>
                </div>
                <div className="font-bold">₹17 - ₹20 / sq.ft</div>
              </li>
              <li className="flex justify-between items-center text-sm">
                <div>
                  <div className="font-bold">PearlGlo Luxury Series</div>
                  <div className="text-muted-foreground text-xs">Exquisite Pearl Sheen</div>
                </div>
                <div className="font-bold text-brand">Premium Quote</div>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Speciality & Auxiliary Painting Services */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Paintbrush className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">4. Speciality & Auxiliary Painting Services</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Terrace / Exterior Waterproofing", price: "Starts at ₹5,499" },
              { title: "Tile Grouting (Water-resistant)", price: "Starts at ₹2,399" },
              { title: "Door Painting (Enamel/Polish)", price: "Starts at ₹2,499 / unit" },
              { title: "Cabinet & Trim Painting", price: "Starts at ₹1,999" },
              { title: "Metal Gate / Shutter Painting", price: "Starts at ₹2,499" },
              { title: "Grill Work Painting", price: "Starts at ₹1,999" },
            ].map((aux, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-foreground leading-tight">{aux.title}</h3>
                  <span className="text-lg font-bold text-brand block mt-2">{aux.price}</span>
                </div>
                <button 
                  onClick={() => toggleSelection(`Auxiliary: ${aux.title}`)} 
                  className={`mt-6 w-full border border-border px-4 py-2 rounded-lg font-bold transition ${
                    selectedItems.includes(`Auxiliary: ${aux.title}`)
                      ? "bg-brand text-white border-brand"
                      : "bg-secondary hover:bg-foreground hover:text-background text-foreground"
                  }`}
                >
                  {selectedItems.includes(`Auxiliary: ${aux.title}`) ? "Selected ✓" : "ADD +"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 5. The Operating Framework */}
        <section className="bg-secondary/30 rounded-3xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-brand" />
            <h2 className="text-2xl font-bold text-foreground">The Operating Framework</h2>
          </div>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              { step: "Step 1", title: "Digital Consultation & Laser Diagnosis", desc: "Precise measurements mapped using laser distance meters to eliminate manual padding anomalies. Dynamic, transparent digital quotation detailing materials and labor." },
              { step: "Step 2", title: "Asset Masking & Protection Protocol", desc: "Heavy-duty masking paper and plastic drop sheets deployed. Flooring, static woodwork, and electronics comprehensively wrapped for a 100% dust-free workspace." },
              { step: "Step 3", title: "Supervised Execution", desc: "Every active site supervised directly by a dedicated Project Manager. Transparent updates, milestones, and scope adaptations via our application." },
              { step: "Step 4", title: "Comprehensive Cleanup & Handover", desc: "Strict post-paint remediation framework. Masking tools extracted, furniture reset, debris cleaned. Meticulous final quality inspection validates zero bubbles or bleedings." },
            ].map((fw, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-brand">{i + 1}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-5 rounded-2xl shadow-sm border border-border">
                  <h3 className="font-bold text-lg mb-1">{fw.title}</h3>
                  <p className="text-sm text-muted-foreground">{fw.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white dark:bg-black p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="font-bold text-lg mb-4">Commercial Milestone Schedule</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Minimum Project Value:</strong> Full managed service setups require an active project value exceeding ₹25,000.</li>
              <li><strong className="text-foreground">Payment Architecture:</strong> 35% Advance Payment (Fully refundable up to 24 hours prior to work) and 65% Milestone Balance Settlement upon final structural handover.</li>
              <li><strong className="text-foreground">Cancellation Policy:</strong> Free if processed {">"}24 hours prior to start. Late-stage cancellations attract a structured baseline operational processing fee of ₹1,000.</li>
            </ul>
          </div>
        </section>

        {/* Floating WhatsApp CTA */}
        <section className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {selectedItems.length === 0 && (
            <div className="bg-white dark:bg-card border border-border shadow-lg p-3 rounded-xl text-xs mb-2 animate-bounce flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span>Need an On-Demand Certified Painter?</span>
            </div>
          )}
          {selectedItems.length > 0 ? (
            <button 
              onClick={() => handleWhatsApp()}
              className="bg-brand hover:bg-brand-dark text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105"
            >
              <div className="bg-white text-brand rounded-full h-6 w-6 flex items-center justify-center text-xs">
                {selectedItems.length}
              </div>
              <div className="text-left">
                <div className="text-xs font-normal opacity-90">Send Request</div>
                <div>Submit Request ➔</div>
              </div>
            </button>
          ) : (
            <button 
              onClick={() => handleWhatsApp("General Inquiry: Need a Certified Painter")}
              className="bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs font-normal opacity-90">Skip manual queues</div>
                <div>🟢 Send Request</div>
              </div>
            </button>
          )}
        </section>
      </div>
    
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={activeService} 
        selectedItems={selectedItems} 
      />
</div>
  );
}
