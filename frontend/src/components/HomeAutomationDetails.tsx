import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, ShieldCheck, Clock, 
  Home, Lock, Zap, Smartphone,
  Phone, CheckCircle2, AlertTriangle, Speaker, Tv
} from "lucide-react";
import { DynamicPrice } from "@/components/DynamicPrice";

export function HomeAutomationDetails() {
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
              <h1 className="text-3xl md:text-5xl font-bold">SMART HOME AUTOMATION<br/>SOLUTIONS</h1>
            </div>
            <button 
              onClick={() => handleWhatsApp("Home Automation Consultation")}
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
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">3-Year Hardware Warranty</h3>
              <p className="text-sm text-muted-foreground mt-1">Extended 36-month unconditional replacement guarantee valid on all premium Native line smart components.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">30-Day Work Guarantee</h3>
              <p className="text-sm text-muted-foreground mt-1">Every execution layer and third-party node synchronization includes an uncompromised platform backing layout.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full text-red-600 dark:text-red-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Transmit Protection</h3>
              <p className="text-sm text-muted-foreground mt-1">Up to ₹10,000 comprehensive protective coverage mapped across internal structural modules.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-12">
        
        {/* 1. Proprietary Smart Security Systems */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Home className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">1. Proprietary Smart Security Systems</h2>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold">★ 4.9 Smart Deployment Engineers</span>
          </div>
          <p className="text-muted-foreground mb-6">Premium unified hardware ecosystems. Includes door-step expert mounting, loop testing, and extended 3-year warranty covers.</p>
          
          <div className="grid gap-4">
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
              <div className="flex-1">
                <h3 className="text-lg font-bold">Native Smart Door Lock Pro Edition</h3>
                <p className="text-sm text-muted-foreground mt-2">Advanced 7-way unlock matrix (Biometric fingerprint, secure app remote routing, dual passcodes, RFID cards, and physical escape keys). Integrated HD security camera with BellConnect™ automatic visitor image routing.</p>
              </div>
              <div className="flex items-center gap-6 md:border-l border-border md:pl-6">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase font-bold">Package Price</p>
                  <DynamicPrice originalPrice="₹14,999 - ₹16,999" category="Smart Home Automation" discountClassName="text-xl font-bold whitespace-nowrap" />
                </div>
                <button 
                  onClick={() => toggleSelection("Native Smart Door Lock Pro Edition")} 
                  className={`px-6 py-2.5 rounded-lg font-bold transition-colors ${
                    selectedItems.includes("Native Smart Door Lock Pro Edition")
                      ? "bg-brand text-white"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {selectedItems.includes("Native Smart Door Lock Pro Edition") ? "SELECTED ✓" : "ADD"}
                </button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
              <div className="flex-1">
                <h3 className="text-lg font-bold">Native Smart Door Lock Ultra Premium</h3>
                <p className="text-sm text-muted-foreground mt-2">Ultimate 9-way locking architecture adding immediate 3D Face Unlock recognition, real-time live two-way talk audio video streaming, and built-in proximity loitering/lurker alarm triggers.</p>
              </div>
              <div className="flex items-center gap-6 md:border-l border-border md:pl-6">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase font-bold">Package Price</p>
                  <DynamicPrice originalPrice="₹24,999" category="Smart Home Automation" discountClassName="text-xl font-bold whitespace-nowrap" />
                </div>
                <button 
                  onClick={() => toggleSelection("Native Smart Door Lock Ultra Premium")} 
                  className={`px-6 py-2.5 rounded-lg font-bold transition-colors ${
                    selectedItems.includes("Native Smart Door Lock Ultra Premium")
                      ? "bg-brand text-white"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {selectedItems.includes("Native Smart Door Lock Ultra Premium") ? "SELECTED ✓" : "ADD"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. On-Demand Third-Party Smart Device Installations */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Zap className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">2. On-Demand Third-Party Smart Device Installations</h2>
          </div>
          <p className="text-muted-foreground mb-6">Pay-per-node specialized labor solutions for products purchased from other mainstream brands (Philips, Wipro, Oakter, Mi, etc.).</p>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid">
              <div>Automation Node Type</div>
              <div>Service Scope</div>
              <div className="text-right">Labor Rate</div>
              <div className="text-center">Action</div>
            </div>
            
            <div className="divide-y divide-border">
              {[
                { spec: "Smart Switchboard / Retrofit Modules", desc: "Wiring automation micro-modules directly behind structural switchboxes; pairing with master network hubs.", price: "₹99 - ₹149" },
                { spec: "Wireless Wi-Fi CCTV Setup", desc: "Rigid surface mounting, neat power cable routing, micro-SD provisioning, and cloud streaming alignment.", price: "₹299 / Node" },
                { spec: "Smart Video Doorbell Setup", desc: "Replacing legacy analog chimes with wireless video nodes, multi-user pairing, and electronic lock syncing.", price: "₹600" },
                { spec: "Smart / BLDC Fan Integration", desc: "Structural ceiling suspension, dynamic bracket balancing, RF remote registration, and network hub syncing.", price: "₹99" },
                { spec: "Home Theater System Layout", desc: "Surround audio staging and calibration for up to 2 distinct speakers, 1 centered soundbar, and 1 subwoofer unit.", price: "₹1,199" },
                { spec: "Smart TV Wall Mounting & Sync", desc: "Heavy anchoring of custom brackets, level balancing, voice-assistant integration, and smart app routing.", price: "₹399" },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-6 items-center">
                  <h3 className="font-bold text-foreground">{item.spec}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <DynamicPrice originalPrice={item.price} category="Smart Home Automation" className="md:justify-end" discountClassName="text-xl font-bold md:text-right" />
                  <div className="md:text-center">
                    <button 
                      onClick={() => toggleSelection(`Install: ${item.spec}`)} 
                      className={`px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${
                        selectedItems.includes(`Install: ${item.spec}`)
                          ? "bg-brand text-white"
                          : "bg-brand/10 text-brand hover:bg-brand hover:text-white"
                      }`}
                    >
                      {selectedItems.includes(`Install: ${item.spec}`) ? "ADDED ✓" : "ADD +"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Policies */}
        <section className="bg-secondary/30 rounded-3xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-foreground">Operational Policies & Guidelines</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Consultation / Initial Diagnosis</h4>
                <p className="text-sm text-muted-foreground mt-1">Switchbox audit or comprehensive ecosystem consultation loops carry a flat ₹49 diagnostic visit fee if no installation services are proceeded with.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Material Exclusions</h4>
                <p className="text-sm text-muted-foreground mt-1">Billed labor charges cover standard execution loops. Structural masonry materials, additional external core cables, or heavy anchor brackets are billed dynamically based on exact material use.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Platform Protection Loop</h4>
                <p className="text-sm text-muted-foreground mt-1">Warranty benefits and protection insurances remain strictly active inside the system database only for work elements fully recorded and executed through authorized digital booking routes.</p>
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
              <span>Need a Certified Automation Engineer at Your Doorstep?</span>
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
              onClick={() => handleWhatsApp("General Inquiry: Need a Certified Automation Engineer")}
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
        onSuccess={() => setSelectedItems([])}
      />
</div>
  );
}
