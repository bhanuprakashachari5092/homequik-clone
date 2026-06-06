import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-Ctj3i0fx.mjs";
import { u as useCart, a as useLocation, s as servicesData } from "./router-BaTSiW1U.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import { c as ChevronRight, d as Star } from "../_libs/lucide-react.mjs";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Home / Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-2 text-3xl font-bold md:text-4xl", children: [
        "All services in ",
        location
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-muted-foreground", children: "Pick a category to see available time slots and upfront prices." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[240px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-muted-foreground", children: "Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1", children: servicesData.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `#${g.name.toLowerCase().replace(/\s+/g, "-")}`, className: "flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-secondary", children: [
          g.name,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
        ] }) }, g.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: servicesData.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: g.name.toLowerCase().replace(/\s+/g, "-"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold md:text-2xl", children: g.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: g.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-hover transition flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/services/${item.id}`, className: "block group", children: [
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
      ] }, g.name)) })
    ] })
  ] });
}
export {
  ServicesPage as component
};
