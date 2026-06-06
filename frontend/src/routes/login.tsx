import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Mail, Lock, Loader2 } from "lucide-react";
import { auth } from "@/lib/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

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
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
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
            <div className="flex rounded-lg bg-secondary p-1 text-sm">
              {(["login", "register"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setMode(m);
                    setError("");
                  }}
                  className={`flex-1 rounded-md py-2 transition ${
                    mode === m
                      ? "bg-background text-foreground shadow-card"
                      : "text-muted-foreground"
                  }`}
                >
                  {m === "login" ? "Login" : "Sign up"}
                </button>
              ))}
            </div>

            <h1 className="mt-6 text-2xl font-bold">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {mode === "login"
                ? "Sign in to manage your bookings."
                : "It takes less than a minute."}
            </p>

            {error && (
              <div className="mt-4 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {mode === "register" && (
                <div>
                  <label className="text-xs text-muted-foreground">Full name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
                    placeholder="Your name"
                  />
                </div>
              )}
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
              <div>
                <label className="text-xs text-muted-foreground">Password</label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (mode === "login" ? "Login" : "Create account")}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              By continuing you agree to our{" "}
              <Link to="/" className="underline">Terms</Link> &{" "}
              <Link to="/" className="underline">Privacy</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
