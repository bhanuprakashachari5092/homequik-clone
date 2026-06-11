import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c } from "../_libs/lottiefiles__dotlottie-react.mjs";
import "../_libs/firebase.mjs";
import { g as getAnalytics } from "../_libs/firebase__analytics.mjs";
import { o as onAuthStateChanged, s as signOut, g as getAuth } from "../_libs/firebase__auth.mjs";
import { c as getApps, i as initializeApp, g as getApp } from "../_libs/firebase__app.mjs";
import "../_libs/firebase__logger.mjs";
import { c as collection, a as addDoc, s as serverTimestamp, g as getFirestore } from "../_libs/firebase__firestore.mjs";
import { g as getStorage } from "../_libs/firebase__storage.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/jspdf-autotable.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "../_libs/isbot.mjs";
import "../_libs/lottiefiles__dotlottie-web.mjs";
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
const appCss = "/assets/styles-BEHnxFVq.css";
const v = "5.7.4";
const fr = 30;
const ip = 0;
const op = 60;
const w = 512;
const h = 512;
const nm = "Spinner";
const ddd = 0;
const assets = [];
const layers = [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Shape Layer 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0] }, { "t": 60, "s": [360] }], "ix": 10 }, "p": { "a": 0, "k": [256, 256, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [200, 200], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.145, 0.388, 0.922, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 30, "ix": 5 }, "lc": 2, "lj": 2, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 0, "ix": 1 }, "e": { "a": 0, "k": 75, "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 3, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 60, "st": 0, "bm": 0 }];
const spinnerJson = {
  v,
  fr,
  ip,
  op,
  w,
  h,
  nm,
  ddd,
  assets,
  layers
};
function Loader({ fullScreen = false, text = "Loading...", size = "md" }) {
  const sizeClasses = {
    xs: "w-8 h-8",
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-48 h-48"
  };
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${sizeClasses[size]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      c,
      {
        data: JSON.stringify(spinnerJson),
        loop: true,
        autoplay: true
      }
    ) }),
    text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-brand font-semibold text-sm animate-pulse tracking-wide", children: text })
  ] });
  if (fullScreen) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/80 dark:bg-slate-900/80 p-8 rounded-3xl shadow-premium border border-white/20", children: content }) });
  }
  return content;
}
const firebaseConfig = {
  apiKey: "AIzaSyC8yfL_9YR9ZvfO9ID6MKfn3eqCpZdhy-8",
  authDomain: "homequik-clone.firebaseapp.com",
  projectId: "homequik-clone",
  storageBucket: "homequik-clone.firebasestorage.app",
  messagingSenderId: "956042980288",
  appId: "1:956042980288:web:df5c2ef1a53848b3f03625",
  measurementId: "G-534LQS00XG"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
getStorage(app);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value: { user, loading, signOut: signOut$1 }, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { fullScreen: true, text: "Initializing...", size: "lg" }) : children });
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
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
            {
              headers: {
                "Accept-Language": "en-US,en;q=0.9"
              }
            }
          );
          const data = await res.json();
          const addr = data.address || {};
          const area = addr.suburb || addr.neighbourhood || addr.residential || addr.village;
          const city = addr.city || addr.town || addr.county || addr.state_district;
          let displayLoc = "Location Found";
          if (area && city) {
            displayLoc = `${area}, ${city}`;
          } else if (city) {
            displayLoc = city;
          } else if (area) {
            displayLoc = area;
          }
          setLocation(displayLoc);
          if (!silent) toast.success(`Location set to ${displayLoc}`);
        } catch (error) {
          console.error("Error fetching location details:", error);
          if (!silent) toast.error("Failed to get city name from coordinates.");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        if (!silent) toast.dismiss("loc-toast");
        if (error.code === error.PERMISSION_DENIED) {
          if (!silent) toast.error("Location permission denied. Please allow it in site settings.");
        } else if (error.code === error.TIMEOUT) {
          if (!silent) toast.error("Location request timed out.");
        } else {
          if (!silent) toast.error("Failed to detect location. Please check your device settings.");
        }
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 1e4, maximumAge: 0 }
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
  const updateLocation = (newLocation) => {
    setLocation(newLocation);
    toast.success(`Location manually set to ${newLocation}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LocationContext.Provider, { value: { location, isLocating, fetchDynamicLocation, updateLocation }, children });
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
const Route$b = createRootRouteWithContext()({
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
  errorComponent: ErrorComponent,
  pendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { fullScreen: true, text: "Loading...", size: "lg" })
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
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LocationProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) }) });
}
const $$splitComponentImporter$a = () => import("./quote-BQixpZfT.mjs");
const Route$a = createFileRoute("/quote")({
  head: () => ({
    meta: [{
      title: "Get Free Quote — Vendor99"
    }, {
      name: "description",
      content: "Request a free quote for CCTV installation, biometrics, and security solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./partner--00qxRkZ.mjs");
const Route$9 = createFileRoute("/partner")({
  head: () => ({
    meta: [{
      title: "Dealer Onboarding — Vendor99"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./login-BQ0x8LJk.mjs");
const Route$8 = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Login or Sign up — Vendor99"
    }, {
      name: "description",
      content: "Login to book trusted professionals."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./dealer-portal-DtRgQG2k.mjs");
const Route$7 = createFileRoute("/dealer-portal")({
  head: () => ({
    meta: [{
      title: "Dealer Portal — Vendor99"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./dealer-BNRLYxwH.mjs");
const Route$6 = createFileRoute("/dealer")({
  head: () => ({
    meta: [{
      title: "Find Nearest Dealer — Vendor99"
    }, {
      name: "description",
      content: "Locate verified CCTV and security system dealers near you."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./cart-DXT7yFNg.mjs");
const Route$5 = createFileRoute("/cart")({
  head: () => ({
    meta: [{
      title: "Your cart — Vendor99"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./book-CvjAJPq-.mjs");
const Route$4 = createFileRoute("/book")({
  head: () => ({
    meta: [{
      title: "Book Service — Vendor99"
    }, {
      name: "description",
      content: "Book CCTV and tech services online instantly."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./become-partner-C8jnXoYF.mjs");
const Route$3 = createFileRoute("/become-partner")({
  head: () => ({
    meta: [{
      title: "Become a Partner — Vendor99"
    }, {
      name: "description",
      content: "Join India's fastest growing network of professionals."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin-C8sr4dwp.mjs");
const Route$2 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin Dashboard — Vendor99"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-pcku_4wy.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Vendor99"
    }, {
      name: "description",
      content: "Vendor99 connects businesses with trained, background-checked tech professionals."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BR3Ri4Lk.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Vendor99 | Premium Tech & Business Services"
    }, {
      name: "description",
      content: "Expert tech professionals at your service."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const QuoteRoute = Route$a.update({
  id: "/quote",
  path: "/quote",
  getParentRoute: () => Route$b
});
const PartnerRoute = Route$9.update({
  id: "/partner",
  path: "/partner",
  getParentRoute: () => Route$b
});
const LoginRoute = Route$8.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$b
});
const DealerPortalRoute = Route$7.update({
  id: "/dealer-portal",
  path: "/dealer-portal",
  getParentRoute: () => Route$b
});
const DealerRoute = Route$6.update({
  id: "/dealer",
  path: "/dealer",
  getParentRoute: () => Route$b
});
const CartRoute = Route$5.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$b
});
const BookRoute = Route$4.update({
  id: "/book",
  path: "/book",
  getParentRoute: () => Route$b
});
const BecomePartnerRoute = Route$3.update({
  id: "/become-partner",
  path: "/become-partner",
  getParentRoute: () => Route$b
});
const AdminRoute = Route$2.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  BecomePartnerRoute,
  BookRoute,
  CartRoute,
  DealerRoute,
  DealerPortalRoute,
  LoginRoute,
  PartnerRoute,
  QuoteRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
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
  Loader as L,
  auth as a,
  useCart as b,
  useAuth as c,
  db as d,
  router as r,
  useLocation as u
};
