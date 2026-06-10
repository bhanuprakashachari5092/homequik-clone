import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-D5EUMIWM.mjs";
import { u as useLocation, d as db } from "./router-B2jCLxPR.mjs";
import { a as addDoc, c as collection, s as serverTimestamp } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__storage.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowLeft, C as CircleCheck, a as ShieldCheck, B as Building2, Q as QrCode } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
function PartnerPage() {
  const {
    location,
    isLocating,
    fetchDynamicLocation
  } = useLocation();
  const [step, setStep] = reactExports.useState(1);
  const [agreed, setAgreed] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [autoVerifiedStatus, setAutoVerifiedStatus] = reactExports.useState(false);
  const [businessName, setBusinessName] = reactExports.useState("");
  const [contactPerson, setContactPerson] = reactExports.useState("");
  const [phoneNumber, setPhoneNumber] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("");
  const [expertise, setExpertise] = reactExports.useState("CCTV Dealer & Installer");
  const [experience, setExperience] = reactExports.useState("0-2 Years");
  reactExports.useEffect(() => {
    if (location && location !== "Detecting..." && !city) {
      setCity(location);
    }
  }, [location]);
  const handleNextStep = () => {
    if (step === 1 && agreed) setStep(2);
    else if (step === 2 && businessName && contactPerson && phoneNumber && email && password && confirmPassword && city) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      setStep(3);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!utrNumber && !screenshot) {
      alert("Please enter the UTR number or upload a payment screenshot.");
      return;
    }
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "dealers"), {
        name: businessName,
        contact: contactPerson,
        phone: phoneNumber,
        email,
        password,
        city,
        expertise,
        experience,
        status: "Pending",
        paymentStatus: "Pending Verification",
        agreedToRules: agreed,
        createdAt: serverTimestamp()
      });
      setStep(4);
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("Registration failed: " + (error.message || "Something went wrong. Please check your connection and try again."));
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#f0f4f8] min-h-screen py-10 font-sans", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to Home"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-extrabold text-slate-800 tracking-tight", children: "Dealer Registration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-lg text-slate-600", children: "Join the Vendor99 network in 3 easy steps." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-12", children: [1, 2, 3].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-10 w-10 rounded-full flex items-center justify-center font-bold ${step >= s ? "bg-brand text-white shadow-md shadow-brand/30" : "bg-slate-200 text-slate-500"}`, children: step > s ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }) : s }),
      s < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1 w-12 sm:w-24 mx-2 rounded-full ${step > s ? "bg-brand" : "bg-slate-200"}` })
    ] }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden", children: [
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand/10 p-3 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-8 w-8 text-brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Rules & Regulations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-200 p-6 rounded-2xl h-64 overflow-y-auto text-slate-700 space-y-4 text-sm leading-relaxed mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1. Code of Conduct:" }),
            " Dealers must maintain a professional attitude when interacting with customers assigned through Vendor99."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2. Pricing Policy:" }),
            " You agree not to overcharge customers. All wholesale equipment purchased via Vendor99 must be sold at the agreed-upon margin."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3. Registration Fee:" }),
            " A one-time non-refundable registration and verification fee of ₹1 is required to activate your account and background check."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4. Verification Process:" }),
            " Upon payment, our team will verify your UTR and business details within 24-48 hours. If rejected for compliance issues, the fee will not be refunded."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "5. Quality of Work:" }),
            " Continuous poor ratings from customers will result in permanent suspension from the Dealer Network."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "agree", checked: agreed, onChange: (e) => setAgreed(e.target.checked), className: "h-5 w-5 rounded text-brand focus:ring-brand border-slate-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "agree", className: "font-bold text-slate-700 cursor-pointer select-none", children: "I have read and agree to the Vendor99 Dealer Terms & Conditions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleNextStep, disabled: !agreed, className: "w-full bg-brand hover:bg-brand-dark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all", children: [
          "Proceed to Details ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5 rotate-180" })
        ] })
      ] }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-right-8 duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand/10 p-3 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-8 w-8 text-brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Business Details" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Business/Shop Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: businessName, onChange: (e) => setBusinessName(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "TechVision Security" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Contact Person *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: contactPerson, onChange: (e) => setContactPerson(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "Your Name" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Phone Number *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "+91 98765 43210" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Email Address *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "dealer@example.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Password *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "Create a password" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Confirm Password *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "Confirm your password" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "City / District *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: city, onChange: (e) => setCity(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "Hyderabad" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: async () => {
                if (location && location !== "Detecting...") {
                  setCity(location);
                } else {
                  await fetchDynamicLocation(false);
                }
              }, disabled: isLocating, className: "absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold bg-brand/10 text-brand px-3 py-1.5 rounded-lg hover:bg-brand hover:text-white transition-colors disabled:opacity-50", children: isLocating ? "Detecting..." : "Detect" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Primary Expertise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: expertise, onChange: (e) => setExpertise(e.target.value), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "CCTV Surveillance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smart Home Automation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Electrical Works" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Experience" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: experience, onChange: (e) => setExperience(e.target.value), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "0-2 Years" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "3-5 Years" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "5+ Years" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep(1), className: "flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-xl transition-all", children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleNextStep, disabled: !businessName || !contactPerson || !phoneNumber || !email || !password || !confirmPassword || !city, className: "flex-[2] bg-brand hover:bg-brand-dark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all", children: "Proceed to Payment" })
        ] })
      ] }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-in fade-in slide-in-from-right-8 duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand/10 p-3 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "h-8 w-8 text-brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Verification Payment" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center mb-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 p-6 rounded-2xl max-w-lg mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-slate-800 mb-2", children: "Registration Fee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black text-brand mb-2", children: "₹999" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600", children: "Secure one-time payment for lifetime dealer access." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex gap-4 pt-4 border-t border-slate-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setStep(2), className: "flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-xl transition-all", children: "Back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: isSubmitting, className: "flex-[2] bg-brand hover:bg-brand-dark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20", children: isSubmitting ? "Processing..." : "Pay ₹999 & Register" })
        ] })
      ] }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 animate-in zoom-in duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-6 shadow-xl shadow-emerald-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-emerald-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold text-slate-800 mb-4", children: autoVerifiedStatus ? "Payment Verified Successfully!" : "Successfully Registered!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-slate-600 max-w-md mx-auto mb-8", children: autoVerifiedStatus ? "Your payment screenshot was automatically verified! Your dealer account is now Active and listed on the Vendor99 network." : "We have received your details. Our team will verify the payment and activate your dealer account within 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dealer-portal", className: "inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md", children: "Go to Partner Portal" })
      ] })
    ] })
  ] }) }) });
}
export {
  PartnerPage as component
};
