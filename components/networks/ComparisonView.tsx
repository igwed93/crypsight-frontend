'use client';

import { Zap, DollarSign, Clock, BarChart3, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Protocol } from '@/data/protocols';

interface ComparisonViewProps {
  selectedNetworks: Protocol[];
}

export default function ComparisonView({ selectedNetworks }: ComparisonViewProps) {
  // 1. Add this safety check immediately
  if (!selectedNetworks || selectedNetworks.length < 2) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-text-muted">
        <p className="text-sm font-medium">Please select at least 2 networks to compare.</p>
      </div>
    );
  }

  const [netA, netB] = selectedNetworks;

  const specs = [
    { label: 'Launch Year', valA: netA.launchYear || '2015', valB: netB.launchYear || '2020' },
    { label: 'Consensus Mechanism', valA: netA.mechanism, valB: netB.mechanism },
    { label: 'Native Token', valA: netA.ticker, valB: netB.ticker },
    { label: 'Staking Yield (Est.)', valA: netA.yield || '3.2%', valB: netB.yield || '7.1%', highlightB: true },
  ];

  return (
    <div className="space-y-10 lg:space-y-14 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* 1. Comparison Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <MetricCard 
          title="Transactions Per Second"
          icon={<Zap size={18} />}
          labelA={netA.ticker} valA={netA.tps || '15-30'} subA="PoS"
          labelB={netB.ticker} valB={netB.tps || '2,500+'} subB="PoH"
          isPositiveB 
        />
        <MetricCard 
          title="Average Fees"
          icon={<DollarSign size={18} />}
          labelA={netA.ticker} valA={netA.fees || '$1.5 - $45'} subA="High Volatility"
          labelB={netB.ticker} valB={netB.fees || '< $0.001'} subB="Fixed Low Cost"
          isPositiveB 
        />
        <MetricCard 
          title="Block Time"
          icon={<Clock size={18} />}
          labelA={netA.ticker} valA={netA.blockTime || '12.0s'} subA="Deterministic"
          labelB={netB.ticker} valB={netB.blockTime || '400ms'} subB="Ultra-Fast"
          isPositiveB 
        />
        <MetricCard 
          title="Market Cap (USD)"
          icon={<BarChart3 size={18} />}
          labelA={netA.ticker} valA={netA.marketCap || '$325B'} subA="Rank #2"
          labelB={netB.ticker} valB={netB.marketCap || '$68B'} subB="Rank #5"
        />
      </div>

      {/* 2. Technical Specifications Section */}
      <div className="space-y-6 p-6">
        <h3 className="text-lg lg:text-xl font-bold tracking-tight">Technical Specifications</h3>
        
        {/* DESKTOP VIEW: High-end Table */}
        <div className="hidden lg:block rounded-4xl border border-white/5 bg-bg-card/10 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/3">
                <th className="p-6 px-8 text-[10px] font-bold text-text-muted uppercase tracking-widest">Feature</th>
                <th className="p-6 px-8 text-[10px] font-bold text-text-muted uppercase tracking-widest">{netA.name}</th>
                <th className="p-6 px-8 text-[10px] font-bold text-brand-cyan uppercase tracking-widest">{netB.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {specs.map((spec) => (
                <tr key={spec.label} className="hover:bg-white/2 transition-colors group">
                  <td className="p-6 px-8 text-xs font-medium text-text-secondary">{spec.label}</td>
                  <td className="p-6 px-8 text-xs text-white/90">{spec.valA}</td>
                  <td className={cn("p-6 px-8 text-xs font-bold", spec.highlightB ? "text-brand-cyan" : "text-brand-cyan/80")}>
                    {spec.valB}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW: Preserved your SpecRow logic */}
        <div className="lg:hidden space-y-4">
          {specs.map((spec) => (
            <div key={spec.label} className="space-y-2">
              <p className="text-[10px] font-bold text-text-muted uppercase px-1">{spec.label}</p>
              <div className="flex justify-between items-center bg-bg-card/40 border border-white/5 rounded-2xl p-4">
                <span className="text-xs text-white/80">{spec.valA}</span>
                <ChevronRight size={12} className="text-white/20 mx-2" />
                <span className={cn("text-xs font-bold", spec.highlightB ? "text-brand-cyan" : "text-white")}>
                  {spec.valB}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* 3. Premium Analytics Banner */}
    <div className="relative p-8 lg:p-12 rounded-[40px] bg-[#0b1221] border border-white/5 overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
        
        {/* Left Content Section */}
        <div className="flex-1 space-y-8">
          {/* Header Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
              <span className="text-brand-purple text-xs">★</span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary">
                Premium Only
              </p>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Unlock Advanced Analytics
            </h2>
            
            <p className="text-text-secondary text-sm lg:text-base leading-relaxed max-w-xl">
              Gain deep-tier insights into ecosystem growth, developer retention metrics, and real-time performance stress tests across 50+ blockchains.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <PremiumFeature text="Ecosystem & Adoption Stats" />
            <PremiumFeature text="Developer Experience Metrics" />
            <PremiumFeature text="MEV & Validator Profitability" />
            <PremiumFeature text="Historic Performance Overlays" />
          </div>
        </div>

        {/* Right Upgrade Section */}
        <div className="flex flex-col gap-4 items-center lg:items-end lg:flex-shrink-0 lg:w-80">
          <button 
            style={{
              background: 'linear-gradient(to right, rgba(168, 85, 247, 0.15), #a855f7)',
              color: 'white'
            }}
            className="w-full py-5 px-10 border border-brand-purple rounded-3xl font-bold text-sm lg:text-base transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-brand-purple/50 active:scale-95 animate-pulse hover:animate-none"
          >
            Upgrade to Premium
          </button>
          <p className="text-[10px] text-text-muted font-medium text-center lg:text-right">
            Starting at $49/mo billed annually
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

// --- MetricCard Helper ---
function MetricCard({ title, icon, labelA, valA, subA, labelB, valB, subB, isPositiveB }: any) {
  return (
    <div className="bg-bg-card/40 border border-white/10 rounded-3xl overflow-hidden p-5 lg:p-6 space-y-6 lg:space-y-8">
      <div className="flex items-center justify-between">
        <div className="p-2 lg:p-2.5 bg-white/5 rounded-xl border border-white/5 text-text-muted">
          {icon}
        </div>
        <h4 className="text-[9px] lg:text-[10px] font-bold text-text-muted uppercase tracking-widest text-right">{title}</h4>
      </div>
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-[8px] lg:text-[9px] font-bold text-text-muted uppercase">{labelA}</p>
          <p className="text-lg lg:text-2xl font-bold text-white leading-none">{valA}</p>
          <p className="text-[8px] text-text-muted">{subA}</p>
        </div>
        <div className="h-8 lg:h-10 w-px bg-white/10" />
        <div className="space-y-1 text-right">
          <p className="text-[8px] lg:text-[9px] font-bold text-brand-cyan uppercase">{labelB}</p>
          <p className={cn("text-lg lg:text-2xl font-bold leading-none text-brand-cyan")}>
            {valB}
          </p>
          <p className="text-[8px] text-text-muted">{subB}</p>
        </div>
      </div>
    </div>
  );
}

// Helper component for the checkmarks
function PremiumFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      </div>
      <span className="text-xs lg:text-sm font-semibold text-text-secondary group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}