'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BarChart3, 
  Network, 
  Briefcase, 
  LifeBuoy, 
  FileText,
  Wallet,
  Layers,
  Database,
  Shield,
  Zap
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// 1. Define the two different navigation sets
const exploreMenuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Networks', href: '/networks', icon: Network },
  { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
];

const compareMenuItems = [
  { name: 'Overview', href: '#', icon: LayoutDashboard },
  { name: 'Layer 1s', href: '#', icon: Layers },
  { name: 'Layer 2s', href: '#', icon: Layers },
  { name: 'DeFi TVL', href: '#', icon: Database },
  { name: 'NFT Volume', href: '#', icon: BarChart3 },
  { name: 'Security', href: '#', icon: Shield },
];

const footerItems = [
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Docs', href: '/docs', icon: FileText },
];

interface SidebarProps {
  mode?: 'explore' | 'compare';
}

export default function Sidebar({ mode = 'explore' }: SidebarProps) {
  const pathname = usePathname();

  // Pick the menu based on the mode prop
  const currentMenu = mode === 'explore' ? exploreMenuItems : compareMenuItems;

  return (
    <aside className="w-64 bg-bg-primary border-r border-border-card flex flex-col h-full shrink-0 transition-all duration-300">
      {/* Brand Logo Area */}
      <div className="p-6">
        <Link href="/" className="gradient-text text-xl font-bold tracking-tight">
          Luminescent Ledger
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 mt-4 overflow-y-auto">
        <h3 className="px-2 text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">
          {mode === 'explore' ? 'Main Menu' : 'Analysis Menu'}
        </h3>
        <div className="space-y-1">
          {currentMenu.map((item) => {
            // Logic: Highlight 'Networks' in explore mode, or 'Layer 1s' in compare mode
            const isActive = mode === 'explore' 
              ? pathname.startsWith(item.href) 
              : item.name === 'Layer 1s'; 

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group",
                  isActive 
                    ? "bg-bg-card/60 text-brand-cyan border border-white/5" 
                    : "text-text-secondary hover:bg-bg-card-hover hover:text-white"
                )}
              >
                <item.icon className={cn("w-4 h-4", isActive ? "text-brand-cyan" : "group-hover:text-white")} />
                <span className="text-sm font-medium">{item.name}</span>
                {isActive && mode === 'compare' && (
                   <div className="ml-auto w-1 h-4 bg-brand-cyan rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 space-y-6">
        <Button 
          className="w-full bg-brand-purple hover:bg-brand-purple-dim text-[#1a0a2e] font-bold py-6 rounded-md shadow-[0_4px_20px_rgba(168,85,247,0.2)]"
        >
          <Wallet className="w-4 h-4 mr-2" />
          Connect Wallet
        </Button>

        <div className="space-y-1 pb-4">
          {footerItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text-secondary hover:text-white transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}