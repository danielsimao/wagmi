'use client'

import { useEffect, useMemo, useState } from 'react'
import { http, createWalletClient, custom } from 'viem'
import { walletActionsL1, walletActionsL2 } from 'viem/op-stack'
import { useAccount } from 'wagmi'
import { bobSepolia } from '../bob'
import { sepolia } from '../sepolia'

export function useIsClient() {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return isClient
}

const useWalletClientL2 = () => {
  const { address } = useAccount()
  const isClient = useIsClient()

  return useMemo(
    () =>
      createWalletClient({
        account: address,
        chain: bobSepolia,
        transport:
          isClient && window?.ethereum ? custom(window.ethereum) : http(),
      }).extend(walletActionsL2()),
    [address, isClient],
  )
}

const useWalletClientL1 = () => {
  const { address } = useAccount()
  const isClient = useIsClient()

  return useMemo(
    () =>
      createWalletClient({
        account: address,
        chain: sepolia,
        transport:
          isClient && window?.ethereum ? custom(window.ethereum) : http(),
      }).extend(walletActionsL1()),

    [address, isClient],
  )
}

export { useWalletClientL1, useWalletClientL2 }
