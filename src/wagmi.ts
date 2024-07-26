import { http, createConfig } from 'wagmi'
import { holesky } from 'wagmi/chains'
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';

export const wagmiConnectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet],
    },
  ],
  {
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
  }
)

export const config = createConfig({
  chains: [holesky],
  transports: {
    [holesky.id]: http(),
  },
  connectors: wagmiConnectors
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
