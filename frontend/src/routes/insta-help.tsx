import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Zap, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/insta-help")({
  head: () => ({
    meta: [
      { title: "Insta Help — Quick fixes in under 15 minutes" },
      {
        name: "description",
        content: "Get a verified pro at your door in 15 minutes for small fixes around the house.",
      },
    ],
  }),
  component: InstaHelpPage,
});

const tasks = [
  { title: "Hang a frame", price: "₹99" },
  { title: "Fix a tap leak", price: "₹149" },
  { title: "Replace a bulb", price: "₹79" },
  { title: "Set up a TV", price: "₹299" },
  { title: "Assemble furniture", price: "₹399" },
  { title: "Re-key a lock", price: "₹249" },
] as const;

function InstaHelpPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-brand-soft">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
            <Zap className="h-3 w-3" /> Insta Help
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            A pro at your door in 15 minutes.
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Small fixes shouldn't wait. Tap a task, we'll send a vetted professional now.
          </p>
          <div className="mt-6 flex gap-6 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand" /> 15-min ETA
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> Insured visits
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-xl font-bold md:text-2xl">Popular quick tasks</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((t) => (
            <div
              key={t.title}
              className="flex items-center justify-between rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Starts at {t.price}</p>
              </div>
              <Link
                to="/login"
                className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark"
              >
                Book
              </Link>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
