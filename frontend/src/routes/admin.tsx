import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  LayoutDashboard, Users, User, ShoppingCart, Settings, 
  LogOut, Bell, Search, Activity, DollarSign, Package,
  Briefcase, CheckCircle2, XCircle, Edit, Trash2, MapPin, Gift,
  Download, Menu, X, FileText, Loader2, Eye, EyeOff, Clock
} from "lucide-react";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, getDocs } from "firebase/firestore";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Vendor99" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "santhoshmarketing.com@gmail.com" && password === "#Vendor99*") {
      setShowSuccess(true);
      setError("");
      setTimeout(() => {
        setIsAuthenticated(true);
        setShowSuccess(false);
      }, 1500);
    } else {
      setError("Invalid email or password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-border w-full max-w-md">
          <div className="text-center mb-8">
            <div className="h-12 w-12 bg-brand rounded-2xl flex items-center justify-center font-bold text-white shadow-lg shadow-brand/30 mx-auto mb-4 text-2xl">
              V
            </div>
            <h1 className="text-2xl font-extrabold text-slate-800">Admin Login</h1>
            <p className="text-sm text-slate-500 mt-2">Sign in to access the control panel</p>
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-bold mb-6 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-brand font-medium"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-md mt-4">
              Access Dashboard
            </button>
          </form>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-[2rem] shadow-2xl p-8 max-w-sm w-full text-center space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
                  <CheckCircle2 className="h-10 w-10 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800">Admin Authorized!</h3>
                  <p className="text-slate-500 font-medium mt-2">Entering management control panel...</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />;
}



function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [dealers, setDealers] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [customRevenues, setCustomRevenues] = useState<any[]>([]);
  const [dealerLogins, setDealerLogins] = useState<any[]>([]);
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingDealerId, setEditingDealerId] = useState<string | null>(null);
  const [newDealer, setNewDealer] = useState({ name: "", contact: "", phone: "", city: "", expertise: "CCTV Surveillance" });

  const [services, setServices] = useState<any[]>([]);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [newService, setNewService] = useState({ title: "", description: "", imageUrl: "", category: "CCTV Surveillance" });

  const [offers, setOffers] = useState<any[]>([]);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [editingOfferId, setEditingOfferId] = useState<string | null>(null);
  const [newOffer, setNewOffer] = useState({ 
    title: "", description: "", discountCode: "", imageUrl: "", 
    isActive: true, themeColor: "#f97316", validityEnd: "", 
    imageSize: "h-32 object-cover", targetCategory: "CCTV Cameras", 
    discountType: "percentage", discountValue: 10 
  });

  const [showRevenueModal, setShowRevenueModal] = useState(false);
  const [newRevenue, setNewRevenue] = useState({ amount: "", description: "", paymentStatus: "Received" });

  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [selectedDealer, setSelectedDealer] = useState<any>(null);
  const [showDealerModal, setShowDealerModal] = useState(false);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notificationsClearedAt, setNotificationsClearedAt] = useState<number>(() => {
    return Number(localStorage.getItem('adminNotificationsClearedAt') || '0');
  });

  const [isDownloading, setIsDownloading] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const unsubscribeBookings = onSnapshot(collection(db, "bookings"), (snapshot) => {
       const bks: any[] = [];
       snapshot.forEach(d => bks.push({ id: d.id, ...d.data() }));
       setBookings(bks);
    });

    const unsubscribeServices = onSnapshot(collection(db, "services"), (snapshot) => {
       const svcs: any[] = [];
       snapshot.forEach(d => svcs.push({ id: d.id, ...d.data() }));
       setServices(svcs);
    });

    const unsubscribeOffers = onSnapshot(collection(db, "offers"), (snapshot) => {
       const offs: any[] = [];
       snapshot.forEach(d => offs.push({ id: d.id, ...d.data() }));
       setOffers(offs);
    });

    const unsubscribeDealers = onSnapshot(collection(db, "dealers"), (snapshot) => {
       const dlrs: any[] = [];
       snapshot.forEach(d => dlrs.push({ id: d.id, ...d.data() }));
       setDealers(dlrs);
    });

    const unsubscribeRevenue = onSnapshot(collection(db, "custom_revenues"), (snapshot) => {
       const revs: any[] = [];
       snapshot.forEach(d => revs.push({ id: d.id, ...d.data() }));
       setCustomRevenues(revs);
    });

    const unsubscribeDealerLogins = onSnapshot(collection(db, "dealer_logins"), (snapshot) => {
       const logins: any[] = [];
       snapshot.forEach(d => logins.push({ id: d.id, ...d.data() }));
       setDealerLogins(logins);
    });

    return () => {
      unsubscribeBookings();
      unsubscribeServices();
      unsubscribeOffers();
      unsubscribeDealers();
      unsubscribeRevenue();
      unsubscribeDealerLogins();
    };
  }, []);

  const handleSaveDealer = async (e: React.FormEvent) => {
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
    setNewDealer({ name: "", contact: "", phone: "", city: "", expertise: "CCTV Surveillance" });
  };

  const openEditModal = (dealer: any) => {
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

  const updateStatus = async (id: string, newStatus: string) => {
    await updateDoc(doc(db, "dealers", id), { status: newStatus });
  };

  const updatePaymentStatus = async (dealer: any, newPaymentStatus: string) => {
    await updateDoc(doc(db, "dealers", dealer.id), { 
      paymentStatus: newPaymentStatus,
      status: newPaymentStatus === "Verified" ? "Active" : "Pending"
    });

    if (newPaymentStatus === "Verified" && dealer.email) {
       // In a real production app, this would trigger a Cloud Function to send an email via SendGrid/AWS SES.
       // For this prototype, we simulate the email sending.
       alert(`[SYSTEM MOCK] An automated email has been sent to ${dealer.email} from tekzio2026@gmail.com. It contains their new Dealer ID: ${dealer.id} and login instructions.`);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this dealer?")) {
      await deleteDoc(doc(db, "dealers", id));
    }
  };

  const assignDealerToBooking = async (bookingId: string, dealerId: string) => {
    try {
      await updateDoc(doc(db, "bookings", bookingId), { dealerId: dealerId === "" ? null : dealerId });
    } catch (e) {
      console.error("Failed to assign dealer:", e);
    }
  };

  const updateBookingPaymentStatus = async (bookingId: string, newPaymentStatus: string) => {
    try {
      const updateData: any = { paymentStatus: newPaymentStatus };
      if (newPaymentStatus === "Paid") {
        updateData.status = "Completed";
        updateData.paidAt = Date.now();
      } else if (newPaymentStatus === "Pending") {
        updateData.status = "Pending";
        updateData.paidAt = null;
      }
      await updateDoc(doc(db, "bookings", bookingId), updateData);
    } catch (e) {
      console.error("Failed to update booking payment status:", e);
    }
  };

  const handleDeleteBooking = async (bookingId: string) => {
    if (window.confirm("Are you sure you want to delete this customer booking?")) {
      try {
        // 1. Delete from Firebase
        await deleteDoc(doc(db, "bookings", bookingId));
        
        // 2. Delete from Google Sheets
        await fetch("https://script.google.com/macros/s/AKfycbxcEHZaSWkogoxOp6PNL0VhLVTNw0X11YEDekRNmCFobqWhL5V4HfMaB9SKTay6DXkK/exec", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "delete",
            bookingId: bookingId
          }),
        });
        console.log("Sent delete request to Google Sheets");
      } catch (err) {
        console.error("Error deleting booking:", err);
        alert("Failed to delete booking.");
      }
    }
  };

  const downloadDealersPDF = async () => {
    setIsDownloading(prev => ({ ...prev, dealers: true }));
    try {
      if (!dealers || dealers.length === 0) {
        alert("No dealer data available to download.");
        return;
      }

      const doc = new jsPDF();
      doc.text("Vendor99 Dealer Network", 14, 15);
      
      const tableColumn = ["ID", "Business Name", "Contact Person", "Phone", "City", "Plan", "Status"];
      const tableRows: any[][] = [];

      dealers.forEach(dealer => {
        const dealerData = [
          dealer.id,
          dealer.businessName || dealer.name || "N/A",
          dealer.ownerName || dealer.contact || "N/A",
          dealer.phone || "N/A",
          dealer.city || "N/A",
          dealer.plan || "Basic",
          dealer.status || "Pending"
        ];
        tableRows.push(dealerData);
      });

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 20,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [249, 115, 22] } // Brand color
      });

      doc.save(`Vendor99_Dealers_${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (err) {
      console.error("Failed to generate dealers PDF:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(prev => ({ ...prev, dealers: false }));
    }
  };

  const downloadCustomersPDF = async () => {
    setIsDownloading(prev => ({ ...prev, customers: true }));
    try {
      if (!bookings || bookings.length === 0) {
        alert("No customer data available to download.");
        return;
      }

      const doc = new jsPDF();
      doc.text("Vendor99 Customer List", 14, 15);
      
      const tableColumn = ["ID", "Name", "Phone", "City", "Service"];
      const tableRows: any[][] = [];

      bookings.forEach(b => {
        tableRows.push([
          b.bookingId || b.id || "N/A",
          b.customerName || "N/A",
          b.customerPhone || b.phone || "N/A",
          b.customerAddress || b.city || "N/A",
          b.serviceName || b.service || "N/A"
        ]);
      });

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 20,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [249, 115, 22] }
      });

      doc.save(`Vendor99_Customers_${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (err) {
      console.error("Failed to generate customers PDF:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(prev => ({ ...prev, customers: false }));
    }
  };

  const downloadBookingsPDF = async () => {
    setIsDownloading(prev => ({ ...prev, bookings: true }));
    try {
      if (!bookings || bookings.length === 0) {
        alert("No booking data available to download.");
        return;
      }

      const doc = new jsPDF();
      doc.text("Vendor99 Bookings List", 14, 15);
      
      const tableColumn = ["Booking ID", "Customer", "Service", "Status", "Amount", "Dealer Assigned", "Payment Status"];
      const tableRows: any[][] = [];

      bookings.forEach(b => {
        const assignedDealer = dealers.find(d => d.id === b.dealerId);
        tableRows.push([
          b.bookingId || b.id || "N/A",
          b.customerName || b.name || "N/A",
          b.serviceName || b.service || "N/A",
          b.status || "Pending",
          b.amount || "N/A",
          assignedDealer ? assignedDealer.name || assignedDealer.businessName || "Assigned" : "Unassigned",
          b.paymentStatus || "Pending"
        ]);
      });

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 20,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [249, 115, 22] }
      });

      doc.save(`Vendor99_Bookings_${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (err) {
      console.error("Failed to generate bookings PDF:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(prev => ({ ...prev, bookings: false }));
    }
  };

  const convertDriveLink = (url: string) => {
    if (!url) return url;
    try {
      const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
      }
    } catch (e) {
      console.error("Error parsing Drive link:", e);
    }
    return url;
  };

  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const serviceDataToSave = {
        ...newService,
        imageUrl: convertDriveLink(newService.imageUrl)
      };

      if (editingServiceId) {
        await updateDoc(doc(db, "services", editingServiceId), serviceDataToSave);
      } else {
        await addDoc(collection(db, "services"), {
          ...serviceDataToSave,
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
    setNewService({ title: "", description: "", imageUrl: "", category: "CCTV Surveillance" });
  };

  const openEditServiceModal = (service: any) => {
    setNewService({ 
      title: service.title, 
      description: service.description, 
      imageUrl: service.imageUrl || "", 
      category: service.category || "CCTV Surveillance" 
    });
    setEditingServiceId(service.id);
    setShowServiceModal(true);
  };

  const handleDeleteService = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteDoc(doc(db, "services", id));
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  const handleSaveOffer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const offerDataToSave = {
        ...newOffer,
        imageUrl: convertDriveLink(newOffer.imageUrl)
      };

      if (editingOfferId) {
        await updateDoc(doc(db, "offers", editingOfferId), offerDataToSave);
      } else {
        await addDoc(collection(db, "offers"), {
          ...offerDataToSave,
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
      title: "", description: "", discountCode: "", imageUrl: "", 
      isActive: true, themeColor: "#f97316", validityEnd: "", 
      imageSize: "h-32 object-cover", targetCategory: "CCTV Cameras", 
      discountType: "percentage", discountValue: 10 
    });
  };

  const openEditOfferModal = (offer: any) => {
    setNewOffer({ 
      title: offer.title, 
      description: offer.description, 
      discountCode: offer.discountCode || "",
      imageUrl: offer.imageUrl || "", 
      isActive: offer.isActive !== undefined ? offer.isActive : true,
      themeColor: offer.themeColor || "#f97316",
      validityEnd: offer.validityEnd || "",
      imageSize: offer.imageSize || "h-32 object-cover",
      targetCategory: offer.targetCategory || "CCTV Cameras",
      discountType: offer.discountType || "percentage",
      discountValue: offer.discountValue || 10
    });
    setEditingOfferId(offer.id);
    setShowOfferModal(true);
  };

  const handleDeleteOffer = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        await deleteDoc(doc(db, "offers", id));
      } catch (error) {
        console.error("Error deleting offer:", error);
      }
    }
  };

  const handleAddCustomRevenue = async (e: React.FormEvent) => {
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
      setNewRevenue({ amount: "", description: "", paymentStatus: "Received" });
    } catch (err) {
      console.error("Failed to add custom revenue:", err);
    }
  };

  const handleResetStats = async () => {
    if (window.confirm("Are you sure you want to reset the financial overview statistics? This will permanently delete all custom revenues from the database.")) {
      try {
        const customSnapshot = await getDocs(collection(db, "custom_revenues"));
        const customDeletePromises = customSnapshot.docs.map(d => deleteDoc(doc(db, "custom_revenues", d.id)));
        
        await Promise.all(customDeletePromises);
        
        alert("Financial overview statistics successfully reset!");
      } catch (error) {
        console.error("Failed to reset statistics:", error);
        alert("Failed to reset statistics. Please try again.");
      }
    }
  };

  const dealerRevenue = dealers.reduce((acc, d) => acc + (Number(d.amount) || 4999), 0);
  const bookingRevenue = bookings.reduce((acc, b) => acc + (Number(b.numericAmount) || 0), 0);
  const customRevTotal = customRevenues.reduce((acc, c) => acc + (Number(c.amount) || 0), 0);
  
  const expectedRevenue = bookingRevenue + customRevTotal;
  
  const receivedBookingRev = bookings.filter(b => b.paymentStatus === 'Paid').reduce((acc, b) => acc + (Number(b.numericAmount) || 0), 0);
  const receivedCustomRev = customRevenues.filter(c => c.paymentStatus === 'Received').reduce((acc, c) => acc + (Number(c.amount) || 0), 0);
  const receivedDealerRev = dealers.filter(d => d.paymentStatus === 'Verified').reduce((acc, d) => acc + (Number(d.amount) || 4999), 0);
  
  const receivedRevenue = receivedBookingRev + receivedCustomRev;
  
  const remainingRevenue = expectedRevenue - receivedRevenue;

  const totalRevNum = expectedRevenue; // keeping for backward compatibility if used elsewhere

  const formatCurrency = (val: number) => {
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)}L`;
    return `₹${val.toLocaleString('en-IN')}`;
  };
  const activeOrdersCount = bookings.filter(b => b.status !== "Completed" && b.status !== "Cancelled").length;
  const completedOrdersCount = bookings.filter(b => b.status === "Completed").length;
  const completionRate = bookings.length > 0 ? Math.round((completedOrdersCount / bookings.length) * 100) : 0;

  // Unified Notifications Logic
  const allNotifications = [
    ...dealers.map(d => {
       // Using Firebase timestamp or fallback
       let timeMs = Date.now();
       if (d.createdAt?.toMillis) timeMs = d.createdAt.toMillis();
       else if (d.paymentDate) timeMs = new Date(d.paymentDate).getTime();
       
       return {
         id: d.id,
         type: 'dealer',
         message: `New Partner Registered: ${d.businessName || d.name} joined the ${d.plan || 'Starter Plan'}`,
         timeMs: timeMs
       };
    }),
    ...bookings.map(b => {
       let timeMs = Date.now();
       if (b.createdAt?.toMillis) timeMs = b.createdAt.toMillis();
       else if (b.bookingDate) timeMs = new Date(b.bookingDate).getTime();

       return {
         id: b.id || b.bookingId,
         type: 'booking',
         message: `New Service Request: ${b.customerName} booked ${b.serviceName || b.service}`,
         timeMs: timeMs
       };
    }),
    ...dealerLogins.map(l => {
       let timeMs = Date.now();
       if (l.createdAt?.toMillis) timeMs = l.createdAt.toMillis();
       else if (l.loginTime?.toMillis) timeMs = l.loginTime.toMillis();
       
       return {
         id: l.id,
         type: 'login',
         message: `Partner Login: ${l.dealerName} (${l.dealerId}) logged in from ${l.location || 'Unknown Location'}`,
         timeMs: timeMs
       };
    })
  ];

  const notifications = allNotifications
    .filter(n => n.timeMs > notificationsClearedAt)
    .sort((a, b) => b.timeMs - a.timeMs);

  const handleClearNotifications = () => {
    const now = Date.now();
    setNotificationsClearedAt(now);
    localStorage.setItem('adminNotificationsClearedAt', now.toString());
    setIsNotificationsOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border hidden md:flex flex-col">
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-brand rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-brand/30">
              V
            </div>
            <span className="font-extrabold text-xl tracking-tight text-foreground">Admin<span className="text-brand">Panel</span></span>
          </Link>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: "Dashboard" },
            { icon: Users, label: "Customers" },
            { icon: Briefcase, label: "Dealers" },
            { icon: Gift, label: "Offers" },
            { icon: Activity, label: "Analytics" }
          ].map((item) => (
            <button 
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === item.label 
                  ? "bg-brand/10 text-brand font-bold" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <item.icon className={`h-5 w-5 ${activeTab === item.label ? "text-brand" : ""}`} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Removed Sign Out from sidebar bottom */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-border flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center gap-3 flex-1">
            <button 
              className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              {isMobileNavOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">{activeTab}</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} 
                className={`relative p-2 transition-colors rounded-full ${isNotificationsOpen ? 'bg-slate-100 text-brand' : 'text-slate-500 hover:text-brand hover:bg-slate-50'}`}
              >
                <Bell className="h-6 w-6" />
                {notifications.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                )}
              </button>
              
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-2xl shadow-xl border border-border overflow-hidden z-50 flex flex-col max-h-[80vh]">
                  <div className="p-4 border-b border-border flex justify-between items-center bg-slate-50 shrink-0">
                    <h3 className="font-bold text-slate-800">Notifications</h3>
                    <button 
                      onClick={handleClearNotifications}
                      className="text-xs font-bold text-brand hover:text-brand-dark px-2 py-1 bg-brand/10 rounded-lg transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="overflow-y-auto flex-1">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center text-slate-500 flex flex-col items-center">
                        <CheckCircle2 className="h-10 w-10 text-slate-300 mb-2" />
                        <p className="font-medium text-sm">You're all caught up!</p>
                      </div>
                    ) : (
                      <div className="divide-y divide-border">
                        {notifications.map((n, i) => (
                          <div key={`${n.id}-${i}`} className="p-4 hover:bg-slate-50 transition-colors flex gap-3 items-start">
                            <div className={`mt-0.5 p-2 rounded-full shrink-0 ${
                              n.type === 'dealer' ? 'bg-purple-100 text-purple-600' : 
                              n.type === 'login' ? 'bg-emerald-100 text-emerald-600' : 
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {n.type === 'dealer' ? <Briefcase className="h-4 w-4" /> : 
                               n.type === 'login' ? <MapPin className="h-4 w-4" /> : 
                               <User className="h-4 w-4" />}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-800 leading-snug">{n.message}</p>
                              <p className="text-xs text-slate-400 mt-1">
                                {new Date(n.timeMs).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 md:border-r md:border-slate-200 md:pr-4">
                <div className="h-10 w-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center overflow-hidden shrink-0">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=f8fafc" alt="Admin" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-bold text-foreground">Super Admin</p>
                  <p className="text-xs text-slate-500">santhoshmarketing.com@gmail.com</p>
                </div>
              </div>
              <button 
                onClick={onLogout} 
                className="flex items-center gap-2 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold text-sm transition-all"
                title="Sign Out"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden md:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {isMobileNavOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border z-40 shadow-lg">
            <div className="flex flex-col p-4 space-y-2">
              {[
                { icon: LayoutDashboard, label: "Dashboard" },
                { icon: Users, label: "Customers" },
                { icon: Briefcase, label: "Dealers" },
                { icon: Gift, label: "Offers" },
                { icon: Activity, label: "Analytics" }
              ].map((item) => (
                <button 
                  key={item.label}
                  onClick={() => { setActiveTab(item.label); setIsMobileNavOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    activeTab === item.label 
                      ? "bg-brand/10 text-brand font-bold" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${activeTab === item.label ? "text-brand" : ""}`} />
                  {item.label}
                </button>
              ))}
              <div className="w-full h-px bg-border my-2"></div>
              <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all">
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        )}

        {/* Dashboard Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeTab === "Dashboard" ? (
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                <h2 className="text-xl font-bold text-slate-800">Financial Overview</h2>
                <div className="flex items-center gap-3">
                  <button onClick={handleResetStats} className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl font-bold transition-colors border border-red-200 text-sm">
                    Reset Statistics
                  </button>
                  <button onClick={() => setShowRevenueModal(true)} className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors text-sm">
                    + Log Custom Revenue
                  </button>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Expected Revenue", value: formatCurrency(expectedRevenue), trend: "Projected", isPositive: true, icon: Activity, color: "text-blue-600", bg: "bg-blue-100" },
                  { label: "Received Revenue", value: formatCurrency(receivedRevenue), trend: "Verified", isPositive: true, icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-100" },
                  { label: "Remaining Revenue", value: formatCurrency(remainingRevenue), trend: "Pending", isPositive: false, icon: DollarSign, color: "text-amber-600", bg: "bg-amber-100" },
                  { label: "Partner Dealers", value: dealers.length.toString(), trend: "Real-time", isPositive: true, icon: Briefcase, color: "text-purple-600", bg: "bg-purple-100" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-500 mb-1">{stat.label}</p>
                        <h3 className="text-3xl font-extrabold text-foreground">{stat.value}</h3>
                      </div>
                      <div className={`p-3 rounded-2xl ${stat.bg}`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className={`text-sm font-bold ${stat.isPositive ? 'text-emerald-600' : 'text-amber-500'}`}>
                        {stat.trend}
                      </span>
                      <span className="text-sm text-slate-500">Live DB Match</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity Table */}
              <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">Recent Bookings</h3>
                  <button onClick={() => setActiveTab('Customers')} className="text-sm font-bold text-brand hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border">
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Order ID</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Service</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {bookings.slice(0, 4).map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 text-sm font-medium text-slate-900">{row.bookingId || row.id}</td>
                          <td className="py-4 px-6 text-sm text-slate-600">{row.customerName}</td>
                          <td className="py-4 px-6 text-sm text-slate-600">{row.serviceName || row.service}</td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                              row.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                              row.status === 'In Progress' ? 'bg-brand/20 text-brand' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm font-bold text-foreground">{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : activeTab === "Dealers" ? (
            <div className="max-w-7xl mx-auto space-y-6">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-2xl font-bold text-slate-800">Dealer Network</h2>
                     <p className="text-slate-500 mt-1">Manage paid partner registrations and subscriptions.</p>
                  </div>
                  <div className="flex gap-3">
                     <button onClick={() => downloadDealersPDF()} className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-xl font-bold transition-colors shadow-sm flex items-center gap-2">
                        <Download className="h-4 w-4" /> Export PDF
                     </button>
                     <button onClick={() => setShowAddModal(true)} className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors">
                        + Add New Dealer
                     </button>
                  </div>
               </div>
               
               {/* Dashboard Cards for Dealers */}
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total</p>
                     <p className="text-2xl font-black text-slate-800">{dealers.length}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                     <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Active</p>
                     <p className="text-2xl font-black text-slate-800">{dealers.filter(d => d.status === 'Active').length}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                     <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Pending</p>
                     <p className="text-2xl font-black text-slate-800">{dealers.filter(d => d.status === 'Pending').length}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                     <p className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Premium</p>
                     <p className="text-2xl font-black text-slate-800">{dealers.filter(d => d.plan === 'Premium Plan' || d.plan === 'Premium Dealer').length}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                     <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Monthly Rev</p>
                     <p className="text-2xl font-black text-slate-800">₹{dealers.reduce((acc, d) => acc + (Number(d.amount) || 4999), 0)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                     <p className="text-xs font-bold text-brand uppercase tracking-wider mb-1">Total Rev</p>
                     <p className="text-2xl font-black text-slate-800">₹{dealers.reduce((acc, d) => acc + (Number(d.amount) || 4999), 0)}</p>
                  </div>
               </div>

               {/* Filters */}
               <div className="flex flex-wrap gap-4 mb-4">
                  <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-brand">
                     <option value="All">All Categories</option>
                     <option value="CCTV & Security Solutions">CCTV & Security</option>
                     <option value="Home Construction">Home Construction</option>
                     <option value="Interior Design">Interior Design</option>
                  </select>
                  <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-brand">
                     <option value="All">All Plans</option>
                     <option value="Starter Plan">Starter Plan</option>
                     <option value="Growth Plan">Growth Plan</option>
                     <option value="Premium Plan">Premium Plan</option>
                  </select>
                  <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-brand">
                     <option value="All">All Statuses</option>
                     <option value="Active">Active</option>
                     <option value="Pending">Pending</option>
                     <option value="Suspended">Suspended</option>
                  </select>
               </div>
               
               <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border">
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Dealer ID</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Business Info</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Plan & Payment</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {dealers.map((dealer, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => { setSelectedDealer(dealer); setShowDealerModal(true); }}>
                          <td className="py-4 px-6">
                             <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-lg select-all">
                                {dealer.id}
                             </span>
                          </td>
                          <td className="py-4 px-6">
                             <div className="font-bold text-slate-800">{dealer.businessName || dealer.name}</div>
                             <div className="text-xs text-brand font-bold bg-brand/10 inline-block px-2 py-0.5 rounded-full mt-1.5">{dealer.category || dealer.expertise || 'CCTV Surveillance'}</div>
                             <div className="text-xs text-slate-500 mt-1">{dealer.experience || '0-2 Years'} Experience</div>
                          </td>
                          <td className="py-4 px-6">
                             <div className="text-sm font-bold text-slate-700">{dealer.city}</div>
                             <div className="text-xs text-slate-500 mt-0.5">{dealer.ownerName || dealer.contact} • {dealer.phone}</div>
                             {dealer.email && <div className="text-xs text-blue-500 mt-0.5">{dealer.email}</div>}
                          </td>
                          <td className="py-4 px-6">
                             <div className="text-sm font-bold text-slate-800 mb-1">{dealer.plan || 'Starter Plan'} (₹{dealer.amount || '4999'})</div>
                             <div className="text-[10px] font-mono text-slate-500">TXN: {dealer.transactionId || 'N/A'}</div>
                             <div className="text-[10px] font-mono text-slate-500">ORD: {dealer.orderId || 'N/A'}</div>
                          </td>
                          <td className="py-4 px-6">
                             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                               dealer.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                               dealer.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                               dealer.status === 'Suspended' ? 'bg-rose-100 text-rose-800' :
                               'bg-slate-100 text-slate-600'
                             }`}>
                               {dealer.status || 'Pending'}
                             </span>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                             {dealer.status !== 'Suspended' && (
                                <button onClick={(e) => { e.stopPropagation(); updateStatus(dealer.id, 'Suspended'); }} className="p-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors" title="Suspend">
                                   <XCircle className="h-5 w-5" />
                                </button>
                             )}
                             {dealer.status === 'Suspended' && (
                                <button onClick={(e) => { e.stopPropagation(); updateStatus(dealer.id, 'Active'); }} className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors" title="Activate">
                                   <CheckCircle2 className="h-5 w-5" />
                                </button>
                             )}
                             <button onClick={(e) => { e.stopPropagation(); handleDelete(dealer.id); }} className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                                <Trash2 className="h-5 w-5" />
                             </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
               </div>

               {/* Dealer Login History */}
               <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden mt-8">
                 <div className="p-6 border-b border-border flex items-center justify-between bg-slate-50">
                    <div>
                       <h3 className="text-lg font-bold text-foreground">Dealer Login History</h3>
                       <p className="text-xs text-slate-500 mt-0.5">Real-time tracker of active dealer sessions and login locations.</p>
                    </div>
                 </div>
                 <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                       <tr className="bg-slate-50 border-b border-border">
                         <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Dealer ID</th>
                         <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Dealer Name</th>
                         <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Login Time</th>
                         <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Login Location</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-border">
                       {dealerLogins.length === 0 ? (
                         <tr>
                           <td colSpan={4} className="py-8 text-center text-slate-500 font-medium">No dealer login logs found.</td>
                         </tr>
                       ) : (
                         [...dealerLogins]
                           .sort((a, b) => {
                             const aTime = a.createdAt?.toMillis ? a.createdAt.toMillis() : (a.loginTime?.toMillis ? a.loginTime.toMillis() : 0);
                             const bTime = b.createdAt?.toMillis ? b.createdAt.toMillis() : (b.loginTime?.toMillis ? b.loginTime.toMillis() : 0);
                             return bTime - aTime;
                           })
                           .map((log, i) => (
                             <tr key={i} className="hover:bg-slate-50 transition-colors">
                               <td className="py-4 px-6">
                                 <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-lg select-all">
                                   {log.dealerId}
                                 </span>
                               </td>
                               <td className="py-4 px-6 font-bold text-slate-800">{log.dealerName}</td>
                               <td className="py-4 px-6 text-sm text-slate-600">
                                 {log.createdAt?.toMillis 
                                   ? new Date(log.createdAt.toMillis()).toLocaleString() 
                                   : log.loginTime?.toMillis 
                                     ? new Date(log.loginTime.toMillis()).toLocaleString() 
                                     : "N/A"}
                               </td>
                               <td className="py-4 px-6 text-sm text-slate-600">
                                 <span className="inline-flex items-center gap-1">
                                   <MapPin className="h-4 w-4 text-brand shrink-0" />
                                   {log.location || "Unknown Location"}
                                 </span>
                               </td>
                             </tr>
                           ))
                       )}
                     </tbody>
                   </table>
                 </div>
               </div>
            </div>
          ) : activeTab === "Customers" ? (
            <div className="max-w-7xl mx-auto space-y-6">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-2xl font-bold text-slate-800">Customer Bookings</h2>
                     <p className="text-slate-500 mt-1">Assign customers to dealers and manage their bookings.</p>
                  </div>
               </div>
               
               <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border">
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Booking ID</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer Info</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Service Request</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Assigned Dealer</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Payment</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {bookings.map((booking, i) => {
                         const assignedDealer = dealers.find(d => d.id === booking.dealerId);
                         return (
                        <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => { setSelectedCustomer(booking); setShowCustomerModal(true); }}>
                          <td className="py-4 px-6 text-sm font-bold text-slate-900">{booking.bookingId || booking.id}</td>
                          <td className="py-4 px-6">
                             <div className="font-bold text-slate-800">{booking.customerName}</div>
                             <div className="text-xs text-slate-500 mt-0.5">{booking.customerPhone || booking.phone}</div>
                          </td>
                          <td className="py-4 px-6">
                             <div className="text-sm font-medium text-slate-700">{booking.serviceName || booking.service}</div>
                             <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1"><MapPin className="h-3 w-3"/> {booking.customerAddress || booking.city}</div>
                          </td>
                          <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                             <select 
                                value={booking.dealerId || ""}
                                onChange={(e) => assignDealerToBooking(booking.id, e.target.value)}
                                className={`text-sm border rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand ${booking.dealerId ? 'border-brand/30 bg-brand/5 font-medium text-brand' : 'border-slate-200 bg-slate-50 text-slate-500'}`}
                             >
                                <option value="">-- Unassigned --</option>
                                {dealers.filter(d => d.status === 'Active').map(d => (
                                   <option key={d.id} value={d.id}>{d.name} ({d.city})</option>
                                ))}
                             </select>
                          </td>
                          <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                              booking.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                              booking.status === 'In Progress' ? 'bg-brand/20 text-brand' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                             {(() => {
                               const isLocked = booking.paymentStatus === 'Paid' && booking.paidAt && (Date.now() - booking.paidAt > 10 * 60 * 1000);
                               return (
                                 <select 
                                    value={booking.paymentStatus || "Pending"}
                                    onChange={(e) => updateBookingPaymentStatus(booking.id, e.target.value)}
                                    disabled={isLocked}
                                    className={`text-sm border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand font-bold ${booking.paymentStatus === 'Paid' ? 'border-emerald-200 bg-emerald-50 text-emerald-600' : 'border-amber-200 bg-amber-50 text-amber-600'} ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    title={isLocked ? "Payment status locked (10 mins passed since payment)" : ""}
                                 >
                                    <option value="Pending">Pending</option>
                                    <option value="Paid">Paid</option>
                                 </select>
                               );
                             })()}
                          </td>
                          <td className="py-4 px-6 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                             <button onClick={() => handleDeleteBooking(booking.id)} className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Delete Booking">
                                <Trash2 className="h-5 w-5" />
                             </button>
                          </td>
                        </tr>
                      )})}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : activeTab === "Offers" ? (
            <div className="max-w-7xl mx-auto space-y-6">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-2xl font-bold text-slate-800">Manage Festival Discounts</h2>
                     <p className="text-slate-500 mt-1">Add special offers that pop up on the site.</p>
                  </div>
                  <button onClick={() => setShowOfferModal(true)} className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors">
                     + Add New Offer
                  </button>
               </div>
               
               <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border">
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Offer Title</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Discount Code</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {offers.map((offer, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6">
                             <div className="font-bold text-slate-800">{offer.title}</div>
                             <div className="text-sm text-slate-600 line-clamp-1">{offer.description}</div>
                          </td>
                          <td className="py-4 px-6">
                             {offer.discountCode ? (
                               <span className="font-mono text-sm font-bold bg-slate-100 px-2 py-1 rounded-md border border-slate-200">{offer.discountCode}</span>
                             ) : <span className="text-slate-400 text-sm">No code</span>}
                          </td>
                          <td className="py-4 px-6">
                             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                               offer.isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                             }`}>
                               {offer.isActive ? 'Active' : 'Inactive'}
                             </span>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                             <button onClick={() => openEditOfferModal(offer)} className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Edit">
                                <Edit className="h-5 w-5" />
                             </button>
                             <button onClick={() => handleDeleteOffer(offer.id)} className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                                <Trash2 className="h-5 w-5" />
                             </button>
                          </td>
                        </tr>
                      ))}
                      {offers.length === 0 && (
                        <tr>
                           <td colSpan={4} className="py-12 text-center text-slate-500 font-medium">No offers currently active. Click "+ Add New Offer" to launch a campaign.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : activeTab === "Analytics" ? (
            <div className="max-w-7xl mx-auto space-y-6">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-2xl font-bold text-slate-800">Reports & Analytics</h2>
                     <p className="text-slate-500 mt-1">Download your business data reports professionally.</p>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-3xl p-6 border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                     <div>
                        <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                           <Briefcase className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Dealer Network Report</h3>
                        <p className="text-sm text-slate-500 mt-2">Comprehensive list of all registered dealers, their plans, and statuses.</p>
                     </div>
                     <button disabled={isDownloading.dealers} onClick={downloadDealersPDF} className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {isDownloading.dealers ? <><Loader2 className="h-4 w-4 animate-spin" /> Fetching...</> : <><Download className="h-4 w-4" /> Download PDF</>}
                     </button>
                  </div>

                  <div className="bg-white rounded-3xl p-6 border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                     <div>
                        <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                           <Users className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Customers Directory</h3>
                        <p className="text-sm text-slate-500 mt-2">Database of all customers who have booked services through the platform.</p>
                     </div>
                     <button disabled={isDownloading.customers} onClick={downloadCustomersPDF} className="mt-6 w-full flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {isDownloading.customers ? <><Loader2 className="h-4 w-4 animate-spin" /> Fetching...</> : <><Download className="h-4 w-4" /> Download PDF</>}
                     </button>
                  </div>

                  <div className="bg-white rounded-3xl p-6 border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                     <div>
                        <div className="h-12 w-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                           <FileText className="h-6 w-6 text-brand" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Bookings & Orders</h3>
                        <p className="text-sm text-slate-500 mt-2">Detailed log of all service requests, assigned dealers, and payment statuses.</p>
                     </div>
                     <button disabled={isDownloading.bookings} onClick={downloadBookingsPDF} className="mt-6 w-full flex items-center justify-center gap-2 bg-brand/10 hover:bg-brand/20 text-brand font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {isDownloading.bookings ? <><Loader2 className="h-4 w-4 animate-spin" /> Fetching...</> : <><Download className="h-4 w-4" /> Download PDF</>}
                     </button>
                  </div>
               </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <Package className="h-16 w-16 mb-4 opacity-20" />
              <h2 className="text-2xl font-bold text-slate-600">{activeTab} Module</h2>
              <p className="mt-2 text-sm">This section is currently under development.</p>
            </div>
          )}
        </div>

        {/* Log Custom Revenue Modal */}
        {showRevenueModal && (
           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl w-full max-w-md shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
                 <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50 shrink-0">
                    <h3 className="font-bold text-xl text-slate-800">
                       Log Custom Revenue
                    </h3>
                    <button onClick={() => setShowRevenueModal(false)} className="text-slate-400 hover:text-red-500 transition-colors">
                       <XCircle className="h-6 w-6" />
                    </button>
                 </div>
                 <form onSubmit={handleAddCustomRevenue} className="p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                    <div>
                       <label className="text-sm font-bold text-slate-700 block mb-1">Amount (₹)</label>
                       <input required type="number" min="0" value={newRevenue.amount} onChange={(e) => setNewRevenue({...newRevenue, amount: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand font-bold text-lg" placeholder="5000" />
                    </div>
                    <div>
                       <label className="text-sm font-bold text-slate-700 block mb-1">Description</label>
                       <input required type="text" value={newRevenue.description} onChange={(e) => setNewRevenue({...newRevenue, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="e.g. Offline cash payment for CCTV setup" />
                    </div>
                    <div>
                       <label className="text-sm font-bold text-slate-700 block mb-1">Payment Status</label>
                       <select required value={newRevenue.paymentStatus} onChange={(e) => setNewRevenue({...newRevenue, paymentStatus: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand appearance-none font-medium text-slate-700">
                          <option value="Received">Received (Paid)</option>
                          <option value="Pending">Pending (Unpaid)</option>
                       </select>
                    </div>
                    <div className="pt-4 flex gap-4">
                       <button type="button" onClick={() => setShowRevenueModal(false)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors">Cancel</button>
                       <button type="submit" className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors shadow-md">
                          Save Revenue
                       </button>
                    </div>
                 </form>
              </div>
           </div>
        )}

        {/* Customer Details Modal */}
        {showCustomerModal && selectedCustomer && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-lg shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
               <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50 shrink-0">
                  <h3 className="font-bold text-xl text-slate-800">
                     Customer Details
                  </h3>
                  <button onClick={() => setShowCustomerModal(false)} className="text-slate-400 hover:text-red-500 transition-colors">
                     <XCircle className="h-6 w-6" />
                  </button>
               </div>
               <div className="p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div>
                     <p className="text-xs text-slate-500 font-bold uppercase">Booking ID</p>
                     <p className="font-medium text-slate-800">{selectedCustomer.bookingId || selectedCustomer.id}</p>
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-bold uppercase">Status</p>
                     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                       selectedCustomer.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                       selectedCustomer.status === 'In Progress' ? 'bg-brand/20 text-brand' :
                       'bg-amber-100 text-amber-800'
                     }`}>
                       {selectedCustomer.status}
                     </span>
                   </div>
                   {selectedCustomer.customerAddress && (
                     <div className="col-span-1 sm:col-span-2 break-words">
                       <p className="text-xs text-slate-500 font-bold uppercase">Customer Address</p>
                       <p className="font-medium text-slate-800">{selectedCustomer.customerAddress}</p>
                     </div>
                   )}
                   
                   {Object.keys(selectedCustomer).filter(key => 
                     !['id', 'status', 'bookingId', 'customerAddress'].includes(key) && 
                     typeof selectedCustomer[key] !== 'object'
                   ).map((key) => (
                     <div key={key} className="col-span-1 sm:col-span-2 md:col-span-1 break-words">
                       <p className="text-xs text-slate-500 font-bold uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                       <p className="font-medium text-slate-800">{String(selectedCustomer[key])}</p>
                     </div>
                   ))}

                   {selectedCustomer.selectedItems && Array.isArray(selectedCustomer.selectedItems) && (
                     <div className="col-span-1 sm:col-span-2">
                       <p className="text-xs text-slate-500 font-bold uppercase mb-1">Selected Items</p>
                       <div className="flex flex-wrap gap-2">
                         {selectedCustomer.selectedItems.map((item: string, idx: number) => (
                           <span key={idx} className="bg-brand/10 text-brand text-xs font-bold px-2.5 py-1 rounded-lg border border-brand/20">
                             {item}
                           </span>
                         ))}
                       </div>
                     </div>
                   )}
                   
                   {/* Work Milestone Steps Progress */}
                   <div className="col-span-1 sm:col-span-2 border-t border-slate-100 pt-4 mt-2">
                     <p className="text-xs text-slate-500 font-bold uppercase mb-4">Work Steps Completion</p>
                     {selectedCustomer.workSteps && Array.isArray(selectedCustomer.workSteps) ? (
                       <div className="space-y-0 pl-2">
                         {selectedCustomer.workSteps.map((step: any, idx: number) => {
                           const isCompleted = step.completed;
                           const isLast = idx === selectedCustomer.workSteps.length - 1;
                           const isLineActive = isCompleted;
                           return (
                             <div key={step.id || idx} className="relative flex gap-4 items-start pb-4">
                               {/* Left Timeline Column */}
                               <div className="flex flex-col items-center shrink-0 relative">
                                 <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all z-10 ${
                                   isCompleted 
                                     ? "bg-emerald-500 border-emerald-500 text-white shadow-[0_0_8px_rgba(16,185,129,0.3)]" 
                                     : "bg-white border-slate-300 text-slate-400 font-extrabold text-[10px]"
                                 }`}>
                                   {isCompleted ? (
                                     <CheckCircle2 className="h-3.5 w-3.5" />
                                   ) : (
                                     <span>{idx + 1}</span>
                                   )}
                                 </div>
                                 {!isLast && (
                                   <div className={`w-0.5 absolute top-6 bottom-0 left-3 -translate-x-1/2 transition-colors ${
                                     isLineActive ? "bg-emerald-500" : "bg-slate-200"
                                   }`} />
                                 )}
                               </div>
                               {/* Right Details Column */}
                               <div className="pt-0.5">
                                 <span className={`text-xs font-bold block ${
                                   isCompleted ? "text-slate-800" : "text-slate-500"
                                 }`}>
                                   {step.name}
                                 </span>
                                 <span className={`text-[9px] font-bold uppercase tracking-wider block mt-0.5 ${
                                   isCompleted ? "text-emerald-600" : "text-slate-400"
                                 }`}>
                                   {isCompleted ? "Completed" : "Pending"}
                                 </span>
                               </div>
                             </div>
                           );
                         })}
                       </div>
                     ) : (
                       <p className="text-xs text-slate-400 italic">Work steps have not been initialized by the partner yet.</p>
                     )}
                   </div>
                 </div>
               </div>
               <div className="p-4 border-t border-border bg-slate-50 text-right">
                  <button onClick={() => setShowCustomerModal(false)} className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-6 rounded-xl transition-colors">
                     Close
                  </button>
               </div>
            </div>
          </div>
        )}

         {/* Dealer Details & Tracking Modal */}
         {showDealerModal && selectedDealer && (
           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
             <div className="bg-white rounded-[2rem] w-full max-w-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
                <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50 shrink-0">
                   <div>
                      <h3 className="font-bold text-xl text-slate-800">
                         Partner Activity & Tracking
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{selectedDealer.businessName || selectedDealer.name} ({selectedDealer.id})</p>
                   </div>
                   <button onClick={() => setShowDealerModal(false)} className="text-slate-400 hover:text-red-500 transition-colors">
                      <XCircle className="h-6 w-6" />
                   </button>
                </div>
                
                <div className="p-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
                   {/* Part 1: Work Progress Tracking */}
                   <div>
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                         <Activity className="h-4 w-4 text-brand" /> Work Progress & Assignments
                      </h4>
                      {(() => {
                         const dealerBookings = bookings.filter(b => b.dealerId === selectedDealer.id);
                         if (dealerBookings.length === 0) {
                            return <p className="text-sm text-slate-500 italic bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200">No active customer assignments found for this partner.</p>;
                         }
                         return (
                            <div className="space-y-4">
                               {dealerBookings.map((b) => {
                                  const defaultSteps = [
                                     { id: "step1", name: "Site Survey & Consultation", completed: false },
                                     { id: "step2", name: "Material Procurement", completed: false },
                                     { id: "step3", name: "Installation & Execution", completed: false },
                                     { id: "step4", name: "Quality Check & Handover", completed: false }
                                  ];
                                  const steps = b.workSteps || defaultSteps;
                                  const completedSteps = steps.filter((s: any) => s.completed).length;
                                  const pct = Math.round((completedSteps / 4) * 100);
                                  
                                  return (
                                     <div key={b.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                                        <div className="flex justify-between items-start flex-wrap gap-2">
                                           <div>
                                              <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full select-all font-mono">
                                                 {b.bookingId || b.id}
                                              </span>
                                              <h5 className="font-bold text-slate-800 text-sm mt-1">{b.customerName}</h5>
                                              <p className="text-xs text-brand font-bold">{b.service}</p>
                                           </div>
                                           <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold border ${
                                              b.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                                              b.status === 'In Progress' ? 'bg-brand/10 text-brand' :
                                              'bg-amber-50 text-amber-700 border-amber-100'
                                           }`}>
                                              {b.status}
                                           </span>
                                        </div>
                                        
                                        <div className="text-xs text-slate-500 flex items-center gap-1">
                                           <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                                           <span>{b.customerAddress || b.city}</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="space-y-1">
                                           <div className="flex justify-between text-xs font-bold text-slate-600">
                                              <span>Work Milestones</span>
                                              <span>{pct}% ({completedSteps}/4 completed)</span>
                                           </div>
                                           <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                              <div className="bg-brand h-full transition-all duration-500" style={{ width: `${pct}%` }}></div>
                                           </div>
                                                         {/* Step details (Flipkart Style Tracker) */}
                                         <div className="space-y-0 pl-1 pt-2">
                                            {steps.map((s: any, idx: number) => {
                                               const isCompleted = s.completed;
                                               const isLast = idx === steps.length - 1;
                                               const isLineActive = isCompleted;
                                               return (
                                                  <div key={s.id || idx} className="relative flex gap-3 items-start pb-3">
                                                     {/* Left Timeline Column */}
                                                     <div className="flex flex-col items-center shrink-0 relative">
                                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 transition-all z-10 ${
                                                           isCompleted 
                                                             ? "bg-emerald-500 border-emerald-500 text-white shadow-[0_0_6px_rgba(16,185,129,0.3)]" 
                                                             : "bg-white border-slate-300 text-slate-400 font-extrabold text-[10px]"
                                                        }`}>
                                                           {isCompleted ? (
                                                              <CheckCircle2 className="h-3 w-3" />
                                                           ) : (
                                                              <span>{idx + 1}</span>
                                                           )}
                                                        </div>
                                                        {!isLast && (
                                                           <div className={`w-0.5 absolute top-5 bottom-0 left-2.5 -translate-x-1/2 transition-colors ${
                                                              isLineActive ? "bg-emerald-500" : "bg-slate-200"
                                                           }`} />
                                                        )}
                                                     </div>
                                                     {/* Right Details Column */}
                                                     <div className="pt-0.5">
                                                        <span className={`text-xs font-bold block ${
                                                           isCompleted ? "text-slate-700" : "text-slate-400 font-semibold"
                                                        }`}>
                                                           {s.name}
                                                        </span>
                                                     </div>
                                                  </div>
                                               );
                                            })}
                                         </div>
                                        </div>
                                     </div>
                                  );
                               })}
                            </div>
                         );
                      })()}
                   </div>

                   {/* Part 2: Login History & Locations */}
                   <div>
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                         <Clock className="h-4 w-4 text-brand" /> Login History & Geolocation
                      </h4>
                      {(() => {
                         const dealerLogs = dealerLogins.filter(l => l.dealerId === selectedDealer.id);
                         if (dealerLogs.length === 0) {
                            return <p className="text-sm text-slate-500 italic bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200">No login logs recorded for this partner.</p>;
                         }
                         return (
                            <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden divide-y divide-slate-200">
                               {[...dealerLogs]
                                  .sort((a, b) => {
                                     const aTime = a.createdAt?.toMillis ? a.createdAt.toMillis() : (a.loginTime?.toMillis ? a.loginTime.toMillis() : 0);
                                     const bTime = b.createdAt?.toMillis ? b.createdAt.toMillis() : (b.loginTime?.toMillis ? b.loginTime.toMillis() : 0);
                                     return bTime - aTime;
                                  })
                                  .map((log, i) => (
                                     <div key={i} className="p-3 flex justify-between items-center text-xs text-slate-600 hover:bg-slate-100 transition-colors">
                                        <div className="flex items-center gap-2">
                                           <MapPin className="h-3.5 w-3.5 text-brand shrink-0" />
                                           <span className="font-medium">{log.location || "Unknown Location"}</span>
                                        </div>
                                        <span className="text-slate-500 font-mono">
                                           {log.createdAt?.toMillis 
                                              ? new Date(log.createdAt.toMillis()).toLocaleString() 
                                              : log.loginTime?.toMillis 
                                                 ? new Date(log.loginTime.toMillis()).toLocaleString() 
                                                 : "N/A"}
                                        </span>
                                     </div>
                                  ))
                               }
                            </div>
                         );
                      })()}
                   </div>
                </div>

                <div className="p-4 border-t border-border bg-slate-50 text-right shrink-0">
                   <button onClick={() => setShowDealerModal(false)} className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-6 rounded-xl transition-colors">
                      Close Tracker
                   </button>
                </div>
             </div>
           </div>
         )}

        {/* Add/Edit Dealer Modal */}
        {showAddModal && (
           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl w-full max-w-xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
                 <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50 shrink-0">
                    <h3 className="font-bold text-xl text-slate-800">
                       {editingDealerId ? "Edit Dealer Details" : "Add New Dealer"}
                    </h3>
                    <button onClick={closeModal} className="text-slate-400 hover:text-red-500 transition-colors">
                       <XCircle className="h-6 w-6" />
                    </button>
                 </div>
                 <form onSubmit={handleSaveDealer} className="p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                    <div className="grid md:grid-cols-2 gap-4">
                       <div>
                          <label className="text-sm font-bold text-slate-700 block mb-1">Business Name</label>
                          <input required type="text" value={newDealer.name} onChange={(e) => setNewDealer({...newDealer, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Store Name" />
                       </div>
                       <div>
                          <label className="text-sm font-bold text-slate-700 block mb-1">Primary Expertise / Category</label>
                          <select required value={newDealer.expertise} onChange={(e) => setNewDealer({...newDealer, expertise: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand appearance-none font-medium text-slate-700">
                             <option value="CCTV Surveillance">CCTV Surveillance</option>
                             <option value="Smart Home Automation">Smart Home Automation</option>
                             <option value="Home Interior">Home Interior</option>
                             <option value="Painting Services">Painting Services</option>
                             <option value="Smart Film Glass">Smart Film Glass</option>
                             <option value="Electrical Works">Electrical Works</option>
                          </select>
                       </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                       <div>
                          <label className="text-sm font-bold text-slate-700 block mb-1">Contact Person</label>
                          <input required type="text" value={newDealer.contact} onChange={(e) => setNewDealer({...newDealer, contact: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Person Name" />
                       </div>
                       <div>
                          <label className="text-sm font-bold text-slate-700 block mb-1">Phone Number</label>
                          <input required type="text" value={newDealer.phone} onChange={(e) => setNewDealer({...newDealer, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="+91 0000000000" />
                       </div>
                    </div>
                    <div>
                       <label className="text-sm font-bold text-slate-700 block mb-1">City / Location</label>
                       <input required type="text" value={newDealer.city} onChange={(e) => setNewDealer({...newDealer, city: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Hyderabad" />
                    </div>
                    <div className="pt-4 flex gap-4">
                       <button type="button" onClick={closeModal} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors">Cancel</button>
                       <button type="submit" className="flex-1 bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors shadow-md">
                          {editingDealerId ? "Save Changes" : "Save Dealer"}
                       </button>
                    </div>
                 </form>
              </div>
           </div>
        )}

        {/* Add/Edit Service Modal */}
        {showServiceModal && (
           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl w-full max-w-xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
                 <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50 shrink-0">
                    <h3 className="font-bold text-xl text-slate-800">
                       {editingServiceId ? "Edit Service" : "Add New Service"}
                    </h3>
                    <button onClick={closeServiceModal} className="text-slate-400 hover:text-red-500 transition-colors">
                       <XCircle className="h-6 w-6" />
                    </button>
                 </div>
                 <form onSubmit={handleSaveService} className="p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                    <div>
                       <label className="text-sm font-bold text-slate-700 block mb-1">Service Title</label>
                       <input required type="text" value={newService.title} onChange={(e) => setNewService({...newService, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="e.g. Smart Home Automation setup" />
                    </div>
                    <div>
                       <label className="text-sm font-bold text-slate-700 block mb-1">Category</label>
                       <select required value={newService.category} onChange={(e) => setNewService({...newService, category: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand appearance-none font-medium text-slate-700">
                          <option value="CCTV Surveillance">CCTV Surveillance</option>
                          <option value="Smart Home Automation">Smart Home Automation</option>
                          <option value="Home Interior">Home Interior</option>
                          <option value="Painting Services">Painting Services</option>
                          <option value="Electrical Works">Electrical Works</option>
                          <option value="Post/Offer">Post/Offer</option>
                       </select>
                    </div>
                    <div>
                       <label className="text-sm font-bold text-slate-700 block mb-1">Image URL (Optional)</label>
                       <input type="text" value={newService.imageUrl} onChange={(e) => setNewService({...newService, imageUrl: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="https://example.com/image.png" />
                    </div>
                    <div>
                       <label className="text-sm font-bold text-slate-700 block mb-1">Description</label>
                       <textarea required value={newService.description} onChange={(e) => setNewService({...newService, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand min-h-[100px]" placeholder="Detailed description of the service..." />
                    </div>
                    <div className="pt-4 flex gap-4">
                       <button type="button" onClick={closeServiceModal} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors">Cancel</button>
                       <button type="submit" className="flex-1 bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors shadow-md">
                          {editingServiceId ? "Save Changes" : "Publish Service"}
                       </button>
                    </div>
                 </form>
              </div>
           </div>
        )}
         {/* Add/Edit Offer Modal */}
         {showOfferModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
               <div className="bg-white rounded-3xl w-full max-w-xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
                  <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50 shrink-0">
                     <h3 className="font-bold text-xl text-slate-800">
                        {editingOfferId ? "Edit Festival Discount" : "Add New Discount"}
                     </h3>
                     <button onClick={closeOfferModal} className="text-slate-400 hover:text-red-500 transition-colors">
                        <XCircle className="h-6 w-6" />
                     </button>
                  </div>
                  <form onSubmit={handleSaveOffer} className="p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                     <div>
                        <label className="text-sm font-bold text-slate-700 block mb-1">Offer Title</label>
                        <input required type="text" value={newOffer.title} onChange={(e) => setNewOffer({...newOffer, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="e.g. Diwali Mega Sale! 50% Off" />
                     </div>
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="text-sm font-bold text-slate-700 block mb-1">Discount Code (Optional)</label>
                           <div className="flex items-center gap-2">
                             <input type="text" value={newOffer.discountCode} onChange={(e) => setNewOffer({...newOffer, discountCode: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 font-mono focus:outline-none focus:ring-2 focus:ring-brand" placeholder="DIWALI50" />
                             <button type="button" onClick={() => setNewOffer({...newOffer, discountCode: "VQ-" + Math.random().toString(36).substring(2, 8).toUpperCase()})} className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-3 py-2.5 rounded-xl font-bold text-sm shrink-0 transition-colors">
                               Generate
                             </button>
                           </div>
                        </div>
                        <div className="flex items-center gap-2 mt-7">
                           <input type="checkbox" id="isActive" checked={newOffer.isActive} onChange={(e) => setNewOffer({...newOffer, isActive: e.target.checked})} className="h-5 w-5 text-brand rounded focus:ring-brand" />
                           <label htmlFor="isActive" className="text-sm font-bold text-slate-700 cursor-pointer">Offer is Active</label>
                        </div>
                     </div>
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="text-sm font-bold text-slate-700 block mb-1">Image URL (Optional)</label>
                           <input type="text" value={newOffer.imageUrl} onChange={(e) => setNewOffer({...newOffer, imageUrl: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="https://example.com/banner.png" />
                        </div>
                        <div>
                           <label className="text-sm font-bold text-slate-700 block mb-1">Theme Color</label>
                           <div className="flex items-center gap-3 h-[46px]">
                              <input type="color" value={newOffer.themeColor || "#f97316"} onChange={(e) => setNewOffer({...newOffer, themeColor: e.target.value})} className="h-full w-14 cursor-pointer rounded-lg border-2 border-slate-200 bg-white p-1" />
                              <span className="text-xs text-slate-500">Pick a brand color for the popup</span>
                           </div>
                        </div>
                     </div>
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="text-sm font-bold text-slate-700 block mb-1">Validity End (Time Period)</label>
                           <input type="datetime-local" value={newOffer.validityEnd} onChange={(e) => setNewOffer({...newOffer, validityEnd: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" />
                        </div>
                        <div>
                           <label className="text-sm font-bold text-slate-700 block mb-1">Image Size & Fit</label>
                           <select value={newOffer.imageSize} onChange={(e) => setNewOffer({...newOffer, imageSize: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand">
                              <option value="h-32 object-cover">Standard (h-32 cover)</option>
                              <option value="h-48 object-cover">Large (h-48 cover)</option>
                              <option value="h-24 object-contain">Compact (h-24 contain)</option>
                              <option value="h-full w-full object-cover">Full Fill</option>
                           </select>
                        </div>
                     </div>
                     <div className="grid md:grid-cols-3 gap-4">
                        <div>
                           <label className="text-sm font-bold text-slate-700 block mb-1">Target Category</label>
                           <select value={newOffer.targetCategory} onChange={(e) => setNewOffer({...newOffer, targetCategory: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand">
                              <option value="All">All Categories</option>
                              <option value="CCTV Cameras">CCTV Cameras</option>
                              <option value="Smart Home Automation">Smart Home Automation</option>
                              <option value="Electrical Work">Electrical Work</option>
                              <option value="Painting Services">Painting Services</option>
                              <option value="Home Interior">Home Interior</option>
                           </select>
                        </div>
                        <div>
                           <label className="text-sm font-bold text-slate-700 block mb-1">Discount Type</label>
                           <select value={newOffer.discountType} onChange={(e) => setNewOffer({...newOffer, discountType: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand">
                              <option value="percentage">Percentage (%)</option>
                              <option value="flat">Flat Amount (₹)</option>
                           </select>
                        </div>
                        <div>
                           <label className="text-sm font-bold text-slate-700 block mb-1">Discount Value</label>
                           <input type="number" value={newOffer.discountValue} onChange={(e) => setNewOffer({...newOffer, discountValue: Number(e.target.value)})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="e.g. 10 or 500" />
                        </div>
                     </div>
                     <div>
                        <label className="text-sm font-bold text-slate-700 block mb-1">Offer Details / Terms</label>
                        <textarea required value={newOffer.description} onChange={(e) => setNewOffer({...newOffer, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand min-h-[100px]" placeholder="Get 50% off on all CCTV installations..." />
                     </div>
                     <div className="pt-4 flex gap-4">
                        <button type="button" onClick={closeOfferModal} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors">Cancel</button>
                        <button type="submit" className="flex-1 bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors shadow-md">
                           {editingOfferId ? "Save Changes" : "Publish Offer"}
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}
      </main>
    </div>
  );
}
