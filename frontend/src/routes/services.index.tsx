import { useState, useEffect } from "react";
import { createFileRoute, Link, useLocation as useRouteLocation } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { 
  Star, 
  ChevronRight, 
  ArrowLeft
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useLocation } from "@/context/LocationContext";
import { servicesData as groups } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "All services — HomeQuik" },
      {
        name: "description",
        content:
          "Browse all tech and business services: Digital Marketing, Web Development, CCTV, and more.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { addToCart } = useCart();
  const { location } = useLocation();
  const routeLocation = useRouteLocation();
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
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-xs text-muted-foreground flex items-center">
            <span 
              className="cursor-pointer hover:text-brand hover:underline" 
              onClick={() => {
                window.history.pushState({}, '', '/services');
                setActiveGroup(null);
              }}
            >
              Home / Services
            </span>
            {activeGroup && <span className="text-foreground"> &nbsp;/ {activeGroup.name}</span>}
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            {activeGroup ? activeGroup.name : `All service categories in ${location}`}
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            {activeGroup 
              ? "Select a service to view details and available time slots." 
              : "Pick a category to see available services and upfront pricing."}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {!activeGroup ? (
          // Show Categories as Flash Cards
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <div
                key={g.name}
                onClick={() => {
                  window.history.pushState({}, '', `/services#${g.name.toLowerCase().replace(/\s+/g, "-")}`);
                  setActiveGroup(g);
                }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-brand/40 transition-all duration-300 ease-out flex flex-col cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={g.items[0].image}
                    alt={g.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div className="p-5 relative z-20 bg-card flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="mt-2 text-xl font-bold">{g.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {g.items.length} professional services available
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                    <span className="text-sm font-semibold">Custom Quotes</span>
                    <span className="text-xs font-bold text-brand flex items-center">View Services <ChevronRight className="ml-1 h-3 w-3" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Show Services for Active Category
          <div className="space-y-8">
            <button 
              onClick={() => {
                window.history.pushState({}, '', '/services');
                setActiveGroup(null);
              }}
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-2 bg-secondary/50 px-4 py-2 rounded-lg"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </button>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeGroup.items.map((item: any) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-hover transition flex flex-col justify-between"
                >
                  <Link to="/services/$serviceId" params={{ serviceId: item.id }} className="block group">
                    <div className="aspect-[4/3] bg-secondary w-full relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="px-5 pt-5">
                      <div className="flex items-center gap-2">
                        <item.Icon className="h-4 w-4 text-brand" />
                        <h3 className="text-base font-semibold group-hover:text-brand transition-colors">{item.title}</h3>
                      </div>
                      {item.details && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.details}</p>}
                      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground font-medium">
                        <Star className="h-3.5 w-3.5 fill-brand text-brand" />
                        <span className="text-foreground">{item.rating}</span>
                        <span>· Top Rated</span>
                      </div>
                    </div>
                  </Link>
                  <div className="px-5 pb-5 mt-auto">
                    <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
                      <span className="text-sm font-bold text-foreground">{item.price}</span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(item);
                        }}
                        className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark transition-colors cursor-pointer z-10 relative"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
