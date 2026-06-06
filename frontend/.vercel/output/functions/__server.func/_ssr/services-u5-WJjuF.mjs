import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-CFv3TFe8.mjs";
import { C as ChevronRight, S as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const groups = [{
  name: "Salon & Spa",
  items: [{
    title: "Women's haircut",
    price: "₹449",
    rating: 4.82
  }, {
    title: "Classic facial",
    price: "₹699",
    rating: 4.79
  }, {
    title: "Bridal package",
    price: "₹4,999",
    rating: 4.88
  }, {
    title: "Men's haircut",
    price: "₹349",
    rating: 4.83
  }]
}, {
  name: "Cleaning",
  items: [{
    title: "Bathroom cleaning",
    price: "₹399",
    rating: 4.81
  }, {
    title: "Full home cleaning",
    price: "₹2,499",
    rating: 4.74
  }, {
    title: "Sofa cleaning",
    price: "₹599",
    rating: 4.77
  }, {
    title: "Kitchen deep clean",
    price: "₹899",
    rating: 4.79
  }]
}, {
  name: "Repairs",
  items: [{
    title: "AC service & repair",
    price: "₹599",
    rating: 4.84
  }, {
    title: "Washing machine",
    price: "₹449",
    rating: 4.78
  }, {
    title: "Refrigerator",
    price: "₹499",
    rating: 4.76
  }, {
    title: "Geyser repair",
    price: "₹349",
    rating: 4.8
  }]
}, {
  name: "Home repairs",
  items: [{
    title: "Electrician visit",
    price: "₹129",
    rating: 4.85
  }, {
    title: "Plumber visit",
    price: "₹129",
    rating: 4.83
  }, {
    title: "Carpenter visit",
    price: "₹129",
    rating: 4.81
  }, {
    title: "Pest control",
    price: "₹1,299",
    rating: 4.78
  }]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Home / Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-3xl font-bold md:text-4xl", children: "All services in Bangalore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-muted-foreground", children: "Pick a category to see available time slots and upfront prices." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[240px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-muted-foreground", children: "Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `#${g.name.toLowerCase().replace(/\s+/g, "-")}`, className: "flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-secondary", children: [
          g.name,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
        ] }) }, g.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: g.name.toLowerCase().replace(/\s+/g, "-"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold md:text-2xl", children: g.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: g.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-hover transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-brand text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: item.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Same-day available" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold", children: item.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark", children: "Add" })
          ] })
        ] }, item.title)) })
      ] }, g.name)) })
    ] })
  ] });
}
export {
  ServicesPage as component
};
