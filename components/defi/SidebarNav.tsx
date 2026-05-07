'use client';

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutGrid, 
  Repeat, 
  Landmark, 
  TrendingUp, 
  Zap, 
  Settings, 
  LifeBuoy,
} from "lucide-react";

const NAV_ITEMS = [
  { name: 'Overview', icon: LayoutGrid, href: '/defi' },
  { name: 'DEXs', icon: Repeat, href: '/defi/dexs' },
  { name: 'Lending', icon: Landmark, href: '/defi/lending' },
  { name: 'Derivatives', icon: TrendingUp, href: '/defi/derivatives' },
  { name: 'Yield', icon: Zap, href: '/defi/yield' },
];

export default function SidebarNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="flex-col w-72 bg-[#0b1221] border-r border-white/5 h-screen sticky top-0 shrink-0 hidden md:flex">
      {/* Brand Logo Section */}
      <div className="p-8 mb-4">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-10 h-10 bg-brand-purple rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-all">
            <TrendingUp size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight">Crypsight</h2>
            <p className="text-[10px] text-text-muted font-medium">v2.4.0</p>
          </div>
        </div>
      </div>

      {/* Main Navigation Items */}
      <nav className="flex-1 px-4 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.name === 'DEXs' && pathname === '/defi'); // Hardcoded for demo
          return (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all group",
                isActive 
                  ? "bg-white/5 text-white" 
                  : "text-text-muted hover:text-text-secondary hover:bg-white/[0.02]"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon size={18} className={cn(isActive ? "text-brand-purple" : "text-text-muted group-hover:text-text-secondary")} />
                <span className="text-xs font-bold tracking-wide uppercase">{item.name}</span>
              </div>
              
              {/* The bright vertical accent from your screenshot */}
              {isActive && (
                <div className="h-5 w-[2px] bg-brand-purple rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions Section */}
      <div className="p-6 space-y-6">
        {/* Compare Protocols Button */}
        <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all text-text-muted hover:text-white">
          Compare Protocols
        </button>

        <div className="space-y-4 pt-4 border-t border-white/5">
          <button className="flex items-center gap-4 px-4 text-text-muted hover:text-white transition-colors">
            <Settings size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Settings</span>
          </button>
          <button className="flex items-center gap-4 px-4 text-text-muted hover:text-white transition-colors">
            <LifeBuoy size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Support</span>
          </button>
        </div>
      </div>
    </aside>
  );
}