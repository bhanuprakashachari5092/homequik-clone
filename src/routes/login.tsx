import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Mail, Lock, Phone, CheckCircle2 } from "lucide-react";
import { Loader } from "@/components/Loader";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db } from "@/lib/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
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
      
      // Navigate to home after successful auth
      router.navigate({ to: "/" });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Authentication failed. Please check your credentials.");
      } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Save/update user details to Firestore
      await setDoc(doc(db, "users", result.user.uid), {
        name: result.user.displayName,
        email: result.user.email,
        createdAt: new Date().toISOString()
      }, { merge: true });

      router.navigate({ to: "/" });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Google sign in failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-background min-h-[calc(100vh-64px)] flex items-center">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand/10 blur-[120px] opacity-70 pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px] opacity-70 pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />
        
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

            {error && (
              <div className="mt-4 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

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

            <div className="mt-6 flex items-center justify-between">
              <span className="w-1/5 border-b border-border/50 lg:w-1/4"></span>
              <span className="text-xs text-center text-muted-foreground font-bold uppercase tracking-wider">or continue with</span>
              <span className="w-1/5 border-b border-border/50 lg:w-1/4"></span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="mt-6 w-full flex justify-center items-center gap-3 rounded-2xl border border-border/50 bg-white px-4 py-3.5 text-sm font-bold text-foreground shadow-sm hover:bg-secondary/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </motion.button>

            <p className="mt-8 text-center text-xs font-medium text-muted-foreground">
              By continuing you agree to our{" "}
              <Link to="/" className="text-foreground font-bold hover:underline">Terms</Link> &{" "}
              <Link to="/" className="text-foreground font-bold hover:underline">Privacy</Link>.
            </p>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
