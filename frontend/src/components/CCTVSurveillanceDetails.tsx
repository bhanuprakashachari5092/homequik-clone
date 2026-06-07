import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, ShieldCheck, Clock, 
  Video, HardDrive, Settings, Activity,
  Phone, CheckCircle2, AlertTriangle, Monitor,
  Wrench
} from "lucide-react";

export function CCTVSurveillanceDetails() {
  const WHATSAPP_NUMBER = "919141052539"; 
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const toggleSelection = (serviceName: string) => {
    setSelectedItems(prev => 
      prev.includes(serviceName) 
        ? prev.filter(item => item !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleWhatsApp = (serviceName?: string) => {
    let text = "";
    if (serviceName) {
      text = `Hello HomeQuik, I would like to book or inquire about: *${serviceName}* (CCTV & Surveillance)`;
    } else if (selectedItems.length > 0) {
      const itemList = selectedItems.map(item => `- ${item}`).join('\n');
      text = `Hello HomeQuik, I would like to book or inquire about the following services (CCTV & Surveillance):\n\n${itemList}`;
    } else {
      text = `Hello HomeQuik, I need a Certified Technician for CCTV & Surveillance.`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
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
              <p className="text-brand font-bold tracking-widest uppercase text-sm mb-2">HomeQuik</p>
              <h1 className="text-3xl md:text-5xl font-bold">Smart Home & CCTV<br/>Professional Services</h1>
            </div>
            <button 
              onClick={() => handleWhatsApp("CCTV Consultation")}
              className="bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors"
            >
              <Phone className="h-5 w-5" />
              Chat on WhatsApp
            </button>
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
              <h3 className="font-bold text-foreground">Verified Experts</h3>
              <p className="text-sm text-muted-foreground mt-1">100% background-checked & certified senior tech personnel.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Protection Insurance</h3>
              <p className="text-sm text-muted-foreground mt-1">Up to ₹10,000 protection coverage against property damage.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">On-Time Guarantee</h3>
              <p className="text-sm text-muted-foreground mt-1">Prompt service deployment or receive ₹100 direct cashback.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-12">
        
        {/* 1. Camera Installation & Setup */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Video className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">1. Camera Installation & Setup</h2>
          </div>
          <p className="text-muted-foreground mb-6">Standardized per-node pricing model optimized for high-grade alignment.</p>
          
          <div className="grid gap-4">
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
              <div className="flex-1">
                <h3 className="text-lg font-bold">Standard CCTV Camera Installation</h3>
                <p className="text-sm text-muted-foreground mt-2">Includes surface/ceiling drilling, professional mounting, hardware balancing, and optimum angle calibration.</p>
              </div>
              <div className="flex items-center gap-6 md:border-l border-border md:pl-6">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase font-bold">Fixed Rate</p>
                  <p className="text-2xl font-bold">₹399 <span className="text-sm text-muted-foreground font-normal">/ Cam</span></p>
                </div>
                <button 
                  onClick={() => toggleSelection("Standard CCTV Installation (₹399/Cam)")} 
                  className={`px-6 py-2.5 rounded-lg font-bold transition-colors ${
                    selectedItems.includes("Standard CCTV Installation (₹399/Cam)")
                      ? "bg-brand text-white"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {selectedItems.includes("Standard CCTV Installation (₹399/Cam)") ? "SELECTED ✓" : "ADD"}
                </button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold">Complete System Relocation & Setup</h3>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold">★ 4.9 Experts</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Safe dismantling from an old structure, cable health audit, and sequential layout re-mapping at your new premises.</p>
              </div>
              <div className="flex items-center gap-6 md:border-l border-border md:pl-6">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase font-bold">Fixed Rate</p>
                  <p className="text-lg font-bold">Custom Quote</p>
                </div>
                <button 
                  onClick={() => toggleSelection("System Relocation Quote")} 
                  className={`px-6 py-2.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
                    selectedItems.includes("System Relocation Quote")
                      ? "bg-brand text-white"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {selectedItems.includes("System Relocation Quote") ? "SELECTED ✓" : "GET QUOTE"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Smart NVR / DVR Programming */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><HardDrive className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">2. Smart NVR / DVR Programming</h2>
          </div>
          <p className="text-muted-foreground mb-6">Complete local storage provisioning, matrix grouping, and remote deployment.</p>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid">
              <div>System Spec</div>
              <div>Inclusions & Features</div>
              <div className="text-right">Fixed Rate</div>
              <div className="text-center">Action</div>
            </div>
            
            <div className="divide-y divide-border">
              {[
                { spec: "4-Channel Setup", desc: "Firmware initialization, HDD parsing, local matrix setup & diagnostics.", price: "₹1,000" },
                { spec: "8-Channel Setup", desc: "Storage allocation control, grouping, dynamic local display layout mapping.", price: "₹2,000" },
                { spec: "16-Channel Setup", desc: "Multi-screen partitioning, comprehensive system load diagnostics, video array balancing.", price: "₹4,000" },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-6 items-center">
                  <h3 className="font-bold text-foreground">{item.spec}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <div className="text-xl font-bold md:text-right">{item.price}</div>
                  <div className="md:text-center">
                    <button 
                      onClick={() => toggleSelection(`DVR Programming - ${item.spec}`)} 
                      className={`px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${
                        selectedItems.includes(`DVR Programming - ${item.spec}`)
                          ? "bg-brand text-white"
                          : "bg-brand/10 text-brand hover:bg-brand hover:text-white"
                      }`}
                    >
                      {selectedItems.includes(`DVR Programming - ${item.spec}`) ? "SELECTED ✓" : "ADD"}
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-6 items-center bg-brand-soft/20">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-brand">Online Mobile View Sync</h3>
                </div>
                <p className="text-sm text-muted-foreground">Remote DNS linking, mobile application synchronization, secure cloud routing activation.</p>
                <div className="text-sm font-bold text-emerald-600 md:text-right">COMPLIMENTARY</div>
                <div className="md:text-center">
                  <span className="text-xs font-bold text-muted-foreground bg-secondary px-3 py-1.5 rounded uppercase">Free With Tier</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Premium Infrastructure Cabling Solutions */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Settings className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">3. Premium Infrastructure Cabling</h2>
          </div>
          <p className="text-muted-foreground mb-6">Heavy-gauge wear-resistant material configurations priced accurately per meter.</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { type: "Open Layout Cabling", desc: "Direct industrial clips, clean line routing.", price: "₹25 / m" },
              { type: "Heavy-Duty Piping Protected", desc: "Secured inside solid PVC conduits for enhanced weather insulation.", price: "₹40 / m" },
              { type: "Polished Wall Casing", desc: "Clean rectangular profile micro-casings for minimal aesthetic disturbance.", price: "₹50 / m" },
              { type: "Concealed Internal / PoP Piping", desc: "In-spring flexible deployment embedded within false ceilings or walls.", price: "₹50 / m" },
            ].map((cab, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-foreground leading-tight">{cab.type}</h3>
                    <span className="text-lg font-bold text-brand whitespace-nowrap">{cab.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{cab.desc}</p>
                </div>
                <button 
                  onClick={() => toggleSelection(`Cabling: ${cab.type}`)} 
                  className={`mt-6 w-full border border-border px-4 py-2 rounded-lg font-bold transition ${
                    selectedItems.includes(`Cabling: ${cab.type}`)
                      ? "bg-brand text-white border-brand"
                      : "bg-secondary hover:bg-foreground hover:text-background text-foreground"
                  }`}
                >
                  {selectedItems.includes(`Cabling: ${cab.type}`) ? "Selected ✓" : "Select"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Ancillary Structural Mounting & Fixes */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Wrench className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">4. Structural Mounting & Fixes</h2>
          </div>
          <p className="text-muted-foreground mb-6">Ergonomic structural back-bracket anchoring and strategic placement layout configurations.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><HardDrive className="h-5 w-5 text-muted-foreground" /> Heavy Iron DVR Rack Installation</h3>
              <div className="space-y-4">
                {[
                  { name: "Compact / Small Rack", price: "₹200 - 400" },
                  { name: "Standard / Medium Rack", price: "₹400 - 900" },
                  { name: "Enterprise / Large Rack", price: "₹1.5K - 3.5K" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="font-bold">{item.price}</span>
                      <button 
                        onClick={() => toggleSelection(`Rack Install: ${item.name}`)} 
                        className={`font-bold text-sm hover:underline ${
                          selectedItems.includes(`Rack Install: ${item.name}`) ? "text-brand" : "text-brand"
                        }`}
                      >
                        {selectedItems.includes(`Rack Install: ${item.name}`) ? "ADDED ✓" : "ADD +"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Monitor className="h-5 w-5 text-muted-foreground" /> LED Display / Monitor Wall Mounting</h3>
              <div className="space-y-4">
                {[
                  { name: 'Up to 19" Monitors (Normal)', price: "₹300" },
                  { name: '20" to 32" Smart TVs', price: "₹500 - 800" },
                  { name: 'Above 32" Large Displays', price: "Inspection" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="font-bold">{item.price}</span>
                      <button 
                        onClick={() => toggleSelection(`Monitor Install: ${item.name}`)} 
                        className={`font-bold text-sm hover:underline ${
                          selectedItems.includes(`Monitor Install: ${item.name}`) ? "text-brand" : "text-brand"
                        }`}
                      >
                        {selectedItems.includes(`Monitor Install: ${item.name}`) ? "ADDED ✓" : "ADD +"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. On-Demand Diagnostic Check & Repair */}
        <section className="bg-red-50 dark:bg-red-950/20 rounded-3xl p-8 border border-red-100 dark:border-red-900/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-500 text-white p-2 rounded-lg"><Activity className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold text-red-950 dark:text-red-400">5. On-Demand Diagnostic & Repair</h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-black rounded-lg px-4 py-2 border border-red-200 dark:border-red-800 shadow-sm mb-8 text-sm font-bold">
            <span>🏷️</span> Flat ₹249 Expert Inspection Fee (Completely waived off if any on-site fix is authorized)
          </div>
          
          <div className="grid gap-4">
            {[
              { title: "Video Loss & Blank Screen Resolution", desc: "Complete multi-node feed tracking, power loop analytics, and signal restoration." },
              { title: "Night Vision & Focus Diagnostics", desc: "Infrared sensor re-calibration, camera lens optimization, and micro-dust cleaning processing." },
              { title: "NVR / DVR Boot-Loop & Beep Fixes", desc: "OS level recovery diagnostics, memory sector re-allocation, and hard drive storage formatting resets." },
              { title: "PoE Switch & Power Fluctuation Fixes", desc: "Power management load balancing diagnostics, multi-meter voltage tracking, and full replacement analysis." },
              { title: "Damaged Cable Splicing", desc: "Precise high-conductivity multi-core terminal core re-joining with weatherized resilient re-taping safeguards." },
            ].map((diag, i) => (
              <div key={i} className="bg-white dark:bg-card border border-red-100 dark:border-red-900/30 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                <div className="flex-1">
                  <h3 className="font-bold text-red-900 dark:text-red-400 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> {diag.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{diag.desc}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-bold whitespace-nowrap">₹249 / Job</span>
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
        <section className="fixed bottom-6 right-6 z-50">
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
                <div>Proceed to WhatsApp ➔</div>
              </div>
            </button>
          ) : (
            <button 
              onClick={() => handleWhatsApp("General Inquiry: Need a Certified Technician")}
              className="bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs font-normal opacity-90">Need a Technician?</div>
                <div>Book via WhatsApp</div>
              </div>
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
