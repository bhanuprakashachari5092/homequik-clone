import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-B9e5bypj.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/firebase__storage.mjs";
import "../_libs/sonner.mjs";
import "../_libs/jspdf-autotable.mjs";
import { A as ArrowLeft, B as Building2, C as CircleCheck, r as UserPlus } from "../_libs/lucide-react.mjs";
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
import "./router-vjEfc7KF.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/lottiefiles__dotlottie-react.mjs";
import "../_libs/lottiefiles__dotlottie-web.mjs";
import "../_libs/firebase__component.mjs";
import "../_libs/firebase__util.mjs";
import "../_libs/idb.mjs";
import "../_libs/firebase__installations.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function BecomePartnerPage() {
  const [businessName, setBusinessName] = reactExports.useState("");
  const [contactPerson, setContactPerson] = reactExports.useState("");
  const [phoneNumber, setPhoneNumber] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("");
  const [expertise, setExpertise] = reactExports.useState("System Integrator");
  const [experience, setExperience] = reactExports.useState("0-2 Years");
  const handleSubmit = (e) => {
    e.preventDefault();
    const WHATSAPP_NUMBER = "919141052539";
    const text = `*New Partner Application*

*Business Name:* ${businessName}
*Contact Person:* ${contactPerson}
*Phone:* ${phoneNumber}
*City/Pincode:* ${city}
*Expertise:* ${expertise}
*Experience:* ${experience}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#f0f4f8] min-h-screen py-10 font-sans", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to Home"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight", children: "Grow Your Business With Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-slate-600 max-w-2xl mx-auto", children: "Join India's largest network of tech professionals. Get verified leads, manage bookings, and increase your revenue." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-sm border border-border/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-8 w-8 text-brand" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-slate-800 mb-3", children: "Why Partner with Vendor99?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mb-6 leading-relaxed", children: "We bring customers directly to you. No marketing spend required. Focus on what you do best—delivering quality service." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 block", children: "Wholesale Equipment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500", children: "Access our inventory at exclusive B2B prices." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800 block", children: "Brand Trust" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500", children: "Leverage the Vendor99 brand for higher conversion rates." })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-xl border border-slate-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-slate-800", children: "Partner Application Form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mt-1", children: "Fill out the form below and our team will contact you. No registration fee required." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Business Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: businessName, onChange: (e) => setBusinessName(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all", placeholder: "TechVision Security" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Contact Person" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: contactPerson, onChange: (e) => setContactPerson(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all", placeholder: "John Doe" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all", placeholder: "+91 98765 43210" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "City / Pincode" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: city, onChange: (e) => setCity(e.target.value), required: true, className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all", placeholder: "500081" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Primary Expertise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: expertise, onChange: (e) => setExpertise(e.target.value), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all appearance-none font-medium text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "System Integrator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Freelance Technician" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Distributor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other Services" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Years of Experience" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: experience, onChange: (e) => setExperience(e.target.value), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all appearance-none font-medium text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "0-2 Years" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "3-5 Years" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "5-10 Years" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "10+ Years" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md mt-4", children: [
            "Send via WhatsApp ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-5 w-5" })
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  BecomePartnerPage as component
};
