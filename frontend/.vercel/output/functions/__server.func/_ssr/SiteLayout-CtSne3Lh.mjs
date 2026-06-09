import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as useAuth, u as useCart, c as useLocation } from "./router-BENyWQ3J.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as MapPin, q as Briefcase, d as ShoppingBag, p as User, I as Instagram, r as Facebook, s as Twitter, Y as Youtube, t as Apple, u as Smartphone } from "../_libs/lucide-react.mjs";
const nav = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" }
];
const allServices = [
  "CCTV Installation",
  "Camera Repair",
  "CCTV Accessories",
  "NVR/DVR Setup"
];
function SiteHeader() {
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const { location, isLocating, fetchDynamicLocation, updateLocation } = useLocation();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [isSearchFocused, setIsSearchFocused] = reactExports.useState(false);
  allServices.filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 10);
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { type: "spring", stiffness: 300, damping: 30 },
      className: `sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm border-b border-white/20 py-2" : "bg-transparent py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Vendor99 Logo", className: "h-20 md:h-28 w-auto animate-float group-hover:scale-110 transition-all duration-500 drop-shadow-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => {
              const newLoc = window.prompt("Please enter your correct location (or leave blank to auto-detect):", location);
              if (newLoc && newLoc.trim() !== "") {
                updateLocation(newLoc.trim());
              } else if (newLoc === "") {
                fetchDynamicLocation(false);
              }
            },
            disabled: isLocating,
            className: "hidden md:flex items-center gap-2 rounded-full border border-border/50 bg-white/50 backdrop-blur-md px-4 py-2 text-sm hover:border-brand/40 hover:shadow-sm transition-all disabled:opacity-50 cursor-pointer shadow-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-brand" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: isLocating ? "Locating..." : location })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "ml-auto hidden md:flex items-center gap-2", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: n.to === "/services" ? "/" : n.to,
            onClick: (e) => {
              if (n.label === "Services") {
                e.preventDefault();
                if (window.location.pathname !== "/") {
                  window.location.href = "/#services";
                } else {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }
              }
            },
            activeProps: { className: "text-brand bg-brand-soft font-semibold" },
            inactiveProps: { className: "text-foreground/70 hover:bg-secondary/50" },
            className: "px-4 py-2 text-sm font-medium transition-all rounded-full flex items-center gap-2",
            children: [
              n.label === "Services" && /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" }),
              n.label
            ]
          },
          n.to
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/cart",
              className: "relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary transition-colors",
              "aria-label": "Cart",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: totalItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    exit: { scale: 0 },
                    className: "absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-danger text-[10px] font-bold text-white shadow-sm ring-2 ring-background",
                    children: totalItems
                  }
                ) })
              ]
            }
          ) }),
          user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => signOut(),
              className: "flex items-center gap-2 rounded-full border border-border/50 bg-secondary/80 px-5 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-all shadow-sm cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-brand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Logout" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/login",
              className: "flex items-center gap-2 rounded-full bg-gradient-premium px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Login" })
              ]
            }
          ) })
        ] })
      ] })
    }
  );
}
const columns = [
  {
    title: "Company",
    links: [
      ["About us", "/about"],
      ["Terms & conditions", "/about"],
      ["Privacy policy", "/about"],
      ["Anti-discrimination policy", "/about"],
      ["Careers", "/about"]
    ]
  },
  {
    title: "For customers",
    links: [
      ["Categories near you", "/services"],
      ["Blog", "/about"],
      ["Contact us", "/about"],
      ["Reviews", "/about"]
    ]
  },
  {
    title: "For professionals",
    links: [
      ["Register as a professional", "/login"],
      ["Partner app", "/login"]
    ]
  },
  {
    title: "Social",
    links: [
      ["Instagram", "/about"],
      ["Facebook", "/about"],
      ["Twitter", "/about"],
      ["LinkedIn", "/about"]
    ]
  }
];
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.footer,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.7 },
      className: "mt-24 border-t border-white/10 bg-ink text-white overflow-hidden relative",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Vendor99 Logo", className: "h-20 md:h-28 w-auto animate-float group-hover:scale-110 transition-all duration-500 bg-white rounded-xl px-3 py-2 shadow-lg" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-slate-400 leading-relaxed max-w-xs", children: "Premium B2B & Home tech services, on demand. Empowering modern living." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex gap-4 text-slate-400", children: [Instagram, Facebook, Twitter, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.a,
                {
                  href: "#",
                  whileHover: { scale: 1.2, y: -2 },
                  whileTap: { scale: 0.9 },
                  className: "hover:text-white transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
                },
                i
              )) })
            ] }),
            columns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold tracking-widest uppercase text-white/50", children: col.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4 text-sm text-slate-300", children: col.links.map(([label, href]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, className: "hover:text-brand hover:translate-x-1 inline-block transition-all", children: label }) }, label)) })
            ] }, col.title))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 flex flex-col items-start gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500 font-medium", children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Vendor99 Services Pvt. Ltd. All rights reserved."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.a,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  href: "#",
                  className: "inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Apple, { className: "h-5 w-5" }),
                    " App Store"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.a,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  href: "#",
                  className: "inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-5 w-5" }),
                    " Google Play"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  SiteLayout as S
};
