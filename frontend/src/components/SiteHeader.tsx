import { Link } from "@tanstack/react-router";
import { MapPin, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useLocation } from "@/context/LocationContext";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const { location, isLocating, fetchDynamicLocation, updateLocation } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      className={`w-full z-50 transition-all duration-300 sticky top-0 bg-white border-b border-[#e2ded7]`}
    >
      {/* Top Bar: Brand, Search/Location, Cart & Action */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 border-b border-[#e2ded7]/60">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="Vendor99 Logo" 
            className="h-16 md:h-20 w-auto group-hover:scale-105 transition-all duration-500" 
          />
        </Link>

        {/* Location Selector (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => fetchDynamicLocation(false)}
            disabled={isLocating}
            className="flex items-center gap-2 rounded-full border border-border/80 bg-[#fbfbf9] px-4 py-2 text-sm text-[#2d3e35] hover:border-brand/40 hover:shadow-sm transition-all disabled:opacity-50 cursor-pointer shadow-xs"
          >
            <MapPin className="h-4 w-4 text-brand" />
            <span className="font-semibold text-xs">{isLocating ? "Locating..." : location}</span>
          </motion.button>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Cart Bag */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-50 transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5 text-[#2d3e35]" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-white shadow-sm ring-2 ring-background"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>

          {/* Auth Button */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => signOut()}
                className="flex items-center gap-2 rounded-full border border-border/80 bg-slate-50 px-4 py-2 text-xs font-bold text-[#2d3e35] hover:bg-slate-100 transition-all cursor-pointer"
              >
                <User className="h-3.5 w-3.5 text-brand" />
                <span>Logout</span>
              </motion.button>
            ) : (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/login"
                  className="flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-brand-dark transition-all"
                >
                  <User className="h-3.5 w-3.5" />
                  <span>Login</span>
                </Link>
              </motion.div>
            )}

          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-[#2d3e35]" /> : <Menu className="h-6 w-6 text-[#2d3e35]" />}
          </button>
        </div>
      </div>

      {/* Bottom Nav Bar: Sage Green Navigation Links with Dropdowns */}
      <div className="bg-[#7d9c82] hidden md:block">
        <div className="mx-auto max-w-7xl px-8 flex h-12 items-center justify-center gap-8">
          <Link 
            to="/" 
            className="text-white hover:text-[#f6f3eb] font-bold text-sm transition-all"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-white hover:text-[#f6f3eb] font-bold text-sm flex items-center gap-1 py-3 focus:outline-none">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-0 w-56 bg-white rounded-2xl shadow-xl border border-[#e2ded7] py-2 z-50"
                >
                  {[
                    { label: "CCTV Surveillance", href: "/#services" },
                    { label: "Biometric System", href: "/#services" },
                    { label: "Access Control", href: "/#services" },
                    { label: "UPS and Inverter", href: "/#services" },
                    { label: "Home Automation", href: "/#services" }
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-[#2d3e35] hover:bg-[#ebf0eb] hover:text-[#7d9c82] font-semibold transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/about" 
            className="text-white hover:text-[#f6f3eb] font-bold text-sm transition-all"
          >
            About
          </Link>

          <Link 
            to="/partner" 
            className="text-white hover:text-[#f6f3eb] font-bold text-sm transition-all"
          >
            Dealer Registration
          </Link>

          <Link 
            to="/become-partner" 
            className="text-white hover:text-[#f6f3eb] font-bold text-sm transition-all"
          >
            Become a Partner
          </Link>

          <Link 
            to="/quote" 
            className="text-white hover:text-[#f6f3eb] font-bold text-sm transition-all"
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-[#e2ded7] shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  fetchDynamicLocation(false);
                }}
                disabled={isLocating}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-[#e2ded7]/60 hover:bg-[#ebf0eb] transition-colors text-left"
              >
                <div className="bg-[#ebf0eb] p-2 rounded-lg"><MapPin className="h-5 w-5 text-brand" /></div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold">Current Location</div>
                  <div className="text-sm font-bold text-[#2d3e35]">{isLocating ? "Locating..." : location}</div>
                </div>
              </button>

              <div className="w-full h-px bg-slate-100 my-2"></div>

              {[
                { to: "/", label: "Home" },
                { to: "/#services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/partner", label: "Dealer Registration" },
                { to: "/become-partner", label: "Become a Partner" },
                { to: "/quote", label: "Get Quote" }
              ].map((n) => (
                <Link
                  key={n.to}
                  to={n.to.startsWith("/#") ? "/" : n.to}
                  onClick={(e) => {
                     setIsMobileMenuOpen(false);
                     if (n.to.startsWith("/#")) {
                        e.preventDefault();
                        if (window.location.pathname !== "/") {
                           window.location.href = n.to;
                        } else {
                           document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }
                     }
                  }}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors font-bold text-[#2d3e35]"
                >
                  {n.label}
                </Link>
              ))}

              <div className="w-full h-px bg-slate-100 my-2"></div>

              {user ? (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    signOut();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border/85 bg-slate-50 px-5 py-3 text-sm font-bold text-[#2d3e35] hover:bg-slate-100 transition-all w-full"
                >
                  <User className="h-4 w-4 text-brand" />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-sm w-full text-center"
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
