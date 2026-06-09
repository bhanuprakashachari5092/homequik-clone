import { Link } from "@tanstack/react-router";
import { Search, MapPin, ShoppingBag, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useLocation } from "@/context/LocationContext";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/services", label: "Services" },
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
  const { location, isLocating, fetchDynamicLocation, updateLocation } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredServices = allServices
    .filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 10);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm border-b border-white/20 py-2" : "bg-transparent py-4"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Vendor99 Logo" className="h-20 md:h-28 w-auto animate-float group-hover:scale-110 transition-all duration-500 drop-shadow-sm" />
        </Link>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const newLoc = window.prompt("Please enter your correct location (or leave blank to auto-detect):", location);
            if (newLoc && newLoc.trim() !== "") {
               updateLocation(newLoc.trim());
            } else if (newLoc === "") {
               fetchDynamicLocation(false);
            }
          }}
          disabled={isLocating}
          className="hidden md:flex items-center gap-2 rounded-full border border-border/50 bg-white/50 backdrop-blur-md px-4 py-2 text-sm hover:border-brand/40 hover:shadow-sm transition-all disabled:opacity-50 cursor-pointer shadow-sm"
        >
          <MapPin className="h-4 w-4 text-brand" />
          <span className="font-medium">{isLocating ? "Locating..." : location}</span>
        </motion.button>

        <div className="relative flex-1 max-w-md hidden lg:block">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={`flex items-center gap-2 rounded-full border px-4 py-2.5 transition-all ${isSearchFocused ? "border-brand ring-4 ring-brand/10 bg-white shadow-sm" : "border-border/50 bg-secondary/50 hover:bg-secondary"}`}
          >
            <Search className={`h-4 w-4 transition-colors ${isSearchFocused ? "text-brand" : "text-muted-foreground"}`} />
            <input
              placeholder="Search for 'Digital Marketing'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground font-medium"
            />
          </motion.div>
          
          <AnimatePresence>
            {isSearchFocused && searchQuery && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 w-full mt-3 bg-card border border-border/50 rounded-2xl shadow-premium z-50 py-2 overflow-hidden"
              >
                <div className="px-5 py-3 text-xs font-bold text-brand uppercase tracking-wider bg-brand-soft/50">
                  Top results near {location}
                </div>
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <Link
                      key={service}
                      to="/services"
                      className="block px-5 py-3 text-sm hover:bg-secondary/80 transition-colors"
                    >
                      <div className="font-medium text-foreground">{service}</div>
                    </Link>
                  ))
                ) : (
                  <div className="px-5 py-4 text-sm text-muted-foreground">No services found</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="ml-auto hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-brand bg-brand-soft font-semibold" }}
              inactiveProps={{ className: "text-foreground/70 hover:bg-secondary/50" }}
              className="px-4 py-2 text-sm font-medium transition-all rounded-full"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-danger text-[10px] font-bold text-white shadow-sm ring-2 ring-background"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>
          {user ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => signOut()}
              className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/80 px-5 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-all shadow-sm cursor-pointer"
            >
              <User className="h-4 w-4 text-brand" />
              <span className="hidden sm:inline">Logout</span>
            </motion.button>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-full bg-gradient-premium px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
