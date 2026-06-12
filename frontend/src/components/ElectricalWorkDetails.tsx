import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, ShieldCheck, Clock, 
  Zap, Settings, Activity, Wrench,
  Phone, CheckCircle2, AlertTriangle, Lightbulb
} from "lucide-react";
import { DynamicPrice } from "@/components/DynamicPrice";

export function ElectricalWorkDetails() {
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
              <p className="text-brand font-bold tracking-widest uppercase text-sm mb-2">vendor99</p>
              <h1 className="text-3xl md:text-5xl font-bold">PROFESSIONAL ELECTRICIAN<br/>& HOME SERVICES</h1>
            </div>
            <button 
              onClick={() => handleWhatsApp("Electrical Consultation")}
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
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Verified Electricians</h3>
              <p className="text-sm text-muted-foreground mt-1">100% background-checked, licensed, and senior deployment technicians.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full text-red-600 dark:text-red-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Protection Insurance</h3>
              <p className="text-sm text-muted-foreground mt-1">Up to ₹10,000 comprehensive coverage against accidental property damage.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">On-Time Guarantee</h3>
              <p className="text-sm text-muted-foreground mt-1">Prompt service deployment within 120 mins or receive ₹100 direct wallet cashback.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-12">
        
        {/* 1. Fixture & Appliance Installation */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Lightbulb className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">1. Fixture & Appliance Installation</h2>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold">★ 4.8 Verified Electricians</span>
          </div>
          <p className="text-muted-foreground mb-6">Standardized per-node pricing model optimized for flawless mounting and testing.</p>
          
          <div className="grid gap-4">
            {[
              { 
                name: "Standard Ceiling Fan Installation", 
                desc: "Includes safe bracket mounting, hardware balancing, speed regulator testing, and optimum downrod centering.", 
                price: "₹199 / Node"
              },
              { 
                name: "Decorative Chandelier / Heavy Light Fitting", 
                desc: "Complete load-bearing assessment, ceiling structural anchoring, safe wiring connections, and layout re-mapping.", 
                price: "₹499 / Unit"
              },
              { 
                name: "Geyser / Water Heater Installation", 
                desc: "Structural wall bracket drilling, inlet/outlet high-pressure connection setup, insulation checks, and power testing.", 
                price: "₹399 / Unit"
              }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
                <div className="flex items-center gap-6 md:border-l border-border md:pl-6">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase font-bold">Fixed Rate</p>
                    <DynamicPrice originalPrice={item.price} category="Electrical Works" discountClassName="text-xl font-bold whitespace-nowrap" />
                  </div>
                  <button 
                    onClick={() => toggleSelection(item.name)} 
                    className={`px-6 py-2.5 rounded-lg font-bold transition-colors min-w-[120px] ${
                      selectedItems.includes(item.name)
                        ? "bg-brand text-white"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    {selectedItems.includes(item.name) ? "SELECTED ✓" : "ADD +"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Switches, Sockets & Panels */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Zap className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">2. Switches, Sockets & Panels</h2>
          </div>
          <p className="text-muted-foreground mb-6">Complete modular grouping, backend loop wire continuity routing, and dynamic load balancing.</p>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid">
              <div>Component Type</div>
              <div>Inclusions & Features</div>
              <div className="text-right">Fixed Rate</div>
              <div className="text-center">Action</div>
            </div>
            
            <div className="divide-y divide-border">
              {[
                { spec: "Switch / Socket Replacement", desc: "Dismantling burnt or old nodes, clean core terminal joining, and modular panel plate alignment diagnostics.", price: "₹49" },
                { spec: "Complete Modular Switchboard Setup", desc: "Rear strip configuration control, safe grouping, phase line parsing, and master frame load distribution.", price: "₹299" },
                { spec: "MCB / Distribution Board Reset & Change", desc: "Comprehensive load diagnostic breakdown, short-circuit protection calibration, and single/three-phase line mapping.", price: "₹349" },
                { spec: "Inverter Integration & Sync", desc: "Dual phase bypass provisioning, battery terminal conditioning, acid check status, and primary backup matrix synchronization.", price: "₹499" },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-6 items-center">
                  <h3 className="font-bold text-foreground">{item.spec}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <DynamicPrice originalPrice={item.price} category="Electrical Works" className="md:justify-end" discountClassName="text-xl font-bold md:text-right whitespace-nowrap" />
                  <div className="md:text-center">
                    <button 
                      onClick={() => toggleSelection(`Service: ${item.spec}`)} 
                      className={`px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${
                        selectedItems.includes(`Service: ${item.spec}`)
                          ? "bg-brand text-white"
                          : "bg-brand/10 text-brand hover:bg-brand hover:text-white"
                      }`}
                    >
                      {selectedItems.includes(`Service: ${item.spec}`) ? "ADDED ✓" : "ADD +"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Premium Wiring & Infrastructure Solutions */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Settings className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">3. Premium Wiring & Infrastructure Solutions</h2>
          </div>
          <p className="text-muted-foreground mb-6">Heavy-gauge wear-resistant copper configurations priced accurately per running meter.</p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { type: "Open Layout Internal Wiring", desc: "Direct heavy-duty safety clips, clean parallel line routing with heat protection alignment.", price: "₹35 / m" },
              { type: "Heavy-Duty PVC Conduit Wall Casing", desc: "Secured inside solid fire-retardant casing for enhanced moisture protection and aesthetic disturbance control.", price: "₹60 / m" },
              { type: "Concealed Wall / Ceiling Chasing Routing", desc: "Mechanical wall grooving, in-spring flexible deployment embedded flawlessly behind PoP or plaster.", price: "₹90 / m" },
            ].map((cab, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-foreground leading-tight">{cab.type}</h3>
                    <DynamicPrice originalPrice={cab.price} category="Electrical Works" discountClassName="text-lg font-bold text-brand whitespace-nowrap" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{cab.desc}</p>
                </div>
                <button 
                  onClick={() => toggleSelection(`Wiring: ${cab.type}`)} 
                  className={`mt-6 w-full border border-border px-4 py-2 rounded-lg font-bold transition ${
                    selectedItems.includes(`Wiring: ${cab.type}`)
                      ? "bg-brand text-white border-brand"
                      : "bg-secondary hover:bg-foreground hover:text-background text-foreground"
                  }`}
                >
                  {selectedItems.includes(`Wiring: ${cab.type}`) ? "Selected ✓" : "ADD +"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 4. On-Demand Fault Diagnosis & Repair */}
        <section className="bg-red-50 dark:bg-red-950/20 rounded-3xl p-8 border border-red-100 dark:border-red-900/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-500 text-white p-2 rounded-lg"><Activity className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold text-red-950 dark:text-red-400">4. On-Demand Fault Diagnosis & Repair</h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-black rounded-lg px-4 py-2 border border-red-200 dark:border-red-800 shadow-sm mb-8 text-sm font-bold">
            <span>🏷️</span> Flat ₹149 Expert Inspection Fee (Completely waived off if any on-site fix is authorized)
          </div>
          
          <div className="grid gap-4">
            {[
              { title: "Frequent Short Circuit & MCB Tripping Resolution", desc: "Complete multi-node breakdown tracking, power surge isolation loop analytics, and phase leakage restoration.", price: "₹149 / Job" },
              { title: "Complete House Leakage & Earthing Check", desc: "Digital Earth Resistance multi-meter testing, leakage current tracking, and safety ground spike deployment assessment.", price: "₹249 / Job" },
              { title: "Burnt Wire Splicing & Insulation Taping", desc: "Precise high-conductivity jointing with heavy-duty weatherized thermal tape barriers to protect structural elements.", price: "₹99 / Job" },
            ].map((diag, i) => (
              <div key={i} className="bg-white dark:bg-card border border-red-100 dark:border-red-900/30 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                <div className="flex-1">
                  <h3 className="font-bold text-red-900 dark:text-red-400 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> {diag.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{diag.desc}</p>
                </div>
                <div className="flex items-center gap-6">
                  <DynamicPrice originalPrice={diag.price} category="Electrical Works" discountClassName="font-bold whitespace-nowrap" />
                  <button 
                    onClick={() => toggleSelection(`Repair Request: ${diag.title}`)} 
                    className={`px-5 py-2 rounded-lg font-bold whitespace-nowrap shadow-sm ${
                      selectedItems.includes(`Repair Request: ${diag.title}`)
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    {selectedItems.includes(`Repair Request: ${diag.title}`) ? "ADDED ✓" : "BOOK FIX"}
                  </button>
                </div>
              </div>
            ))}
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
              <span>Need an On-Demand Certified Electrician?</span>
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
              onClick={() => handleWhatsApp("General Inquiry: Need a Certified Electrician")}
              className="bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs font-normal opacity-90">Skip traditional booking delays</div>
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
