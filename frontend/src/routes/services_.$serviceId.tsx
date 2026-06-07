import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getServiceById } from "@/data/services";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Star, CheckCircle, ArrowLeft, ShieldCheck, Clock } from "lucide-react";
import { CCTVSurveillanceDetails } from "@/components/CCTVSurveillanceDetails";
import { HomeAutomationDetails } from "@/components/HomeAutomationDetails";
import { SmartFilmGlassDetails } from "@/components/SmartFilmGlassDetails";

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
      { title: `${loaderData?.service?.title || "Service"} — HomeQuik Services` },
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

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
          <Link to="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  <service.Icon className="mr-1.5 h-3.5 w-3.5" />
                  {service.details}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold">
                  <Star className="h-4 w-4 fill-brand text-brand" />
                  {service.rating} ({service.reviews})
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
                {service.description}
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="bg-card border border-border rounded-xl px-5 py-3 shadow-sm inline-flex items-center justify-between min-w-[200px]">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Starting Price</p>
                    <p className="text-xl font-bold text-foreground mt-0.5">{service.price}</p>
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="rounded-xl bg-brand px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-brand-dark transition hover:-translate-y-0.5 active:translate-y-0"
                >
                  Book Service Now
                </button>
              </div>
              
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" /> Enterprise Grade
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" /> Fast Delivery
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-soft to-blue-50 rounded-3xl blur-2xl opacity-50 dark:opacity-20"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Features */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold md:text-3xl">Why choose our {service.title}?</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition">
                  <div className="mt-0.5 bg-brand/10 p-2 rounded-full h-fit">
                    <CheckCircle className="h-5 w-5 text-brand" />
                  </div>
                  <p className="font-medium text-foreground leading-snug">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-secondary/50 rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold">How it works</h3>
              <ol className="mt-6 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">1</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Book the service</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Add to cart and complete checkout. No immediate payment required.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">2</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Consultation</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Our expert will call you to understand your exact requirements.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">3</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Execution</h4>
                    <p className="mt-1 text-sm text-muted-foreground">We deliver the service on time with enterprise-grade quality.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-bold">Estimated Cost Breakdown</h3>
              <p className="text-sm text-muted-foreground mt-1">Transparent pricing for standard packages</p>
              
              <div className="mt-6 space-y-4">
                {service.costBreakdown.map((cost, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-border/50 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">{cost.label}</span>
                    <span className="font-semibold">{cost.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-foreground">Total Starting At</span>
                  <span className="text-2xl font-bold text-brand">{service.price}</span>
                </div>
                <p className="text-xs text-muted-foreground text-right mt-2">*Final price depends on exact scope</p>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-8 w-full rounded-xl bg-foreground px-4 py-3.5 text-sm font-bold text-background hover:bg-foreground/90 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
