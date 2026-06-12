import { Link } from "@tanstack/react-router";
import { Search, MapPin, ShoppingBag, User, Briefcase, Menu, X } from "lucide-react";
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
  "CCTV Installation",
  "Camera Repair",
  "CCTV Accessories",
  "NVR/DVR Setup",
];

export function SiteHeader() {
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const { location, isLocating, fetchDynamicLocation, updateLocation } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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



        <nav className="ml-auto hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to === "/services" ? "/" : n.to}
              onClick={(e) => {
                 if (n.label === "Services") {
                    e.preventDefault();
                    if (window.location.pathname !== "/") {
                       window.location.href = "/#services";
                    } else {
                       document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }
                 }
              }}
              activeProps={{ className: "text-brand bg-brand-soft font-semibold" }}
              inactiveProps={{ className: "text-foreground/70 hover:bg-secondary/50" }}
              className="px-4 py-2 text-sm font-medium transition-all rounded-full flex items-center gap-2"
            >
              {n.label === "Services" && <Briefcase className="h-4 w-4" />}
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
          
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => signOut()}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/80 px-5 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-all shadow-sm cursor-pointer"
              >
                <User className="h-4 w-4 text-brand" />
                <span>Logout</span>
              </motion.button>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  className="flex items-center gap-2 rounded-full bg-gradient-premium px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-border shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const newLoc = window.prompt("Please enter your correct location (or leave blank to auto-detect):", location);
                  if (newLoc && newLoc.trim() !== "") {
                     updateLocation(newLoc.trim());
                  } else if (newLoc === "") {
                     fetchDynamicLocation(false);
                  }
                }}
                disabled={isLocating}
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors text-left"
              >
                <div className="bg-brand/10 p-2 rounded-lg"><MapPin className="h-5 w-5 text-brand" /></div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold">Current Location</div>
                  <div className="text-sm font-bold">{isLocating ? "Locating..." : location}</div>
                </div>
              </button>

              <div className="w-full h-px bg-border my-2"></div>

              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to === "/services" ? "/" : n.to}
                  onClick={(e) => {
                     setIsMobileMenuOpen(false);
                     if (n.label === "Services") {
                        e.preventDefault();
                        if (window.location.pathname !== "/") {
                           window.location.href = "/#services";
                        } else {
                           document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }
                     }
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors font-bold text-foreground"
                >
                  {n.label === "Services" && <Briefcase className="h-5 w-5 text-brand" />}
                  {n.label}
                </Link>
              ))}

              <div className="w-full h-px bg-border my-2"></div>

              {user ? (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    signOut();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-secondary/80 px-5 py-3 text-sm font-bold text-foreground hover:bg-secondary transition-all w-full"
                >
                  <User className="h-4 w-4 text-brand" />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-premium px-6 py-3 text-sm font-bold text-white shadow-md w-full"
                >
                  <User className="h-4 w-4" />
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
