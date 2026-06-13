import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Search, Star, ShieldCheck, Clock, Sparkles, ArrowRight, MapPin, PlayCircle, CheckCircle2 } from "lucide-react";
import { useLocation } from "@/context/LocationContext";
import { motion } from "framer-motion";
import { CCTVSurveillanceDetails } from "@/components/CCTVSurveillanceDetails";
import PartnerMarquee from "@/components/PartnerMarquee";
import { useState, useEffect, useRef } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { SafeImage } from "@/hooks/useLocalSafeImage";


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
  const [services, setServices] = useState<any[]>([]);
  const initialLoadRef = useRef(true);

  useEffect(() => {
    // Request Notification Permission
    if ("Notification" in window && Notification.permission !== "denied") {
      Notification.requestPermission();
    }

    const unsubscribe = onSnapshot(collection(db, "services"), (snapshot) => {
       const fetched: any[] = [];
       snapshot.forEach(doc => fetched.push({ id: doc.id, ...doc.data() }));
       
       fetched.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));

       if (!initialLoadRef.current) {
         snapshot.docChanges().forEach((change) => {
           if (change.type === "added") {
             if (Notification.permission === "granted") {
                new Notification("Vendor99 - New Service Available!", {
                  body: change.doc.data().title,
                  icon: "/logo.png"
                });
             }
           }
         });
       } else {
         initialLoadRef.current = false;
       }
       setServices(fetched);
    });

    return () => unsubscribe();
  }, []);

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

              <Link to="/book" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all hover:-translate-y-1 block">
                Book Service
              </Link>
              <Link to="/partner" className="bg-amber-100 text-amber-800 border-2 border-amber-200 hover:bg-amber-200 font-bold py-3 px-6 rounded-full shadow-sm transition-all hover:-translate-y-1 block">
                Dealer Registration
              </Link>
              <Link to="/dealer-portal" className="bg-emerald-100 text-emerald-800 border-2 border-emerald-200 hover:bg-emerald-200 font-bold py-3 px-6 rounded-full shadow-sm transition-all hover:-translate-y-1 block">
                Dealer Login
              </Link>
              <Link to="/become-partner" className="bg-purple-100 text-purple-800 border-2 border-purple-200 hover:bg-purple-200 font-bold py-3 px-6 rounded-full shadow-sm transition-all hover:-translate-y-1 block">
                Become a Partner
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

      {/* Dynamic Services / Posts */}
      {services.length > 0 && (
         <section className="bg-slate-50 py-16 border-b border-border/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">Latest Services & Offers</h2>
                 <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto font-medium">Discover our newest additions, professional offerings, and exclusive updates from Vendor99.</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service) => (
                     <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        {service.imageUrl ? (
                           <div className="h-56 w-full overflow-hidden relative group">
                              <SafeImage 
                                src={service.imageUrl} 
                                alt={service.title} 
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                onError={(e) => {
                                  e.currentTarget.onerror = null; 
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-brand/10', 'to-brand/5', 'flex', 'items-center', 'justify-center');
                                  const fallback = document.createElement('div');
                                  fallback.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand/40"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`;
                                  e.currentTarget.parentElement?.appendChild(fallback.firstChild as Node);
                                }}
                              />
                           </div>
                        ) : (
                           <div className="h-56 w-full bg-gradient-to-br from-brand/10 to-brand/5 flex items-center justify-center">
                              <Sparkles className="h-12 w-12 text-brand/40" />
                           </div>
                        )}
                        <div className="p-8 flex flex-col flex-1">
                           <span className="text-xs font-bold text-brand bg-brand/10 px-3 py-1.5 rounded-full uppercase tracking-wider w-fit mb-4">{service.category}</span>
                           <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">{service.title}</h3>
                           <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-1 leading-relaxed font-medium">{service.description}</p>
                           <Link to="/book" className="font-bold text-brand hover:text-brand-dark flex items-center gap-2 group mt-auto">
                              Book Service <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>
      )}

      <div className="mt-8">
        <CCTVSurveillanceDetails />
        <PartnerMarquee />
      </div>
    </SiteLayout>
  );
}
