import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as useAuth, b as useCart, u as useLocation, d as db } from "./router-vjEfc7KF.mjs";
import { q as query, w as where, c as collection, o as onSnapshot } from "../_libs/firebase__firestore.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { c as MapPin, b as Briefcase, n as ShoppingBag, U as User, X, v as Menu, G as Gift, C as CircleCheck, J as Copy, K as Instagram, N as Facebook, O as Twitter, Y as Youtube, Q as Apple, R as Smartphone } from "../_libs/lucide-react.mjs";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  allServices.filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 10);
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { type: "spring", stiffness: 300, damping: 30 },
      className: `sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm border-b border-white/20 py-2" : "bg-transparent py-4"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-3", children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                onClick: () => signOut(),
                className: "flex items-center gap-2 rounded-full border border-border/50 bg-secondary/80 px-5 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-all shadow-sm cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-brand" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Logout" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/login",
                className: "flex items-center gap-2 rounded-full bg-gradient-premium px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Login" })
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "md:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary transition-colors",
                onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6 text-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6 text-foreground" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-border shadow-lg",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setIsMobileMenuOpen(false);
                    const newLoc = window.prompt("Please enter your correct location (or leave blank to auto-detect):", location);
                    if (newLoc && newLoc.trim() !== "") {
                      updateLocation(newLoc.trim());
                    } else if (newLoc === "") {
                      fetchDynamicLocation(false);
                    }
                  },
                  disabled: isLocating,
                  className: "flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-brand/10 p-2 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-brand" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-semibold", children: "Current Location" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: isLocating ? "Locating..." : location })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-px bg-border my-2" }),
              nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: n.to === "/services" ? "/" : n.to,
                  onClick: (e) => {
                    setIsMobileMenuOpen(false);
                    if (n.label === "Services") {
                      e.preventDefault();
                      if (window.location.pathname !== "/") {
                        window.location.href = "/#services";
                      } else {
                        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  },
                  className: "flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors font-bold text-foreground",
                  children: [
                    n.label === "Services" && /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-5 w-5 text-brand" }),
                    n.label
                  ]
                },
                n.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-px bg-border my-2" }),
              user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setIsMobileMenuOpen(false);
                    signOut();
                  },
                  className: "flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-secondary/80 px-5 py-3 text-sm font-bold text-foreground hover:bg-secondary transition-all w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-brand" }),
                    "Logout"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/login",
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "flex items-center justify-center gap-2 rounded-xl bg-gradient-premium px-6 py-3 text-sm font-bold text-white shadow-md w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                    "Login"
                  ]
                }
              )
            ] })
          }
        ) })
      ]
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
      ["Categories near you", "/"],
      ["Blog", "/about"],
      ["Contact us", "/about"],
      ["Reviews", "/about"]
    ]
  },
  {
    title: "For professionals",
    links: [
      ["Register as a Dealer", "/partner"],
      ["Dealer Login", "/dealer-portal"]
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500 font-medium", children: [
                "© ",
                (/* @__PURE__ */ new Date()).getFullYear(),
                " Vendor99 Services Pvt. Ltd. All rights reserved."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500 font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-brand" })
                ] }),
                "Proud partner's With"
              ] })
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
function OfferPopup() {
  const [activeOffer, setActiveOffer] = reactExports.useState(null);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(false);
  const initialLoadRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    if ("Notification" in window && Notification.permission !== "denied") {
      Notification.requestPermission();
    }
    const q = query(collection(db, "offers"), where("isActive", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let latestOffer = null;
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (!latestOffer || data.createdAt?.seconds > latestOffer.createdAt?.seconds) {
          latestOffer = { id: doc.id, ...data };
        }
      });
      if (!initialLoadRef.current) {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added" && change.doc.data().isActive) {
            const newOfferData = { id: change.doc.id, ...change.doc.data() };
            if (Notification.permission === "granted") {
              new Notification("Vendor99 🎉 Festival Discount!", {
                body: newOfferData.title,
                icon: newOfferData.imageUrl || "/logo.png"
              });
            }
            setActiveOffer(newOfferData);
            setIsOpen(true);
          }
        });
      } else {
        initialLoadRef.current = false;
        if (latestOffer) {
          const dismissedOffers = JSON.parse(localStorage.getItem("dismissedOffers") || "[]");
          if (!dismissedOffers.includes(latestOffer.id)) {
            setActiveOffer(latestOffer);
            setTimeout(() => setIsOpen(true), 1500);
          }
        }
      }
    });
    return () => unsubscribe();
  }, []);
  const handleClose = () => {
    setIsOpen(false);
    if (activeOffer) {
      const dismissedOffers = JSON.parse(localStorage.getItem("dismissedOffers") || "[]");
      if (!dismissedOffers.includes(activeOffer.id)) {
        dismissedOffers.push(activeOffer.id);
        localStorage.setItem("dismissedOffers", JSON.stringify(dismissedOffers));
      }
    }
  };
  const handleCopyCode = () => {
    if (activeOffer?.discountCode) {
      navigator.clipboard.writeText(activeOffer.discountCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && activeOffer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
        onClick: handleClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
        className: "relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden",
        children: [
          activeOffer.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-48 w-full relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: activeOffer.imageUrl, alt: activeOffer.title, className: "w-full h-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-32 w-full bg-gradient-to-r from-brand to-brand-hover relative overflow-hidden flex items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-16 w-16 text-white opacity-90" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleClose,
              className: "absolute top-4 right-4 h-8 w-8 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block bg-brand/10 text-brand font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-4", children: "Limited Time Offer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-extrabold text-slate-800 mb-3", children: activeOffer.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mb-8 leading-relaxed font-medium", children: activeOffer.description }),
            activeOffer.discountCode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-2", children: "Use Promo Code" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-2 pl-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-lg text-slate-800 tracking-wider", children: activeOffer.discountCode }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: handleCopyCode,
                    className: `flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${copied ? "bg-emerald-100 text-emerald-700" : "bg-brand hover:bg-brand-dark text-white"}`,
                    children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
                      " Copied!"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }),
                      " Copy"
                    ] })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleClose,
                className: "w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition-colors",
                children: "Maybe Later"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OfferPopup, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  SiteLayout as S
};
