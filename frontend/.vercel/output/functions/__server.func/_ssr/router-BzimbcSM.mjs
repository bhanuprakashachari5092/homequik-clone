import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { S as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import "../_libs/firebase.mjs";
import { g as getAnalytics } from "../_libs/firebase__analytics.mjs";
import { o as onAuthStateChanged, s as signOut, g as getAuth } from "../_libs/firebase__auth.mjs";
import { c as getApps, i as initializeApp, g as getApp } from "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import { c as collection, a as addDoc, s as serverTimestamp, g as getFirestore } from "../_libs/firebase__firestore.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { V as Video, F as FingerprintPattern, D as DoorOpen, H as House, L as Laptop, A as Armchair, P as Paintbrush, Z as Zap, B as BatteryCharging, M as Megaphone, a as PhoneCall, b as PenTool, C as Code, S as Smartphone, c as Printer } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/firebase__util.mjs";
import "../_libs/firebase__component.mjs";
import "../_libs/firebase__installations.mjs";
import "../_libs/idb.mjs";
import "../_libs/firebase__webchannel-wrapper.mjs";
import "../_libs/@grpc/grpc-js.mjs";
import "process";
import "tls";
import "fs";
import "os";
import "net";
import "events";
import "http2";
import "http";
import "url";
import "dns";
import "zlib";
import "../_libs/@grpc/proto-loader.mjs";
import "path";
import "../_libs/lodash.camelcase.mjs";
import "../_libs/protobufjs.mjs";
import "../_libs/protobufjs__aspromise.mjs";
import "../_libs/protobufjs__base64.mjs";
import "../_libs/protobufjs__eventemitter.mjs";
import "../_libs/protobufjs__float.mjs";
import "../_libs/@protobufjs/inquire.mjs";
import "../_libs/protobufjs__utf8.mjs";
import "../_libs/protobufjs__pool.mjs";
import "../_libs/long.mjs";
import "../_libs/protobufjs__codegen.mjs";
import "../_libs/protobufjs__fetch.mjs";
import "../_libs/protobufjs__path.mjs";
const appCss = "/assets/styles-CJZQCNZE.css";
const firebaseConfig = {
  apiKey: "AIzaSyC8yfL_9YR9ZvfO9ID6MKfn3eqCpZdhy-8",
  authDomain: "vendor99-clone.firebaseapp.com",
  projectId: "vendor99-clone",
  storageBucket: "vendor99-clone.firebasestorage.app",
  messagingSenderId: "956042980288",
  appId: "1:956042980288:web:df5c2ef1a53848b3f03625",
  measurementId: "G-534LQS00XG"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
if (typeof window !== "undefined") {
  getAnalytics(app);
}
const AuthContext = reactExports.createContext({
  user: null,
  loading: true,
  signOut: async () => {
  }
});
const AuthProvider = ({ children }) => {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const signOut$1 = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value: { user, loading, signOut: signOut$1 }, children });
};
const useAuth = () => reactExports.useContext(AuthContext);
const CartContext = reactExports.createContext(null);
const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [items, setItems] = reactExports.useState([]);
  const [isCheckingOut, setIsCheckingOut] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hq_cart");
      if (saved) {
        try {
          setItems(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse cart", e);
        }
      }
    }
  }, []);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hq_cart", JSON.stringify(items));
    }
  }, [items]);
  const addToCart = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map(
          (i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };
  const clearCart = () => setItems([]);
  const checkout = async () => {
    if (!user) {
      throw new Error("You must be logged in to book a service.");
    }
    if (items.length === 0) {
      throw new Error("Your cart is empty.");
    }
    setIsCheckingOut(true);
    try {
      const ordersRef = collection(db, "bookings");
      await addDoc(ordersRef, {
        userId: user.uid,
        userEmail: user.email,
        items,
        status: "pending",
        createdAt: serverTimestamp(),
        totalItems: items.reduce((sum, i) => sum + i.quantity, 0)
      });
      clearCart();
    } catch (error) {
      console.error("Checkout failed", error);
      throw error;
    } finally {
      setIsCheckingOut(false);
    }
  };
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CartContext.Provider, { value: { items, addToCart, removeFromCart, clearCart, checkout, isCheckingOut, totalItems }, children });
};
const useCart = () => {
  const context = reactExports.useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
const LocationContext = reactExports.createContext(null);
const LocationProvider = ({ children }) => {
  const [location, setLocation] = reactExports.useState("Bangalore");
  const [isLocating, setIsLocating] = reactExports.useState(false);
  const fetchDynamicLocation = (silent = false) => {
    if (typeof window === "undefined" || !navigator.geolocation) return;
    setIsLocating(true);
    if (!silent) {
      toast.info("Please allow location access in your browser popup...", { id: "loc-toast" });
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        if (!silent) toast.dismiss("loc-toast");
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          const data = await res.json();
          const city = data.address.city || data.address.town || data.address.state_district || "Location Found";
          setLocation(city);
          if (!silent) toast.success(`Location set to ${city}`);
        } catch (error) {
          console.error("Error fetching location details:", error);
          if (!silent) toast.error("Failed to get city name.");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        if (!silent) toast.dismiss("loc-toast");
        if (error.code === error.PERMISSION_DENIED) {
          if (!silent) toast.error("Location permission denied. Please allow it in site settings.");
        } else {
          if (!silent) toast.error("Failed to detect location.");
        }
        setIsLocating(false);
      }
    );
  };
  reactExports.useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          fetchDynamicLocation(true);
        } else if (result.state === "prompt") {
          fetchDynamicLocation(false);
        }
      });
    } else {
      fetchDynamicLocation(false);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LocationContext.Provider, { value: { location, isLocating, fetchDynamicLocation }, children });
};
const useLocation = () => {
  const context = reactExports.useContext(LocationContext);
  if (!context) throw new Error("useLocation must be used within a LocationProvider");
  return context;
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocationProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) }) });
}
const $$splitComponentImporter$5 = () => import("./login-C1PkG1Ye.mjs");
const Route$5 = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Login or Sign up — Vendor99"
    }, {
      name: "description",
      content: "Login to book trusted professionals."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cart-DE4_ZjzK.mjs");
const Route$4 = createFileRoute("/cart")({
  head: () => ({
    meta: [{
      title: "Your cart — Vendor99"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-BN-b_99u.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Vendor99"
    }, {
      name: "description",
      content: "Vendor99 connects businesses with trained, background-checked tech professionals."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-iMsdFRHX.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Vendor99 | Premium Tech & Business Services"
    }, {
      name: "description",
      content: "Expert tech professionals at your service."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./services.index-CPoqUC68.mjs");
const Route$1 = createFileRoute("/services/")({
  head: () => ({
    meta: [{
      title: "All services — Vendor99"
    }, {
      name: "description",
      content: "Browse all tech and business services: Digital Marketing, Web Development, CCTV, and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const servicesData = [
  {
    name: "Security & Surveillance",
    items: [
      {
        id: "cctv-surveillance",
        title: "CCTV & Surveillance",
        details: "Complete Enterprise Security Solutions",
        price: "Custom Quote",
        rating: 4.9,
        reviews: "8.5M",
        image: "/services/cctv.png",
        Icon: Video,
        description: "Protect your business with our state-of-the-art 4K CCTV and surveillance systems. We provide end-to-end security solutions including installation, remote monitoring setup, and maintenance for enterprise and commercial properties.",
        features: [
          "4K Ultra HD Night Vision Cameras",
          "30-Day Cloud & Local Storage Backup",
          "Motion Detection & Mobile Alerts",
          "1 Year Free Maintenance & Support"
        ],
        costBreakdown: [
          { label: "Hardware & Cameras", value: "Quote on Request" },
          { label: "Installation & Cabling", value: "Quote on Request" },
          { label: "DVR/NVR Setup", value: "Quote on Request" }
        ]
      },
      {
        id: "biometric-system",
        title: "Biometric System",
        details: "Fingerprint & Retina Access",
        price: "Custom Quote",
        rating: 4.8,
        reviews: "4.2M",
        image: "/services/biometric-system.png",
        Icon: FingerprintPattern,
        description: "Advanced biometric authentication systems for secure facility access and employee time tracking. From fingerprint scanners to facial recognition, we deploy enterprise-grade identity management.",
        features: [
          "Fingerprint & Facial Recognition",
          "Real-time Attendance Tracking",
          "Cloud Software Integration",
          "Anti-spoofing Technology"
        ],
        costBreakdown: [
          { label: "Biometric Scanners", value: "Quote on Request" },
          { label: "Software License", value: "Quote on Request" },
          { label: "Installation & Training", value: "Quote on Request" }
        ]
      },
      {
        id: "access-control",
        title: "Access Control System",
        details: "RFID & Smart Lock Solutions",
        price: "Custom Quote",
        rating: 4.9,
        reviews: "5.1M",
        image: "/services/access-control.png",
        Icon: DoorOpen,
        description: "Restrict and monitor entry to sensitive areas with our smart access control systems. We install electromagnetic locks, RFID card readers, and centralized lockdown management systems.",
        features: [
          "RFID & Smart Card Readers",
          "Electromagnetic Door Locks",
          "Centralized Access Management",
          "Emergency Lockdown Integration"
        ],
        costBreakdown: [
          { label: "Hardware & Controllers", value: "Quote on Request" },
          { label: "RFID Cards/Tags", value: "Quote on Request" },
          { label: "Installation", value: "Quote on Request" }
        ]
      }
    ]
  },
  {
    name: "Smart Home & Automation",
    items: [
      {
        id: "home-automation",
        title: "Home Automation",
        details: "Smart Lighting & Climate Control",
        price: "Custom Quote",
        rating: 4.8,
        reviews: "2.1M",
        image: "/services/home-automation.png",
        Icon: House,
        description: "Transform your living space with intelligent home automation. Control lighting, temperature, curtains, and entertainment systems directly from your smartphone or voice assistant.",
        features: [
          "Voice Assistant Integration",
          "Smart Lighting & Moods",
          "Automated Curtains & Blinds",
          "Energy Consumption Analytics"
        ],
        costBreakdown: [
          { label: "Smart Hub & Sensors", value: "Quote on Request" },
          { label: "Smart Switches", value: "Quote on Request" },
          { label: "Configuration", value: "Quote on Request" }
        ]
      },
      {
        id: "smart-film-glass",
        title: "Smart Film & Glass (PDLC)",
        details: "Privacy On-Demand",
        price: "Custom Quote",
        rating: 4.7,
        reviews: "900K",
        image: "/services/smart-film-glass.png",
        Icon: Laptop,
        description: "Switchable PDLC (Polymer Dispersed Liquid Crystal) smart glass and film installations. Transition any glass surface from transparent to opaque instantly for ultimate privacy.",
        features: [
          "Instant Privacy Control",
          "UV & Heat Rejection",
          "Remote & App Controlled",
          "Retrofit Film Available"
        ],
        costBreakdown: [
          { label: "PDLC Film/Glass per sq.ft", value: "Quote on Request" },
          { label: "Transformers & Wiring", value: "Quote on Request" },
          { label: "Application & Setup", value: "Quote on Request" }
        ]
      }
    ]
  },
  {
    name: "Renovation & Interiors",
    items: [
      {
        id: "home-interior",
        title: "Home Interior",
        details: "Complete Modular & Custom Interiors",
        price: "Custom Quote",
        rating: 4.9,
        reviews: "1.2M",
        image: "/services/home-interior.png",
        Icon: Armchair,
        description: "Transform your living spaces with our premium modular and custom interior design services. From 3D visualization to final execution, we deliver luxurious, functional, and contemporary interiors.",
        features: [
          "Free 3D Design Consultation",
          "Premium Modular Woodwork",
          "Dedicated Project Manager",
          "10-Year Material Warranty"
        ],
        costBreakdown: [
          { label: "Design & Consultation", value: "Quote on Request" },
          { label: "Material & Carpentry", value: "Quote on Request" },
          { label: "Execution & Fit-outs", value: "Quote on Request" }
        ]
      },
      {
        id: "painting",
        title: "Professional Painting",
        details: "Interior & Exterior Painting",
        price: "Custom Quote",
        rating: 4.8,
        reviews: "2.1M",
        image: "/services/painting.png",
        Icon: Paintbrush,
        description: "Refresh your property with our high-quality professional painting services. We offer end-to-end solutions including wall prep, waterproofing, textures, and premium finish coats.",
        features: [
          "Laser Measurement & Masking",
          "Dust-Free Sanding Process",
          "Premium Brand Paints",
          "Post-Painting Cleanup"
        ],
        costBreakdown: [
          { label: "Surface Preparation", value: "Quote on Request" },
          { label: "Paint Material", value: "Quote on Request" },
          { label: "Labor & Execution", value: "Quote on Request" }
        ]
      }
    ]
  },
  {
    name: "Maintenance & Repairs",
    items: [
      {
        id: "electrical-work",
        title: "Electrical Work",
        details: "Wiring, Panels & Repairs",
        price: "Custom Quote",
        rating: 4.8,
        reviews: "6.7M",
        image: "/services/electrical-work.png",
        Icon: Zap,
        description: "Professional electrical services for commercial and residential properties. From fresh wiring and panel upgrades to short-circuit diagnostics and safety audits.",
        features: [
          "Certified Electricians",
          "Safety & Load Audits",
          "Panel Board Installations",
          "24/7 Emergency Repairs"
        ],
        costBreakdown: [
          { label: "Inspection Fee", value: "Quote on Request" },
          { label: "Wiring & Consumables", value: "Quote on Request" },
          { label: "Labor Charges", value: "Quote on Request" }
        ]
      },
      {
        id: "ups-inverter",
        title: "UPS and Invertor",
        details: "Uninterruptible Power Supply",
        price: "Custom Quote",
        rating: 4.9,
        reviews: "3.4M",
        image: "/services/ups-inverter.png",
        Icon: BatteryCharging,
        description: "Ensure zero downtime for your critical systems with enterprise-grade UPS and pure sine-wave inverter installations. Perfect for server rooms, offices, and heavy-duty appliances.",
        features: [
          "Zero Transfer Time",
          "Pure Sine Wave Output",
          "Heavy-duty Tubular Batteries",
          "Load Capacity Analysis"
        ],
        costBreakdown: [
          { label: "UPS/Inverter Unit", value: "Quote on Request" },
          { label: "Battery Bank", value: "Quote on Request" },
          { label: "Load Separation Wiring", value: "Quote on Request" }
        ]
      }
    ]
  },
  {
    name: "Business & Digital Services",
    items: [
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        details: "SEO, Social Ads, Lead Generation",
        price: "Custom Quote",
        rating: 4.9,
        reviews: "3.2M",
        image: "/services/digital-marketing.png",
        Icon: Megaphone,
        description: "Scale your business with our comprehensive digital marketing solutions. From top-ranking SEO strategies to high-converting social media ads, our experts drive qualified leads directly to your sales funnel.",
        features: [
          "Advanced SEO & Keyword Ranking",
          "Meta & Google Ads Management",
          "Dedicated Account Manager",
          "Weekly Performance Reports"
        ],
        costBreakdown: [
          { label: "Ad Campaign Setup", value: "Quote on Request" },
          { label: "SEO & Content", value: "Quote on Request" },
          { label: "Management Fee", value: "Quote on Request" }
        ]
      },
      {
        id: "telemarketing",
        title: "Telemarketing",
        details: "B2B/B2C Outbound Campaigns",
        price: "Custom Quote",
        rating: 4.8,
        reviews: "1.8M",
        image: "/services/telemarketing.png",
        Icon: PhoneCall,
        description: "Boost your sales with our professional outbound telemarketing campaigns. Our trained executives specialize in B2B lead generation, appointment setting, and customer retention strategies.",
        features: [
          "Trained Regional Calling Experts",
          "Custom Script Development",
          "Lead Qualification & CRM Sync",
          "Call Recording & Audits"
        ],
        costBreakdown: [
          { label: "Dedicated Caller", value: "Quote on Request" },
          { label: "Telecom Infrastructure", value: "Quote on Request" },
          { label: "Scripting & QA", value: "Quote on Request" }
        ]
      },
      {
        id: "graphic-design",
        title: "Graphic Design",
        details: "Branding & Social Assets",
        price: "Custom Quote",
        rating: 4.9,
        reviews: "4.5M",
        image: "/services/graphic-design.png",
        Icon: PenTool,
        description: "Elevate your brand's visual identity with our premium graphic design services. We craft stunning logos, social media posts, brochures, and complete branding kits tailored to your industry.",
        features: [
          "Unlimited Revisions",
          "High-Resolution Source Files",
          "Brand Guideline Book",
          "Social Media Ready Assets"
        ],
        costBreakdown: [
          { label: "Concept Creation", value: "Quote on Request" },
          { label: "Design Execution", value: "Quote on Request" },
          { label: "Source File Delivery", value: "Quote on Request" }
        ]
      },
      {
        id: "web-development",
        title: "Web Development",
        details: "Responsive Custom Build",
        price: "Custom Quote",
        rating: 4.9,
        reviews: "2.1M",
        image: "/services/web-development.png",
        Icon: Code,
        description: "Build a high-performance, responsive website that converts visitors into customers. We specialize in modern web technologies, ensuring your site is blazing fast, secure, and SEO-optimized.",
        features: [
          "Custom UI/UX Design",
          "Mobile-First Responsive Build",
          "CMS Integration & Training",
          "1 Year Free Hosting & SSL"
        ],
        costBreakdown: [
          { label: "Design & Prototyping", value: "Quote on Request" },
          { label: "Frontend & Backend Dev", value: "Quote on Request" },
          { label: "Deployment & Setup", value: "Quote on Request" }
        ]
      },
      {
        id: "app-development",
        title: "App Development",
        details: "iOS & Android Development",
        price: "Custom Quote",
        rating: 4.9,
        reviews: "900K",
        image: "/services/app-development.png",
        Icon: Smartphone,
        description: "Transform your business idea into a powerful mobile application. We build native and cross-platform apps for iOS and Android with scalable architectures and stunning user interfaces.",
        features: [
          "iOS & Android Dual Platform",
          "Scalable Cloud Backend",
          "Payment Gateway Integration",
          "App Store & Play Store Publishing"
        ],
        costBreakdown: [
          { label: "UI/UX & Architecture", value: "Quote on Request" },
          { label: "App Development", value: "Quote on Request" },
          { label: "Testing & Deployment", value: "Quote on Request" }
        ]
      },
      {
        id: "printer-stationery",
        title: "Printer/Stationery",
        details: "Custom Corporate Printing",
        price: "Custom Quote",
        rating: 4.8,
        reviews: "1.2M",
        image: "/services/printer-stationery.png",
        Icon: Printer,
        description: "High-quality corporate printing and premium stationery solutions. From business cards and letterheads to custom merchandise and bulk printing, we deliver professional quality with fast turnarounds.",
        features: [
          "Premium Paper Qualities",
          "Color Accurate Bulk Printing",
          "Custom Corporate Gifting",
          "Free Pan-India Delivery"
        ],
        costBreakdown: [
          { label: "Design Setup", value: "Quote on Request" },
          { label: "Material Cost", value: "Quote on Request" },
          { label: "Printing Volume", value: "Quote on Request" }
        ]
      }
    ]
  }
];
function getServiceById(id) {
  for (const group of servicesData) {
    const service = group.items.find((item) => item.id === id);
    if (service) return service;
  }
  return null;
}
const $$splitComponentImporter = () => import("./services_._serviceId-DBQggZ4v.mjs");
const Route = createFileRoute("/services_/$serviceId")({
  loader: ({
    params
  }) => {
    const service = getServiceById(params.serviceId);
    if (!service) {
      throw notFound();
    }
    return {
      service
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.service?.title || "Service"} — Vendor99 Services`
    }, {
      name: "description",
      content: loaderData?.service?.description || "Book trusted professionals."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const LoginRoute = Route$5.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$6
});
const CartRoute = Route$4.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const ServicesIndexRoute = Route$1.update({
  id: "/services/",
  path: "/services/",
  getParentRoute: () => Route$6
});
const ServicesServiceIdRoute = Route.update({
  id: "/services_/$serviceId",
  path: "/services/$serviceId",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CartRoute,
  LoginRoute,
  ServicesServiceIdRoute,
  ServicesIndexRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  auth as a,
  useAuth as b,
  useLocation as c,
  db as d,
  router as r,
  servicesData as s,
  useCart as u
};
