import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as useAuth, u as useCart, a as useLocation } from "./router-CNBc7bU7.mjs";
import { k as MapPin, l as Search, j as ShoppingBag, U as User, I as Instagram, F as Facebook, n as Twitter, Y as Youtube, o as Apple, S as Smartphone } from "../_libs/lucide-react.mjs";
const nav = [
  { to: "/services", label: "Services" },
  { to: "/native", label: "Native" },
  { to: "/insta-help", label: "Insta Help" },
  { to: "/about", label: "About" }
];
const allServices = [
  "Digital Marketing",
  "Telemarketing",
  "Graphic Design",
  "Web Development",
  "App Development",
  "Printer/Stationery"
];
function SiteHeader() {
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const { location, isLocating, fetchDynamicLocation } = useLocation();
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [isSearchFocused, setIsSearchFocused] = reactExports.useState(false);
  const filteredServices = allServices.filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 10);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-brand text-white font-bold", children: "HQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block text-base font-bold tracking-tight", children: "HomeQuik" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => fetchDynamicLocation(false),
        disabled: isLocating,
        className: "hidden md:flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm hover:border-foreground/40 transition disabled:opacity-50 cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-brand" }),
          isLocating ? "Locating..." : location
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-md hidden lg:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            placeholder: "Search for 'Digital Marketing'...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            onFocus: () => setIsSearchFocused(true),
            onBlur: () => setTimeout(() => setIsSearchFocused(false), 200),
            className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          }
        )
      ] }),
      isSearchFocused && searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full left-0 w-full mt-2 bg-background border border-border rounded-xl shadow-lg z-50 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 text-xs font-semibold text-muted-foreground bg-secondary/30", children: [
          "Top results near ",
          location
        ] }),
        filteredServices.length > 0 ? filteredServices.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/services",
            className: "block px-4 py-2 text-sm hover:bg-secondary transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: service })
          },
          service
        )) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 text-sm text-muted-foreground", children: "No services found" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "ml-auto hidden md:flex items-center gap-1", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        activeProps: { className: "text-brand" },
        inactiveProps: { className: "text-foreground/80" },
        className: "px-3 py-2 text-sm font-medium hover:text-brand transition-colors",
        children: n.label
      },
      n.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/cart",
          className: "relative p-2 rounded-full hover:bg-secondary transition",
          "aria-label": "Cart",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
            totalItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-white", children: totalItems })
          ]
        }
      ),
      user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => signOut(),
          className: "flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary/80 transition cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Logout" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/login",
          className: "flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Login" })
          ]
        }
      )
    ] })
  ] }) });
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-20 border-t border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-brand text-white font-bold", children: "HQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold", children: "HomeQuik" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Expert home services, on demand." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "hover:text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "hover:text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Twitter", className: "hover:text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "YouTube", className: "hover:text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-4 w-4" }) })
        ] })
      ] }),
      columns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: col.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: col.links.map(([label, href]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, className: "hover:text-brand", children: label }) }, label)) })
      ] }, col.title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-start gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " HomeQuik Services Pvt. Ltd. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs hover:border-foreground/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Apple, { className: "h-4 w-4" }),
              " App Store"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs hover:border-foreground/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-4 w-4" }),
              " Google Play"
            ]
          }
        )
      ] })
    ] })
  ] }) });
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
