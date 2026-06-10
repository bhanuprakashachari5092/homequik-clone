import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-C3G13g0Z.mjs";
import { P as Phone, L as Lock } from "../_libs/lucide-react.mjs";
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
function Login() {
  const [mode, setMode] = reactExports.useState("login");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-brand-soft via-background to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-bold leading-tight", children: [
        "Welcome to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "HomeQuik" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Book trained professionals for home services in Bangalore — salon, cleaning, repairs and more." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Verified, background-checked pros" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Upfront pricing — no surprises" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Same-day slots in 60 minutes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Service guarantee on every booking" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-lg bg-secondary p-1 text-sm", children: ["login", "register"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode(m), className: `flex-1 rounded-md py-2 transition ${mode === m ? "bg-background text-foreground shadow-card" : "text-muted-foreground"}`, children: m === "login" ? "Login" : "Sign up" }, m)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-2xl font-bold", children: mode === "login" ? "Welcome back" : "Create your account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: mode === "login" ? "Sign in to manage your bookings." : "It takes less than a minute." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 space-y-4", onSubmit: (e) => e.preventDefault(), children: [
        mode === "register" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand", placeholder: "Your name" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Mobile number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", className: "w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand", placeholder: "+91 98xxxxxxxx" })
          ] })
        ] }),
        mode === "login" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", className: "w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand", placeholder: "••••••••" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark", children: mode === "login" ? "Login" : "Send OTP" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
        "By continuing you agree to our",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "underline", children: "Terms" }),
        " ",
        "&",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "underline", children: "Privacy" }),
        "."
      ] })
    ] })
  ] }) }) });
}
export {
  Login as component
};
