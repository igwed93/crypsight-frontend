import Link from 'next/link';
import {
  Landmark,
  BarChart3,
  CreditCard,
  Gem,
  Waves,
  Server,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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
    title: 'Layer 1',
    description:
      'Foundational base-layer metrics including security, decentralization, and issuance.',
    href: '/networks',
    iconColor: 'text-brand-purple',
    boxColor: 'bg-brand-purple/10',
  },
  {
    icon: BarChart3,
    title: 'DeFi Analytics',
    description:
      'Real-time TVL monitoring and yield optimization signals across 10+ chains.',
    href: '/explore/defi',
    iconColor: 'text-brand-cyan',
    boxColor: 'bg-brand-cyan/10',
  },
  {
    icon: CreditCard,
    title: 'Wallets',
    description:
      'Comprehensive insights into user behaviour, trading patterns, and active addresses.',
    href: '/explore/wallets',
    iconColor: 'text-brand-cyan',
    boxColor: 'bg-brand-cyan/10',
  },
  {
    icon: Waves,
    title: 'Whale Tracking',
    description:
      'Identify smart money movements before they hit the market on-chain exchanges.',
    href: '/explore/whales',
    iconColor: 'text-brand-purple',
    boxColor: 'bg-brand-purple/10',
  },
  {
    icon: Gem,
    title: 'NFTs',
    description:
      'Deep liquidity analysis for premium collections and emerging artists.',
    href: '/explore/nfts',
    iconColor: 'text-white/70',
    boxColor: 'bg-white/5',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description:
      'Gas monitoring, RPC health, and validator performance metrics.',
    href: '/explore/infrastructure',
    iconColor: 'text-brand-purple',
    boxColor: 'bg-brand-purple/10',
  },
];

export default function EcosystemVerticals() {
  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold text-white">
              Ecosystem Verticals
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Granular analytics across every major primitive on Solana. No more
              fragmented data.
            </p>
          </div>
          <Link
            href="/explore"
            className="flex items-center gap-1 text-sm font-medium text-brand-cyan hover:opacity-80 transition-opacity self-start"
          >
            Explore Directory
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            return (
              <div
                key={vertical.title}
                className="group flex flex-col gap-5 rounded-lg bg-bg-card/60 backdrop-blur-sm p-7 min-h-55 transition-colors duration-200 hover:bg-bg-card-hover/70"
              >
                {/* Icon box */}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-md ${vertical.boxColor}`}
                >
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
                  Explore
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
