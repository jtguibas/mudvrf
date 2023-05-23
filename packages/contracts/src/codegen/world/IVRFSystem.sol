// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

import { VRF, VRFRequest } from "./../../systems/VRF.sol";

interface IVRFSystem {
  error InvalidRequestConfirmations();
  error InvalidCallbackGasLimit();
  error InvalidNumberOfWords();
  error InvalidOracleId();
  error InvalidCommitment();
  error InvalidRequestParameters();
  error FailedToFulfillRandomness();

  function requestRandomWords(
    bytes32 _oracleId,
    uint16 _requestConfirmations,
    uint32 _callbackGasLimit,
    uint32 _nbWords,
    bytes4 _callbackSelector
  ) external returns (bytes32);

  function fulfillRandomWords(VRF.Proof memory _proof, VRFRequest memory _request) external;
}
