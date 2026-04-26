export default function StatusFooter() {
  return (
    <footer className="h-14 lg:h-14 border-t border-border-card bg-bg-primary/80 backdrop-blur-md px-4 lg:px-8 flex items-center justify-between z-40 shrink-0">
      {/* Live Stream Indicator */}
      <div className="flex items-center gap-2 lg:gap-2.5">
        <div className="relative">
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
          <div className="absolute inset-0 w-2 h-2 bg-brand-cyan rounded-full animate-ping opacity-40" />
        </div>
        <span className="text-[9px] lg:text-[10px] font-bold text-brand-cyan uppercase tracking-widest">
          Live Network Stream Connected
        </span>
      </div>

      {/* Global Metrics */}
      <div className="flex items-center gap-4 lg:gap-12">
        <div className="flex flex-col items-end">
          <span className="text-[8px] lg:text-[9px] font-bold text-text-muted uppercase tracking-tighter">Total TVL Locked</span>
          <span className="text-xs lg:text-sm font-bold text-white font-mono">$102B</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[8px] lg:text-[9px] font-bold text-text-muted uppercase tracking-tighter">Network Health</span>
          <span className="text-xs lg:text-sm font-bold text-brand-purple">Optimal</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[8px] lg:text-[9px] font-bold text-text-muted uppercase tracking-tighter">Global Nodes</span>
          <span className="text-xs lg:text-sm font-bold text-white">142K</span>
        </div>
      </div>
    </footer>
  );
}