import { Button } from "@/components/ui/button";
import Link from "next/link";

type MetricRow = {
  label: string;
  ethValue: string;
  solValue: string;
  solHighlight?: boolean;
  ethHighlight?: boolean;
};

const metrics: MetricRow[] = [
  {
    label: "Consensus",
    ethValue: "Proof of Stake",
    solValue: "Proof of History",
  },
  {
    label: "TPS (Current)",
    ethValue: "15 – 30",
    solValue: "2,500 – 4,000",
    solHighlight: true,
  },
  {
    label: "Avg. Gas Fee",
    ethValue: "$4.12",
    solValue: "$0.00025",
    solHighlight: true,
  },
  {
    label: "Developer Count",
    ethValue: "6,500+",
    solValue: "2,500+",
    ethHighlight: true,
  },
];

export default function PrecisionComparisons() {
  return (
    <section className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Precision Comparisons
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-text-secondary">
            Analyze technical specifications and market performance
            side-by-side.
          </p>
        </div>

        {/* Comparison card */}
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-bg-card/60 backdrop-blur-sm">

          {/* Chain headers */}
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2 p-4 md:gap-3 md:p-8">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border-card bg-bg-secondary md:h-9 md:w-9">
                <span className="text-xs font-bold text-white md:text-sm">Ξ</span>
              </div>
              <span className="text-sm font-bold text-white md:text-lg">
                Ethereum
              </span>
            </div>

            <div className="flex items-center gap-2 border-l border-border-card p-4 md:gap-3 md:p-8">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border-card bg-bg-secondary md:h-9 md:w-9">
                <span className="text-xs font-bold text-brand-purple md:text-sm">◎</span>
              </div>
              <span className="text-sm font-bold text-white md:text-lg">
                Solana
              </span>
            </div>
          </div>

          {/* Metric rows */}
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`grid grid-cols-2 border-t border-border-card ${
                index !== metrics.length - 1 ? "border-b border-border-card" : ""
              }`}
            >
              {/* Ethereum value */}
              <div className="flex flex-col gap-1 p-4 md:flex-row md:items-center md:justify-between md:p-8">
                <span className="text-[10px] font-semibold tracking-widest text-text-secondary uppercase md:text-xs">
                  {metric.label}
                </span>
                <span className={`text-sm font-semibold md:text-base ${
                  metric.ethHighlight ? "text-brand-cyan" : "text-white"
                }`}>
                  {metric.ethValue}
                </span>
              </div>

              {/* Solana value */}
              <div className="flex flex-col gap-1 border-l border-border-card p-4 md:flex-row md:items-center md:justify-between md:p-8">
                <span className="text-[10px] font-semibold tracking-widest text-text-secondary uppercase md:text-xs">
                  {metric.label}
                </span>
                <span className={`text-sm font-semibold md:text-base ${
                  metric.solHighlight ? "text-brand-cyan" : "text-white"
                }`}>
                  {metric.solValue}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex items-center justify-center p-10">
          <Link href="/compare">
            <Button className="rounded-md bg-gradient-to-r from-brand-purple to-brand-cyan px-10 py-4 h-14 text-sm font-semibold text-[#1a0a2e] hover:opacity-90 hover:from-brand-purple-dim hover:to-brand-cyan-dim transition-opacity">
              Start Comparing
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}