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
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative border border-slate-800">
           {/* Hero Image Section */}
           <div className="relative h-[450px] w-full overflow-hidden transition-all duration-500 group">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
             <img 
               src={activeTab === 'buy' ? '/cctv_hero_buy.png' : '/cctv_hero.png'}  
               alt="CCTV Expert" 
               className="absolute right-0 top-0 w-3/4 h-full object-cover object-[50%_15%] opacity-70 transition-transform duration-1000 group-hover:scale-105" 
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }}
             />
             <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16 w-full md:w-2/3">
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 key={activeTab}
                 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6"
               >
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-rose-500">Vendor99:</span><br/>
                 Premium CCTV<br/>Solutions.
               </motion.h2>
               <p className="text-slate-300 font-medium text-lg md:text-xl max-w-md">
                 Certified Experts. Clean, Minimalist Installations. Transparent Pricing.
               </p>
             </div>
           </div>

           <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-auto md:w-auto z-30">
             <div className="flex flex-col md:flex-row gap-3 bg-white/10 backdrop-blur-2xl p-3 rounded-3xl border border-white/20 shadow-2xl">
              <button 
                 onClick={() => setActiveTab("buy")}
                 className={`flex items-center gap-4 py-4 px-6 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'buy' ? 'bg-white text-slate-900 shadow-[0_10px_30px_rgba(255,255,255,0.2)]' : 'text-white hover:bg-white/10'}`}
              >
                 <div className={`p-2.5 rounded-xl transition-colors ${activeTab === 'buy' ? 'bg-brand/10 text-brand' : 'bg-white/10 text-white'}`}><ShoppingCart className="h-6 w-6" /></div>
                 <span className="text-left leading-tight">Product<br/>Price List</span>
              </button>

              <button 
                 onClick={() => setActiveTab("installation")}
                 className={`flex items-center gap-4 py-4 px-6 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'installation' ? 'bg-white text-slate-900 shadow-[0_10px_30px_rgba(255,255,255,0.2)]' : 'text-white hover:bg-white/10'}`}
              >
                 <div className={`p-2.5 rounded-xl transition-colors ${activeTab === 'installation' ? 'bg-brand/10 text-brand' : 'bg-white/10 text-white'}`}><Settings className="h-6 w-6" /></div>
                 <span className="text-left leading-tight">Only<br/>Installation</span>
              </button>
              
              <button 
                 onClick={() => setActiveTab("repair")}
                 className={`flex items-center gap-4 py-4 px-6 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'repair' ? 'bg-white text-slate-900 shadow-[0_10px_30px_rgba(255,255,255,0.2)]' : 'text-white hover:bg-white/10'}`}
              >
                 <div className={`p-2.5 rounded-xl transition-colors ${activeTab === 'repair' ? 'bg-brand/10 text-brand' : 'bg-white/10 text-white'}`}><Wrench className="h-6 w-6" /></div>
                 <span className="text-left leading-tight">CCTV Repair<br/>& Service</span>
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
                       className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden"
                    >
                       <div className="bg-gradient-to-r from-brand to-rose-600 p-8 text-white relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                          <h3 className="text-2xl font-black relative z-10 flex items-center gap-3"><Settings className="h-8 w-8" /> Book Only Installation</h3>
                          <p className="text-white/80 mt-2 relative z-10">Select the specific installation services you require.</p>
                       </div>
                       
                       <div className="p-8 space-y-10">
                          
                          {/* Installation Service */}
                          <div>
                             <div className="flex items-center gap-3 mb-4">
                               <div className="h-8 w-1 bg-brand rounded-full"></div>
                               <h4 className="font-bold text-xl text-slate-800">Installation Service</h4>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <div 
                                 className={`p-5 rounded-2xl border-2 flex items-center cursor-pointer transition-all duration-300 relative overflow-hidden group ${selectedItems.includes("Installation: CAMERA [₹499/-]") ? 'bg-brand/5 border-brand shadow-[0_8px_20px_rgba(217,46,16,0.1)]' : 'border-slate-100 hover:border-brand/30 hover:bg-slate-50'}`} 
                                 onClick={() => toggleSelection("Installation: CAMERA [₹499/-]")}
                               >
                                  <div className={`mr-4 p-2 rounded-xl transition-colors ${selectedItems.includes("Installation: CAMERA [₹499/-]") ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400 group-hover:text-brand group-hover:bg-brand/10'}`}>
                                    {selectedItems.includes("Installation: CAMERA [₹499/-]") ? <CheckCircle2 className="h-6 w-6" /> : <Video className="h-6 w-6" />}
                                  </div>
                                  <div>
                                    <span className="block font-bold text-slate-800 text-lg">CAMERA</span>
                                    <span className="block font-black text-brand">₹499/-</span>
                                  </div>
                               </div>
                             </div>
                          </div>

                          {/* NVR and DVR */}
                          <div>
                             <div className="flex items-center gap-3 mb-4">
                               <div className="h-8 w-1 bg-slate-800 rounded-full"></div>
                               <h4 className="font-bold text-xl text-slate-800">NVR and DVR</h4>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                   { id: "NVR/DVR: 4chl [₹1000/-]", label: "4 Channel", price: "₹1000/-" },
                                   { id: "NVR/DVR: 8chl [₹2000/-]", label: "8 Channel", price: "₹2000/-" },
                                   { id: "NVR/DVR: 16chl [₹4000/-]", label: "16 Channel", price: "₹4000/-" }
                                ].map((item, idx) => (
                                   <div 
                                      key={idx}
                                      className={`p-5 rounded-2xl border-2 flex items-center cursor-pointer transition-all duration-300 relative overflow-hidden group ${selectedItems.includes(item.id) ? 'bg-slate-800 border-slate-800 shadow-xl' : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`} 
                                      onClick={() => toggleSelection(item.id)}
                                   >
                                      <div className={`mr-4 p-2 rounded-xl transition-colors ${selectedItems.includes(item.id) ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400 group-hover:text-slate-800 group-hover:bg-slate-200'}`}>
                                        {selectedItems.includes(item.id) ? <CheckCircle2 className="h-6 w-6" /> : <Server className="h-6 w-6" />}
                                      </div>
                                      <div>
                                        <span className={`block font-bold text-lg ${selectedItems.includes(item.id) ? 'text-white' : 'text-slate-800'}`}>{item.label}</span>
                                        <span className={`block font-black ${selectedItems.includes(item.id) ? 'text-white/80' : 'text-brand'}`}>{item.price}</span>
                                      </div>
                                   </div>
                                ))}
                             </div>
                          </div>

                          {/* Cabling */}
                          <div>
                             <div className="flex items-center gap-3 mb-4">
                               <div className="h-8 w-1 bg-orange-500 rounded-full"></div>
                               <h4 className="font-bold text-xl text-slate-800">Cabling</h4>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                   { id: "Cabling: Open cabling [₹20/-]", label: "Open cabling", price: "₹20/- per meter" },
                                   { id: "Cabling: Pipe cabling [₹40/-]", label: "Pipe cabling", price: "₹40/- per meter" },
                                   { id: "Cabling: Internal cabling [₹40/-]", label: "Internal cabling", price: "₹40/- per meter" }
                                ].map((item, idx) => (
                                   <div 
                                      key={idx}
                                      className={`p-4 rounded-2xl border-2 flex flex-col justify-center cursor-pointer transition-all duration-300 relative overflow-hidden group ${selectedItems.includes(item.id) ? 'bg-orange-500/10 border-orange-500 shadow-lg' : 'border-slate-100 hover:border-orange-500/30 hover:bg-orange-500/5'}`} 
                                      onClick={() => toggleSelection(item.id)}
                                   >
                                      <div className="flex justify-between items-start mb-2">
                                        <span className={`font-bold text-lg ${selectedItems.includes(item.id) ? 'text-orange-700' : 'text-slate-800'}`}>{item.label}</span>
                                        {selectedItems.includes(item.id) && <CheckCircle2 className="h-5 w-5 text-orange-500" />}
                                      </div>
                                      <span className={`font-black text-sm ${selectedItems.includes(item.id) ? 'text-orange-600' : 'text-slate-500'}`}>{item.price}</span>
                                   </div>
                                ))}
                             </div>
                          </div>

                          {/* Rack Installation */}
                          <div>
                             <div className="flex items-center gap-3 mb-4">
                               <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
                               <h4 className="font-bold text-xl text-slate-800">Rack installation</h4>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                   { id: "Rack: Small [₹300/-]", label: "Small Rack", price: "₹300/-" },
                                   { id: "Rack: Medium [₹700/-]", label: "Medium Rack", price: "₹700/-" },
                                   { id: "Rack: Big [₹3000/-]", label: "Big Rack", price: "₹3000/-" }
                                ].map((item, idx) => (
                                   <div 
                                      key={idx}
                                      className={`p-4 rounded-2xl border-2 flex flex-col justify-center cursor-pointer transition-all duration-300 relative overflow-hidden group ${selectedItems.includes(item.id) ? 'bg-blue-500/10 border-blue-500 shadow-lg' : 'border-slate-100 hover:border-blue-500/30 hover:bg-blue-500/5'}`} 
                                      onClick={() => toggleSelection(item.id)}
                                   >
                                      <div className="flex justify-between items-start mb-2">
                                        <span className={`font-bold text-lg ${selectedItems.includes(item.id) ? 'text-blue-700' : 'text-slate-800'}`}>{item.label}</span>
                                        {selectedItems.includes(item.id) && <CheckCircle2 className="h-5 w-5 text-blue-500" />}
                                      </div>
                                      <span className={`font-black text-sm ${selectedItems.includes(item.id) ? 'text-blue-600' : 'text-slate-500'}`}>{item.price}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                          
                          <div className="pt-8 text-center border-t border-slate-100">
                             <button onClick={() => handleWhatsApp()} className="bg-brand hover:bg-rose-600 text-white font-black text-lg py-4 px-12 rounded-2xl transition-all shadow-[0_8px_20px_rgba(217,46,16,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(217,46,16,0.4)]">
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
                       className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden"
                    >
                       <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white relative overflow-hidden flex justify-between items-center">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                          <div className="relative z-10">
                            <h3 className="text-2xl font-black flex items-center gap-3"><Wrench className="h-8 w-8" /> CCTV Repair & Service</h3>
                            <p className="text-white/80 mt-2">Select the specific parts or services you need repaired.</p>
                          </div>
                          <span className="font-black text-xl bg-white/20 px-6 py-2 rounded-2xl relative z-10 shadow-lg border border-white/20 backdrop-blur-md">₹ 450/- <span className="text-sm font-medium opacity-80 block text-center">Visit Charge</span></span>
                       </div>
                       
                       <div className="p-8 space-y-8">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                             {repairServices.map((service, idx) => {
                                const repairString = `Repair: ${service.label}`;
                                const isSelected = selectedItems.includes(repairString);
                                return (
                                   <div 
                                      key={idx} 
                                      onClick={() => toggleSelection(repairString)}
                                      className={`flex flex-col items-center justify-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden group ${isSelected ? 'border-orange-500 bg-orange-500/10 shadow-lg scale-105' : 'border-slate-100 hover:border-orange-500/30 hover:bg-orange-500/5'}`}
                                   >
                                      {isSelected && <div className="absolute top-3 right-3"><CheckCircle2 className="h-5 w-5 text-orange-500" /></div>}
                                      <div className={`p-4 rounded-full mb-3 transition-colors ${isSelected ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:text-orange-500 group-hover:bg-orange-500/10'}`}>
                                         <Settings className="h-8 w-8" />
                                      </div>
                                      <span className={`font-bold text-center leading-tight ${isSelected ? 'text-orange-700' : 'text-slate-700'}`}>{service.label}</span>
                                   </div>
                                );
                             })}
                          </div>
                          
                          <div className="mt-8 pt-8 border-t border-slate-100">
                             <div className="flex justify-between items-center bg-orange-50/50 p-6 rounded-2xl border border-orange-100 mb-4">
                                <div className="flex items-center gap-3">
                                  <div className="bg-orange-100 p-2 rounded-xl"><CheckCircle2 className="h-6 w-6 text-orange-600" /></div>
                                  <span className="font-bold text-slate-800 text-lg">Visit & Service Charge</span>
                                </div>
                                <span className="font-black text-orange-600 text-2xl">₹ 450/-</span>
                             </div>
                             <p className="text-sm font-semibold text-slate-500 leading-relaxed text-center">
                                Note: If any spare parts or multiple visits are required, they will be charged extra.
                             </p>
                          </div>
                          
                           <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                             <button onClick={() => handleAddToCart()} className="bg-slate-800 hover:bg-slate-900 w-full sm:w-auto text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-xl text-lg">
                                Add to Cart
                             </button>
                             <button onClick={() => handleWhatsApp()} className="bg-gradient-to-r from-orange-500 to-amber-500 w-full sm:w-auto text-white font-black py-4 px-10 rounded-2xl transition-all shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] text-lg">
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
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden border border-slate-800">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full" />
                       <h3 className="font-black text-xl mb-6 flex items-center gap-3 relative z-10">
                         <div className="bg-brand text-white p-2 rounded-xl"><ShoppingCart className="h-5 w-5" /></div> 
                         Your Selection ({selectedItems.length})
                       </h3>
                       <div className="max-h-[300px] overflow-y-auto pr-2 space-y-3 mb-6 custom-scrollbar relative z-10">
                          {selectedItems.map((item, i) => (
                             <div key={i} className="text-sm bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-start gap-3 backdrop-blur-md">
                                <span className="font-semibold text-slate-200 leading-snug">{item}</span>
                                <button onClick={() => toggleSelection(item)} className="text-white/40 hover:text-white shrink-0 bg-white/10 hover:bg-brand rounded-full p-1 transition-colors"><CheckCircle2 className="h-4 w-4" /></button>
                             </div>
                          ))}
                       </div>
                       
                       {totalPrice > 0 && (
                         <div className="bg-brand/10 border border-brand/20 rounded-2xl p-5 mb-6 flex justify-between items-center relative z-10">
                            <span className="font-bold text-brand">Total Cost</span>
                            <span className="font-black text-2xl text-white">₹ {totalPrice.toLocaleString('en-IN')}/-</span>
                         </div>
                       )}

                       <div className="space-y-3 relative z-10">
                         <button onClick={() => handleAddToCart()} className="w-full bg-white/10 text-white font-bold py-4 rounded-xl hover:bg-white/20 transition-colors shadow-md border border-white/10 flex justify-center items-center gap-2">
                            Add to Cart
                         </button>
                         <button onClick={() => handleWhatsApp()} className="w-full bg-gradient-to-r from-brand to-rose-600 text-white font-black py-4 rounded-xl hover:shadow-[0_10px_20px_rgba(217,46,16,0.3)] hover:-translate-y-0.5 transition-all shadow-md flex justify-center items-center gap-2">
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
