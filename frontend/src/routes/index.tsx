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
import { Hero3D } from "@/components/Hero3D";

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
      <Hero3D location={location} />

      {/* Recommended Features Strip */}
      <section id="services" className="bg-slate-50/50 py-12 border-b border-slate-100 relative z-10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-25 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold tracking-widest text-brand uppercase">Our Expertise</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Buy with Installation",
              "Only Installation",
              "CCTV Repair & Service",
              "AMC Maintenance",
              "Upgrade Existing CCTV",
              "Video Door Phone",
              "Biometric Systems"
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white border border-slate-200/60 rounded-2xl px-6 py-3 text-sm font-bold text-slate-700 flex items-center gap-3 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_25px_rgba(217,46,16,0.1)] hover:border-brand/30 transition-all cursor-default group"
              >
                <div className="bg-brand/10 rounded-full p-1 group-hover:bg-brand group-hover:text-white transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-brand group-hover:text-white transition-colors" />
                </div>
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Services / Posts */}
      {services.length > 0 && (
         <section className="bg-white py-24 relative overflow-hidden">
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] pointer-events-none opacity-50" />
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
               <div className="text-center mb-16">
                 <motion.h2 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="text-4xl font-black tracking-tight sm:text-5xl text-slate-900"
                 >
                   Latest Services & <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-orange-500">Offers</span>
                 </motion.h2>
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-medium"
                 >
                   Discover our newest additions, professional offerings, and exclusive updates from Vendor99.
                 </motion.p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {services.map((service, idx) => (
                     <motion.div 
                       key={service.id} 
                       initial={{ opacity: 0, y: 30 }} 
                       whileInView={{ opacity: 1, y: 0 }} 
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                       className="group bg-white rounded-4xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_40px_rgba(217,46,16,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col relative"
                     >
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 -skew-x-12 z-20 pointer-events-none" />

                        {service.imageUrl ? (
                           <div className="h-64 w-full overflow-hidden relative">
                              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent z-10" />
                              <SafeImage 
                                src={service.imageUrl} 
                                alt={service.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                  e.currentTarget.onerror = null; 
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-brand/10', 'to-brand/5', 'flex', 'items-center', 'justify-center');
                                  const fallback = document.createElement('div');
                                  fallback.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand/40"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`;
                                  e.currentTarget.parentElement?.appendChild(fallback.firstChild as Node);
                                }}
                              />
                              <div className="absolute bottom-4 left-6 z-20">
                                <span className="text-xs font-black text-white bg-brand/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                  {service.category}
                                </span>
                              </div>
                           </div>
                        ) : (
                           <div className="h-64 w-full bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center relative">
                              <Sparkles className="h-16 w-16 text-brand/20 group-hover:scale-110 transition-transform duration-500" />
                              <div className="absolute bottom-4 left-6 z-20">
                                <span className="text-xs font-black text-brand bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-slate-100">
                                  {service.category}
                                </span>
                              </div>
                           </div>
                        )}
                        <div className="p-8 flex flex-col flex-1 bg-white">
                           <h3 className="text-2xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-brand transition-colors">{service.title}</h3>
                           <p className="text-base text-slate-500 line-clamp-3 mb-8 flex-1 leading-relaxed">{service.description}</p>
                           

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
