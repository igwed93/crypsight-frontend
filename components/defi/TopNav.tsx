'use client';

import { useEffect, useState } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const NAV_TABS = [
  { name: 'Analytics', href: '#' },
  { name: 'Markets', href: '#' },
  { name: 'Governance', href: '#' },
];

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get('q') || '';
  const [search, setSearch] = useState(currentQuery);

  useEffect(() => {
    setSearch(currentQuery);
  }, [currentQuery]);

  const handleSearchSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = search.trim();
    const params = new URLSearchParams();

    if (trimmed) {
      params.set('q', trimmed);
    }

    router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <nav className="w-full border-b border-white/5 bg-[#060910] sticky top-0 z-40">
      <div className="w-full px-6 lg:px-8 xl:px-12 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/') }>
            <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LL</span>
            </div>
            <span className="text-sm font-bold text-white hidden sm:inline">Luminescent Ledger</span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_TABS.map((tab) => (
              <button
                key={tab.name}
                className="px-4 py-2 text-xs font-semibold text-text-muted hover:text-white transition-colors"
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 justify-between w-full md:w-auto">
          <form onSubmit={handleSearchSubmit} className="flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-2 gap-2 w-full max-w-lg">
            <Search size={16} className="text-text-muted" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search protocols"
              type="text"
              placeholder="Search protocols..."
              className="bg-transparent text-xs text-white placeholder-text-muted outline-none w-full"
            />
            <button type="submit" className="text-text-muted hover:text-white transition-colors focus:outline-none">
              Search
            </button>
          </form>

          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors relative">
            <Bell size={18} className="text-text-muted hover:text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-cyan rounded-full" />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <User size={18} className="text-text-muted hover:text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
