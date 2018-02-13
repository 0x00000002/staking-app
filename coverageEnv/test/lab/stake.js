const HumanStandardToken = artifacts.require("./HumanStandardToken.sol");
const Stake = artifacts.require("StakeMock");
const assertFail = require('./../helpers/assertFail');
const assertRevert = require('./../helpers/assertRevert');

const BN = require("bn.js");
const HttpProvider = require('ethjs-provider-http');
const EthRPC = require('ethjs-rpc');
const EthQuery = require('ethjs-query');
const ethRPC = new EthRPC(new HttpProvider('http://localhost:8545'));
const ethQuery = new EthQuery(new HttpProvider('http://localhost:8545'));


contract('<Blockchain Labs> Stake.sol, common functions', ([owner, operator, beneficiary, user1, user2]) => {
    let token, stake;

    before(async function () {
        token = await HumanStandardToken.new(100000, "LEV", 0, "LEV");
        await token.transfer(user1, 100);
        await token.transfer(user2, 200);
        stake = await Stake.new([owner], operator, beneficiary, 100000, token.address, {from: owner});
        // await forceMine(new BN(200));
    });


    it('user should be able to put tokens for stake', async function () {
        await stake.startNewStakingInterval(100, 300, {from: operator});
        await token.transfer(stake.address, 1000);
        await stake.setLevToken(token.address);
        await stakeit(10, user1, stake, token);
        await stakeit(20, user2, stake, token);
        assert.equal(await balance(user1, token), 90);
        assert.equal(await balance(user2, token), 180);
        assert.equal(await balance(stake.address, token), 1030);
        assert.equal((await stake.totalLevs()).toNumber(), 30);
        assert.equal((await stake.totalLevBlocks()).toNumber(), 8540);
        assert.equal((await stake.stakes(user1)).toNumber(), 10);
        assert.equal((await stake.stakes(user2)).toNumber(), 20);
        assert.equal((await stake.levBlocks(user1)).toNumber(), 2860);
        assert.equal((await stake.levBlocks(user2)).toNumber(), 5680);
    });

    it('Only operator can do some things', async function () {
        await stake.checkOperator({from: operator});
        try {
            await stake.checkOperator({from: user2});
            await stake.redeemLevAndFeeToStakers([user1], {from: user2});
            await stake.redeemLevAndFeeToStakers([user1, user2], {from: operator});
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
    });

    it('check version', async function () {
        let res = await stake.version.call();
        assert.equal(res, "1.0.0");
    });

    it('set wallet', async function () {
        stake.setWallet(beneficiary, {from: owner});
        try {
            await stake.setWallet(beneficiary, {from: user2});
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
    });

    it('Fallback functions accept money', async () => {
        let initialBalance = (await token.balanceOf(stake.address)).toNumber();
        await token.transfer(stake.address, 25, {from: user1});
        let afterBalance = (await token.balanceOf(stake.address)).toNumber();
        assert.equal(afterBalance, initialBalance+25);
        // let initialBalance = await web3.eth.getBalance(stake.address);
        assert.isOk(await stake.sendTransaction({from: user1, to: user2, value: 10}));
        // let afterBalance = await web3.eth.getBalance(stake.address);
        // assert.equal(initialBalance.toNumber() + 10, afterBalance.toNumber());
    });

    it('Set Fee token', async () => {
        await stake.setFeeToken(token.address, {from: owner});
        let res = await stake.feeToken.call();
        assert.equal(token.address, res.toString());
    });

    it('Operator can revert FEE_CALCULATED flag', async () => {
        await stake.revertFeeCalculatedFlag(false, {from: owner});
        assert.equal((await stake.feeCalculated.call()), false);
    });

    it('Operator can instigate redeeming for stakers', async () => {
        try {
            await stake.redeemLevAndFeeToStakers([user1, user2], {from: operator});
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
    });

    it('Operator can run FEE calculation', async () => {
        try {
            await stake.updateFeeForCurrentStakingInterval({from: operator});
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
    });
});



contract('<Blockchain Labs> Stake.sol, staking period is over', ([owner, operator, beneficiary, user1, user2]) => {
    let token, stake;

    before(async function () {
        token = await HumanStandardToken.new(100000, "LEV", 0, "LEV");
        await token.transfer(user1, 100);
        await token.transfer(user2, 200);
        stake = await Stake.new([owner], operator, beneficiary, 100000, token.address, {from: owner});
        await stake.startNewStakingInterval(1, 100, {from: operator});
        await token.transfer(stake.address, 1000);
        await stake.setLevToken(token.address);
    });

    describe('Redeem LEVs and FEEs', function () {
        it('Operator can instigate redeeming for all stakers', async () => {
            // await forceMine(new BN(20));
            await stakeit(10, user1, stake, token);
            // await forceMine(new BN(100));
            await stake.revertFeeCalculatedFlag(true, {from: owner});
            await stake.redeemLevAndFeeByStaker({from: user1});
        });
    });
});


async function stakeit(count, user, stake, token) {
    await token.approve(stake.address, count, {from: user});
    await stake.stakeTokens(count, {from: user});
}

function forceMine(blockToMine) {
    return new Promise(async (resolve, reject) => {
        if (!BN.isBN(blockToMine)) {
            reject('Supplied block number must be a BN.');
        }
        const blockNumber = await ethQuery.blockNumber();
        if (blockNumber.lt(blockToMine)) {
            ethRPC.sendAsync({method: 'evm_mine'}, (err) => {
                if (err !== undefined && err !== null) {
                    reject(err);
                }
                resolve(forceMine(blockToMine));
            });
        } else {
            resolve();
        }
    });
}

async function balance(address, token) {
    return (await token.balanceOf(address)).toNumber();
}
