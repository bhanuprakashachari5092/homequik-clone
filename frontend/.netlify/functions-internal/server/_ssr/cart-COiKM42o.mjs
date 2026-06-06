import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-C3G13g0Z.mjs";
import { d as ShoppingBag } from "../_libs/lucide-react.mjs";
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
function CartPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-20 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-7 w-7 text-brand" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-3xl font-bold", children: "Your cart is empty" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Browse services and add your first booking." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "mt-8 inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark", children: "Browse services" })
  ] }) });
}
export {
  CartPage as component
};
