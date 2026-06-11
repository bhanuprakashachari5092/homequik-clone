import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Briefcase, LogOut, CheckCircle2, Clock, MapPin, Phone, XCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export const Route = createFileRoute("/dealer-portal")({
  head: () => ({
    meta: [
      { title: "Dealer Portal — Vendor99" },
    ],
  }),
  component: DealerPortal,
});

function DealerPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dealerId, setDealerId] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [currentDealer, setCurrentDealer] = useState<any>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      // Fetch dealer from Firebase Firestore
      const docRef = doc(db, "dealers", dealerId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const dealerData = docSnap.data();
        
        // Verify phone number acts as password in this flow
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
    } catch (err: any) {
      console.error(err);
      setError("Failed to connect to authentication server. Please check your Firestore rules.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans p-4 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/50 w-full max-w-md relative z-10 backdrop-blur-sm bg-white/80">
          <Link to="/" className="text-brand font-bold text-sm hover:underline absolute top-6 right-8">
             Back to Home
          </Link>
          
          <div className="mb-10 mt-4">
            <div className="h-14 w-14 bg-brand rounded-2xl flex items-center justify-center font-bold text-white shadow-xl shadow-brand/30 mb-6 text-3xl">
              V
            </div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Partner Portal</h1>
            <p className="text-slate-500 mt-2 font-medium">Log in to view and manage your assigned customer bookings.</p>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl text-sm font-bold mb-6 flex items-center gap-2 shadow-sm">
              <XCircle className="h-5 w-5 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">Dealer ID</label>
              <input 
                type="text" 
                value={dealerId}
                onChange={(e) => setDealerId(e.target.value.toUpperCase())}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all"
                placeholder="e.g. DLR-101"
                required
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 block mb-2">Registered Phone Number</label>
              <input 
                type="text" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand font-medium transition-all"
                placeholder="+91 0000000000"
                required
              />
            </div>
            <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-brand/25 mt-6 text-lg">
              Secure Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <DealerDashboard currentDealer={currentDealer} onLogout={() => setIsAuthenticated(false)} />;
}

function DealerDashboard({ currentDealer, onLogout }: { currentDealer: any, onLogout: () => void }) {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const storedBookings = localStorage.getItem("vendor99_bookings");
    if (storedBookings) {
      const allBookings = JSON.parse(storedBookings);
      // Filter only bookings assigned to this dealer
      const myBookings = allBookings.filter((b: any) => b.dealerId === currentDealer.id);
      setBookings(myBookings);
    }
  }, [currentDealer.id]);

  const updateBookingStatus = (bookingId: string, newStatus: string) => {
    // Optimistic UI update
    const updatedMyBookings = bookings.map(b => b.id === bookingId ? { ...b, status: newStatus } : b);
    setBookings(updatedMyBookings);

    // Persist to local storage
    const storedBookings = localStorage.getItem("vendor99_bookings");
    if (storedBookings) {
      const allBookings = JSON.parse(storedBookings);
      const updatedAll = allBookings.map((b: any) => b.id === bookingId ? { ...b, status: newStatus } : b);
      localStorage.setItem("vendor99_bookings", JSON.stringify(updatedAll));
    }
  };

  const pendingCount = bookings.filter(b => b.status === 'Pending' || b.status === 'In Progress').length;
  const completedCount = bookings.filter(b => b.status === 'Completed').length;

  return (
    <div className="min-h-screen bg-[#f0f4f8] font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border h-20 px-6 lg:px-12 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
           <div className="h-10 w-10 bg-brand rounded-xl flex items-center justify-center font-bold text-white shadow-md shadow-brand/20">
             V
           </div>
           <div>
              <h1 className="font-extrabold text-xl tracking-tight text-foreground hidden sm:block">Partner Portal</h1>
           </div>
        </div>
        
        <div className="flex items-center gap-6">
           <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800">{currentDealer.name}</p>
              <p className="text-xs text-slate-500">{currentDealer.id}</p>
           </div>
           <button onClick={onLogout} className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-xl text-sm font-bold transition-colors">
              <LogOut className="h-4 w-4" />
              Sign Out
           </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 max-w-7xl mx-auto w-full">
         <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">Welcome back, {currentDealer.contact}!</h2>
            <p className="text-slate-600 mt-2 text-lg">Here are your assigned customer bookings.</p>
         </div>

         {/* Stats Row */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
               <div className="p-4 bg-brand/10 rounded-2xl">
                  <Briefcase className="h-8 w-8 text-brand" />
               </div>
               <div>
                  <p className="text-sm font-semibold text-slate-500">Total Assigned</p>
                  <p className="text-3xl font-extrabold text-slate-800">{bookings.length}</p>
               </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
               <div className="p-4 bg-amber-100 rounded-2xl">
                  <Clock className="h-8 w-8 text-amber-600" />
               </div>
               <div>
                  <p className="text-sm font-semibold text-slate-500">Pending / In Progress</p>
                  <p className="text-3xl font-extrabold text-slate-800">{pendingCount}</p>
               </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
               <div className="p-4 bg-emerald-100 rounded-2xl">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
               </div>
               <div>
                  <p className="text-sm font-semibold text-slate-500">Completed Jobs</p>
                  <p className="text-3xl font-extrabold text-slate-800">{completedCount}</p>
               </div>
            </div>
         </div>

         {/* Bookings List */}
         <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-100">
               <h3 className="text-xl font-bold text-slate-800">Customer Assignments</h3>
            </div>
            
            {bookings.length === 0 ? (
               <div className="p-16 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-4">
                     <Briefcase className="h-10 w-10 text-slate-300" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-700">No Customers Assigned Yet</h4>
                  <p className="text-slate-500 mt-2">When Vendor99 assigns a customer to you, they will appear here.</p>
               </div>
            ) : (
               <div className="divide-y divide-slate-100">
                  {bookings.map((booking) => (
                     <div key={booking.id} className="p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
                        <div className="space-y-4 flex-1">
                           <div className="flex items-center gap-3">
                              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full border border-slate-200">
                                 {booking.id}
                              </span>
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                                 booking.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                                 booking.status === 'In Progress' ? 'bg-brand/10 text-brand border-brand/20' :
                                 'bg-amber-50 text-amber-700 border-amber-200'
                              }`}>
                                 {booking.status}
                              </span>
                           </div>
                           
                           <div>
                              <h4 className="text-xl font-bold text-slate-800 mb-1">{booking.customerName}</h4>
                              <p className="text-brand font-bold">{booking.service} • {booking.amount}</p>
                           </div>

                           <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                                 <Phone className="h-4 w-4 text-slate-400" />
                                 {booking.phone}
                              </div>
                              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                                 <MapPin className="h-4 w-4 text-slate-400" />
                                 {booking.city}
                              </div>
                           </div>
                        </div>
                        
                        <div className="shrink-0 bg-slate-50 p-4 rounded-2xl border border-slate-100 self-start lg:self-auto w-full lg:w-auto">
                           <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Update Job Status</label>
                           <select 
                              value={booking.status}
                              onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                              className="w-full lg:w-48 bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand font-bold text-slate-700 shadow-sm"
                           >
                              <option value="Pending">Pending</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                           </select>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </main>
    </div>
  );
}
