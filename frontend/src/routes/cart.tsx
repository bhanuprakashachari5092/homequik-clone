import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ShoppingBag, Trash2, Loader2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { createServerFn } from "@tanstack/react-start";

const sendBookingEmail = createServerFn("POST", async (payload: {
  userName: string;
  userEmail: string;
  services: { title: string; quantity: number }[];
}) => {
  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tekzio2026@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // Must be set in .env
      },
    });

    const servicesList = payload.services
      .map((s) => `<li>${s.title} (x${s.quantity})</li>`)
      .join("");

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
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email automation: " + error.message);
  }
});

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [{ title: "Your cart — HomeQuik" }],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, removeFromCart, checkout, isCheckingOut, totalItems } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please login to complete your booking.");
      router.navigate({ to: "/login" });
      return;
    }
    
    try {
      await checkout();
      
      // WhatsApp Automation
      const userName = user.displayName || user.email || "Customer";
      const waMessage = `Hello HomeQuik! I would like to confirm my booking:

*User Details:*
Name: ${userName}
Email: ${user.email}

*Services Booked:*
${items.map(i => `- ${i.title} (x${i.quantity})`).join('\n')}

Total Services: ${totalItems}

Please contact me to finalize.`;
      const waUrl = `https://wa.me/919141052539?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, '_blank');

      // Email Automation (Silent background call)
      try {
        await sendBookingEmail({
          data: {
            userName,
            userEmail: user.email || "No Email",
            services: items.map(i => ({ title: i.title, quantity: i.quantity }))
          }
        });
      } catch (emailErr) {
        console.error("Email automation failed (Check App Password in .env):", emailErr);
      }

      toast.success("Booking confirmed! Details sent to WhatsApp and Email.");
      router.navigate({ to: "/" });
    } catch (err: any) {
      toast.error(err.message || "Failed to complete checkout.");
    }
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-12 md:py-20 min-h-[calc(100vh-64px)]">
        <h1 className="text-3xl font-bold md:text-4xl">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="mt-12 text-center py-20 border border-border bg-card rounded-2xl shadow-card">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-soft">
              <ShoppingBag className="h-7 w-7 text-brand" />
            </div>
            <h2 className="mt-5 text-2xl font-bold">Your cart is empty</h2>
            <p className="mt-3 text-muted-foreground">Browse B2B services and add your first booking.</p>
            <Link
              to="/services"
              className="mt-8 inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition"
            >
              Browse services
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-2xl border border-border bg-card shadow-sm items-center">
                  {item.image && (
                    <div className="h-16 w-16 bg-secondary rounded-lg overflow-hidden shrink-0">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-brand font-medium mt-1">{item.price}</p>
                    <p className="text-xs text-muted-foreground mt-1">Quantity: {item.quantity}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm h-fit sticky top-24">
              <h3 className="font-bold text-lg mb-4">Booking Summary</h3>
              <div className="space-y-3 text-sm border-b border-border pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Services</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Consultation Fee</span>
                  <span className="font-semibold text-brand">Free</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                By proceeding, you agree to our terms. Your selected B2B services will be booked and our representative will call you to finalize the contract.
              </p>
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full flex justify-center items-center rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition disabled:opacity-70"
              >
                {isCheckingOut ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  user ? "Confirm Booking" : "Login to Book"
                )}
              </button>
            </div>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
