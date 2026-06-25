import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState, useEffect } from "react";
import { Mail, Lock, Phone, CheckCircle2, AlertCircle, X } from "lucide-react";
import { Loader } from "@/components/Loader";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db } from "@/lib/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login or Sign up — Vendor99" },
      { name: "description", content: "Login to book trusted professionals." },
    ],
  }),
  component: Login,
});

function Login() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "register") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        
        // Save user details including phone number to Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name,
          email,
          phone,
          createdAt: new Date().toISOString()
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      
      setShowSuccess(true);
      setTimeout(() => {
        router.navigate({ to: "/" });
      }, 1500);
    } catch (err: any) {
      console.error(err);
      if (mode === "login") {
        setError("wrong credentials");
      } else {
        setError(err.message || "Authentication failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-background min-h-[calc(100vh-64px)] flex items-center">
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 rounded-full bg-brand/10 blur-[120px] opacity-70 pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 rounded-full bg-secondary/10 blur-[120px] opacity-70 pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />
        
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2 lg:py-24 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex flex-col justify-center"
          >
            <h2 className="text-5xl font-extrabold leading-tight tracking-tight">
              Unlock premium <br/><span className="text-gradient">Tech Services.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-medium max-w-md leading-relaxed">
              Join thousands of businesses who trust Vendor99 for their enterprise-grade Tech, IT, and Maintenance needs.
            </p>
            <ul className="mt-10 space-y-5">
              {[
                "Verified, background-checked professionals",
                "Upfront pricing with no hidden fees",
                "Dedicated Account Managers",
                "Service guarantee on every project"
              ].map((text, i) => (
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-3 text-base font-medium text-foreground"
                >
                  <div className="h-6 w-6 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-md rounded-[2.5rem] border border-white/40 glass bg-white/70 p-10 shadow-premium"
          >
            <div className="flex rounded-xl bg-secondary/50 p-1.5 text-sm font-bold border border-border/50">
              {(["login", "register"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setMode(m);
                    setError("");
                  }}
                  className={`flex-1 rounded-lg py-2.5 transition-all ${
                    mode === m
                      ? "bg-white text-brand shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m === "login" ? "Login" : "Sign up"}
                </button>
              ))}
            </div>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight">
              {mode === "login" ? "Welcome back" : "Create account"}
            </h1>
            <p className="mt-2 text-base text-muted-foreground font-medium">
              {mode === "login"
                ? "Sign in to manage your bookings."
                : "It takes less than a minute."}
            </p>

            {/* Professional Error Popup */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.95 }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                  className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-red-100 shadow-2xl px-5 py-3.5 rounded-2xl w-[90%] max-w-sm"
                >
                  <div className="h-10 w-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-800">Authentication Error</h4>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">{error}</p>
                  </div>
                  <button 
                    onClick={() => setError("")}
                    type="button"
                    className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                  >
                    <X className="h-4 w-4 text-slate-400" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <AnimatePresence mode="popLayout">
                {mode === "register" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: "auto", scale: 1 }}
                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                    className="space-y-5 overflow-hidden"
                  >
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Full name</label>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1.5 w-full rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Contact Number</label>
                      <div className="relative mt-1.5">
                        <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm py-3.5 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                          placeholder="+91 90000 00000"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Email address</label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm py-3.5 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Password</label>
                <div className="relative mt-1.5">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm py-3.5 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="mt-2 w-full flex justify-center items-center rounded-2xl bg-gradient-premium px-4 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader size="xs" text="" /> : (mode === "login" ? "Login" : "Create account")}
              </motion.button>
            </form>



            <p className="mt-8 text-center text-xs font-medium text-muted-foreground">
              By continuing you agree to our{" "}
              <Link to="/" className="text-foreground font-bold hover:underline">Terms</Link> &{" "}
              <Link to="/" className="text-foreground font-bold hover:underline">Privacy</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-4xl shadow-2xl p-8 max-w-sm w-full text-center space-y-6"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
                <CheckCircle2 className="h-10 w-10 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800">
                  {mode === "login" ? "Login Successful!" : "Account Created!"}
                </h3>
                <p className="text-slate-500 font-medium mt-2">
                  {mode === "login" ? "Welcome back to Vendor99." : "Getting things ready for you..."}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
