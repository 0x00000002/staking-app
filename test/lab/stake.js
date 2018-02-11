const HumanStandardToken = artifacts.require("./HumanStandardToken.sol");
const Stake = artifacts.require("./Stake.sol");
const assertRevert = require('./../helpers/assertRevert');

contract('Stake <Blockchain Labs>, @tikonoff', (accounts) => {
    let stake;

    describe('onlyOperator',function () {
        it('can update fee', async function () {
            token = await HumanStandardToken.new(100000, "LEV", 0, "LEV");
            stake = await Stake.new([accounts[0], accounts[1]], accounts[6], accounts[2], 10000 , token.address);
            await stake.test({from: accounts[6]});
            try {
                await stake.redeemLevAndFeeToStakers([accounts[1]], {from: accounts[2]});
                assert.fail('should have thrown before');
            } catch(error) {
                assertRevert(error);
            }
        });
    });
});

