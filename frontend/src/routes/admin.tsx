import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  LayoutDashboard, Users, ShoppingCart, Settings, 
  LogOut, Bell, Search, Activity, DollarSign, Package,
  Briefcase, CheckCircle2, XCircle, Edit, Trash2, MapPin
} from "lucide-react";
import { useState, useEffect } from "react";

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

const initialDealers = [
  { id: "DLR-101", name: "TechVision Security", contact: "John Doe", phone: "+91 9876543210", city: "Bangalore", status: "Active", expertise: "CCTV Surveillance" },
  { id: "DLR-102", name: "SecureHomes Systems", contact: "Priya Patel", phone: "+91 9123456780", city: "Mumbai", status: "Pending", expertise: "Smart Home Automation" },
  { id: "DLR-103", name: "ElectroTech Installations", contact: "Rahul Sharma", phone: "+91 9988776655", city: "Delhi", status: "Active", expertise: "Electrical Works" },
  { id: "DLR-104", name: "SafeGuard Solutions", contact: "Amit Kumar", phone: "+91 9876512345", city: "Hyderabad", status: "Inactive", expertise: "CCTV Surveillance" },
];

const initialBookings = [
  { id: "BKG-8472", customerName: "Rahul Sharma", phone: "9876500001", service: "CCTV Installation", city: "Bangalore", status: "Completed", amount: "₹12,499", dealerId: "DLR-101" },
  { id: "BKG-8473", customerName: "Priya Desai", phone: "9876500002", service: "Home Painting", city: "Mumbai", status: "In Progress", amount: "₹45,000", dealerId: "DLR-102" },
  { id: "BKG-8474", customerName: "Amit Kumar", phone: "9876500003", service: "Electrical Wiring", city: "Delhi", status: "Pending", amount: "₹4,200", dealerId: null },
  { id: "BKG-8475", customerName: "Sneha Reddy", phone: "9876500004", service: "Smart Home Setup", city: "Hyderabad", status: "Pending", amount: "₹85,000", dealerId: null },
];

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [dealers, setDealers] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingDealerId, setEditingDealerId] = useState<string | null>(null);
  const [newDealer, setNewDealer] = useState({ name: "", contact: "", phone: "", city: "", expertise: "CCTV Surveillance" });

  useEffect(() => {
    // Load Dealers
    const storedDealers = localStorage.getItem("vendor99_dealers");
    if (storedDealers) {
      setDealers(JSON.parse(storedDealers));
    } else {
      setDealers(initialDealers);
      localStorage.setItem("vendor99_dealers", JSON.stringify(initialDealers));
    }

    // Load Bookings
    const storedBookings = localStorage.getItem("vendor99_bookings");
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    } else {
      setBookings(initialBookings);
      localStorage.setItem("vendor99_bookings", JSON.stringify(initialBookings));
    }
  }, []);

  const saveDealers = (updatedDealers: any[]) => {
    setDealers(updatedDealers);
    localStorage.setItem("vendor99_dealers", JSON.stringify(updatedDealers));
  };

  const saveBookings = (updatedBookings: any[]) => {
    setBookings(updatedBookings);
    localStorage.setItem("vendor99_bookings", JSON.stringify(updatedBookings));
  };

  const handleSaveDealer = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingDealerId) {
      const updated = dealers.map(d => d.id === editingDealerId ? { ...d, ...newDealer } : d);
      saveDealers(updated);
    } else {
      const newId = `DLR-${100 + dealers.length + Math.floor(Math.random() * 100)}`;
      const added = [...dealers, { ...newDealer, id: newId, status: "Active" }];
      saveDealers(added);
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

  const updateStatus = (id: string, newStatus: string) => {
    const updated = dealers.map(d => d.id === id ? { ...d, status: newStatus } : d);
    saveDealers(updated);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this dealer?")) {
      const updated = dealers.filter(d => d.id !== id);
      saveDealers(updated);
    }
  };

  const assignDealerToBooking = (bookingId: string, dealerId: string) => {
    const updated = bookings.map(b => b.id === bookingId ? { ...b, dealerId: dealerId === "" ? null : dealerId } : b);
    saveBookings(updated);
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
            { icon: ShoppingCart, label: "Orders" },
            { icon: Users, label: "Customers" },
            { icon: Briefcase, label: "Dealers" },
            { icon: Package, label: "Services" },
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
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Total Revenue", value: "₹24.5L", trend: "+12.5%", isPositive: true, icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-100" },
                  { label: "Active Orders", value: bookings.length.toString(), trend: "+5.2%", isPositive: true, icon: ShoppingCart, color: "text-brand", bg: "bg-brand/20" },
                  { label: "Partner Dealers", value: dealers.length.toString(), trend: "+12", isPositive: true, icon: Briefcase, color: "text-purple-600", bg: "bg-purple-100" },
                  { label: "Service Completion", value: "94%", trend: "+1.1%", isPositive: true, icon: Activity, color: "text-blue-600", bg: "bg-blue-100" },
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
                      <span className={`text-sm font-bold ${stat.isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
                        {stat.trend}
                      </span>
                      <span className="text-sm text-slate-500">vs last month</span>
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
                          <td className="py-4 px-6 text-sm font-medium text-slate-900">{row.id}</td>
                          <td className="py-4 px-6 text-sm text-slate-600">{row.customerName}</td>
                          <td className="py-4 px-6 text-sm text-slate-600">{row.service}</td>
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
                     <p className="text-slate-500 mt-1">Manage, approve, and edit partner registration requests.</p>
                  </div>
                  <button onClick={() => setShowAddModal(true)} className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-xl font-bold transition-colors">
                     + Add New Dealer
                  </button>
               </div>
               
               <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-border">
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Dealer ID</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Business Info</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Location & Contact</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {dealers.map((dealer, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 text-sm font-bold text-slate-900">{dealer.id}</td>
                          <td className="py-4 px-6">
                             <div className="font-bold text-slate-800">{dealer.name}</div>
                             <div className="text-xs text-brand font-bold bg-brand/10 inline-block px-2 py-0.5 rounded-full mt-1.5">{dealer.expertise || 'CCTV Surveillance'}</div>
                          </td>
                          <td className="py-4 px-6">
                             <div className="text-sm font-bold text-slate-700">{dealer.city}</div>
                             <div className="text-xs text-slate-500 mt-0.5">{dealer.contact} • {dealer.phone}</div>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                              dealer.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                              dealer.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {dealer.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                             <button onClick={() => openEditModal(dealer)} className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Edit">
                                <Edit className="h-5 w-5" />
                             </button>
                             {dealer.status === 'Pending' && (
                                <button onClick={() => updateStatus(dealer.id, 'Active')} className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors" title="Approve">
                                   <CheckCircle2 className="h-5 w-5" />
                                </button>
                             )}
                             {dealer.status !== 'Inactive' && (
                                <button onClick={() => updateStatus(dealer.id, 'Inactive')} className="p-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors" title="Deactivate">
                                   <XCircle className="h-5 w-5" />
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
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {bookings.map((booking, i) => {
                         const assignedDealer = dealers.find(d => d.id === booking.dealerId);
                         return (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 text-sm font-bold text-slate-900">{booking.id}</td>
                          <td className="py-4 px-6">
                             <div className="font-bold text-slate-800">{booking.customerName}</div>
                             <div className="text-xs text-slate-500 mt-0.5">{booking.phone}</div>
                          </td>
                          <td className="py-4 px-6">
                             <div className="text-sm font-medium text-slate-700">{booking.service}</div>
                             <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1"><MapPin className="h-3 w-3"/> {booking.city}</div>
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
                        </tr>
                      )})}
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
      </main>
    </div>
  );
}
