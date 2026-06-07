import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useLocation$1, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BUJuJ5ob.mjs";
import { u as useCart, c as useLocation, s as servicesData } from "./router-DsDLhHvP.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import { r as ChevronRight, s as ArrowLeft, o as Star } from "../_libs/lucide-react.mjs";
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-pointer hover:text-brand hover:underline", onClick: () => {
          window.history.pushState({}, "", "/services");
          setActiveGroup(null);
        }, children: "Home / Services" }),
        activeGroup && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
          "  / ",
          activeGroup.name
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-3xl font-bold md:text-4xl", children: activeGroup ? activeGroup.name : `All service categories in ${location}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-muted-foreground", children: activeGroup ? "Select a service to view details and available time slots." : "Pick a category to see available services and upfront pricing." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-12", children: !activeGroup ? (
      // Show Categories as Flash Cards
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: servicesData.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => {
        window.history.pushState({}, "", `/services#${g.name.toLowerCase().replace(/\s+/g, "-")}`);
        setActiveGroup(g);
      }, className: "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-brand/40 transition-all duration-300 ease-out flex flex-col cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.items[0].image, alt: g.name, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 relative z-20 bg-card flex-1 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold", children: g.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground line-clamp-2", children: [
              g.items.length,
              " professional services available"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between border-t border-border/50 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Custom Quotes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-brand flex items-center", children: [
              "View Services ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 h-3 w-3" })
            ] })
          ] })
        ] })
      ] }, g.name)) })
    ) : (
      // Show Services for Active Category
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          window.history.pushState({}, "", "/services");
          setActiveGroup(null);
        }, className: "inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-2 bg-secondary/50 px-4 py-2 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
          " Back to Categories"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: activeGroup.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-hover transition flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$serviceId", params: {
            serviceId: item.id
          }, className: "block group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-secondary w-full relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(item.Icon, { className: "h-4 w-4 text-brand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold group-hover:text-brand transition-colors", children: item.title })
              ] }),
              item.details && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: item.details }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-xs text-muted-foreground font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-brand text-brand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: item.rating }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Top Rated" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between border-t border-border/50 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: item.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.preventDefault();
              handleAddToCart(item);
            }, className: "rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark transition-colors cursor-pointer z-10 relative", children: "Add" })
          ] }) })
        ] }, item.id)) })
      ] })
    ) })
  ] });
}
export {
  ServicesPage as component
};
