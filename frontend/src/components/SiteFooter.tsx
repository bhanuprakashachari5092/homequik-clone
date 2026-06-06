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
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white font-bold">
                HQ
              </span>
              <span className="text-base font-bold">HomeQuik</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Expert home services, on demand.</p>
            <div className="mt-4 flex gap-3 text-muted-foreground">
              <a href="#" aria-label="Instagram" className="hover:text-brand">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-brand">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-brand">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-brand">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="hover:text-brand">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HomeQuik Services Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs hover:border-foreground/40"
            >
              <Apple className="h-4 w-4" /> App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs hover:border-foreground/40"
            >
              <Smartphone className="h-4 w-4" /> Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
