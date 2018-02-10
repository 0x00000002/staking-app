const Migrations = artifacts.require("Migrations");

let lastCompleted, owner;

contract("Migrations", function(accounts) {

    const addressMothership = accounts[0];
    const addressCommunity = accounts[1];

    beforeEach(async () => {
        migrations = await Migrations.new({ from: addressMothership });
    });

    it("upgrade()", async () => {
        owner = await migrations.owner();
        assert.equal(owner, addressMothership);

        await migrations.setCompleted(6);
        lastCompleted = await migrations.last_completed_migration();
        assert.equal(6, lastCompleted.toNumber());

        await migrations.upgrade(migrations.address);    // TODO: how to access child contracts?  Migrations.sol

    });

});

