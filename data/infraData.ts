export interface InfraProject {
  id: string;
  name: string;
  type: string;
  description: string;
  status: 'ACTIVE' | 'BETA';
  category: 'RPC' | 'Oracles' | 'Bridges' | 'Storage';
  logoUrl: string;
}

export const INFRA_DATA: Record<string, InfraProject[]> = {
  rpc: [
    { 
      id: 'alchemy', 
      name: 'Alchemy', 
      type: 'RPC Provider', 
      status: 'ACTIVE', 
      category: 'RPC', 
      description: 'World-class node infrastructure with advanced debugging tools.', 
      logoUrl: '/images/infra/alchemy.png' 
    },
    { 
      id: 'infura', 
      name: 'Infura', 
      type: 'RPC Provider', 
      status: 'ACTIVE', 
      category: 'RPC', 
      description: 'The leading Ethereum infrastructure suite for enterprise scale.', 
      logoUrl: '/images/infra/infura.png' 
    },
    { 
      id: 'quicknode', 
      name: 'QuickNode', 
      type: 'RPC Provider', 
      status: 'ACTIVE', 
      category: 'RPC', 
      description: 'Ultra-fast blockchain nodes across 20+ different chains.', 
      logoUrl: '/images/infra/quicknode.png' 
    },
    { 
      id: 'ankr', 
      name: 'Ankr', 
      type: 'RPC Provider', 
      status: 'BETA', 
      category: 'RPC', 
      description: 'Decentralized node network with global low-latency endpoints.', 
      logoUrl: '/images/infra/ankr.png' 
    },
  ],
  oracles: [
    { 
      id: 'chainlink', 
      name: 'Chainlink', 
      type: 'Oracle Network', 
      status: 'ACTIVE', 
      category: 'Oracles', 
      description: 'The industry-standard decentralized oracle network for secure feeds.', 
      logoUrl: '/images/infra/chainlink.png' 
    },
    { 
      id: 'pyth', 
      name: 'Pyth', 
      type: 'Data Oracle', 
      status: 'ACTIVE', 
      category: 'Oracles', 
      description: 'Sub-second financial market data for modern DeFi applications.', 
      logoUrl: '/images/infra/pyth.png' 
    },
    { 
      id: 'switchboard', 
      name: 'Switchboard', 
      type: 'Custom Oracle', 
      status: 'BETA', 
      category: 'Oracles', 
      description: 'Permissionless and customizable oracles for any data type.', 
      logoUrl: '/images/infra/switchboard.png' 
    },
    { 
      id: 'api3', 
      name: 'API3', 
      type: 'First-Party Oracle', 
      status: 'ACTIVE', 
      category: 'Oracles', 
      description: 'Direct data connection between APIs and smart contracts.', 
      logoUrl: '/images/infra/api3.png' 
    },
  ],
  bridges: [
    { 
      id: 'layerzero', 
      name: 'LayerZero', 
      type: 'Omnichain Layer', 
      status: 'ACTIVE', 
      category: 'Bridges', 
      description: 'Messaging protocol that enables cross-chain applications.', 
      logoUrl: '/images/infra/layerzero.png' 
    },
    { 
      id: 'wormhole', 
      name: 'Wormhole', 
      type: 'Bridge Protocol', 
      status: 'ACTIVE', 
      category: 'Bridges', 
      description: 'Universal message passing protocol for high-value asset transfers.', 
      logoUrl: '/images/infra/wormhole.png' 
    },
    { 
      id: 'axelar', 
      name: 'Axelar', 
      type: 'Interchain Network', 
      status: 'ACTIVE', 
      category: 'Bridges', 
      description: 'Connects L1s and L2s with proof-of-stake security.', 
      logoUrl: '/images/infra/axelar.png' 
    },
    { 
      id: 'across', 
      name: 'Across', 
      type: 'Asset Bridge', 
      status: 'ACTIVE', 
      category: 'Bridges', 
      description: 'Optimistic bridge for fast and capital-efficient L2 transfers.', 
      logoUrl: '/images/infra/across.png' 
    },
  ],
  storage: [
    { 
      id: 'arweave', 
      name: 'Arweave', 
      type: 'Permanent Storage', 
      status: 'ACTIVE', 
      category: 'Storage', 
      description: 'Store data forever with a single upfront endowment payment.', 
      logoUrl: '/images/infra/arweave.png' 
    },
    { 
      id: 'filecoin', 
      name: 'Filecoin', 
      type: 'Storage Network', 
      status: 'ACTIVE', 
      category: 'Storage', 
      description: 'Decentralized marketplace for verifiable data storage.', 
      logoUrl: '/images/infra/filecoin.png' 
    },
    { 
      id: 'ens', 
      name: 'ENS', 
      type: 'Identity Service', 
      status: 'ACTIVE', 
      category: 'Storage', 
      description: 'Decentralized naming for wallets, websites, and more.', 
      logoUrl: '/images/infra/ens.png' 
    },
    { 
      id: 'worldcoin', 
      name: 'Worldcoin', 
      type: 'Proof of Personhood', 
      status: 'BETA', 
      category: 'Storage', 
      description: 'Privacy-preserving global identity network.', 
      logoUrl: '/images/infra/worldcoin.png' 
    },
  ]
};