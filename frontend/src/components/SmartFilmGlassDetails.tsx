import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, ShieldCheck, Zap, 
  Monitor, Settings, Layers,
  Phone, CheckCircle2, Tv
} from "lucide-react";

export function SmartFilmGlassDetails() {
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
          <Link to="/services" className="inline-flex items-center text-sm font-medium text-background/70 hover:text-background transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-brand font-bold tracking-widest uppercase text-sm mb-2">vendor99</p>
              <h1 className="text-3xl md:text-5xl font-bold">SMART FILM & PDLC<br/>GLASS SOLUTIONS</h1>
            </div>
            <button 
              onClick={() => handleWhatsApp("Smart Film & PDLC Glass Consultation")}
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
            <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Precision Wiring</h3>
              <p className="text-sm text-muted-foreground mt-1">Expert integration of low-voltage step-down transformers (48V–60V AC) with neat structural seals.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Eco Protection</h3>
              <p className="text-sm text-muted-foreground mt-1">Built-in ~99% UV radiation blocking parameters to preserve interiors and improve energy efficiency loops.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
              <Monitor className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Projection Ready</h3>
              <p className="text-sm text-muted-foreground mt-1">Off-state opaque surfaces are engineered to support sharp high-contrast multimedia rear projections.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-12">
        
        {/* 1. PDLC Smart Film & Laminated Glass Systems */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Layers className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">1. PDLC Smart Film & Laminated Glass Systems</h2>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold">★ 4.9 Architectural Glass Engineers</span>
          </div>
          <p className="text-muted-foreground mb-6">Premium architectural privacy systems. Price includes precise technical sourcing and structural cutting alignments.</p>
          
          <div className="grid gap-4">
            {[
              { 
                name: "Self-Adhesive Smart PDLC Film (Retrofit Edition)", 
                desc: "Flexible PET micro-layer engineered for application directly over clean, standing clear glass windows or doors. Ideal for rented real-estate or completed office partitions. (0.4mm – 0.5mm profile width).", 
                price: "₹1,100 - ₹1,600",
                action: "ADD FILM"
              },
              { 
                name: "Premium Imported High-Clarified PDLC Film", 
                desc: "Enhanced layer featuring advanced off-axis structural transparency (>95% crystal clarity during the on-state) and increased heat absorption parameters.", 
                price: "₹1,800 - ₹2,200",
                action: "ADD FILM"
              },
              { 
                name: "Integrated Laminated Smart Glass (8mm Toughened)", 
                desc: "Liquid crystal layer factory-sandwiched and vacuum-sealed permanently between two high-durability sheets of safety glass. Designed for modern framed interior cubicles.", 
                price: "₹1,500 - ₹2,000",
                action: "GET GLASS"
              },
              { 
                name: "Integrated Laminated Smart Glass (10mm / 12mm Enterprise)", 
                desc: "Heavy-gauge commercial architectural safety glass profile offering maximum structural load capabilities and sound isolation barriers.", 
                price: "₹2,200 - ₹3,800",
                action: "GET GLASS"
              }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
                <div className="flex items-center gap-6 md:border-l border-border md:pl-6">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase font-bold">Rate Range (Per Sq. Ft.)</p>
                    <p className="text-xl font-bold whitespace-nowrap">{item.price}</p>
                  </div>
                  <button 
                    onClick={() => toggleSelection(item.name)} 
                    className={`px-6 py-2.5 rounded-lg font-bold whitespace-nowrap transition-colors min-w-[120px] ${
                      selectedItems.includes(item.name)
                        ? "bg-brand text-white"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    {selectedItems.includes(item.name) ? "SELECTED ✓" : item.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Engineering, Wiring & Smart Control Sync */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Settings className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">2. Engineering, Wiring & Smart Control Sync</h2>
          </div>
          <p className="text-muted-foreground mb-6">Professional technical execution covering secure wiring and smart control integrations.</p>
          
          {/* Power Management Override */}
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-900/30 mb-8 flex gap-4 shadow-sm">
            <div className="text-amber-500 mt-1"><Zap className="h-5 w-5" /></div>
            <div>
              <h3 className="font-bold text-amber-900 dark:text-amber-400">Power Management Override:</h3>
              <p className="text-sm text-amber-800 dark:text-amber-500 mt-1">Centralized controller infrastructure (including multi-channel copper core step-down power transformers, RF wireless hand remotes, and Wi-Fi modules) is calculated as a separate line item, adding a stable flat overhead of <strong>₹5,000 – ₹12,000 per zone</strong> based on target electrical load thresholds.</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid">
              <div>Integration Task</div>
              <div>Execution Specifics</div>
              <div className="text-right">Service Fee</div>
              <div className="text-center">Action</div>
            </div>
            
            <div className="divide-y divide-border">
              {[
                { spec: "Laser Mapping & Frame Survey", desc: "Micrometer-accurate dimensional analysis to eliminate side light leakage gaps.", price: "₹499 / Survey", action: "BOOK NOW" },
                { spec: "Dust-Free Film Installation", desc: "Hyper-purified glass preparation and scraping to prevent air bubbles or crystal micro-hazing.", price: "Bundled*", action: "WITH FILM" },
                { spec: "IoT Voice Hub Alignment", desc: "Linking transformer relays to Wi-Fi receiver nodes. Configured with Amazon Alexa, Google Home, or local automation wall triggers.", price: "₹999", action: "ADD +" },
                { spec: "Non-Acidic Silicone Sealing", desc: "Waterproof edge sealing using neutral chemical compound structures to prevent edge delamination in bathrooms/showers.", price: "₹249 / Panel", action: "ADD +" },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-6 items-center">
                  <h3 className="font-bold text-foreground">{item.spec}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <div className="text-xl font-bold md:text-right whitespace-nowrap">{item.price}</div>
                  <div className="md:text-center">
                    {item.action === "WITH FILM" ? (
                      <span className="text-xs font-bold text-muted-foreground bg-secondary px-3 py-1.5 rounded uppercase w-full block">WITH FILM</span>
                    ) : (
                      <button 
                        onClick={() => toggleSelection(`Service: ${item.spec}`)} 
                        className={`px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${
                          selectedItems.includes(`Service: ${item.spec}`)
                            ? "bg-brand text-white"
                            : "bg-brand/10 text-brand hover:bg-brand hover:text-white"
                        }`}
                      >
                        {selectedItems.includes(`Service: ${item.spec}`) ? "ADDED ✓" : item.action}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Policies */}
        <section className="bg-secondary/30 rounded-3xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-foreground">Project Commercial Guidelines</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Minimum Project Volume (MOQ)</h4>
                <p className="text-sm text-muted-foreground mt-1">Architectural material dispatches and on-site expert installations carry a baseline operational threshold of 30 to 50 square feet per single mobilization run.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Laser Survey Adjustment</h4>
                <p className="text-sm text-muted-foreground mt-1">The baseline laser mapping fee (₹499) is fully credited and adjusted directly inside the primary invoice once structural material fabrication is initiated.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Power Surge Protection Disclaimer</h4>
                <p className="text-sm text-muted-foreground mt-1">Input power configurations must operate behind verified surge protection circuits. Direct raw current fluctuations bypassing surge-buffers can degrade liquid crystals and void warranty schemes.</p>
              </div>
            </div>
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
              <span>Planning a Premium Smart Film or Glass Installation?</span>
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
              onClick={() => handleWhatsApp("General Inquiry: Premium Smart Film or Glass Installation")}
              className="bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs font-normal opacity-90">Skip traditional engineering back-and-forth</div>
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
