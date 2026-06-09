import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-DbkfJJH4.mjs";
import { c as useLocation } from "./router-1gUiNko7.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { k as Sparkles, l as ShieldCheck, m as Star, n as Clock, i as ArrowRight, o as CirclePlay } from "../_libs/lucide-react.mjs";
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
}, {
  id: "renovation-interiors",
  title: "Renovation & Interiors",
  desc: "Premium Interiors & Painting",
  rating: 4.9,
  reviews: "2.1M",
  img: "/services/home-interior.png",
  hash: "#renovation-&-interiors"
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
const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};
function Home() {
  const {
    location
  } = useLocation();
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
          "Modern tech services, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "delivered perfectly." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium", children: "Book verified experts for Digital Marketing, App Development, and Smart Home solutions. Enterprise standards, upfront pricing." }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "flex items-end justify-between mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-extrabold tracking-tight", children: "Explore Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Find the perfect professional for your needs." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-50px"
      }, className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, params: c.params, className: "group flex flex-col items-center justify-center p-8 rounded-3xl border border-border/50 bg-background hover:bg-white hover:border-primary/20 shadow-sm hover:shadow-premium transition-all duration-300 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
          scale: 1.1,
          rotate: 5
        }, className: "h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center text-3xl mb-6 group-hover:bg-primary/10 transition-colors", children: c.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-center leading-tight text-foreground", children: c.name })
      ] }) }, c.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-32 border-y border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-extrabold tracking-tight", children: "Premium Experiences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xl text-muted-foreground font-medium", children: "Curated services that our clients love." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10", children: mostBooked.slice(0, 3).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `/services${s.hash}`, className: "group block rounded-[2rem] overflow-hidden bg-white border border-border/50 shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2 h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-warning text-warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: s.rating })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium mb-8 flex-1", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: "Explore details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" }) })
          ] })
        ] })
      ] }) }, s.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -50
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold tracking-tight leading-tight", children: [
          "Designed for modern ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "businesses & homes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xl text-muted-foreground leading-relaxed", children: "We've rebuilt the service experience from the ground up to provide enterprise-grade reliability, upfront pricing, and seamless booking." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 gap-8", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-6 w-6 text-primary" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground text-sm leading-relaxed", children: b.desc })
          ] })
        ] }, b.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, className: "relative rounded-[3rem] overflow-hidden shadow-premium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/services/home-automation.png", alt: "Premium Service", className: "w-full h-[600px] object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-10 right-10 glass-dark rounded-3xl p-6 border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-8 w-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-lg", children: "See how it works" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80", children: "Watch our 2-minute product tour" })
          ] })
        ] }) })
      ] })
    ] }) }) })
  ] });
}
export {
  Home as component
};
