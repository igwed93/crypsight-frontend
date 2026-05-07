import { cn } from "@/lib/utils";

export default function ProtocolCard({ protocol, isSelected, onToggle }: any) {
  return (
    <div className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col gap-6
      ${isSelected ? 'border-brand-cyan bg-[#1a2333]/60 shadow-2xl scale-[1.02]' : 'border-white/5 bg-[#111723]/40'}`}>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={protocol.logoUrl} className="w-12 h-12 rounded-xl object-contain" alt="" />
          <div>
            <h3 className="text-xl font-bold">{protocol.name}</h3>
            <span className="text-[9px] font-black uppercase text-brand-cyan tracking-widest">{protocol.category}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">TVL</span>
        <span className="text-2xl font-bold tracking-tight">${protocol.tvl}</span>
      </div>

      <div className="flex gap-3 mt-auto">
        <button className="flex-1 py-3 bg-[#1a2333] border border-white/5 text-text-muted text-[9px] font-black uppercase tracking-widest rounded-xl hover:text-white transition-all">
            View Details
        </button>
        <button 
            onClick={onToggle}
            className={cn(
            "flex-1 py-3 rounded-xl text-[9px] font-black uppercase cursor-pointer tracking-widest transition-all border",
            isSelected 
                ? "bg-brand-purple text-white border-brand-purple shadow-[0_0_20px_rgba(168,85,247,0.3)]" 
                : "bg-white/5 text-[#C084FC] border-[#C084FC]/20 hover:bg-[#C084FC]/20"
            )}
        >
            {isSelected ? 'Selected' : 'Compare'}
        </button>
      </div>
    </div>
  );
}