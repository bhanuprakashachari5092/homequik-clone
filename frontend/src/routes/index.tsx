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
  { name: "CCTV & Surveillance", emoji: "📹", to: "/services/$serviceId", params: { serviceId: "cctv-surveillance" } },
  { name: "Biometric System", emoji: "👆", to: "/services/$serviceId", params: { serviceId: "biometric-system" } },
  { name: "Access Control System", emoji: "🚪", to: "/services/$serviceId", params: { serviceId: "access-control" } },
  { name: "UPS and Invertor", emoji: "🔋", to: "/services/$serviceId", params: { serviceId: "ups-inverter" } },
  { name: "Home Automation", emoji: "🏠", to: "/services/$serviceId", params: { serviceId: "home-automation" } },
  { name: "Smart Film & Glass (PDLC)", emoji: "🪟", to: "/services/$serviceId", params: { serviceId: "smart-film-glass" } },
  { name: "Electrical Work", emoji: "⚡", to: "/services/$serviceId", params: { serviceId: "electrical-work" } },
  { name: "Home Interior", emoji: "🛋️", to: "/services/$serviceId", params: { serviceId: "home-interior" } },
  { name: "Professional Painting", emoji: "🎨", to: "/services/$serviceId", params: { serviceId: "painting" } },
] as any;

const mostBooked = [
  {
    id: "security-surveillance",
    title: "Security & Surveillance",
    desc: "CCTV, Biometric, Access Control",
    rating: 4.9,
    reviews: "15M+",
    img: "/services/access-control.png",
    hash: "#security-&-surveillance"
  },
  {
    id: "business-digital",
    title: "Business & Digital Services",
    desc: "Marketing, Web & App Development",
    rating: 4.9,
    reviews: "10M+",
    img: "/services/digital-marketing.png",
    hash: "#business-&-digital-services"
  },
  {
    id: "smart-home",
    title: "Smart Home & Automation",
    desc: "Smart Lights, Climate, PDLC Glass",
    rating: 4.8,
    reviews: "3M+",
    img: "/services/home-automation.png",
    hash: "#smart-home-&-automation"
  },
  {
    id: "maintenance-repairs",
    title: "Maintenance & Repairs",
    desc: "Electrical, UPS & Inverter",
    rating: 4.8,
    reviews: "6.7M",
    img: "/services/electrical-work.png",
    hash: "#maintenance-&-repairs"
  },
  {
    id: "renovation-interiors",
    title: "Renovation & Interiors",
    desc: "Premium Interiors & Painting",
    rating: 4.9,
    reviews: "2.1M",
    img: "/services/home-interior.png",
    hash: "#renovation-&-interiors"
  }
];

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
      <section className="relative overflow-hidden premium-gradient border-b border-border">
        {/* Abstract floating background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-soft blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-brand/5 blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="z-10">
            <p className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm">
              <MapPin className="h-3.5 w-3.5 text-brand" /> Now serving {location}
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Tech & Business services, <br/><span className="text-gradient">on demand.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground font-medium">
              Expert professionals for IT, Marketing, Security, and App Development — delivered with enterprise standards.
            </p>

            <div className="mt-10 rounded-3xl glass p-3 shadow-lg">
              <div className="flex items-center gap-3 rounded-2xl bg-white/60 dark:bg-black/60 px-4 py-3 shadow-sm border border-white/20">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  placeholder="Search 'Digital Marketing', 'Web Development', 'CCTV'..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground font-medium"
                />
                <button className="rounded-xl bg-gradient-to-r from-brand to-brand-dark px-6 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all">
                  Search
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 px-2">
                {["Digital Marketing", "Web Development", "Graphic Design", "CCTV"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-foreground hover:bg-brand/10 hover:text-brand transition-colors cursor-pointer"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-foreground font-semibold">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <Star className="h-5 w-5 fill-brand text-brand" />
                  <Star className="h-5 w-5 fill-brand text-brand" />
                  <Star className="h-5 w-5 fill-brand text-brand" />
                  <Star className="h-5 w-5 fill-brand text-brand" />
                  <Star className="h-5 w-5 fill-brand text-brand" />
                </div>
                <span>4.8 avg rating</span>
              </div>
              <div className="text-muted-foreground">|</div>
              <div>12M+ happy customers</div>
            </div>
          </div>

          {/* Floating category card */}
          <div className="relative hidden md:flex items-center justify-center z-10">
            <div className="relative grid grid-cols-2 gap-5 w-full max-w-md">
              {categories.slice(0, 4).map((c: { name: string; emoji: string; to: string; params: any }, i: number) => (
                <Link
                  key={c.name}
                  to={c.to}
                  params={c.params}
                  className={`glass rounded-3xl p-6 shadow-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group ${i % 2 ? "mt-10" : ""}`}
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform origin-bottom-left">{c.emoji}</div>
                  <div className="mt-4 text-sm font-bold leading-tight">{c.name}</div>
                  <div className="mt-3 text-xs font-bold text-brand flex items-center gap-1 opacity-80 group-hover:opacity-100">
                    Book now <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold md:text-4xl tracking-tight">What are you looking for?</h2>
          <Link
            to="/services"
            className="hidden text-sm font-bold text-brand hover:text-brand-dark transition-colors md:inline-flex items-center"
          >
            Explore all categories <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c: any) => (
            <Link
              key={c.name}
              to={c.to}
              params={c.params}
              className="group glass rounded-2xl p-6 text-left hover:border-brand/50 hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform origin-bottom-left">{c.emoji}</div>
              <div className="mt-4 text-base font-bold leading-snug text-foreground">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Most booked */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-20 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold md:text-4xl tracking-tight">Most booked services</h2>
            <p className="mt-3 text-muted-foreground font-medium text-lg">Top rated selections across {location}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mostBooked.map((s) => (
              <a
                key={s.id}
                href={`/services${s.hash}`}
                className="group relative overflow-hidden rounded-3xl border border-white/20 glass shadow-card hover:-translate-y-2 hover:shadow-hover hover:border-brand/40 transition-all duration-500 ease-out flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60"></div>
                </div>
                <div className="p-6 relative z-20 bg-background/80 backdrop-blur-xl flex-1 flex flex-col justify-between border-t border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center bg-white dark:bg-black px-2 py-1 rounded-full shadow-sm">
                        <Star className="h-3.5 w-3.5 fill-brand text-brand mr-1" />
                        <span className="font-bold text-foreground">{s.rating}</span>
                      </div>
                      <span className="font-medium">({s.reviews})</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                    <span className="text-sm font-bold text-foreground">Custom Quotes</span>
                    <span className="text-sm font-bold text-brand flex items-center group-hover:translate-x-1 transition-transform">
                      View Details <ArrowRight className="ml-1.5 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-brand-dark px-10 py-4 text-base font-bold text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105"
            >
              Explore Full Catalog <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
                {categories.slice(0, 6).map((c: { name: string; emoji: string }, i: number) => (
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
