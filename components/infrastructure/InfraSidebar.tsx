'use client';
import { LayoutGrid, Database, Share2, HardDrive, Cpu, LifeBuoy, Settings } from 'lucide-react';

export default function InfraSidebar() {
  return (
    <aside className="w-[256px] bg-bg-primary border-r border-white/10 flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-bg-primary rounded-lg flex items-center justify-center">
          <LayoutGrid className="text-brand-cyan w-5 h-5" />
        </div>
        <div>
          <h2 className="text-text-nav text-lg font-black leading-tight">Web3 Discovery</h2>
          <p className="text-text-muted text-xs font-bold">Infrastructure Hub</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        <SidebarLink icon={<Cpu size={18} />} label="Providers" />
        <SidebarLink icon={<Database size={18} />} label="Oracles" active />
        <SidebarLink icon={<Share2 size={18} />} label="Bridges" />
        <SidebarLink icon={<HardDrive size={18} />} label="Storage" />
        <SidebarLink icon={<LayoutGrid size={18} />} label="Nodes" />
      </nav>

      <div className="p-6 space-y-4">
        <button className="w-full py-3 rounded-xl font-bold text-sm cursor-pointer bg-gradient-to-r from-brand-purple to-brand-purple-dim text-white">
          Add Protocol
        </button>
        <div className="space-y-1">
          <SidebarLink icon={<LifeBuoy size={18} />} label="Support" small />
          <SidebarLink icon={<Settings size={18} />} label="Settings" small />
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ icon, label, active, small }: any) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-r-full transition-all
      ${active ? 'bg-white/5 text-brand-cyan font-bold rounded-xl' : 'text-text-muted hover:text-white'}
      ${small ? 'py-2' : ''}`}>
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}