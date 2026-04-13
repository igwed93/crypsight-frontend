import Link from "next/link";
import { Landmark, CreditCard, Gem, Server, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Vertical = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  iconColor: string;
  boxColor: string;
};

const verticals: Vertical[] = [
  {
    icon: Landmark,
    title: "DeFi",
    description:
      "Analyze TVL, swap fees, and yield aggregators across the entire network in real-time.",
    href: "/explore/defi",
    iconColor: "text-brand-purple",
    boxColor: "bg-brand-purple/10",
  },
  {
    icon: CreditCard,
    title: "Wallets",
    description:
      "Security audit & feature matrix for top providers. Track user growth and retention metrics.",
    href: "/explore/wallets",
    iconColor: "text-brand-cyan",
    boxColor: "bg-brand-cyan/10",
  },
  {
    icon: Gem,
    title: "NFTs",
    description:
      "Volume and floor price tracking. Whale movements and mint-day distribution heatmaps.",
    href: "/explore/nfts",
    iconColor: "text-white/70",
    boxColor: "bg-white/5",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "RPC nodes, validators, and dev tools monitoring. Real-time network health diagnostics.",
    href: "/explore/infrastructure",
    iconColor: "text-brand-purple",
    boxColor: "bg-brand-purple/10",
  },
];

export default function EcosystemVerticals() {
  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="mb-12 flex items-start justify-between">
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold text-white">
              Ecosystem Verticals
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Granular analytics across every major primitive on Solana. No
              more fragmented data.
            </p>
          </div>
          <Link
            href="/explore"
            className="flex items-center gap-1 text-sm font-medium text-brand-cyan hover:opacity-80 transition-opacity"
          >
            Explore Directory
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            return (
              <div
                key={vertical.title}
                className="group flex flex-col gap-5 rounded-lg bg-bg-card/60 backdrop-blur-sm p-7 min-h-85 transition-colors duration-200 hover:bg-bg-card-hover/70"
              >
                {/* Icon box */}
                <div className={`flex h-10 w-10 items-center justify-center rounded-md ${vertical.boxColor}`}>
                  <Icon size={18} className={vertical.iconColor} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-white">{vertical.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {vertical.description}
                  </p>
                </div>

                {/* View all link */}
                <Link
                  href={vertical.href}
                  className="mt-auto flex items-center gap-1 text-xs font-semibold tracking-widest text-brand-cyan uppercase hover:opacity-80 transition-opacity"
                >
                  View All
                  <ArrowRight size={12} />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}