import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useLocation$1, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-CdWwcAj0.mjs";
import { u as useCart, c as useLocation, s as servicesData } from "./router-CJ2-GpdV.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as ArrowRight, s as ArrowLeft, q as Star } from "../_libs/lucide-react.mjs";
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
    y: 20
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
function ServicesPage() {
  const {
    addToCart
  } = useCart();
  const {
    location
  } = useLocation();
  const routeLocation = useLocation$1();
  const [activeGroup, setActiveGroup] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const currentHash = routeLocation.hash || window.location.hash.replace("#", "");
    if (currentHash) {
      const group = servicesData.find((g) => g.name.toLowerCase().replace(/\s+/g, "-") === currentHash);
      if (group) {
        setActiveGroup(group);
      }
    } else {
      setActiveGroup(null);
    }
  }, [routeLocation.hash]);
  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image
    });
    toast.success(`${item.title} added to cart!`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden premium-gradient border-b border-border/50 bg-background pt-16 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-soft blur-[80px] opacity-60 animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-brand uppercase tracking-wider flex items-center mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-pointer hover:underline", onClick: () => {
            window.history.pushState({}, "", "/services");
            setActiveGroup(null);
          }, children: "Services" }),
          activeGroup && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "  / ",
            activeGroup.name
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-extrabold md:text-5xl tracking-tight text-foreground", children: activeGroup ? activeGroup.name : `Premium Services in ${location}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground font-medium", children: activeGroup ? "Select a service to view details and available time slots." : "Pick a category to see available services and upfront pricing." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !activeGroup ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: "show", className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: servicesData.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, onClick: () => {
      window.history.pushState({}, "", `/services#${g.name.toLowerCase().replace(/\s+/g, "-")}`);
      setActiveGroup(g);
    }, className: "group relative overflow-hidden rounded-[2rem] border border-border/50 bg-white shadow-card hover:-translate-y-2 hover:shadow-premium hover:border-brand/40 transition-all duration-500 ease-out flex flex-col cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.items[0].image, alt: g.name, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 relative z-20 bg-white flex-1 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold tracking-tight", children: g.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground font-medium", children: [
            g.items.length,
            " premium services"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border/50 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-primary", children: "Custom Quotes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" }) })
        ] })
      ] })
    ] }, g.name)) }) }, "categories") : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      x: 20
    }, animate: {
      opacity: 1,
      x: 0
    }, exit: {
      opacity: 0,
      x: -20
    }, className: "space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        window.history.pushState({}, "", "/services");
        setActiveGroup(null);
      }, className: "inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors bg-secondary/50 hover:bg-secondary px-5 py-2.5 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Categories"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: "show", className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: activeGroup.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: itemVariants, className: "group overflow-hidden rounded-[2rem] border border-border/50 bg-white shadow-card hover:shadow-premium transition-all duration-300 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$serviceId", params: {
          serviceId: item.id
        }, className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-secondary w-full relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.Icon, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold group-hover:text-primary transition-colors", children: item.title })
            ] }),
            item.details && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-medium leading-relaxed", children: item.details }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-2 text-xs font-bold bg-muted/50 w-fit px-3 py-1.5 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-warning text-warning" }),
              item.rating,
              " · Top Rated"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 pt-0 mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border/50 pt-5 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-extrabold", children: item.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
            scale: 1.05
          }, whileTap: {
            scale: 0.95
          }, onClick: (e) => {
            e.preventDefault();
            handleAddToCart(item);
          }, className: "rounded-xl bg-gradient-premium px-6 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all z-10 relative", children: "Book Now" })
        ] }) })
      ] }, item.id)) })
    ] }, "services") }) })
  ] });
}
export {
  ServicesPage as component
};
