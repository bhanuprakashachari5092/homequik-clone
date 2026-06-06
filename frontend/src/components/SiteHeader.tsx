import { Link } from "@tanstack/react-router";
import { Search, MapPin, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useLocation } from "@/context/LocationContext";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/native", label: "Native" },
  { to: "/insta-help", label: "Insta Help" },
  { to: "/about", label: "About" },
] as const;

const allServices = [
  "Digital Marketing",
  "Telemarketing",
  "Graphic Design",
  "Web Development",
  "App Development",
  "Printer/Stationery",
];

export function SiteHeader() {
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const { location, isLocating, fetchDynamicLocation } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredServices = allServices
    .filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 10);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white font-bold">
            HQ
          </span>
          <span className="hidden sm:block text-base font-bold tracking-tight">HomeQuik</span>
        </Link>

        <button 
          onClick={() => fetchDynamicLocation(false)}
          disabled={isLocating}
          className="hidden md:flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm hover:border-foreground/40 transition disabled:opacity-50 cursor-pointer"
        >
          <MapPin className="h-4 w-4 text-brand" />
          {isLocating ? "Locating..." : location}
        </button>

        <div className="relative flex-1 max-w-md hidden lg:block">
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search for 'Digital Marketing'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          
          {isSearchFocused && searchQuery && (
            <div className="absolute top-full left-0 w-full mt-2 bg-background border border-border rounded-xl shadow-lg z-50 py-2">
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground bg-secondary/30">
                Top results near {location}
              </div>
              {filteredServices.length > 0 ? (
                filteredServices.map((service) => (
                  <Link
                    key={service}
                    to="/services"
                    className="block px-4 py-2 text-sm hover:bg-secondary transition"
                  >
                    <div className="font-medium text-foreground">{service}</div>
                  </Link>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-muted-foreground">No services found</div>
              )}
            </div>
          )}
        </div>

        <nav className="ml-auto hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-brand" }}
              inactiveProps={{ className: "text-foreground/80" }}
              className="px-3 py-2 text-sm font-medium hover:text-brand transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-secondary transition"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? (
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary/80 transition cursor-pointer"
            >
              <User className="h-4 w-4 text-brand" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
