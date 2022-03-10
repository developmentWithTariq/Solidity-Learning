import { ethers } from "hardhat";
import {  ContractD__factory, ContractD, ContractE__factory, ContractE, ContractF__factory, ContractF, ContractC__factory, ContractC, CallFunctionDemo__factory, CallFunctionDemo, SecondContract__factory, SecondContract } from "../typechain";

async function main() {
 
  const SecondContract:SecondContract__factory = await ethers.getContractFactory("SecondContract");
  const secondContract:SecondContract = await SecondContract.deploy();
  await secondContract.deployed();

  console.log("SecondContract deployed to:", secondContract.address);
  
  const CallFunction:CallFunctionDemo__factory = await ethers.getContractFactory("CallFunctionDemo");
  const callFunction:CallFunctionDemo = await CallFunction.deploy(secondContract.address);
  await callFunction.deployed();

  console.log("callFunction deployed to:", callFunction.address);
  console.log("value Before", await secondContract.val());
  // const txt1 = await callFunction.callerFunctionTest()
  console.log("value after", await secondContract.val());
  console.log("value of callfunctionDemo before", await callFunction.val());
  const txt2 = await callFunction.delegatecallFunction();
  console.log("value of callfunctionDemo after", await callFunction.val());
  // console.log("Data  is ",txt );
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
