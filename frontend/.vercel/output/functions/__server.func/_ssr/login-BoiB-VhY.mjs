import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-Ctj3i0fx.mjs";
import { b as auth, d as db } from "./router-BaTSiW1U.mjs";
import { c as createUserWithEmailAndPassword, u as updateProfile, a as signInWithEmailAndPassword } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import { b as setDoc, d as doc } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/sonner.mjs";
import { f as Phone, g as Mail, L as Lock, h as LoaderCircle } from "../_libs/lucide-react.mjs";
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
function Login() {
  const router = useRouter();
  const [mode, setMode] = reactExports.useState("login");
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (mode === "register") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
          displayName: name
        });
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name,
          email,
          phone,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.navigate({
        to: "/"
      });
    } catch (err) {
      console.error(err);
      setError(err.message || "Authentication failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-brand-soft via-background to-background min-h-[calc(100vh-64px)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-bold leading-tight", children: [
        "Welcome to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "HomeQuik" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Book trained professionals for B2B Tech Services — Digital Marketing, App Development, CCTV and more." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Verified, background-checked pros" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Upfront pricing — no surprises" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Dedicated Account Managers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Service guarantee on every project" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-lg bg-secondary p-1 text-sm", children: ["login", "register"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setMode(m);
        setError("");
      }, className: `flex-1 rounded-md py-2 transition ${mode === m ? "bg-background text-foreground shadow-card" : "text-muted-foreground"}`, children: m === "login" ? "Login" : "Sign up" }, m)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-2xl font-bold", children: mode === "login" ? "Welcome back" : "Create your account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: mode === "login" ? "Sign in to manage your bookings." : "It takes less than a minute." }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-md bg-destructive/15 p-3 text-sm text-destructive", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 space-y-4", onSubmit: handleSubmit, children: [
        mode === "register" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: name, onChange: (e) => setName(e.target.value), className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand", placeholder: "Your name" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Contact Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", value: phone, onChange: (e) => setPhone(e.target.value), className: "w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand", placeholder: "+91 90000 00000" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand", placeholder: "you@company.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand", placeholder: "••••••••" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full flex justify-center items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }) : mode === "login" ? "Login" : "Create account" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
        "By continuing you agree to our",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "underline", children: "Terms" }),
        " &",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "underline", children: "Privacy" }),
        "."
      ] })
    ] })
  ] }) }) });
}
export {
  Login as component
};
