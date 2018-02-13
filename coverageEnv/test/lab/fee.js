const Fee = artifacts.require('./Fee.sol');
const assertFail = require('./../helpers/assertFail');
const assertRevert = require('./../helpers/assertRevert');

contract('FEE tokens <Blockchain Labs>, @tikonoff', (accounts) => {
    let fee;
    let minter = accounts[4];
    let user1 = accounts[1];
    let user2 = accounts[2];
    let user3 = accounts[3];

    before(async function () {
        fee = await Fee.new([user1],'FEE',0,'FEE', { from: accounts[0] });
        await fee.setMinter(minter, {from: user1 });
    });

    it('minter should be able to send fee', async function () {
        await fee.sendTokens(user1, 1000, {from: minter});
        await fee.sendTokens(user2, 1100, {from: minter});
        assert.equal((await fee.balanceOf(user1)).toNumber(), 1000);
        assert.equal((await fee.balanceOf(user2)).toNumber(), 1100);
        assert.equal((await fee.feeInCirculation()).toNumber(), 2100)
    });

    it('sending should fail if user is not a minter', async function () {
        assertFail(async () => { await fee.sendTokens(user1, 1000); });
        assertFail(async () => { await fee.sendTokens(user1, 1000, {from: user3}); });
    });

    it('owner should be able to burn tokens', async function () {
        await fee.burnTokens(100, {from: user1});
        await fee.burnTokens(500, {from: user2});
        assert.equal((await fee.balanceOf(user1)).toNumber(), 900);
        assert.equal((await fee.balanceOf(user2)).toNumber(), 600);
        assert.equal((await fee.feeInCirculation()).toNumber(), 1500)
    });

    it('owners should NOT be able to burn tokens which they do not have', async function () {
        try {
            await fee.burnTokens(1000, {from: user1});
            await fee.burnTokens(5000, {from: user2});
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
        assert.equal((await fee.balanceOf(user1)).toNumber(), 900);
        assert.equal((await fee.balanceOf(user2)).toNumber(), 600);
        assert.equal((await fee.feeInCirculation()).toNumber(), 1500)
    });
});
