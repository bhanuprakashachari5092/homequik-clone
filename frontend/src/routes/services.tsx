import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { 
  Star, 
  ChevronRight, 
  Megaphone, 
  PhoneCall, 
  PenTool, 
  Code, 
  Smartphone, 
  Printer 
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useLocation } from "@/context/LocationContext";

export const Route = createFileRoute("/services")({
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

const groups = [
  {
    name: "Business & Digital Services",
    items: [
      { 
        id: "digital-marketing",
        title: "Digital Marketing", 
        details: "SEO, Social Ads, Lead Generation", 
        price: "₹25,000 / Month", 
        rating: 4.9, 
        image: "/services/digital-marketing.png",
        Icon: Megaphone 
      },
      { 
        id: "telemarketing",
        title: "Telemarketing", 
        details: "B2B/B2C Outbound Campaigns", 
        price: "₹15,000 / Month", 
        rating: 4.8, 
        image: "/services/telemarketing.png",
        Icon: PhoneCall 
      },
      { 
        id: "graphic-design",
        title: "Graphic Design", 
        details: "Branding & Social Assets", 
        price: "₹5,000 / Package", 
        rating: 4.9, 
        image: "/services/graphic-design.png",
        Icon: PenTool 
      },
      { 
        id: "web-development",
        title: "Web Development", 
        details: "Responsive Custom Build", 
        price: "₹35,000+", 
        rating: 4.9, 
        image: "/services/web-development.png",
        Icon: Code 
      },
      { 
        id: "app-development",
        title: "App Development", 
        details: "iOS & Android Development", 
        price: "₹1,50,000+", 
        rating: 4.9, 
        image: "/services/app-development.png",
        Icon: Smartphone 
      },
      { 
        id: "printer-stationery",
        title: "Printer/Stationery", 
        details: "Custom Corporate Printing", 
        price: "Quote per volume", 
        rating: 4.8, 
        image: "/services/printer-stationery.png",
        Icon: Printer 
      },
    ],
  }
] as const;

function ServicesPage() {
  const { addToCart } = useCart();
  const { location } = useLocation();

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
          <p className="text-xs text-muted-foreground">Home / Services</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">All services in {location}</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Pick a category to see available time slots and upfront prices.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <h2 className="text-sm font-semibold text-muted-foreground">Categories</h2>
          <ul className="mt-3 space-y-1">
            {groups.map((g) => (
              <li key={g.name}>
                <a
                  href={`#${g.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                >
                  {g.name}
                  <ChevronRight className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-12">
          {groups.map((g) => (
            <section key={g.name} id={g.name.toLowerCase().replace(/\s+/g, "-")}>
              <h2 className="text-xl font-bold md:text-2xl">{g.name}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((item) => (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-hover transition flex flex-col justify-between"
                  >
                    <div className="aspect-[4/3] bg-secondary w-full relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-2">
                          <item.Icon className="h-4 w-4 text-brand" />
                          <h3 className="text-base font-semibold">{item.title}</h3>
                        </div>
                        {item.details && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.details}</p>}
                        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground font-medium">
                          <Star className="h-3.5 w-3.5 fill-brand text-brand" />
                          <span className="text-foreground">{item.rating}</span>
                          <span>· Top Rated</span>
                        </div>
                      </div>
                      <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
                        <span className="text-sm font-bold text-foreground">{item.price}</span>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark transition-colors cursor-pointer"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
