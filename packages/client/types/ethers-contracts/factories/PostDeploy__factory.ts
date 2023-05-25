/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PostDeploy, PostDeployInterface } from "../PostDeploy";

const _abi = [
  {
    inputs: [],
    name: "IS_SCRIPT",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "worldAddress",
        type: "address",
      },
    ],
    name: "run",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class PostDeploy__factory {
  static readonly abi = _abi;
  static createInterface(): PostDeployInterface {
    return new utils.Interface(_abi) as PostDeployInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PostDeploy {
    return new Contract(address, _abi, signerOrProvider) as PostDeploy;
  }
}
