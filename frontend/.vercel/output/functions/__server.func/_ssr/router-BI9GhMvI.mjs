import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { S as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import "../_libs/firebase.mjs";
import { g as getAnalytics } from "../_libs/firebase__analytics.mjs";
import { o as onAuthStateChanged, s as signOut, g as getAuth } from "../_libs/firebase__auth.mjs";
import { i as initializeApp } from "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import { c as collection, a as addDoc, s as serverTimestamp, g as getFirestore } from "../_libs/firebase__firestore.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { V as Video, M as Megaphone, P as PhoneCall, a as PenTool, C as Code, S as Smartphone, b as Printer } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-D6d_4PVl.css";
const firebaseConfig = {
  apiKey: "AIzaSyC8yfL_9YR9ZvfO9ID6MKfn3eqCpZdhy-8",
  authDomain: "homequik-clone.firebaseapp.com",
  projectId: "homequik-clone",
  storageBucket: "homequik-clone.firebasestorage.app",
  messagingSenderId: "956042980288",
  appId: "1:956042980288:web:df5c2ef1a53848b3f03625",
  measurementId: "G-534LQS00XG"
};
const app = initializeApp(firebaseConfig);
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
const Route$8 = createRootRouteWithContext()({
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
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocationProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) }) });
}
const $$splitComponentImporter$7 = () => import("./native-BcvzRZOS.mjs");
const Route$7 = createFileRoute("/native")({
  head: () => ({
    meta: [{
      title: "Native by HomeQuik — Smart water purifiers"
    }, {
      name: "description",
      content: "Smart water purifiers, locks and security cameras from Native. Designed for Indian homes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./login-OzESJgvL.mjs");
const Route$6 = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Login or Sign up — HomeQuik"
    }, {
      name: "description",
      content: "Login to book trusted professionals."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./insta-help-Bc-IR5QU.mjs");
const Route$5 = createFileRoute("/insta-help")({
  head: () => ({
    meta: [{
      title: "Insta Help — Quick fixes in under 15 minutes"
    }, {
      name: "description",
      content: "Get a verified pro at your door in 15 minutes for small fixes around the house."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cart-DKh-qN3m.mjs");
const Route$4 = createFileRoute("/cart")({
  head: () => ({
    meta: [{
      title: "Your cart — HomeQuik"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-GJTBx0d7.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — HomeQuik"
    }, {
      name: "description",
      content: "HomeQuik connects businesses with trained, background-checked tech professionals."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-58XpuvHY.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "HomeQuik | Expert B2B tech & business services"
    }, {
      name: "description",
      content: "Book trusted professionals for Digital Marketing, Web Development, CCTV, App Development and more. Verified experts, enterprise-grade solutions, upfront pricing."
    }, {
      property: "og:title",
      content: "HomeQuik — Tech services on demand"
    }, {
      property: "og:description",
      content: "Expert tech professionals at your service."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./services.index-CXX3v1Yd.mjs");
const Route$1 = createFileRoute("/services/")({
  head: () => ({
    meta: [{
      title: "All services — HomeQuik"
    }, {
      name: "description",
      content: "Browse all tech and business services: Digital Marketing, Web Development, CCTV, and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const servicesData = [
  {
    name: "Business & Digital Services",
    items: [
      {
        id: "cctv-surveillance",
        title: "CCTV & Surveillance",
        details: "Complete Enterprise Security Solutions",
        price: "₹18,000+",
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
          { label: "Hardware & Cameras", value: "₹12,000" },
          { label: "Installation & Cabling", value: "₹4,000" },
          { label: "DVR/NVR Setup", value: "₹2,000" }
        ]
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        details: "SEO, Social Ads, Lead Generation",
        price: "₹25,000 / Month",
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
          { label: "Ad Campaign Setup", value: "₹10,000" },
          { label: "SEO & Content", value: "₹10,000" },
          { label: "Management Fee", value: "₹5,000" }
        ]
      },
      {
        id: "telemarketing",
        title: "Telemarketing",
        details: "B2B/B2C Outbound Campaigns",
        price: "₹15,000 / Month",
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
          { label: "Dedicated Caller", value: "₹10,000" },
          { label: "Telecom Infrastructure", value: "₹2,500" },
          { label: "Scripting & QA", value: "₹2,500" }
        ]
      },
      {
        id: "graphic-design",
        title: "Graphic Design",
        details: "Branding & Social Assets",
        price: "₹5,000 / Package",
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
          { label: "Concept Creation", value: "₹2,000" },
          { label: "Design Execution", value: "₹2,000" },
          { label: "Source File Delivery", value: "₹1,000" }
        ]
      },
      {
        id: "web-development",
        title: "Web Development",
        details: "Responsive Custom Build",
        price: "₹35,000+",
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
          { label: "Design & Prototyping", value: "₹10,000" },
          { label: "Frontend & Backend Dev", value: "₹20,000" },
          { label: "Deployment & Setup", value: "₹5,000" }
        ]
      },
      {
        id: "app-development",
        title: "App Development",
        details: "iOS & Android Development",
        price: "₹1,50,000+",
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
          { label: "UI/UX & Architecture", value: "₹40,000" },
          { label: "App Development", value: "₹80,000" },
          { label: "Testing & Deployment", value: "₹30,000" }
        ]
      },
      {
        id: "printer-stationery",
        title: "Printer/Stationery",
        details: "Custom Corporate Printing",
        price: "Quote per volume",
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
          { label: "Design Setup", value: "Custom" },
          { label: "Material Cost", value: "Custom" },
          { label: "Printing Volume", value: "Custom" }
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
const $$splitComponentImporter = () => import("./services_._serviceId-DL3wiaL1.mjs");
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
      title: `${loaderData.service.title} — HomeQuik Services`
    }, {
      name: "description",
      content: loaderData.service.description
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const NativeRoute = Route$7.update({
  id: "/native",
  path: "/native",
  getParentRoute: () => Route$8
});
const LoginRoute = Route$6.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$8
});
const InstaHelpRoute = Route$5.update({
  id: "/insta-help",
  path: "/insta-help",
  getParentRoute: () => Route$8
});
const CartRoute = Route$4.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const ServicesIndexRoute = Route$1.update({
  id: "/services/",
  path: "/services/",
  getParentRoute: () => Route$8
});
const ServicesServiceIdRoute = Route.update({
  id: "/services_/$serviceId",
  path: "/services/$serviceId",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CartRoute,
  InstaHelpRoute,
  LoginRoute,
  NativeRoute,
  ServicesServiceIdRoute,
  ServicesIndexRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
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
