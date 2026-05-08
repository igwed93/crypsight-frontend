'use client';

import { ShieldCheck, Zap, BookOpen, ChevronRight } from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-8 p-6 lg:p-8 h-full w-full" style={{width: '100%'}}>
      {/* Academy Card */}
      <div className="bg-[#111723] border border-white/5 rounded-2xl p-5 space-y-5 shadow-2xl w-full">
        <div className="flex items-center gap-2.5">
          <BookOpen size={18} className="text-brand-purple" />
          <h3 className="font-bold text-white uppercase tracking-wide">New to DeFi?</h3>
        </div>

        <div className="space-y-3">
          <AcademyItem title="Understanding DEXs" desc="Learn how automated market makers work on Solana." />
          <AcademyItem title="Lending Protocols Explained" desc="The fundamentals of collateralized debt." />
          <AcademyItem title="Liquid Staking Guide" desc="Maxing your yield with SOL staking derivatives." />
        </div>

        <button className="group w-full py-2.5 bg-brand-purple hover:bg-brand-purple/90 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] transition-all cursor-pointer flex items-center justify-center gap-1.5">
          Browse <ChevronRight size={11} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Card with Mesh/Circle Effect */}
      <div className="relative overflow-hidden bg-[#111723] border border-white/5 rounded-2xl p-5 group w-full">
        {/* Animated Mesh Circle */}
        <div className="absolute -top-16 -right-16 w-44 h-44 bg-brand-purple/20 rounded-full blur-[55px] group-hover:bg-brand-purple/30 transition-all duration-700" />
        
        <div className="relative z-10 space-y-4">
          <h4 className="text-base font-bold text-white leading-tight">Elite Governance</h4>
          <p className="text-[9.5px] text-text-muted leading-relaxed">
            Get real-time alerts on protocol votes and whale movements.
          </p>
          <button className="w-full py-2.5 bg-brand-purple text-black text-[9px] font-black uppercase tracking-[0.15em] cursor-pointer rounded-lg hover:scale-[1.02] hover:text-brand-purple-dim animate-pulse transition-all">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}

function AcademyItem({ title, desc }: any) {
  return (
    <div className="p-3 bg-bg-card border border-white/5 rounded-lg hover:bg-white/[0.07] transition-all cursor-pointer group border-l-2 border-l-transparent hover:border-l-brand-purple w-full space-y-4">
      <h5 className="text-sm font-bold text-white mb-1.5 group-hover:text-brand-purple transition-colors">{title}</h5>
      <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
    </div>
  );
}