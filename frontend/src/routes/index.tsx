import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Search, Star, ShieldCheck, Clock, Sparkles, ArrowRight, MapPin, PlayCircle } from "lucide-react";
import { useLocation } from "@/context/LocationContext";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vendor99 | Premium Tech & Business Services" },
      { name: "description", content: "Expert tech professionals at your service." },
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
  { icon: ShieldCheck, title: "Verified professionals", desc: "Background-checked, highly trained tech experts." },
  { icon: Star, title: "Upfront pricing", desc: "Transparent rates. No hidden fees or surprises." },
  { icon: Clock, title: "Dedicated support", desc: "Dedicated account managers for your projects." },
  { icon: Sparkles, title: "Enterprise Grade", desc: "Secure, scalable, and reliable tech solutions." },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

function Home() {
  const { location } = useLocation();

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-20 pb-32">
        {/* Floating gradient shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-[100px] opacity-70 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-[100px] opacity-60 animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-white/50 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-foreground shadow-sm mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" /> Premium Services in {location}
            </motion.div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-foreground">
              Modern tech services, <br />
              <span className="text-gradient">delivered perfectly.</span>
            </h1>
            
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Book verified experts for Digital Marketing, App Development, and Smart Home solutions. Enterprise standards, upfront pricing.
            </p>

            {/* Interactive Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 mx-auto max-w-2xl"
            >
              <div className="glass rounded-full p-2 flex items-center shadow-premium border border-white/40">
                <div className="pl-6 pr-4">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="What do you need help with today?"
                  className="flex-1 bg-transparent border-none outline-none text-lg text-foreground placeholder:text-muted-foreground"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-premium text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Search
                </motion.button>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex justify-center items-center gap-8 text-sm font-semibold text-muted-foreground"
            >
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-success" /> Verified Experts</div>
              <div className="flex items-center gap-2"><Star className="h-5 w-5 text-warning" /> 4.9/5 Average Rating</div>
              <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /> 24/7 Support</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight">Explore Categories</h2>
              <p className="mt-4 text-lg text-muted-foreground">Find the perfect professional for your needs.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {categories.map((c: any) => (
              <motion.div key={c.name} variants={itemVariants}>
                <Link
                  to={c.to}
                  params={c.params}
                  className="group flex flex-col items-center justify-center p-8 rounded-3xl border border-border/50 bg-background hover:bg-white hover:border-primary/20 shadow-sm hover:shadow-premium transition-all duration-300 h-full"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center text-3xl mb-6 group-hover:bg-primary/10 transition-colors"
                  >
                    {c.emoji}
                  </motion.div>
                  <span className="text-sm font-bold text-center leading-tight text-foreground">{c.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Most Booked */}
      <section className="bg-muted/30 py-32 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-extrabold tracking-tight">Premium Experiences</h2>
            <p className="mt-4 text-xl text-muted-foreground font-medium">Curated services that our clients love.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {mostBooked.slice(0, 3).map((s) => (
              <motion.div key={s.id} variants={itemVariants}>
                <a
                  href={`/services${s.hash}`}
                  className="group block rounded-[2rem] overflow-hidden bg-white border border-border/50 shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="text-xs font-bold">{s.rating}</span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground font-medium mb-8 flex-1">{s.desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-primary">Explore details</span>
                      <motion.div 
                        className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Designed for modern <br /> <span className="text-gradient">businesses & homes.</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                We've rebuilt the service experience from the ground up to provide enterprise-grade reliability, upfront pricing, and seamless booking.
              </p>
              
              <div className="mt-12 grid sm:grid-cols-2 gap-8">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <b.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{b.title}</h4>
                      <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden shadow-premium"
            >
              <img src="/services/home-automation.png" alt="Premium Service" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 glass-dark rounded-3xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                    <PlayCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-white">
                    <h5 className="font-bold text-lg">See how it works</h5>
                    <p className="text-sm opacity-80">Watch our 2-minute product tour</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
