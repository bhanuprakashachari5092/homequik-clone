import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Droplets, Check } from "lucide-react";

export const Route = createFileRoute("/native")({
  head: () => ({
    meta: [
      { title: "Native by Vendor99 — Smart water purifiers" },
      {
        name: "description",
        content:
          "Smart water purifiers, locks and security cameras from Native. Designed for Indian homes.",
      },
    ],
  }),
  component: NativePage,
});

const features = [
  "RO + UV + UF purification",
  "No service contract needed",
  "App-controlled water quality",
  "Self-cleaning technology",
] as const;

function NativePage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-brand-soft via-background to-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
              <Droplets className="h-3 w-3" /> Native
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Smarter water. <br />
              <span className="text-brand">Smarter home.</span>
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              The first water purifier designed for the way India lives. No annual contracts, no
              surprise costs.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/login"
              className="mt-8 inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Buy now — ₹17,999
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand-soft blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80"
              alt="Native water purifier"
              className="relative w-full rounded-3xl shadow-hover"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
