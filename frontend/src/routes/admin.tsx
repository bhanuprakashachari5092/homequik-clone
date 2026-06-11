import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  LayoutDashboard, Users, ShoppingCart, Settings, 
  LogOut, Bell, Search, Activity, DollarSign, Package,
  Briefcase, CheckCircle2, XCircle, Edit, Trash2, MapPin, Gift,
  Download
} from "lucide-react";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import jsPDF from "jspdf";
import "jspdf-autotable";

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      setIsAuthenticated(true);
      setError("");
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
                placeholder="admin@gmail.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-xl transition-all shadow-md mt-4">
              Access Dashboard
            </button>
          </form>
        </div>
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
  const [newOffer, setNewOffer] = useState({ title: "", description: "", discountCode: "", imageUrl: "", isActive: true });

  const [showRevenueModal, setShowRevenueModal] = useState(false);
  const [newRevenue, setNewRevenue] = useState({ amount: "", description: "", paymentStatus: "Received" });

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

    return () => {
      unsubscribeBookings();
      unsubscribeServices();
      unsubscribeOffers();
      unsubscribeDealers();
      unsubscribeRevenue();
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

  const downloadDealersPDF = () => {
    const doc = new jsPDF();
    doc.text("Vendor99 Dealer Network", 14, 15);
    
    const tableColumn = ["ID", "Business Name", "Contact Person", "Phone", "City", "Plan", "Status"];
    const tableRows = [];

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

    (doc as any).autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [249, 115, 22] } // Brand color
    });

    doc.save(`Vendor99_Dealers_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const handleSaveService = async (e: React.FormEvent) => {
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
    setNewOffer({ title: "", description: "", discountCode: "", imageUrl: "", isActive: true });
  };

  const openEditOfferModal = (offer: any) => {
    setNewOffer({ 
      title: offer.title, 
      description: offer.description, 
      discountCode: offer.discountCode || "",
      imageUrl: offer.imageUrl || "", 
      isActive: offer.isActive !== undefined ? offer.isActive : true 
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

  const updateBookingPaymentStatus = async (bookingId: string, status: string) => {
    try {
      await updateDoc(doc(db, "bookings", bookingId), { paymentStatus: status });
    } catch (err) {
      console.error("Failed to update payment status:", err);
    }
  };

  const dealerRevenue = dealers.reduce((acc, d) => acc + (Number(d.amount) || 0), 0);
  const bookingRevenue = bookings.reduce((acc, b) => acc + (Number(b.numericAmount) || 0), 0);
  const customRevTotal = customRevenues.reduce((acc, c) => acc + (Number(c.amount) || 0), 0);
  
  const expectedRevenue = dealerRevenue + bookingRevenue + customRevTotal;
  
  const receivedBookingRev = bookings.filter(b => b.paymentStatus === 'Paid').reduce((acc, b) => acc + (Number(b.numericAmount) || 0), 0);
  const receivedCustomRev = customRevenues.filter(c => c.paymentStatus === 'Received').reduce((acc, c) => acc + (Number(c.amount) || 0), 0);
  const receivedRevenue = dealerRevenue + receivedBookingRev + receivedCustomRev;
  
  const remainingRevenue = expectedRevenue - receivedRevenue;

  const totalRevNum = expectedRevenue; // keeping for backward compatibility if used elsewhere

  const formatCurrency = (val: number) => {
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)}L`;
    return `₹${val.toLocaleString('en-IN')}`;
  };
  const activeOrdersCount = bookings.filter(b => b.status !== "Completed" && b.status !== "Cancelled").length;
  const completedOrdersCount = bookings.filter(b => b.status === "Completed").length;
  const completionRate = bookings.length > 0 ? Math.round((completedOrdersCount / bookings.length) * 100) : 0;

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
            { icon: ShoppingCart, label: "Orders" },
            { icon: Users, label: "Customers" },
            { icon: Briefcase, label: "Dealers" },
            { icon: Package, label: "Services" },
            { icon: Gift, label: "Offers" },
            { icon: Activity, label: "Analytics" },
            { icon: Settings, label: "Settings" }
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

        <div className="p-4 border-t border-border">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all">
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-border flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-2xl font-bold text-foreground">{activeTab}</h1>
            <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-96 ml-8">
              <Search className="h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-transparent border-none outline-none ml-2 w-full text-sm text-slate-700"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:text-brand transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=f8fafc" alt="Admin" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-foreground">Super Admin</p>
                <p className="text-xs text-slate-500">admin@gmail.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeTab === "Dashboard" ? (
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800">Financial Overview</h2>
                <button onClick={() => setShowRevenueModal(true)} className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors">
                  + Log Custom Revenue
                </button>
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
                     <p className="text-2xl font-black text-slate-800">₹{dealers.reduce((acc, d) => acc + (Number(d.amount) || 0), 0)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                     <p className="text-xs font-bold text-brand uppercase tracking-wider mb-1">Total Rev</p>
                     <p className="text-2xl font-black text-slate-800">₹{dealers.reduce((acc, d) => acc + (Number(d.amount) || 0), 0)}</p>
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
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Business Info</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Plan & Payment</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {dealers.map((dealer, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
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
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                             {dealer.status !== 'Suspended' && (
                                <button onClick={() => updateStatus(dealer.id, 'Suspended')} className="p-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors" title="Suspend">
                                   <XCircle className="h-5 w-5" />
                                </button>
                             )}
                             {dealer.status === 'Suspended' && (
                                <button onClick={() => updateStatus(dealer.id, 'Active')} className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors" title="Activate">
                                   <CheckCircle2 className="h-5 w-5" />
                                </button>
                             )}
                             <button onClick={() => handleDelete(dealer.id)} className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                                <Trash2 className="h-5 w-5" />
                             </button>
                          </td>
                        </tr>
                      ))}
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
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 text-sm font-bold text-slate-900">{booking.bookingId || booking.id}</td>
                          <td className="py-4 px-6">
                             <div className="font-bold text-slate-800">{booking.customerName}</div>
                             <div className="text-xs text-slate-500 mt-0.5">{booking.customerPhone || booking.phone}</div>
                          </td>
                          <td className="py-4 px-6">
                             <div className="text-sm font-medium text-slate-700">{booking.serviceName || booking.service}</div>
                             <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1"><MapPin className="h-3 w-3"/> {booking.customerAddress || booking.city}</div>
                          </td>
                          <td className="py-4 px-6">
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
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                              booking.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                              booking.status === 'In Progress' ? 'bg-brand/20 text-brand' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                             <select 
                                value={booking.paymentStatus || "Pending"}
                                onChange={(e) => updateBookingPaymentStatus(booking.id, e.target.value)}
                                className={`text-sm border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand font-bold ${booking.paymentStatus === 'Paid' ? 'border-emerald-200 bg-emerald-50 text-emerald-600' : 'border-amber-200 bg-amber-50 text-amber-600'}`}
                             >
                                <option value="Pending">Pending</option>
                                <option value="Paid">Paid</option>
                             </select>
                          </td>
                          <td className="py-4 px-6 text-right whitespace-nowrap">
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
          ) : activeTab === "Services" ? (
            <div className="max-w-7xl mx-auto space-y-6">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-2xl font-bold text-slate-800">Manage Services & Posts</h2>
                     <p className="text-slate-500 mt-1">Add or edit services that appear on the Home page dynamically.</p>
                  </div>
                  <button onClick={() => setShowServiceModal(true)} className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors">
                     + Add New Service
                  </button>
               </div>
               
               <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border">
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Service Image</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Title & Category</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {services.map((service, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6">
                             <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center">
                               {service.imageUrl ? <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" /> : <Package className="h-6 w-6 text-slate-300" />}
                             </div>
                          </td>
                          <td className="py-4 px-6">
                             <div className="font-bold text-slate-800">{service.title}</div>
                             <div className="text-xs text-brand font-bold bg-brand/10 inline-block px-2 py-0.5 rounded-full mt-1.5">{service.category}</div>
                          </td>
                          <td className="py-4 px-6">
                             <div className="text-sm text-slate-600 line-clamp-2">{service.description}</div>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                             <button onClick={() => openEditServiceModal(service)} className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Edit">
                                <Edit className="h-5 w-5" />
                             </button>
                             <button onClick={() => handleDeleteService(service.id)} className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                                <Trash2 className="h-5 w-5" />
                             </button>
                          </td>
                        </tr>
                      ))}
                      {services.length === 0 && (
                        <tr>
                           <td colSpan={4} className="py-12 text-center text-slate-500 font-medium">No services added yet. Click "+ Add New Service" to create one.</td>
                        </tr>
                      )}
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
              <div className="bg-white rounded-3xl w-full max-w-md shadow-xl overflow-hidden">
                 <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50">
                    <h3 className="font-bold text-xl text-slate-800">
                       Log Custom Revenue
                    </h3>
                    <button onClick={() => setShowRevenueModal(false)} className="text-slate-400 hover:text-red-500 transition-colors">
                       <XCircle className="h-6 w-6" />
                    </button>
                 </div>
                 <form onSubmit={handleAddCustomRevenue} className="p-6 space-y-4">
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

        {/* Add/Edit Dealer Modal */}
        {showAddModal && (
           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl w-full max-w-xl shadow-xl overflow-hidden">
                 <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50">
                    <h3 className="font-bold text-xl text-slate-800">
                       {editingDealerId ? "Edit Dealer Details" : "Add New Dealer"}
                    </h3>
                    <button onClick={closeModal} className="text-slate-400 hover:text-red-500 transition-colors">
                       <XCircle className="h-6 w-6" />
                    </button>
                 </div>
                 <form onSubmit={handleSaveDealer} className="p-6 space-y-4">
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
              <div className="bg-white rounded-3xl w-full max-w-xl shadow-xl overflow-hidden">
                 <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50">
                    <h3 className="font-bold text-xl text-slate-800">
                       {editingServiceId ? "Edit Service" : "Add New Service"}
                    </h3>
                    <button onClick={closeServiceModal} className="text-slate-400 hover:text-red-500 transition-colors">
                       <XCircle className="h-6 w-6" />
                    </button>
                 </div>
                 <form onSubmit={handleSaveService} className="p-6 space-y-4">
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
               <div className="bg-white rounded-3xl w-full max-w-xl shadow-xl overflow-hidden">
                  <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50">
                     <h3 className="font-bold text-xl text-slate-800">
                        {editingOfferId ? "Edit Festival Discount" : "Add New Discount"}
                     </h3>
                     <button onClick={closeOfferModal} className="text-slate-400 hover:text-red-500 transition-colors">
                        <XCircle className="h-6 w-6" />
                     </button>
                  </div>
                  <form onSubmit={handleSaveOffer} className="p-6 space-y-4">
                     <div>
                        <label className="text-sm font-bold text-slate-700 block mb-1">Offer Title</label>
                        <input required type="text" value={newOffer.title} onChange={(e) => setNewOffer({...newOffer, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="e.g. Diwali Mega Sale! 50% Off" />
                     </div>
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="text-sm font-bold text-slate-700 block mb-1">Discount Code (Optional)</label>
                           <input type="text" value={newOffer.discountCode} onChange={(e) => setNewOffer({...newOffer, discountCode: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 font-mono focus:outline-none focus:ring-2 focus:ring-brand" placeholder="DIWALI50" />
                        </div>
                        <div className="flex items-center gap-2 mt-7">
                           <input type="checkbox" id="isActive" checked={newOffer.isActive} onChange={(e) => setNewOffer({...newOffer, isActive: e.target.checked})} className="h-5 w-5 text-brand rounded focus:ring-brand" />
                           <label htmlFor="isActive" className="text-sm font-bold text-slate-700 cursor-pointer">Offer is Active</label>
                        </div>
                     </div>
                     <div>
                        <label className="text-sm font-bold text-slate-700 block mb-1">Image URL (Optional)</label>
                        <input type="text" value={newOffer.imageUrl} onChange={(e) => setNewOffer({...newOffer, imageUrl: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="https://example.com/banner.png" />
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
