import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-C8ch49R5.mjs";
import { L as Loader, a as auth, d as db } from "./router-D9WOsIFo.mjs";
import { c as createUserWithEmailAndPassword, u as updateProfile, a as signInWithEmailAndPassword } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import { aU as setDoc, d as doc } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__storage.mjs";
import "../_libs/sonner.mjs";
import "../_libs/jspdf-autotable.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { C as CircleCheck, h as CircleAlert, X, P as Phone, M as Mail, L as Lock } from "../_libs/lucide-react.mjs";
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
import "../_libs/firebase__component.mjs";
import "../_libs/firebase__util.mjs";
import "../_libs/idb.mjs";
import "../_libs/firebase__installations.mjs";
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
function Login() {
  const router = useRouter();
  const [mode, setMode] = reactExports.useState("login");
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5e3);
      return () => clearTimeout(timer);
    }
  }, [error]);
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
      if (mode === "login") {
        setError("wrong credentials");
      } else {
        setError(err.message || "Authentication failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-background min-h-[calc(100vh-64px)] flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand/10 blur-[120px] opacity-70 pointer-events-none animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px] opacity-70 pointer-events-none animate-pulse", style: {
      animationDelay: "2s"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2 lg:py-24 relative z-10 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -30
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.6
      }, className: "hidden lg:flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl font-extrabold leading-tight tracking-tight", children: [
          "Unlock premium ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Tech Services." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground font-medium max-w-md leading-relaxed", children: "Join thousands of businesses who trust Vendor99 for their enterprise-grade Tech, IT, and Maintenance needs." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-5", children: ["Verified, background-checked professionals", "Upfront pricing with no hidden fees", "Dedicated Account Managers", "Service guarantee on every project"].map((text, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2 + i * 0.1
        }, className: "flex items-center gap-3 text-base font-medium text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-success/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-success" }) }),
          text
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.5
      }, className: "mx-auto w-full max-w-md rounded-[2.5rem] border border-white/40 glass bg-white/70 p-10 shadow-premium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-xl bg-secondary/50 p-1.5 text-sm font-bold border border-border/50", children: ["login", "register"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setMode(m);
          setError("");
        }, className: `flex-1 rounded-lg py-2.5 transition-all ${mode === m ? "bg-white text-brand shadow-sm" : "text-muted-foreground hover:text-foreground"}`, children: m === "login" ? "Login" : "Sign up" }, m)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-8 text-3xl font-extrabold tracking-tight", children: mode === "login" ? "Welcome back" : "Create account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base text-muted-foreground font-medium", children: mode === "login" ? "Sign in to manage your bookings." : "It takes less than a minute." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: -50,
          scale: 0.95
        }, animate: {
          opacity: 1,
          y: 0,
          scale: 1
        }, exit: {
          opacity: 0,
          y: -50,
          scale: 0.95
        }, transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.6
        }, className: "fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-red-100 shadow-2xl px-5 py-3.5 rounded-2xl w-[90%] max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5 text-red-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-slate-800", children: "Authentication Error" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-slate-500 mt-0.5", children: error })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setError(""), type: "button", className: "p-1.5 hover:bg-slate-100 rounded-lg transition-colors shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 text-slate-400" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 space-y-5", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: mode === "register" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            height: 0,
            scale: 0.95
          }, animate: {
            opacity: 1,
            height: "auto",
            scale: 1
          }, exit: {
            opacity: 0,
            height: 0,
            scale: 0.95
          }, className: "space-y-5 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1", children: "Full name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: name, onChange: (e) => setName(e.target.value), className: "mt-1.5 w-full rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium", placeholder: "Your name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1", children: "Contact Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", value: phone, onChange: (e) => setPhone(e.target.value), className: "w-full rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm py-3.5 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium", placeholder: "+91 90000 00000" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1", children: "Email address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm py-3.5 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium", placeholder: "you@company.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm py-3.5 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium", placeholder: "••••••••" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
            scale: 1.02
          }, whileTap: {
            scale: 0.98
          }, type: "submit", disabled: loading, className: "mt-2 w-full flex justify-center items-center rounded-2xl bg-gradient-premium px-4 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: "xs", text: "" }) : mode === "login" ? "Login" : "Create account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-center text-xs font-medium text-muted-foreground", children: [
          "By continuing you agree to our",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-foreground font-bold hover:underline", children: "Terms" }),
          " &",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-foreground font-bold hover:underline", children: "Privacy" }),
          "."
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Login as component
};
