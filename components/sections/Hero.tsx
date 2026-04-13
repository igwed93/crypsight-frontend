import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-primary">

      {/* Background glow blob */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-brand-purple opacity-10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">

        {/* Live badge */}
        <div className="flex items-center gap-2 rounded-pill border border-border-card bg-bg-card px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-brand-cyan" />
          <span className="text-xs font-medium tracking-widest text-brand-cyan uppercase">
            Live Network Signals Active
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-3xl text-6xl font-bold leading-tight tracking-tight md:text-7xl">
          <span className="text-[#e2d9f3]">See</span>
          {" "}
          <span className="gradient-text">Crypto</span>
          {" "}
          <span className="text-[#e2d9f3]">Clearly</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-[19px] leading-relaxed text-text-secondary">
          The ultimate lens for the Solana ecosystem. Compare protocols,
          track capital flow, and discover high-signal opportunities with
          institutional-grade data.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 pt-2">
          <Button className="rounded-md bg-brand-purple px-8 py-6 text-sm font-semibold text-[#1a0a2e] hover:bg-brand-purple-dim">
            Start Exploring
          </Button>
          <Button
            variant="outline"
            className="rounded-md border-border-card bg-bg-card px-8 py-6 text-sm font-medium text-[#e2d9f3] hover:bg-bg-card-hover hover:text-[#e2d9f3]"
          >
            <Link href="/documentation">View Documentation</Link>
          </Button>
        </div>

      </div>
    </section>
  );
}