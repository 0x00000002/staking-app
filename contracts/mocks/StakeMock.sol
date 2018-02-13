pragma solidity ^0.4.18;

import "../Stake.sol";

contract StakeMock is Stake {

    function public StakeMock(
        address[] _owners,
        address _operator,
        address _wallet,
        uint _weiPerFee,
        address _levToken)
             Stake(_owners, _operator, _wallet, _weiPerFee, _levToken)
    {
    }


    function checkOperator() external view onlyOperator isStaking isDoneStaking returns (string) {
        return "passed";
    }


    modifier isStaking {
        _;
    }

    modifier isDoneStaking {
        _;
    }
//
//    function setStakingNow() public {
//        super.startNewStakingInterval(block.number - 10, block.number + 10);
//    }

}