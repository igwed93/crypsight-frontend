'use client';

import { cn } from "@/lib/utils";
import { ExternalLink, Check } from 'lucide-react';

interface NetworkCardProps {
  name: string;
  ticker: string;
  mechanism: string;
  metricLabel: string;
  metricValue: string;
  projects: string;
  logoUrl: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function NetworkCard({
  name,
  ticker,
  mechanism,
  metricLabel,
  metricValue,
  projects,
  logoUrl,
  isSelected,
  onSelect,
}: NetworkCardProps) {
  return (
    <div 
      className={cn(
        // Added min-h-[220px] and lg:min-h-[260px] to give it that longer, rectangular feel
        "relative p-3 lg:p-5 rounded-2xl lg:rounded-3xl border transition-all duration-300 flex flex-col gap-5 min-h-52.5 lg:min-h-62.5",
        isSelected 
          ? "bg-[#1c253d]/40 border-brand-cyan shadow-[0_0_20px_rgba(34,211,238,0.15)]" 
          : "bg-bg-card/20 border-white/5 hover:border-white/10"
      )}
    >
      {/* 1. Card Header */}
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-bg-secondary p-1.5 lg:p-2 flex items-center justify-center shrink-0">
          <img src={logoUrl} alt={name} className="w-full h-full object-contain" />
        </div>
        <div className="min-w-0">
          <h3 className="text-xs lg:text-sm font-bold text-white truncate">{name}</h3>
          <p className={cn(
            "text-[9px] lg:text-[10px] font-bold uppercase tracking-wider transition-colors duration-300",
            // Logic: If selected, the whole ticker/consensus line turns Cyan
            isSelected ? "text-brand-cyan" : "text-text-muted"
          )}>
            <span>{ticker}</span> • {mechanism}
          </p>
        </div>
      </div>

      {/* 2. Metrics Section - Vertical Padding increased for 'longer' look */}
      <div className="grid grid-cols-2 gap-2 lg:gap-3">
        <div className="bg-[#0f172a]/80 p-2.5 lg:p-4 rounded-xl lg:rounded-2xl border border-white/5 space-y-1">
          <p className="text-[8px] lg:text-[9px] font-bold text-text-muted uppercase tracking-tighter">{metricLabel}</p>
          <p className="text-[11px] lg:text-base font-bold text-white font-mono leading-none">{metricValue}</p>
        </div>
        <div className="bg-[#0f172a]/80 p-2.5 lg:p-4 rounded-xl lg:rounded-2xl border border-white/5 space-y-1">
          <p className="text-[8px] lg:text-[9px] font-bold text-text-muted uppercase tracking-tighter">Projects</p>
          <p className="text-[11px] lg:text-base font-bold text-white font-mono leading-none">{projects}</p>
        </div>
      </div>

      {/* 3. Action Buttons */}
      <div className="flex flex-col lg:flex-row gap-1.5 lg:gap-2 mt-auto">
        <button className="flex-1 py-1.5 lg:py-2.5 text-[9px] lg:text-[10px] font-bold text-white bg-white/5 hover:bg-white/10 rounded-lg lg:rounded-xl flex items-center justify-center gap-1 transition-colors">
          View Details
          <ExternalLink size={10} className="lg:hidden" />
        </button>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className={cn(
            "flex-1 py-2 lg:py-2.5 text-[9px] lg:text-[10px] font-bold rounded-lg lg:rounded-xl transition-all border",
            isSelected 
              ? "bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20" 
              : "bg-brand-cyan/10 text-brand-purple border-brand-cyan/20 hover:bg-brand-cyan/20 lg:border-white/5 lg:hover:bg-white/10"
          )}
        >
          {isSelected ? "Remove" : "Compare"}
        </button>
      </div>

      {/* Selection Checkmark Badge */}
      {isSelected && (
        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-cyan rounded-full flex items-center justify-center border-2 border-bg-primary animate-in zoom-in">
          <Check size={10} className="text-bg-primary stroke-[4px]" />
        </div>
      )}
    </div>
  );
}