"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Settings, Wallet } from "lucide-react";

const navLinks = [
  { label: "Explore",       href: "/explore" },
  { label: "Compare",       href: "/compare" },
  { label: "Pricing",       href: "/pricing" },
  { label: "Documentation", href: "/documentation" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-card bg-bg-secondary/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="gradient-text text-xl font-bold tracking-tight">
          Crypsight
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-brand-cyan font-medium border-b border-brand-cyan pb-0.5"
                    : "text-text-nav hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-brand-purple hover:text-brand-purple-dim transition-colors">
            <Wallet size={18} />
          </button>
          <button className="p-2 text-brand-purple hover:text-brand-purple-dim transition-colors">
            <Settings size={18} />
          </button>
          <Button className="rounded-md bg-brand-purple hover:bg-brand-purple-dim text-[#1a0a2e] font-semibold text-sm px-5">
            Connect Wallet
          </Button>
        </div>

      </div>
    </header>
  );
}