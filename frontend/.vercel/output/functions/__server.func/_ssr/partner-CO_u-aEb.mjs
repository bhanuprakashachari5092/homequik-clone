import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-DOqb-WVS.mjs";
import { u as useLocation, d as db } from "./router-CCV1XvkF.mjs";
import { b as setDoc, d as doc } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__storage.mjs";
import "../_libs/sonner.mjs";
import "../_libs/jspdf-autotable.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as Sparkles, C as CircleCheck, B as Building2, b as Briefcase, U as User, M as Mail, P as Phone, c as MapPin, d as ChevronRight, e as Check, f as ShieldCheck, g as CreditCard, h as CircleAlert } from "../_libs/lucide-react.mjs";
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
  id: "starter",
  name: "Starter Plan",
  price: 4999,
  description: "Get started with high-quality verified leads.",
  features: ["25 Verified Leads", "Dealer Profile", "Business Listing", "Category Listing"],
  color: "bg-slate-100 border-slate-200 text-slate-800",
  buttonColor: "bg-slate-800 hover:bg-slate-900 text-white"
}, {
  id: "growth",
  name: "Growth Plan",
  price: 7500,
  description: "Accelerate your business with double the leads.",
  features: ["50 Verified Leads", "Digital Marketing", "Social Media Marketing", "Priority Listing"],
  isPopular: true,
  color: "bg-brand/5 border-brand/20 text-slate-900",
  buttonColor: "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/30"
}, {
  id: "premium",
  name: "Premium Plan",
  price: 15e3,
  description: "Exclusive district-wise leads for maximum impact.",
  features: ["150 Exclusive Leads", "District-wise Exclusivity", "Featured Placement", "Homepage Recommendation", "Priority Support"],
  color: "bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 text-white",
  buttonColor: "bg-white hover:bg-slate-100 text-slate-900 shadow-xl",
  textColor: "text-slate-300",
  checkColor: "text-emerald-400"
}];
function PartnerPage() {
  const {
    location,
    isLocating,
    fetchDynamicLocation
  } = useLocation();
  const [step, setStep] = reactExports.useState(1);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    city: "",
    category: "CCTV & Security Solutions",
    experience: "0–2 Years"
  });
  const [selectedPlan, setSelectedPlan] = reactExports.useState(null);
  const [transactionDetails, setTransactionDetails] = reactExports.useState(null);
  const [showMockPayment, setShowMockPayment] = reactExports.useState(false);
  const [mockPaymentStatus, setMockPaymentStatus] = reactExports.useState("idle");
  reactExports.useEffect(() => {
    if (location && location !== "Detecting...") {
      setFormData((prev) => ({
        ...prev,
        city: location
      }));
    }
  }, [location]);
  const handleInputChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleNextStep = () => {
    if (step === 1) {
      if (formData.businessName && formData.ownerName && formData.email && formData.phone && formData.city) {
        setStep(2);
      } else {
        alert("Please fill all required fields.");
      }
    } else if (step === 2) {
      if (selectedPlan) setStep(3);
    }
  };
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const initiatePayment = async () => {
    setIsSubmitting(true);
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      setIsSubmitting(false);
      return;
    }
    const options = {
      key: "rzp_live_T0FloreMRW0cEB",
      amount: selectedPlan.price * 100,
      // Amount in paise
      currency: "INR",
      name: "Vendor99",
      description: `Dealer Registration - ${selectedPlan.name}`,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Vendor99",
      handler: function(response) {
        handlePaymentSuccess("RZP_ORDER_SKIPPED", response.razorpay_payment_id);
      },
      prefill: {
        name: formData.ownerName,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: "#f97316"
        // Brand color
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function(response) {
      alert("Payment failed: " + response.error.description);
      setIsSubmitting(false);
    });
    paymentObject.open();
    setIsSubmitting(false);
  };
  const handleMockPaymentAction = async (status) => {
    setMockPaymentStatus("processing");
    await new Promise((res) => setTimeout(res, 2e3));
    if (status === "success") {
      setMockPaymentStatus("success");
      await new Promise((res) => setTimeout(res, 1e3));
      setShowMockPayment(false);
      handlePaymentSuccess(`ORDER_${Math.floor(Math.random() * 1e6)}`, `TXN_${Math.floor(Math.random() * 1e6)}`);
    } else {
      setMockPaymentStatus("failure");
      await new Promise((res) => setTimeout(res, 2e3));
      setMockPaymentStatus("idle");
      setShowMockPayment(false);
    }
  };
  const handlePaymentSuccess = async (orderId, txnId) => {
    setIsSubmitting(true);
    const newDealerId = `DLR-${Math.floor(Math.random() * 1e6)}`;
    const dealerData = {
      ...formData,
      plan: selectedPlan.name,
      amount: selectedPlan.price,
      orderId,
      transactionId: txnId,
      paymentId: `PAY_${Math.floor(Math.random() * 1e6)}`,
      // From Cashfree webhook
      paymentDate: (/* @__PURE__ */ new Date()).toISOString(),
      status: "Active"
    };
    try {
      try {
        await setDoc(doc(db, "dealers", newDealerId), dealerData);
        console.log("Saved dealer data to Firebase");
      } catch (dbErr) {
        console.error("Failed to save to Firebase:", dbErr);
        throw new Error("Failed to save to database. Check your Firestore rules.");
      }
      try {
        const emailWebhookUrl = "YOUR_WEBHOOK_URL_HERE";
        if (emailWebhookUrl !== "YOUR_WEBHOOK_URL_HERE") ;
      } catch (e) {
        console.error("Failed to send welcome email webhook", e);
      }
      setTransactionDetails({
        id: newDealerId,
        txnId,
        plan: selectedPlan.name,
        amount: selectedPlan.price
      });
      setStep(4);
    } catch (error) {
      console.error("Error finalizing onboarding:", error);
      alert("Registration failed: " + (error.message || "Please contact support."));
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f8fafc] min-h-screen py-12 font-sans relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          " Join Vendor99 Network"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Dealer Registration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-slate-600 max-w-2xl mx-auto", children: "Partner with Vendor99 to grow your business. Select a plan and start receiving premium leads today." })
      ] }),
      step < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-12 max-w-2xl mx-auto", children: [{
        num: 1,
        label: "Business Details"
      }, {
        num: 2,
        label: "Select Plan"
      }, {
        num: 3,
        label: "Payment"
      }].map((s, idx, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center w-full relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center relative z-10 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${step > s.num ? "bg-brand text-white shadow-md shadow-brand/30" : step === s.num ? "bg-white border-2 border-brand text-brand shadow-lg" : "bg-slate-200 text-slate-500"}`, children: step > s.num ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }) : s.num }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs md:text-sm font-bold mt-2 absolute -bottom-6 whitespace-nowrap ${step >= s.num ? "text-slate-800" : "text-slate-400"}`, children: s.label })
        ] }),
        idx < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-[50%] w-full h-[2px] -z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full transition-all duration-500 ${step > s.num ? "bg-brand" : "bg-slate-200"}`, style: {
          width: "100%"
        } }) })
      ] }, s.num)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, animate: {
          opacity: 1,
          x: 0
        }, exit: {
          opacity: 0,
          x: -20
        }, className: "bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8 pb-6 border-b border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand/10 p-3 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-6 w-6 text-brand" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Business Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Provide your primary contact and business details." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-bold text-slate-700 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 text-slate-400" }),
                " Business Name *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "businessName", value: formData.businessName, onChange: handleInputChange, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all", placeholder: "TechVision Security" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-bold text-slate-700 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-slate-400" }),
                " Owner Name *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "ownerName", value: formData.ownerName, onChange: handleInputChange, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all", placeholder: "John Doe" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-bold text-slate-700 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-slate-400" }),
                " Email Address *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleInputChange, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all", placeholder: "dealer@example.com" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-bold text-slate-700 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-slate-400" }),
                " Phone Number *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", name: "phone", value: formData.phone, onChange: handleInputChange, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all", placeholder: "+91 98765 43210" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-bold text-slate-700 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-slate-400" }),
                " City / Location *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "city", value: formData.city, onChange: handleInputChange, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all", placeholder: "Hyderabad" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => fetchDynamicLocation(false), disabled: isLocating, className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold bg-brand/10 text-brand px-3 py-1.5 rounded-lg hover:bg-brand hover:text-white transition-colors", children: isLocating ? "Detecting..." : "Detect" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Business Category *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "category", value: formData.category, onChange: handleInputChange, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all font-medium text-slate-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "CCTV & Security Solutions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Home Construction" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Interior Design" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Experience *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "experience", value: formData.experience, onChange: handleInputChange, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all font-medium text-slate-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "0–2 Years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "2–5 Years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "5–10 Years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "10+ Years" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleNextStep, className: "bg-brand hover:bg-brand-dark text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-brand/20 flex items-center gap-2 group", children: [
            "Continue to Plans ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5 group-hover:translate-x-1 transition-transform" })
          ] }) })
        ] }, "step1"),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, animate: {
          opacity: 1,
          x: 0
        }, exit: {
          opacity: 0,
          x: -20
        }, className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-slate-900", children: "Choose Your Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mt-2", children: "Select the best subscription tier for your business growth." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: PLANS.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedPlan(plan), className: `relative rounded-3xl p-8 border-2 transition-all cursor-pointer flex flex-col hover:-translate-y-2 hover:shadow-xl ${selectedPlan?.id === plan.id ? "border-brand ring-4 ring-brand/10 scale-[1.02]" : `${plan.color} ${plan.isPopular ? "shadow-lg border-brand/30" : "hover:border-slate-300"}`}`, children: [
            plan.isPopular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md", children: "Most Popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xl font-bold mb-2 ${plan.id === "premium" ? "text-white" : "text-slate-900"}`, children: plan.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${plan.textColor || "text-slate-500"} h-10`, children: plan.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl font-black", children: [
                "₹",
                plan.price
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-medium ${plan.textColor || "text-slate-500"}`, children: "/year" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 mb-8 flex-1", children: plan.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `h-5 w-5 shrink-0 ${plan.checkColor || "text-brand"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-medium ${plan.id === "premium" ? "text-slate-200" : "text-slate-700"}`, children: feature })
            ] }, idx)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `w-full py-3.5 rounded-xl font-bold transition-all ${selectedPlan?.id === plan.id ? "bg-brand text-white shadow-lg shadow-brand/30" : plan.buttonColor}`, children: selectedPlan?.id === plan.id ? "Selected" : `Choose ${plan.name.split(" ")[0]}` })
          ] }, plan.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep(1), className: "text-slate-500 hover:text-slate-800 font-bold px-6 py-3 transition-colors", children: "Back to Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleNextStep, disabled: !selectedPlan, className: "bg-brand hover:bg-brand-dark disabled:bg-slate-300 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-brand/20 flex items-center gap-2", children: [
              "Proceed to Summary ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
            ] })
          ] })
        ] }, "step2"),
        step === 3 && selectedPlan && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, animate: {
          opacity: 1,
          x: 0
        }, exit: {
          opacity: 0,
          x: -20
        }, className: "max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8 pb-6 border-b border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-100 p-3 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6 text-slate-700" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Order Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Review your details before payment." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 pb-4 border-b border-slate-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Business Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-slate-800", children: formData.businessName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Owner Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-slate-800", children: formData.ownerName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-slate-800", children: formData.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-1", children: "Location" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-slate-800", children: formData.city })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-brand bg-brand/10 px-3 py-1 rounded-full inline-block mb-1", children: selectedPlan.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "1 Year Subscription" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-black text-slate-900", children: [
                "₹",
                selectedPlan.price
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm text-slate-500 pt-2 border-t border-slate-200/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "GST (Included)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "₹0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-2 border-t border-slate-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800", children: "Total Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-brand", children: [
                "₹",
                selectedPlan.price
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep(2), className: "text-slate-500 hover:text-slate-800 font-bold px-4 py-3 transition-colors", children: "Back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: initiatePayment, disabled: isSubmitting, className: "bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2", children: [
              isSubmitting ? "Processing..." : "Proceed to Payment",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5" })
            ] })
          ] })
        ] }, "step3"),
        step === 4 && transactionDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, className: "max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border border-emerald-100 text-center relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-emerald-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 text-emerald-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-black text-slate-900 mb-2", children: "🎉 Registration Successful" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mb-8 font-medium", children: "Welcome to the Vendor99 Dealer Network. Your account is now Active." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6 border-b border-slate-200 pb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mb-2 uppercase tracking-widest font-bold", children: "Your Official Dealer ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-black text-brand tracking-widest bg-brand/10 inline-block px-6 py-3 rounded-2xl border border-brand/20 shadow-inner", children: transactionDetails.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-3", children: "An email has been sent to you with this ID." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 text-sm", children: "Plan Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: transactionDetails.plan })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 text-sm", children: "Amount Paid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800", children: [
                "₹",
                transactionDetails.amount
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-3 border-t border-slate-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 text-sm", children: "Transaction ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs font-bold text-slate-700 bg-slate-200 px-2 py-1 rounded", children: transactionDetails.txnId })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-6 rounded-xl transition-all", children: "View Profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dealer-portal", className: "bg-brand hover:bg-brand-dark text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md", children: "Go To Dashboard" })
          ] })
        ] }, "step4")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showMockPayment && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, className: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        scale: 0.95,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, exit: {
        scale: 0.95,
        opacity: 0
      }, className: "bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 p-6 text-white text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6 text-emerald-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg tracking-widest", children: "CASHFREE PAYMENTS" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm", children: "Mock Checkout Environment" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center", children: [
          mockPaymentStatus === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-slate-900 mb-2", children: [
              "₹",
              selectedPlan?.price
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500 mb-8", children: [
              "Pay securely for ",
              selectedPlan?.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleMockPaymentAction("success"), className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-colors", children: "Simulate Successful Payment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleMockPaymentAction("failure"), className: "w-full bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold py-3.5 rounded-xl transition-colors", children: "Simulate Payment Failure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowMockPayment(false), className: "w-full text-slate-400 hover:text-slate-600 font-bold py-3.5 transition-colors text-sm", children: "Cancel Checkout" })
            ] })
          ] }),
          mockPaymentStatus === "processing" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 border-4 border-slate-200 border-t-brand rounded-full animate-spin mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-600", children: "Processing Payment..." })
          ] }),
          mockPaymentStatus === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 text-emerald-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-16 w-16 mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xl", children: "Payment Successful!" })
          ] }),
          mockPaymentStatus === "failure" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 text-rose-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-16 w-16 mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xl", children: "Payment Failed" })
          ] })
        ] })
      ] }) }) })
    ] })
  ] }) });
}
export {
  PartnerPage as component
};
