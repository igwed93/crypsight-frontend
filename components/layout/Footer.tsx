import Link from "next/link";
import { Globe, Terminal } from "lucide-react";

const footerLinks = [
  {
    heading: "Platform",
    links: [
      { label: "Real-time Feed",      href: "/feed" },
      { label: "Protocol Comparison", href: "/compare" },
      { label: "Whale Tracker",       href: "/whales" },
      { label: "API Docs",            href: "/docs/api" },
    ],
  },
  {
    heading: "Legal & Governance",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security Audit", href: "/security" },
      { label: "Status",         href: "/status" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Developer Portal", href: "/developers" },
      { label: "Brand Assets",     href: "/brand" },
      { label: "Newsletter",       href: "/newsletter" },
      { label: "Contact Support",  href: "/support" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-card">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="gradient-text text-xl font-bold tracking-tight w-fit">
              Crypsight
            </Link>
            <p className="text-sm leading-relaxed text-text-secondary max-w-50">
              Leading the next generation of on-chain intelligence for the global architect.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              <button className="p-2 rounded-md bg-bg-card text-text-secondary hover:text-white transition-colors">
                <Globe size={16} />
              </button>
              <button className="p-2 rounded-md bg-bg-card text-text-secondary hover:text-white transition-colors">
                <Terminal size={16} />
              </button>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.heading} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold tracking-widest text-text-secondary uppercase">
                {column.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-border-card" />

        {/* Bottom bar */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs tracking-widest text-text-muted uppercase">
            © 2024 Crypsight Analytics. Engineered for the Neon Architect.
          </p>
          <p className="text-xs tracking-widest text-text-muted uppercase">
            V2.0.4-Beta
          </p>
        </div>

      </div>
    </footer>
  );
}