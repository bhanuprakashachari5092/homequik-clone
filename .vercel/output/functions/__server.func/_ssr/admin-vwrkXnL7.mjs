import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as db } from "./router-B6YPSv6B.mjs";
import { o as onSnapshot, c as collection, u as updateDoc, d as doc, e as deleteDoc, a as addDoc, s as serverTimestamp } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import "../_libs/firebase__analytics.mjs";
import "../_libs/firebase__auth.mjs";
import "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import "../_libs/firebase__storage.mjs";
import "../_libs/sonner.mjs";
import { m as LayoutDashboard, n as ShoppingCart, o as Users, d as Briefcase, p as Package, G as Gift, q as Activity, r as Settings, c as LogOut, g as Search, s as Bell, D as DollarSign, t as SquarePen, b as CircleX, C as CircleCheck, T as Trash2, f as MapPin } from "../_libs/lucide-react.mjs";
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
const initialBookings = [{
  id: "BKG-8472",
  customerName: "Rahul Sharma",
  phone: "9876500001",
  service: "CCTV Installation",
  city: "Bangalore",
  status: "Completed",
  amount: "₹12,499",
  dealerId: "DLR-101"
}, {
  id: "BKG-8473",
  customerName: "Priya Desai",
  phone: "9876500002",
  service: "Home Painting",
  city: "Mumbai",
  status: "In Progress",
  amount: "₹45,000",
  dealerId: "DLR-102"
}, {
  id: "BKG-8474",
  customerName: "Amit Kumar",
  phone: "9876500003",
  service: "Electrical Wiring",
  city: "Delhi",
  status: "Pending",
  amount: "₹4,200",
  dealerId: null
}, {
  id: "BKG-8475",
  customerName: "Sneha Reddy",
  phone: "9876500004",
  service: "Smart Home Setup",
  city: "Hyderabad",
  status: "Pending",
  amount: "₹85,000",
  dealerId: null
}];
function AdminDashboard({
  onLogout
}) {
  const [activeTab, setActiveTab] = reactExports.useState("Dashboard");
  const [dealers, setDealers] = reactExports.useState([]);
  const [bookings, setBookings] = reactExports.useState([]);
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
  reactExports.useEffect(() => {
    const storedBookings = localStorage.getItem("vendor99_bookings");
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    } else {
      setBookings(initialBookings);
      localStorage.setItem("vendor99_bookings", JSON.stringify(initialBookings));
    }
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
    return () => {
      unsubscribeServices();
      unsubscribeOffers();
      unsubscribeDealers();
    };
  }, []);
  const saveBookings = (updatedBookings) => {
    setBookings(updatedBookings);
    localStorage.setItem("vendor99_bookings", JSON.stringify(updatedBookings));
  };
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
  const openEditModal = (dealer) => {
    setNewDealer({
      name: dealer.name,
      contact: dealer.contact,
      phone: dealer.phone,
      city: dealer.city,
      expertise: dealer.expertise || "CCTV Surveillance"
    });
    setEditingDealerId(dealer.id);
    setShowAddModal(true);
  };
  const updateStatus = async (id, newStatus) => {
    await updateDoc(doc(db, "dealers", id), {
      status: newStatus
    });
  };
  const updatePaymentStatus = async (dealer, newPaymentStatus) => {
    await updateDoc(doc(db, "dealers", dealer.id), {
      paymentStatus: newPaymentStatus,
      status: "Active"
    });
    if (dealer.email) {
      alert(`[SYSTEM MOCK] An automated email has been sent to ${dealer.email} from tekzio2026@gmail.com. It contains their new Dealer ID: ${dealer.id} and login instructions.`);
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this dealer?")) {
      await deleteDoc(doc(db, "dealers", id));
    }
  };
  const assignDealerToBooking = (bookingId, dealerId) => {
    const updated = bookings.map((b) => b.id === bookingId ? {
      ...b,
      dealerId: dealerId === "" ? null : dealerId
    } : b);
    saveBookings(updated);
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative p-2 text-slate-500 hover:text-brand transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-6 w-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1 right-1 w-2.5 h-2.5 bg-brand rounded-full border-2 border-white" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
          label: "Total Revenue",
          value: "₹24.5L",
          trend: "+12.5%",
          isPositive: true,
          icon: DollarSign,
          color: "text-emerald-600",
          bg: "bg-emerald-100"
        }, {
          label: "Active Orders",
          value: bookings.length.toString(),
          trend: "+5.2%",
          isPositive: true,
          icon: ShoppingCart,
          color: "text-brand",
          bg: "bg-brand/20"
        }, {
          label: "Partner Dealers",
          value: dealers.length.toString(),
          trend: "+12",
          isPositive: true,
          icon: Briefcase,
          color: "text-purple-600",
          bg: "bg-purple-100"
        }, {
          label: "Service Completion",
          value: "94%",
          trend: "+1.1%",
          isPositive: true,
          icon: Activity,
          color: "text-blue-600",
          bg: "bg-blue-100"
        }].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-3xl border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-500 mb-1", children: stat.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold text-foreground", children: stat.value })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-2xl ${stat.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: `h-6 w-6 ${stat.color}` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-bold ${stat.isPositive ? "text-emerald-600" : "text-red-500"}`, children: stat.trend }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500", children: "vs last month" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm font-medium text-slate-900", children: row.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm text-slate-600", children: row.customerName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm text-slate-600", children: row.service }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${row.status === "Completed" ? "bg-emerald-100 text-emerald-800" : row.status === "In Progress" ? "bg-brand/20 text-brand" : "bg-amber-100 text-amber-800"}`, children: row.status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm font-bold text-foreground", children: row.amount })
            ] }, i)) })
          ] }) })
        ] })
      ] }) : activeTab === "Dealers" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-slate-800", children: "Dealer Network" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-1", children: "Manage, approve, and edit partner registration requests." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowAddModal(true), className: "bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors", children: "+ Add New Dealer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-3xl border border-border shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-slate-50 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Business Info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Location & Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Payment & UTR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: dealers.map((dealer, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-800", children: dealer.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-brand font-bold bg-brand/10 inline-block px-2 py-0.5 rounded-full mt-1.5", children: dealer.expertise || "CCTV Surveillance" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-slate-700", children: dealer.city }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 mt-0.5", children: [
                dealer.contact,
                " • ",
                dealer.phone
              ] }),
              dealer.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-blue-500 mt-0.5", children: dealer.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono font-bold text-slate-600 mb-1", children: [
                "UTR: ",
                dealer.utrNumber || "N/A"
              ] }),
              dealer.screenshotUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: dealer.screenshotUrl, target: "_blank", rel: "noreferrer", className: "text-xs text-brand hover:underline block mb-1", children: "View Screenshot" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase ${dealer.paymentStatus === "Verified" ? "bg-emerald-100 text-emerald-800" : dealer.paymentStatus === "Rejected" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"}`, children: dealer.paymentStatus || "Manual" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${dealer.status === "Active" ? "bg-emerald-100 text-emerald-800" : dealer.status === "Pending" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-600"}`, children: dealer.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6 text-right space-x-2 whitespace-nowrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openEditModal(dealer), className: "p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors", title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-5 w-5" }) }),
              dealer.paymentStatus === "Pending Verification" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updatePaymentStatus(dealer, "Verified"), className: "px-2 py-1.5 bg-emerald-500 text-white hover:bg-emerald-600 rounded-lg transition-colors text-xs font-bold", title: "Verify Payment", children: "Verify Payment" }),
              dealer.status !== "Inactive" && dealer.paymentStatus === "Verified" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateStatus(dealer.id, "Inactive"), className: "p-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors", title: "Deactivate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5" }) }),
              dealer.status === "Inactive" && dealer.paymentStatus === "Verified" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateStatus(dealer.id, "Active"), className: "p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors", title: "Activate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: bookings.map((booking, i) => {
            dealers.find((d) => d.id === booking.dealerId);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6 text-sm font-bold text-slate-900", children: booking.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-800", children: booking.customerName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 mt-0.5", children: booking.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-4 px-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-slate-700", children: booking.service }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 mt-0.5 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                  " ",
                  booking.city
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${booking.status === "Completed" ? "bg-emerald-100 text-emerald-800" : booking.status === "In Progress" ? "bg-brand/20 text-brand" : "bg-amber-100 text-amber-800"}`, children: booking.status }) })
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
