const HumanStandardToken = artifacts.require("./HumanStandardToken.sol");
const Stake = artifacts.require("Stake");
const Fee = artifacts.require("Fee");
const assertRevert = require('./../helpers/assertRevert');

contract('<Blockchain Labs> Stake.sol, modifiers', ([owner, operator, beneficiary, user1, user2, minter]) => {
    let token, stake;

    beforeEach(async function () {
        token = await HumanStandardToken.new(100000, "LEV", 0, "LEV");
        await token.transfer(user1, 100);
        await token.transfer(user2, 200);
        stake = await Stake.new([owner], operator, beneficiary, 10, token.address, {from: owner});
    });

    it('isStaking', async function () {
        try {
            await stake.checkOperator({from: operator});
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
    });

    it('isDoneStaking', async function () {
        try {
            await stake.revertFeeCalculatedFlag(false, {from: owner});
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
    });
});

