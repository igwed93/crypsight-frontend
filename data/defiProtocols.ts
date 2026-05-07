export interface DeFiProtocol {
  id: string;
  name: string;
  category: 'DEX' | 'Lending' | 'Liquid Staking' | 'Derivatives' | 'Stablecoins' | 'All';
  tvl: string;
  volume24h?: string;
  logoUrl: string;
  description: string;
}

export const DEFI_PROTOCOLS: DeFiProtocol[] = [
  {
    id: 'uniswap',
    name: 'Uniswap',
    category: 'DEX',
    tvl: '5.82B',
    logoUrl: '/images/protocols/uniswap.png',
    description: 'Automated liquidity protocol on Ethereum.'
  },
  {
    id: 'aave',
    name: 'Aave',
    category: 'Lending',
    tvl: '7.14B',
    logoUrl: '/images/protocols/aave.png',
    description: 'Open source liquidity protocol for earning interest.'
  },
  {
    id: 'lido',
    name: 'Lido',
    category: 'Liquid Staking',
    tvl: '28.3B',
    logoUrl: '/images/protocols/lido.png',
    description: 'Liquid staking for digital assets.'
  },
  {
    id: 'compound',
    name: 'Compound',
    category: 'Lending',
    tvl: '3.21B',
    logoUrl: '/images/protocols/compound.png',
    description: 'Algorithmic money market protocol.'
  },
  {
    id: 'dydx',
    name: 'dYdX',
    category: 'Derivatives',
    tvl: '1.4B',
    logoUrl: '/images/protocols/dydx.png',
    description: 'Non-custodial derivative exchange.'
  },
  {
    id: 'sky',
    name: 'Sky',
    category: 'Stablecoins',
    tvl: '8.45B',
    logoUrl: '/images/protocols/sky.png',
    description: 'Decentralized stablecoin ecosystem.'
  },
  {
    id: 'raydium',
    name: 'Raydium',
    category: 'DEX',
    tvl: '1.18B',
    logoUrl: '/images/protocols/raydium.png',
    description: 'On-chain order book AMM on Solana.'
  },
  {
    id: 'orca',
    name: 'Orca',
    category: 'DEX',
    tvl: '942M',
    logoUrl: '/images/protocols/orca.png',
    description: 'Concentrated liquidity AMM on Solana.'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    category: 'DEX',
    tvl: '1.2B',
    logoUrl: '/images/protocols/jupiter.png',
    description: 'The key liquidity aggregator for Solana.'
  },
  {
    id: 'jito',
    name: 'Jito',
    category: 'Liquid Staking',
    tvl: '1.9B',
    logoUrl: '/images/protocols/jito.png',
    description: 'Solana liquid staking with MEV rewards.'
  }
];