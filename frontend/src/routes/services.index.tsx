import { useState, useEffect } from "react";
import { createFileRoute, Link, useLocation as useRouteLocation, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useLocation } from "@/context/LocationContext";
import { servicesData as groups } from "@/data/services";
import { motion, AnimatePresence, Variants } from "framer-motion";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "All services — Vendor99" },
      { name: "description", content: "Browse all tech and business services: Digital Marketing, Web Development, CCTV, and more." },
    ],
  }),
  component: ServicesPage,
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

function ServicesPage() {
  const { addToCart } = useCart();
  const { location } = useLocation();
  const routeLocation = useRouteLocation();
  const navigate = useNavigate();
  const [activeGroup, setActiveGroup] = useState<any | null>(null);

  useEffect(() => {
    const currentHash = routeLocation.hash || window.location.hash.replace('#', '');
    if (currentHash) {
      const group = groups.find(g => g.name.toLowerCase().replace(/\s+/g, "-") === currentHash);
      if (group) {
        setActiveGroup(group);
      }
    } else {
      setActiveGroup(null);
    }
  }, [routeLocation.hash]);

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
    });
    toast.success(`${item.title} added to cart!`);
  };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden premium-gradient border-b border-border/50 bg-background pt-16 pb-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-soft blur-[80px] opacity-60 animate-float" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="text-xs font-bold text-brand uppercase tracking-wider flex items-center mb-6">
              <span 
                className="cursor-pointer hover:underline" 
                onClick={() => {
                  window.history.pushState({}, '', '/services');
                  setActiveGroup(null);
                }}
              >
                Services
              </span>
              {activeGroup && <span className="text-muted-foreground"> &nbsp;/ {activeGroup.name}</span>}
            </p>
            <h1 className="text-4xl font-extrabold md:text-5xl tracking-tight text-foreground">
              {activeGroup ? activeGroup.name : `Premium Services in ${location}`}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground font-medium">
              {activeGroup 
                ? "Select a service to view details and available time slots." 
                : "Pick a category to see available services and upfront pricing."}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <AnimatePresence mode="wait">
          {!activeGroup ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {groups.map((g) => (
                  <motion.div
                    key={g.name}
                    variants={itemVariants}
                    onClick={() => {
                      window.history.pushState({}, '', `/services#${g.name.toLowerCase().replace(/\s+/g, "-")}`);
                      setActiveGroup(g);
                    }}
                    className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-white shadow-card hover:-translate-y-2 hover:shadow-premium hover:border-brand/40 transition-all duration-500 ease-out flex flex-col cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={g.items[0].image}
                        alt={g.name}
                        loading="lazy"
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-8 relative z-20 bg-white flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">{g.name}</h3>
                        <p className="mt-2 text-muted-foreground font-medium">
                          {g.items.length} premium services
                        </p>
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-6">
                        <span className="text-sm font-bold text-primary">Custom Quotes</span>
                        <motion.div 
                          className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <button 
                onClick={() => {
                  window.history.pushState({}, '', '/services');
                  setActiveGroup(null);
                }}
                className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors bg-secondary/50 hover:bg-secondary px-5 py-2.5 rounded-xl"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
              </button>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {activeGroup.items.map((item: any) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="group overflow-hidden rounded-[2rem] border border-border/50 bg-white shadow-card hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
                  >
                    <Link to="/services/$serviceId" params={{ serviceId: item.id }} className="block">
                      <div className="aspect-[4/3] bg-secondary w-full relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <item.Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                        </div>
                        {item.details && <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.details}</p>}
                        <div className="mt-5 flex items-center gap-2 text-xs font-bold bg-muted/50 w-fit px-3 py-1.5 rounded-full">
                          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                          {item.rating} · Top Rated
                        </div>
                      </div>
                    </Link>
                    <div className="p-6 pt-0 mt-auto">
                      <div className="flex items-center justify-between border-t border-border/50 pt-5 mt-2">
                        <span className="text-lg font-extrabold">{item.price}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate({ to: "/services/$serviceId", params: { serviceId: item.id } });
                          }}
                          className="rounded-xl bg-gradient-premium px-6 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all z-10 relative"
                        >
                          Book Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SiteLayout>
  );
}
