const Migrations = artifacts.require("Migrations");

let lastCompleted, owner;

contract("Migrations", function([deployer]) {

    beforeEach(async () => {
        migrations = await Migrations.new({ from: deployer });
    });

    it("upgrade()", async () => {
        owner = await migrations.owner();
        assert.equal(owner, deployer);
        await migrations.setCompleted(6);
        lastCompleted = await migrations.last_completed_migration();
        assert.equal(6, lastCompleted.toNumber());
        await migrations.upgrade(migrations.address);
    });

});

