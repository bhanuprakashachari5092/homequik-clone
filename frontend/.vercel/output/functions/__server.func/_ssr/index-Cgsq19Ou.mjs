import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BrWDYtEP.mjs";
import { u as useLocation, d as db, c as useAuth, b as useCart, L as Loader } from "./router-VcBEdyYl.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { o as onSnapshot, c as collection, a as addDoc, s as serverTimestamp } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__storage.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { w as Sparkles, a as ShieldCheck, j as Star, g as Clock, C as CircleCheck, l as ArrowRight, p as ShoppingCart, t as Settings, W as Wrench, x as Shield, P as Phone, y as Award, X, z as User, h as MapPin, n as Calendar, F as FileText } from "../_libs/lucide-react.mjs";
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
import "../_libs/lottiefiles__dotlottie-react.mjs";
import "../_libs/lottiefiles__dotlottie-web.mjs";
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
import "dns";
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
import "http";
import "url";
import "zlib";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function BookingModal({ isOpen, onClose, serviceName, selectedItems = [] }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState("form");
  const [bookingId, setBookingId] = reactExports.useState("");
  const [loadingText, setLoadingText] = reactExports.useState("Submitting Booking...");
  const today = /* @__PURE__ */ new Date();
  const defaultDate = today.toLocaleDateString("en-CA");
  const defaultTime = today.toTimeString().split(" ")[0].substring(0, 5);
  const [formData, setFormData] = reactExports.useState({
    fullName: "",
    phone: "",
    address: "",
    date: defaultDate,
    time: defaultTime,
    notes: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Book button clicked");
    if (!user) {
      toast.error("Please login to proceed with booking.");
      onClose();
      navigate({ to: "/login" });
      return;
    }
    if (!formData.fullName || !formData.phone || !formData.address || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setStep("submitting");
    try {
      const generatedId = "HQ-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      setTimeout(() => setLoadingText("Saving Data..."), 1e3);
      setTimeout(() => setLoadingText("Confirming Booking..."), 2e3);
      const docRef = await addDoc(collection(db, "bookings"), {
        bookingId: generatedId,
        customerName: formData.fullName,
        customerPhone: formData.phone,
        customerAddress: formData.address,
        serviceName,
        selectedItems,
        bookingDate: formData.date,
        bookingTime: formData.time,
        notes: formData.notes,
        status: "Pending",
        createdAt: serverTimestamp()
      });
      console.log("SUCCESS:", docRef.id);
      setBookingId(generatedId);
      setTimeout(() => {
        let text = `Hello Vendor99,

*New Booking Request:*
`;
        text += `- Service: ${serviceName}
`;
        if (selectedItems && selectedItems.length > 0) {
          text += `- Items: ${selectedItems.join(", ")}
`;
        }
        text += `
*Customer Details:*
`;
        text += `- Name: ${formData.fullName}
`;
        text += `- Phone: ${formData.phone}
`;
        text += `- Address: ${formData.address}
`;
        text += `- Schedule: ${formData.date} at ${formData.time}
`;
        if (formData.notes) text += `- Notes: ${formData.notes}
`;
        const WHATSAPP_NUMBER = "919141052539";
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
        resetAndClose();
      }, 3500);
    } catch (error) {
      console.error("FIRESTORE ERROR:", error);
      toast.error("Failed to create booking. Please try again.");
      setStep("form");
    }
  };
  const resetAndClose = () => {
    setStep("form");
    const today2 = /* @__PURE__ */ new Date();
    setFormData({
      fullName: "",
      phone: "",
      address: "",
      date: today2.toLocaleDateString("en-CA"),
      time: today2.toTimeString().split(" ")[0].substring(0, 5),
      notes: ""
    });
    onClose();
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.9, y: 20 },
      className: "bg-white rounded-[2rem] shadow-premium w-full max-w-lg overflow-hidden relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-premium p-6 text-white relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: resetAndClose,
              className: "absolute top-4 right-4 h-8 w-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Book Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm mt-1", children: serviceName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          step === "form" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.form,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              onSubmit: handleSubmit,
              className: "space-y-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-3 h-5 w-5 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", name: "fullName", value: formData.fullName, onChange: handleChange, placeholder: "Full Name", className: "w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-3 h-5 w-5 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", name: "phone", value: formData.phone, onChange: handleChange, placeholder: "Mobile Number", className: "w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "absolute left-3 top-3 h-5 w-5 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", name: "address", value: formData.address, onChange: handleChange, placeholder: "Complete Address", className: "w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "absolute left-3 top-3 h-5 w-5 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "date", name: "date", value: formData.date, onChange: handleChange, className: "w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "absolute left-3 top-3 h-5 w-5 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "time", name: "time", value: formData.time, onChange: handleChange, className: "w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "absolute left-3 top-3 h-5 w-5 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "notes", value: formData.notes, onChange: handleChange, placeholder: "Additional Notes (Optional)", rows: 3, className: "w-full bg-secondary/50 border border-border rounded-xl py-3 pl-10 pr-4 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none" })
                  ] })
                ] }),
                selectedItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-soft/30 p-4 rounded-xl border border-brand/20 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-brand", children: "Selected:" }),
                  " ",
                  selectedItems.join(", ")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    type: "submit",
                    className: "w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-md mt-4",
                    children: "Confirm Booking"
                  }
                )
              ]
            }
          ),
          step === "submitting" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, scale: 0.9 },
              className: "flex flex-col items-center justify-center py-16 space-y-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 h-48 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: "lg", text: "" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.h3,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      className: "text-2xl font-black text-slate-800 tracking-tight",
                      children: loadingText
                    },
                    loadingText
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium", children: "Please wait while we secure your slot..." })
                ] })
              ]
            }
          ),
          step === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              className: "flex flex-col items-center justify-center py-8 text-center relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { delay: 0.2 },
                    className: "absolute top-10 w-64 h-64 bg-success/10 blur-[60px] rounded-full -z-10"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0, rotate: -180 },
                    animate: { scale: 1, rotate: 0 },
                    transition: { type: "spring", bounce: 0.6, duration: 0.8 },
                    className: "w-24 h-24 bg-gradient-to-tr from-success to-emerald-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-success/30 transform rotate-3",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                        transition: { delay: 0.5, type: "spring", bounce: 0.5 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-white" })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.h3,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.3 },
                    className: "text-3xl font-black mb-3 bg-gradient-to-r from-success to-emerald-600 bg-clip-text text-transparent",
                    children: "Booking Confirmed!"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.4 },
                    className: "text-slate-600 mb-8 font-medium text-lg px-4",
                    children: "Your request is secured. Our AI agent will contact you shortly!"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5 },
                    className: "w-full bg-white/50 backdrop-blur-md border border-slate-200/60 rounded-[2rem] p-6 mb-8 text-left space-y-4 shadow-xl shadow-slate-200/20",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-slate-100 pb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium", children: "Tracking ID" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-brand bg-brand/10 px-3 py-1 rounded-lg text-sm tracking-wider", children: bookingId })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-slate-100 pb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium", children: "Service" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 text-sm max-w-[60%] text-right", children: serviceName })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium", children: "Schedule" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800 text-sm text-right bg-slate-100 px-3 py-1 rounded-lg", children: [
                          formData.date,
                          " at ",
                          formData.time
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.05, y: -2 },
                    whileTap: { scale: 0.95 },
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.7 },
                    onClick: resetAndClose,
                    className: "w-full bg-slate-900 text-white font-black text-lg py-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:bg-slate-800 transition-all",
                    children: "Done & Close"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  ) }) });
}
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
          { col1: "Display Monitors & Routers", col2: '17" LED Monitor', col3: "₹ 3,000/-" },
          { col1: "Display Monitors & Routers", col2: '19" LED Monitor', col3: "₹ 6,000/-" },
          { col1: "Display Monitors & Routers", col2: '22" LED Monitor', col3: "₹ 10,500/-" },
          { col1: "Display Monitors & Routers", col2: "Basic SIM Card Router", col3: "₹ 2,500/-" }
        ]
      },
      {
        title: "Accessories",
        image: "/images/cctv_accessories.png",
        headers: ["Category", "Item Description", "Price (INR)"],
        items: [
          { col1: "Accessories", col2: 'Camera Box (5" x 5")', col3: "₹ 100/-" },
          { col1: "Accessories", col2: 'PVC Box (4" x 4")', col3: "₹ 75/-" },
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
function CCTVSurveillanceDetails() {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("installation");
  const [selectedItems, setSelectedItems] = reactExports.useState([]);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [modalItems, setModalItems] = reactExports.useState([]);
  const toggleSelection = (serviceName) => {
    setSelectedItems(
      (prev) => prev.includes(serviceName) ? prev.filter((item) => item !== serviceName) : [...prev, serviceName]
    );
  };
  const handleWhatsApp = (customText) => {
    if (!user) {
      toast.error("Please login to proceed with booking.");
      navigate({ to: "/login" });
      return;
    }
    if (selectedItems.length > 0) {
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
    selectedItems.forEach((itemStr) => {
      let price = "0";
      let title = itemStr;
      const match = itemStr.match(/\[₹?\s*([\d,]+)/);
      if (match) {
        price = match[1].replace(/,/g, "");
        title = itemStr.replace(/\s*\[.*?\]\s*/, "").trim();
      } else if (itemStr.startsWith("Repair:")) {
        price = "450";
      }
      addToCart({
        id: `cctv-${title.replace(/\W+/g, "-").toLowerCase()}`,
        title: `CCTV: ${title}`,
        price,
        image: "/cctv_hero.png"
      });
    });
    toast.success("Items added to cart!");
    setSelectedItems([]);
  };
  const totalPrice = (() => {
    let sum = 0;
    let hasRepair = false;
    selectedItems.forEach((item) => {
      if (item.startsWith("Repair:")) {
        hasRepair = true;
      } else {
        const match = item.match(/\[₹?\s*([\d,]+)/);
        if (match) {
          sum += parseInt(match[1].replace(/,/g, ""), 10);
        }
      }
    });
    if (hasRepair) {
      sum += 450;
    }
    return sum;
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f0f4f8] min-h-screen pb-32 font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 md:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1e293b] rounded-[2rem] overflow-hidden mb-8 shadow-xl relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[280px] md:h-[400px] w-full overflow-hidden bg-black transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: activeTab === "buy" ? "/cctv_hero_buy.png" : "/cctv_hero.png",
              alt: "CCTV Expert",
              className: "w-full h-full object-cover object-[50%_15%] opacity-90 transition-opacity duration-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-full p-8 md:p-10 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-snug", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#f97316]", children: "Vendor99:" }),
            " Professional CCTV Solutions.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Certified Experts.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Clean, Minimalist Installations."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 md:p-12 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveTab("buy"),
              className: `flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === "buy" ? "bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105" : "bg-white/10 text-white hover:bg-white/20"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: `h-6 w-6 md:h-8 md:w-8 ${activeTab === "buy" ? "text-brand" : "text-white/70"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-center leading-tight", children: [
                  "Product",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Price List"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveTab("installation"),
              className: `flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === "installation" ? "bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105" : "bg-white/10 text-white hover:bg-white/20"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: `h-6 w-6 md:h-8 md:w-8 ${activeTab === "installation" ? "text-brand" : "text-white/70"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-center leading-tight", children: [
                  "Only",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Installation"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveTab("repair"),
              className: `flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl font-extrabold text-sm md:text-base transition-all ${activeTab === "repair" ? "bg-white text-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105" : "bg-white/10 text-white hover:bg-white/20"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: `h-6 w-6 md:h-8 md:w-8 ${activeTab === "repair" ? "text-brand" : "text-white/70"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-center leading-tight", children: [
                  "CCTV Repair",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "& Service"
                ] })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
          activeTab === "installation" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              className: "bg-white rounded-[2rem] border border-border shadow-md overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#2c3e50] p-6 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Book Only Installation" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 space-y-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "bg-[#e2e8f0] p-3 rounded-t-xl font-bold text-slate-700", children: "Installation Service" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `p-4 border rounded-xl flex items-center cursor-pointer transition-colors relative overflow-hidden ${selectedItems.includes("Installation: CAMERA [₹499/-]") ? "bg-brand/10 border-brand" : "border-slate-200 hover:bg-slate-50"}`,
                        onClick: () => toggleSelection("Installation: CAMERA [₹499/-]"),
                        children: [
                          selectedItems.includes("Installation: CAMERA [₹499/-]") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-brand" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 ml-2", children: "CAMERA [₹499/-]" })
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "bg-primary text-white p-3 rounded-t-xl font-bold", children: "NVR and DVR" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white", children: [
                      { id: "NVR/DVR: 4chl [₹1000/-]", label: "4chl- [₹1000/-]" },
                      { id: "NVR/DVR: 8chl [₹2000/-]", label: "8chl- [₹2000/-]" },
                      { id: "NVR/DVR: 16chl [₹4000/-]", label: "16chl- [₹4000/-]" }
                    ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `p-3 border rounded-xl flex items-center cursor-pointer transition-colors relative overflow-hidden ${selectedItems.includes(item.id) ? "bg-brand/10 border-brand" : "border-slate-200 hover:bg-slate-50"}`,
                        onClick: () => toggleSelection(item.id),
                        children: [
                          selectedItems.includes(item.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-brand" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 ml-2", children: item.label })
                        ]
                      },
                      idx
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "bg-[#334155] text-white p-3 rounded-t-xl font-bold", children: "Cabling" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white", children: [
                      { id: "Cabling: Open cabling [₹20/-]", label: "Open cabling [₹20/-]" },
                      { id: "Cabling: Pipe cabling [₹40/-]", label: "Pipe cabling [₹40/-]" },
                      { id: "Cabling: Internal cabling [₹40/-]", label: "Internal cabling [₹40/-]" }
                    ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `p-3 border rounded-xl flex items-center cursor-pointer transition-colors relative overflow-hidden ${selectedItems.includes(item.id) ? "bg-brand/10 border-brand" : "border-slate-200 hover:bg-slate-50"}`,
                        onClick: () => toggleSelection(item.id),
                        children: [
                          selectedItems.includes(item.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-brand" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 ml-2", children: item.label })
                        ]
                      },
                      idx
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "bg-[#1e293b] text-white p-3 rounded-t-xl font-bold", children: "Rack installation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-t-0 border-[#e2e8f0] rounded-b-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white", children: [
                      { id: "Rack: Small [₹300/-]", label: "Small [₹300/-]" },
                      { id: "Rack: Medium [₹700/-]", label: "Medium [₹700/-]" },
                      { id: "Rack: Big [₹3000/-]", label: "Big [₹3000/-]" }
                    ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `p-3 border rounded-xl flex items-center cursor-pointer transition-colors relative overflow-hidden ${selectedItems.includes(item.id) ? "bg-brand/10 border-brand" : "border-slate-200 hover:bg-slate-50"}`,
                        onClick: () => toggleSelection(item.id),
                        children: [
                          selectedItems.includes(item.id) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-brand" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 ml-2", children: item.label })
                        ]
                      },
                      idx
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleWhatsApp(), className: "bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-md", children: "Proceed to Booking" }) })
                ] })
              ]
            },
            "installation"
          ),
          activeTab === "repair" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              className: "bg-white rounded-[2rem] border border-border shadow-md overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#2c3e50] p-6 text-white flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "CCTV Repair and Service" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg bg-white/20 px-4 py-1.5 rounded-full", children: "₹ 450/-" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 space-y-4", children: [
                  repairServices.map((service, idx) => {
                    const repairString = `Repair: ${service.label}`;
                    const isSelected = selectedItems.includes(repairString);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => toggleSelection(repairString),
                        className: `flex justify-between items-center p-4 border rounded-xl cursor-pointer transition-colors relative overflow-hidden ${isSelected ? "border-brand bg-brand/10" : "border-slate-200 hover:bg-slate-50"}`,
                        children: [
                          isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-brand" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 ml-2", children: service.label }) })
                        ]
                      },
                      idx
                    );
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: "Visit & Service Charge" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-brand text-xl", children: "₹ 450/-" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-500 leading-relaxed", children: "Note: If any spare parts or multiple visits are required, they will be charged extra." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 flex flex-col sm:flex-row gap-4 justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleAddToCart(), className: "bg-slate-800 hover:bg-slate-700 w-full sm:w-auto text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md text-lg", children: "Add to Cart" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleWhatsApp(), className: "bg-primary hover:bg-primary/90 w-full sm:w-auto text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md text-lg", children: "Proceed to Booking" })
                  ] })
                ] })
              ]
            },
            "repair"
          ),
          activeTab === "buy" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f8fafc] rounded-[2rem] border border-border shadow-md overflow-hidden mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center border-b border-border bg-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "text-primary h-8 w-8" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black text-slate-800", children: "Vendor99 Security Systems" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-extrabold uppercase mt-4 mb-2", children: "PRICE LIST - SECURITY CAMERAS (New Prices Applied)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-medium", children: "Ensure you apply your newly calculated prices (shown in bold) based on the current base prices and margin. (Note: These final prices are for your website/catalog)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-8 space-y-12", children: [
                  wholesaleData.map((categoryData, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 last:mb-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl md:text-2xl font-black text-slate-800 mb-6 border-b-2 border-brand pb-2 inline-block", children: categoryData.category }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: categoryData.sections.map((section, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-800 p-4 border-b border-[#e2e8f0] flex items-center gap-4", children: [
                        section.image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: section.image, alt: section.title, className: "w-16 h-16 object-cover rounded-lg bg-white shadow-sm border border-slate-600" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-extrabold text-white text-lg", children: section.title })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[600px]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-slate-100 text-slate-700 text-sm border-b border-slate-200", children: section.headers.map((header, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-bold whitespace-nowrap", children: header }, k)) }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: section.items.map((item, k) => {
                          const itemString = `${item.col1} - ${item.col2} [${item.col3}]`;
                          const isSelected = selectedItems.includes(itemString);
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "tr",
                            {
                              onClick: () => toggleSelection(itemString),
                              className: `border-b cursor-pointer transition-colors ${isSelected ? "bg-brand/10 border-brand relative" : "border-slate-100 hover:bg-slate-50"}`,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 text-sm font-semibold text-slate-800 relative", children: [
                                  isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-brand" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-pre-line", children: item.col1 })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-sm font-semibold text-slate-600", children: item.col2 }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-sm font-extrabold text-brand whitespace-nowrap", children: item.col3 })
                              ]
                            },
                            k
                          );
                        }) })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-50 border-t border-slate-200 text-right flex flex-col sm:flex-row justify-end items-center gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-500 w-full sm:w-auto sm:mr-auto", children: "Customer Care / Inquiry: +91 91410 52539" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => handleAddToCart(),
                            className: "bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto",
                            children: "Add to Cart"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => handleWhatsApp(),
                            className: "bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto",
                            children: "Proceed to Booking"
                          }
                        )
                      ] })
                    ] }, j)) })
                  ] }, i)),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-extrabold text-slate-800 mb-2 uppercase text-sm", children: "Specialized Solutions Available On Request" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-slate-600 leading-relaxed max-w-lg", children: [
                        "Pricing for the following advanced technologies will be provided custom tailored to your exact project requirements. Please contact our support line:",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "• 4G Vandal-Proof Dome Cameras (Standalone cellular surveillance)",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "• 5MP IP Smart AI Cameras (Advanced Edge Analytics)",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "• Fisheye Panoramic Cameras (360° Wide Angle Coverage)",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "• 8MP IP Hisilicon Ultra HD Cameras",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "• LPR (License Plate Recognition) & Specialized Sony Sensor Series Cameras"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-extrabold text-slate-800 mb-2", children: "OUR COMMITMENT & SUPPORT" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-slate-600 leading-relaxed", children: [
                        "• Proper 1 Year Warranty • Technical Online Support",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "• Additional Warranty on Bulk Buying • Proper Firmware and Tool Guidance"
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            },
            "buy"
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-28 space-y-6", children: [
          selectedItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "bg-brand text-white rounded-[2rem] p-6 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-extrabold text-lg mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-5 w-5" }),
              " Your Selection (",
              selectedItems.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-60 overflow-y-auto pr-2 space-y-2 mb-4 custom-scrollbar", children: selectedItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm bg-white/10 rounded-lg p-2.5 flex justify-between items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleSelection(item), className: "text-white/60 hover:text-white shrink-0", children: "×" })
            ] }, i)) }),
            totalPrice > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-xl p-4 mb-4 flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white/90", children: "Today's Cost" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-xl", children: [
                "₹ ",
                totalPrice.toLocaleString("en-IN"),
                "/-"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleAddToCart(), className: "w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 transition-colors shadow-md", children: "Add to Cart" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleWhatsApp(), className: "w-full bg-white text-brand font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors shadow-md", children: "Proceed to Booking" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-[2rem] border border-border shadow-md p-6 lg:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
            activeTab === "buy" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "text-slate-800 h-5 w-5 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-700", children: "Proper 1 Year Warranty" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "text-slate-800 h-5 w-5 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-700", children: "Additional Warranty on Bulk Buying" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "text-slate-800 h-5 w-5 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-700", children: "Technical Online Support" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "text-slate-800 h-5 w-5 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-700", children: "Proper Firmware and Tool Guidance" })
            ] })
          ] }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 bg-white rounded-2xl shadow-sm border border-border p-6 overflow-hidden relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest shadow-sm hover:shadow-md hover:border-slate-300 transition-all inline-flex items-center gap-3 cursor-default", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-brand" })
          ] }),
          "In Proud Partner's With"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full overflow-hidden relative group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-max animate-marquee-reverse whitespace-nowrap group-hover:[animation-play-state:paused] transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-24 md:gap-32 px-12 md:px-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/hikvision-v2.png", alt: "HIKVISION", className: "w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/cpplus-v2.png", alt: "CP PLUS", className: "w-full h-auto object-contain scale-[1.35] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.45]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/dahua-v2.png", alt: "dahua", className: "w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/secureye-v2.png", alt: "SECUREYE", className: "w-full h-auto object-contain scale-[1.1] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.2]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32 md:w-48 flex flex-col items-center justify-center mix-blend-multiply", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/homewell.png", alt: "HomeWell", className: "w-[50%] h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-slate-800 mt-1 uppercase tracking-wide", children: "HomeWell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32 md:w-48 flex flex-col items-center justify-center mix-blend-multiply", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/reboot.png", alt: "REBOOT", className: "w-[50%] h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-slate-800 mt-1 uppercase tracking-wide", children: "REBOOT" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-24 md:gap-32 px-12 md:px-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/hikvision-v2.png", alt: "HIKVISION", className: "w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/cpplus-v2.png", alt: "CP PLUS", className: "w-full h-auto object-contain scale-[1.35] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.45]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/dahua-v2.png", alt: "dahua", className: "w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/secureye-v2.png", alt: "SECUREYE", className: "w-full h-auto object-contain scale-[1.1] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.2]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32 md:w-48 flex flex-col items-center justify-center mix-blend-multiply", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/homewell.png", alt: "HomeWell", className: "w-[50%] h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-slate-800 mt-1 uppercase tracking-wide", children: "HomeWell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32 md:w-48 flex flex-col items-center justify-center mix-blend-multiply", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/reboot.png", alt: "REBOOT", className: "w-[50%] h-auto object-contain transition-all duration-300 hover:animate-pulse hover:-translate-y-2 hover:scale-[1.1]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-slate-800 mt-1 uppercase tracking-wide", children: "REBOOT" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-24 md:gap-32 px-12 md:px-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/hikvision-v2.png", alt: "HIKVISION", className: "w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/cpplus-v2.png", alt: "CP PLUS", className: "w-full h-auto object-contain scale-[1.35] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.45]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/dahua-v2.png", alt: "dahua", className: "w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 md:w-48 flex items-center justify-center mix-blend-multiply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/secureye-v2.png", alt: "SECUREYE", className: "w-full h-auto object-contain scale-[1.1] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.2]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32 md:w-48 flex flex-col items-center justify-center mix-blend-multiply", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/homewell.png", alt: "HomeWell", className: "w-full h-auto object-contain scale-[1.0] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.1]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-slate-800 mt-2 uppercase tracking-wide", children: "HomeWell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-32 md:w-48 flex flex-col items-center justify-center mix-blend-multiply", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logos/reboot.png", alt: "REBOOT", className: "w-full h-auto object-contain scale-[1.0] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.1]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-slate-800 mt-2 uppercase tracking-wide", children: "REBOOT" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingModal,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false),
        serviceName: "CCTV & Surveillance",
        selectedItems: modalItems
      }
    )
  ] });
}
function Home() {
  const {
    location
  } = useLocation();
  const [services, setServices] = reactExports.useState([]);
  const initialLoadRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    if ("Notification" in window && Notification.permission !== "denied") {
      Notification.requestPermission();
    }
    const unsubscribe = onSnapshot(collection(db, "services"), (snapshot) => {
      const fetched = [];
      snapshot.forEach((doc) => fetched.push({
        id: doc.id,
        ...doc.data()
      }));
      fetched.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      if (!initialLoadRef.current) {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            if (Notification.permission === "granted") {
              new Notification("New Service Available!", {
                body: change.doc.data().title
              });
            }
          }
        });
      } else {
        initialLoadRef.current = false;
      }
      setServices(fetched);
    });
    return () => unsubscribe();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-background pt-20 pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-[100px] opacity-70 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-[100px] opacity-60 animate-pulse", style: {
        animationDelay: "2s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 50
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        ease: "easeOut"
      }, className: "text-center max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          scale: 0.9,
          opacity: 0
        }, animate: {
          scale: 1,
          opacity: 1
        }, transition: {
          delay: 0.2
        }, className: "inline-flex items-center gap-2 rounded-full border border-border/50 bg-white/50 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-foreground shadow-sm mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
          " Premium Services in ",
          location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl font-extrabold tracking-tight sm:text-7xl text-foreground", children: [
          "Vendor99 – ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "India's CCTV Dealer Hub" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium", children: "Connect with verified CCTV professionals near you for installation, repair, AMC maintenance, and security solutions at competitive prices." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.4
        }, className: "mt-10 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", className: "bg-brand hover:bg-brand-hover text-white font-bold py-3 px-6 rounded-full shadow-md transition-all hover:-translate-y-1 block", children: "Get Free Quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dealer", className: "bg-white border-2 border-slate-200 text-slate-800 hover:border-brand hover:text-brand font-bold py-3 px-6 rounded-full shadow-sm transition-all hover:-translate-y-1 block", children: "Find Nearest Dealer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", className: "bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all hover:-translate-y-1 block", children: "Book Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", className: "bg-amber-100 text-amber-800 border-2 border-amber-200 hover:bg-amber-200 font-bold py-3 px-6 rounded-full shadow-sm transition-all hover:-translate-y-1 block", children: "Dealer Registration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dealer-portal", className: "bg-emerald-100 text-emerald-800 border-2 border-emerald-200 hover:bg-emerald-200 font-bold py-3 px-6 rounded-full shadow-sm transition-all hover:-translate-y-1 block", children: "Dealer Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/become-partner", className: "bg-purple-100 text-purple-800 border-2 border-purple-200 hover:bg-purple-200 font-bold py-3 px-6 rounded-full shadow-sm transition-all hover:-translate-y-1 block", children: "Become a Partner" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.6
        }, className: "mt-16 flex justify-center items-center gap-8 text-sm font-semibold text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-success" }),
            " Verified Experts"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-warning" }),
            " 4.9/5 Average Rating"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary" }),
            " 24/7 Support"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "bg-white py-8 border-b border-border/50 shadow-sm relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: ["Buy with Installation", "Only Installation", "CCTV Repair & Service", "AMC Maintenance", "Upgrade Existing CCTV", "Video Door Phone", "Biometric Attendance Systems"].map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.9
    }, animate: {
      opacity: 1,
      scale: 1
    }, transition: {
      delay: 0.6 + idx * 0.1
    }, className: "bg-slate-50 border border-slate-200 rounded-full px-5 py-2 text-sm font-bold text-slate-700 flex items-center gap-2 shadow-sm hover:border-brand hover:text-brand transition-colors cursor-default", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-brand" }),
      " ",
      feature
    ] }, idx)) }) }) }),
    services.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-slate-50 py-16 border-b border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl", children: "Latest Services & Offers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-slate-600 max-w-2xl mx-auto font-medium", children: "Discover our newest additions, professional offerings, and exclusive updates from Vendor99." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "bg-white rounded-3xl border border-border shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col", children: [
        service.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.imageUrl, alt: service.title, className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 w-full bg-gradient-to-br from-brand/10 to-brand/5 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-12 w-12 text-brand/40" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-brand bg-brand/10 px-3 py-1.5 rounded-full uppercase tracking-wider w-fit mb-4", children: service.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-slate-800 mb-3 line-clamp-2", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600 line-clamp-3 mb-6 flex-1 leading-relaxed font-medium", children: service.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/book", className: "font-bold text-brand hover:text-brand-dark flex items-center gap-2 group mt-auto", children: [
            "Book Service ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
          ] })
        ] })
      ] }, service.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCTVSurveillanceDetails, {}) })
  ] });
}
export {
  Home as component
};
