//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
contract VarVisibility1 {
    // 1. Private Variable
    uint256 private age; //this is only call by this contract
    // 1. Internal Variable
    //Internal variable can be call by this contract and the contract which is inherited by this contract
    uint256 internal height; 
    // 3. Public
    // Public variable can be called by anyone
    string public Name = "tariq jokhio";
    
    function updateAge(uint _age) public {
        age = _age;
        height = 6;
        
        }    
}


contract VarVisibility2 is VarVisibility1 {

    function updateHeight(uint _height) public {
        //height = _height / age; //Solidity doesn't allow us to call private variable
        height = _height;
    }
    function getName() public view returns(string memory) {
        return Name;
    }
}