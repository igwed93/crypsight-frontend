import { Button } from '@/components/ui/button';

type DataRow = {
  name: string;
  value: string;
  progress: number;
  highlight?: boolean;
};

type ComparisonCard = {
  category: string;
  rows: DataRow[];
};

const cards: ComparisonCard[] = [
  {
    category: 'Network Throughput',
    rows: [
      {
        name: 'Solana (SOL)',
        value: '3,421 TPS',
        progress: 95,
        highlight: true,
      },
      { name: 'Ethereum (ETH)', value: '28 TPS', progress: 8 },
    ],
  },
  {
    category: 'Lending Rates (USDC)',
    rows: [
      { name: 'Kamino', value: '8.42% APY', progress: 84, highlight: true },
      { name: 'Solend', value: '6.15% APY', progress: 62 },
    ],
  },
  {
    category: 'Liquidity Depth (SOL/USDC)',
    rows: [
      { name: 'Orca', value: '$142M (2%)', progress: 78, highlight: true },
      { name: 'Raydium', value: '$88M (2%)', progress: 48 },
    ],
  },
];

export default function ProtocolBattleground() {
  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-bold text-white">
            Protocol Battleground
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-text-secondary">
            Direct comparison metrics for the builders and the whales. Precision
            data for critical decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.category}
              className="flex flex-col gap-8 rounded-lg bg-bg-card/60 backdrop-blur-sm p-8 min-h-80"
            >
              {/* Category label */}
              <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase">
                {card.category}
              </span>

              {/* Data rows */}
              <div className="flex flex-col gap-6">
                {card.rows.map((row) => (
                  <div key={row.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${row.highlight ? 'font-semibold text-white' : 'text-text-secondary'}`}
                      >
                        {row.name}
                      </span>
                      <span
                        className={`text-sm font-semibold ${row.highlight ? 'text-brand-cyan' : 'text-text-secondary'}`}
                      >
                        {row.value}
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1 w-full rounded-full bg-bg-secondary">
                      <div
                        className={`h-1 rounded-full ${row.highlight ? 'bg-brand-cyan' : 'bg-brand-purple/40'}`}
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button className="mt-auto w-full rounded-md border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white/80 hover:text-white text-sm py-6 transition-all duration-200">
                Analyze Full Report
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
