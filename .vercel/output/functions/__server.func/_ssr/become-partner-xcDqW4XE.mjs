import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-D5EUMIWM.mjs";
import { L as Loader, d as db } from "./router-B2jCLxPR.mjs";
import { b as setDoc, d as doc } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__storage.mjs";
import "../_libs/sonner.mjs";
import { a as ShieldCheck, Z as Zap, m as Crown, A as ArrowLeft, B as Building2, n as ChevronRight, C as CircleCheck, o as CreditCard, p as Check } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
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
const PLANS = [{
  id: "basic",
  name: "Basic Dealer",
  price: 999,
  icon: ShieldCheck,
  color: "text-blue-500",
  bg: "bg-blue-50",
  border: "border-blue-100",
  popular: false,
  features: ["Dealer Profile", "Business Listing", "Contact Details Display", "Category Listing"]
}, {
  id: "growth",
  name: "Growth Dealer",
  price: 2999,
  icon: Zap,
  color: "text-brand",
  bg: "bg-brand/10",
  border: "border-brand/20",
  popular: true,
  features: ["Everything in Basic", "Digital Marketing", "Social Media Marketing", "Priority Listing"]
}, {
  id: "premium",
  name: "Premium Dealer",
  price: 4999,
  icon: Crown,
  color: "text-amber-500",
  bg: "bg-amber-50",
  border: "border-amber-200",
  popular: false,
  features: ["Everything in Growth", "Lead Generation", "Featured Placement", "Homepage Recommendation", "Priority Support"]
}];
function BecomePartnerPage() {
  const router = useRouter();
  const [step, setStep] = reactExports.useState(1);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [formData, setFormData] = reactExports.useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    city: "",
    category: "CCTV & Security Solutions",
    experience: "0–2 Years"
  });
  const [selectedPlanId, setSelectedPlanId] = reactExports.useState("growth");
  const [transactionId, setTransactionId] = reactExports.useState("");
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const selectedPlan = PLANS.find((p) => p.id === selectedPlanId);
  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const handlePayment = async () => {
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const mockOrderId = "ORDER_" + Math.random().toString(36).substring(7).toUpperCase();
      const mockPaymentId = "PAY_" + Math.random().toString(36).substring(7).toUpperCase();
      const dealerId = "DLR-" + Math.floor(1e3 + Math.random() * 9e3);
      await setDoc(doc(db, "dealers", dealerId), {
        id: dealerId,
        ...formData,
        plan: selectedPlan?.name,
        amount: selectedPlan?.price,
        orderId: mockOrderId,
        paymentId: mockPaymentId,
        transactionId: mockPaymentId,
        paymentDate: (/* @__PURE__ */ new Date()).toISOString(),
        status: "Active"
      });
      setTransactionId(mockPaymentId);
      setStep(5);
    } catch (err) {
      setError(err.message || "Payment verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f0f4f8] min-h-screen py-10 font-sans relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight", children: "Join Vendor99 Dealer Network" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-slate-600 max-w-2xl mx-auto", children: "Get verified leads, premium listings, and priority support." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:gap-4 text-sm font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-4 py-2 rounded-full border ${step >= 1 ? "bg-brand text-white border-brand" : "bg-white text-slate-400 border-slate-200"}`, children: "1. Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-slate-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-4 py-2 rounded-full border ${step >= 2 ? "bg-brand text-white border-brand" : "bg-white text-slate-400 border-slate-200"}`, children: "2. Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-slate-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-4 py-2 rounded-full border ${step >= 3 ? "bg-brand text-white border-brand" : "bg-white text-slate-400 border-slate-200"}`, children: "3. Checkout" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -20
        }, className: "max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8 border-b border-slate-100 pb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand/10 p-4 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-8 w-8 text-brand" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-slate-800", children: "Business Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium", children: "Tell us about your business" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleNextStep, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Business Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: formData.businessName, onChange: (e) => setFormData({
                  ...formData,
                  businessName: e.target.value
                }), className: "w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all", placeholder: "Enter business name" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Owner Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: formData.ownerName, onChange: (e) => setFormData({
                  ...formData,
                  ownerName: e.target.value
                }), className: "w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all", placeholder: "Enter owner name" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Email Address *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: formData.email, onChange: (e) => setFormData({
                  ...formData,
                  email: e.target.value
                }), className: "w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all", placeholder: "you@company.com" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Phone Number *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", value: formData.phone, onChange: (e) => setFormData({
                  ...formData,
                  phone: e.target.value
                }), className: "w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all", placeholder: "+91 00000 00000" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "City / Location *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: formData.city, onChange: (e) => setFormData({
                ...formData,
                city: e.target.value
              }), className: "w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all", placeholder: "Enter city" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Business Category *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.category, onChange: (e) => setFormData({
                  ...formData,
                  category: e.target.value
                }), className: "w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "CCTV & Security Solutions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Home Construction" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Interior Design" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Experience *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.experience, onChange: (e) => setFormData({
                  ...formData,
                  experience: e.target.value
                }), className: "w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "0–2 Years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "2–5 Years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "5–10 Years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "10+ Years" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "bg-brand text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 hover:bg-brand-dark transition-all shadow-md", children: [
              "Continue to Plans ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
            ] }) })
          ] })
        ] }, "step1"),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -20
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: PLANS.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedPlanId(plan.id), className: `relative bg-white rounded-3xl p-8 border-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${selectedPlanId === plan.id ? `border-brand shadow-xl ring-4 ring-brand/10` : `border-slate-100 shadow-sm hover:shadow-lg`}`, children: [
            plan.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm", children: "Most Popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(plan.icon, { className: `h-7 w-7 ${plan.color}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-slate-800", children: plan.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 mb-6 flex items-baseline gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl font-extrabold text-slate-900", children: [
                "₹",
                plan.price
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium", children: "/year" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 mb-8", children: plan.features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600 font-medium", children: feature })
            ] }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full py-3.5 rounded-xl text-center font-bold transition-all ${selectedPlanId === plan.id ? "bg-brand text-white shadow-md" : "bg-slate-50 text-slate-700 hover:bg-slate-100"}`, children: [
              "Choose ",
              plan.name.split(" ")[0]
            ] })
          ] }, plan.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mt-10 flex justify-between items-center bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep(1), className: "text-slate-500 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors", children: "Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStep(3), className: "bg-slate-900 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-md flex items-center gap-2", children: [
              "Review Order ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
            ] })
          ] })
        ] }, "step2"),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -20
        }, className: "max-w-2xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8 border-b border-slate-100 pb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-900 p-4 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-8 w-8 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-slate-800", children: "Order Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium", children: "Review your details before payment" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-slate-200 pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium", children: "Business Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: formData.businessName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-slate-200 pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium", children: "Owner Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: formData.ownerName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-slate-200 pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: formData.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-medium", children: "Location" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: formData.city })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand/5 p-6 rounded-2xl border border-brand/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 text-lg", children: "Selected Plan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-brand text-white text-xs font-bold px-3 py-1 rounded-full", children: selectedPlan?.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600", children: "Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800", children: [
                    "₹",
                    selectedPlan?.price
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600", children: "GST (0%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: "₹0" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-brand/10 pt-3 mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 text-lg", children: "Total Payable" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-brand text-2xl", children: [
                    "₹",
                    selectedPlan?.price
                  ] })
                ] })
              ] })
            ] })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 p-4 bg-red-50 text-red-600 rounded-xl font-bold text-sm border border-red-100", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loading, onClick: () => setStep(2), className: "text-slate-500 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors disabled:opacity-50", children: "Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loading, onClick: handlePayment, className: "bg-brand text-white font-bold px-8 py-4 rounded-2xl hover:bg-brand-dark transition-all shadow-md flex items-center gap-2 disabled:opacity-70", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: "xs", text: "Processing..." }) : "Proceed to Payment" })
          ] })
        ] }, "step3"),
        step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, className: "max-w-md mx-auto bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 text-center relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-4 border-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10 text-emerald-600", strokeWidth: 3 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold text-slate-800 mb-2", children: "Registration Successful" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium mb-8", children: "Welcome to Vendor99 Dealer Network. Your Dealer Account has been Activated." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 rounded-2xl p-5 mb-8 text-left space-y-3 border border-slate-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 text-sm font-medium", children: "Plan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 text-sm", children: selectedPlan?.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 text-sm font-medium", children: "Amount Paid" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800 text-sm", children: [
                  "₹",
                  selectedPlan?.price
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 text-sm font-medium", children: "Transaction ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-slate-800 text-sm bg-white px-2 py-0.5 rounded border border-slate-200", children: transactionId })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => router.navigate({
                to: "/dealer-portal"
              }), className: "w-full bg-brand text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-brand-dark transition-all", children: "Go To Dashboard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => router.navigate({
                to: "/"
              }), className: "w-full bg-white text-slate-600 border border-slate-200 font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-all", children: "View Homepage" })
            ] })
          ] })
        ] }, "step5")
      ] })
    ] })
  ] }) });
}
export {
  BecomePartnerPage as component
};
