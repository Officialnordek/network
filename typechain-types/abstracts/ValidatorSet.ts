/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ValidatorSetInterface extends Interface {
  getFunction(
    nameOrSignature: "finalizeChange" | "getValidators"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "InitiateChange"): EventFragment;

  encodeFunctionData(
    functionFragment: "finalizeChange",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getValidators",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "finalizeChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getValidators",
    data: BytesLike
  ): Result;
}

export namespace InitiateChangeEvent {
  export type InputTuple = [parentHash: BytesLike, newSet: AddressLike[]];
  export type OutputTuple = [parentHash: string, newSet: string[]];
  export interface OutputObject {
    parentHash: string;
    newSet: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ValidatorSet extends BaseContract {
  connect(runner?: ContractRunner | null): ValidatorSet;
  waitForDeployment(): Promise<this>;

  interface: ValidatorSetInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  finalizeChange: TypedContractMethod<[], [void], "nonpayable">;

  getValidators: TypedContractMethod<[], [string[]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "finalizeChange"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getValidators"
  ): TypedContractMethod<[], [string[]], "view">;

  getEvent(
    key: "InitiateChange"
  ): TypedContractEvent<
    InitiateChangeEvent.InputTuple,
    InitiateChangeEvent.OutputTuple,
    InitiateChangeEvent.OutputObject
  >;

  filters: {
    "InitiateChange(bytes32,address[])": TypedContractEvent<
      InitiateChangeEvent.InputTuple,
      InitiateChangeEvent.OutputTuple,
      InitiateChangeEvent.OutputObject
    >;
    InitiateChange: TypedContractEvent<
      InitiateChangeEvent.InputTuple,
      InitiateChangeEvent.OutputTuple,
      InitiateChangeEvent.OutputObject
    >;
  };
}
