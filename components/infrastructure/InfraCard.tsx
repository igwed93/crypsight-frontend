import { Check, ExternalLink } from 'lucide-react';

export default function InfraCard({ project, isSelected, onToggle }: any) {
  return (
    <div className={`group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col gap-5
      ${isSelected 
        ? 'border-brand-cyan bg-bg-card-hover shadow-[0_0_30px_rgba(168,85,247,0.15)]' 
        : 'border-white/5 bg-bg-card hover:border-white/10 hover:bg-bg-card-hover'}`}>
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img src={project.logoUrl} alt="" className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100" />
        </div>
        <div className="flex items-center gap-2">
           <span className={`text-[9px] font-black px-2 py-1 rounded-md tracking-tighter
            ${project.status === 'ACTIVE' 
              ? 'bg-brand-cyan/10 text-brand-cyan' 
              : 'bg-white/5 text-white/30'}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-brand-purple transition-colors">
          {project.name}
        </h3>
        <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">
          {project.type}
        </p>
      </div>

      <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Buttons: Fixed height and distinct styles */}
      <div className="flex gap-3 pt-2 mt-auto">
        <button className="flex-1 py-3 bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-brand-purple/80 transition-all active:scale-95 shadow-lg shadow-brand-purple/20">
          View Details
        </button>
        <button 
          onClick={onToggle}
          className={`w-12 flex items-center justify-center rounded-xl border transition-all
            ${isSelected 
              ? 'bg-brand-cyan border-brand-cyan text-white shadow-lg shadow-brand-cyan/20' 
              : 'border-white/10 text-white/20 hover:border-white/30 hover:text-white'}`}>
          {isSelected ? <Check size={16} strokeWidth={4} /> : <div className="w-2 h-2 rounded-xs border-2 border-current" />}
        </button>
      </div>
    </div>
  );
}