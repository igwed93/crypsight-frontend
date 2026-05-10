'use client';
import { Search, Bell, User, Wallet } from 'lucide-react';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function InfraTopNav() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to infrastructure page with search query
      router.push(`/infrastructure?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="h-16 w-full bg-bg-primary backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-[100]">
      <div className="flex items-center gap-4 lg:gap-12">
        {/* Logo */}
        <div>
            <img src="/images/logo.svg" alt="Crypsight Logo" className="w-8 h-8 lg:w-12 lg:h-12" width={60} height={60} />
        </div>

        
        {/* Nav Links - Hidden on mobile, shown on lg+ */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <button className="text-brand-cyan border-b-2 border-brand-cyan pb-1">Ecosystem</button>
          <button className="text-brand-purple hover:text-text-nav">Developers</button>
          <button className="text-brand-purple hover:text-text-nav">Analytics</button>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        {/* Search Bar - Responsive width (doubled) */}
        <form onSubmit={handleSearch} className="relative group w-64 lg:w-48">
          <Search className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 text-text-muted group-focus-within:text-brand-cyan" />
          <input 
            type="text" 
            placeholder="Search infrastructure..." 
            className="bg-bg-card border border-white/5 rounded-full py-2 pl-8 lg:pl-11 pr-3 lg:pr-6 text-[10px] lg:text-[10px] focus:outline-none focus:border-brand-cyan/50 placeholder:text-text-muted w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-brand-purple cursor-pointer" />
        <Wallet className="w-4 h-4 lg:w-5 lg:h-5 text-brand-purple cursor-pointer" />
        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border border-white/10 bg-bg-secondary flex items-center justify-center cursor-pointer">
          <User className="w-3 h-3 lg:w-4 lg:h-4 text-brand-purple" />
        </div>
      </div>
    </nav>
  );
}