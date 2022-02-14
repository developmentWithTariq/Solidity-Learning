import { ethers } from "hardhat";
import { Overload__factory } from "../typechain";
import { SolidityTest__factory } from "../typechain/factories/SolidityTest__factory";

async function main() {
 
  const Contract: Math__factory = await ethers.getContractFactory("Math");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log("Greeter deployed to:", contract.address);

 s

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
