import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ShoppingBag, Trash2, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [{ title: "Your cart — Vendor99" }],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, removeFromCart, checkout, isCheckingOut, totalItems } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please login to complete your booking.");
      router.navigate({ to: "/login" });
      return;
    }
    
    try {
      // Create Firestore document
      const userName = user.displayName || user.email || "Customer";
      
      const bookingData = {
        customerName: userName,
        customerEmail: user.email,
        customerPhone: user.phoneNumber || "", // Fallback if no phone number
        services: items.map(i => ({ title: i.title, quantity: i.quantity, price: i.price })),
        totalItems,
        createdAt: serverTimestamp(),
        status: "pending",
      };

      await addDoc(collection(db, "bookings"), bookingData);

      // Clear the cart
      await checkout();

      // Show success modal
      setShowSuccessModal(true);
    } catch (err: any) {
      toast.error(err.message || "Failed to complete checkout.");
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    router.navigate({ to: "/" });
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 min-h-[calc(100vh-64px)] relative">
        <div className="absolute top-0 right-10 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[80px] -z-10 animate-float" />
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          Your Cart
        </motion.h1>
        
        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 text-center py-24 glass rounded-[3rem] shadow-card border border-white/20"
          >
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-primary/10 mb-8">
              <ShoppingBag className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">Your cart is empty</h2>
            <p className="mt-4 text-muted-foreground text-lg">Discover premium B2B services and add your first booking.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-premium px-8 py-4 text-base font-bold text-white shadow-lg transition-all"
              >
                Explore Services <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_400px]">
            <div className="space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    className="group flex gap-6 p-6 rounded-[2rem] border border-border/50 bg-white hover:border-primary/30 shadow-sm hover:shadow-card transition-all items-center"
                  >
                    {item.image && (
                      <div className="h-28 w-28 bg-muted rounded-2xl overflow-hidden shrink-0 shadow-inner">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                      <p className="text-sm font-semibold text-primary mt-1">{item.price}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted/50 w-fit px-4 py-1.5 rounded-full">
                        Quantity: {item.quantity}
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromCart(item.id)}
                      className="p-4 text-muted-foreground hover:text-danger hover:bg-danger/10 rounded-2xl transition-colors"
                    >
                      <Trash2 className="h-6 w-6" />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[2.5rem] border border-white/40 glass p-8 shadow-premium h-fit sticky top-28"
            >
              <h3 className="font-extrabold text-2xl mb-8 tracking-tight">Booking Summary</h3>
              <div className="space-y-5 text-base border-b border-border/50 pb-8 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-medium">Total Services</span>
                  <span className="font-extrabold text-lg">{totalItems}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-medium">Consultation Fee</span>
                  <span className="font-bold text-success flex items-center gap-1.5 bg-success/10 px-3 py-1 rounded-full text-sm">
                    <CheckCircle2 className="h-4 w-4" /> Free
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-medium">
                By proceeding, you agree to our terms. Your selected B2B services will be booked and our representative will call you to finalize the contract.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full flex justify-center items-center rounded-2xl bg-gradient-premium px-4 py-5 text-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  user ? "Confirm & Book Now" : "Login to Book"
                )}
              </motion.button>
            </motion.div>
          </div>
        )}
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden text-center"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-premium" />
              <div className="mx-auto w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-success" />
              </div>
              <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Thank you for your booking. We have sent a confirmation message to your WhatsApp and our AI representative will call you shortly!
              </p>
              <button
                onClick={closeSuccessModal}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl"
              >
                Return to Home
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
