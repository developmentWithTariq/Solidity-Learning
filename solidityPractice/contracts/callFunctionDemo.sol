//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CallFunctionDemo{
    address contractAddress;
    constructor(address _contractAddress){
        contractAddress = _contractAddress;
    }
    uint public val = 4;

    function callerFunctionTest() public {
        (bool success , bytes memory data ) = contractAddress.call(abi.encodeWithSignature("doSomeThing(uint256)",12));                
        console.log("CallFunctionDemo :: callerfunctionTEST success = ", success);                        
        // if we have code 
        // SecondContract abc = new SecondContract();
        // abc.doSomeThing();
    }
    function delegatecallFunction() public {
        (bool success , bytes memory data ) = contractAddress.delegatecall(abi.encodeWithSignature("doSomeThing(uint256)",12));                
        console.log("delegateCallFunctionDemo :: delegatecallerfunctionTEST success = ", success);                        
        console.log("value ", val);
    }
}