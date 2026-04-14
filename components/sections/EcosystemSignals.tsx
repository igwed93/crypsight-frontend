import React from 'react';
import { 
  Newspaper, 
  Waves, 
  Gavel, 
  TrendingUp, 
  TrendingDown 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/** ─── TYPES ─── */
export type SignalCardData =
  | { type: 'news'; title: string; items: NewsItem[] }
  | { type: 'transactions'; title: string; items: TransactionItem[] }
  | { type: 'governance'; title: string; items: GovernanceItem[] };

interface NewsItem { timestamp: string; headline: string; }
interface TransactionItem { address: string; amount: string; symbol: string; direction: 'up' | 'down'; }
interface GovernanceItem { protocol: string; tag: string; description: string; timeLeft: string; progress: number; color: 'cyan' | 'purple'; }

/** ─── MOCK DATA ─── */
const MOCK_SIGNALS: SignalCardData[] = [
  {
    type: 'news',
    title: 'Market Intelligence',
    items: [
      { timestamp: '2 HOURS AGO', headline: 'SEC potentially delays Ethereum Spot ETF verdict until May.' },
      { timestamp: '5 HOURS AGO', headline: 'Circle launches native USDC on Celo network.' },
      { timestamp: '12 HOURS AGO', headline: 'EigenLayer TVL surpasses $10B following cap increase.' },
    ]
  },
  {
    type: 'transactions',
    title: 'Whale Monitor',
    items: [
      { address: '0x45f...2a1', amount: '2,500', symbol: 'ETH', direction: 'up' },
      { address: '0x12b...99c', amount: '1.2M', symbol: 'MATIC', direction: 'down' },
      { address: '0x88d...4f2', amount: '450k', symbol: 'ARB', direction: 'up' },
    ]
  },
  {
    type: 'governance',
    title: 'Active Governance',
    items: [
      { protocol: 'UNISWAP', tag: '[TEMP CHECK]', description: 'Fee switch activation for UNI holders.', timeLeft: '72h Left', progress: 85, color: 'cyan' },
      { protocol: 'COMPOUND', tag: '[PROPOSAL 212]', description: 'Adjusting risk parameters for cETH.', timeLeft: 'Ending Soon', progress: 60, color: 'purple' },
    ]
  }
];

/** ─── COMPONENT ─── */
export default function EcosystemSignals() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-white">Ecosystem Signals</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_SIGNALS.map((card, index) => (
          <Card 
            key={index} 
            className="bg-bg-card border-none hover:bg-bg-card-hover transition-colors duration-300 shadow-xl"
          >
            <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-8">
              {card.type === 'news' && <Newspaper className="w-5 h-5 text-brand-cyan" />}
              {card.type === 'transactions' && <Waves className="w-5 h-5 text-brand-purple" />}
              {card.type === 'governance' && <Gavel className="w-5 h-5 text-brand-cyan" />}
              
              {/* Brighter header text: text-text-nav */}
              <CardTitle className="text-sm font-semibold uppercase tracking-widest text-white">
                {card.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
              {renderItems(card)}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function renderItems(card: SignalCardData) {
  switch (card.type) {
    case 'news':
      return card.items.map((item, i) => (
        <div key={i} className="space-y-2 group cursor-pointer">
          {/* Brighter timestamp: text-text-secondary instead of text-text-muted */}
          <span className="text-[10px] font-bold text-text-secondary tracking-tighter uppercase opacity-80">
            {item.timestamp}
          </span>
          <p className="text-[15px] font-medium leading-relaxed text-white group-hover:text-brand-cyan transition-colors">
            {item.headline}
          </p>
        </div>
      ));

    case 'transactions':
      return card.items.map((item, i) => (
        <div key={i} className="flex items-center justify-between bg-bg-secondary p-3 rounded-md border border-white/5">
          <div className="flex items-center gap-3">
            <div className={`p-1.5 rounded-lg ${item.direction === 'up' ? 'bg-green-400/10 text-green-400' : 'bg-red-400/10 text-red-400'}`}>
              {item.direction === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            </div>
            {/* Brighter address font */}
            <span className="text-xs font-mono text-text-secondary">{item.address}</span>
          </div>
          <div className="text-sm font-bold text-white">
            {item.amount} <span className="text-text-secondary ml-0.5 opacity-70">{item.symbol}</span>
          </div>
        </div>
      ));

    case 'governance':
      return card.items.map((item, i) => (
        <div key={i} className="space-y-3">
          <div className="flex justify-between items-baseline">
            <div className="text-[11px] font-bold tracking-tight">
              <span className="text-white uppercase">{item.protocol}</span>
              {/* Brighter tag text */}
              <span className="text-text-secondary ml-1 opacity-90">{item.tag}</span>
            </div>
            <span className={`text-[10px] font-bold ${item.color === 'purple' ? 'text-brand-purple' : 'text-brand-cyan'}`}>
              {item.timeLeft}
            </span>
          </div>
          {/* Brighter description */}
          <p className="text-sm text-text-secondary leading-snug">
            {item.description}
          </p>
          
          <div className="h-1 w-full rounded-full bg-bg-primary">
            <div 
              className={`h-1 rounded-full transition-all duration-500 ${
                item.color === 'cyan' ? 'bg-brand-cyan' : 'bg-brand-purple'
              }`}
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      ));
  }
}