import { defineChain } from 'viem';

const sepoliaSourceId = 11_155_111; // sepolia

export const bobSepolia = defineChain({
  id: 808813,
  name: 'BOB Sepolia',
  network: 'bob-sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'BOB Sepolia',
    symbol: 'ETH'
  },
  rpcUrls: {
    default: {
      http: ['https://bob-sepolia.rpc.gobob.xyz'],
      webSocket: ['wss://bob-sepolia.rpc.gobob.xyz']
    },
    public: {
      http: ['https://bob-sepolia.rpc.gobob.xyz'],
      webSocket: ['wss://bob-sepolia.rpc.gobob.xyz']
    }
  },
  blockExplorers: {
    default: {
      name: 'BOB Sepolia Explorer',
      url: 'https://bob-sepolia.explorer.gobob.xyz'
    }
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 35677
    },
    l2OutputOracle: {
      [sepoliaSourceId]: {
        address: '0xd1cBBC06213B7E14e99aDFfFeF1C249E6f9537e0',
        blockCreated: 6404317
      }
    },
    portal: {
      [sepoliaSourceId]: {
        address: '0xBAAf3BAfdbd660380938b27d21c31bB7D072a799',
        blockCreated: 6404317
      }
    }
  },
  testnet: true
});
