import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Search, Star, ShieldCheck, Clock, Sparkles, ArrowRight, MapPin } from "lucide-react";
import { useLocation } from "@/context/LocationContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HomeQuik | Expert B2B tech & business services" },
      {
        name: "description",
        content:
          "Book trusted professionals for Digital Marketing, Web Development, CCTV, App Development and more. Verified experts, enterprise-grade solutions, upfront pricing.",
      },
      { property: "og:title", content: "HomeQuik — Tech services on demand" },
      {
        property: "og:description",
        content: "Expert tech professionals at your service.",
      },
    ],
  }),
  component: Home,
});

const categories = [
  { name: "CCTV & Surveillance", emoji: "📹", to: "/services/cctv-surveillance" },
  { name: "Biometric System", emoji: "👆", to: "/services" },
  { name: "Access Control System", emoji: "🚪", to: "/services" },
  { name: "UPS and Invertor", emoji: "🔋", to: "/services" },
  { name: "Home Automation", emoji: "🏠", to: "/services" },
  { name: "Smart Film & Glass (PDLC)", emoji: "🪟", to: "/services" },
  { name: "Electrical Work", emoji: "⚡", to: "/services" },
] as const;

const mostBooked = [
  {
    id: "cctv-surveillance",
    title: "CCTV & Surveillance",
    price: "₹18,000+",
    rating: 4.9,
    reviews: "8.5M",
    img: "/services/cctv.png",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    price: "₹25,000 / Month",
    rating: 4.9,
    reviews: "3.2M",
    img: "/services/digital-marketing.png",
  },
  {
    id: "telemarketing",
    title: "Telemarketing",
    price: "₹15,000 / Month",
    rating: 4.8,
    reviews: "1.8M",
    img: "/services/telemarketing.png",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    price: "₹5,000 / Package",
    rating: 4.9,
    reviews: "4.5M",
    img: "/services/graphic-design.png",
  },
  {
    id: "web-development",
    title: "Web Development",
    price: "₹35,000+",
    rating: 4.9,
    reviews: "2.1M",
    img: "/services/web-development.png",
  },
  {
    id: "app-development",
    title: "App Development",
    price: "₹1,50,000+",
    rating: 4.9,
    reviews: "900K",
    img: "/services/app-development.png",
  },
] as const;

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified professionals",
    desc: "Background-checked, highly trained tech experts.",
  },
  { icon: Star, title: "Upfront pricing", desc: "Transparent rates. No hidden fees or surprises." },
  { icon: Clock, title: "Dedicated support", desc: "Dedicated account managers for your projects." },
  { icon: Sparkles, title: "Enterprise Grade", desc: "Secure, scalable, and reliable tech solutions." },
] as const;

function Home() {
  const { location } = useLocation();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-soft via-background to-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <MapPin className="h-3 w-3 text-brand" /> Now serving {location}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Tech & Business services, <span className="text-brand">on demand.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
              Expert professionals for IT, Marketing, Security, and App Development — delivered with enterprise standards.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-3 shadow-card">
              <div className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  placeholder="Search for 'Digital Marketing', 'Web Development', 'CCTV'..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
                  Search
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 px-1">
                {["Digital Marketing", "Web Development", "Graphic Design", "CCTV"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-brand text-brand" /> 4.8 avg rating
              </div>
              <div>12M+ happy customers</div>
            </div>
          </div>

          {/* Floating category card */}
          <div className="relative hidden md:block">
            <div className="absolute -top-6 -right-6 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {categories.slice(0, 4).map((c, i) => (
                <Link
                  key={c.name}
                  to={c.to}
                  className={`rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-hover hover:-translate-y-1 transition ${i % 2 ? "mt-8" : ""}`}
                >
                  <div className="text-3xl">{c.emoji}</div>
                  <div className="mt-3 text-sm font-semibold leading-tight">{c.name}</div>
                  <div className="mt-2 text-xs text-brand">Book now →</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">What are you looking for?</h2>
          <Link
            to="/services"
            className="hidden text-sm font-medium text-brand hover:underline md:inline-flex"
          >
            View all <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={c.to}
              className="rounded-xl border border-border bg-card p-5 text-left hover:border-brand hover:shadow-card transition"
            >
              <div className="text-3xl">{c.emoji}</div>
              <div className="mt-3 text-sm font-semibold leading-snug">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Most booked */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Most booked services</h2>
          <p className="mt-2 text-muted-foreground">Loved by {location}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mostBooked.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-brand/40 transition-all duration-300 ease-out"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div className="p-5 relative z-20 bg-card">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-brand text-brand" />
                    <span className="font-semibold text-foreground">{s.rating}</span>
                    <span>({s.reviews})</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-semibold">{s.price}</span>
                    <span className="text-xs text-brand">Book →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">The HomeQuik promise</h2>
          <p className="mt-3 text-muted-foreground">Why businesses trust us with their growth</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft">
                <b.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App banner */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl bg-foreground text-background">
          <div className="grid items-center gap-8 p-10 md:grid-cols-2 md:p-14">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Get the HomeQuik app</h2>
              <p className="mt-3 text-background/70">
                Faster bookings, exclusive offers, live tracking and chat with your professional.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground hover:opacity-90"
                >
                  ↓ App Store
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground hover:opacity-90"
                >
                  ↓ Google Play
                </a>
              </div>
            </div>
            <div className="relative hidden h-64 md:block">
              <div className="absolute inset-0 grid grid-cols-3 gap-3 opacity-90">
                {categories.slice(0, 6).map((c, i) => (
                  <div
                    key={c.name}
                    className="rounded-xl bg-background/10 p-4 backdrop-blur-sm animate-float"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    <div className="text-2xl">{c.emoji}</div>
                    <div className="mt-2 text-xs">{c.name.split(" ")[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
