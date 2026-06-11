import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as db } from "./router-CCV1XvkF.mjs";
import { o as onSnapshot, c as collection, u as updateDoc, d as doc, f as deleteDoc, a as addDoc, s as serverTimestamp } from "../_libs/firebase__firestore.mjs";
import { j as jsPDF } from "../_libs/jspdf.mjs";
import "../_libs/jspdf-autotable.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__storage.mjs";
import "../_libs/sonner.mjs";
import { s as LayoutDashboard, t as ShoppingCart, u as Users, b as Briefcase, v as Package, G as Gift, w as Activity, x as Settings, j as LogOut, l as Search, y as Bell, C as CircleCheck, D as DollarSign, z as Download, i as CircleX, T as Trash2, c as MapPin, E as SquarePen } from "../_libs/lucide-react.mjs";
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
import "../_libs/fflate.mjs";
import "../_libs/fast-png.mjs";
import "../_libs/iobuffer.mjs";
import "../_libs/pako.mjs";
import "../_libs/html2canvas.mjs";
import "../_libs/dompurify.mjs";
import "../_libs/canvg.mjs";
import "../_libs/core-js.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/raf.mjs";
import "../_libs/performance-now.mjs";
import "../_libs/rgbcolor.mjs";
import "../_libs/svg-pathdata.mjs";
import "../_libs/stackblur-canvas.mjs";
function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-slate-50 flex items-center justify-center font-sans p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 rounded-3xl shadow-xl border border-border w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 bg-brand rounded-2xl flex items-center justify-center font-bold text-white shadow-lg shadow-brand/30 mx-auto mb-4 text-2xl", children: "V" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-extrabold text-slate-800", children: "Admin Login" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 mt-2", children: "Sign in to access the control panel" })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 text-red-600 p-3 rounded-xl text-sm font-bold mb-6 text-center", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-2", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "admin@gmail.com", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-2", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "••••••••", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-md mt-4", children: "Access Dashboard" })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, { onLogout: () => setIsAuthenticated(false) });
}
function AdminDashboard({
  onLogout
}) {
  const [activeTab, setActiveTab] = reactExports.useState("Dashboard");
  const [dealers, setDealers] = reactExports.useState([]);
  const [bookings, setBookings] = reactExports.useState([]);
  const [customRevenues, setCustomRevenues] = reactExports.useState([]);
  const [showAddModal, setShowAddModal] = reactExports.useState(false);
  const [editingDealerId, setEditingDealerId] = reactExports.useState(null);
  const [newDealer, setNewDealer] = reactExports.useState({
    name: "",
    contact: "",
    phone: "",
    city: "",
    expertise: "CCTV Surveillance"
  });
  const [services, setServices] = reactExports.useState([]);
  const [showServiceModal, setShowServiceModal] = reactExports.useState(false);
  const [editingServiceId, setEditingServiceId] = reactExports.useState(null);
  const [newService, setNewService] = reactExports.useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "CCTV Surveillance"
  });
  const [offers, setOffers] = reactExports.useState([]);
  const [showOfferModal, setShowOfferModal] = reactExports.useState(false);
  const [editingOfferId, setEditingOfferId] = reactExports.useState(null);
  const [newOffer, setNewOffer] = reactExports.useState({
    title: "",
    description: "",
    discountCode: "",
    imageUrl: "",
    isActive: true
  });
  const [showRevenueModal, setShowRevenueModal] = reactExports.useState(false);
  const [newRevenue, setNewRevenue] = reactExports.useState({
    amount: "",
    description: "",
    paymentStatus: "Received"
  });
  const [isNotificationsOpen, setIsNotificationsOpen] = reactExports.useState(false);
  const [notificationsClearedAt, setNotificationsClearedAt] = reactExports.useState(() => {
    return Number(localStorage.getItem("adminNotificationsClearedAt") || "0");
  });
  reactExports.useEffect(() => {
    const unsubscribeBookings = onSnapshot(collection(db, "bookings"), (snapshot) => {
      const bks = [];
      snapshot.forEach((d) => bks.push({
        id: d.id,
        ...d.data()
      }));
      setBookings(bks);
    });
    const unsubscribeServices = onSnapshot(collection(db, "services"), (snapshot) => {
      const svcs = [];
      snapshot.forEach((d) => svcs.push({
        id: d.id,
        ...d.data()
      }));
      setServices(svcs);
    });
    const unsubscribeOffers = onSnapshot(collection(db, "offers"), (snapshot) => {
      const offs = [];
      snapshot.forEach((d) => offs.push({
        id: d.id,
        ...d.data()
      }));
      setOffers(offs);
    });
    const unsubscribeDealers = onSnapshot(collection(db, "dealers"), (snapshot) => {
      const dlrs = [];
      snapshot.forEach((d) => dlrs.push({
        id: d.id,
        ...d.data()
      }));
      setDealers(dlrs);
    });
    const unsubscribeRevenue = onSnapshot(collection(db, "custom_revenues"), (snapshot) => {
      const revs = [];
      snapshot.forEach((d) => revs.push({
        id: d.id,
        ...d.data()
      }));
      setCustomRevenues(revs);
    });
    return () => {
      unsubscribeBookings();
      unsubscribeServices();
      unsubscribeOffers();
      unsubscribeDealers();
      unsubscribeRevenue();
    };
  }, []);
  const handleSaveDealer = async (e) => {
    e.preventDefault();
    if (editingDealerId) {
      await updateDoc(doc(db, "dealers", editingDealerId), newDealer);
    } else {
      await addDoc(collection(db, "dealers"), {
        ...newDealer,
        status: "Active",
        paymentStatus: "Verified",
        createdAt: serverTimestamp()
      });
    }
    closeModal();
  };
  const closeModal = () => {
    setShowAddModal(false);
    setEditingDealerId(null);
    setNewDealer({
      name: "",
      contact: "",
      phone: "",
      city: "",
      expertise: "CCTV Surveillance"
    });
  };
  const updateStatus = async (id, newStatus) => {
    await updateDoc(doc(db, "dealers", id), {
      status: newStatus
    });
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this dealer?")) {
      await deleteDoc(doc(db, "dealers", id));
    }
  };
  const assignDealerToBooking = async (bookingId, dealerId) => {
    try {
      await updateDoc(doc(db, "bookings", bookingId), {
        dealerId: dealerId === "" ? null : dealerId
      });
    } catch (e) {
      console.error("Failed to assign dealer:", e);
    }
  };
  const handleDeleteBooking = async (bookingId) => {
    if (window.confirm("Are you sure you want to delete this customer booking?")) {
      try {
        await deleteDoc(doc(db, "bookings", bookingId));
        await fetch("https://script.google.com/macros/s/AKfycbxcEHZaSWkogoxOp6PNL0VhLVTNw0X11YEDekRNmCFobqWhL5V4HfMaB9SKTay6DXkK/exec", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            action: "delete",
            bookingId
          })
        });
        console.log("Sent delete request to Google Sheets");
      } catch (err) {
        console.error("Error deleting booking:", err);
        alert("Failed to delete booking.");
      }
    }
  };
  const downloadDealersPDF = () => {
    const doc2 = new jsPDF();
    doc2.text("Vendor99 Dealer Network", 14, 15);
    const tableColumn = ["ID", "Business Name", "Contact Person", "Phone", "City", "Plan", "Status"];
    const tableRows = [];
    dealers.forEach((dealer) => {
      const dealerData = [dealer.id, dealer.businessName || dealer.name || "N/A", dealer.ownerName || dealer.contact || "N/A", dealer.phone || "N/A", dealer.city || "N/A", dealer.plan || "Basic", dealer.status || "Pending"];
      tableRows.push(dealerData);
    });
    doc2.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: {
        fontSize: 8
      },
      headStyles: {
        fillColor: [249, 115, 22]
      }
      // Brand color
    });
    doc2.save(`Vendor99_Dealers_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`);
  };
  const handleSaveService = async (e) => {
    e.preventDefault();
    try {
      if (editingServiceId) {
        await updateDoc(doc(db, "services", editingServiceId), newService);
      } else {
        await addDoc(collection(db, "services"), {
          ...newService,
          createdAt: serverTimestamp()
        });
      }
      closeServiceModal();
    } catch (error) {
      console.error("Error saving service:", error);
    }
  };
  const closeServiceModal = () => {
    setShowServiceModal(false);
    setEditingServiceId(null);
    setNewService({
      title: "",
      description: "",
      imageUrl: "",
      category: "CCTV Surveillance"
    });
  };
  const openEditServiceModal = (service) => {
    setNewService({
      title: service.title,
      description: service.description,
      imageUrl: service.imageUrl || "",
      category: service.category || "CCTV Surveillance"
    });
    setEditingServiceId(service.id);
    setShowServiceModal(true);
  };
  const handleDeleteService = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteDoc(doc(db, "services", id));
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };
  const handleSaveOffer = async (e) => {
    e.preventDefault();
    try {
      if (editingOfferId) {
        await updateDoc(doc(db, "offers", editingOfferId), newOffer);
      } else {
        await addDoc(collection(db, "offers"), {
          ...newOffer,
          createdAt: serverTimestamp()
        });
      }
      closeOfferModal();
    } catch (error) {
      console.error("Error saving offer:", error);
    }
  };
  const closeOfferModal = () => {
    setShowOfferModal(false);
    setEditingOfferId(null);
    setNewOffer({
      title: "",
      description: "",
      discountCode: "",
      imageUrl: "",
      isActive: true
    });
  };
  const openEditOfferModal = (offer) => {
    setNewOffer({
      title: offer.title,
      description: offer.description,
      discountCode: offer.discountCode || "",
      imageUrl: offer.imageUrl || "",
      isActive: offer.isActive !== void 0 ? offer.isActive : true
    });
    setEditingOfferId(offer.id);
    setShowOfferModal(true);
  };
  const handleDeleteOffer = async (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        await deleteDoc(doc(db, "offers", id));
      } catch (error) {
        console.error("Error deleting offer:", error);
      }
    }
  };
  const handleAddCustomRevenue = async (e) => {
    e.preventDefault();
    if (!newRevenue.amount) return;
    try {
      await addDoc(collection(db, "custom_revenues"), {
        amount: Number(newRevenue.amount),
        description: newRevenue.description,
        paymentStatus: newRevenue.paymentStatus,
        createdAt: serverTimestamp()
      });
      setShowRevenueModal(false);
      setNewRevenue({
        amount: "",
        description: "",
        paymentStatus: "Received"
      });
    } catch (err) {
      console.error("Failed to add custom revenue:", err);
    }
  };
  const updateBookingPaymentStatus = async (bookingId, status) => {
    try {
      await updateDoc(doc(db, "bookings", bookingId), {
        paymentStatus: status
      });
    } catch (err) {
      console.error("Failed to update payment status:", err);
    }
  };
  const dealerRevenue = dealers.reduce((acc, d) => acc + (Number(d.amount) || 0), 0);
  const bookingRevenue = bookings.reduce((acc, b) => acc + (Number(b.numericAmount) || 0), 0);
  const customRevTotal = customRevenues.reduce((acc, c) => acc + (Number(c.amount) || 0), 0);
  const expectedRevenue = dealerRevenue + bookingRevenue + customRevTotal;
  const receivedBookingRev = bookings.filter((b) => b.paymentStatus === "Paid").reduce((acc, b) => acc + (Number(b.numericAmount) || 0), 0);
  const receivedCustomRev = customRevenues.filter((c) => c.paymentStatus === "Received").reduce((acc, c) => acc + (Number(c.amount) || 0), 0);
  const receivedRevenue = dealerRevenue + receivedBookingRev + receivedCustomRev;
  const remainingRevenue = expectedRevenue - receivedRevenue;
  const formatCurrency = (val) => {
    if (val >= 1e5) return `₹${(val / 1e5).toFixed(2)}L`;
    return `₹${val.toLocaleString("en-IN")}`;
  };
  bookings.filter((b) => b.status !== "Completed" && b.status !== "Cancelled").length;
  const completedOrdersCount = bookings.filter((b) => b.status === "Completed").length;
  bookings.length > 0 ? Math.round(completedOrdersCount / bookings.length * 100) : 0;
  const allNotifications = [...dealers.map((d) => {
    let timeMs = Date.now();
    if (d.createdAt?.toMillis) timeMs = d.createdAt.toMillis();
    else if (d.paymentDate) timeMs = new Date(d.paymentDate).getTime();
    return {
      id: d.id,
      type: "dealer",
      message: `New Partner Registered: ${d.businessName || d.name} joined the ${d.plan || "Starter Plan"}`,
      timeMs
    };
  }), ...bookings.map((b) => {
    let timeMs = Date.now();
    if (b.createdAt?.toMillis) timeMs = b.createdAt.toMillis();
    else if (b.bookingDate) timeMs = new Date(b.bookingDate).getTime();
    return {
      id: b.id || b.bookingId,
      type: "booking",
      message: `New Service Request: ${b.customerName} booked ${b.serviceName || b.service}`,
      timeMs
    };
  })];
  const notifications = allNotifications.filter((n) => n.timeMs > notificationsClearedAt).sort((a, b) => b.timeMs - a.timeMs);
  const handleClearNotifications = () => {
    const now = Date.now();
    setNotificationsClearedAt(now);
    localStorage.setItem("adminNotificationsClearedAt", now.toString());
    setIsNotificationsOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-50 flex font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-64 bg-white border-r border-border hidden md:flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 bg-brand rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-brand/30", children: "V" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-xl tracking-tight text-foreground", children: [
          "Admin",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Panel" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 py-6 px-4 space-y-2", children: [{
        icon: LayoutDashboard,
        label: "Dashboard"
      }, {
        icon: ShoppingCart,
        label: "Orders"
      }, {
        icon: Users,
        label: "Customers"
      }, {
        icon: Briefcase,
        label: "Dealers"
      }, {
        icon: Package,
        label: "Services"
      }, {
        icon: Gift,
        label: "Offers"
      }, {
        icon: Activity,
        label: "Analytics"
      }, {
        icon: Settings,
        label: "Settings"
      }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab(item.label), className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === item.label ? "bg-brand/10 text-brand font-bold" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: `h-5 w-5 ${activeTab === item.label ? "text-brand" : ""}` }),
        item.label
      ] }, item.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onLogout, className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-5 w-5" }),
        "Sign Out"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 flex flex-col overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "h-20 bg-white border-b border-border flex items-center justify-between px-8 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: activeTab }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-96 ml-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-slate-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search anything...", className: "bg-transparent border-none outline-none ml-2 w-full text-sm text-slate-700" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsNotificationsOpen(!isNotificationsOpen), className: `relative p-2 transition-colors rounded-full ${isNotificationsOpen ? "bg-slate-100 text-brand" : "text-slate-500 hover:text-brand hover:bg-slate-50"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-6 w-6" }),
              notifications.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" })
            ] }),
            isNotificationsOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-2xl shadow-xl border border-border overflow-hidden z-50 flex flex-col max-h-[80vh]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-border flex justify-between items-center bg-slate-50 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-800", children: "Notifications" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleClearNotifications, className: "text-xs font-bold text-brand hover:text-brand-dark px-2 py-1 bg-brand/10 rounded-lg transition-colors", children: "Clear All" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1", children: notifications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center text-slate-500 flex flex-col items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 text-slate-300 mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "You're all caught up!" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: notifications.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 hover:bg-slate-50 transition-colors flex gap-3 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-0.5 p-2 rounded-full shrink-0 ${n.type === "dealer" ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"}`, children: n.type === "dealer" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-slate-800 leading-snug", children: n.message }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-1", children: new Date(n.timeMs).toLocaleString() })
                ] })
              ] }, `${n.id}-${i}`)) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=f8fafc", alt: "Admin" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Super Admin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "admin@gmail.com" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-8 overflow-y-auto", children: activeTab === "Dashboard" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-slate-800", children: "Financial Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowRevenueModal(true), className: "bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors", children: "+ Log Custom Revenue" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
          label: "Expected Revenue",
          value: formatCurrency(expectedRevenue),
          trend: "Projected",
          isPositive: true,
          icon: Activity,
          color: "text-blue-600",
          bg: "bg-blue-100"
        }, {
          label: "Received Revenue",
          value: formatCurrency(receivedRevenue),
          trend: "Verified",
          isPositive: true,
          icon: CircleCheck,
          color: "text-emerald-600",
          bg: "bg-emerald-100"
        }, {
          label: "Remaining Revenue",
          value: formatCurrency(remainingRevenue),
          trend: "Pending",
          isPositive: false,
          icon: DollarSign,
          color: "text-amber-600",
          bg: "bg-amber-100"
        }, {
          label: "Partner Dealers",
          value: dealers.length.toString(),
          trend: "Real-time",
          isPositive: true,
          icon: Briefcase,
          color: "text-purple-600",
          bg: "bg-purple-100"
        }].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-3xl border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-500 mb-1", children: stat.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold text-foreground", children: stat.value })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-2xl ${stat.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: `h-6 w-6 ${stat.color}` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-bold ${stat.isPositive ? "text-emerald-600" : "text-amber-500"}`, children: stat.trend }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500", children: "Live DB Match" })
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl border border-border shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "Recent Bookings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("Customers"), className: "text-sm font-bold text-brand hover:underline", children: "View All" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Order ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Customer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Amount" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: bookings.slice(0, 4).map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm font-medium text-slate-900", children: row.bookingId || row.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm text-slate-600", children: row.customerName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm text-slate-600", children: row.serviceName || row.service }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${row.status === "Completed" ? "bg-emerald-100 text-emerald-800" : row.status === "In Progress" ? "bg-brand/20 text-brand" : "bg-amber-100 text-amber-800"}`, children: row.status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm font-bold text-foreground", children: row.amount })
            ] }, i)) })
          ] }) })
        ] })
      ] }) : activeTab === "Dealers" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Dealer Network" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-1", children: "Manage paid partner registrations and subscriptions." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadDealersPDF(), className: "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-xl font-bold transition-colors shadow-sm flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
              " Export PDF"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowAddModal(true), className: "bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors", children: "+ Add New Dealer" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-2xl border border-border shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider mb-1", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-slate-800", children: dealers.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-2xl border border-border shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1", children: "Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-slate-800", children: dealers.filter((d) => d.status === "Active").length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-2xl border border-border shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-amber-600 uppercase tracking-wider mb-1", children: "Pending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-slate-800", children: dealers.filter((d) => d.status === "Pending").length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-2xl border border-border shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-purple-600 uppercase tracking-wider mb-1", children: "Premium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-slate-800", children: dealers.filter((d) => d.plan === "Premium Plan" || d.plan === "Premium Dealer").length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-2xl border border-border shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-blue-600 uppercase tracking-wider mb-1", children: "Monthly Rev" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-slate-800", children: [
              "₹",
              dealers.reduce((acc, d) => acc + (Number(d.amount) || 0), 0)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-2xl border border-border shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-brand uppercase tracking-wider mb-1", children: "Total Rev" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-slate-800", children: [
              "₹",
              dealers.reduce((acc, d) => acc + (Number(d.amount) || 0), 0)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-brand", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Categories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CCTV & Security Solutions", children: "CCTV & Security" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Home Construction", children: "Home Construction" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Interior Design", children: "Interior Design" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-brand", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Plans" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Starter Plan", children: "Starter Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Growth Plan", children: "Growth Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Premium Plan", children: "Premium Plan" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-brand", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Statuses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Active", children: "Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pending", children: "Pending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Suspended", children: "Suspended" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-3xl border border-border shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[1000px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Business Info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Plan & Payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: dealers.map((dealer, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-800", children: dealer.businessName || dealer.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-brand font-bold bg-brand/10 inline-block px-2 py-0.5 rounded-full mt-1.5", children: dealer.category || dealer.expertise || "CCTV Surveillance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 mt-1", children: [
                dealer.experience || "0-2 Years",
                " Experience"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-slate-700", children: dealer.city }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 mt-0.5", children: [
                dealer.ownerName || dealer.contact,
                " • ",
                dealer.phone
              ] }),
              dealer.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-blue-500 mt-0.5", children: dealer.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-bold text-slate-800 mb-1", children: [
                dealer.plan || "Starter Plan",
                " (₹",
                dealer.amount || "4999",
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono text-slate-500", children: [
                "TXN: ",
                dealer.transactionId || "N/A"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono text-slate-500", children: [
                "ORD: ",
                dealer.orderId || "N/A"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${dealer.status === "Active" ? "bg-emerald-100 text-emerald-800" : dealer.status === "Pending" ? "bg-amber-100 text-amber-800" : dealer.status === "Suspended" ? "bg-rose-100 text-rose-800" : "bg-slate-100 text-slate-600"}`, children: dealer.status || "Pending" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6 text-right space-x-2 whitespace-nowrap", children: [
              dealer.status !== "Suspended" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateStatus(dealer.id, "Suspended"), className: "p-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors", title: "Suspend", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5" }) }),
              dealer.status === "Suspended" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateStatus(dealer.id, "Active"), className: "p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors", title: "Activate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(dealer.id), className: "p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-5 w-5" }) })
            ] })
          ] }, i)) })
        ] }) }) })
      ] }) : activeTab === "Customers" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Customer Bookings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-1", children: "Assign customers to dealers and manage their bookings." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-3xl border border-border shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Booking ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Customer Info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Service Request" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Assigned Dealer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: bookings.map((booking, i) => {
            dealers.find((d) => d.id === booking.dealerId);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm font-bold text-slate-900", children: booking.bookingId || booking.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-800", children: booking.customerName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 mt-0.5", children: booking.customerPhone || booking.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-slate-700", children: booking.serviceName || booking.service }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 mt-0.5 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                  " ",
                  booking.customerAddress || booking.city
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: booking.dealerId || "", onChange: (e) => assignDealerToBooking(booking.id, e.target.value), className: `text-sm border rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand ${booking.dealerId ? "border-brand/30 bg-brand/5 font-medium text-brand" : "border-slate-200 bg-slate-50 text-slate-500"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Unassigned --" }),
                dealers.filter((d) => d.status === "Active").map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: d.id, children: [
                  d.name,
                  " (",
                  d.city,
                  ")"
                ] }, d.id))
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${booking.status === "Completed" ? "bg-emerald-100 text-emerald-800" : booking.status === "In Progress" ? "bg-brand/20 text-brand" : "bg-amber-100 text-amber-800"}`, children: booking.status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: booking.paymentStatus || "Pending", onChange: (e) => updateBookingPaymentStatus(booking.id, e.target.value), className: `text-sm border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand font-bold ${booking.paymentStatus === "Paid" ? "border-emerald-200 bg-emerald-50 text-emerald-600" : "border-amber-200 bg-amber-50 text-amber-600"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pending", children: "Pending" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Paid", children: "Paid" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-right whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteBooking(booking.id), className: "p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors", title: "Delete Booking", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-5 w-5" }) }) })
            ] }, i);
          }) })
        ] }) }) })
      ] }) : activeTab === "Services" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Manage Services & Posts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-1", children: "Add or edit services that appear on the Home page dynamically." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowServiceModal(true), className: "bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors", children: "+ Add New Service" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-3xl border border-border shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Service Image" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Title & Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-border", children: [
            services.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center", children: service.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: service.imageUrl, alt: service.title, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-6 w-6 text-slate-300" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-800", children: service.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-brand font-bold bg-brand/10 inline-block px-2 py-0.5 rounded-full mt-1.5", children: service.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-600 line-clamp-2", children: service.description }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6 text-right space-x-2 whitespace-nowrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEditServiceModal(service), className: "p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors", title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteService(service.id), className: "p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-5 w-5" }) })
              ] })
            ] }, i)),
            services.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "py-12 text-center text-slate-500 font-medium", children: 'No services added yet. Click "+ Add New Service" to create one.' }) })
          ] })
        ] }) }) })
      ] }) : activeTab === "Offers" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Manage Festival Discounts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-1", children: "Add special offers that pop up on the site." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowOfferModal(true), className: "bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors", children: "+ Add New Offer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-3xl border border-border shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Offer Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Discount Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-border", children: [
            offers.map((offer, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-800", children: offer.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-600 line-clamp-1", children: offer.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: offer.discountCode ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-bold bg-slate-100 px-2 py-1 rounded-md border border-slate-200", children: offer.discountCode }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 text-sm", children: "No code" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${offer.isActive ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-500"}`, children: offer.isActive ? "Active" : "Inactive" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6 text-right space-x-2 whitespace-nowrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEditOfferModal(offer), className: "p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors", title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteOffer(offer.id), className: "p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-5 w-5" }) })
              ] })
            ] }, i)),
            offers.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "py-12 text-center text-slate-500 font-medium", children: 'No offers currently active. Click "+ Add New Offer" to launch a campaign.' }) })
          ] })
        ] }) }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-slate-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-16 w-16 mb-4 opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-slate-600", children: [
          activeTab,
          " Module"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm", children: "This section is currently under development." })
      ] }) }),
      showRevenueModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl w-full max-w-md shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border flex justify-between items-center bg-slate-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl text-slate-800", children: "Log Custom Revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowRevenueModal(false), className: "text-slate-400 hover:text-red-500 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddCustomRevenue, className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Amount (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "number", min: "0", value: newRevenue.amount, onChange: (e) => setNewRevenue({
              ...newRevenue,
              amount: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand font-bold text-lg", placeholder: "5000" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: newRevenue.description, onChange: (e) => setNewRevenue({
              ...newRevenue,
              description: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "e.g. Offline cash payment for CCTV setup" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Payment Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: newRevenue.paymentStatus, onChange: (e) => setNewRevenue({
              ...newRevenue,
              paymentStatus: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand appearance-none font-medium text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Received", children: "Received (Paid)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pending", children: "Pending (Unpaid)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowRevenueModal(false), className: "flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors shadow-md", children: "Save Revenue" })
          ] })
        ] })
      ] }) }),
      showAddModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl w-full max-w-xl shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border flex justify-between items-center bg-slate-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl text-slate-800", children: editingDealerId ? "Edit Dealer Details" : "Add New Dealer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeModal, className: "text-slate-400 hover:text-red-500 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveDealer, className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Business Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: newDealer.name, onChange: (e) => setNewDealer({
                ...newDealer,
                name: e.target.value
              }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "Store Name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Primary Expertise / Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: newDealer.expertise, onChange: (e) => setNewDealer({
                ...newDealer,
                expertise: e.target.value
              }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand appearance-none font-medium text-slate-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CCTV Surveillance", children: "CCTV Surveillance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Smart Home Automation", children: "Smart Home Automation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Home Interior", children: "Home Interior" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Painting Services", children: "Painting Services" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Smart Film Glass", children: "Smart Film Glass" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Electrical Works", children: "Electrical Works" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Contact Person" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: newDealer.contact, onChange: (e) => setNewDealer({
                ...newDealer,
                contact: e.target.value
              }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "Person Name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: newDealer.phone, onChange: (e) => setNewDealer({
                ...newDealer,
                phone: e.target.value
              }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "+91 0000000000" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "City / Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: newDealer.city, onChange: (e) => setNewDealer({
              ...newDealer,
              city: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "Hyderabad" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: closeModal, className: "flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "flex-1 bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors shadow-md", children: editingDealerId ? "Save Changes" : "Save Dealer" })
          ] })
        ] })
      ] }) }),
      showServiceModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl w-full max-w-xl shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border flex justify-between items-center bg-slate-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl text-slate-800", children: editingServiceId ? "Edit Service" : "Add New Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeServiceModal, className: "text-slate-400 hover:text-red-500 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveService, className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Service Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: newService.title, onChange: (e) => setNewService({
              ...newService,
              title: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "e.g. Smart Home Automation setup" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: newService.category, onChange: (e) => setNewService({
              ...newService,
              category: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand appearance-none font-medium text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CCTV Surveillance", children: "CCTV Surveillance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Smart Home Automation", children: "Smart Home Automation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Home Interior", children: "Home Interior" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Painting Services", children: "Painting Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Electrical Works", children: "Electrical Works" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Post/Offer", children: "Post/Offer" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Image URL (Optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: newService.imageUrl, onChange: (e) => setNewService({
              ...newService,
              imageUrl: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "https://example.com/image.png" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, value: newService.description, onChange: (e) => setNewService({
              ...newService,
              description: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand min-h-[100px]", placeholder: "Detailed description of the service..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: closeServiceModal, className: "flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "flex-1 bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors shadow-md", children: editingServiceId ? "Save Changes" : "Publish Service" })
          ] })
        ] })
      ] }) }),
      showOfferModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl w-full max-w-xl shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border flex justify-between items-center bg-slate-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl text-slate-800", children: editingOfferId ? "Edit Festival Discount" : "Add New Discount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeOfferModal, className: "text-slate-400 hover:text-red-500 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveOffer, className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Offer Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: newOffer.title, onChange: (e) => setNewOffer({
              ...newOffer,
              title: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "e.g. Diwali Mega Sale! 50% Off" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Discount Code (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: newOffer.discountCode, onChange: (e) => setNewOffer({
                ...newOffer,
                discountCode: e.target.value
              }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 font-mono focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "DIWALI50" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "isActive", checked: newOffer.isActive, onChange: (e) => setNewOffer({
                ...newOffer,
                isActive: e.target.checked
              }), className: "h-5 w-5 text-brand rounded focus:ring-brand" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "isActive", className: "text-sm font-bold text-slate-700 cursor-pointer", children: "Offer is Active" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Image URL (Optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: newOffer.imageUrl, onChange: (e) => setNewOffer({
              ...newOffer,
              imageUrl: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand", placeholder: "https://example.com/banner.png" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-1", children: "Offer Details / Terms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, value: newOffer.description, onChange: (e) => setNewOffer({
              ...newOffer,
              description: e.target.value
            }), className: "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand min-h-[100px]", placeholder: "Get 50% off on all CCTV installations..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: closeOfferModal, className: "flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "flex-1 bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors shadow-md", children: editingOfferId ? "Save Changes" : "Publish Offer" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  AdminPage as component
};
