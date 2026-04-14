'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Settings, Wallet, Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Explore', href: '/explore' },
  { label: 'Compare', href: '/compare' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Documentation', href: '/documentation' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-card bg-bg-secondary/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="gradient-text text-xl font-bold tracking-tight"
        >
          Crypsight
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-brand-cyan font-medium border-b border-brand-cyan pb-0.5'
                    : 'text-text-nav hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right side — hidden on mobile */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Mobile right side — hidden on desktop */}
        <div className="flex md:hidden items-center gap-2">
          <Button className="rounded-md bg-brand-purple hover:bg-brand-purple-dim text-[#1a0a2e] font-semibold text-xs px-3 h-8">
            Connect
          </Button>

          {/* Hamburger Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-text-secondary hover:text-white transition-colors">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-border-card bg-bg-secondary p-0"
            >
              {/* Sheet header */}
              <div className="border-b border-border-card px-6 py-5">
                <span className="gradient-text text-lg font-bold tracking-tight">
                  Crypsight
                </span>
              </div>

              {/* Sheet nav links */}
              <nav className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-md px-3 py-3 text-sm transition-colors duration-200 ${
                        isActive
                          ? 'bg-brand-purple/10 text-brand-cyan font-medium'
                          : 'text-text-nav hover:bg-bg-card hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Sheet footer */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-border-card p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 px-3">
                  <button className="text-brand-purple hover:text-brand-purple-dim transition-colors">
                    <Wallet size={18} />
                  </button>
                  <button className="text-brand-purple hover:text-brand-purple-dim transition-colors">
                    <Settings size={18} />
                  </button>
                </div>
                <Button className="w-full rounded-md bg-brand-purple hover:bg-brand-purple-dim text-[#1a0a2e] font-semibold text-sm">
                  Connect Wallet
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
