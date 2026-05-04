'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useFilterStore } from '@/store/useFilterStore';
import { ChevronRight, ShieldCheck, Globe, SlidersHorizontal, X, ArrowLeft } from 'lucide-react';
import { WALLETS } from '@/data/wallets';
import WalletCard from '@/components/wallets/WalletCard';
import SidebarFilters from '@/components/wallets/SidebarFilters';

export default function WalletsPage() {
  const router = useRouter();
  const { selectedTypes, selectedCustody, selectedChains } = useFilterStore();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const filteredWallets = useMemo(() => {
    const chainMap: Record<string, string> = {
      'Ethereum': 'ETH',
      'Solana': 'SOL',
      'Bitcoin': 'BTC',
      'Polygon': 'POL'
    };

    return WALLETS.filter(wallet => {
      const selectedTickers = selectedChains.map(chainName => chainMap[chainName] || chainName);
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(wallet.type);
      const matchesCustody = selectedCustody.length === 0 || selectedCustody.includes(wallet.custody);
      const matchesChains = selectedChains.length === 0 || 
        wallet.chains.some(ticker => selectedTickers.includes(ticker));
      return matchesType && matchesCustody && matchesChains;
    });
  }, [selectedTypes, selectedCustody, selectedChains]);

  const selectedWallets = WALLETS.filter(w => selectedIds.includes(w.id));

  return (
    <div className="max-w-350 mx-auto p-6 lg:p-12 space-y-8 lg:space-y-12">
      
      {/* 6. BACK BUTTON */}
      <button 
        onClick={() => router.push('/')}
        className="flex items-center gap-2 text-text-muted hover:text-white transition-colors group mb-4"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
      </button>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Explore Crypto Wallets
        </h1>
        <p className="text-text-secondary text-sm lg:text-base max-w-2xl leading-relaxed">
          Discover the gateway to the decentralized web. Filter by custody type, chain support, and platform to find your perfect architectural fit.
        </p>
      </div>

      {/* 1. FIXED MOBILE FILTER BUTTON (After Header) */}
      <div className="lg:hidden w-full pt-4">
        <button 
          onClick={() => setIsFilterModalOpen(true)}
          className="w-full flex items-center justify-center gap-3 py-4 bg-bg-card border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest text-white active:scale-[0.98] transition-all"
        >
          <SlidersHorizontal size={16} className="text-brand-cyan" />
          Refine Search
        </button>
      </div>

      {/* 3 & 4. IMPROVED MODAL (Defined Background + X Button) */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-200 lg:hidden flex justify-end">
          {/* Overlay - Blurs the page content */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setIsFilterModalOpen(false)} />
          
          {/* Modal Panel - Well defined background */}
          <div className="relative w-[85%] max-w-sm h-full bg-[#0b1221] shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col border-l border-white/10">
            <div className="p-8 flex items-center justify-between gap-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-brand-purple" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Discovery Filters</h3>
              </div>
              <button 
                onClick={() => setIsFilterModalOpen(false)} 
                className="p-2 bg-white/5 rounded-full text-text-muted hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
               <SidebarFilters isMobile />
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-48">
        {filteredWallets.map(wallet => (
          <WalletCard 
            key={wallet.id}
            wallet={wallet}
            isSelected={selectedIds.includes(wallet.id)}
            onSelect={() => toggleSelection(wallet.id)}
          />
        ))}
      </div>

      {/* 5. SELECTION DOCK - Fixed Scaling Logic */}
      {selectedIds.length > 0 && (
        <div 
          className="fixed bottom-10 left-1/2 lg:left-[calc(50%+160px)] -translate-x-1/2 w-full h-25 max-w-4xl px-4 animate-in slide-in-from-bottom-5"
          style={{ zIndex: 1000 }} 
        >
          <div className="bg-bg-card border border-white/20 p-4 pl-8 rounded-3xl flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {selectedWallets.map(w => (
                  <div 
                    key={w.id} 
                    className="relative w-12 h-12 rounded-full border-2 border-[#1c253d] bg-white overflow-hidden flex items-center justify-center shrink-0"
                  >
                    {/* 
                        CRITICAL FIX: 
                        We use max-w-[70%] and max-h-[70%] to ensure the logo 
                        never touches the edges of the white circle.
                    */}
                    <img 
                      src={w.logoUrl}
                      width={32} 
                      height={32}
                      className="max-w-full max-h-full object-contain block" 
                      alt={w.name} 
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-none mb-1">
                  {selectedIds.length} Selected
                </span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest truncate max-w-37.5">
                  {selectedWallets.map(w => w.name).join(' • ')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden lg:flex items-center gap-6 border-r border-white/10 pr-8">
                <StatusTag icon={<ShieldCheck size={14} />} text="Non-custodial" />
                <StatusTag icon={<Globe size={14} />} text="Multi-chain" />
              </div>
              <div className="flex items-center gap-5">
                <button 
                  onClick={() => setSelectedIds([])} 
                  className="text-xs font-bold text-text-muted hover:text-white transition-colors"
                >
                  Clear All
                </button>
                <button className="bg-brand-purple text-[#1a0a2e] px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_30px_rgba(168,85,247,0.3)] flex items-center gap-2 transition-all active:scale-95">
                  Compare <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusTag({ icon, text }: any) {
  return (
    <div className="flex items-center gap-2 text-brand-cyan">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{text}</span>
    </div>
  );
}