/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
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
} from "./common";

export interface VotingUtilsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getStartBlock"
      | "getQuorumState"
      | "MIN_BALLOT_DURATION_CYCLES"
      | "getVoterChoice"
      | "getAccepted"
      | "getIsFinalized"
      | "isActiveBallot"
      | "getFinalizeCalled"
      | "DECIMALS"
      | "MINIMUM_TURNOUT_BP"
      | "isInitialized"
      | "getNextBallotId"
      | "getTotalStake"
      | "MAX_BALLOT_DURATION_CYCLES"
      | "getDescription"
      | "getBelowTurnOut"
      | "getRejected"
      | "activeBallotsLength"
      | "isValidVotingKey"
      | "canBeFinalized"
      | "MAX_LIMIT_OF_BALLOTS"
      | "getMaxBallotDurationCycles"
      | "getEndBlock"
      | "getIndex"
      | "vote"
      | "getContractType"
      | "hasAlreadyVoted"
      | "activeBallots"
      | "getCreator"
      | "getProposedValue"
      | "activeBallotsAtIndex"
      | "getProxyStorage"
      | "validContractType"
      | "getMinBallotDurationCycles"
      | "validatorActiveBallots"
      | "getBallotLimitPerValidator"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "BallotCreated" | "BallotFinalized" | "Vote"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getStartBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuorumState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BALLOT_DURATION_CYCLES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVoterChoice",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccepted",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIsFinalized",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isActiveBallot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFinalizeCalled",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "DECIMALS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_TURNOUT_BP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextBallotId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_BALLOT_DURATION_CYCLES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDescription",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBelowTurnOut",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRejected",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "activeBallotsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isValidVotingKey",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canBeFinalized",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_LIMIT_OF_BALLOTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxBallotDurationCycles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEndBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasAlreadyVoted",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "activeBallots",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposedValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "activeBallotsAtIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyStorage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validContractType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinBallotDurationCycles",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validatorActiveBallots",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBallotLimitPerValidator",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getStartBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getQuorumState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BALLOT_DURATION_CYCLES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoterChoice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccepted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIsFinalized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isActiveBallot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFinalizeCalled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "DECIMALS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_TURNOUT_BP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextBallotId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_BALLOT_DURATION_CYCLES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBelowTurnOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRejected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeBallotsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidVotingKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canBeFinalized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_LIMIT_OF_BALLOTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxBallotDurationCycles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEndBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContractType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasAlreadyVoted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeBallots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCreator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProposedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeBallotsAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validContractType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinBallotDurationCycles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorActiveBallots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBallotLimitPerValidator",
    data: BytesLike
  ): Result;
}

export namespace BallotCreatedEvent {
  export type InputTuple = [id: BigNumberish, creator: AddressLike];
  export type OutputTuple = [id: bigint, creator: string];
  export interface OutputObject {
    id: bigint;
    creator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BallotFinalizedEvent {
  export type InputTuple = [id: BigNumberish];
  export type OutputTuple = [id: bigint];
  export interface OutputObject {
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteEvent {
  export type InputTuple = [
    id: BigNumberish,
    decision: BigNumberish,
    voter: AddressLike
  ];
  export type OutputTuple = [id: bigint, decision: bigint, voter: string];
  export interface OutputObject {
    id: bigint;
    decision: bigint;
    voter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface VotingUtils extends BaseContract {
  connect(runner?: ContractRunner | null): VotingUtils;
  waitForDeployment(): Promise<this>;

  interface: VotingUtilsInterface;

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

  getStartBlock: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  getQuorumState: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  MIN_BALLOT_DURATION_CYCLES: TypedContractMethod<[], [bigint], "view">;

  getVoterChoice: TypedContractMethod<
    [_id: BigNumberish, _key: AddressLike],
    [bigint],
    "view"
  >;

  getAccepted: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  getIsFinalized: TypedContractMethod<[_id: BigNumberish], [boolean], "view">;

  isActiveBallot: TypedContractMethod<[_id: BigNumberish], [boolean], "view">;

  getFinalizeCalled: TypedContractMethod<
    [_id: BigNumberish],
    [boolean],
    "view"
  >;

  DECIMALS: TypedContractMethod<[], [bigint], "view">;

  MINIMUM_TURNOUT_BP: TypedContractMethod<[], [bigint], "view">;

  isInitialized: TypedContractMethod<[], [boolean], "view">;

  getNextBallotId: TypedContractMethod<[], [bigint], "view">;

  getTotalStake: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  MAX_BALLOT_DURATION_CYCLES: TypedContractMethod<[], [bigint], "view">;

  getDescription: TypedContractMethod<[_id: BigNumberish], [string], "view">;

  getBelowTurnOut: TypedContractMethod<[_id: BigNumberish], [boolean], "view">;

  getRejected: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  activeBallotsLength: TypedContractMethod<[], [bigint], "view">;

  isValidVotingKey: TypedContractMethod<
    [_address: AddressLike],
    [boolean],
    "view"
  >;

  canBeFinalized: TypedContractMethod<[_id: BigNumberish], [boolean], "view">;

  MAX_LIMIT_OF_BALLOTS: TypedContractMethod<[], [bigint], "view">;

  getMaxBallotDurationCycles: TypedContractMethod<[], [bigint], "view">;

  getEndBlock: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  getIndex: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  vote: TypedContractMethod<
    [_id: BigNumberish, _choice: BigNumberish],
    [void],
    "nonpayable"
  >;

  getContractType: TypedContractMethod<[_id: BigNumberish], [bigint], "view">;

  hasAlreadyVoted: TypedContractMethod<
    [_id: BigNumberish, _key: AddressLike],
    [boolean],
    "view"
  >;

  activeBallots: TypedContractMethod<[], [bigint[]], "view">;

  getCreator: TypedContractMethod<[_id: BigNumberish], [string], "view">;

  getProposedValue: TypedContractMethod<[_id: BigNumberish], [string], "view">;

  activeBallotsAtIndex: TypedContractMethod<
    [_index: BigNumberish],
    [bigint],
    "view"
  >;

  getProxyStorage: TypedContractMethod<[], [string], "view">;

  validContractType: TypedContractMethod<
    [_contractType: BigNumberish],
    [boolean],
    "view"
  >;

  getMinBallotDurationCycles: TypedContractMethod<[], [bigint], "view">;

  validatorActiveBallots: TypedContractMethod<
    [_key: AddressLike],
    [bigint],
    "view"
  >;

  getBallotLimitPerValidator: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getStartBlock"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getQuorumState"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "MIN_BALLOT_DURATION_CYCLES"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getVoterChoice"
  ): TypedContractMethod<
    [_id: BigNumberish, _key: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAccepted"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getIsFinalized"
  ): TypedContractMethod<[_id: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isActiveBallot"
  ): TypedContractMethod<[_id: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getFinalizeCalled"
  ): TypedContractMethod<[_id: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "DECIMALS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MINIMUM_TURNOUT_BP"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isInitialized"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "getNextBallotId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalStake"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_BALLOT_DURATION_CYCLES"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getDescription"
  ): TypedContractMethod<[_id: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getBelowTurnOut"
  ): TypedContractMethod<[_id: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getRejected"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "activeBallotsLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isValidVotingKey"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "canBeFinalized"
  ): TypedContractMethod<[_id: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "MAX_LIMIT_OF_BALLOTS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMaxBallotDurationCycles"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getEndBlock"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getIndex"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [_id: BigNumberish, _choice: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getContractType"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasAlreadyVoted"
  ): TypedContractMethod<
    [_id: BigNumberish, _key: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "activeBallots"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getCreator"
  ): TypedContractMethod<[_id: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getProposedValue"
  ): TypedContractMethod<[_id: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "activeBallotsAtIndex"
  ): TypedContractMethod<[_index: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getProxyStorage"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "validContractType"
  ): TypedContractMethod<[_contractType: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getMinBallotDurationCycles"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "validatorActiveBallots"
  ): TypedContractMethod<[_key: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBallotLimitPerValidator"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "BallotCreated"
  ): TypedContractEvent<
    BallotCreatedEvent.InputTuple,
    BallotCreatedEvent.OutputTuple,
    BallotCreatedEvent.OutputObject
  >;
  getEvent(
    key: "BallotFinalized"
  ): TypedContractEvent<
    BallotFinalizedEvent.InputTuple,
    BallotFinalizedEvent.OutputTuple,
    BallotFinalizedEvent.OutputObject
  >;
  getEvent(
    key: "Vote"
  ): TypedContractEvent<
    VoteEvent.InputTuple,
    VoteEvent.OutputTuple,
    VoteEvent.OutputObject
  >;

  filters: {
    "BallotCreated(uint256,address)": TypedContractEvent<
      BallotCreatedEvent.InputTuple,
      BallotCreatedEvent.OutputTuple,
      BallotCreatedEvent.OutputObject
    >;
    BallotCreated: TypedContractEvent<
      BallotCreatedEvent.InputTuple,
      BallotCreatedEvent.OutputTuple,
      BallotCreatedEvent.OutputObject
    >;

    "BallotFinalized(uint256)": TypedContractEvent<
      BallotFinalizedEvent.InputTuple,
      BallotFinalizedEvent.OutputTuple,
      BallotFinalizedEvent.OutputObject
    >;
    BallotFinalized: TypedContractEvent<
      BallotFinalizedEvent.InputTuple,
      BallotFinalizedEvent.OutputTuple,
      BallotFinalizedEvent.OutputObject
    >;

    "Vote(uint256,uint256,address)": TypedContractEvent<
      VoteEvent.InputTuple,
      VoteEvent.OutputTuple,
      VoteEvent.OutputObject
    >;
    Vote: TypedContractEvent<
      VoteEvent.InputTuple,
      VoteEvent.OutputTuple,
      VoteEvent.OutputObject
    >;
  };
}