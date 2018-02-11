const HumanStandardToken = artifacts.require("./HumanStandardToken.sol");

contract('Token <Blockchain Labs>, @tikonoff', ([owner, user1, user2]) => {
    let token, value, user, amount, data;

    before(async function () {
        user = user1;
        amount = 10;
        data = "";
        token = await HumanStandardToken.new(100000, "LEV", 0, "LEV");
    });

    describe('HumanStandardToken', function () {
        it('can approve and call', async function () {
            assert.isOk(value = await token.approveAndCall(user, amount, data));
            assert.equal(value.logs[0].event, 'Approval');
            assert.equal(value.logs[0].args._owner, owner);
            assert.equal(value.logs[0].args._spender, user);
            assert.equal(value.logs[0].args._value, amount);
            value = await token.allowance(owner, user);
            assert.equal(value, amount);
        });
    });
});


