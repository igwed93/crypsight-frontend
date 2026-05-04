'use client';

import { cn } from "@/lib/utils";
import { useFilterStore } from "@/store/useFilterStore";

interface SidebarFiltersProps {
  isMobile?: boolean;
}

export default function SidebarFilters({ isMobile = false }: SidebarFiltersProps) {
  const { 
    selectedTypes, setTypes, 
    selectedCustody, setCustody, 
    selectedChains, setChains, 
    resetAll 
  } = useFilterStore();

  const groups = [
    { title: "Wallet Type", options: ['Browser', 'Mobile', 'Hardware'], selected: selectedTypes, onToggle: setTypes },
    { title: "Custody", options: ['Non-custodial', 'Custodial'], selected: selectedCustody, onToggle: setCustody },
    { title: "Chain Support", options: ['Ethereum', 'Solana', 'Bitcoin', 'Polygon'], selected: selectedChains, onToggle: setChains },
  ];

  return (
    <aside className={cn(
      "flex flex-col h-full custom-scrollbar",
      !isMobile && "hidden lg:flex w-80 border-r border-white/5 p-8 shrink-0 bg-[#0b1221]"
    )}>
      {!isMobile && (
        <div className="mb-12">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-2">Filters</h3>
          <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Refine Discovery</p>
        </div>
      )}

      <div className="flex flex-col pb-20">
        {groups.map((group, index) => (
          <FilterGroup 
            key={group.title}
            index={index}
            title={group.title}
            options={group.options}
            selected={group.selected}
            onToggle={group.onToggle}
          />
        ))}
      </div>

      <div className={cn(
        "mt-auto pt-6 bg-[#0b1221]",
        isMobile ? "sticky -bottom-2 pb-4" : ""
      )}>
        <button 
          onClick={resetAll}
          className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all border border-white/5 hover:border-white/10"
        >
          Reset All
        </button>
      </div>
    </aside>
  );
}

function FilterGroup({ title, options, selected, onToggle, index }: any) {
  return (
    <div className={cn(
      "flex flex-col space-y-6",
      // Adds spacing and a divider for every group except the first one
      index !== 0 ? "pt-10 border-t border-white/5 mt-2" : ""
    )}>
      <p className="text-[11px] font-bold text-brand-cyan uppercase tracking-[0.15em]">{title}</p>
      <div className="flex flex-col space-y-5 py-3">
        {options.map((opt: string) => {
          const isActive = selected.includes(opt);
          return (
            <label key={opt} className="flex items-center gap-4 cursor-pointer group">
              <input 
                type="checkbox" 
                className="hidden" 
                checked={isActive} 
                onChange={() => onToggle(opt)} 
              />
              <div className={cn(
                "w-5 h-5 rounded-lg border flex items-center justify-center transition-all duration-200 shadow-inner",
                isActive 
                  ? "bg-brand-purple border-brand-purple shadow-brand-purple/20" 
                  : "border-white/10 bg-white/5 group-hover:border-white/30"
              )}>
                {isActive && (
                  <div className="w-2 h-2 bg-white rounded-sm shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                )}
              </div>
              <span className={cn(
                "text-sm transition-colors",
                isActive ? "text-white font-semibold" : "text-text-muted group-hover:text-text-secondary"
              )}>
                {opt}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}