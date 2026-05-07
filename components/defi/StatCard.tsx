export default function StatCard({ label, value, isCurrency }: any) {
  return (
    <div className="bg-[#111723] border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-brand-cyan rounded-r-full group-hover:h-1/2 transition-all" />
      <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-2">{label}</p>
      <p className="text-4xl font-bold tracking-tight">
        {isCurrency && <span className="text-brand-cyan mr-1">$</span>}{value}
      </p>
    </div>
  );
}