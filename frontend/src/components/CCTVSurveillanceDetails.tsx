import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { 
  ArrowLeft, ShieldCheck, Clock, 
  Video, Phone, CheckCircle2, Server, Search, CheckSquare, Square,
  Wrench, ShoppingCart, Check, Shield, Award, Settings
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicPrice } from "@/components/DynamicPrice";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useOffers } from "@/context/OfferContext";
import { toast } from "sonner";
import { BookingModal } from "@/components/BookingModal";

const wholesaleData = [
  {
    category: "1. ANALOG HIGH DEFINITION (AHD) SYSTEMS",
    sections: [
      {
        title: "AHD Color Cameras",
        image: "/images/cctv_ahd_camera.png",
        headers: ["Camera Model & Resolution", "Type / Housing", "Price (INR)"],
        items: [
          { col1: "AHD 2MP Colour Camera", col2: "Dome Camera", col3: "₹ 1,000/-" },
          { col1: "AHD 2MP Colour Camera", col2: "Bullet Camera", col3: "₹ 1,200/-" },
          { col1: "AHD 5MP Colour Camera", col2: "Dome Camera", col3: "₹ 1,700/-" },
          { col1: "AHD 5MP Colour Camera", col2: "Bullet Camera", col3: "₹ 1,900/-" }
        ]
      },
      {
        title: "AHD Digital Video Recorders (DVR) — Bundle with Hard Disk",
        image: "/images/cctv_dvr_system.png",
        headers: ["DVR Type & Channels", "Storage Capacity", "Price (INR)"],
        items: [
          { col1: "2MP 4-Channel DVR", col2: "500 GB HDD Included", col3: "₹ 7,000/-" },
          { col1: "2MP 4-Channel DVR", col2: "1,000 GB (1TB) HDD Included", col3: "₹ 11,000/-" },
          { col1: "2MP 4-Channel DVR", col2: "2,000 GB (2TB) HDD Included", col3: "₹ 15,000/-" },
          { col1: "2MP 4-Channel DVR", col2: "4,000 GB (4TB) HDD Included", col3: "₹ 21,000/-" },
          { col1: "5MP 4-Channel DVR", col2: "500 GB HDD Included", col3: "₹ 10,000/-" },
          { col1: "5MP 4-Channel DVR", col2: "1,000 GB (1TB) HDD Included", col3: "₹ 15,000/-" },
          { col1: "5MP 4-Channel DVR", col2: "2,000 GB (2TB) HDD Included", col3: "₹ 19,000/-" },
          { col1: "5MP 4-Channel DVR", col2: "4,000 GB (4TB) HDD Included", col3: "₹ 28,000/-" },
          { col1: "2MP 8-Channel DVR", col2: "500 GB HDD Included", col3: "₹ 10,000/-" },
          { col1: "2MP 8-Channel DVR", col2: "1,000 GB (1TB) HDD Included", col3: "₹ 14,000/-" },
          { col1: "2MP 8-Channel DVR", col2: "2,000 GB (2TB) HDD Included", col3: "₹ 18,000/-" },
          { col1: "2MP 8-Channel DVR", col2: "4,000 GB (4TB) HDD Included", col3: "₹ 23,000/-" },
          { col1: "5MP 8-Channel DVR", col2: "500 GB HDD Included", col3: "₹ 13,000/-" },
          { col1: "5MP 8-Channel DVR", col2: "1,000 GB (1TB) HDD Included", col3: "₹ 18,000/-" },
          { col1: "5MP 8-Channel DVR", col2: "2,000 GB (2TB) HDD Included", col3: "₹ 22,000/-" },
          { col1: "5MP 8-Channel DVR", col2: "4,000 GB (4TB) HDD Included", col3: "₹ 31,000/-" },
          { col1: "2MP 16-Channel DVR", col2: "500 GB HDD Included", col3: "₹ 15,000/-" },
          { col1: "2MP 16-Channel DVR", col2: "1,000 GB (1TB) HDD Included", col3: "₹ 19,000/-" },
          { col1: "2MP 16-Channel DVR", col2: "2,000 GB (2TB) HDD Included", col3: "₹ 23,000/-" },
          { col1: "2MP 16-Channel DVR", col2: "4,000 GB (4TB) HDD Included", col3: "₹ 28,000/-" },
          { col1: "5MP 16-Channel DVR", col2: "500 GB HDD Included", col3: "₹ 18,000/-" },
          { col1: "5MP 16-Channel DVR", col2: "1,000 GB (1TB) HDD Included", col3: "₹ 23,000/-" },
          { col1: "5MP 16-Channel DVR", col2: "2,000 GB (2TB) HDD Included", col3: "₹ 28,000/-" },
          { col1: "5MP 16-Channel DVR", col2: "4,000 GB (4TB) HDD Included", col3: "₹ 36,000/-" }
        ]
      }
    ]
  },
  {
    category: "2. IP CAMERA & NETWORK VIDEO RECORDER (NVR) SYSTEMS",
    sections: [
      {
        title: "High-Performance IP Cameras",
        image: "/images/cctv_ip_camera.png",
        headers: ["Series / Specification", "Housing / Model Style", "Price (INR)"],
        items: [
          { col1: "5MP Full ColorVu (EH55 PCB)", col2: "Plastic Dome", col3: "₹ 1,900/-" },
          { col1: "5MP Full ColorVu (EH55 PCB)", col2: "Plastic Bullet", col3: "₹ 2,000/-" },
          { col1: "5MP Dual Hybrid LED (H50 PCB)", col2: "Plastic Dome", col3: "₹ 2,100/-" },
          { col1: "5MP Dual Hybrid LED (H50 PCB)", col2: "Plastic Bullet", col3: "₹ 2,200/-" },
          { col1: "5MP Dual Hybrid LED (H50 PCB)", col2: "Metal Bullet", col3: "₹ 2,500/-" },
          { col1: "6MP Dual Hybrid LED (ZT6 PCB)", col2: "Plastic Dome", col3: "₹ 2,650/-" },
          { col1: "6MP Dual Hybrid LED (ZT6 PCB)", col2: "Plastic Bullet", col3: "₹ 2,750/-" },
          { col1: "6MP Dual Hybrid LED (ZT6 PCB)", col2: "Metal Bullet", col3: "₹ 3,050/-" },
          { col1: "5MP IP Astra Series (H55 Dual LED)", col2: "Half Metal Dome", col3: "₹ 3,000/-" },
          { col1: "5MP IP Astra Series (H55 Dual LED)", col2: "Half Metal Bullet", col3: "₹ 3,100/-" },
          { col1: "5MP IP Astra Series (H55 Dual LED)", col2: "Full Metal Dome", col3: "₹ 3,400/-" },
          { col1: "5MP IP Astra Series (H55 Dual LED)", col2: "Full Metal Bullet", col3: "₹ 3,800/-" },
          { col1: "5MP AI Intelligence Series\n(Face Detection, Recognition, People Counting, Off Duty & Line Crossing)", col2: "Big Size Dome", col3: "₹ 5,400/-" },
          { col1: "5MP AI Intelligence Series\n(Face Detection, Recognition, People Counting, Off Duty & Line Crossing)", col2: "Metal Bullet", col3: "₹ 6,000/-" },
          { col1: "8MP Hisilicon SOC Real 4K (H88 Dual Hybrid LED)", col2: "Metal Dome", col3: "₹ 5,000/-" },
          { col1: "8MP Hisilicon SOC Real 4K (H88 Dual Hybrid LED)", col2: "Metal Bullet", col3: "₹ 5,500/-" }
        ]
      },
      {
        title: "Network Video Recorders (NVR 8MP) — Bundle with Hard Disk",
        image: "/images/cctv_dvr_system.png",
        headers: ["NVR Type & Channel Scale", "Storage Capacity", "Price (INR)"],
        items: [
          { col1: "10-Channel NVR (8MP Support)", col2: "500 GB HDD Included", col3: "₹ 9,000/-" },
          { col1: "10-Channel NVR (8MP Support)", col2: "1 TB HDD Included", col3: "₹ 12,000/-" },
          { col1: "10-Channel NVR (8MP Support)", col2: "2 TB HDD Included", col3: "₹ 16,000/-" },
          { col1: "10-Channel NVR (8MP Support)", col2: "4 TB HDD Included", col3: "₹ 25,000/-" },
          { col1: "16-Channel NVR (8MP Support)", col2: "500 GB HDD Included", col3: "₹ 12,000/-" },
          { col1: "16-Channel NVR (8MP Support)", col2: "1 TB HDD Included", col3: "₹ 15,000/-" },
          { col1: "16-Channel NVR (8MP Support)", col2: "2 TB HDD Included", col3: "₹ 19,000/-" },
          { col1: "16-Channel NVR (8MP Support)", col2: "4 TB HDD Included", col3: "₹ 28,000/-" }
        ]
      }
    ]
  },
  {
    category: "3. POE SWITCHES, MONITORS & ACCESSORIES",
    sections: [
      {
        title: "Power Over Ethernet (POE) Switches",
        image: "/images/cctv_accessories.png",
        headers: ["Category", "Item Description", "Price (INR)"],
        items: [
          { col1: "Power Over Ethernet (POE) Switches", col2: "4-Channel POE Switch", col3: "₹ 2,500/-" },
          { col1: "Power Over Ethernet (POE) Switches", col2: "8-Channel POE Switch", col3: "₹ 5,000/-" },
          { col1: "Power Over Ethernet (POE) Switches", col2: "16-Channel POE Switch", col3: "₹ 12,000/-" }
        ]
      },
      {
        title: "Display Monitors & Routers",
        image: "/images/cctv_monitor_router.png",
        headers: ["Category", "Item Description", "Price (INR)"],
        items: [
          { col1: "Display Monitors & Routers", col2: "17\" LED Monitor", col3: "₹ 3,000/-" },
          { col1: "Display Monitors & Routers", col2: "19\" LED Monitor", col3: "₹ 6,000/-" },
          { col1: "Display Monitors & Routers", col2: "22\" LED Monitor", col3: "₹ 10,500/-" },
          { col1: "Display Monitors & Routers", col2: "Basic SIM Card Router", col3: "₹ 2,500/-" }
        ]
      },
      {
        title: "Accessories",
        image: "/images/cctv_accessories.png",
        headers: ["Category", "Item Description", "Price (INR)"],
        items: [
          { col1: "Accessories", col2: "Camera Box (5\" x 5\")", col3: "₹ 100/-" },
          { col1: "Accessories", col2: "PVC Box (4\" x 4\")", col3: "₹ 75/-" },
          { col1: "Accessories", col2: "POE Switch Box", col3: "₹ 800/-" },
          { col1: "Accessories", col2: "DVR Rack (2U)", col3: "₹ 1,000/-" },
          { col1: "Accessories", col2: "DVR Rack (4U)", col3: "₹ 1,600/-" }
        ]
      },
      {
        title: "Connectors & Power Supplies",
        image: "/images/cctv_power_supply.png",
        headers: ["Category", "Item Description", "Price (INR)"],
        items: [
          { col1: "Connectors & Power Supplies", col2: "2AMP Power Adapter", col3: "₹ 300/-" },
          { col1: "Connectors & Power Supplies", col2: "Central Power Supply (4-Channel)", col3: "₹ 750/-" },
          { col1: "Connectors & Power Supplies", col2: "Central Power Supply (8-Channel)", col3: "₹ 1,500/-" },
          { col1: "Connectors & Power Supplies", col2: "RJ45 Connector", col3: "₹ 10/- / pc" },
          { col1: "Connectors & Power Supplies", col2: "BNC Connector", col3: "₹ 25/- / pc" },
          { col1: "Connectors & Power Supplies", col2: "DC Connector", col3: "₹ 50/- / pc" },
          { col1: "Connectors & Power Supplies", col2: "Video Balun Connector", col3: "₹ 250/-" }
        ]
      },
      {
        title: "Cables & Interconnects",
        image: "/images/cctv_cables.png",
        headers: ["Category", "Item Description", "Price (INR)"],
        items: [
          { col1: "Cables & Interconnects", col2: "Power Cable", col3: "₹ 15/-" },
          { col1: "Cables & Interconnects", col2: "HDMI Cable (1.5 Meter)", col3: "₹ 150/-" },
          { col1: "Cables & Interconnects", col2: "VGA Cable (1.5 Meter)", col3: "₹ 150/-" },
          { col1: "Cables & Interconnects", col2: "Coaxial Cable (3+1)", col3: "₹ 25/- / meter" },
          { col1: "Cables & Interconnects", col2: "CAT6 Network Cable", col3: "₹ 40/- / meter" },
          { col1: "Cables & Interconnects", col2: "CAT6 Network Cable (Standard Quality)", col3: "₹ 60/- / meter" }
        ]
      }
    ]
  }
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

type TabType = "buy" | "installation" | "repair";

export function CCTVSurveillanceDetails() {
  const WHATSAPP_NUMBER = "919141052539"; 
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { getApplicableOffer } = useOffers();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("installation");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
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

  const handleAddToCart = () => {
    if (selectedItems.length === 0) {
      toast.error("Please select at least one item.");
      return;
    }

    selectedItems.forEach(itemStr => {
      let price = "0";
      let title = itemStr;
      
      const match = itemStr.match(/\[₹?\s*([\d,]+)/);
      if (match) {
        price = match[1].replace(/,/g, '');
        title = itemStr.replace(/\s*\[.*?\]\s*/, '').trim();
      } else if (itemStr.startsWith("Repair:")) {
        price = "450";
      }

      addToCart({
        id: `cctv-${title.replace(/\W+/g, '-').toLowerCase()}`,
        title: `CCTV: ${title}`,
        price: price,
        image: "/cctv_hero.png"
      });
    });

    toast.success("Items added to cart!");
    setSelectedItems([]); // Clear selection after adding
  };


  const totalPrice = (() => {
    let sum = 0;
    let hasRepair = false;

    selectedItems.forEach(item => {
      if (item.startsWith("Repair:")) {
        hasRepair = true;
      } else {
        const match = item.match(/\[₹?\s*([\d,]+)/);
        if (match) {
           sum += parseInt(match[1].replace(/,/g, ''), 10);
        }
      }
    });

    if (hasRepair) {
      sum += 450;
    }

    const offer = getApplicableOffer("CCTV Cameras");
    if (offer && offer.discountValue && sum > 0) {
      if (offer.discountType === 'percentage') {
         sum = sum - (sum * (offer.discountValue / 100));
      } else {
         sum -= offer.discountValue;
      }
    }

    return Math.max(0, Math.round(sum));
  })();

  return (
    <div className="bg-[#f0f4f8] min-h-screen pb-32 font-sans">


      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 md:py-12">
        


        {/* Navigation Tabs (Hero Area) */}
        <div className="bg-[#1e293b] rounded-[2rem] overflow-hidden mb-8 shadow-xl relative">
           {/* Hero Image Section */}
           <div className="relative h-[280px] md:h-[400px] w-full overflow-hidden bg-black transition-all duration-500">
             <img 
               src={activeTab === 'buy' ? '/cctv_hero_buy.png' : '/cctv_hero.png'}  
               alt="CCTV Expert" 
               className="w-full h-full object-cover object-[50%_15%] opacity-90 transition-opacity duration-500" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-left">
               <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                 <span className="text-[#f97316]">Vendor99:</span> Professional CCTV Solutions.<br/>
                 Certified Experts.<br/>
                 Clean, Minimalist Installations.
               </h2>
             </div>
           </div>

           <div className="p-8 md:p-12 pt-2">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                 onClick={() => setActiveTab("buy")}
                 className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === 'buy' ? 'bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                 <ShoppingCart className={`h-6 w-6 md:h-8 md:w-8 ${activeTab === 'buy' ? 'text-brand' : 'text-white/70'}`} />
                 <span className="text-center leading-tight">Product<br/>Price List</span>
              </button>

              <button 
                 onClick={() => setActiveTab("installation")}
                 className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === 'installation' ? 'bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                 <Settings className={`h-6 w-6 md:h-8 md:w-8 ${activeTab === 'installation' ? 'text-brand' : 'text-white/70'}`} />
                 <span className="text-center leading-tight">Only<br/>Installation</span>
              </button>
              
              <button 
                 onClick={() => setActiveTab("repair")}
                 className={`flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === 'repair' ? 'bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                 <Wrench className={`h-6 w-6 md:h-8 md:w-8 ${activeTab === 'repair' ? 'text-brand' : 'text-white/70'}`} />
                 <span className="text-center leading-tight">CCTV Repair<br/>& Service</span>
              </button>

           </div>
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
                             <div className="border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 bg-white">
                                <div 
                                  className={`p-4 border rounded-xl flex items-center cursor-pointer transition-colors relative overflow-hidden ${selectedItems.includes("Installation: CAMERA [₹499/-]") ? 'bg-brand/10 border-brand' : 'border-slate-200 hover:bg-slate-50'}`} 
                                  onClick={() => toggleSelection("Installation: CAMERA [₹499/-]")}
                                >
                                   {selectedItems.includes("Installation: CAMERA [₹499/-]") && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand"></div>}
                                   <span className="font-bold text-slate-800 ml-2">CAMERA [₹499/-]</span>
                                </div>
                             </div>
                          </div>

                          {/* NVR and DVR */}
                          <div>
                             <h4 className="bg-primary text-white p-3 rounded-t-xl font-bold">NVR and DVR</h4>
                             <div className="border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
                                {[
                                   { id: "NVR/DVR: 4chl [₹1000/-]", label: "4chl- [₹1000/-]" },
                                   { id: "NVR/DVR: 8chl [₹2000/-]", label: "8chl- [₹2000/-]" },
                                   { id: "NVR/DVR: 16chl [₹4000/-]", label: "16chl- [₹4000/-]" }
                                ].map((item, idx) => (
                                   <div 
                                      key={idx}
                                      className={`p-3 border rounded-xl flex items-center cursor-pointer transition-colors relative overflow-hidden ${selectedItems.includes(item.id) ? 'bg-brand/10 border-brand' : 'border-slate-200 hover:bg-slate-50'}`} 
                                      onClick={() => toggleSelection(item.id)}
                                   >
                                      {selectedItems.includes(item.id) && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand"></div>}
                                      <span className="font-bold text-slate-800 ml-2">{item.label}</span>
                                   </div>
                                ))}
                             </div>
                          </div>

                          {/* Cabling */}
                          <div>
                             <h4 className="bg-[#334155] text-white p-3 rounded-t-xl font-bold">Cabling</h4>
                             <div className="border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
                                {[
                                   { id: "Cabling: Open cabling [₹20/-]", label: "Open cabling [₹20/-]" },
                                   { id: "Cabling: Pipe cabling [₹40/-]", label: "Pipe cabling [₹40/-]" },
                                   { id: "Cabling: Internal cabling [₹40/-]", label: "Internal cabling [₹40/-]" }
                                ].map((item, idx) => (
                                   <div 
                                      key={idx}
                                      className={`p-3 border rounded-xl flex items-center cursor-pointer transition-colors relative overflow-hidden ${selectedItems.includes(item.id) ? 'bg-brand/10 border-brand' : 'border-slate-200 hover:bg-slate-50'}`} 
                                      onClick={() => toggleSelection(item.id)}
                                   >
                                      {selectedItems.includes(item.id) && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand"></div>}
                                      <span className="font-bold text-slate-800 ml-2">{item.label}</span>
                                   </div>
                                ))}
                             </div>
                          </div>

                          {/* Rack Installation */}
                          <div>
                             <h4 className="bg-[#1e293b] text-white p-3 rounded-t-xl font-bold">Rack installation</h4>
                             <div className="border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
                                {[
                                   { id: "Rack: Small [₹300/-]", label: "Small [₹300/-]" },
                                   { id: "Rack: Medium [₹700/-]", label: "Medium [₹700/-]" },
                                   { id: "Rack: Big [₹3000/-]", label: "Big [₹3000/-]" }
                                ].map((item, idx) => (
                                   <div 
                                      key={idx}
                                      className={`p-3 border rounded-xl flex items-center cursor-pointer transition-colors relative overflow-hidden ${selectedItems.includes(item.id) ? 'bg-brand/10 border-brand' : 'border-slate-200 hover:bg-slate-50'}`} 
                                      onClick={() => toggleSelection(item.id)}
                                   >
                                      {selectedItems.includes(item.id) && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand"></div>}
                                      <span className="font-bold text-slate-800 ml-2">{item.label}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                          
                          <div className="pt-4 text-center">
                             <button onClick={() => handleWhatsApp()} className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md">
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
                       <div className="bg-[#2c3e50] p-6 text-white flex justify-between items-center">
                          <h3 className="text-xl font-bold">CCTV Repair and Service</h3>
                          <span className="font-bold text-lg bg-white/20 px-4 py-1.5 rounded-full">₹ 450/-</span>
                       </div>
                       
                       <div className="p-8 space-y-4">
                          {repairServices.map((service, idx) => {
                             const repairString = `Repair: ${service.label}`;
                             const isSelected = selectedItems.includes(repairString);
                             return (
                                <div 
                                   key={idx} 
                                   onClick={() => toggleSelection(repairString)}
                                   className={`flex justify-between items-center p-4 border rounded-xl cursor-pointer transition-colors relative overflow-hidden ${isSelected ? 'border-brand bg-brand/10' : 'border-slate-200 hover:bg-slate-50'}`}
                                >
                                   {isSelected && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand"></div>}
                                   <div className="flex items-center gap-3">
                                      <span className="font-bold text-slate-800 ml-2">{service.label}</span>
                                   </div>
                                </div>
                             );
                          })}
                          
                          <div className="mt-6 pt-6 border-t border-border">
                             <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200 mb-3">
                                <span className="font-bold text-slate-800">Visit & Service Charge</span>
                                <span className="font-extrabold text-brand text-xl">₹ 450/-</span>
                             </div>
                             <p className="text-sm font-semibold text-slate-500 leading-relaxed">
                                Note: If any spare parts or multiple visits are required, they will be charged extra.
                             </p>
                          </div>
                          
                           <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                             <button onClick={() => handleAddToCart()} className="bg-slate-800 hover:bg-slate-700 w-full sm:w-auto text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md text-lg">
                                Add to Cart
                             </button>
                             <button onClick={() => handleWhatsApp()} className="bg-primary hover:bg-primary/90 w-full sm:w-auto text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md text-lg">
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
                                <ShieldCheck className="text-primary h-8 w-8" />
                                <h3 className="text-2xl font-black text-slate-800">Vendor99 Security Systems</h3>
                             </div>
                             <h4 className="text-xl font-extrabold uppercase mt-4 mb-2">PRICE LIST - SECURITY CAMERAS (New Prices Applied)</h4>
                             <p className="text-sm text-muted-foreground font-medium">Ensure you apply your newly calculated prices (shown in bold) based on the current base prices and margin. (Note: These final prices are for your website/catalog)</p>
                          </div>
                          
                          <div className="p-4 md:p-8 space-y-12">
                              {wholesaleData.map((categoryData, i) => (
                                 <div key={i} className="mb-12 last:mb-0">
                                    <h4 className="text-xl md:text-2xl font-black text-slate-800 mb-6 border-b-2 border-brand pb-2 inline-block">
                                       {categoryData.category}
                                    </h4>
                                    
                                    <div className="space-y-8">
                                       {categoryData.sections.map((section, j) => (
                                          <div key={j} className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm">
                                             <div className="bg-slate-800 p-4 border-b border-[#e2e8f0] flex items-center gap-4">
                                                {section.image && (
                                                   <img src={section.image} alt={section.title} className="w-16 h-16 object-cover rounded-lg bg-white shadow-sm border border-slate-600" />
                                                )}
                                                <h5 className="font-extrabold text-white text-lg">{section.title}</h5>
                                             </div>
                                             
                                             <div className="overflow-x-auto">
                                                <table className="w-full text-left border-collapse min-w-[600px]">
                                                   <thead>
                                                      <tr className="bg-slate-100 text-slate-700 text-sm border-b border-slate-200">
                                                         {section.headers.map((header, k) => (
                                                            <th key={k} className="p-4 font-bold whitespace-nowrap">{header}</th>
                                                         ))}
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                      {section.items.map((item, k) => {
                                                         const itemString = `${item.col1} - ${item.col2} [${item.col3}]`;
                                                         const isSelected = selectedItems.includes(itemString);
                                                         return (
                                                            <tr 
                                                               key={k} 
                                                               onClick={() => toggleSelection(itemString)}
                                                               className={`border-b cursor-pointer transition-colors ${isSelected ? 'bg-brand/10 border-brand relative' : 'border-slate-100 hover:bg-slate-50'}`}
                                                            >
                                                               <td className="p-4 text-sm font-semibold text-slate-800 relative">
                                                                  {isSelected && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand"></div>}
                                                                  <span className="whitespace-pre-line">{item.col1}</span>
                                                               </td>
                                                               <td className="p-4 text-sm font-semibold text-slate-600">{item.col2}</td>
                                                               <td className="p-4"><DynamicPrice originalPrice={item.col3} category="CCTV Cameras" discountClassName="text-sm font-extrabold text-brand whitespace-nowrap" /></td>
                                                            </tr>
                                                         );
                                                      })}
                                                   </tbody>
                                                </table>
                                             </div>
                                             
                                             <div className="p-4 bg-slate-50 border-t border-slate-200 text-right flex flex-col sm:flex-row justify-end items-center gap-4">
                                                <span className="text-xs font-bold text-slate-500 w-full sm:w-auto sm:mr-auto">Customer Care / Inquiry: +91 91410 52539</span>
                                                <button 
                                                   onClick={() => handleAddToCart()}
                                                   className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto"
                                                >
                                                   Add to Cart
                                                </button>
                                                <button 
                                                   onClick={() => handleWhatsApp()}
                                                   className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto"
                                                >
                                                   Proceed to Booking
                                                </button>
                                             </div>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              ))}
                              
                              <div className="mt-8 bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                                 <div>
                                    <h5 className="font-extrabold text-slate-800 mb-2 uppercase text-sm">Specialized Solutions Available On Request</h5>
                                    <p className="text-xs font-medium text-slate-600 leading-relaxed max-w-lg">
                                       Pricing for the following advanced technologies will be provided custom tailored to your exact project requirements. Please contact our support line:<br/><br/>
                                       • 4G Vandal-Proof Dome Cameras (Standalone cellular surveillance)<br/>
                                       • 5MP IP Smart AI Cameras (Advanced Edge Analytics)<br/>
                                       • Fisheye Panoramic Cameras (360° Wide Angle Coverage)<br/>
                                       • 8MP IP Hisilicon Ultra HD Cameras<br/>
                                       • LPR (License Plate Recognition) & Specialized Sony Sensor Series Cameras
                                    </p>
                                 </div>
                                <div className="text-center md:text-right">
                                   <h5 className="font-extrabold text-slate-800 mb-2">OUR COMMITMENT & SUPPORT</h5>
                                   <p className="text-xs font-medium text-slate-600 leading-relaxed">
                                      • Technical Online Support<br/>
                                      • Proper Firmware and Tool Guidance
                                   </p>
                                </div>
                             </div>
                          </div>
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
                       
                       {totalPrice > 0 && (
                         <div className="bg-white/20 rounded-xl p-4 mb-4 flex justify-between items-center">
                            <span className="font-bold text-white/90">Today's Cost</span>
                            <span className="font-black text-xl">₹ {totalPrice.toLocaleString('en-IN')}/-</span>
                         </div>
                       )}

                       <div className="space-y-3">
                         <button onClick={() => handleAddToCart()} className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 transition-colors shadow-md">
                            Add to Cart
                         </button>
                         <button onClick={() => handleWhatsApp()} className="w-full bg-white text-brand font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors shadow-md">
                            Proceed to Booking
                         </button>
                       </div>
                    </motion.div>
                 )}

                 {/* Information Sidebar Box */}
                 <div className="bg-white rounded-[2rem] border border-border shadow-md p-6 lg:p-8">
                    <ul className="space-y-4">
                       {activeTab === "buy" && (
                          <>
                          </>
                       )}
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
              </div>
           </div>

        </div>
        

      </div>
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName="CCTV & Surveillance" 
        selectedItems={modalItems} 
        onSuccess={() => setSelectedItems([])}
      />
    </div>
  );
}
