'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import StatCard from '@/components/defi/StatCard';
import ProtocolCard from '@/components/defi/ProtocolCard';
import SelectionDock from '@/components/defi/SelectionDock';
import { DEFI_PROTOCOLS } from '@/data/defiProtocols';

const CATEGORIES = ['All', 'DEX', 'Lending', 'Liquid Staking', 'Derivatives', 'Stablecoins'];

export default function DeFiPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const searchQuery = (searchParams.get('q') || '').trim().toLowerCase();

  const filteredProtocols = useMemo(() => {
    return DEFI_PROTOCOLS.filter((protocol) => {
      const matchesCategory = activeCategory === 'All' || protocol.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        protocol.name.toLowerCase().includes(searchQuery) ||
        protocol.category.toLowerCase().includes(searchQuery) ||
        protocol.description.toLowerCase().includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full  flex flex-col p-6 lg:p-12 xl:p-16 space-y-12">
      {/* Header Section */}
      <header className="space-y-8">
        <Link href="/" className="text-brand-cyan hover:text-white">
          &larr; Back to Home
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(34,211,238,0.6)] animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-cyan">Live Network Explorer</span>
        </div>
        <h1 className="text-4xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9]">DeFi Protocols</h1>
        <p className="text-text-secondary text-base lg:text-lg max-w-2xl leading-relaxed">
          Discover and compare the heartbeat of the Solana ecosystem. Real-time data streams for TVL, volume, and liquidity.
        </p>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <StatCard label="Total Projects" value="156" color="white" />
        <StatCard label="Avg TVL" value="$2.4B" color="cyan" />
        <StatCard label="Sub-Categories" value="6" color="white" />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mt-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border
              ${activeCategory === cat 
                ? 'bg-brand-purple text-white border-brand-purple shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                : 'bg-white/5 text-text-muted hover:bg-white/10 border-white/5'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid: 2 columns is perfect here because it's inside a 2-col span already */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-40 mt-6">
        {filteredProtocols.map(p => (
          <ProtocolCard 
            key={p.id} 
            protocol={p}
            isSelected={selectedIds.includes(p.id)}
            onToggle={() => setSelectedIds(prev => 
              prev.includes(p.id) ? prev.filter(id => id !== p.id) : [...prev, p.id]
            )}
          />
        ))}
      </div>

      {filteredProtocols.length === 0 && (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-text-muted">
          No protocols matched your search. Try another name or category.
        </div>
      )}

      <SelectionDock selectedIds={selectedIds} onClear={() => setSelectedIds([])} />
    </div>
  );
}