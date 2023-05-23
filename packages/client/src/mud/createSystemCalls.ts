import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";
import { VRFRequestStruct, VRF } from "contracts/types/ethers-contracts/IWorld";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  { RaffleCounter }: ClientComponents
) {
  const startNewRaffle = async () => {
    const tx = await worldSend("startNewRaffle", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(RaffleCounter, singletonEntity);
  }

  const buyTicket = async (raffleId: number) => {
    const tx = await worldSend("buyTicket", [raffleId]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
  }

  const endRaffle = async (raffleId: number) => {
    const tx = await worldSend("endRaffle", [raffleId]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
  }

  const fulfillRandomness = async (proof: VRF.ProofStruct, request: VRFRequestStruct) => {
    const tx = await worldSend("fulfillRandomWords", [proof, request]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
  }

  return {
    startNewRaffle,
    buyTicket,
    endRaffle,
    fulfillRandomness
  };
}