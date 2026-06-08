import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-CdWwcAj0.mjs";
import { R as Route, u as useCart } from "./router-CJ2-GpdV.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import { s as ArrowLeft, q as Star, l as ShieldCheck, k as Clock, t as CircleCheckBig, g as Phone, f as CircleCheck, u as Settings, v as SquareCheckBig, w as Square, V as Video, x as Server, p as Search, y as Cable, i as Lock, H as House, Z as Zap, z as Monitor, E as Layers, G as Lightbulb, I as Activity, J as TriangleAlert, K as Target, P as Paintbrush, N as Briefcase, O as SquareDashed, o as Sparkles, Q as LayoutTemplate, R as Info, U as CircleAlert } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/firebase__util.mjs";
import "../_libs/firebase__component.mjs";
import "../_libs/firebase__installations.mjs";
import "../_libs/idb.mjs";
import "../_libs/firebase__webchannel-wrapper.mjs";
import "../_libs/@grpc/grpc-js.mjs";
import "process";
import "tls";
import "fs";
import "os";
import "net";
import "events";
import "http2";
import "http";
import "url";
import "dns";
import "zlib";
import "../_libs/@grpc/proto-loader.mjs";
import "path";
import "../_libs/lodash.camelcase.mjs";
import "../_libs/protobufjs.mjs";
import "../_libs/protobufjs__aspromise.mjs";
import "../_libs/protobufjs__base64.mjs";
import "../_libs/protobufjs__eventemitter.mjs";
import "../_libs/protobufjs__float.mjs";
import "../_libs/@protobufjs/inquire.mjs";
import "../_libs/protobufjs__utf8.mjs";
import "../_libs/protobufjs__pool.mjs";
import "../_libs/long.mjs";
import "../_libs/protobufjs__codegen.mjs";
import "../_libs/protobufjs__fetch.mjs";
import "../_libs/protobufjs__path.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const cameraPriceList = [
  {
    series: "5MP FULL COLORVU EH55 PCB",
    items: [
      { name: "Plastic dome", price: 1900 },
      { name: "Bullet plastic", price: 2e3 }
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
      { name: "Half Metal Dome", price: 3e3 },
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
      { name: "Metal Bullet", price: 6e3 }
    ]
  },
  {
    series: "8MP HISILICON SOC REAL 4K H88",
    features: "Dual Hybrid LED",
    items: [
      { name: "Metal Dome", price: 5e3 },
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
function CCTVSurveillanceDetails() {
  const WHATSAPP_NUMBER = "919141052539";
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const [searchAccessory, setSearchAccessory] = reactExports.useState("");
  const toggleSelection = (serviceName) => {
    setSelectedItems(
      (prev) => prev.includes(serviceName) ? prev.filter((item) => item !== serviceName) : [...prev, serviceName]
    );
  };
  const handleWhatsApp = (serviceName) => {
    let text = "";
    if (serviceName) {
      text = `Hello Vendor99, I would like to book or inquire about: *${serviceName}* (CCTV & Surveillance)`;
    } else if (selectedItems.length > 0) {
      const itemList = selectedItems.map((item) => `- ${item}`).join("\n");
      text = `Hello Vendor99, I would like to book or inquire about the following services (CCTV & Surveillance):

${itemList}`;
    } else {
      text = `Hello Vendor99, I need a Certified Technician for CCTV & Surveillance.`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };
  const filteredAccessories = accessories.filter((a) => a.name.toLowerCase().includes(searchAccessory.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen pb-32 font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "bg-foreground text-background py-16 px-6 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand/20 blur-[100px] opacity-60 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center text-sm font-bold text-background/70 hover:text-white transition-colors mb-8 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
          " Back to Services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand font-extrabold tracking-widest uppercase text-sm mb-3", children: "Vendor99 Security Systems" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold tracking-tight", children: [
              "Smart Home & CCTV",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Professional Services"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => handleWhatsApp("CCTV Consultation"),
              className: "bg-brand text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-dark transition-all shadow-xl hover:shadow-brand/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 fill-current" }),
                "Chat on WhatsApp"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/50 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex items-center gap-5 hover:bg-secondary/20 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-100 p-4 rounded-2xl text-emerald-600 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-foreground text-lg", children: "Verified Experts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground mt-1", children: "100% background-checked." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex items-center gap-5 hover:bg-secondary/20 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 p-4 rounded-2xl text-blue-600 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-foreground text-lg", children: "Protection Insurance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground mt-1", children: "Up to ₹10,000 coverage." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex items-center gap-5 hover:bg-secondary/20 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-100 p-4 rounded-2xl text-amber-600 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-foreground text-lg", children: "On-Time Guarantee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground mt-1", children: "Prompt deployment always." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-16 space-y-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-premium text-white p-3 rounded-2xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold tracking-tight", children: "Book A Service" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border/50 rounded-[2.5rem] shadow-premium overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/50 p-6 border-b border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-lg text-foreground", children: "Select Services for Home Security" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium text-sm mt-1", children: "Choose the type of service you need" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: serviceOptions.map((opt) => {
            const isSelected = selectedItems.includes(opt.label);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                onClick: () => toggleSelection(opt.label),
                className: `cursor-pointer rounded-2xl p-4 flex items-center justify-between border-2 transition-all ${isSelected ? "border-brand bg-brand/5 shadow-sm" : "border-border/50 bg-white hover:border-brand/30"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-12 p-1.5 rounded-xl overflow-hidden ${isSelected ? "bg-brand/10" : "bg-secondary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: opt.image, alt: opt.label, className: "h-full w-full object-cover mix-blend-multiply" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold text-sm ${isSelected ? "text-brand" : "text-foreground"}`, children: opt.label })
                  ] }),
                  isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "h-5 w-5 text-brand" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-5 w-5 text-muted-foreground opacity-50" })
                ]
              },
              opt.id
            );
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 p-6 text-center border-t border-red-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-red-900 font-extrabold text-xl", children: "Minimum Visit Charge: ₹499" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-800/80 text-xs font-bold mt-2 max-w-xl mx-auto uppercase tracking-wide", children: "*Includes basic diagnostic. Extra charges for spare parts, transport, and multiple visits apply." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-foreground text-background p-3 rounded-2xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold tracking-tight", children: "Security Cameras Catalog" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium mt-1", children: "PRICE LIST - (New Prices Applied)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: cameraPriceList.map((cam, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "bg-white border border-border/50 rounded-[2rem] p-6 shadow-card hover:shadow-premium transition-all flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary/50 p-4 rounded-2xl shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-8 w-8 text-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-lg leading-tight text-foreground", children: cam.series }),
                  cam.features && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-primary mt-2 uppercase tracking-wide", children: cam.features })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/30 rounded-2xl p-5 flex-1 border border-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4 pb-2 border-b border-border/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "Variant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "Web Price" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: cam.items.map((item, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm group-hover:text-primary transition-colors", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-base", children: [
                    "₹",
                    item.price,
                    "/-"
                  ] })
                ] }, j)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleWhatsApp(`Inquiry for Camera: ${cam.series}`),
                  className: "mt-6 w-full py-3 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors",
                  children: "Request Quote"
                }
              )
            ]
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-premium text-white p-3 rounded-2xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold tracking-tight", children: "CCTV Accessories & Spare Parts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border/50 rounded-[2.5rem] shadow-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 border-b border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-96", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search categories...",
                value: searchAccessory,
                onChange: (e) => setSearchAccessory(e.target.value),
                className: "w-full bg-white border border-border/50 rounded-xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: filteredAccessories.map((acc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              layout: true,
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.9 },
              className: "bg-white border border-border/50 rounded-2xl p-5 hover:border-primary/50 hover:shadow-card transition-all flex flex-col items-center text-center cursor-pointer group",
              onClick: () => toggleSelection(`Accessory: ${acc.name}`),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 w-full bg-secondary/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: acc.image, alt: acc.name, className: "h-full w-full object-cover mix-blend-multiply" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm leading-snug mb-2", children: acc.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-extrabold text-brand mt-auto", children: acc.price }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `mt-4 w-full py-2 rounded-xl text-xs font-bold transition-colors ${selectedItems.includes(`Accessory: ${acc.name}`) ? "bg-brand text-white" : "bg-foreground text-background group-hover:bg-brand group-hover:text-white"}`, children: selectedItems.includes(`Accessory: ${acc.name}`) ? "ADDED ✓" : "Shop Now" })
              ]
            },
            acc.name
          )) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-3 rounded-2xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cable, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold tracking-tight", children: "Premium Infrastructure Cabling" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          { type: "Open Layout Cabling", desc: "Direct industrial clips", price: "₹25 / m" },
          { type: "Heavy-Duty Piping Protected", desc: "Secured inside solid PVC conduits", price: "₹40 / m" },
          { type: "Polished Wall Casing", desc: "Clean rectangular profile casings", price: "₹50 / m" },
          { type: "Concealed Internal Piping", desc: "In-spring flexible deployment", price: "₹50 / m" }
        ].map((cab, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border/50 rounded-[2rem] p-6 shadow-sm flex flex-col justify-between hover:shadow-card transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-foreground leading-tight", children: cab.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground mt-2", children: cab.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-extrabold text-brand block mb-4", children: cab.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(`Cabling: ${cab.type}`),
                className: `w-full py-3 rounded-xl font-bold transition-all ${selectedItems.includes(`Cabling: ${cab.type}`) ? "bg-brand text-white shadow-md" : "bg-secondary text-foreground hover:bg-foreground hover:text-background"}`,
                children: selectedItems.includes(`Cabling: ${cab.type}`) ? "Selected ✓" : "Add Service"
              }
            )
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "fixed bottom-8 right-8 z-50", children: selectedItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          initial: { opacity: 0, y: 50, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 50, scale: 0.9 },
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onClick: () => handleWhatsApp(),
          className: "bg-brand text-white px-8 py-5 rounded-full shadow-premium flex items-center gap-4 font-bold",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white text-brand rounded-full h-8 w-8 flex items-center justify-center text-sm font-extrabold", children: selectedItems.length }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium opacity-90 uppercase tracking-wider", children: "Send Request" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg", children: "Checkout via WhatsApp ➔" })
            ] })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          initial: { opacity: 0, y: 50, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 50, scale: 0.9 },
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onClick: () => handleWhatsApp("General Inquiry: Need a Certified Technician"),
          className: "bg-[#25D366] text-white px-8 py-5 rounded-full shadow-premium flex items-center gap-4 font-bold",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium opacity-90 uppercase tracking-wider", children: "Need Help?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg", children: "Chat via WhatsApp" })
            ] })
          ]
        }
      ) }) })
    ] })
  ] });
}
function HomeAutomationDetails() {
  const WHATSAPP_NUMBER = "919141052539";
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const toggleSelection = (serviceName) => {
    setSelectedItems(
      (prev) => prev.includes(serviceName) ? prev.filter((item) => item !== serviceName) : [...prev, serviceName]
    );
  };
  const handleWhatsApp = (serviceName) => {
    let text = "";
    if (serviceName) {
      text = `Hello Vendor99, I would like to book or inquire about: *${serviceName}* (Home Automation)`;
    } else if (selectedItems.length > 0) {
      const itemList = selectedItems.map((item) => `- ${item}`).join("\n");
      text = `Hello Vendor99, I would like to book or inquire about the following services (Home Automation):

${itemList}`;
    } else {
      text = `Hello Vendor99, I need a Certified Automation Engineer.`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-foreground text-background py-10 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center text-sm font-medium text-background/70 hover:text-background transition-colors mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Services"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand font-bold tracking-widest uppercase text-sm mb-2", children: "vendor99" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl font-bold", children: [
            "SMART HOME AUTOMATION",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "SOLUTIONS"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("Home Automation Consultation"),
            className: "bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
              "Chat on WhatsApp"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "3-Year Hardware Warranty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Extended 36-month unconditional replacement guarantee valid on all premium Native line smart components." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "30-Day Work Guarantee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Every execution layer and third-party node synchronization includes an uncompromised platform backing layout." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Transmit Protection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Up to ₹10,000 comprehensive protective coverage mapped across internal structural modules." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-12 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "1. Proprietary Smart Security Systems" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold", children: "★ 4.9 Smart Deployment Engineers" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Premium unified hardware ecosystems. Includes door-step expert mounting, loop testing, and extended 3-year warranty covers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Native Smart Door Lock Pro Edition" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Advanced 7-way unlock matrix (Biometric fingerprint, secure app remote routing, dual passcodes, RFID cards, and physical escape keys). Integrated HD security camera with BellConnect™ automatic visitor image routing." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 md:border-l border-border md:pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase font-bold", children: "Package Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold whitespace-nowrap", children: "₹14,999 - ₹16,999" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => toggleSelection("Native Smart Door Lock Pro Edition"),
                  className: `px-6 py-2.5 rounded-lg font-bold transition-colors ${selectedItems.includes("Native Smart Door Lock Pro Edition") ? "bg-brand text-white" : "bg-foreground text-background hover:bg-foreground/90"}`,
                  children: selectedItems.includes("Native Smart Door Lock Pro Edition") ? "SELECTED ✓" : "ADD"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Native Smart Door Lock Ultra Premium" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Ultimate 9-way locking architecture adding immediate 3D Face Unlock recognition, real-time live two-way talk audio video streaming, and built-in proximity loitering/lurker alarm triggers." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 md:border-l border-border md:pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase font-bold", children: "Package Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold whitespace-nowrap", children: "₹24,999" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => toggleSelection("Native Smart Door Lock Ultra Premium"),
                  className: `px-6 py-2.5 rounded-lg font-bold transition-colors ${selectedItems.includes("Native Smart Door Lock Ultra Premium") ? "bg-brand text-white" : "bg-foreground text-background hover:bg-foreground/90"}`,
                  children: selectedItems.includes("Native Smart Door Lock Ultra Premium") ? "SELECTED ✓" : "ADD"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "2. On-Demand Third-Party Smart Device Installations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Pay-per-node specialized labor solutions for products purchased from other mainstream brands (Philips, Wipro, Oakter, Mi, etc.)." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Automation Node Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Service Scope" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "Labor Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "Action" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: [
            { spec: "Smart Switchboard / Retrofit Modules", desc: "Wiring automation micro-modules directly behind structural switchboxes; pairing with master network hubs.", price: "₹99 - ₹149" },
            { spec: "Wireless Wi-Fi CCTV Setup", desc: "Rigid surface mounting, neat power cable routing, micro-SD provisioning, and cloud streaming alignment.", price: "₹299 / Node" },
            { spec: "Smart Video Doorbell Setup", desc: "Replacing legacy analog chimes with wireless video nodes, multi-user pairing, and electronic lock syncing.", price: "₹600" },
            { spec: "Smart / BLDC Fan Integration", desc: "Structural ceiling suspension, dynamic bracket balancing, RF remote registration, and network hub syncing.", price: "₹99" },
            { spec: "Home Theater System Layout", desc: "Surround audio staging and calibration for up to 2 distinct speakers, 1 centered soundbar, and 1 subwoofer unit.", price: "₹1,199" },
            { spec: "Smart TV Wall Mounting & Sync", desc: "Heavy anchoring of custom brackets, level balancing, voice-assistant integration, and smart app routing.", price: "₹399" }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-6 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: item.spec }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold md:text-right", children: item.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(`Install: ${item.spec}`),
                className: `px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${selectedItems.includes(`Install: ${item.spec}`) ? "bg-brand text-white" : "bg-brand/10 text-brand hover:bg-brand hover:text-white"}`,
                children: selectedItems.includes(`Install: ${item.spec}`) ? "ADDED ✓" : "ADD +"
              }
            ) })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-secondary/30 rounded-3xl p-8 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground", children: "Operational Policies & Guidelines" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Consultation / Initial Diagnosis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Switchbox audit or comprehensive ecosystem consultation loops carry a flat ₹49 diagnostic visit fee if no installation services are proceeded with." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Material Exclusions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Billed labor charges cover standard execution loops. Structural masonry materials, additional external core cables, or heavy anchor brackets are billed dynamically based on exact material use." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Platform Protection Loop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Warranty benefits and protection insurances remain strictly active inside the system database only for work elements fully recorded and executed through authorized digital booking routes." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2", children: [
        selectedItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-card border border-border shadow-lg p-3 rounded-xl text-xs mb-2 animate-bounce flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-3 w-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Need a Certified Automation Engineer at Your Doorstep?" })
        ] }),
        selectedItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp(),
            className: "bg-brand hover:bg-brand-dark text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white text-brand rounded-full h-6 w-6 flex items-center justify-center text-xs", children: selectedItems.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Send Request" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Proceed to WhatsApp ➔" })
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("General Inquiry: Need a Certified Automation Engineer"),
            className: "bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Skip manual queues" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "🟢 Dispatch via WhatsApp" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function SmartFilmGlassDetails() {
  const WHATSAPP_NUMBER = "919141052539";
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const toggleSelection = (serviceName) => {
    setSelectedItems(
      (prev) => prev.includes(serviceName) ? prev.filter((item) => item !== serviceName) : [...prev, serviceName]
    );
  };
  const handleWhatsApp = (serviceName) => {
    let text = "";
    if (serviceName) {
      text = `Hello Vendor99, I would like to book or inquire about: *${serviceName}* (Smart Film & PDLC Glass)`;
    } else if (selectedItems.length > 0) {
      const itemList = selectedItems.map((item) => `- ${item}`).join("\n");
      text = `Hello Vendor99, I would like to book or inquire about the following services (Smart Film & PDLC Glass):

${itemList}`;
    } else {
      text = `Hello Vendor99, I need a consultation for a Premium Smart Film or Glass Installation.`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-foreground text-background py-10 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center text-sm font-medium text-background/70 hover:text-background transition-colors mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Services"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand font-bold tracking-widest uppercase text-sm mb-2", children: "vendor99" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl font-bold", children: [
            "SMART FILM & PDLC",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "GLASS SOLUTIONS"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("Smart Film & PDLC Glass Consultation"),
            className: "bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
              "Chat on WhatsApp"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Precision Wiring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Expert integration of low-voltage step-down transformers (48V–60V AC) with neat structural seals." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Eco Protection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Built-in ~99% UV radiation blocking parameters to preserve interiors and improve energy efficiency loops." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Projection Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Off-state opaque surfaces are engineered to support sharp high-contrast multimedia rear projections." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-12 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "1. PDLC Smart Film & Laminated Glass Systems" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold", children: "★ 4.9 Architectural Glass Engineers" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Premium architectural privacy systems. Price includes precise technical sourcing and structural cutting alignments." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: [
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
        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: item.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 md:border-l border-border md:pl-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase font-bold", children: "Rate Range (Per Sq. Ft.)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold whitespace-nowrap", children: item.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(item.name),
                className: `px-6 py-2.5 rounded-lg font-bold whitespace-nowrap transition-colors min-w-[120px] ${selectedItems.includes(item.name) ? "bg-brand text-white" : "bg-foreground text-background hover:bg-foreground/90"}`,
                children: selectedItems.includes(item.name) ? "SELECTED ✓" : item.action
              }
            )
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "2. Engineering, Wiring & Smart Control Sync" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Professional technical execution covering secure wiring and smart control integrations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 dark:bg-amber-950/20 rounded-xl p-5 border border-amber-200 dark:border-amber-900/30 mb-8 flex gap-4 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-amber-500 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-amber-900 dark:text-amber-400", children: "Power Management Override:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-800 dark:text-amber-500 mt-1", children: [
              "Centralized controller infrastructure (including multi-channel copper core step-down power transformers, RF wireless hand remotes, and Wi-Fi modules) is calculated as a separate line item, adding a stable flat overhead of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹5,000 – ₹12,000 per zone" }),
              " based on target electrical load thresholds."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Integration Task" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Execution Specifics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "Service Fee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "Action" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: [
            { spec: "Laser Mapping & Frame Survey", desc: "Micrometer-accurate dimensional analysis to eliminate side light leakage gaps.", price: "₹499 / Survey", action: "BOOK NOW" },
            { spec: "Dust-Free Film Installation", desc: "Hyper-purified glass preparation and scraping to prevent air bubbles or crystal micro-hazing.", price: "Bundled*", action: "WITH FILM" },
            { spec: "IoT Voice Hub Alignment", desc: "Linking transformer relays to Wi-Fi receiver nodes. Configured with Amazon Alexa, Google Home, or local automation wall triggers.", price: "₹999", action: "ADD +" },
            { spec: "Non-Acidic Silicone Sealing", desc: "Waterproof edge sealing using neutral chemical compound structures to prevent edge delamination in bathrooms/showers.", price: "₹249 / Panel", action: "ADD +" }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-6 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: item.spec }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold md:text-right whitespace-nowrap", children: item.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-center", children: item.action === "WITH FILM" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground bg-secondary px-3 py-1.5 rounded uppercase w-full block", children: "WITH FILM" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(`Service: ${item.spec}`),
                className: `px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${selectedItems.includes(`Service: ${item.spec}`) ? "bg-brand text-white" : "bg-brand/10 text-brand hover:bg-brand hover:text-white"}`,
                children: selectedItems.includes(`Service: ${item.spec}`) ? "ADDED ✓" : item.action
              }
            ) })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-secondary/30 rounded-3xl p-8 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground", children: "Project Commercial Guidelines" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Minimum Project Volume (MOQ)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Architectural material dispatches and on-site expert installations carry a baseline operational threshold of 30 to 50 square feet per single mobilization run." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Laser Survey Adjustment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "The baseline laser mapping fee (₹499) is fully credited and adjusted directly inside the primary invoice once structural material fabrication is initiated." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Power Surge Protection Disclaimer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Input power configurations must operate behind verified surge protection circuits. Direct raw current fluctuations bypassing surge-buffers can degrade liquid crystals and void warranty schemes." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2", children: [
        selectedItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-card border border-border shadow-lg p-3 rounded-xl text-xs mb-2 animate-bounce flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-3 w-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Planning a Premium Smart Film or Glass Installation?" })
        ] }),
        selectedItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp(),
            className: "bg-brand hover:bg-brand-dark text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white text-brand rounded-full h-6 w-6 flex items-center justify-center text-xs", children: selectedItems.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Send Request" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Proceed to WhatsApp ➔" })
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("General Inquiry: Premium Smart Film or Glass Installation"),
            className: "bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Skip traditional engineering back-and-forth" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "🟢 Consult via WhatsApp" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function ElectricalWorkDetails() {
  const WHATSAPP_NUMBER = "919141052539";
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const toggleSelection = (serviceName) => {
    setSelectedItems(
      (prev) => prev.includes(serviceName) ? prev.filter((item) => item !== serviceName) : [...prev, serviceName]
    );
  };
  const handleWhatsApp = (serviceName) => {
    let text = "";
    if (serviceName) {
      text = `Hello Vendor99, I would like to book or inquire about: *${serviceName}* (Electrical Work)`;
    } else if (selectedItems.length > 0) {
      const itemList = selectedItems.map((item) => `- ${item}`).join("\n");
      text = `Hello Vendor99, I would like to book or inquire about the following services (Electrical Work):

${itemList}`;
    } else {
      text = `Hello Vendor99, I need an On-Demand Certified Electrician.`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-foreground text-background py-10 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center text-sm font-medium text-background/70 hover:text-background transition-colors mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Services"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand font-bold tracking-widest uppercase text-sm mb-2", children: "vendor99" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl font-bold", children: [
            "PROFESSIONAL ELECTRICIAN",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "& HOME SERVICES"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("Electrical Consultation"),
            className: "bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
              "Chat on WhatsApp"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Verified Electricians" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "100% background-checked, licensed, and senior deployment technicians." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Protection Insurance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Up to ₹10,000 comprehensive coverage against accidental property damage." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "On-Time Guarantee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Prompt service deployment within 120 mins or receive ₹100 direct wallet cashback." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-12 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "1. Fixture & Appliance Installation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold", children: "★ 4.8 Verified Electricians" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Standardized per-node pricing model optimized for flawless mounting and testing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: [
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
        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: item.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 md:border-l border-border md:pl-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase font-bold", children: "Fixed Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold whitespace-nowrap", children: item.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(item.name),
                className: `px-6 py-2.5 rounded-lg font-bold transition-colors min-w-[120px] ${selectedItems.includes(item.name) ? "bg-brand text-white" : "bg-foreground text-background hover:bg-foreground/90"}`,
                children: selectedItems.includes(item.name) ? "SELECTED ✓" : "ADD +"
              }
            )
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "2. Switches, Sockets & Panels" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Complete modular grouping, backend loop wire continuity routing, and dynamic load balancing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Component Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Inclusions & Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "Fixed Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "Action" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: [
            { spec: "Switch / Socket Replacement", desc: "Dismantling burnt or old nodes, clean core terminal joining, and modular panel plate alignment diagnostics.", price: "₹49" },
            { spec: "Complete Modular Switchboard Setup", desc: "Rear strip configuration control, safe grouping, phase line parsing, and master frame load distribution.", price: "₹299" },
            { spec: "MCB / Distribution Board Reset & Change", desc: "Comprehensive load diagnostic breakdown, short-circuit protection calibration, and single/three-phase line mapping.", price: "₹349" },
            { spec: "Inverter Integration & Sync", desc: "Dual phase bypass provisioning, battery terminal conditioning, acid check status, and primary backup matrix synchronization.", price: "₹499" }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_150px_150px] gap-4 p-6 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: item.spec }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold md:text-right whitespace-nowrap", children: item.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(`Service: ${item.spec}`),
                className: `px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${selectedItems.includes(`Service: ${item.spec}`) ? "bg-brand text-white" : "bg-brand/10 text-brand hover:bg-brand hover:text-white"}`,
                children: selectedItems.includes(`Service: ${item.spec}`) ? "ADDED ✓" : "ADD +"
              }
            ) })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "3. Premium Wiring & Infrastructure Solutions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Heavy-gauge wear-resistant copper configurations priced accurately per running meter." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: [
          { type: "Open Layout Internal Wiring", desc: "Direct heavy-duty safety clips, clean parallel line routing with heat protection alignment.", price: "₹35 / m" },
          { type: "Heavy-Duty PVC Conduit Wall Casing", desc: "Secured inside solid fire-retardant casing for enhanced moisture protection and aesthetic disturbance control.", price: "₹60 / m" },
          { type: "Concealed Wall / Ceiling Chasing Routing", desc: "Mechanical wall grooving, in-spring flexible deployment embedded flawlessly behind PoP or plaster.", price: "₹90 / m" }
        ].map((cab, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground leading-tight", children: cab.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-brand whitespace-nowrap", children: cab.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: cab.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => toggleSelection(`Wiring: ${cab.type}`),
              className: `mt-6 w-full border border-border px-4 py-2 rounded-lg font-bold transition ${selectedItems.includes(`Wiring: ${cab.type}`) ? "bg-brand text-white border-brand" : "bg-secondary hover:bg-foreground hover:text-background text-foreground"}`,
              children: selectedItems.includes(`Wiring: ${cab.type}`) ? "Selected ✓" : "ADD +"
            }
          )
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-red-50 dark:bg-red-950/20 rounded-3xl p-8 border border-red-100 dark:border-red-900/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-500 text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-red-950 dark:text-red-400", children: "4. On-Demand Fault Diagnosis & Repair" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white dark:bg-black rounded-lg px-4 py-2 border border-red-200 dark:border-red-800 shadow-sm mb-8 text-sm font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏷️" }),
          " Flat ₹149 Expert Inspection Fee (Completely waived off if any on-site fix is authorized)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: [
          { title: "Frequent Short Circuit & MCB Tripping Resolution", desc: "Complete multi-node breakdown tracking, power surge isolation loop analytics, and phase leakage restoration.", price: "₹149 / Job" },
          { title: "Complete House Leakage & Earthing Check", desc: "Digital Earth Resistance multi-meter testing, leakage current tracking, and safety ground spike deployment assessment.", price: "₹249 / Job" },
          { title: "Burnt Wire Splicing & Insulation Taping", desc: "Precise high-conductivity jointing with heavy-duty weatherized thermal tape barriers to protect structural elements.", price: "₹99 / Job" }
        ].map((diag, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-card border border-red-100 dark:border-red-900/30 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-red-900 dark:text-red-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
              " ",
              diag.title
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: diag.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold whitespace-nowrap", children: diag.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(`Repair Request: ${diag.title}`),
                className: `px-5 py-2 rounded-lg font-bold whitespace-nowrap shadow-sm ${selectedItems.includes(`Repair Request: ${diag.title}`) ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-red-600 text-white hover:bg-red-700"}`,
                children: selectedItems.includes(`Repair Request: ${diag.title}`) ? "ADDED ✓" : "BOOK FIX"
              }
            )
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2", children: [
        selectedItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-card border border-border shadow-lg p-3 rounded-xl text-xs mb-2 animate-bounce flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-3 w-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Need an On-Demand Certified Electrician?" })
        ] }),
        selectedItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp(),
            className: "bg-brand hover:bg-brand-dark text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white text-brand rounded-full h-6 w-6 flex items-center justify-center text-xs", children: selectedItems.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Send Request" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Proceed to WhatsApp ➔" })
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("General Inquiry: Need a Certified Electrician"),
            className: "bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Skip traditional booking delays" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "🟢 Book via WhatsApp" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function PaintingDetails() {
  const WHATSAPP_NUMBER = "919141052539";
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const toggleSelection = (serviceName) => {
    setSelectedItems(
      (prev) => prev.includes(serviceName) ? prev.filter((item) => item !== serviceName) : [...prev, serviceName]
    );
  };
  const handleWhatsApp = (serviceName) => {
    let text = "";
    if (serviceName) {
      text = `Hello Vendor99, I would like to book or inquire about: *${serviceName}* (Painting Services)`;
    } else if (selectedItems.length > 0) {
      const itemList = selectedItems.map((item) => `- ${item}`).join("\n");
      text = `Hello Vendor99, I would like to book or inquire about the following services (Painting Services):

${itemList}`;
    } else {
      text = `Hello Vendor99, I need an On-Demand Certified Painter.`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-foreground text-background py-10 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center text-sm font-medium text-background/70 hover:text-background transition-colors mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Services"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand font-bold tracking-widest uppercase text-sm mb-2", children: "Vendor99 Painting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl font-bold", children: [
            "PROFESSIONAL PAINTING",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "SERVICES (2026)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("Painting Consultation"),
            className: "bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
              "Chat on WhatsApp"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Laser Tech Scoping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Precise area measurements ensuring transparent structural pricing." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "100% Genuine Materials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Brand-sealed delivery directly to your site for complete authenticity." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "1-Year Service Warranty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Comprehensive quality warranty on all execution layers and finishes." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-12 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "1. Space-by-Space Modular Pricing" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Targeted refreshes varying depending on room configuration and localized preparation requirements." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_100px_150px_120px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Service Segment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Standard Coverage Scope" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Timeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "Starting Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "Action" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: [
            { name: "Accent Wall Painting", scope: "Single focal wall, multi-coat premium finish", time: "9 Hours", price: "₹2,499 - ₹2,999" },
            { name: "Standard Bedroom", scope: "4 Walls + 1 Ceiling (Up to 450 sq ft area)", time: "2 Days", price: "₹5,499 - ₹5,785" },
            { name: "Living Room", scope: "Comprehensive wall area + specialized ceiling masking", time: "2 Days", price: "₹6,499 - ₹7,876" },
            { name: "Dining Room", scope: "Standard walls with standard surface preparation", time: "2 Days", price: "₹5,999 - ₹6,500" },
            { name: "Combined Living & Dining", scope: "Open layout configurations, uniform coat mapping", time: "2 Days", price: "₹9,499" },
            { name: "Kitchen Unit", scope: "Oil-based distemper or advanced stain resistant paint", time: "2 Days", price: "₹3,499 - ₹4,072" },
            { name: "Bathroom / Wet Areas", scope: "Anti-fungal, moisture-resistant layer map", time: "9 Hours", price: "₹2,499 - ₹2,999" },
            { name: "Balcony Area", scope: "Weather-proof exterior grade baseline application", time: "9 Hours", price: "₹2,499 - ₹3,499" },
            { name: "Lobby / Pathways", scope: "High-traffic scuff-resistant paint coats", time: "2 Days", price: "₹3,499" }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_2fr_100px_150px_120px] gap-4 p-6 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.scope }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              " ",
              item.time
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold md:text-right whitespace-nowrap", children: item.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(`Modular: ${item.name}`),
                className: `px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${selectedItems.includes(`Modular: ${item.name}`) ? "bg-brand text-white" : "bg-brand/10 text-brand hover:bg-brand hover:text-white"}`,
                children: selectedItems.includes(`Modular: ${item.name}`) ? "ADDED ✓" : "ADD +"
              }
            ) })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "2. Turnkey Flat Packages (Full House)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Comprehensive renovations splitting unfurnished and furnished structures." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold flex items-center gap-2 mb-4", children: [
              "Economy Tier ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-secondary px-2 py-1 rounded text-muted-foreground font-medium", children: "Tractor Emulsion Grade" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center bg-secondary/30 p-4 rounded-xl border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "1 BHK Economy Pack" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "1 Living Room, 1 Bedroom, Kitchen, Bathroom" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xl", children: "Starts ₹8,000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => toggleSelection("1 BHK Economy Pack"),
                    className: "text-brand text-xs font-bold uppercase mt-1 hover:underline",
                    children: selectedItems.includes("1 BHK Economy Pack") ? "SELECTED ✓" : "SELECT PACK"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 shadow-sm flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-6 w-6 text-blue-500 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-900 dark:text-blue-400", children: "Area Calculation Protocol" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800 dark:text-blue-500 mt-2", children: [
                "Final billing values are tied to accurate carpet and wall surface data extracted via on-site laser measurements.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Standardized Formulation:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Total Area = 3.5 × Carpet Area"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_120px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Apartment Size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Unfurnished Layout" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Furnished Layout" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Ops Period" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "Action" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: [
            { size: "1 BHK Apartment", unfurnished: "Starts at ₹9,499", furnished: "Starts at ₹9,999", time: "1 - 3 Days" },
            { size: "2 BHK Apartment", unfurnished: "Starts at ₹12,999", furnished: "Starts at ₹13,499", time: "3 - 4 Days" },
            { size: "3 BHK Apartment", unfurnished: "Starts at ₹16,999", furnished: "Starts at ₹25,499", time: "3 - 5 Days" }
          ].map((pack, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_120px] gap-4 p-6 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: pack.size }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden text-muted-foreground", children: "Unfurnished: " }),
              pack.unfurnished
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden text-muted-foreground", children: "Furnished: " }),
              pack.furnished
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: pack.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(`Turnkey: ${pack.size}`),
                className: `px-4 py-2 rounded-lg font-bold transition w-full ${selectedItems.includes(`Turnkey: ${pack.size}`) ? "bg-brand text-white" : "bg-foreground text-background hover:bg-foreground/90"}`,
                children: selectedItems.includes(`Turnkey: ${pack.size}`) ? "SELECTED ✓" : "SELECT"
              }
            ) })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4", children: "Asian Paints Catalog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-center text-sm border-b border-border pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Royale Shyne" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "Ultra-Premium High Gloss" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "₹31 / sq.ft" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-center text-sm border-b border-border pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Royale Luxury Emulsion" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "Premium Matte/Satin" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "₹30 / sq.ft" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-center text-sm border-b border-border pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Apcolite Advanced Emulsion" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "Mid-tier Durable Finish" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "₹20 - ₹21 / sq.ft" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-center text-sm border-b border-border pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Apcolite Premium Emulsion" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "Value Tier Interior Paint" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "₹17 / sq.ft" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-center text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Ace Exterior Emulsion" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "Standard Exterior Weather Guard" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "~₹30 / sq.ft" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4", children: "Dulux Paints Catalog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-center text-sm border-b border-border pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Super Clean 3-in-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "Stain Resistant Matte" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Starts ₹22 / sq.ft" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-center text-sm border-b border-border pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Super Cover / Promise Premium" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "Economy Smooth Finish" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "₹17 - ₹20 / sq.ft" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-center text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "PearlGlo Luxury Series" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "Exquisite Pearl Sheen" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-brand", children: "Premium Quote" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paintbrush, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "4. Speciality & Auxiliary Painting Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
          { title: "Terrace / Exterior Waterproofing", price: "Starts at ₹5,499" },
          { title: "Tile Grouting (Water-resistant)", price: "Starts at ₹2,399" },
          { title: "Door Painting (Enamel/Polish)", price: "Starts at ₹2,499 / unit" },
          { title: "Cabinet & Trim Painting", price: "Starts at ₹1,999" },
          { title: "Metal Gate / Shutter Painting", price: "Starts at ₹2,499" },
          { title: "Grill Work Painting", price: "Starts at ₹1,999" }
        ].map((aux, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground leading-tight", children: aux.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-brand block mt-2", children: aux.price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => toggleSelection(`Auxiliary: ${aux.title}`),
              className: `mt-6 w-full border border-border px-4 py-2 rounded-lg font-bold transition ${selectedItems.includes(`Auxiliary: ${aux.title}`) ? "bg-brand text-white border-brand" : "bg-secondary hover:bg-foreground hover:text-background text-foreground"}`,
              children: selectedItems.includes(`Auxiliary: ${aux.title}`) ? "Selected ✓" : "ADD +"
            }
          )
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-secondary/30 rounded-3xl p-8 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-6 w-6 text-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "The Operating Framework" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent", children: [
          { step: "Step 1", title: "Digital Consultation & Laser Diagnosis", desc: "Precise measurements mapped using laser distance meters to eliminate manual padding anomalies. Dynamic, transparent digital quotation detailing materials and labor." },
          { step: "Step 2", title: "Asset Masking & Protection Protocol", desc: "Heavy-duty masking paper and plastic drop sheets deployed. Flooring, static woodwork, and electronics comprehensively wrapped for a 100% dust-free workspace." },
          { step: "Step 3", title: "Supervised Execution", desc: "Every active site supervised directly by a dedicated Project Manager. Transparent updates, milestones, and scope adaptations via our application." },
          { step: "Step 4", title: "Comprehensive Cleanup & Handover", desc: "Strict post-paint remediation framework. Masking tools extracted, furniture reset, debris cleaned. Meticulous final quality inspection validates zero bubbles or bleedings." }
        ].map((fw, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-brand", children: i + 1 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-5 rounded-2xl shadow-sm border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-1", children: fw.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: fw.desc })
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 bg-white dark:bg-black p-6 rounded-2xl border border-border shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-4", children: "Commercial Milestone Schedule" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Minimum Project Value:" }),
              " Full managed service setups require an active project value exceeding ₹25,000."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Payment Architecture:" }),
              " 35% Advance Payment (Fully refundable up to 24 hours prior to work) and 65% Milestone Balance Settlement upon final structural handover."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Cancellation Policy:" }),
              " Free if processed ",
              ">",
              "24 hours prior to start. Late-stage cancellations attract a structured baseline operational processing fee of ₹1,000."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2", children: [
        selectedItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-card border border-border shadow-lg p-3 rounded-xl text-xs mb-2 animate-bounce flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-3 w-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Need an On-Demand Certified Painter?" })
        ] }),
        selectedItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp(),
            className: "bg-brand hover:bg-brand-dark text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white text-brand rounded-full h-6 w-6 flex items-center justify-center text-xs", children: selectedItems.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Send Request" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Proceed to WhatsApp ➔" })
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("General Inquiry: Need a Certified Painter"),
            className: "bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Skip manual queues" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "🟢 Book via WhatsApp" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function HomeInteriorDetails() {
  const WHATSAPP_NUMBER = "919141052539";
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const toggleSelection = (serviceName) => {
    setSelectedItems(
      (prev) => prev.includes(serviceName) ? prev.filter((item) => item !== serviceName) : [...prev, serviceName]
    );
  };
  const handleWhatsApp = (serviceName) => {
    let text = "";
    if (serviceName) {
      text = `Hello Vendor99, I would like to book or inquire about: *${serviceName}* (Home Interior & Painting)`;
    } else if (selectedItems.length > 0) {
      const itemList = selectedItems.map((item) => `- ${item}`).join("\n");
      text = `Hello Vendor99, I would like to book or inquire about the following services (Home Interior & Painting):

${itemList}`;
    } else {
      text = `Hello Vendor99, I need a Premium Home Makeover Consultation.`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-foreground text-background py-10 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center text-sm font-medium text-background/70 hover:text-background transition-colors mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Services"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand font-bold tracking-widest uppercase text-sm mb-2", children: "vendor99" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl font-bold", children: [
            "PREMIUM HOME INTERIOR",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "& PAINTING SOLUTIONS"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("Interior Consultation"),
            className: "bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
              "Consult via WhatsApp"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full text-emerald-600 dark:text-emerald-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareDashed, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Premium Masking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Full asset masking, heavy surface protective wrapping, and careful furniture shifting protocols." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Spotless Handover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Comprehensive space cleanup, daily debris clearing, and reset of assets to their original layout lines." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "₹10K Cover Guarantee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Automated accidental damage platform insurance protection active for all digital bookings." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-12 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutTemplate, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "1. Wall Makeovers, Panels & Mouldings" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold", children: "★ 4.9 Top-Rated Interior Experts" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Premium architectural accent conversions. Billed via precise on-site mapping iterations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 shadow-sm flex gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-6 w-6 text-blue-500 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-900 dark:text-blue-400 flex items-center gap-2", children: "📐 Expert Pre-Consultation Rule:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800 dark:text-blue-500 mt-2", children: [
              "Spaces require a flat ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹499" }),
              " design mapping visit. This layout audit fee is credited and balanced directly inside your final consolidated project bill once material execution is authorized."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: [
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
        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: item.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 md:border-l border-border md:pl-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase font-bold", children: "Package Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold whitespace-nowrap", children: item.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(item.name),
                className: `px-6 py-2.5 rounded-lg font-bold transition-colors min-w-[120px] ${selectedItems.includes(item.name) ? "bg-brand text-white" : "bg-foreground text-background hover:bg-foreground/90"}`,
                children: selectedItems.includes(item.name) ? "SELECTED ✓" : item.btnText
              }
            )
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paintbrush, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "2. Target Area & Individual Room Painting" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Fixed transparent rates covering localized residential wall refreshing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[2fr_150px_120px_120px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Target Zone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Timeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "Starting Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "Action" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: [
            { zone: "Single Wall Accent Treatment", time: "9 Standard hours", price: "₹2,499" },
            { zone: "Two or More Accent Walls Combo", time: "2 Full business days", price: "₹3,999" },
            { zone: "Complete Standard Bedroom Suite", time: "2 Full business days", price: "₹5,499" },
            { zone: "Living & Dining Hall Master Upgrade", time: "2 Full business days", price: "₹9,499" },
            { zone: "Modular Kitchen Coating Overhaul", time: "2 Full business days", price: "₹3,499" },
            { zone: "Bathroom Anti-Moisture Wall Coating", time: "9 Standard hours", price: "₹2,999" }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[2fr_150px_120px_120px] gap-4 p-6 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: item.zone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold md:text-right whitespace-nowrap", children: item.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(`Painting: ${item.zone}`),
                className: `px-6 py-2 rounded-lg font-bold transition w-full md:w-auto ${selectedItems.includes(`Painting: ${item.zone}`) ? "bg-brand text-white" : "bg-brand/10 text-brand hover:bg-brand hover:text-white"}`,
                children: selectedItems.includes(`Painting: ${item.zone}`) ? "ADDED ✓" : "ADD"
              }
            ) })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "3. Turnkey Apartment Multi-Coat Packages" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Comprehensive multi-room solutions calculated precisely across furnished and raw environments." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_150px_120px_120px_120px] gap-4 p-4 bg-secondary/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Configuration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Execution Window" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Unfurnished" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Furnished" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "Action" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: [
            { size: "1 BHK Apartment Package", time: "3 business days", unfurnished: "₹9,499", furnished: "₹9,999" },
            { size: "2 BHK Apartment Package", time: "3 to 4 business days", unfurnished: "₹12,999", furnished: "₹13,499" },
            { size: "3 BHK Apartment Package", time: "4 to 5 business days", unfurnished: "₹16,999", furnished: "₹16,149" }
          ].map((pack, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_150px_120px_120px_120px] gap-4 p-6 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: pack.size }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: pack.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden text-muted-foreground", children: "Unfurnished: " }),
              pack.unfurnished
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden text-muted-foreground", children: "Furnished: " }),
              pack.furnished
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-center mt-2 md:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => toggleSelection(`Turnkey: ${pack.size}`),
                className: `px-4 py-2 rounded-lg font-bold transition w-full ${selectedItems.includes(`Turnkey: ${pack.size}`) ? "bg-brand text-white" : "bg-foreground text-background hover:bg-foreground/90"}`,
                children: selectedItems.includes(`Turnkey: ${pack.size}`) ? "SELECTED ✓" : "SELECT"
              }
            ) })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand text-white p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "4. Specialty Infrastructure Care & Handover Sweeps" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Extended finish options and specialized industrial deep cleaning to conclude renovations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          { title: "Wood Polish / Built-in Wardrobe Painting", desc: "Surface leveling and grain enrichment layers.", time: "3 Hours execution", price: "₹1,999", btnText: "ADD" },
          { title: "Main Entry Door High-Gloss Enamel", desc: "Weatherproofing and double-coat perimeter sealing.", time: "9 Hours execution", price: "₹2,499", btnText: "ADD" },
          { title: "Full Furnished House Deep Cleaning", desc: "Industrial vacuuming, window track cleaning, and chemical stain stripping.", time: "Turnkey sweep", price: "₹3,499", btnText: "ADD" },
          { title: "Intense Deep Bathroom Acid Scrubbing", desc: "Covers 2 legacy bathrooms. Scale removal and mirror buffing.", time: "3 Hours execution", price: "₹1,016 Package", btnText: "BUNDLE" }
        ].map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-4 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground leading-tight", children: spec.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-brand whitespace-nowrap", children: spec.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: spec.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold mt-4 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 inline-block px-2 py-1 rounded", children: [
              "⏱ ",
              spec.time
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => toggleSelection(`Specialty: ${spec.title}`),
              className: `mt-6 w-full border border-border px-4 py-2 rounded-lg font-bold transition ${selectedItems.includes(`Specialty: ${spec.title}`) ? "bg-brand text-white border-brand" : "bg-secondary hover:bg-foreground hover:text-background text-foreground"}`,
              children: selectedItems.includes(`Specialty: ${spec.title}`) ? "Selected ✓" : spec.btnText
            }
          )
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-secondary/30 rounded-3xl p-8 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-6 w-6 text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "PROJECT OPERATIONAL RULES & POLICIES" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-bold text-foreground", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Installment Schedule:" }),
              " Structural renovations follow a verified dual payment milestone loop: 35% upfront balance due at blueprint lock, and the 65% remaining balance processed post-handover customer validation."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-bold text-foreground", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Late Cancellation Clawback:" }),
              " Mobilization cancellations requested under less than a 24-hour window from the target scheduling slot trigger an automated ₹1,000 cancellation charge."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-bold text-foreground", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Inventory Management Safeguards:" }),
              " Painting crews handle all hardware masking, furniture shifting assistance, and baseline wrapping protection. Heavy structural built-in adjustments must be flagged post-consultation survey loop."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2", children: [
        selectedItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-card border border-border shadow-lg p-3 rounded-xl text-xs mb-2 animate-bounce flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-3 w-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ready to Conceptualize a Premium Home Makeover?" })
        ] }),
        selectedItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp(),
            className: "bg-brand hover:bg-brand-dark text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white text-brand rounded-full h-6 w-6 flex items-center justify-center text-xs", children: selectedItems.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Send Request" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Proceed to WhatsApp ➔" })
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleWhatsApp("General Inquiry: Premium Home Makeover"),
            className: "bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold transition-transform hover:scale-105",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal opacity-90", children: "Skip traditional delayed agency consultations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "🟢 Consult via WhatsApp" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function ServiceDetailsPage() {
  const {
    service
  } = Route.useLoaderData();
  const {
    addToCart
  } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: service.id,
      title: service.title,
      price: service.price,
      image: service.image
    });
    toast.success(`${service.title} added to cart!`);
  };
  if (service.id === "cctv-surveillance") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCTVSurveillanceDetails, {}) });
  }
  if (service.id === "home-automation") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HomeAutomationDetails, {}) });
  }
  if (service.id === "smart-film-glass") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartFilmGlassDetails, {}) });
  }
  if (service.id === "electrical-work") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ElectricalWorkDetails, {}) });
  }
  if (service.id === "painting") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaintingDetails, {}) });
  }
  if (service.id === "home-interior") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HomeInteriorDetails, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-background border-b border-border/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[100px] opacity-70 animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 lg:py-20 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-8 bg-secondary/50 hover:bg-secondary px-5 py-2.5 rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
          " Back to Services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: -30
          }, animate: {
            opacity: 1,
            x: 0
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center rounded-xl bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(service.Icon, { className: "mr-2 h-4 w-4" }),
                service.details
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-bold bg-warning/10 text-warning px-3 py-1.5 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-warning text-warning" }),
                service.rating,
                " (",
                service.reviews,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl font-medium leading-relaxed text-muted-foreground max-w-xl", children: service.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row sm:items-center gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-border/50 rounded-2xl px-6 py-4 shadow-sm inline-flex items-center justify-between min-w-[220px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest font-bold", children: "Starting Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-extrabold text-foreground mt-1", children: service.price })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
                scale: 1.05
              }, whileTap: {
                scale: 0.95
              }, onClick: handleAddToCart, className: "rounded-2xl bg-gradient-premium px-10 py-5 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all", children: "Book Service Now" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-8 text-sm text-muted-foreground font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-success" }),
                " Enterprise Grade"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary" }),
                " Fast Delivery"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            scale: 0.95
          }, animate: {
            opacity: 1,
            scale: 1
          }, className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-to-tr from-brand-soft to-blue-50/50 rounded-[3rem] blur-3xl opacity-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/40 bg-card shadow-premium", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.image, alt: service.title, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-20 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-extrabold tracking-tight md:text-4xl", children: [
          "Why choose our ",
          service.title,
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 gap-6", children: service.features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.1
        }, className: "flex gap-4 p-6 rounded-3xl border border-border/50 bg-background shadow-sm hover:shadow-card transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 bg-primary/10 p-2.5 rounded-2xl h-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-lg leading-snug", children: feature })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, className: "mt-16 bg-secondary/30 rounded-[2.5rem] p-10 border border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-extrabold", children: "How it works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "mt-8 space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-premium shadow-md text-lg font-bold text-white", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl text-foreground", children: "Book the service" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base font-medium text-muted-foreground leading-relaxed", children: "Add to cart and complete checkout. No immediate payment required." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-premium shadow-md text-lg font-bold text-white", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl text-foreground", children: "Consultation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base font-medium text-muted-foreground leading-relaxed", children: "Our expert will call you to understand your exact requirements." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-premium shadow-md text-lg font-bold text-white", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl text-foreground", children: "Execution" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base font-medium text-muted-foreground leading-relaxed", children: "We deliver the service on time with enterprise-grade quality." })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, className: "sticky top-28 rounded-[2.5rem] border border-white/50 glass bg-white/60 p-10 shadow-premium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-extrabold tracking-tight", children: "Estimated Cost Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-medium text-muted-foreground mt-2", children: "Transparent pricing for standard packages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-5", children: service.costBreakdown.map((cost, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-5 border-b border-border/50 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium text-lg", children: cost.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: cost.value })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-8 border-t border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-foreground text-xl", children: "Total Starting At" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-extrabold text-primary", children: service.price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground text-right mt-3", children: "*Final price depends on exact scope" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.02
        }, whileTap: {
          scale: 0.98
        }, onClick: handleAddToCart, className: "mt-10 w-full rounded-2xl bg-gradient-premium px-6 py-5 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all", children: "Add to Cart" })
      ] }) })
    ] }) })
  ] });
}
export {
  ServiceDetailsPage as component
};
