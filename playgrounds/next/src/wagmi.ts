import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { mainnet, optimism, optimismSepolia } from 'wagmi/chains'
import { injected, metaMask, walletConnect } from 'wagmi/connectors'
import { bobSepolia } from './bob'
import { sepolia } from './sepolia'

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia as any, bobSepolia as any, optimism],
    connectors: [
      injected(),
      walletConnect({
        projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
      }),
      metaMask(),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [bobSepolia.id]: http(),
      [optimism.id]: http(),
    },
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
