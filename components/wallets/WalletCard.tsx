'use client';

import { cn } from "@/lib/utils";
import { Wallet } from "@/data/wallets";
import { Button } from "@/components/ui/button";

interface WalletCardProps {
  wallet: Wallet;
  isSelected: boolean;
  onSelect: () => void;
}

export default function WalletCard({ wallet, isSelected, onSelect }: WalletCardProps) {
  return (
    <div 
      className={cn(
        "relative bg-[#161d2b]/40 border rounded-3xl p-10 transition-all duration-300 flex flex-col min-h-[480px]",
        isSelected 
          ? "border-brand-cyan shadow-[0_0_40px_rgba(34,211,238,0.1)] bg-[#1a2333]/60" 
          : "border-white/5 hover:border-white/10"
      )}
    >
      {/* 1. "SELECTED" Badge */}
      {isSelected && (
        <div className="absolute top-0 right-0 bg-brand-cyan px-4 py-1.5 rounded-bl-xl z-20 shadow-lg">
          <span className="text-[10px] text-black font-bold uppercase tracking-tighter">Selected</span>
        </div>
      )}

      {/* 2. Wallet Icon - FIXED SIZE */}
      <div className="mb-10 shrink-0">
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl overflow-hidden p-2 shadow-inner">
          <img 
            src={wallet.logoUrl} 
            alt={wallet.name} 
            className="w-full h-full object-contain" 
            onError={(e) => {
               (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${wallet.name}&background=random&color=fff`;
            }}
          />
        </div>
      </div>

      {/* 3. Identity Section */}
      <div className="mb-8 shrink-0">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight">{wallet.name}</h3>
        <p className="text-[11px] font-bold text-brand-cyan uppercase tracking-[0.1em]">
          {wallet.description}
        </p>
      </div>

      {/* 4. Chain Pills - FIXED SIZE to maintain technical look */}
      <div className="flex flex-wrap gap-2 mb-8 shrink-0 py-3">
        {wallet.chains.map((chain) => (
          <div 
            key={chain} 
            className="flex items-center justify-center rounded-full w-10 h-10 bg-white/5 border border-white/5"
          >
            <span className="text-[8px] font-bold text-white uppercase">{chain}</span>
          </div>
        ))}
      </div>

      {/* 5. Feature Labels */}
      <div className="flex flex-wrap gap-3 mb-10 flex-1">
        {wallet.features.map((feature) => (
          <div key={feature} className="px-3 h-8 flex items-center justify-center font-medium rounded-md bg-white/5 border border-white/5 shrink-0">
            <span className="text-[8px] font-bold text-white/50 uppercase tracking-wider">{feature}</span>
          </div>
        ))}
      </div>

      {/* 6. Action Buttons */}
      <div className="mt-auto flex items-center gap-3 shrink-0">
        <Button 
          variant="ghost" 
          className="flex-1 bg-white/5 text-text-muted hover:text-white text-[10px] font-bold uppercase tracking-[0.15em] h-11 py-2 rounded-2xl border border-transparent hover:border-white/10 transition-all"
        >
          View Details
        </Button>
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className={cn(
            "flex-1 text-[10px] font-bold uppercase tracking-[0.15em] h-11 rounded-2xl transition-all border py-2",
            isSelected 
              ? "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30 hover:bg-brand-cyan/20" 
              : "bg-white/5 text-brand-purple hover:text-white border-white/5"
          )}
        >
          {isSelected ? 'Remove' : 'Compare'}
        </Button>
      </div>
    </div>
  );
}