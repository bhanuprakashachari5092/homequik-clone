import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BUJuJ5ob.mjs";
import { c as useLocation } from "./router-DsDLhHvP.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/sonner.mjs";
import { m as MapPin, n as Search, o as Star, p as ArrowRight, k as ShieldCheck, j as Clock, q as Sparkles } from "../_libs/lucide-react.mjs";
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
const categories = [{
  name: "CCTV & Surveillance",
  emoji: "📹",
  to: "/services/$serviceId",
  params: {
    serviceId: "cctv-surveillance"
  }
}, {
  name: "Biometric System",
  emoji: "👆",
  to: "/services/$serviceId",
  params: {
    serviceId: "biometric-system"
  }
}, {
  name: "Access Control System",
  emoji: "🚪",
  to: "/services/$serviceId",
  params: {
    serviceId: "access-control"
  }
}, {
  name: "UPS and Invertor",
  emoji: "🔋",
  to: "/services/$serviceId",
  params: {
    serviceId: "ups-inverter"
  }
}, {
  name: "Home Automation",
  emoji: "🏠",
  to: "/services/$serviceId",
  params: {
    serviceId: "home-automation"
  }
}, {
  name: "Smart Film & Glass (PDLC)",
  emoji: "🪟",
  to: "/services/$serviceId",
  params: {
    serviceId: "smart-film-glass"
  }
}, {
  name: "Electrical Work",
  emoji: "⚡",
  to: "/services/$serviceId",
  params: {
    serviceId: "electrical-work"
  }
}, {
  name: "Home Interior",
  emoji: "🛋️",
  to: "/services/$serviceId",
  params: {
    serviceId: "home-interior"
  }
}, {
  name: "Professional Painting",
  emoji: "🎨",
  to: "/services/$serviceId",
  params: {
    serviceId: "painting"
  }
}];
const mostBooked = [{
  id: "security-surveillance",
  title: "Security & Surveillance",
  desc: "CCTV, Biometric, Access Control",
  rating: 4.9,
  reviews: "15M+",
  img: "/services/access-control.png",
  hash: "#security-&-surveillance"
}, {
  id: "business-digital",
  title: "Business & Digital Services",
  desc: "Marketing, Web & App Development",
  rating: 4.9,
  reviews: "10M+",
  img: "/services/digital-marketing.png",
  hash: "#business-&-digital-services"
}, {
  id: "smart-home",
  title: "Smart Home & Automation",
  desc: "Smart Lights, Climate, PDLC Glass",
  rating: 4.8,
  reviews: "3M+",
  img: "/services/home-automation.png",
  hash: "#smart-home-&-automation"
}, {
  id: "maintenance-repairs",
  title: "Maintenance & Repairs",
  desc: "Electrical, UPS & Inverter",
  rating: 4.8,
  reviews: "6.7M",
  img: "/services/electrical-work.png",
  hash: "#maintenance-&-repairs"
}];
const benefits = [{
  icon: ShieldCheck,
  title: "Verified professionals",
  desc: "Background-checked, highly trained tech experts."
}, {
  icon: Star,
  title: "Upfront pricing",
  desc: "Transparent rates. No hidden fees or surprises."
}, {
  icon: Clock,
  title: "Dedicated support",
  desc: "Dedicated account managers for your projects."
}, {
  icon: Sparkles,
  title: "Enterprise Grade",
  desc: "Secure, scalable, and reliable tech solutions."
}];
function Home() {
  const {
    location
  } = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-to-br from-brand-soft via-background to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-brand" }),
          " Now serving ",
          location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl", children: [
          "Tech & Business services, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "on demand." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-base text-muted-foreground md:text-lg", children: "Expert professionals for IT, Marketing, Security, and App Development — delivered with enterprise standards." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-card p-3 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-xl bg-secondary px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search for 'Digital Marketing', 'Web Development', 'CCTV'...", className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark", children: "Search" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2 px-1", children: ["Digital Marketing", "Web Development", "Graphic Design", "CCTV"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground", children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-brand text-brand" }),
            " 4.8 avg rating"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "12M+ happy customers" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden md:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-6 -right-6 h-72 w-72 rounded-full bg-brand-soft blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid grid-cols-2 gap-4", children: categories.slice(0, 4).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, params: c.params, className: `rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-hover hover:-translate-y-1 transition ${i % 2 ? "mt-8" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: c.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold leading-tight", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-brand", children: "Book now →" })
        ] }, c.name)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "What are you looking for?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "hidden text-sm font-medium text-brand hover:underline md:inline-flex", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 inline h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, params: c.params, className: "rounded-xl border border-border bg-card p-5 text-left hover:border-brand hover:shadow-card transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: c.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold leading-snug", children: c.name })
      ] }, c.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "Most booked services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground", children: [
        "Loved by ",
        location
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: mostBooked.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `/services${s.hash}`, className: "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-brand/40 transition-all duration-300 ease-out flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 relative z-20 bg-card flex-1 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-brand text-brand" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: s.rating }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "(",
                s.reviews,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-base font-semibold", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground line-clamp-2", children: s.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between border-t border-border/50 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Custom Quotes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-brand flex items-center", children: [
              "View All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-3 w-3" })
            ] })
          ] })
        ] })
      ] }, s.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-dark hover:shadow-xl", children: [
        "More Services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "The HomeQuik promise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Why businesses trust us with their growth" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-brand-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-6 w-6 text-brand" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold", children: b.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.desc })
      ] }, b.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-8 p-10 md:grid-cols-2 md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold md:text-4xl", children: "Get the HomeQuik app" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-background/70", children: "Faster bookings, exclusive offers, live tracking and chat with your professional." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground hover:opacity-90", children: "↓ App Store" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground hover:opacity-90", children: "↓ Google Play" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative hidden h-64 md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid grid-cols-3 gap-3 opacity-90", children: categories.slice(0, 6).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/10 p-4 backdrop-blur-sm animate-float", style: {
        animationDelay: `${i * 0.3}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: c.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs", children: c.name.split(" ")[0] })
      ] }, c.name)) }) })
    ] }) }) })
  ] });
}
export {
  Home as component
};
