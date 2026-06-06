import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState, useEffect } from "react";
import { Mail, Phone, User as UserIcon, Loader2 } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import { 
  RecaptchaVerifier, 
  signInWithPhoneNumber,
  updateProfile,
  ConfirmationResult
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login or Sign up — HomeQuik" },
      { name: "description", content: "Login to book trusted professionals." },
    ],
  }),
  component: Login,
});

function Login() {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp" | "details">("phone");
  const [phone, setPhone] = useState("+91");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  useEffect(() => {
    // Initialize reCAPTCHA on mount
    if (!window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          size: 'invisible',
          callback: () => {
            // reCAPTCHA solved
          }
        });
      } catch (err) {
        console.error("Failed to initialize reCAPTCHA", err);
      }
    }
  }, []);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!window.recaptchaVerifier) {
        throw new Error("Recaptcha not initialized");
      }
      const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
      const result = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
      setConfirmationResult(result);
      setStep("otp");
      toast.success("OTP sent successfully!");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to send OTP. Please check the phone number.");
      // Reset reCAPTCHA so the user can try again
      if (window.recaptchaVerifier) {
         window.recaptchaVerifier.render().then((widgetId) => {
           window.grecaptcha.reset(widgetId);
         });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!confirmationResult) throw new Error("No OTP requested");
      
      const result = await confirmationResult.confirm(otp);
      const user = result.user;
      
      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        // User already exists, navigate to home
        toast.success("Login successful!");
        router.navigate({ to: "/" });
      } else {
        // New user, ask for details
        setStep("details");
      }
    } catch (err: any) {
      console.error(err);
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!auth.currentUser) throw new Error("Not authenticated");
      
      await updateProfile(auth.currentUser, { displayName: name });
      
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name,
        email,
        phone: auth.currentUser.phoneNumber,
        createdAt: new Date().toISOString()
      });

      toast.success("Account created successfully!");
      router.navigate({ to: "/" });
    } catch (err: any) {
      console.error(err);
      setError("Failed to save details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-brand-soft via-background to-background min-h-[calc(100vh-64px)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div className="hidden lg:flex flex-col justify-center">
            <h2 className="text-4xl font-bold leading-tight">
              Welcome to <span className="text-brand">HomeQuik</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book trained professionals for B2B Tech Services — Digital Marketing, App Development, CCTV and more.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>✓ Verified, background-checked pros</li>
              <li>✓ Upfront pricing — no surprises</li>
              <li>✓ Dedicated Account Managers</li>
              <li>✓ Service guarantee on every project</li>
            </ul>
          </div>

          <div className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-card">
            
            <div id="recaptcha-container"></div>

            <h1 className="mt-2 text-2xl font-bold">
              {step === "phone" ? "Login or Sign up" : 
               step === "otp" ? "Verify OTP" : "Complete your profile"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {step === "phone" ? "Enter your phone number to continue." : 
               step === "otp" ? `OTP sent to ${phone}` : "Just a few more details."}
            </p>

            {error && (
              <div className="mt-4 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            {step === "phone" && (
              <form className="mt-6 space-y-4" onSubmit={handleSendOTP}>
                <div>
                  <label className="text-xs text-muted-foreground">Phone Number</label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand"
                      placeholder="+91 90000 00000"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send OTP"}
                </button>
              </form>
            )}

            {step === "otp" && (
              <form className="mt-6 space-y-4" onSubmit={handleVerifyOTP}>
                <div>
                  <label className="text-xs text-muted-foreground">6-Digit OTP</label>
                  <input
                    required
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm tracking-widest text-center outline-none focus:border-brand"
                    placeholder="000000"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="w-full flex justify-center items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Verify"}
                </button>
                <button
                  type="button"
                  onClick={() => setStep("phone")}
                  className="mt-4 w-full text-sm text-brand hover:underline"
                >
                  Edit phone number
                </button>
              </form>
            )}

            {step === "details" && (
              <form className="mt-6 space-y-4" onSubmit={handleSaveDetails}>
                <div>
                  <label className="text-xs text-muted-foreground">Full name</label>
                  <div className="relative mt-1">
                    <UserIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Email address</label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Complete Setup"}
                </button>
              </form>
            )}

            {step === "phone" && (
              <p className="mt-6 text-center text-xs text-muted-foreground">
                By continuing you agree to our{" "}
                <Link to="/" className="underline">Terms</Link> &{" "}
                <Link to="/" className="underline">Privacy</Link>.
              </p>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
