import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, ShieldCheck, Clock, 
  Video, HardDrive, Settings, Phone, 
  CheckCircle2, Monitor, Wrench, Box, Cable, Zap, Server, SwitchCamera,
  Search, Shield, CheckSquare, Square
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cameraPriceList = [
  {
    series: "5MP FULL COLORVU EH55 PCB",
    items: [
      { name: "Plastic dome", price: 1900 },
      { name: "Bullet plastic", price: 2000 }
    ]
  },
  {
    series: "5MP DUAL HYBRID LED H50 PCB",
    items: [
      { name: "Plastic dome", price: 2100 },
      { name: "Bullet plastic", price: 2200 },
      { name: "Metal bullet", price: 2500 }
    ]
  },
  {
    series: "6MP DUAL HYBRID LED ZT6 PCB",
    items: [
      { name: "Plastic dome", price: 2650 },
      { name: "Plastic bullet", price: 2750 },
      { name: "Metal bullet", price: 3050 }
    ]
  },
  {
    series: "5MP IP ASTRA SERIES H55 Dual led",
    items: [
      { name: "Half Metal Dome", price: 3000 },
      { name: "Half Metal Bullet", price: 3100 },
      { name: "Full Metal Dome", price: 3400 },
      { name: "Full Metal Bullet", price: 3800 }
    ]
  },
  {
    series: "5MP AI SERIES WITH ADVANCED FUNCTIONS",
    features: "Face Detection | Face Recognition | People Counting | Line Crossing",
    items: [
      { name: "Big Size Dome", price: 5400 },
      { name: "Metal Bullet", price: 6000 }
    ]
  },
  {
    series: "8MP HISILICON SOC REAL 4K H88",
    features: "Dual Hybrid LED",
    items: [
      { name: "Metal Dome", price: 5000 },
      { name: "Metal Bullet", price: 5500 }
    ]
  }
];

const accessories = [
  { name: "Rack", price: "₹800 - ₹35,000", image: "/acc_rack.png" },
  { name: "Wall Mounting Clamp", price: "₹150 - ₹8,000", image: "/acc_wall_clamp.png" },
  { name: "Camera Extender", price: "₹150 - ₹7,000", image: "/acc_camera_extender.png" },
  { name: "Camera PVC Box", price: "₹50 - ₹600", image: "/acc_pvc_box.png" },
  { name: "Spikebuster", price: "₹300 - ₹1,600", image: "/acc_spikebuster.png" },
  { name: "Installation Misc (Tape, Screw)", price: "₹50 - ₹250", image: "/acc_misc.png" },
  { name: "Casing Pipe", price: "₹50 - ₹250", image: "/acc_casing_pipe.png" },
  { name: "PVC Wallpipe", price: "₹50 - ₹250", image: "/acc_pvc_wallpipe.png" },
  { name: "RJ45 Connectors", price: "₹5 - ₹75", image: "/acc_rj45.png" },
  { name: "BNC Connectors", price: "₹5 - ₹180", image: "/acc_bnc.png" },
  { name: "Video Bullet Connector", price: "₹75 - ₹450", image: "/acc_video_bullet.png" },
  { name: "DC Connector", price: "₹5 - ₹45", image: "/acc_dc_connector.png" },
  { name: "Junction Box", price: "₹50 - ₹250", image: "/acc_pvc_box.png" },
  { name: "L & Join Clamps", price: "₹4 - ₹50", image: "/acc_wall_clamp.png" },
  { name: "HDMI Cable", price: "₹150 - ₹6,000", image: "/cctv_cables.png" },
  { name: "VGA Cable", price: "₹150 - ₹6,000", image: "/cctv_cables.png" },
  { name: "Monitors", price: "₹2,500 - ₹12,000", image: "/cctv_monitor.png" },
  { name: "Simcard Router", price: "₹1,800 - ₹5,500", image: "/cctv_router.png" },
  { name: "Adapters & Cables", price: "₹50 - ₹700", image: "/cctv_cables.png" },
  { name: "RJ45 to BNC", price: "₹150 - ₹450", image: "/cctv_connectors.png" }
];

const serviceOptions = [
  { id: "cam-repair", label: "CAMERA Repair/Service", image: "/acc_camera_extender.png" },
  { id: "nvr-repair", label: "NVR Repair/Service", image: "/acc_rack.png" },
  { id: "dvr-repair", label: "DVR Repair/Service", image: "/acc_rack.png" },
  { id: "hdd-replace", label: "Hardisk Replacement", image: "/acc_pvc_box.png" },
  { id: "psu-repair", label: "Power Supply Unit", image: "/acc_dc_connector.png" },
  { id: "poe-switch", label: "Poe Switch Setup/Repair", image: "/cctv_router.png" },
  { id: "connector", label: "Connector Replacement", image: "/acc_bnc.png" },
  { id: "wiring", label: "Cable/Wiring Service", image: "/cctv_cables.png" },
  { id: "mobile-view", label: "Online Mobile View Setup", image: "/cctv_monitor.png" },
  { id: "shifting", label: "Shifting System", image: "/acc_misc.png" },
  { id: "uninstall", label: "Uninstall Full Set-up", image: "/acc_wall_clamp.png" },
  { id: "other", label: "Other Service", image: "/cctv_cables.png" }
];

export function CCTVSurveillanceDetails() {
  const WHATSAPP_NUMBER = "919141052539"; 
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchAccessory, setSearchAccessory] = useState("");
  
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
      text = `Hello Vendor99, I would like to book or inquire about: *${serviceName}* (CCTV & Surveillance)`;
    } else if (selectedItems.length > 0) {
      const itemList = selectedItems.map(item => `- ${item}`).join('\n');
      text = `Hello Vendor99, I would like to book or inquire about the following services (CCTV & Surveillance):\n\n${itemList}`;
    } else {
      text = `Hello Vendor99, I need a Certified Technician for CCTV & Surveillance.`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const filteredAccessories = accessories.filter(a => a.name.toLowerCase().includes(searchAccessory.toLowerCase()));

  return (
    <div className="bg-background min-h-screen pb-32 font-sans">
      {/* Header */}
      <header className="bg-foreground text-background py-16 px-6 relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand/20 blur-[100px] opacity-60 pointer-events-none" />
        <div className="mx-auto max-w-6xl relative z-10">
          <Link to="/services" className="inline-flex items-center text-sm font-bold text-background/70 hover:text-white transition-colors mb-8 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-brand font-extrabold tracking-widest uppercase text-sm mb-3">Vendor99 Security Systems</p>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Smart Home & CCTV<br/>Professional Services</h1>
            </motion.div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleWhatsApp("CCTV Consultation")}
              className="bg-brand text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-dark transition-all shadow-xl hover:shadow-brand/20"
            >
              <Phone className="h-5 w-5 fill-current" />
              Chat on WhatsApp
            </motion.button>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="border-b border-border/50 bg-white">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/50">
          <div className="p-8 flex items-center gap-5 hover:bg-secondary/20 transition-colors">
            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 shadow-sm">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-extrabold text-foreground text-lg">Verified Experts</h3>
              <p className="text-sm font-medium text-muted-foreground mt-1">100% background-checked.</p>
            </div>
          </div>
          <div className="p-8 flex items-center gap-5 hover:bg-secondary/20 transition-colors">
            <div className="bg-blue-100 p-4 rounded-2xl text-blue-600 shadow-sm">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-extrabold text-foreground text-lg">Protection Insurance</h3>
              <p className="text-sm font-medium text-muted-foreground mt-1">Up to ₹10,000 coverage.</p>
            </div>
          </div>
          <div className="p-8 flex items-center gap-5 hover:bg-secondary/20 transition-colors">
            <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 shadow-sm">
              <Clock className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-extrabold text-foreground text-lg">On-Time Guarantee</h3>
              <p className="text-sm font-medium text-muted-foreground mt-1">Prompt deployment always.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 space-y-20">

        {/* 1. Book A Service Checklist */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-premium text-white p-3 rounded-2xl shadow-md"><Settings className="h-6 w-6" /></div>
            <h2 className="text-3xl font-extrabold tracking-tight">Book A Service</h2>
          </div>
          
          <div className="bg-white border border-border/50 rounded-[2.5rem] shadow-premium overflow-hidden">
            <div className="bg-secondary/50 p-6 border-b border-border/50">
              <h3 className="font-extrabold text-lg text-foreground">Select Services for Home Security</h3>
              <p className="text-muted-foreground font-medium text-sm mt-1">Choose the type of service you need</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {serviceOptions.map((opt) => {
                  const isSelected = selectedItems.includes(opt.label);
                  return (
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={opt.id}
                      onClick={() => toggleSelection(opt.label)}
                      className={`cursor-pointer rounded-2xl p-4 flex items-center justify-between border-2 transition-all ${
                        isSelected 
                          ? "border-brand bg-brand/5 shadow-sm" 
                          : "border-border/50 bg-white hover:border-brand/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-12 w-12 p-1.5 rounded-xl overflow-hidden ${isSelected ? 'bg-brand/10' : 'bg-secondary'}`}>
                          <img src={opt.image} alt={opt.label} className="h-full w-full object-cover mix-blend-multiply" />
                        </div>
                        <span className={`font-bold text-sm ${isSelected ? 'text-brand' : 'text-foreground'}`}>{opt.label}</span>
                      </div>
                      {isSelected ? <CheckSquare className="h-5 w-5 text-brand" /> : <Square className="h-5 w-5 text-muted-foreground opacity-50" />}
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <div className="bg-red-50 p-6 text-center border-t border-red-100">
              <h4 className="text-red-900 font-extrabold text-xl">Minimum Visit Charge: ₹499</h4>
              <p className="text-red-800/80 text-xs font-bold mt-2 max-w-xl mx-auto uppercase tracking-wide">*Includes basic diagnostic. Extra charges for spare parts, transport, and multiple visits apply.</p>
            </div>
          </div>
        </section>

        {/* 2. Security Cameras Price List */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-foreground text-background p-3 rounded-2xl shadow-md"><Video className="h-6 w-6" /></div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Security Cameras Catalog</h2>
              <p className="text-muted-foreground font-medium mt-1">PRICE LIST - (New Prices Applied)</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cameraPriceList.map((cam, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white border border-border/50 rounded-[2rem] p-6 shadow-card hover:shadow-premium transition-all flex flex-col"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-secondary/50 p-4 rounded-2xl shrink-0">
                    <Video className="h-8 w-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg leading-tight text-foreground">{cam.series}</h3>
                    {cam.features && <p className="text-xs font-bold text-primary mt-2 uppercase tracking-wide">{cam.features}</p>}
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-2xl p-5 flex-1 border border-border/50">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-border/50">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Variant</span>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Web Price</span>
                  </div>
                  <div className="space-y-4">
                    {cam.items.map((item, j) => (
                      <div key={j} className="flex justify-between items-center group">
                        <span className="font-semibold text-sm group-hover:text-primary transition-colors">{item.name}</span>
                        <span className="font-extrabold text-base">₹{item.price}/-</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => handleWhatsApp(`Inquiry for Camera: ${cam.series}`)}
                  className="mt-6 w-full py-3 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors"
                >
                  Request Quote
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. CCTV Accessories & Spare Parts */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-premium text-white p-3 rounded-2xl shadow-md"><Server className="h-6 w-6" /></div>
            <h2 className="text-3xl font-extrabold tracking-tight">CCTV Accessories & Spare Parts</h2>
          </div>
          
          <div className="bg-white border border-border/50 rounded-[2.5rem] shadow-card overflow-hidden">
            <div className="p-6 border-b border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 bg-secondary/30">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search categories..." 
                  value={searchAccessory}
                  onChange={(e) => setSearchAccessory(e.target.value)}
                  className="w-full bg-white border border-border/50 rounded-xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <AnimatePresence>
                  {filteredAccessories.map((acc, i) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={acc.name}
                      className="bg-white border border-border/50 rounded-2xl p-5 hover:border-primary/50 hover:shadow-card transition-all flex flex-col items-center text-center cursor-pointer group"
                      onClick={() => toggleSelection(`Accessory: ${acc.name}`)}
                    >
                      <div className="h-28 w-full bg-secondary/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                        <img src={acc.image} alt={acc.name} className="h-full w-full object-cover mix-blend-multiply" />
                      </div>
                      <h3 className="font-bold text-sm leading-snug mb-2">{acc.name}</h3>
                      <p className="text-sm font-extrabold text-brand mt-auto">{acc.price}</p>
                      
                      <button className={`mt-4 w-full py-2 rounded-xl text-xs font-bold transition-colors ${
                        selectedItems.includes(`Accessory: ${acc.name}`)
                          ? "bg-brand text-white"
                          : "bg-foreground text-background group-hover:bg-brand group-hover:text-white"
                      }`}>
                        {selectedItems.includes(`Accessory: ${acc.name}`) ? "ADDED ✓" : "Shop Now"}
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Installation & Infrastructure Cabling (Condensed) */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand text-white p-3 rounded-2xl shadow-md"><Cable className="h-6 w-6" /></div>
            <h2 className="text-3xl font-extrabold tracking-tight">Premium Infrastructure Cabling</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Open Layout Cabling", desc: "Direct industrial clips", price: "₹25 / m" },
              { type: "Heavy-Duty Piping Protected", desc: "Secured inside solid PVC conduits", price: "₹40 / m" },
              { type: "Polished Wall Casing", desc: "Clean rectangular profile casings", price: "₹50 / m" },
              { type: "Concealed Internal Piping", desc: "In-spring flexible deployment", price: "₹50 / m" },
            ].map((cab, i) => (
              <div key={i} className="bg-white border border-border/50 rounded-[2rem] p-6 shadow-sm flex flex-col justify-between hover:shadow-card transition-shadow">
                <div>
                  <h3 className="font-bold text-lg text-foreground leading-tight">{cab.type}</h3>
                  <p className="text-sm font-medium text-muted-foreground mt-2">{cab.desc}</p>
                </div>
                <div className="mt-6">
                  <span className="text-2xl font-extrabold text-brand block mb-4">{cab.price}</span>
                  <button 
                    onClick={() => toggleSelection(`Cabling: ${cab.type}`)} 
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      selectedItems.includes(`Cabling: ${cab.type}`)
                        ? "bg-brand text-white shadow-md"
                        : "bg-secondary text-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {selectedItems.includes(`Cabling: ${cab.type}`) ? "Selected ✓" : "Add Service"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Floating WhatsApp CTA */}
        <AnimatePresence>
          <section className="fixed bottom-8 right-8 z-50">
            {selectedItems.length > 0 ? (
              <motion.button 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsApp()}
                className="bg-brand text-white px-8 py-5 rounded-full shadow-premium flex items-center gap-4 font-bold"
              >
                <div className="bg-white text-brand rounded-full h-8 w-8 flex items-center justify-center text-sm font-extrabold">
                  {selectedItems.length}
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium opacity-90 uppercase tracking-wider">Send Request</div>
                  <div className="text-lg">Checkout via WhatsApp ➔</div>
                </div>
              </motion.button>
            ) : (
              <motion.button 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsApp("General Inquiry: Need a Certified Technician")}
                className="bg-[#25D366] text-white px-8 py-5 rounded-full shadow-premium flex items-center gap-4 font-bold"
              >
                <Phone className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs font-medium opacity-90 uppercase tracking-wider">Need Help?</div>
                  <div className="text-lg">Chat via WhatsApp</div>
                </div>
              </motion.button>
            )}
          </section>
        </AnimatePresence>
      </div>
    </div>
  );
}
