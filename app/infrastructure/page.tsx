'use client';

import { useState } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import InfraCard from '@/components/infrastructure/InfraCard';
import { INFRA_DATA } from '@/data/infraData';
import Link from 'next/link';

export default function InfrastructurePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectFilter, setSelectedFilter] = useState<string>("All");

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilter((prev) => (prev === filter ? "All" : filter));
  };

  // Helper function to find project by ID across all categories
  const findProjectById = (id: string) => {
    for (const category of Object.values(INFRA_DATA)) {
      const project = category.find(p => p.id === id);
      if (project) return project;
    }
    return null;
  };

  return (
    <div className="p-8 lg:p-16 space-y-16 max-w-350 mx-auto">
      <Link href="/" className="text-brand-cyan hover:text-white">
        &larr; Back to Home
      </Link>
      {/* Header Section */}
      <header className="flex flex-col items-center text-center space-y-6 py-4 mb-4">
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-text-nav leading-tight">
          Infrastructure <span className="text-brand-purple bg-clip-text bg-gradient-to-r from-brand-purple to-brand-purple-dim">Discovery</span>
        </h1>
        <p className="text-text-secondary text-base lg:text-lg max-w-2xl leading-relaxed opacity-70">
          The nervous system of the decentralized web. Compare and deploy high-performance RPCs, Oracles, Bridges, and Distributed Storage.
        </p>
      </header>

      {/* Filter Bar */}
      <div className="bg-bg-card backdrop-blur-md p-3 rounded-2xl border border-white/5 shadow-2xl flex flex-col lg:flex-row gap-4 items-center">
        <div className="flex-1 flex items-center gap-4 px-6 py-4 bg-white/5 rounded-xl border border-white/5 group focus-within:border-brand-cyan/30 transition-all">
          <Search size={18} className="text-brand-cyan/50" />
          <input 
            placeholder="Search infrastructure..." 
            className="bg-transparent border-none px-4 outline-none text-sm text-white w-full lg:w-80 placeholder:text-text-muted"
          />
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-2 w-full lg:w-auto">
          <div className="flex bg-bg-primary p-1 rounded-xl border border-white/5 overflow-x-auto w-full lg:w-auto custom-scrollbar">
            {['All', 'RPC', 'Oracles', 'Bridges', 'Storage'].map(tag => (
              <button 
                key={tag} 
                className={`px-5 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer whitespace-nowrap
                  ${selectFilter === tag ? 'bg-white/5 text-brand-cyan' : 'text-text-secondary hover:text-white'}`}
                onClick={() => toggleFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/5 text-[10px] font-black uppercase tracking-widest text-text-nav/80 border border-white/5 hover:border-brand-cyan/30 transition-all">
            <Filter size={14} className="text-brand-cyan" />
            Chain Support
          </button>
        </div>
      </div>

      {/* Sections Mapping & Filter Logic*/}
      <div className="space-y-24 mt-16">
        {Object.entries(INFRA_DATA)
            .filter(([key]) => {
                const normalizedKey = key === 'rpc' ? 'RPC' : key.charAt(0).toUpperCase() + key.slice(1);
                return selectFilter === 'All' || selectFilter === normalizedKey;
            })
            .map(([key, projects], index) => (
            <InfraSection 
                key={key}
                title={key.toUpperCase()} 
                subtitle={`Leading ${key} solutions for web3 developers.`}
                projects={projects}
                selectedIds={selectedIds}
                onToggle={toggleSelection}
                showStatus={index === 0} 
            />
            ))}
      </div>

      {selectedIds.length > 0 && (
        <div className="fixed bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 z-300 animate-in fade-in slide-in-from-bottom-10 duration-500 max-w-[95vw] lg:max-w-none">
            <div className="bg-bg-card backdrop-blur-2xl border border-brand-cyan px-4 lg:px-8 py-4 lg:py-5 rounded-3xl flex flex-col sm:flex-row items-center gap-4 lg:gap-16 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_20px_rgba(76,215,246,0.1)]">
                
                {/* Left side: Counter */}
                <div className="flex items-center gap-3 lg:gap-5">
                    <div className="relative">
                        <h3 className="w-12 h-10 lg:w-14 lg:h-12 p-1 rounded-full bg-bg-primary text-brand-cyan font-black text-base lg:text-lg border border-brand-cyan">
                            {selectedIds.length}
                        </h3>
                    </div>
                    <div>
                    <p className="text-white text-[10px] lg:text-[11px] tracking-widest font-bold">Projects Selected</p>
                    </div>
                </div>

                {/* Middle side: Logos */}
                <div className="flex space-x-2">
                    {selectedIds.length >= 1 && (
                        <img 
                            src={findProjectById(selectedIds[0])?.logoUrl} 
                            className="w-5 h-5 lg:w-6 lg:h-6 object-contain rounded-full border border-white/20" 
                            alt="" 
                        />
                    )}
                    {selectedIds.length >= 2 && (
                        <img 
                            src={findProjectById(selectedIds[1])?.logoUrl} 
                            className="w-5 h-5 lg:w-6 lg:h-6 object-contain rounded-full border border-white/20 -ml-2" 
                            alt="" 
                        />
                    )}
                </div>

                {/* Right side: Actions */}
                <div className="flex items-center gap-2 lg:gap-4">
                    <button 
                    onClick={() => setSelectedIds([])}
                    className="text-text-muted hover:text-white text-[9px] lg:text-[10px] font-bold uppercase tracking-widest transition-colors px-3 lg:px-4 cursor-pointer"
                    >
                    Clear All
                    </button>
                    <div 
                    className="flex gap-1 lg:gap-2 text-bg-primary font-bold px-6 lg:px-10 py-2.5 lg:py-3.5 rounded-2xl text-[10px] lg:text-xs uppercase tracking-[0.15em] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(76,215,246,0.2)] cursor-pointer bg-gradient-to-r from-brand-cyan to-brand-cyan-dim"
                    >
                        <button>Compare Now</button><ArrowRight size={14} className="lg:w-4 lg:h-4 text-bg-primary" />
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
  );
}

function InfraSection({ title, subtitle, projects, selectedIds, onToggle, showStatus }: any) {
  return (
    <section className="space-y-8 mb-16">
      <div className="flex justify-between items-end border-brand-cyan pl-6" style={{ borderLeftWidth: '4px' }}>
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-text-nav">{title}</h2>
          <p className="text-sm text-text-secondary/60 italic">{subtitle}</p>
        </div>
        {showStatus && (
          <div className="flex items-center gap-2 text-brand-cyan font-bold text-[10px] tracking-widest uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Live Monitoring
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p: any) => (
          <InfraCard 
            key={p.id} 
            project={p} 
            isSelected={selectedIds.includes(p.id)} 
            onToggle={() => onToggle(p.id)} 
          />
        ))}
      </div>
    </section>
  );
}