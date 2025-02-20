import { http, createPublicClient } from 'viem'
import { publicActionsL1, publicActionsL2 } from 'viem/op-stack'
import { bobSepolia } from './bob'
import { sepolia } from './sepolia'

export const publicClientL1 = createPublicClient({
  chain: sepolia,
  transport: http(undefined, { batch: true }),
}).extend(publicActionsL1())

export const publicClientL2 = createPublicClient({
  chain: bobSepolia,
  transport: http(undefined, { batch: true }),
}).extend(publicActionsL2())
