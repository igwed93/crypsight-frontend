import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-primary">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple opacity-10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-75 w-75 rounded-full bg-brand-cyan opacity-5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-24 md:flex-row md:gap-16">
        
        {/* Left — Text content */}
        <div className="flex flex-col items-start gap-6 md:flex-1">
          <div className="flex items-center gap-2 rounded-pill border border-border-card bg-bg-card px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-text-secondary uppercase">
              Live Network Signals Active
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            See Crypto <br />
            <span className="gradient-text">Clearly</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-text-secondary">
            Crypsight Etheric decodes complex on-chain data into high-fidelity
            editorial insights. Navigate the Web3 frontier with the precision of
            the Neon Architect.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button className="flex items-center gap-2 rounded-md bg-brand-purple hover:bg-brand-purple-dim text-[#1a0a2e] font-semibold text-sm px-6 py-2.5">
              <Terminal size={15} />
              Launch Terminal
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-md border-border-card bg-bg-card px-6 py-2.5 text-sm font-medium text-white hover:bg-bg-card-hover hover:text-white"
            >
              <Link href="/networks">Explore Networks</Link>
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-2">
            <div className="flex flex-col gap-1 text-white">
              <span className="text-2xl font-bold">30K+</span>
              <span className="text-xs text-text-secondary">Analysts</span>
            </div>
            <div className="h-8 w-px bg-border-card" />
            <div className="flex flex-col gap-1 text-white">
              <span className="text-2xl font-bold">$2.4B</span>
              <span className="text-xs text-text-secondary">Tracked</span>
            </div>
          </div>
        </div>

        {/* Right — The Refurbished Ethereal Mesh Graphic */}
        <div className="relative flex w-full items-center justify-center md:flex-1">
          <div className="absolute h-85 w-85 rounded-full border border-brand-purple/10 md:h-115 md:w-115" />
          
          {/* Main Card with Flowing Fiber Gradient */}
          <div 
            className="relative h-75 w-full max-w-110 overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-100 bg-bg-primary"
          >
            {/* The Ethereal Flow Layer */}
            <div 
              className="absolute inset-0 opacity-60 animate-ethereal-flow"
              style={{
                background: `
                  repeating-linear-gradient(
                    transparent,
                    transparent 2px,
                    rgba(124, 58, 237, 0.1) 3px,
                    rgba(6, 182, 212, 0.1) 4px,
                    transparent 5px
                  ),
                  linear-gradient(135deg, #7c3aed 0%, #080b14 50%, #06b6d4 100%)
                `,
                backgroundSize: '200% 200%',
              }}
            />

            {/* Glowing Fiber Lines */}
            <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
               <defs>
                 <filter id="glow">
                   <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                   <feMerge>
                     <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                   </feMerge>
                 </filter>
               </defs>
               {[...Array(12)].map((_, i) => (
                 <path
                    key={i}
                    d={`M -50 ${40 + i * 30} Q ${150 + i * 15} ${150 + (i % 2 === 0 ? 60 : -60)} 500 ${180 + i * 15}`}
                    stroke={i % 2 === 0 ? "#22d3ee" : "#a855f7"}
                    strokeWidth="0.5"
                    fill="none"
                    className="animate-pulse"
                    style={{ filter: 'url(#glow)', animationDelay: `${i * 0.3}s` }}
                 />
               ))}
            </svg>

            {/* Center Orb (Sharp & High Contrast) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="h-32 w-32 rounded-full bg-brand-cyan/20 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl" />
              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_white]" />
            </div>

            {/* Data Chips (Retained at edges) */}
            <div className="absolute left-4 top-4 z-30 rounded-md border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
              <div className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">SOL/USDC</div>
              <div className="text-sm font-bold text-brand-cyan">$184.32</div>
            </div>
            
            <div className="absolute right-4 top-4 z-30 rounded-md border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
              <div className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">TVL</div>
              <div className="text-sm font-bold text-white">$8.4B</div>
            </div>

            <div className="absolute bottom-4 left-4 z-30 rounded-md border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
              <div className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">TPS</div>
              <div className="text-sm font-bold text-brand-purple">3,421</div>
            </div>

            <div className="absolute bottom-4 right-4 z-30 rounded-md border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
              <div className="text-[10px] font-bold text-text-secondary uppercase tracking-tight">24h Vol</div>
              <div className="text-sm font-bold text-white">$2.1B</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}