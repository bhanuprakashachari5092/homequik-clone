import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-C3G13g0Z.mjs";
import { M as MapPin, e as Search, S as Star, A as ArrowRight, c as ShieldCheck, b as Clock, f as Sparkles } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const categories = [{
  name: "Women's Salon & Spa",
  emoji: "💇‍♀️",
  to: "/services"
}, {
  name: "Men's Salon & Massage",
  emoji: "💈",
  to: "/services"
}, {
  name: "AC & Appliance Repair",
  emoji: "❄️",
  to: "/services"
}, {
  name: "Cleaning & Pest Control",
  emoji: "🧹",
  to: "/services"
}, {
  name: "Electrician, Plumber & Carpenter",
  emoji: "🔧",
  to: "/services"
}, {
  name: "Native Water Purifier",
  emoji: "💧",
  to: "/native"
}, {
  name: "Painting & Waterproofing",
  emoji: "🎨",
  to: "/services"
}, {
  name: "Wall Panels",
  emoji: "🪵",
  to: "/services"
}];
const mostBooked = [{
  title: "Bathroom cleaning",
  price: "₹399",
  rating: 4.81,
  reviews: "2.1M",
  img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80"
}, {
  title: "Classic facial",
  price: "₹699",
  rating: 4.79,
  reviews: "1.4M",
  img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80"
}, {
  title: "AC service & repair",
  price: "₹599",
  rating: 4.84,
  reviews: "3.2M",
  img: "https://images.unsplash.com/photo-1631545308456-39b1f8c69f31?w=600&q=80"
}, {
  title: "Haircut for men",
  price: "₹349",
  rating: 4.83,
  reviews: "900K",
  img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80"
}, {
  title: "Full home painting",
  price: "₹12,999",
  rating: 4.76,
  reviews: "120K",
  img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80"
}, {
  title: "Pest control",
  price: "₹1,299",
  rating: 4.78,
  reviews: "550K",
  img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
}];
const benefits = [{
  icon: ShieldCheck,
  title: "Verified professionals",
  desc: "Background-checked, trained experts."
}, {
  icon: Star,
  title: "Upfront pricing",
  desc: "Transparent rates. No surprises at the door."
}, {
  icon: Clock,
  title: "On-time service",
  desc: "Same-day slots, ready when you are."
}, {
  icon: Sparkles,
  title: "Sanitised tools",
  desc: "Hygienic, single-use kits for every visit."
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-to-br from-brand-soft via-background to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-brand" }),
          " Now serving Bangalore"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl", children: [
          "Home services, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "on demand." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-base text-muted-foreground md:text-lg", children: "Expert professionals for salon, cleaning, repairs, painting and more — at your doorstep in under 60 minutes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-card p-3 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-xl bg-secondary px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search for 'haircut', 'AC repair', 'cleaning'...", className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark", children: "Search" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2 px-1", children: ["AC service", "Deep cleaning", "Salon at home", "Plumber"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground", children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-brand text-brand" }),
            " 4.8 avg rating"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "12M+ happy customers" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden md:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-6 -right-6 h-72 w-72 rounded-full bg-brand-soft blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid grid-cols-2 gap-4", children: categories.slice(0, 4).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: `rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-hover hover:-translate-y-1 transition ${i % 2 ? "mt-8" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: c.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold leading-tight", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-brand", children: "Book now →" })
        ] }, c.name)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "What are you looking for?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "hidden text-sm font-medium text-brand hover:underline md:inline-flex", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 inline h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "rounded-xl border border-border bg-card p-5 text-left hover:border-brand hover:shadow-card transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: c.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold leading-snug", children: c.name })
      ] }, c.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "Most booked services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Loved by Bangalore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: mostBooked.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-hover transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-brand text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: s.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "(",
              s.reviews,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-base font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: s.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-brand", children: "Book →" })
          ] })
        ] })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "The HomeQuik promise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Why millions trust us with their homes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-brand-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-6 w-6 text-brand" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold", children: b.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.desc })
      ] }, b.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-8 p-10 md:grid-cols-2 md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold md:text-4xl", children: "Get the HomeQuik app" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-background/70", children: "Faster bookings, exclusive offers, live tracking and chat with your professional." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground hover:opacity-90", children: "↓ App Store" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground hover:opacity-90", children: "↓ Google Play" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative hidden h-64 md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid grid-cols-3 gap-3 opacity-90", children: categories.slice(0, 6).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/10 p-4 backdrop-blur-sm animate-float", style: {
        animationDelay: `${i * 0.3}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: c.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs", children: c.name.split(" ")[0] })
      ] }, c.name)) }) })
    ] }) }) })
  ] });
}
export {
  Home as component
};
