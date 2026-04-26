// types/index.ts or top of page.tsx
export type Protocol = {
  id: string;
  name: string;
  ticker: string;
  mechanism: string;
  metricLabel: string;
  metricValue: string;
  projects: string;
  logoUrl: string;
  type: 'L1' | 'L2';
  // Metrics for Compare View
  tps: string;
  fees: string;
  blockTime: string;
  marketCap: string;
  launchYear: string;
  language: string;
  yield: string;
};

export const PROTOCOLS: Protocol[] = [
  { 
    id: 'btc', name: 'Bitcoin', ticker: 'BTC', mechanism: 'POW',
    type: 'L1',
    metricLabel: 'Market Cap', metricValue: '$1.24T', projects: '120+',
    logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    tps: '~5-7', fees: '$1 - $30', blockTime: '10 min', marketCap: '$1.24T',
    launchYear: '2009', language: 'C++', yield: 'No native staking'
  },

  { 
    id: 'eth', name: 'Ethereum', ticker: 'ETH', mechanism: 'POS',
    type: 'L1',
    metricLabel: 'TVL', metricValue: '$54.2B', projects: '4,800+',
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    tps: '~15-30', fees: '$1.5 - $45', blockTime: '12.0s', marketCap: '$325.2B',
    launchYear: '2015', language: 'Solidity (EVM)', yield: '3.2% APY'
  },

  { 
    id: 'sol', name: 'Solana', ticker: 'SOL', mechanism: 'POH',
    type: 'L1',
    metricLabel: 'TVL', metricValue: '$8.1B', projects: '1,200+',
    logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    tps: '~2,500+', fees: '< $0.001', blockTime: '400ms', marketCap: '$68.4B',
    launchYear: '2020', language: 'Rust, C, C++', yield: '7.1% APY'
  },

  { 
    id: 'bnb', name: 'BNB Chain', ticker: 'BNB', mechanism: 'POS',
    type: 'L1',
    metricLabel: 'TVL', metricValue: '$5.3B', projects: '4,500+',
    logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    tps: '~100-300', fees: '$0.05 - $0.30', blockTime: '3s', marketCap: '$45B',
    launchYear: '2017', language: 'Solidity (EVM)', yield: '2-5% APY'
  },

  { 
    id: 'trx', name: 'Tron', ticker: 'TRX', mechanism: 'DPOS',
    type: 'L1',
    metricLabel: 'TVL', metricValue: '$9.8B', projects: '850+',
    logoUrl: 'https://cryptologos.cc/logos/tron-trx-logo.png',
    tps: '~1,000+', fees: '< $0.01', blockTime: '3s', marketCap: '$10B',
    launchYear: '2017', language: 'Solidity (EVM)', yield: '4-6% APY'
  },

  { 
    id: 'ada', name: 'Cardano', ticker: 'ADA', mechanism: 'POS',
    type: 'L1',
    metricLabel: 'TVL', metricValue: '$0.6B', projects: '500+',
    logoUrl: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    tps: '~250', fees: '$0.10 - $0.50', blockTime: '20s', marketCap: '$14B',
    launchYear: '2017', language: 'Haskell (Plutus)', yield: '3-5% APY'
  },

  { 
    id: 'avax', name: 'Avalanche', ticker: 'AVAX', mechanism: 'POS',
    type: 'L1',
    metricLabel: 'TVL', metricValue: '$1.2B', projects: '750+',
    logoUrl: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
    tps: '~4,500+', fees: '$0.10 - $1', blockTime: '2s', marketCap: '$12B',
    launchYear: '2020', language: 'Solidity (EVM), Go', yield: '7-9% APY'
  },

  { 
    id: 'sui', name: 'Sui', ticker: 'SUI', mechanism: 'POS',
    type: 'L1',
    metricLabel: 'TVL', metricValue: '$0.9B', projects: '240+',
    logoUrl: 'https://cryptologos.cc/logos/sui-sui-logo.png',
    tps: '~10,000+', fees: '< $0.01', blockTime: '300ms', marketCap: '$2B',
    launchYear: '2023', language: 'Move', yield: '6-8% APY'
  },

  { 
    id: 'near', name: 'Near', ticker: 'NEAR', mechanism: 'POS',
    type: 'L1',
    metricLabel: 'TVL', metricValue: '$0.35B', projects: '320+',
    logoUrl: 'https://cryptologos.cc/logos/near-protocol-near-logo.png',
    tps: '~1,000-4,000', fees: '< $0.01', blockTime: '1s', marketCap: '$4B',
    launchYear: '2020', language: 'Rust', yield: '8-10% APY'
  },
];