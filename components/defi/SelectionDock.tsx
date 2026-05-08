'use client';

import { useMemo } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { PROTOCOLS } from '@/data/protocols';

interface SelectionDockProps {
  selectedIds: string[];
  onClear: () => void;
}

export default function SelectionDock({ selectedIds, onClear }: SelectionDockProps) {
  // Derive the full protocol data for the selected IDs
  const selectedProtocols = useMemo(() => {
    return PROTOCOLS.filter(p => selectedIds.includes(p.id));
  }, [selectedIds]);

  if (selectedIds.length === 0) return null;

  return (
    <div 
      className="fixed bottom-10 left-1/2 lg:left-[calc(50%+144px)] -translate-x-1/2 z-100 w-full max-w-4xl px-4 animate-in slide-in-from-bottom-5"
    >
      <div className="bg-bg-card-hover border border-white/10 p-3 pl-8 rounded-3xl flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        
        {/* Left Section: Selected Protocol Avatars */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-white whitespace-nowrap">
              <span className="text-brand-cyan mr-1">{selectedIds.length} </span> 
              Projects Selected
            </span>
          </div>

          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            <div className="flex items-center gap-2">
              {selectedProtocols.map((protocol) => (
                <div 
                  key={protocol.id} 
                  className="flex items-center gap-2 bg-white/5 border border-white/10 py-1.5 px-3 rounded-full group"
                >
                  <img 
                    src={protocol.logoUrl} 
                    className="w-4 h-4 object-contain rounded-full" 
                    alt="" 
                  />
                  <span className="text-[10px] font-bold text-white/80">{protocol.name}</span>
                  <button className="text-white/30 hover:text-red-400 transition-colors">
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-8">
          <button 
            onClick={onClear}
            className="text-[10px] font-bold text-brand-cyan hover:text-white uppercase tracking-widest transition-colors"
          >
            Clear All
          </button>

          <button className="relative group overflow-hidden bg-brand-purple px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            
            <div className="relative flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white">
                Compare Selected Projects
              </span>
              <ChevronRight size={16} className="text-white/80" />
            </div>
            
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
}