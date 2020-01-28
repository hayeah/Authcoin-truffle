pragma solidity ^0.4.17;


contract Basic {
    uint public number;
    function add(uint _nr) public {
        number += _nr;
    }
}