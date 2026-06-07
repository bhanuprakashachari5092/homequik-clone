import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube, Apple, Smartphone } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      ["About us", "/about"],
      ["Terms & conditions", "/about"],
      ["Privacy policy", "/about"],
      ["Anti-discrimination policy", "/about"],
      ["Careers", "/about"],
    ],
  },
  {
    title: "For customers",
    links: [
      ["Categories near you", "/services"],
      ["Blog", "/about"],
      ["Contact us", "/about"],
      ["Reviews", "/about"],
    ],
  },
  {
    title: "For professionals",
    links: [
      ["Register as a professional", "/login"],
      ["Partner app", "/login"],
    ],
  },
  {
    title: "Social",
    links: [
      ["Instagram", "/about"],
      ["Facebook", "/about"],
      ["Twitter", "/about"],
      ["LinkedIn", "/about"],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 group">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white font-bold group-hover:scale-105 transition-transform">
                HQ
              </span>
              <span className="text-xl font-extrabold tracking-tight">HomeQuik</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">Premium B2B & Home tech services, on demand.</p>
            <div className="mt-6 flex gap-4 text-gray-400">
              <a href="#" aria-label="Instagram" className="hover:text-brand transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-brand transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-brand transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-brand transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold tracking-wider uppercase text-gray-100">{col.title}</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="hover:text-brand transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()} HomeQuik Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold hover:bg-white/10 transition-colors"
            >
              <Apple className="h-4 w-4" /> App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold hover:bg-white/10 transition-colors"
            >
              <Smartphone className="h-4 w-4" /> Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
