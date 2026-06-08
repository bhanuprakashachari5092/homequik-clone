import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-zJ2H8Vs3.mjs";
import { u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-CdWwcAj0.mjs";
import { u as useCart, b as useAuth } from "./router-CJ2-GpdV.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { m as ShoppingBag, n as ArrowRight, T as Trash2, f as CircleCheck, j as LoaderCircle } from "../_libs/lucide-react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
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
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const sendBookingEmail = createServerFn({
  method: "POST"
}).handler(createSsrRpc("77ce64d8aa127d09b51dce01a8c92cd2f93aebcdeed597807415f9f441518052"));
function CartPage() {
  const {
    items,
    removeFromCart,
    checkout,
    isCheckingOut,
    totalItems
  } = useCart();
  const {
    user
  } = useAuth();
  const router = useRouter();
  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please login to complete your booking.");
      router.navigate({
        to: "/login"
      });
      return;
    }
    try {
      await checkout();
      const userName = user.displayName || user.email || "Customer";
      const waMessage = `Hello Vendor99! I would like to confirm my booking:

*User Details:*
Name: ${userName}
Email: ${user.email}

*Services Booked:*
${items.map((i) => `- ${i.title} (x${i.quantity})`).join("\n")}

Total Services: ${totalItems}

Please contact me to finalize.`;
      const waUrl = `https://wa.me/919141052539?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, "_blank");
      try {
        await sendBookingEmail({
          data: {
            userName,
            userEmail: user.email || "No Email",
            services: items.map((i) => ({
              title: i.title,
              quantity: i.quantity
            }))
          }
        });
      } catch (emailErr) {
        console.error("Email automation failed (Check App Password in .env):", emailErr);
      }
      toast.success("Booking confirmed! Details sent to WhatsApp and Email.");
      router.navigate({
        to: "/"
      });
    } catch (err) {
      toast.error(err.message || "Failed to complete checkout.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-16 md:py-24 min-h-[calc(100vh-64px)] relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-10 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[80px] -z-10 animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
      opacity: 0,
      y: -20
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "text-4xl font-extrabold tracking-tight md:text-5xl", children: "Your Cart" }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.95
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "mt-12 text-center py-24 glass rounded-[3rem] shadow-card border border-white/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-primary/10 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-12 w-12 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold tracking-tight", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Discover premium B2B services and add your first booking." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
        scale: 1.05
      }, whileTap: {
        scale: 0.95
      }, className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-xl bg-gradient-premium px-8 py-4 text-base font-bold text-white shadow-lg transition-all", children: [
        "Explore Services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" })
      ] }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-12 lg:grid-cols-[1fr_400px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: 0.2
        }
      }, className: "group flex gap-6 p-6 rounded-[2rem] border border-border/50 bg-white hover:border-primary/30 shadow-sm hover:shadow-card transition-all items-center", children: [
        item.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 w-28 bg-muted rounded-2xl overflow-hidden shrink-0 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold tracking-tight", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary mt-1", children: item.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted/50 w-fit px-4 py-1.5 rounded-full", children: [
            "Quantity: ",
            item.quantity
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.1,
          rotate: 10
        }, whileTap: {
          scale: 0.9
        }, onClick: () => removeFromCart(item.id), className: "p-4 text-muted-foreground hover:text-danger hover:bg-danger/10 rounded-2xl transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-6 w-6" }) })
      ] }, item.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 20
      }, animate: {
        opacity: 1,
        x: 0
      }, className: "rounded-[2.5rem] border border-white/40 glass p-8 shadow-premium h-fit sticky top-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-2xl mb-8 tracking-tight", children: "Booking Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-base border-b border-border/50 pb-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: "Total Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-lg", children: totalItems })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: "Consultation Fee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-success flex items-center gap-1.5 bg-success/10 px-3 py-1 rounded-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
              " Free"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8 leading-relaxed font-medium", children: "By proceeding, you agree to our terms. Your selected B2B services will be booked and our representative will call you to finalize the contract." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.02
        }, whileTap: {
          scale: 0.98
        }, onClick: handleCheckout, disabled: isCheckingOut, className: "w-full flex justify-center items-center rounded-2xl bg-gradient-premium px-4 py-5 text-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all disabled:opacity-70 disabled:cursor-not-allowed", children: isCheckingOut ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }) : user ? "Confirm & Book Now" : "Login to Book" })
      ] })
    ] })
  ] }) });
}
export {
  CartPage as component
};
