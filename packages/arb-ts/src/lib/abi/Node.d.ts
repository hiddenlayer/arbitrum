/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface NodeInterface extends ethers.utils.Interface {
  functions: {
    'addStaker(address)': FunctionFragment
    'challengeHash()': FunctionFragment
    'childCreated(uint256)': FunctionFragment
    'confirmData()': FunctionFragment
    'deadlineBlock()': FunctionFragment
    'destroy()': FunctionFragment
    'firstChildBlock()': FunctionFragment
    'initialize(address,bytes32,bytes32,bytes32,uint256,uint256)': FunctionFragment
    'isMaster()': FunctionFragment
    'latestChildNumber()': FunctionFragment
    'newChildConfirmDeadline(uint256)': FunctionFragment
    'noChildConfirmedBeforeBlock()': FunctionFragment
    'prev()': FunctionFragment
    'removeStaker(address)': FunctionFragment
    'requirePastChildConfirmDeadline()': FunctionFragment
    'requirePastDeadline()': FunctionFragment
    'rollup()': FunctionFragment
    'stakerCount()': FunctionFragment
    'stakers(address)': FunctionFragment
    'stateHash()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'addStaker', values: [string]): string
  encodeFunctionData(
    functionFragment: 'challengeHash',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'childCreated',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'confirmData',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'deadlineBlock',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'destroy', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'firstChildBlock',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      string,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish
    ]
  ): string
  encodeFunctionData(functionFragment: 'isMaster', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'latestChildNumber',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'newChildConfirmDeadline',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'noChildConfirmedBeforeBlock',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'prev', values?: undefined): string
  encodeFunctionData(functionFragment: 'removeStaker', values: [string]): string
  encodeFunctionData(
    functionFragment: 'requirePastChildConfirmDeadline',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'requirePastDeadline',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'rollup', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'stakerCount',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'stakers', values: [string]): string
  encodeFunctionData(functionFragment: 'stateHash', values?: undefined): string

  decodeFunctionResult(functionFragment: 'addStaker', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'challengeHash',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'childCreated',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'confirmData', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'deadlineBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'destroy', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'firstChildBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMaster', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'latestChildNumber',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'newChildConfirmDeadline',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'noChildConfirmedBeforeBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'prev', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'removeStaker',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'requirePastChildConfirmDeadline',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'requirePastDeadline',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'rollup', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stakerCount', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stakers', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'stateHash', data: BytesLike): Result

  events: {}
}

export class Node extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: NodeInterface

  functions: {
    addStaker(
      staker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'addStaker(address)'(
      staker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    challengeHash(overrides?: CallOverrides): Promise<[string]>

    'challengeHash()'(overrides?: CallOverrides): Promise<[string]>

    childCreated(
      number: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'childCreated(uint256)'(
      number: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    confirmData(overrides?: CallOverrides): Promise<[string]>

    'confirmData()'(overrides?: CallOverrides): Promise<[string]>

    deadlineBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    'deadlineBlock()'(overrides?: CallOverrides): Promise<[BigNumber]>

    destroy(overrides?: Overrides): Promise<ContractTransaction>

    'destroy()'(overrides?: Overrides): Promise<ContractTransaction>

    firstChildBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    'firstChildBlock()'(overrides?: CallOverrides): Promise<[BigNumber]>

    initialize(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(address,bytes32,bytes32,bytes32,uint256,uint256)'(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    isMaster(overrides?: CallOverrides): Promise<[boolean]>

    'isMaster()'(overrides?: CallOverrides): Promise<[boolean]>

    latestChildNumber(overrides?: CallOverrides): Promise<[BigNumber]>

    'latestChildNumber()'(overrides?: CallOverrides): Promise<[BigNumber]>

    newChildConfirmDeadline(
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'newChildConfirmDeadline(uint256)'(
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    noChildConfirmedBeforeBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    'noChildConfirmedBeforeBlock()'(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    prev(overrides?: CallOverrides): Promise<[BigNumber]>

    'prev()'(overrides?: CallOverrides): Promise<[BigNumber]>

    removeStaker(
      staker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'removeStaker(address)'(
      staker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    requirePastChildConfirmDeadline(overrides?: CallOverrides): Promise<[void]>

    'requirePastChildConfirmDeadline()'(
      overrides?: CallOverrides
    ): Promise<[void]>

    requirePastDeadline(overrides?: CallOverrides): Promise<[void]>

    'requirePastDeadline()'(overrides?: CallOverrides): Promise<[void]>

    rollup(overrides?: CallOverrides): Promise<[string]>

    'rollup()'(overrides?: CallOverrides): Promise<[string]>

    stakerCount(overrides?: CallOverrides): Promise<[BigNumber]>

    'stakerCount()'(overrides?: CallOverrides): Promise<[BigNumber]>

    stakers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>

    'stakers(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    stateHash(overrides?: CallOverrides): Promise<[string]>

    'stateHash()'(overrides?: CallOverrides): Promise<[string]>
  }

  addStaker(staker: string, overrides?: Overrides): Promise<ContractTransaction>

  'addStaker(address)'(
    staker: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  challengeHash(overrides?: CallOverrides): Promise<string>

  'challengeHash()'(overrides?: CallOverrides): Promise<string>

  childCreated(
    number: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'childCreated(uint256)'(
    number: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  confirmData(overrides?: CallOverrides): Promise<string>

  'confirmData()'(overrides?: CallOverrides): Promise<string>

  deadlineBlock(overrides?: CallOverrides): Promise<BigNumber>

  'deadlineBlock()'(overrides?: CallOverrides): Promise<BigNumber>

  destroy(overrides?: Overrides): Promise<ContractTransaction>

  'destroy()'(overrides?: Overrides): Promise<ContractTransaction>

  firstChildBlock(overrides?: CallOverrides): Promise<BigNumber>

  'firstChildBlock()'(overrides?: CallOverrides): Promise<BigNumber>

  initialize(
    _rollup: string,
    _stateHash: BytesLike,
    _challengeHash: BytesLike,
    _confirmData: BytesLike,
    _prev: BigNumberish,
    _deadlineBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(address,bytes32,bytes32,bytes32,uint256,uint256)'(
    _rollup: string,
    _stateHash: BytesLike,
    _challengeHash: BytesLike,
    _confirmData: BytesLike,
    _prev: BigNumberish,
    _deadlineBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  isMaster(overrides?: CallOverrides): Promise<boolean>

  'isMaster()'(overrides?: CallOverrides): Promise<boolean>

  latestChildNumber(overrides?: CallOverrides): Promise<BigNumber>

  'latestChildNumber()'(overrides?: CallOverrides): Promise<BigNumber>

  newChildConfirmDeadline(
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'newChildConfirmDeadline(uint256)'(
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  noChildConfirmedBeforeBlock(overrides?: CallOverrides): Promise<BigNumber>

  'noChildConfirmedBeforeBlock()'(overrides?: CallOverrides): Promise<BigNumber>

  prev(overrides?: CallOverrides): Promise<BigNumber>

  'prev()'(overrides?: CallOverrides): Promise<BigNumber>

  removeStaker(
    staker: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'removeStaker(address)'(
    staker: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  requirePastChildConfirmDeadline(overrides?: CallOverrides): Promise<void>

  'requirePastChildConfirmDeadline()'(overrides?: CallOverrides): Promise<void>

  requirePastDeadline(overrides?: CallOverrides): Promise<void>

  'requirePastDeadline()'(overrides?: CallOverrides): Promise<void>

  rollup(overrides?: CallOverrides): Promise<string>

  'rollup()'(overrides?: CallOverrides): Promise<string>

  stakerCount(overrides?: CallOverrides): Promise<BigNumber>

  'stakerCount()'(overrides?: CallOverrides): Promise<BigNumber>

  stakers(arg0: string, overrides?: CallOverrides): Promise<boolean>

  'stakers(address)'(arg0: string, overrides?: CallOverrides): Promise<boolean>

  stateHash(overrides?: CallOverrides): Promise<string>

  'stateHash()'(overrides?: CallOverrides): Promise<string>

  callStatic: {
    addStaker(staker: string, overrides?: CallOverrides): Promise<BigNumber>

    'addStaker(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    challengeHash(overrides?: CallOverrides): Promise<string>

    'challengeHash()'(overrides?: CallOverrides): Promise<string>

    childCreated(number: BigNumberish, overrides?: CallOverrides): Promise<void>

    'childCreated(uint256)'(
      number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    confirmData(overrides?: CallOverrides): Promise<string>

    'confirmData()'(overrides?: CallOverrides): Promise<string>

    deadlineBlock(overrides?: CallOverrides): Promise<BigNumber>

    'deadlineBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    destroy(overrides?: CallOverrides): Promise<void>

    'destroy()'(overrides?: CallOverrides): Promise<void>

    firstChildBlock(overrides?: CallOverrides): Promise<BigNumber>

    'firstChildBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    initialize(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,bytes32,bytes32,bytes32,uint256,uint256)'(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    isMaster(overrides?: CallOverrides): Promise<boolean>

    'isMaster()'(overrides?: CallOverrides): Promise<boolean>

    latestChildNumber(overrides?: CallOverrides): Promise<BigNumber>

    'latestChildNumber()'(overrides?: CallOverrides): Promise<BigNumber>

    newChildConfirmDeadline(
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'newChildConfirmDeadline(uint256)'(
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    noChildConfirmedBeforeBlock(overrides?: CallOverrides): Promise<BigNumber>

    'noChildConfirmedBeforeBlock()'(
      overrides?: CallOverrides
    ): Promise<BigNumber>

    prev(overrides?: CallOverrides): Promise<BigNumber>

    'prev()'(overrides?: CallOverrides): Promise<BigNumber>

    removeStaker(staker: string, overrides?: CallOverrides): Promise<void>

    'removeStaker(address)'(
      staker: string,
      overrides?: CallOverrides
    ): Promise<void>

    requirePastChildConfirmDeadline(overrides?: CallOverrides): Promise<void>

    'requirePastChildConfirmDeadline()'(
      overrides?: CallOverrides
    ): Promise<void>

    requirePastDeadline(overrides?: CallOverrides): Promise<void>

    'requirePastDeadline()'(overrides?: CallOverrides): Promise<void>

    rollup(overrides?: CallOverrides): Promise<string>

    'rollup()'(overrides?: CallOverrides): Promise<string>

    stakerCount(overrides?: CallOverrides): Promise<BigNumber>

    'stakerCount()'(overrides?: CallOverrides): Promise<BigNumber>

    stakers(arg0: string, overrides?: CallOverrides): Promise<boolean>

    'stakers(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    stateHash(overrides?: CallOverrides): Promise<string>

    'stateHash()'(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    addStaker(staker: string, overrides?: Overrides): Promise<BigNumber>

    'addStaker(address)'(
      staker: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    challengeHash(overrides?: CallOverrides): Promise<BigNumber>

    'challengeHash()'(overrides?: CallOverrides): Promise<BigNumber>

    childCreated(
      number: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'childCreated(uint256)'(
      number: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    confirmData(overrides?: CallOverrides): Promise<BigNumber>

    'confirmData()'(overrides?: CallOverrides): Promise<BigNumber>

    deadlineBlock(overrides?: CallOverrides): Promise<BigNumber>

    'deadlineBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    destroy(overrides?: Overrides): Promise<BigNumber>

    'destroy()'(overrides?: Overrides): Promise<BigNumber>

    firstChildBlock(overrides?: CallOverrides): Promise<BigNumber>

    'firstChildBlock()'(overrides?: CallOverrides): Promise<BigNumber>

    initialize(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(address,bytes32,bytes32,bytes32,uint256,uint256)'(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    isMaster(overrides?: CallOverrides): Promise<BigNumber>

    'isMaster()'(overrides?: CallOverrides): Promise<BigNumber>

    latestChildNumber(overrides?: CallOverrides): Promise<BigNumber>

    'latestChildNumber()'(overrides?: CallOverrides): Promise<BigNumber>

    newChildConfirmDeadline(
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'newChildConfirmDeadline(uint256)'(
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    noChildConfirmedBeforeBlock(overrides?: CallOverrides): Promise<BigNumber>

    'noChildConfirmedBeforeBlock()'(
      overrides?: CallOverrides
    ): Promise<BigNumber>

    prev(overrides?: CallOverrides): Promise<BigNumber>

    'prev()'(overrides?: CallOverrides): Promise<BigNumber>

    removeStaker(staker: string, overrides?: Overrides): Promise<BigNumber>

    'removeStaker(address)'(
      staker: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    requirePastChildConfirmDeadline(
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'requirePastChildConfirmDeadline()'(
      overrides?: CallOverrides
    ): Promise<BigNumber>

    requirePastDeadline(overrides?: CallOverrides): Promise<BigNumber>

    'requirePastDeadline()'(overrides?: CallOverrides): Promise<BigNumber>

    rollup(overrides?: CallOverrides): Promise<BigNumber>

    'rollup()'(overrides?: CallOverrides): Promise<BigNumber>

    stakerCount(overrides?: CallOverrides): Promise<BigNumber>

    'stakerCount()'(overrides?: CallOverrides): Promise<BigNumber>

    stakers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    'stakers(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    stateHash(overrides?: CallOverrides): Promise<BigNumber>

    'stateHash()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    addStaker(
      staker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'addStaker(address)'(
      staker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    challengeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'challengeHash()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    childCreated(
      number: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'childCreated(uint256)'(
      number: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    confirmData(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'confirmData()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    deadlineBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'deadlineBlock()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    destroy(overrides?: Overrides): Promise<PopulatedTransaction>

    'destroy()'(overrides?: Overrides): Promise<PopulatedTransaction>

    firstChildBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'firstChildBlock()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    initialize(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(address,bytes32,bytes32,bytes32,uint256,uint256)'(
      _rollup: string,
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    isMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'isMaster()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    latestChildNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'latestChildNumber()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    newChildConfirmDeadline(
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'newChildConfirmDeadline(uint256)'(
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    noChildConfirmedBeforeBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'noChildConfirmedBeforeBlock()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    prev(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'prev()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    removeStaker(
      staker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'removeStaker(address)'(
      staker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    requirePastChildConfirmDeadline(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'requirePastChildConfirmDeadline()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    requirePastDeadline(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'requirePastDeadline()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    rollup(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'rollup()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    stakerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'stakerCount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    stakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'stakers(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    stateHash(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'stateHash()'(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}