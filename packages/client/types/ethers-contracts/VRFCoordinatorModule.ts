/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface VRFCoordinatorModuleInterface extends utils.Interface {
  functions: {
    "getName()": FunctionFragment;
    "install(bytes)": FunctionFragment;
    "vrfCoordinatorSystem()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getName" | "install" | "vrfCoordinatorSystem"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "install",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "vrfCoordinatorSystem",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "install", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vrfCoordinatorSystem",
    data: BytesLike
  ): Result;

  events: {};
}

export interface VRFCoordinatorModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VRFCoordinatorModuleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getName(overrides?: CallOverrides): Promise<[string]>;

    install(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vrfCoordinatorSystem(overrides?: CallOverrides): Promise<[string]>;
  };

  getName(overrides?: CallOverrides): Promise<string>;

  install(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vrfCoordinatorSystem(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getName(overrides?: CallOverrides): Promise<string>;

    install(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    vrfCoordinatorSystem(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getName(overrides?: CallOverrides): Promise<BigNumber>;

    install(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vrfCoordinatorSystem(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    install(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vrfCoordinatorSystem(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
