pragma solidity ^0.4.18;

import "./../Validating.sol";

contract ValidatingMock is Validating{
    function checkEmptyValidZero(string _string, address _address, uint _uint)
        public
        validAddress(_address)
        notEmpty(_string)
        notZero(_uint)
        returns (bool _true)
    {
        return true;
    }
}