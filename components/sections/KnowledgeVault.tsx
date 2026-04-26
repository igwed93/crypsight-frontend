import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ArticleTag = {
  label: string;
  color: string;
  bg: string;
};

type FeaturedArticle = {
  tag: ArticleTag;
  title: string;
  description: string;
  href: string;
};

type SmallArticle = {
  tag: ArticleTag;
  title: string;
  description: string;
  href: string;
};

const tags = {
  process: {
    label: 'Process Guide',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
  },
  security: {
    label: 'Security Alert',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
  market: {
    label: 'Market Analysis',
    color: 'text-text-secondary',
    bg: 'bg-white/5',
  },
  featured: {
    label: 'Masterclass',
    color: 'text-[#1a0a2e]',
    bg: 'bg-brand-purple',
  },
} as const;

const featured: FeaturedArticle = {
  tag: tags.featured,
  title: 'Advanced Yield Strategies for the Modular Era',
  description:
    'Master the art of cross-chain liquidity provision and risk mitigation in Celestia-integrated ecosystems.',
  href: '/vault/advanced-yield-strategies',
};

const articles: SmallArticle[] = [
  {
    tag: tags.process,
    title: 'Arbitrum Stylus: Coding in Rust',
    description:
      'How Stylus is changing the gates to L2 scalability for systems programmers.',
    href: '/vault/arbitrum-stylus',
  },
  {
    tag: tags.security,
    title: 'Identifying ZK-Proof Vulnerabilities',
    description:
      'Common zero-knowledge vulnerabilities in new knowledge circuits and how to audit them.',
    href: '/vault/zk-vulnerabilities',
  },
  {
    tag: tags.market,
    title: 'Auditing the Bitcoin Halving Cycle',
    description:
      'Quantitative analysis of historical price action versus liquidity across four cycles.',
    href: '/vault/bitcoin-halving',
  },
];

export default function KnowledgeVault() {
  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white text-center">
            Knowledge Vault
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Featured article — left */}
          <div className="relative overflow-hidden rounded-xl bg-bg-card/60 backdrop-blur-sm min-h-105 md:min-h-125 flex flex-col">
            {/* Full cover image */}
            <Image
              src="/images/defi-control-room.png"
              alt="Advanced DeFi control room interface"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />

            {/* Overlaid content */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 p-6">
              <span className="w-fit rounded-pill bg-brand-purple/30 px-3 py-1 text-xs font-bold tracking-widest text-brand-purple uppercase">
                Masterclass
              </span>
              <h3 className="text-2xl font-semibold leading-snug text-white">
                {featured.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-white/70">
                {featured.description}
              </p>
              <div className="mt-2">
                <Button className="flex items-center gap-2 rounded-xl bg-white hover:bg-white/90 text-bg-primary font-bold text-sm border-0">
                  Watch Module
                  <PlayCircle size={13} className="text-bg-primary" />
                </Button>
              </div>
            </div>
          </div>
          {/* Small articles + Browse All — right */}
          <div className="flex flex-col gap-4">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group flex flex-col gap-3 rounded-xl bg-bg-card/60 backdrop-blur-sm p-6 transition-colors duration-200 hover:bg-bg-card-hover/70"
              >
                {/* Tag */}
                <span
                  className={`w-fit rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-widest ${article.tag.bg} ${article.tag.color}`}
                >
                  {article.tag.label}
                </span>

                {/* Title */}
                <h4 className="text-base font-semibold text-white group-hover:text-brand-cyan transition-colors duration-200">
                  {article.title}
                </h4>

                {/* Description */}
                <p className="text-sm leading-relaxed text-text-secondary">
                  {article.description}
                </p>
              </Link>
            ))}

            {/* Browse All Guides — full width button at bottom */}
            <Link
              href="/vault"
              className="flex items-center justify-center gap-2 rounded-xl border border-border-card bg-bg-card/60 backdrop-blur-sm px-6 py-4 text-sm font-semibold text-brand-purple transition-colors duration-200 hover:bg-bg-card-hover/70 hover:border-brand-purple/30"
            >
              Browse All Guides
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
