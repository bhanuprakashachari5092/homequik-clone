import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Search, Star, ShieldCheck, Clock, Sparkles, ArrowRight, MapPin, PlayCircle, CheckCircle2 } from "lucide-react";
import { useLocation } from "@/context/LocationContext";
import { motion } from "framer-motion";
import { CCTVSurveillanceDetails } from "@/components/CCTVSurveillanceDetails";

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
              Vendor99 – <br />
              <span className="text-gradient">India's CCTV Dealer Hub</span>
            </h1>
            
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Connect with verified CCTV professionals near you for installation, repair, AMC maintenance, and security solutions at competitive prices.
            </p>

            {/* Call to Action Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link to="/quote" className="bg-brand hover:bg-brand-hover text-white font-bold py-3 px-6 rounded-full shadow-md transition-all hover:-translate-y-1 block">
                Get Free Quote
              </Link>
              <Link to="/dealer" className="bg-white border-2 border-slate-200 text-slate-800 hover:border-brand hover:text-brand font-bold py-3 px-6 rounded-full shadow-sm transition-all hover:-translate-y-1 block">
                Find Nearest Dealer
              </Link>
              <Link to="/book" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all hover:-translate-y-1 block">
                Book Service
              </Link>
              <Link to="/partner" className="bg-amber-100 text-amber-800 border-2 border-amber-200 hover:bg-amber-200 font-bold py-3 px-6 rounded-full shadow-sm transition-all hover:-translate-y-1 block">
                Become Partner
              </Link>
            </motion.div>

            {/* Interactive Search Bar Removed */}

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

      {/* Recommended Features Strip */}
      <section id="services" className="bg-white py-8 border-b border-border/50 shadow-sm relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Buy with Installation",
              "Only Installation",
              "CCTV Repair & Service",
              "AMC Maintenance",
              "Upgrade Existing CCTV",
              "Video Door Phone",
              "Biometric Attendance Systems"
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (idx * 0.1) }}
                className="bg-slate-50 border border-slate-200 rounded-full px-5 py-2 text-sm font-bold text-slate-700 flex items-center gap-2 shadow-sm hover:border-brand hover:text-brand transition-colors cursor-default"
              >
                <CheckCircle2 className="h-4 w-4 text-brand" /> {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8">
        <CCTVSurveillanceDetails />
      </div>
    </SiteLayout>
  );
}
