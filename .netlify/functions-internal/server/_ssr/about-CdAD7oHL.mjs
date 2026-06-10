import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-C3G13g0Z.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
const stats = [{
  value: "12M+",
  label: "Customers"
}, {
  value: "45K+",
  label: "Professionals"
}, {
  value: "60+",
  label: "Cities"
}, {
  value: "4.8★",
  label: "Avg rating"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold leading-tight md:text-5xl", children: "Building India's most trusted home-services company." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "We empower skilled professionals with training, tools and dignified livelihoods — and bring expert services to your doorstep." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-6 md:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 text-center shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-brand md:text-4xl", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-10 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Our mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Empower service professionals to deliver services at home like never experienced before — with a brand of trust, quality and reliability." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Our story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Started in Bangalore as a small team obsessed with home services done right. Today we serve millions of customers across India and beyond." })
        ] })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
