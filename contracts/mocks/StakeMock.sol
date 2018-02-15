pragma solidity ^0.4.18;

import "../Stake.sol";

contract StakeMock is Stake {

    function StakeMock(
        address[] _owners,
        address _operator,
        address _wallet,
        uint _weiPerFee,
        address _levToken)
    Stake(_owners, _operator, _wallet, _weiPerFee, _levToken)
    {
    }

    modifier isStaking {
        _;
    }

    modifier isDoneStaking {
        _;
    }

    function setTotalLevBlocksToZero() {
        totalLevBlocks = 0;
    }

    function setTotalLevsToZero() {
        totalLevs = 0;
    }

    function setTotalLevsToMany() {
        totalLevs = 1000000;
    }

//    function setTotalLevBlocksToMany() {
//        totalLevBlocks = 1000000;
//    }

    function setFeeForTheStakingInterval() {
        feeForTheStakingInterval = 10;
    }

//
//    function setStakingNow() public {
//        super.startNewStakingInterval(block.number - 10, block.number + 10);
//    }

}