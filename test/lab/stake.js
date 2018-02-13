const HumanStandardToken = artifacts.require("./HumanStandardToken.sol");
const Stake = artifacts.require("StakeMock");
//const Stake = artifacts.require("StakeMock");
const Fee = artifacts.require("./Fee.sol");
const assertFail = require('./../helpers/assertFail');
const assertRevert = require('./../helpers/assertRevert');
const BigNumber = require("bignumber.js");

contract('Stake Levs <Blockchain Labs>, @tikonoff', ([owner, operator, beneficiary, user1, user2]) => {
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

});







// contract('Stake Levs <Blockchain Labs>, @tikonoff', ([owner, operator, beneficiary, user1, user2]) => {
//     let token, stake;
//
//     before(async function () {
//         token = await HumanStandardToken.new(100000, "LEV", 0, "LEV");
//         await token.transfer(user1, 100);
//         await token.transfer(user2, 200);
//         stake = await Stake.new([owner], operator, beneficiary, 100000, token.address, {from: owner});
//         await stake.startNewStakingInterval(100, 300, {from: operator});
//         await token.transfer(stake.address, 1000);
//         await stake.setLevToken(token.address);
//         // await forceMine(new BN(200));
//     });
//
//     it.only('redeem Levs and Fees by staker', async function () {
//         await forceMine(new BN(300));
//         await stake.updateFeeForCurrentStakingInterval({from: operator});
//         // await stake.redeemLevAndFeeByStaker({from: user1 });
//     });
// });
//
//
//
// contract('Calculate Fee Tokens', (accounts) => {
//     let token, stake, fee;
//     let wallet;
//
//     before(async function () {
//         [stake, fee, token] = await setup(accounts);
//         await stake.setLevToken(token.address);
//         wallet = await stake.wallet();
//         await web3.eth.sendTransaction({
//             from: wallet,
//             to: user3(accounts),
//             value: new BN("999999999990000000000000000", 10)
//         });
//         await forceMine(new BN(200));
//         await stakeit(10, user1, stake, token);
//         await stakeit(15, user2, stake, token);
//         await forceMine(new BN(300));
//         await sendFeesToSelf(stake.address, await stake.owners(0), fee, 1000);
//         await web3.eth.sendTransaction({from: user1, to: stake.address, value: 10000000});
//     });
//
//
//     it('Stake contract should be able to calculate total Fee Tokens based on trading', async function () {
//         let walletBalance = (await web3.eth.getBalance(wallet));
//         stake = await Stake.deployed();
//         await stake.updateFeeForCurrentStakingInterval({from: operator(accounts)});
//         expect((await stake.feeForTheStakingInterval()).toNumber()).to.eql(1010);
//         expect((await fee.balanceOf(stake.address)).toNumber()).to.eql(0);
//         let walletNewBalance = (await web3.eth.getBalance(wallet));
//         expect(walletNewBalance - walletBalance).to.eql(10000000);
//     });
//
// });
//
// contract('Calculate fee tokens when no eth and fee has been collected', (accounts) => {
//     let token, stake, fee;
//     let wallet;
//
//     before(async function () {
//         [stake, fee, token] = await setup(accounts);
//         await stake.setLevToken(token.address);
//         wallet = await stake.wallet();
//         await web3.eth.sendTransaction({
//             from: wallet,
//             to: user3(accounts),
//             value: new BN("999999999990000000000000000", 10)
//         });
//         await forceMine(new BN(200));
//         await stakeit(10, user1, stake, token);
//         await stakeit(15, user2, stake, token);
//         await forceMine(new BN(300));
//         // await sendFeesToSelf(stake.address, await stake.owner(), fee, 1000);
//         // await web3.eth.sendTransaction({from: user1, to: stake.address, value: 10000000});
//     });
//
//
//     it('Stake contract should be able to calculate total Fee Tokens  even if there is no eth as commission', async function () {
//         let walletBalance = (await web3.eth.getBalance(wallet));
//         stake = await Stake.deployed();
//         await stake.updateFeeForCurrentStakingInterval({from: operator(accounts)});
//         expect((await stake.feeForTheStakingInterval()).toNumber()).to.eql(0);
//         expect((await fee.balanceOf(stake.address)).toNumber()).to.eql(0);
//         let walletNewBalance = (await web3.eth.getBalance(wallet));
//         expect(walletNewBalance - walletBalance).to.eql(0);
//         expect()
//     });
// });
//
// contract('Circulate Fee Tokens', (accounts) => {
//     let token, stake, fee;
//
//     before(async function () {
//         [stake, fee, token] = await setup(accounts);
//         await stakeit(10, user1, stake, token);
//         await stakeit(15, user2, stake, token);
//         await forceMine(new BN(300));
//         await sendFeesToSelf(stake.address, await stake.owners(0), fee, 1000);
//         await web3.eth.sendTransaction({from: user1, to: stake.address, value: 10000000});
//         await stake.updateFeeForCurrentStakingInterval({from: operator(accounts)});
//     });
//
//
//     it('Stake contract should be able to send Fee and Lev to User', async function () {
//         await stake.redeemLevAndFeeByStaker({from: user1});
//         expect((await token.balanceOf(user1)).toNumber()).to.eql(100);
//         expect((await fee.balanceOf(user1)).toNumber()).to.eql(409);
//         expect((await stake.stakes(user1)).toNumber()).to.eql(0);
//         expect((await stake.levBlocks(user1)).toNumber()).to.eql(0);
//         expect((await stake.totalLevs()).toNumber()).to.eql(15);
//     });
// });
//
//
// contract('Stake setup', (accounts) => {
//     let token, stake, fee;
//
//     before(async function () {
//         [stake, fee, token] = await setup(accounts);
//         await stake.setLevToken(token.address);
//         await forceMine(new BN(200));
//         await stakeit(10, user1, stake, token);
//         await stakeit(15, user2, stake, token);
//         await forceMine(new BN(300));
//         await sendFeesToSelf(stake.address, await stake.owners(0), fee, 1000);
//         await web3.eth.sendTransaction({from: user1, to: stake.address, value: 10000000});
//     });
//
//     it('should fail to reset if there are stakes left', async function () {
//         try {
//             await stake.startNewStakingInterval(1000, 2000, {from: operator(accounts)});
//             expect().fail("should not pass");
//         } catch (e) {
//             expect(e.message).to.not.eql("should not pass")
//         }
//     });
//
//     it('should reset after all the stakes have been returned', async function () {
//         await stake.updateFeeForCurrentStakingInterval({from: operator(accounts)});
//         await stake.redeemLevAndFeeToStakers([user1, user2], {from: operator(accounts)});
//         await stake.startNewStakingInterval(1000, 2000, {from: operator(accounts)});
//         expect((await stake.startBlock()).toNumber()).to.eql(1000);
//         expect((await stake.endBlock()).toNumber()).to.eql(2000);
//         expect((await stake.totalLevBlocks()).toNumber()).to.eql(0);
//         expect((await stake.feeForTheStakingInterval()).toNumber()).to.eql(0);
//         expect((await stake.feeCalculated())).to.eql(false);
//     })
// });


// contract('Stake <Blockchain Labs>, @tikonoff', (accounts) => {
//     let stake;
//
//     describe('onlyOperator',function () {
//         it.only('can update fee', async function () {
//             token = await HumanStandardToken.new(100000, "LEV", 0, "LEV");
//             stake = await Stake.new([accounts[0], accounts[1]], accounts[6], accounts[2], 10000 , token.address);
//             await stake.test({from: accounts[6]});
//             try {
//                 await stake.redeemLevAndFeeToStakers([accounts[1]], {from: accounts[2]});
//                 assert.fail('should have thrown before');
//             } catch(error) {
//                 assertRevert(error);
//             }
//             await stake.redeemLevAndFeeToStakers([accounts[1]], {from: accounts[6]});
//         });
//     });
// });


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

async function sendFeesToSelf(_to, _owner, _fee, _qty) {
    let minter = await _fee.minter();
    await _fee.setMinter(_owner, {from: _owner});
    await _fee.sendTokens(_to, _qty, {from: _owner});
    await _fee.setMinter(minter, {from: _owner});
}

async function setup(accounts) {
    let stake = await Stake.deployed();
    let fee = await Fee.deployed();
    await fee.setMinter(stake.address);
    await stake.setFeeToken(fee.address);
    let token = await HumanStandardToken.new(100000, "LEV", 0, "LEV");
    // token = await HumanStandardToken.at(token.address);
    await token.transfer(user1, 100);
    await token.transfer(user2, 200);
    await stake.startNewStakingInterval(100, 300, {from: operator(accounts)});
    await stake.setLevToken(token.address);
    await forceMine(new BN(200));
    return [stake, fee, token];
}

