export interface Wallet {
  id: string;
  name: string;
  type: 'Browser' | 'Mobile' | 'Hardware';
  custody: 'Non-custodial' | 'Custodial';
  chains: string[];
  features: string[];
  logoUrl: string;
  description: string;
}

export const WALLETS: Wallet[] = [
  {
    id: 'metamask',
    name: 'Metamask',
    type: 'Mobile',
    custody: 'Non-custodial',
    chains: ['ETH', 'BNB', 'POL', 'ARB'],
    features: ['Swap', 'DApp', 'Bridge'],
    logoUrl: '/images/metamask.jpg',
    description: 'Browser Extension'
  },
  {
    id: 'phantom',
    name: 'Phantom',
    type: 'Mobile',
    custody: 'Non-custodial',
    chains: ['SOL', 'ETH', 'POL', 'BTC'],
    features: ['NFTs', 'Staking', 'Swap'],
    logoUrl: '/images/phantom wallet.jpg',
    description: 'Solana Native'
  },
  {
    id: 'okx-wallet',
    name: 'OKX Wallet',
    type: 'Mobile',
    custody: 'Non-custodial',
    chains: ['BTC', 'ETH', 'SOL', 'BNB'],
    features: ['DEX', 'NFTs', 'DApp'],
    logoUrl: '/images/okx wallet.jpg',
    description: 'Multichain'
  },
  {
    id: 'trust-wallet',
    name: 'Trust Wallet',
    type: 'Mobile',
    custody: 'Non-custodial',
    chains: ['ETH', 'BTC', 'BNB', 'SOL'],
    features: ['In-app Buy', 'Swap', 'Staking'],
    logoUrl: '/images/trust wallet.jpg',
    description: 'Mobile / Multichain'
  },
  {
    id: 'rabby-wallet',
    name: 'Rabby',
    type: 'Browser',
    custody: 'Non-custodial',
    chains: ['ETH', 'BASE', 'ARB', 'OP'],
    features: ['EVM Focus', 'Security Check', 'Swap'],
    logoUrl: '/images/rabby wallet.jpg',
    description: 'EVM / Mobile'
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    type: 'Mobile',
    custody: 'Non-custodial',
    chains: ['SOL', 'ETH', 'POL', 'AVAX'],
    features: ['Protocol', 'QR Auth', 'Bridge'],
    logoUrl: '/images/wallet-connect.svg',
    description: 'Multichain'
  },
  {
    id: 'coinbase-wallet',
    name: 'Coinbase',
    type: 'Mobile',
    custody: 'Non-custodial',
    chains: ['ETH', 'SOL', 'BTC', 'BASE'],
    features: ['Smart Wallet', 'DApp', 'Fiat On-ramp'],
    logoUrl: '/images/coinbase.jpg',
    description: 'Multi-Chain / Smart'
  },
  {
    id: 'argent',
    name: 'Argent',
    type: 'Mobile',
    custody: 'Non-custodial',
    chains: ['ETH', 'ZKSYNC', 'STARK'],
    features: ['Social Recovery', 'L2 Native', 'Security'],
    logoUrl: '/images/argent.jpg', // Custom logo path
    description: 'L2 / Social Recovery'
  },
  {
    id: 'safe',
    name: 'Safe',
    type: 'Browser',
    custody: 'Non-custodial',
    chains: ['ETH', 'POL', 'OP', 'BASE'],
    features: ['Multi-sig', 'Institutional', 'Account Abstraction'],
    logoUrl: '/images/safe.png',
    description: 'Multi-sig / Institutional'
  }
];