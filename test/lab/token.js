const HumanStandardToken = artifacts.require("./HumanStandardToken.sol");
const Approval = artifacts.require("Approval.sol");
const assertRevert  = require('../helpers/assertRevert');

contract('Token <Blockchain Labs>, @tikonoff', ([owner, user1, user2]) => {
    let token, value, user, amount, data, approval;

    before(async function () {
        user = user1;
        amount = 10;
        data = "";
        token = await HumanStandardToken.new(100000, "LEV", 0, "LEV");
        approval = await Approval.new();
    });

    describe('HumanStandardToken', function () {
        it.only('can approve and call', async function () {
            assert.isOk(value = await token.approveAndCall(user, amount, data));
            assert.equal(value.logs[0].event, 'Approval');
            assert.equal(value.logs[0].args._owner, owner);
            assert.equal(value.logs[0].args._spender, user);
            assert.equal(value.logs[0].args._value, amount);
            value = await token.allowance(owner, user);
            assert.equal(value, amount);
        });

        it.only('receiveApproval should revert', async function () {
            try {
                await token.approveAndCall(approval.address, 1, "asdf");
                assert.fail('should have thrown before');
            } catch(error) {
                assertRevert(error);
            }
        });
    });
});


