const Validating = artifacts.require('./ValidatingMock.sol');
const assertRevert = require('./../helpers/assertRevert');

contract('Validating <Blockchain Labs>, @tikonoff', (accounts) => {
    let fee;

    it('Check if params are empty, zero address or zero', async function () {
        val = await Validating.new();
        try {
            await val.checkEmptyValidZero("", 0x123, 1);
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
        try {
            await val.checkEmptyValidZero("asdf", 0x0, 1);
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
        try {
            await val.checkEmptyValidZero("asdf", 0x123, 0);
            assert.fail('should have thrown before');
        } catch(error) {
            assertRevert(error);
        }
        await val.checkEmptyValidZero("asdf", 0x123, 123);
    });
});
