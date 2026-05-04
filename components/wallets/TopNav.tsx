'use client';
import Link from 'next/link';
import { Bell, Settings, User, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

const navLinks = [
  { name: 'Explore', href: '/' },
  { name: 'Compare', href: '/networks' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="h-16 border-b border-border-card bg-bg-primary/50 backdrop-blur-md px-8 flex items-center justify-between shrink-0 z-40">
      {/* Left: Dynamic Navigation Tabs */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all relative py-5",
                isActive 
                  ? "text-brand-purple" 
                  : "text-text-secondary hover:text-white"
              )}
            >
              {link.name}
              {/* Active Indicator Line */}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-purple shadow-[0_0_8px_#a855f7]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <button className="p-2 text-text-secondary hover:text-white transition-colors relative">
            <Bell size={18} />
            {/* Notification Dot */}
            <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-brand-purple rounded-full border border-bg-primary" />
          </button>
          <button className="p-2 text-text-secondary hover:text-white transition-colors">
            <Settings size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-border-card" />

        {/* User Profile */}
        <button className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-linear-to-tr from-brand-purple to-brand-cyan p-px">
            <div className="w-full h-full rounded-full bg-bg-secondary flex items-center justify-center overflow-hidden">
              <User size={16} className="text-white" />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}