import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, ShieldCheck, 
  Paintbrush, Home, LayoutTemplate,
  Phone, Sparkles, BoxSelect, AlertCircle, Info
} from "lucide-react";

export function HomeInteriorDetails() {
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
      text = `Hello Vendor99, I would like to book or inquire about: *${serviceName}* (Home Interior & Painting)`;
    } else if (selectedItems.length > 0) {
      const itemList = selectedItems.map(item => `- ${item}`).join('\n');
      text = `Hello Vendor99, I would like to book or inquire about the following services (Home Interior & Painting):\n\n${itemList}`;
    } else {
      text = `Hello Vendor99, I need a Premium Home Makeover Consultation.`;
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
              <p className="text-brand font-bold tracking-widest uppercase text-sm mb-2">vendor99</p>
              <h1 className="text-3xl md:text-5xl font-bold">PREMIUM HOME INTERIOR<br/>& PAINTING SOLUTIONS</h1>
            </div>
            <button 
              onClick={() => handleWhatsApp("Interior Consultation")}
              className="bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors"
            >
              <Phone className="h-5 w-5" />
              Consult via WhatsApp
            </button>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-6 flex items-start gap-4">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400">
              <BoxSelect className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Premium Masking</h3>
              <p className="text-sm text-muted-foreground mt-1">Full asset masking, heavy surface protective wrapping, and careful furniture shifting protocols.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Spotless Handover</h3>
              <p className="text-sm text-muted-foreground mt-1">Comprehensive space cleanup, daily debris clearing, and reset of assets to their original layout lines.</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-4">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">₹10K Cover Guarantee</h3>
              <p className="text-sm text-muted-foreground mt-1">Automated accidental damage platform insurance protection active for all digital bookings.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-12">
        
        {/* 1. Wall Makeovers, Panels & Mouldings */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><LayoutTemplate className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">1. Wall Makeovers, Panels & Mouldings</h2>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold">★ 4.9 Top-Rated Interior Experts</span>
          </div>
          <p className="text-muted-foreground mb-6">Premium architectural accent conversions. Billed via precise on-site mapping iterations.</p>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 shadow-sm flex gap-4 mb-6">
            <Info className="h-6 w-6 text-blue-500 shrink-0" />
            <div>
              <h3 className="font-bold text-blue-900 dark:text-blue-400 flex items-center gap-2">📐 Expert Pre-Consultation Rule:</h3>
              <p className="text-sm text-blue-800 dark:text-blue-500 mt-2">
                Spaces require a flat <strong>₹499</strong> design mapping visit. This layout audit fee is credited and
                balanced directly inside your final consolidated project bill once material execution is authorized.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              { 
                name: "At-Home Expert Space Consultation & Laser Survey", 
                desc: "Complete spatial color coordination, panel placement measurements, material catalog display, and formal commercial quoting loop.", 
                price: "₹499",
                btnText: "BOOK"
              },
              { 
                name: "Premium Accent Wall Panel & Moulding Transformations", 
                desc: "Turnkey high-end structural paneling setups, classical wall trims, or geometric profile louvers. (Applicable exclusively for custom project values exceeding a baseline minimum of ₹25,000).", 
                price: "On Survey",
                btnText: "GET QUOTE"
              }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
                <div className="flex items-center gap-6 md:border-l border-border md:pl-6">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase font-bold">Package Rate</p>
                    <p className="text-xl font-bold whitespace-nowrap">{item.price}</p>
                  </div>
                  <button 
                    onClick={() => toggleSelection(item.name)} 
                    className={`px-6 py-2.5 rounded-lg font-bold transition-colors min-w-[120px] ${
                      selectedItems.includes(item.name)
                        ? "bg-brand text-white"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    {selectedItems.includes(item.name) ? "SELECTED ✓" : item.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Target Area & Individual Room Painting */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Paintbrush className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">2. Target Area & Individual Room Painting</h2>
          </div>
          <p className="text-muted-foreground mb-6">Fixed transparent rates covering localized residential wall refreshing.</p>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_150px_120px_120px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid">
              <div>Target Zone</div>
              <div>Timeline</div>
              <div className="text-right">Starting Rate</div>
              <div className="text-center">Action</div>
            </div>
            
            <div className="divide-y divide-border">
              {[
                { zone: "Single Wall Accent Treatment", time: "9 Standard hours", price: "₹2,499" },
                { zone: "Two or More Accent Walls Combo", time: "2 Full business days", price: "₹3,999" },
                { zone: "Complete Standard Bedroom Suite", time: "2 Full business days", price: "₹5,499" },
                { zone: "Living & Dining Hall Master Upgrade", time: "2 Full business days", price: "₹9,499" },
                { zone: "Modular Kitchen Coating Overhaul", time: "2 Full business days", price: "₹3,499" },
                { zone: "Bathroom Anti-Moisture Wall Coating", time: "9 Standard hours", price: "₹2,999" },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[2fr_150px_120px_120px] gap-4 p-6 items-center">
                  <h3 className="font-bold text-foreground">{item.zone}</h3>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                  <div className="text-xl font-bold md:text-right whitespace-nowrap">{item.price}</div>
                  <div className="md:text-center">
                    <button 
                      onClick={() => toggleSelection(`Painting: ${item.zone}`)} 
                      className={`px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${
                        selectedItems.includes(`Painting: ${item.zone}`)
                          ? "bg-brand text-white"
                          : "bg-brand/10 text-brand hover:bg-brand hover:text-white"
                      }`}
                    >
                      {selectedItems.includes(`Painting: ${item.zone}`) ? "ADDED ✓" : "ADD"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Turnkey Apartment Multi-Coat Packages */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Home className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">3. Turnkey Apartment Multi-Coat Packages</h2>
          </div>
          <p className="text-muted-foreground mb-6">Comprehensive multi-room solutions calculated precisely across furnished and raw environments.</p>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_150px_120px_120px_120px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid">
              <div>Configuration</div>
              <div>Execution Window</div>
              <div>Unfurnished</div>
              <div>Furnished</div>
              <div className="text-center">Action</div>
            </div>
            
            <div className="divide-y divide-border">
              {[
                { size: "1 BHK Apartment Package", time: "3 business days", unfurnished: "₹9,499", furnished: "₹9,999" },
                { size: "2 BHK Apartment Package", time: "3 to 4 business days", unfurnished: "₹12,999", furnished: "₹13,499" },
                { size: "3 BHK Apartment Package", time: "4 to 5 business days", unfurnished: "₹16,999", furnished: "₹16,149" },
              ].map((pack, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_150px_120px_120px_120px] gap-4 p-6 items-center">
                  <h3 className="font-bold text-foreground">{pack.size}</h3>
                  <div className="text-sm text-muted-foreground">{pack.time}</div>
                  <div className="text-sm font-medium"><span className="md:hidden text-muted-foreground">Unfurnished: </span>{pack.unfurnished}</div>
                  <div className="text-sm font-medium"><span className="md:hidden text-muted-foreground">Furnished: </span>{pack.furnished}</div>
                  <div className="md:text-center mt-2 md:mt-0">
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

        {/* 4. Specialty Infrastructure Care */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white p-2 rounded-lg"><Sparkles className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold">4. Specialty Infrastructure Care & Handover Sweeps</h2>
          </div>
          <p className="text-muted-foreground mb-6">Extended finish options and specialized industrial deep cleaning to conclude renovations.</p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Wood Polish / Built-in Wardrobe Painting", desc: "Surface leveling and grain enrichment layers.", time: "3 Hours execution", price: "₹1,999", btnText: "ADD" },
              { title: "Main Entry Door High-Gloss Enamel", desc: "Weatherproofing and double-coat perimeter sealing.", time: "9 Hours execution", price: "₹2,499", btnText: "ADD" },
              { title: "Full Furnished House Deep Cleaning", desc: "Industrial vacuuming, window track cleaning, and chemical stain stripping.", time: "Turnkey sweep", price: "₹3,499", btnText: "ADD" },
              { title: "Intense Deep Bathroom Acid Scrubbing", desc: "Covers 2 legacy bathrooms. Scale removal and mirror buffing.", time: "3 Hours execution", price: "₹1,016 Package", btnText: "BUNDLE" },
            ].map((spec, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-foreground leading-tight">{spec.title}</h3>
                    <span className="text-lg font-bold text-brand whitespace-nowrap">{spec.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{spec.desc}</p>
                  <p className="text-xs font-semibold mt-4 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 inline-block px-2 py-1 rounded">⏱ {spec.time}</p>
                </div>
                <button 
                  onClick={() => toggleSelection(`Specialty: ${spec.title}`)} 
                  className={`mt-6 w-full border border-border px-4 py-2 rounded-lg font-bold transition ${
                    selectedItems.includes(`Specialty: ${spec.title}`)
                      ? "bg-brand text-white border-brand"
                      : "bg-secondary hover:bg-foreground hover:text-background text-foreground"
                  }`}
                >
                  {selectedItems.includes(`Specialty: ${spec.title}`) ? "Selected ✓" : spec.btnText}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Project Rules & Policies */}
        <section className="bg-secondary/30 rounded-3xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="h-6 w-6 text-foreground" />
            <h2 className="text-2xl font-bold text-foreground">PROJECT OPERATIONAL RULES & POLICIES</h2>
          </div>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-foreground">•</span>
              <span><strong className="text-foreground">Installment Schedule:</strong> Structural renovations follow a verified dual payment milestone loop: 35% upfront balance due at blueprint lock, and the 65% remaining balance processed post-handover customer validation.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-foreground">•</span>
              <span><strong className="text-foreground">Late Cancellation Clawback:</strong> Mobilization cancellations requested under less than a 24-hour window from the target scheduling slot trigger an automated ₹1,000 cancellation charge.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-foreground">•</span>
              <span><strong className="text-foreground">Inventory Management Safeguards:</strong> Painting crews handle all hardware masking, furniture shifting assistance, and baseline wrapping protection. Heavy structural built-in adjustments must be flagged post-consultation survey loop.</span>
            </li>
          </ul>
        </section>

        {/* Floating WhatsApp CTA */}
        <section className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {selectedItems.length === 0 && (
            <div className="bg-white dark:bg-card border border-border shadow-lg p-3 rounded-xl text-xs mb-2 animate-bounce flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span>Ready to Conceptualize a Premium Home Makeover?</span>
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
                <div>Proceed to WhatsApp ➔</div>
              </div>
            </button>
          ) : (
            <button 
              onClick={() => handleWhatsApp("General Inquiry: Premium Home Makeover")}
              className="bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs font-normal opacity-90">Skip traditional delayed agency consultations</div>
                <div>🟢 Consult via WhatsApp</div>
              </div>
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
