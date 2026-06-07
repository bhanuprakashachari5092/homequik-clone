import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BUJuJ5ob.mjs";
import { u as useCart, b as useAuth } from "./router-DsDLhHvP.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as createServerFn } from "./server-x_nybgc0.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__firestore.mjs";
import "../_libs/seroval.mjs";
import { l as ShoppingBag, T as Trash2, i as LoaderCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const sendBookingEmail = createServerFn("POST", async (payload) => {
  try {
    const nodemailer = await import("../_libs/nodemailer.mjs").then(function(n) {
      return n.n;
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tekzio2026@gmail.com",
        pass: process.env.EMAIL_PASSWORD
        // Must be set in .env
      }
    });
    const servicesList = payload.services.map((s) => `<li>${s.title} (x${s.quantity})</li>`).join("");
    const mailOptions = {
      from: '"HomeQuik Automations" <tekzio2026@gmail.com>',
      to: "tekzio2026@gmail.com",
      subject: `New Booking Request from ${payload.userName}`,
      html: `
        <h2>New Booking Confirmed!</h2>
        <p><strong>Customer Name:</strong> ${payload.userName}</p>
        <p><strong>Customer Email:</strong> ${payload.userEmail}</p>
        <h3>Services Requested:</h3>
        <ul>
          ${servicesList}
        </ul>
        <p>Please contact the customer to finalize the contract.</p>
      `
    };
    await transporter.sendMail(mailOptions);
    return {
      success: true
    };
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email automation: " + error.message);
  }
});
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
      const waMessage = `Hello HomeQuik! I would like to confirm my booking:

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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-6 py-12 md:py-20 min-h-[calc(100vh-64px)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold md:text-4xl", children: "Your Cart" }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center py-20 border border-border bg-card rounded-2xl shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-7 w-7 text-brand" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-2xl font-bold", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Browse B2B services and add your first booking." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "mt-8 inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition", children: "Browse services" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 lg:grid-cols-[1fr_320px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4 rounded-2xl border border-border bg-card shadow-sm items-center", children: [
        item.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 bg-secondary rounded-lg overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-brand font-medium mt-1", children: item.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            "Quantity: ",
            item.quantity
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeFromCart(item.id), className: "p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-5 w-5" }) })
      ] }, item.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-sm h-fit sticky top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-4", children: "Booking Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm border-b border-border pb-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Total Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: totalItems })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Consultation Fee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-brand", children: "Free" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-6 leading-relaxed", children: "By proceeding, you agree to our terms. Your selected B2B services will be booked and our representative will call you to finalize the contract." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCheckout, disabled: isCheckingOut, className: "w-full flex justify-center items-center rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition disabled:opacity-70", children: isCheckingOut ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }) : user ? "Confirm Booking" : "Login to Book" })
      ] })
    ] })
  ] }) });
}
export {
  CartPage as component
};
