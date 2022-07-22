/**
 * This file contains all contract definitions for Gitcoin Grants Round Manager
 */

import abi from "./abi"
import { Contract } from "./types"



/** ProgramFactory  */
export const programFactoryContract: Contract = {
  address: "0xAd732aB847d20EdfC48A6d9B256f35D756381C52",
  abi: abi.programFactory
}

/** ProgramImplementation */
export const programImplementationContract: Contract = {
  abi: abi.programImplementation
}

/** RoundFactory  */
export const roundFactoryContract: Contract = {
  address: "0x515594eeB37A6D5815F4c860454cD4FD87539978",
  abi: abi.roundFactory
}

/** RoundImplementation */
export const roundImplementationContract: Contract = {
  abi: abi.roundImplementation
}