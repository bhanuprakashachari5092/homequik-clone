import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as db } from "./router-vjEfc7KF.mjs";
import { d as doc, ap as getDoc } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__storage.mjs";
import "../_libs/sonner.mjs";
import "../_libs/jspdf-autotable.mjs";
import { i as CircleX, j as LogOut, b as Briefcase, k as Clock, C as CircleCheck, P as Phone, c as MapPin } from "../_libs/lucide-react.mjs";
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
function DealerPortal() {
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [dealerId, setDealerId] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [currentDealer, setCurrentDealer] = reactExports.useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const docRef = doc(db, "dealers", dealerId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const dealerData = docSnap.data();
        if (dealerData.phone === phone) {
          if (dealerData.status !== "Active") {
            setError("Your account is currently " + dealerData.status + ". Please contact admin.");
            return;
          }
          setCurrentDealer({
            id: dealerId,
            name: dealerData.businessName,
            contact: dealerData.ownerName,
            status: dealerData.status,
            ...dealerData
          });
          setIsAuthenticated(true);
        } else {
          setError("Invalid Dealer ID or Phone Number");
        }
      } else {
        setError("Invalid Dealer ID or Phone Number");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to authentication server. Please check your Firestore rules.");
    }
  };
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-50 flex items-center justify-center font-sans p-4 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/50 w-full max-w-md relative z-10 backdrop-blur-sm bg-white/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-brand font-bold text-sm hover:underline absolute top-6 right-8", children: "Back to Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 bg-brand rounded-2xl flex items-center justify-center font-bold text-white shadow-xl shadow-brand/30 mb-6 text-3xl", children: "V" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold text-slate-800 tracking-tight", children: "Partner Portal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-2 font-medium", children: "Log in to view and manage your assigned customer bookings." })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl text-sm font-bold mb-6 flex items-center gap-2 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5 shrink-0" }),
          error
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-2", children: "Dealer ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: dealerId, onChange: (e) => setDealerId(e.target.value.toUpperCase()), className: "w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all", placeholder: "e.g. DLR-101", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-2", children: "Registered Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: phone, onChange: (e) => setPhone(e.target.value), className: "w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all", placeholder: "+91 0000000000", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-brand/25 mt-6 text-lg", children: "Secure Login" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DealerDashboard, { currentDealer, onLogout: () => setIsAuthenticated(false) });
}
function DealerDashboard({
  currentDealer,
  onLogout
}) {
  const [bookings, setBookings] = reactExports.useState([]);
  reactExports.useEffect(() => {
    import("../_libs/firebase.mjs").then(({
      collection,
      onSnapshot,
      query,
      where
    }) => {
      const q = query(collection(db, "bookings"), where("dealerId", "==", currentDealer.id));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetched = [];
        snapshot.forEach((d) => fetched.push({
          id: d.id,
          ...d.data()
        }));
        setBookings(fetched);
      });
      return () => unsubscribe();
    });
  }, [currentDealer.id]);
  const updateBookingStatus = async (bookingId, newStatus) => {
    setBookings(bookings.map((b) => b.id === bookingId ? {
      ...b,
      status: newStatus
    } : b));
    try {
      const {
        doc: doc2,
        updateDoc
      } = await import("../_libs/firebase.mjs");
      await updateDoc(doc2(db, "bookings", bookingId), {
        status: newStatus
      });
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };
  const pendingCount = bookings.filter((b) => b.status === "Pending" || b.status === "In Progress").length;
  const completedCount = bookings.filter((b) => b.status === "Completed").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#f0f4f8] font-sans flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "bg-white border-b border-border h-20 px-6 lg:px-12 flex items-center justify-between sticky top-0 z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 bg-brand rounded-xl flex items-center justify-center font-bold text-white shadow-md shadow-brand/20", children: "V" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-extrabold text-xl tracking-tight text-foreground hidden sm:block", children: "Partner Portal" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right hidden sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-slate-800", children: currentDealer.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: currentDealer.id })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onLogout, className: "flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-xl text-sm font-bold transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          "Sign Out"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 p-6 lg:p-12 max-w-7xl mx-auto w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-extrabold text-slate-800", children: [
          "Welcome back, ",
          currentDealer.contact,
          "!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mt-2 text-lg", children: "Here are your assigned customer bookings." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-brand/10 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-8 w-8 text-brand" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-500", children: "Total Assigned" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-extrabold text-slate-800", children: bookings.length })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-amber-100 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-8 w-8 text-amber-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-500", children: "Pending / In Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-extrabold text-slate-800", children: pendingCount })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-emerald-100 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8 text-emerald-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-500", children: "Completed Jobs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-extrabold text-slate-800", children: completedCount })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 border-b border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-slate-800", children: "Customer Assignments" }) }),
        bookings.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-10 w-10 text-slate-300" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-slate-700", children: "No Customers Assigned Yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-2", children: "When Vendor99 assigns a customer to you, they will appear here." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-slate-100", children: bookings.map((booking) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full border border-slate-200", children: booking.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${booking.status === "Completed" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : booking.status === "In Progress" ? "bg-brand/10 text-brand border-brand/20" : "bg-amber-50 text-amber-700 border-amber-200"}`, children: booking.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-slate-800 mb-1", children: booking.customerName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-brand font-bold", children: [
                booking.service,
                " • ",
                booking.amount
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-slate-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-slate-400" }),
                booking.phone
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-slate-400 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[200px] sm:max-w-xs", children: booking.customerAddress || booking.city })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 bg-slate-50 p-4 rounded-2xl border border-slate-100 self-start lg:self-auto w-full lg:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2", children: "Update Job Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: booking.status, onChange: (e) => updateBookingStatus(booking.id, e.target.value), className: "w-full lg:w-48 bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand font-bold text-slate-700 shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pending", children: "Pending" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "In Progress", children: "In Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Completed", children: "Completed" })
            ] })
          ] })
        ] }, booking.id)) })
      ] })
    ] })
  ] });
}
export {
  DealerPortal as component
};
