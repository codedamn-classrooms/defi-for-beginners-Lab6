// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Decentralized {

    uint public amount = 1 ether;

    function send(address payable _addr) payable public {
        require(msg.value >= amount);
        _addr.transfer(msg.value);
    }
}