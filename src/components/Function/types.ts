import { Contract } from 'web3-eth-contract/types'

import { Type } from '../../components/Transaction/types'

export type Func = {
  name: string
  original: any
  selector: string
  outputs: Type[]
  inputs: Type[]
  isConstant: boolean
  isPayable: boolean
}

export type FunctionProps = {
  func: Func
  contract: Contract
  blockNumber: string
}
