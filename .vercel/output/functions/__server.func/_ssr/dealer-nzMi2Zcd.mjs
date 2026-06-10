import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-D5EUMIWM.mjs";
import { d as db } from "./router-B2jCLxPR.mjs";
import { q as query, w as where, c as collection, o as onSnapshot } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__storage.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowLeft, f as MapPin, g as Search, h as Star } from "../_libs/lucide-react.mjs";
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
function DealerPage() {
  const [dealers, setDealers] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const q = query(collection(db, "dealers"), where("status", "==", "Active"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const activeDealers2 = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.paymentStatus === "Verified") {
          activeDealers2.push({
            id: doc.id,
            ...data
          });
        }
      });
      setDealers(activeDealers2);
    });
    return () => unsubscribe();
  }, []);
  const activeDealers = dealers;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#f0f4f8] min-h-screen py-10 font-sans", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-slate-500 hover:text-brand font-bold transition-colors mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to Home"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight", children: "Find Your Nearest Dealer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-slate-600 max-w-2xl mx-auto", children: "We have a network of 10,000+ verified installation partners across India. Enter your pincode or city to find experts near you." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-[2rem] shadow-lg border border-slate-100 p-4 md:p-8 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Enter Pincode or City Name...", className: "w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand font-medium text-lg" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-brand hover:bg-brand-hover text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5" }),
        " Search Dealers"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      activeDealers.map((dealer) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-all group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand/10 p-3 rounded-xl group-hover:bg-brand group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 text-brand group-hover:text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-xs font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-current" }),
            " 4.9"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl text-slate-800 mb-1", children: dealer.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 mb-4", children: "Authorized Hikvision & CP Plus Dealer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm text-slate-600 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "📍 ",
            dealer.city
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "📞 ",
            dealer.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "👤 Contact: ",
            dealer.contact
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold py-2.5 rounded-xl transition-colors", children: "Contact Dealer" })
      ] }, dealer.id)),
      activeDealers.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full py-12 text-center text-slate-500 font-medium", children: "No active dealers found. Please check back later." })
    ] })
  ] }) }) });
}
export {
  DealerPage as component
};
