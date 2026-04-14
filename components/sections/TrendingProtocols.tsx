'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

type Protocol = {
  name: string;
  ticker: string;
  category: string;
  change: number;
  statLabel: string;
  statValue: string;
  progress: number;
};

const protocols: Protocol[] = [
  {
    name: 'Aave V3',
    ticker: 'AAVE',
    category: 'Lending',
    change: 12.4,
    statLabel: 'Total Market Cap',
    statValue: '$1B',
    progress: 75,
  },
  {
    name: 'Uniswap',
    ticker: 'UNI',
    category: 'DEX',
    change: -0.2,
    statLabel: '24h Volume',
    statValue: '$500M',
    progress: 48,
  },
  {
    name: 'Lido Finance',
    ticker: 'LDO',
    category: 'Liquid Staking',
    change: -0.5,
    statLabel: 'ETH Staked',
    statValue: '9M ETH',
    progress: 62,
  },
  {
    name: 'Jupiter',
    ticker: 'JUP',
    category: 'DEX Aggregator',
    change: 8.1,
    statLabel: '24h Volume',
    statValue: '$340M',
    progress: 58,
  },
  {
    name: 'Kamino',
    ticker: 'KMNO',
    category: 'Yield',
    change: 5.3,
    statLabel: 'Total TVL',
    statValue: '$890M',
    progress: 44,
  },
  {
    name: 'Raydium',
    ticker: 'RAY',
    category: 'DEX',
    change: -1.8,
    statLabel: 'Liquidity',
    statValue: '$210M',
    progress: 35,
  },
];

const CARDS_PER_PAGE = 3;

export default function TrendingProtocols() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(protocols.length / CARDS_PER_PAGE);
  const visible = protocols.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  return (
    <section className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Trending Protocols
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Top performers by volume and active user growth.
            </p>
          </div>

          {/* Pagination arrows */}
          <div className="flex items-center gap-2 self-start">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border-card bg-bg-card text-text-secondary transition-colors hover:border-brand-purple/40 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border-card bg-bg-card text-text-secondary transition-colors hover:border-brand-purple/40 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
            <span className="text-xs text-text-muted">
              {page + 1} / {totalPages}
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((protocol) => {
            const isPositive = protocol.change >= 0;
            return (
              <div
                key={protocol.name}
                className="flex flex-col gap-5 rounded-lg bg-bg-card/60 backdrop-blur-sm p-6 transition-colors duration-200 hover:bg-bg-card-hover/70"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-semibold text-white">
                      {protocol.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-text-muted uppercase tracking-widest">
                        {protocol.ticker}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-border-card" />
                      <span className="text-xs font-medium text-brand-cyan/70 tracking-wide">
                        {protocol.category}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-sm font-semibold ${
                      isPositive
                        ? 'bg-green-400/10 text-green-400'
                        : 'bg-red-400/10 text-red-400'
                    }`}
                  >
                    {isPositive ? (
                      <TrendingUp size={13} />
                    ) : (
                      <TrendingDown size={13} />
                    )}
                    {isPositive ? '+' : ''}
                    {protocol.change}%
                  </div>
                </div>

                {/* Stat */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">
                      {protocol.statLabel}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {protocol.statValue}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 w-full rounded-full bg-bg-primary">
                    <div
                      className={`h-1 rounded-full transition-all duration-500 ${
                        isPositive ? 'bg-brand-cyan' : 'bg-brand-purple/40'
                      }`}
                      style={{ width: `${protocol.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
