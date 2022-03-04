import { ethers } from "hardhat";
import { C__factory, C } from "../typechain";

async function main() {
 
  const C:C__factory = await ethers.getContractFactory("C");
  const c:C = await C.deploy();

  await c.deployed();

  console.log("Greeter deployed to:", c.address);

  console.log("Data A", await c.checkfunctionA());
  console.log("Data B", await c.checkfunctionB());
  // if we have refrense of parent and object of child even in this case it call the getData() of B
  //it calls the polymorphism or lead binding some time informal word calling of function at runtime
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
