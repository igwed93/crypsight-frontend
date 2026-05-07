'use client';

import { ShieldCheck, Zap, BookOpen, ChevronRight } from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className="flex flex-col w-full gap-12 p-6 lg:p-8 xl:p-12">
      {/* Academy Card */}
      <div className="bg-[#111723] border border-white/5 rounded-3xl p-8 space-y-8 shadow-2xl">
        <div className="flex items-center gap-3">
          <BookOpen size={20} className="text-brand-purple" />
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">New to DeFi?</h3>
        </div>

        <div className="space-y-4">
          <AcademyItem title="Understanding DEXs" desc="Learn how automated market makers work on Solana." />
          <AcademyItem title="Lending Protocols Explained" desc="The fundamentals of collateralized debt." />
          <AcademyItem title="Liquid Staking Guide" desc="Maxing your yield with SOL staking derivatives." />
        </div>

        <button className="group w-full py-4 bg-brand-purple hover:bg-brand-purple/90 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-2">
          Browse Academy <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Card with Mesh/Circle Effect */}
      <div className="relative overflow-hidden bg-[#111723] border border-white/5 rounded-3xl p-10 group">
        {/* Animated Mesh Circle */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px] group-hover:bg-brand-purple/30 transition-all duration-700" />
        
        <div className="relative z-10 space-y-6">
          <h4 className="text-2xl font-bold text-white leading-tight">Elite Governance Alpha Access</h4>
          <p className="text-xs text-text-muted leading-relaxed">
            Get real-time alerts on protocol votes and whale movements to stay ahead of the market.
          </p>
          <button className="w-full py-4 bg-brand-purple text-black text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer rounded-2xl hover:scale-[1.02] hover:text-brand-purple-dim animate-pulse transition-all">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}

function AcademyItem({ title, desc }: any) {
  return (
    <div className="p-5 bg-bg-card border border-white/5 rounded-2xl hover:bg-white/[0.07] transition-all cursor-pointer group border-l-2 border-l-transparent hover:border-l-brand-purple">
      <h5 className="text-xs font-bold text-white mb-2 group-hover:text-brand-purple transition-colors">{title}</h5>
      <p className="text-[10px] text-text-muted leading-relaxed">{desc}</p>
    </div>
  );
}