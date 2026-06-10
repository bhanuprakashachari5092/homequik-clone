import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vendor99" },
      {
        name: "description",
        content:
          "Vendor99 connects businesses with trained, background-checked tech professionals.",
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

      {/* Collaborations Marquee */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-6 overflow-hidden relative">
          <div className="flex items-center justify-center mb-8">
             <div className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-widest shadow-sm hover:shadow-md hover:border-slate-300 transition-all inline-flex items-center gap-3 cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                </span>
                In Proud Collaboration With
             </div>
          </div>
          <div className="flex w-full overflow-hidden relative group">
             {/* We use 3 blocks of the same content to create the seamless infinite scroll */}
             <div className="flex w-max animate-marquee-reverse whitespace-nowrap group-hover:[animation-play-state:paused] transition-all duration-300">
                {/* Block 1 */}
                <div className="flex items-center gap-24 md:gap-32 px-12 md:px-16">
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/hikvision-v2.png" alt="HIKVISION" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/cpplus-v2.png" alt="CP PLUS" className="w-full h-auto object-contain scale-[1.35] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.45]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/dahua-v2.png" alt="dahua" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/secureye-v2.png" alt="SECUREYE" className="w-full h-auto object-contain scale-[1.1] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.2]" />
                   </div>
                </div>
                {/* Block 2 */}
                <div className="flex items-center gap-24 md:gap-32 px-12 md:px-16">
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/hikvision-v2.png" alt="HIKVISION" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/cpplus-v2.png" alt="CP PLUS" className="w-full h-auto object-contain scale-[1.35] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.45]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/dahua-v2.png" alt="dahua" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/secureye-v2.png" alt="SECUREYE" className="w-full h-auto object-contain scale-[1.1] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.2]" />
                   </div>
                </div>
                {/* Block 3 */}
                <div className="flex items-center gap-24 md:gap-32 px-12 md:px-16">
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/hikvision-v2.png" alt="HIKVISION" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/cpplus-v2.png" alt="CP PLUS" className="w-full h-auto object-contain scale-[1.35] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.45]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/dahua-v2.png" alt="dahua" className="w-full h-auto object-contain scale-[1.25] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.35]" />
                   </div>
                   <div className="w-32 md:w-48 flex items-center justify-center mix-blend-multiply">
                      <img src="/logos/secureye-v2.png" alt="SECUREYE" className="w-full h-auto object-contain scale-[1.1] transition-all duration-300 hover:animate-pulse hover:-translate-y-3 hover:scale-[1.2]" />
                   </div>
                </div>
             </div>
          </div>
          {/* Gradients to fade edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
        </div>
      </section>
    </SiteLayout>
  );
}
