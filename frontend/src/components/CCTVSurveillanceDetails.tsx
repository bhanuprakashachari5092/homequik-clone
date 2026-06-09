import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { 
  ArrowLeft, ShieldCheck, Clock, 
  Video, Phone, CheckCircle2, Server, Search, CheckSquare, Square,
  Wrench, ShoppingCart, Check, Shield, Award, Settings
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { BookingModal } from "@/components/BookingModal";

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

const repairServices = [
  { id: "cam-repair", label: "CAMERA", image: "/acc_camera_extender.png" },
  { id: "nvr-repair", label: "NVR", image: "/acc_rack.png" },
  { id: "dvr-repair", label: "DVR", image: "/acc_rack.png" },
  { id: "hdd-replace", label: "Hardisk", image: "/acc_pvc_box.png" },
  { id: "psu-repair", label: "Power supply", image: "/acc_dc_connector.png" },
  { id: "poe-switch", label: "Poe switch", image: "/cctv_router.png" },
  { id: "connector", label: "Connector", image: "/acc_bnc.png" },
  { id: "wiring", label: "Cable", image: "/cctv_cables.png" },
  { id: "mobile-view", label: "Online mobile view", image: "/cctv_monitor.png" },
  { id: "shifting", label: "Shifting set-up", image: "/acc_misc.png" },
  { id: "uninstall", label: "Uninstall complete set-up", image: "/acc_wall_clamp.png" },
  { id: "other", label: "Other", image: "/cctv_cables.png" }
];

type TabType = "installation" | "repair" | "buy" | "accessories";

export function CCTVSurveillanceDetails() {
  const WHATSAPP_NUMBER = "919141052539"; 
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("installation");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchAccessory, setSearchAccessory] = useState("");
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItems, setModalItems] = useState<string[]>([]);
  
  const toggleSelection = (serviceName: string) => {
    setSelectedItems(prev => 
      prev.includes(serviceName) 
        ? prev.filter(item => item !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleWhatsApp = (customText?: string) => {
    if (!user) {
      toast.error("Please login to proceed with booking.");
      navigate({ to: "/login" });
      return;
    }
    
    if (customText) {
      setModalItems([customText]);
    } else if (selectedItems.length > 0) {
      setModalItems(selectedItems);
    } else {
      setModalItems(["General CCTV & Surveillance Service"]);
    }
    
    setIsModalOpen(true);
  };

  const filteredAccessories = accessories.filter(a => a.name.toLowerCase().includes(searchAccessory.toLowerCase()));

  return (
    <div className="bg-[#f0f4f8] min-h-screen pb-32 font-sans">
      {/* Header */}
      <header className="bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm border-b border-border/50 sticky top-0 z-40">
        <div className="flex items-center gap-6">
           <Link to="/services" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Link>
          <div className="flex items-center gap-3">
             <div className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center text-white shadow-md">
                <Video className="h-5 w-5" />
             </div>
             <div>
                <h1 className="font-extrabold text-lg md:text-xl text-slate-800 tracking-tight leading-none">CCTV</h1>
                <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mt-0.5">INSTALLATION PRO</p>
             </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
           <div className="hidden md:flex flex-col text-right">
              <span className="text-xs text-muted-foreground font-medium">Select Location</span>
              <div className="flex items-center gap-1 font-bold text-sm">
                 Bengaluru <span className="text-brand ml-1">▼</span>
              </div>
           </div>
           <div className="hidden md:block relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input type="text" placeholder="Search..." className="w-full bg-secondary/50 border border-border rounded-full py-2 pl-9 pr-4 text-sm font-medium outline-none focus:border-brand transition-colors" />
           </div>
           <div className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700">
              <button onClick={() => setActiveTab("installation")} className="hover:text-brand transition-colors">Installation</button>
              <button onClick={() => setActiveTab("repair")} className="hover:text-brand transition-colors">Repair</button>
              <button onClick={() => setActiveTab("buy")} className="hover:text-brand transition-colors">Cameras</button>
              <button onClick={() => setActiveTab("accessories")} className="hover:text-brand transition-colors">Accessories</button>
           </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 md:py-12">
        
        {/* Collaborations Marquee */}
        <div className="mb-8 bg-white rounded-2xl shadow-sm border border-border p-6 overflow-hidden relative">
          <div className="flex items-center gap-4 mb-6 justify-center">
             <div className="h-px bg-border flex-1 max-w-[100px]"></div>
             <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">In Proud Collaboration With</p>
             <div className="h-px bg-border flex-1 max-w-[100px]"></div>
          </div>
          <div className="flex w-full overflow-hidden relative group">
             {/* We use 3 blocks of the same content to create the seamless infinite scroll */}
             <div className="flex w-max animate-marquee-reverse whitespace-nowrap group-hover:[animation-play-state:paused] transition-all duration-300">
                {/* Block 1 */}
                <div className="flex items-center gap-24 md:gap-32 px-12 md:px-16">
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/hikvision-v2.png" alt="HIKVISION" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/cpplus-v2.png" alt="CP PLUS" className="w-full h-auto object-contain scale-[1.35] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.45]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/dahua-v2.png" alt="dahua" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/secureye-v2.png" alt="SECUREYE" className="w-full h-auto object-contain scale-[1.1] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.2]" />
                   </div>
                </div>
                {/* Block 2 */}
                <div className="flex items-center gap-24 md:gap-32 px-12 md:px-16">
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/hikvision-v2.png" alt="HIKVISION" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/cpplus-v2.png" alt="CP PLUS" className="w-full h-auto object-contain scale-[1.35] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.45]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/dahua-v2.png" alt="dahua" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/secureye-v2.png" alt="SECUREYE" className="w-full h-auto object-contain scale-[1.1] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.2]" />
                   </div>
                </div>
                {/* Block 3 */}
                <div className="flex items-center gap-24 md:gap-32 px-12 md:px-16">
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/hikvision-v2.png" alt="HIKVISION" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/cpplus-v2.png" alt="CP PLUS" className="w-full h-auto object-contain scale-[1.35] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.45]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/dahua-v2.png" alt="dahua" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/secureye-v2.png" alt="SECUREYE" className="w-full h-auto object-contain scale-[1.1] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.2]" />
                   </div>
                </div>
             </div>
          </div>
          {/* Gradients to fade edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Navigation Tabs (Hero Area) */}
        <div className="bg-[#1e293b] rounded-[2rem] p-8 md:p-12 mb-8 shadow-xl">
           <h2 className="text-center text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-tight">Explore Category: CCTV</h2>
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <button 
                 onClick={() => setActiveTab("installation")}
                 className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === 'installation' ? 'bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                 <Settings className={`h-6 w-6 md:h-8 md:w-8 ${activeTab === 'installation' ? 'text-brand' : 'text-white/70'}`} />
                 <span className="text-center leading-tight">Book Only<br/>Installation</span>
              </button>
              
              <button 
                 onClick={() => setActiveTab("repair")}
                 className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === 'repair' ? 'bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                 <Wrench className={`h-6 w-6 md:h-8 md:w-8 ${activeTab === 'repair' ? 'text-brand' : 'text-white/70'}`} />
                 <span className="text-center leading-tight">Book Repair<br/>& Service</span>
              </button>
              
              <button 
                 onClick={() => setActiveTab("buy")}
                 className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === 'buy' ? 'bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                 <ShoppingCart className={`h-6 w-6 md:h-8 md:w-8 ${activeTab === 'buy' ? 'text-brand' : 'text-white/70'}`} />
                 <span className="text-center leading-tight">Camera<br/>Pricelist</span>
              </button>

              <button 
                 onClick={() => setActiveTab("accessories")}
                 className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === 'accessories' ? 'bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                 <Server className={`h-6 w-6 md:h-8 md:w-8 ${activeTab === 'accessories' ? 'text-brand' : 'text-white/70'}`} />
                 <span className="text-center leading-tight">Accessories<br/>& Parts</span>
              </button>
           </div>
        </div>

        {/* Tab Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Left/Main Column */}
           <div className="lg:col-span-8 space-y-8">
              
              <AnimatePresence mode="wait">
                 {/* TAB 1: INSTALLATION */}
                 {activeTab === "installation" && (
                    <motion.div 
                       key="installation"
                       initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                       className="bg-white rounded-[2rem] border border-border shadow-md overflow-hidden"
                    >
                       <div className="bg-[#2c3e50] p-6 text-white">
                          <h3 className="text-xl font-bold">Book Only Installation</h3>
                       </div>
                       
                       <div className="p-8 space-y-8">
                          
                          {/* Installation Service */}
                          <div>
                             <h4 className="bg-[#e2e8f0] p-3 rounded-t-xl font-bold text-slate-700">Installation Service</h4>
                             <div className="border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => toggleSelection("Installation: CAMERA [₹499/-]")}>
                                <div className="flex items-center gap-3">
                                   {selectedItems.includes("Installation: CAMERA [₹499/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">CAMERA [₹499/-]</span>
                                </div>
                             </div>
                          </div>

                          {/* NVR and DVR */}
                          <div>
                             <h4 className="bg-[#3b82f6] text-white p-3 rounded-t-xl font-bold">NVR and DVR</h4>
                             <div className="border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
                                <div className="flex items-center gap-3 cursor-pointer hover:text-brand" onClick={() => toggleSelection("NVR/DVR: 4chl [₹1000/-]")}>
                                   {selectedItems.includes("NVR/DVR: 4chl [₹1000/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">4chl- [₹1000/-]</span>
                                </div>
                                <div className="flex items-center gap-3 cursor-pointer hover:text-brand" onClick={() => toggleSelection("NVR/DVR: 8chl [₹2000/-]")}>
                                   {selectedItems.includes("NVR/DVR: 8chl [₹2000/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">8chl- [₹2000/-]</span>
                                </div>
                                <div className="flex items-center gap-3 cursor-pointer hover:text-brand" onClick={() => toggleSelection("NVR/DVR: 16chl [₹4000/-]")}>
                                   {selectedItems.includes("NVR/DVR: 16chl [₹4000/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">16chl- [₹4000/-]</span>
                                </div>
                             </div>
                          </div>

                          {/* Cabling */}
                          <div>
                             <h4 className="bg-[#334155] text-white p-3 rounded-t-xl font-bold">Cabling</h4>
                             <div className="border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
                                <div className="flex items-center gap-3 cursor-pointer hover:text-brand" onClick={() => toggleSelection("Cabling: Open cabling [₹20/-]")}>
                                   {selectedItems.includes("Cabling: Open cabling [₹20/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">Open cabling [₹20/-]</span>
                                </div>
                                <div className="flex items-center gap-3 cursor-pointer hover:text-brand" onClick={() => toggleSelection("Cabling: Pipe cabling [₹40/-]")}>
                                   {selectedItems.includes("Cabling: Pipe cabling [₹40/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">Pipe cabling [₹40/-]</span>
                                </div>
                                <div className="flex items-center gap-3 cursor-pointer hover:text-brand" onClick={() => toggleSelection("Cabling: Internal cabling [₹40/-]")}>
                                   {selectedItems.includes("Cabling: Internal cabling [₹40/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">Internal cabling [₹40/-]</span>
                                </div>
                             </div>
                          </div>

                          {/* Rack Installation */}
                          <div>
                             <h4 className="bg-[#1e293b] text-white p-3 rounded-t-xl font-bold">Rack installation</h4>
                             <div className="border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
                                <div className="flex items-center gap-3 cursor-pointer hover:text-brand" onClick={() => toggleSelection("Rack: Small [₹300/-]")}>
                                   {selectedItems.includes("Rack: Small [₹300/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">Small [₹300/-]</span>
                                </div>
                                <div className="flex items-center gap-3 cursor-pointer hover:text-brand" onClick={() => toggleSelection("Rack: Medium [₹700/-]")}>
                                   {selectedItems.includes("Rack: Medium [₹700/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">Medium [₹700/-]</span>
                                </div>
                                <div className="flex items-center gap-3 cursor-pointer hover:text-brand" onClick={() => toggleSelection("Rack: Big [₹3000/-]")}>
                                   {selectedItems.includes("Rack: Big [₹3000/-]") ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">Big [₹3000/-]</span>
                                </div>
                             </div>
                          </div>
                          
                          <div className="pt-4 text-center">
                             <button onClick={() => handleWhatsApp()} className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md">
                                Proceed to Booking
                             </button>
                          </div>

                       </div>
                    </motion.div>
                 )}

                 {/* TAB 2: REPAIR */}
                 {activeTab === "repair" && (
                    <motion.div 
                       key="repair"
                       initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                       className="bg-white rounded-[2rem] border border-border shadow-md overflow-hidden"
                    >
                       <div className="bg-[#2c3e50] p-6 text-white">
                          <h3 className="text-xl font-bold">Repair and service</h3>
                       </div>
                       
                       <div className="p-8 space-y-4">
                          {repairServices.map((service, idx) => (
                             <div 
                                key={idx} 
                                onClick={() => toggleSelection(`Repair: ${service.label}`)}
                                className={`flex justify-between items-center p-4 border rounded-xl cursor-pointer transition-colors ${selectedItems.includes(`Repair: ${service.label}`) ? 'border-brand bg-brand/5' : 'border-border/50 hover:bg-slate-50'}`}
                             >
                                <div className="flex items-center gap-3">
                                   {selectedItems.includes(`Repair: ${service.label}`) ? <CheckSquare className="text-brand h-5 w-5" /> : <Square className="text-muted-foreground h-5 w-5 opacity-50" />}
                                   <span className="font-bold text-slate-800">{service.label}</span>
                                </div>
                                <span className="font-bold text-muted-foreground">Price/-</span>
                             </div>
                          ))}
                          
                          <div className="mt-6 pt-6 border-t border-border">
                             <p className="text-sm font-bold text-slate-700 leading-relaxed">
                                Visit charges will be ₹499/- agein if any spare parts and transport charges multiple visit we be charged extra ***
                             </p>
                          </div>
                          
                          <div className="pt-6 text-center">
                             <button onClick={() => handleWhatsApp()} className="bg-[#3b82f6] hover:bg-[#2563eb] w-full text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md text-lg">
                                Proceed to Booking
                             </button>
                          </div>
                       </div>
                    </motion.div>
                 )}

                 {/* TAB 3: BUY WITH INSTALLATION */}
                 {activeTab === "buy" && (
                    <motion.div 
                       key="buy"
                       initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    >
                       {/* Camera Price List */}
                       <div className="bg-[#f8fafc] rounded-[2rem] border border-border shadow-md overflow-hidden mb-8">
                          <div className="p-8 text-center border-b border-border bg-white">
                             <div className="flex items-center justify-center gap-3 mb-2">
                                <ShieldCheck className="text-[#3b82f6] h-8 w-8" />
                                <h3 className="text-2xl font-black text-slate-800">Vendor99 Security Systems</h3>
                             </div>
                             <h4 className="text-xl font-extrabold uppercase mt-4 mb-2">PRICE LIST - SECURITY CAMERAS (New Prices Applied)</h4>
                             <p className="text-sm text-muted-foreground font-medium">Ensure you apply your newly calculated prices (shown in bold) based on the current base prices and margin. (Note: These final prices are for your website/catalog)</p>
                          </div>
                          
                          <div className="p-8">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {cameraPriceList.map((cam, i) => (
                                   <div key={i} className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                      <div className="bg-slate-50 p-4 border-b border-[#e2e8f0] flex gap-4">
                                         <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                                            <Video className="text-slate-500 h-6 w-6" />
                                         </div>
                                         <div>
                                            <h5 className="font-extrabold text-slate-800 text-sm">{cam.series}</h5>
                                            {cam.features && <p className="text-[10px] text-muted-foreground mt-1 font-bold leading-tight">{cam.features}</p>}
                                         </div>
                                      </div>
                                      <div className="p-4 bg-white">
                                         <div className="flex justify-end mb-2">
                                            <span className="text-xs font-bold text-slate-500">Your Web Price:</span>
                                         </div>
                                         <div className="space-y-3">
                                            {cam.items.map((item, j) => (
                                               <div key={j} className="flex justify-between items-center pb-2 border-b border-slate-100 last:border-0 last:pb-0">
                                                  <span className="text-sm font-semibold text-slate-700">{item.name}</span>
                                                  <span className="font-extrabold text-slate-800">₹ {item.price}/-</span>
                                               </div>
                                            ))}
                                         </div>
                                         <button 
                                            onClick={() => handleWhatsApp(`Inquiry: ${cam.series}`)}
                                            className="w-full mt-4 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 rounded-lg text-sm transition-colors"
                                         >
                                            Request Quote
                                         </button>
                                      </div>
                                   </div>
                                ))}
                             </div>
                             
                             <div className="mt-8 bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                                <div>
                                   <h5 className="font-extrabold text-slate-800 mb-2">ADDITIONAL PRODUCTS (Request for Quote)</h5>
                                   <p className="text-xs font-medium text-slate-600 leading-relaxed max-w-sm">
                                      • 4G Vandal Dome • 5MP IP AI Camera • Fisheye Camera<br/>
                                      • 8MP IP Hisilicon • LPR Camera • Sony Series Camera<br/>
                                      <span className="text-muted-foreground">(Price Will Update Customer on Required)</span>
                                   </p>
                                </div>
                                <div className="text-center md:text-right">
                                   <h5 className="font-extrabold text-slate-800 mb-2">OUR COMMITMENT & SUPPORT</h5>
                                   <p className="text-xs font-medium text-slate-600 leading-relaxed">
                                      • Proper 1 Year Warranty • Technical Online Support<br/>
                                      • Additional Warranty on Bulk Buying • Proper Firmware and Tool Guidance
                                   </p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </motion.div>
                 )}

                 {/* TAB 4: ACCESSORIES */}
                 {activeTab === "accessories" && (
                    <motion.div 
                       key="accessories"
                       initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                       className="bg-white rounded-[2rem] border border-border shadow-md overflow-hidden p-8"
                    >
                       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                          <div>
                             <h3 className="text-2xl font-extrabold text-slate-800">Accessories & Spare Parts</h3>
                             <p className="text-sm font-medium text-muted-foreground mt-1">High-quality components for your security setup</p>
                          </div>
                          <div className="relative w-full md:w-72">
                             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                             <input 
                                type="text" 
                                placeholder="Search parts..." 
                                value={searchAccessory}
                                onChange={(e) => setSearchAccessory(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all" 
                             />
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                          {filteredAccessories.map((acc, i) => (
                             <div key={i} className="border border-slate-200 rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-lg hover:border-brand/30 transition-all cursor-pointer bg-white group" onClick={() => toggleSelection(`Accessory: ${acc.name}`)}>
                                <div className="h-28 w-28 mb-4 bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300">
                                   <img src={acc.image} alt={acc.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                                </div>
                                <h4 className="font-bold text-sm text-slate-800 mb-2 leading-snug">{acc.name}</h4>
                                <p className="text-sm font-black text-brand mt-auto mb-4">{acc.price}</p>
                                <button className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${selectedItems.includes(`Accessory: ${acc.name}`) ? 'bg-brand text-white shadow-md' : 'bg-slate-100 text-slate-700 group-hover:bg-brand group-hover:text-white'}`}>
                                   {selectedItems.includes(`Accessory: ${acc.name}`) ? '✓ Added' : 'Add to Selection'}
                                </button>
                             </div>
                          ))}
                       </div>
                    </motion.div>
                 )}
              </AnimatePresence>
              
           </div>
           
           {/* Right/Sidebar Column (Sticky) */}
           <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                 
                 {/* Selection Summary (Visible only if items selected) */}
                 {selectedItems.length > 0 && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-brand text-white rounded-[2rem] p-6 shadow-lg">
                       <h3 className="font-extrabold text-lg mb-4 flex items-center gap-2"><ShoppingCart className="h-5 w-5" /> Your Selection ({selectedItems.length})</h3>
                       <div className="max-h-60 overflow-y-auto pr-2 space-y-2 mb-4 custom-scrollbar">
                          {selectedItems.map((item, i) => (
                             <div key={i} className="text-sm bg-white/10 rounded-lg p-2.5 flex justify-between items-start gap-2">
                                <span className="font-medium">{item}</span>
                                <button onClick={() => toggleSelection(item)} className="text-white/60 hover:text-white shrink-0">×</button>
                             </div>
                          ))}
                       </div>
                       <button onClick={() => handleWhatsApp()} className="w-full bg-white text-brand font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors shadow-md">
                          Send Request on WhatsApp
                       </button>
                    </motion.div>
                 )}

                 {/* Information Sidebar Box */}
                 <div className="bg-white rounded-[2rem] border border-border shadow-md p-6 lg:p-8">
                    <ul className="space-y-4">
                       <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-slate-800 h-5 w-5 shrink-0 mt-0.5" />
                          <span className="font-bold text-slate-700">Proper 1 Year Warranty</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <Shield className="text-slate-800 h-5 w-5 shrink-0 mt-0.5" />
                          <span className="font-bold text-slate-700">Additional Warranty on Bulk Buying</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <Phone className="text-slate-800 h-5 w-5 shrink-0 mt-0.5" />
                          <span className="font-bold text-slate-700">Technical Online Support</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <Award className="text-slate-800 h-5 w-5 shrink-0 mt-0.5" />
                          <span className="font-bold text-slate-700">Proper Firmware and Tool Guidance</span>
                       </li>
                    </ul>
                    
                    
                 </div>

                 {/* Footer Info */}
                 <div className="bg-[#2c3e50] text-white rounded-2xl p-4 text-center text-xs">
                    <p className="font-medium text-white/80">Copyright © CCTV Installation Pro. 2022</p>
                 </div>

              </div>
           </div>

        </div>
      </div>
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName="CCTV & Surveillance" 
        selectedItems={modalItems} 
      />
    </div>
  );
}
