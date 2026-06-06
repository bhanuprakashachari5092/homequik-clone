import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HomeQuik" },
      {
        name: "description",
        content:
          "HomeQuik connects businesses with trained, background-checked tech professionals.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "12M+", label: "Customers" },
  { value: "45K+", label: "Professionals" },
  { value: "60+", label: "Cities" },
  { value: "4.8★", label: "Avg rating" },
] as const;

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Building India's most trusted B2B tech services company.
          </h1>
          <p className="mt-5 text-muted-foreground">
            We empower skilled professionals with training, tools and dignified livelihoods — and
            bring enterprise-grade solutions to your business.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-card"
            >
              <div className="text-3xl font-bold text-brand md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Our mission</h2>
            <p className="mt-3 text-muted-foreground">
              Empower tech professionals to deliver enterprise services like never experienced
              before — with a brand of trust, quality and reliability.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our story</h2>
            <p className="mt-3 text-muted-foreground">
              Started as a small team obsessed with tech and business services done right. Today we
              serve businesses of all sizes to scale faster.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
