import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube, Apple, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

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
      ["Categories near you", "/"],
      ["Blog", "/about"],
      ["Contact us", "/about"],
      ["Reviews", "/about"],
    ],
  },
  {
    title: "For professionals",
    links: [
      ["Register as a Dealer", "/partner"],
      ["Dealer Login", "/dealer-portal"],
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
    <motion.footer 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="mt-24 border-t border-white/10 bg-ink text-white overflow-hidden relative"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-50" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Vendor99 Logo" className="h-20 md:h-28 w-auto animate-float group-hover:scale-110 transition-all duration-500 bg-white rounded-xl px-3 py-2 shadow-lg" />
            </div>
            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-xs">
              Premium B2B & Home tech services, on demand. Empowering modern living.
            </p>
            <div className="mt-8 flex gap-4 text-slate-400">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white/50">{col.title}</h4>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="hover:text-brand hover:translate-x-1 inline-block transition-all">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500 font-medium">
              © {new Date().getFullYear()} Vendor99 Services Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Proud partner's With
            </p>
          </div>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Apple className="h-5 w-5" /> App Store
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Smartphone className="h-5 w-5" /> Google Play
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
