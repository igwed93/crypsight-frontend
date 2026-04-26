'use client';

import { useState, useMemo, memo, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, ChevronRight, Bell, Settings, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import NetworkCard from '@/components/networks/NetworkCard';
import ComparisonView from '@/components/networks/ComparisonView';
import { PROTOCOLS } from '@/data/protocols';

// Reusable Filter UI (Memoized for Smooth Slider Performance)
const MemoizedFilterContent = memo(({
  networkType, setNetworkType, consensus, setConsensus,
  sliderMinTvl, setSliderMinTvl, setMinTvl, ecoSize, setEcoSize
}: any) => {
  return (
    <div className="space-y-8">
      {/* Network Type */}
      <div className="space-y-4">
        <p className="text-[11px] font-bold text-text-muted uppercase tracking-tight">Network Type</p>
        <div className="flex p-1 rounded-xl bg-bg-primary border border-white/5">
          <button
            onClick={() => setNetworkType('L1')}
            className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${networkType === 'L1' ? 'bg-brand-purple/20 text-brand-purple border border-brand-purple/30' : 'text-text-muted'}`}
          >Layer 1</button>
          <button
            onClick={() => setNetworkType('L2')}
            className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${networkType === 'L2' ? 'bg-brand-purple/20 text-brand-purple border border-brand-purple/30' : 'text-text-muted'}`}
          >Layer 2</button>
        </div>
      </div>

      {/* Consensus */}
      <div className="space-y-4">
        <p className="text-[11px] font-bold text-text-muted uppercase">Consensus Mechanism</p>
        <Select onValueChange={setConsensus} defaultValue={consensus}>
          <SelectTrigger className="w-full bg-bg-primary border-white/5 text-xs text-white h-10 rounded-xl focus:ring-0" >
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent position="popper" className="z-300 bg-bg-card border-white/10 text-white">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="pow">Proof of Work</SelectItem>
            <SelectItem value="pos">Proof of Stake</SelectItem>
            <SelectItem value="poh">Proof of History</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* IMPROVED SLIDER: Rectangular Border + Recessed Look */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-[11px] font-bold text-text-muted uppercase tracking-tight">Min TVL ($B)</p>
          <span className="text-[10px] font-mono text-brand-cyan">${Math.round(sliderMinTvl)}B+</span>
        </div>
        <div className="bg-bg-card border border-white/5 rounded-2xl px-2 py-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
            <Slider 
                value={[sliderMinTvl]}
                min={0}
                max={1500} 
                step={1}
                onValueChange={(val) => setSliderMinTvl(val[0])}
                onValueCommit={(val) => setMinTvl(val[0])}
                className="w-full cursor-pointer" 
            />
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-[11px] font-bold text-text-muted uppercase">Ecosystem Size</p>
        <Select onValueChange={setEcoSize} defaultValue={ecoSize}>
          <SelectTrigger className="w-full bg-bg-primary border-white/5 text-xs text-white h-10 rounded-xl">
            <SelectValue placeholder="Any Size" />
          </SelectTrigger>
          <SelectContent position="popper" className="z-300 bg-bg-card border-white/10 text-white">
            <SelectItem value="any">Any Size</SelectItem>
            <SelectItem value="small">Small (100+)</SelectItem>
            <SelectItem value="medium">Medium (500+)</SelectItem>
            <SelectItem value="large">Large (1000+)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});
MemoizedFilterContent.displayName = "FilterContent";

export default function NetworksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg-primary text-white flex items-center justify-center">Loading...</div>}>
      <NetworksPageContent />
    </Suspense>
  );
}

function NetworksPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Restore selectedIds from URL on mount
  useEffect(() => {
    const networkIds = searchParams.get('networks');
    if (networkIds) {
      setSelectedIds(networkIds.split(',').filter(Boolean));
    }
  }, [searchParams]);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [networkType, setNetworkType] = useState<'L1' | 'L2'>('L1');
  const [consensus, setConsensus] = useState('all');
  const [minTvl, setMinTvl] = useState(0);
  const [sliderMinTvl, setSliderMinTvl] = useState(0); 
  const [ecoSize, setEcoSize] = useState('any');

    // URL-driven Comparison State
  const isComparing = searchParams.get('view') === 'compare';

  const parseToBillion = (valStr: string) => {
    const num = parseFloat(valStr.replace(/[^0-9.]/g, ''));
    if (valStr.includes('T')) return num * 1000;
    if (valStr.includes('M')) return num / 1000;
    return num;
  };

  const filteredProtocols = useMemo(() => {
    return PROTOCOLS.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.ticker.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = p.type === networkType;
      const matchesConsensus = consensus === 'all' || p.mechanism.toLowerCase() === consensus.toLowerCase();
      const tvlInB = parseToBillion(p.metricValue);
      const matchesTvl = tvlInB >= minTvl;
      const projectCount = parseInt(p.projects.replace(/[^0-9]/g, ''));
      let matchesEco = true;
      if (ecoSize === 'small') matchesEco = projectCount >= 100;
      if (ecoSize === 'medium') matchesEco = projectCount >= 500;
      if (ecoSize === 'large') matchesEco = projectCount >= 1000;
      return matchesSearch && matchesType && matchesConsensus && matchesTvl && matchesEco;
    });
  }, [searchQuery, networkType, consensus, minTvl, ecoSize]);

  const toggleNetwork = (id: string) => {
    setSelectedIds((prev) => {
      const isRemoving = prev.includes(id);
      if (isRemoving) {
        const newList = prev.filter((i) => i !== id);
        // If we are currently IN compare view and drop below 2, kick back to explore
        if (newList.length < 2 && isComparing) {
            router.push('/networks', { scroll: false });
        }
        return newList;
      }
    
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const handleCompareNow = () => {
    if (selectedIds.length >= 2) {
      router.push(`?view=compare&networks=${selectedIds.join(',')}`, { scroll: false });
    }
  };

  const handleBackToExplore = () => {
    router.push('/networks', { scroll: false });
  };

  const selectedNetworks = PROTOCOLS.filter(n => selectedIds.includes(n.id));

  return (
    <div className="relative min-h-screen bg-bg-primary text-white">
      {/* MOBILE HEADER */}
      {!isComparing && (
        <header className="lg:hidden sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-brand-purple/20 flex items-center justify-center">
                 <div className="w-3 h-3 border-2 border-brand-purple rounded-sm" />
              </div>
              <span className="text-sm font-bold">Luminescent Ledger</span>
            </div>
            <div className="flex items-center gap-4 text-text-muted">
              <Bell size={18} />
              <Settings size={18} />
              <div className="w-8 h-8 rounded-full bg-linear-to-tr from-brand-purple to-brand-cyan p-0.5">
                <div className="w-full h-full rounded-full bg-bg-primary" />
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="flex border-b border-white/5">
              <button className="px-4 py-2 text-xs font-bold text-text-muted">Dashboard</button>
              <button className="px-4 py-2 text-xs font-bold text-white border-b-2 border-brand-purple">Networks</button>
              <button className="px-4 py-2 text-xs font-bold text-text-muted">Portfolio</button>
            </div>
          </div>
        </header>
      )}
      
      {/* FLOATING MOBILE FILTER MODAL (80% Width, Reduced Height) */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-200 lg:hidden flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFilterModalOpen(false)} />
          <div className="relative bg-bg-card border border-white/10 rounded-4xl flex flex-col w-[80%] max-h-[60vh] shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-6 pb-2 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 text-white">
                <SlidersHorizontal size={16} className="text-brand-cyan" />
                <h3 className="text-xs font-bold uppercase tracking-widest">Filters</h3>
              </div>
              <button onClick={() => setIsFilterModalOpen(false)} className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 text-white"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto w-full space-y-8 px-6 py-4 custom-scrollbar">
              <MemoizedFilterContent 
                networkType={networkType} setNetworkType={setNetworkType}
                consensus={consensus} setConsensus={setConsensus}
                sliderMinTvl={sliderMinTvl} setSliderMinTvl={setSliderMinTvl}
                setMinTvl={setMinTvl} ecoSize={ecoSize} setEcoSize={setEcoSize}
              />
            </div>
            <div className="p-6 pt-2 shrink-0">
              <button onClick={() => setIsFilterModalOpen(false)} className="w-full py-3 bg-brand-purple text-[#1a0a2e] rounded-xl font-bold text-[10px] uppercase tracking-widest">Apply</button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="p-4 lg:p-0 space-y-6 lg:space-y-10 pb-72">
        <div className="space-y-4 pt-4">
          {isComparing && (
            <button onClick={handleBackToExplore} className="flex items-center gap-2 text-text-muted hover:text-white text-xs font-bold transition-colors">
              <ChevronRight size={14} className="rotate-180" /> Back to Explore
            </button>
          )}
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight">
            {isComparing ? "Compare Blockchains" : "Explore Blockchain Networks"}
          </h1>
        </div>

        {isComparing ? (
          <ComparisonView selectedNetworks={selectedNetworks} />
        ) : (
          <div className="lg:grid lg:grid-cols-12 gap-8 items-start">
            <aside className="hidden lg:flex lg:col-span-3 flex-col gap-6 sticky top-8">
              <div className="p-6 rounded-3xl border border-white/5 bg-bg-card/20 space-y-8">
                <div className="flex items-center gap-2 text-white border-b border-white/5 pb-4">
                  <SlidersHorizontal size={16} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Filters</h3>
                </div>
                <MemoizedFilterContent 
                    networkType={networkType} setNetworkType={setNetworkType}
                    consensus={consensus} setConsensus={setConsensus}
                    sliderMinTvl={sliderMinTvl} setSliderMinTvl={setSliderMinTvl}
                    setMinTvl={setMinTvl} ecoSize={ecoSize} setEcoSize={setEcoSize}
                />
              </div>
              <button className="w-full py-4 bg-brand-purple text-[#1a0a2e] rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-brand-purple/20">Connect Wallet</button>
            </aside>

            <div className="lg:col-span-9 space-y-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <Input placeholder="Search protocols..." className="pl-12 h-14 bg-bg-card/20 border-white/5 rounded-xl text-sm" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>

              <button onClick={() => setIsFilterModalOpen(true)} className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-bg-card/40 border border-white/5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                <SlidersHorizontal size={14} className="text-brand-cyan" /> Filters
              </button>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 animate-in fade-in duration-500">
                {filteredProtocols.map((network) => (
                  <NetworkCard key={network.id} {...network} isSelected={selectedIds.includes(network.id)} onSelect={() => toggleNetwork(network.id)} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* SELECTION DOCK (Desktop Pill with Live Stream Feature) */}
      {selectedIds.length > 0 && !isComparing && (
        <div className="hidden lg:flex fixed bottom-10 left-0 right-0 z-100 justify-center px-4">
          <div className="bg-bg-card/90 backdrop-blur-xl border border-white/10 p-2 pl-6 rounded-2xl flex items-center gap-8 shadow-2xl min-w-162.5 animate-in slide-in-from-bottom-4">
            <div className="flex items-center gap-4 border-r border-white/10 pr-8">
               <div className="flex -space-x-2">
                 {selectedNetworks.map(net => (
                   <img key={net.id} src={net.logoUrl} className="w-8 h-8 rounded-full border-2 border-bg-card bg-bg-secondary" alt="" />
                 ))}
               </div>
               <div className="flex flex-col">
                 <span className="text-sm font-bold leading-tight">{selectedIds.length} Selected</span>
                 <span className="text-[10px] text-text-muted font-medium truncate max-w-30 uppercase">{selectedNetworks.map(n => n.name).join(', ')}</span>
               </div>
            </div>

            {/* LIVE DATA STREAM PULSAR */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-cyan/5 border border-brand-cyan/20 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                </span>
                <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest whitespace-nowrap">Live Data Stream</span>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button onClick={() => setSelectedIds([])} className="px-4 py-2 text-xs font-bold text-text-muted hover:text-white transition-colors">Clear All</button>
              <button 
                onClick={handleCompareNow}
                className="bg-brand-purple text-[#1a0a2e] px-6 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                Compare Now <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE SELECTION DOCK */}
      {selectedIds.length > 0 && !isComparing && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-100 p-4 bg-linear-to-t from-bg-primary via-bg-primary/95 to-transparent">
          <div className="bg-[#1c253d] border border-white/10 p-5 rounded-3xl space-y-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {selectedNetworks.map(net => (
                    <img key={net.id} src={net.logoUrl} className="w-10 h-10 rounded-full border-2 border-[#1c253d] bg-bg-secondary" alt="" />
                  ))}
                </div>
                <p className="text-sm font-bold text-white">{selectedIds.length} Selected</p>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 bg-brand-cyan/10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-[8px] font-bold text-brand-cyan uppercase">Live</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setSelectedIds([])} className="py-3.5 bg-white/5 text-white rounded-2xl font-bold text-xs">Clear All</button>
              <button 
                onClick={handleCompareNow}
                className="py-3.5 bg-brand-purple text-[#1a0a2e] rounded-2xl font-bold text-xs flex items-center justify-center gap-2"
              >
                Compare Now <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}