import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getServiceById } from "@/data/services";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Star, CheckCircle, ArrowLeft, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { CCTVSurveillanceDetails } from "@/components/CCTVSurveillanceDetails";
import { HomeAutomationDetails } from "@/components/HomeAutomationDetails";
import { SmartFilmGlassDetails } from "@/components/SmartFilmGlassDetails";
import { ElectricalWorkDetails } from "@/components/ElectricalWorkDetails";
import { PaintingDetails } from "@/components/PaintingDetails";
import { HomeInteriorDetails } from "@/components/HomeInteriorDetails";

export const Route = createFileRoute("/services_/$serviceId")({
  loader: ({ params }) => {
    const service = getServiceById(params.serviceId);
    if (!service) {
      throw notFound();
    }
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service?.title || "Service"} — Vendor99 Services` },
      { name: "description", content: loaderData?.service?.description || "Book trusted professionals." },
    ],
  }),
  component: ServiceDetailsPage,
});

function ServiceDetailsPage() {
  const { service } = Route.useLoaderData();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: service.id,
      title: service.title,
      price: service.price,
      image: service.image,
    });
    toast.success(`${service.title} added to cart!`);
  };

  if (service.id === "cctv-surveillance") {
    return <SiteLayout><CCTVSurveillanceDetails /></SiteLayout>;
  }

  if (service.id === "home-automation") {
    return <SiteLayout><HomeAutomationDetails /></SiteLayout>;
  }

  if (service.id === "smart-film-glass") {
    return <SiteLayout><SmartFilmGlassDetails /></SiteLayout>;
  }

  if (service.id === "electrical-work") {
    return <SiteLayout><ElectricalWorkDetails /></SiteLayout>;
  }

  if (service.id === "painting") {
    return <SiteLayout><PaintingDetails /></SiteLayout>;
  }

  if (service.id === "home-interior") {
    return <SiteLayout><HomeInteriorDetails /></SiteLayout>;
  }

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background border-b border-border/50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[100px] opacity-70 animate-float" />
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20 relative z-10">
          <Link to="/services" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-8 bg-secondary/50 hover:bg-secondary px-5 py-2.5 rounded-xl">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center rounded-xl bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                  <service.Icon className="mr-2 h-4 w-4" />
                  {service.details}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold bg-warning/10 text-warning px-3 py-1.5 rounded-xl">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  {service.rating} ({service.reviews})
                </span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                {service.title}
              </h1>
              <p className="mt-6 text-xl font-medium leading-relaxed text-muted-foreground max-w-xl">
                {service.description}
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="bg-white border border-border/50 rounded-2xl px-6 py-4 shadow-sm inline-flex items-center justify-between min-w-[220px]">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Starting Price</p>
                    <p className="text-3xl font-extrabold text-foreground mt-1">{service.price}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="rounded-2xl bg-gradient-premium px-10 py-5 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Book Service Now
                </motion.button>
              </div>
              
              <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground font-bold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-success" /> Enterprise Grade
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" /> Fast Delivery
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-soft to-blue-50/50 rounded-[3rem] blur-3xl opacity-50"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/40 bg-card shadow-premium">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32 bg-white">
        <div className="grid gap-20 lg:grid-cols-12">
          
          {/* Features */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Why choose our {service.title}?</h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex gap-4 p-6 rounded-3xl border border-border/50 bg-background shadow-sm hover:shadow-card transition-shadow"
                >
                  <div className="mt-1 bg-primary/10 p-2.5 rounded-2xl h-fit">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-bold text-foreground text-lg leading-snug">{feature}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-secondary/30 rounded-[2.5rem] p-10 border border-border/50"
            >
              <h3 className="text-2xl font-extrabold">How it works</h3>
              <ol className="mt-8 space-y-8">
                <li className="flex gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-premium shadow-md text-lg font-bold text-white">1</span>
                  <div>
                    <h4 className="font-bold text-xl text-foreground">Book the service</h4>
                    <p className="mt-2 text-base font-medium text-muted-foreground leading-relaxed">Add to cart and complete checkout. No immediate payment required.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-premium shadow-md text-lg font-bold text-white">2</span>
                  <div>
                    <h4 className="font-bold text-xl text-foreground">Consultation</h4>
                    <p className="mt-2 text-base font-medium text-muted-foreground leading-relaxed">Our expert will call you to understand your exact requirements.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-premium shadow-md text-lg font-bold text-white">3</span>
                  <div>
                    <h4 className="font-bold text-xl text-foreground">Execution</h4>
                    <p className="mt-2 text-base font-medium text-muted-foreground leading-relaxed">We deliver the service on time with enterprise-grade quality.</p>
                  </div>
                </li>
              </ol>
            </motion.div>
          </div>

          {/* Cost Breakdown */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-28 rounded-[2.5rem] border border-white/50 glass bg-white/60 p-10 shadow-premium"
            >
              <h3 className="text-2xl font-extrabold tracking-tight">Estimated Cost Breakdown</h3>
              <p className="text-base font-medium text-muted-foreground mt-2">Transparent pricing for standard packages</p>
              
              <div className="mt-8 space-y-5">
                {service.costBreakdown.map((cost, i) => (
                  <div key={i} className="flex justify-between items-center pb-5 border-b border-border/50 last:border-0 last:pb-0">
                    <span className="text-muted-foreground font-medium text-lg">{cost.label}</span>
                    <span className="font-bold text-lg">{cost.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex justify-between items-end">
                  <span className="font-extrabold text-foreground text-xl">Total Starting At</span>
                  <span className="text-4xl font-extrabold text-primary">{service.price}</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground text-right mt-3">*Final price depends on exact scope</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="mt-10 w-full rounded-2xl bg-gradient-premium px-6 py-5 text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
