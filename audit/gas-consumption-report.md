# Gas consumption report
performed by Alex Tikonoff, March 15, 2018

```
  Contract: owner manipulations
    ✓ should have all the owners
    ✓ non-owner should not be able to add new owner (23500 gas)
    ✓ any owner can add a new owner (71394 gas)

  Contract: owner manipulations - removal
    ✓ non-owner should not be able to remove another owner (23305 gas)
    ✓ remove an owner (2360267 gas)
    ✓ any owner can remove a owner (92778 gas)
    ✓ can not remove all the owners (65894 gas)

  Contract: only owner
    ✓ any owner can execute only owner method (101928 gas)
    ✓ should fail when non-owner executes only owner function (23654 gas)

  Contract: Set operator
    ✓ owner can set operator (2379752 gas)
    ✓ only owner can set operator (2379752 gas)
    
  Contract: StandardToken, <Blockchain Labs>, @tikonoff
    total supply
      ✓ returns the total amount of tokens
    balanceOf
      when the requested account has no tokens
        ✓ returns zero
      when the requested account has some tokens
        ✓ returns the total amount of tokens
    transfer
      when the recipient is not the zero address
        when the sender has enough balance
          ✓ transfers the requested amount (36031 gas)
          ✓ emits a transfer event (36031 gas)
          ✓ transfer more than balance should fail (23600 gas)
      when the recipient is the zero address
        ✓ reverts
    approve
      when the spender is not the zero address
        when the sender has enough balance
          ✓ emits an approval event (45170 gas)
          when there was no approved amount before
            ✓ approves the requested amount (45170 gas)
          when the spender had an approved amount
            ✓ approves the requested amount and replaces the previous one (30170 gas)
        when the sender does not have enough balance
          ✓ emits an approval event (45170 gas)
          when there was no approved amount before
            ✓ approves the requested amount (45170 gas)
          when the spender had an approved amount
            ✓ approves the requested amount and replaces the previous one (30170 gas)
      when the spender is the zero address
        ✓ approves the requested amount (43890 gas)
        ✓ emits an approval event (43890 gas)
    transfer from
      when the recipient is the zero address
        ✓ reverts
      when the recipient is not the zero address
        when the spender does not have enough approved balance
          when the owner has enough balance
            ✓ reverts
          when the owner does not have enough balance
            ✓ reverts
        when the spender has enough approved balance
          when the owner has enough balance
            ✓ transfers the requested amount (29128 gas)
            ✓ decreases the spender allowance (29128 gas)
            ✓ emits a transfer event (29128 gas)
          when the owner does not have enough balance
            ✓ reverts

  Contract: FEE tokens <Blockchain Labs>, @tikonoff
    ✓ minter should be able to send fee (117306 gas)
    ✓ sending should fail if user is not a minter
    ✓ owner should be able to burn tokens (69014 gas)
    ✓ owners should NOT be able to burn tokens which they do not have (22306 gas)
    ✓ transfer more than balance should fail (23908 gas)

  Contract: Migrations <Blockchain Labs>, @tikonoff
    ✓ upgrade() (67321 gas)

  Contract: SafeMath <Blockchain Labs>, @tikonoff
    ✓ multiplies correctly (42145 gas)
    ✓ divides correctly (27168 gas)
    ✓ adds correctly (27153 gas)
    ✓ subtracts correctly (27096 gas)
    ✓ should throw an error if subtraction result would be negative (4500000 gas)
    ✓ should throw an error on addition overflow (23055 gas)
    ✓ should throw an error on multiplication overflow (23055 gas)

  Contract: <Blockchain Labs> Stake.sol, common functions
    ✓ user should be able to put tokens for stake (539722 gas)
    ✓ Only operator can do some things
    ✓ check version
    ✓ set wallet (53073 gas)
    ✓ Fallback functions accept money (57159 gas)
    ✓ Set Fee token (43580 gas)
    ✓ Operator can revert FEE_CALCULATED flag (27829 gas)
    ✓ Operator can instigate redeeming for stakers (25710 gas)
feeCalculated? false
    ✓ Operator can run FEE calculation (2504582 gas)

  Contract: <Blockchain Labs> Stake.sol, staking period is over
    Redeem LEVs and FEEs
      ✓ Operator can NOT run FEE calculation if feeCalculated is false (51103 gas)
      ✓ Staker can redeem his tokens (217514 gas)
      ✓ Redeem should not be possible if stake was =< 0 (51163 gas)
      ✓ Redeem should not be possible if totalLevBlocks =< 0 (91017 gas)

  Contract: <Blockchain Labs> Stake.sol, modifiers
    ✓ isStaking
    ✓ isDoneStaking (27994 gas)

  Contract: Token <Blockchain Labs>, @tikonoff
    HumanStandardToken
      ✓ can approve and call (47141 gas)
      ✓ receiveApproval should revert (47973 gas)

  Contract: Validating <Blockchain Labs>, @tikonoff
    ✓ Check if params are empty, zero address or zero (245810 gas)

·-------------------------------------------------------------------------------------------------|----------------------------·
│                                               Gas                                               ·  Block limit: 6721975 gas  │
······························································|···································|·····························
│  Methods                                                    ·            21 gwei/gas            ·      1242.48 nzd/eth       │
·······················|······································|···········|···········|···········|··············|··············
│  Contract            ·  Method                              ·  Min      ·  Max      ·  Avg      ·  # calls     ·  nzd (avg)  │
·······················|······································|···········|···········|···········|··············|··············
│  Approval            ·  receiveApproval                     ·        -  ·        -  ·        -  ·           0  ·          -  │
·······················|······································|···········|···········|···········|··············|··············
│  Fee                 ·  burnTokens                          ·    34475  ·    34539  ·    34507  ·           2  ·       0.90  │
·······················|······································|···········|···········|···········|··············|··············
│  Fee                 ·  sendTokens                          ·    51153  ·    66153  ·    61132  ·           3  ·       1.60  │
·······················|······································|···········|···········|···········|··············|··············
│  Fee                 ·  setMinter                           ·    28976  ·    43976  ·    36476  ·           4  ·       0.95  │
·······················|······································|···········|···········|···········|··············|··············
│  HumanStandardToken  ·  approveAndCall                      ·        -  ·        -  ·    47141  ·           1  ·       1.23  │
·······················|······································|···········|···········|···········|··············|··············
│  SafeMathMock        ·  add                                 ·        -  ·        -  ·    27153  ·           1  ·       0.71  │
·······················|······································|···········|···········|···········|··············|··············
│  SafeMathMock        ·  divide                              ·        -  ·        -  ·    27168  ·           1  ·       0.71  │
·······················|······································|···········|···········|···········|··············|··············
│  SafeMathMock        ·  multiply                            ·        -  ·        -  ·    42145  ·           1  ·       1.10  │
·······················|······································|···········|···········|···········|··············|··············
│  SafeMathMock        ·  subtract                            ·        -  ·        -  ·    27096  ·           1  ·       0.71  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  addOwner                            ·        -  ·        -  ·    71394  ·           2  ·       1.86  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  redeemLevAndFeeByStaker             ·        -  ·        -  ·    28667  ·           1  ·       0.75  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  redeemLevAndFeeToStakers            ·        -  ·        -  ·        -  ·           0  ·          -  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  removeOwner                         ·    20968  ·    24442  ·    22045  ·           4  ·       0.58  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  revertFeeCalculatedFlag             ·    27829  ·    27994  ·    27882  ·           8  ·       0.73  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  setFeeToken                         ·        -  ·        -  ·    43580  ·           1  ·       1.14  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  setLevToken                         ·        -  ·        -  ·    28558  ·           1  ·       0.75  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  setOperator                         ·        -  ·        -  ·    43927  ·           2  ·       1.15  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  setWallet                           ·        -  ·        -  ·    29174  ·           1  ·       0.76  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  stakeTokens                         ·    85762  ·   115762  ·   105762  ·           3  ·       2.76  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  startNewStakingInterval             ·        -  ·        -  ·    79711  ·           1  ·       2.08  │
·······················|······································|···········|···········|···········|··············|··············
│  Stake               ·  updateFeeForCurrentStakingInterval  ·        -  ·        -  ·        -  ·           0  ·          -  │
·······················|······································|···········|···········|···········|··············|··············
│  StakeMock           ·  setFeeForTheStakingInterval         ·        -  ·        -  ·    41546  ·           1  ·       1.08  │
·······················|······································|···········|···········|···········|··············|··············
│  StakeMock           ·  setTotalLevBlocksToZero             ·    13493  ·    26986  ·    20240  ·           2  ·       0.53  │
·······················|······································|···········|···········|···········|··············|··············
│  StakeMock           ·  setTotalLevsToMany                  ·        -  ·        -  ·    27118  ·           1  ·       0.71  │
·······················|······································|···········|···········|···········|··············|··············
│  StakeMock           ·  setTotalLevsToZero                  ·        -  ·        -  ·    13427  ·           1  ·       0.35  │
·······················|······································|···········|···········|···········|··············|··············
│  Token               ·  approve                             ·    30170  ·    45170  ·    45192  ·           8  ·       1.18  │
·······················|······································|···········|···········|···········|··············|··············
│  Token               ·  transfer                            ·    36119  ·    51183  ·    43651  ·           2  ·       1.14  │
·······················|······································|···········|···········|···········|··············|··············
│  Token               ·  transferFrom                        ·        -  ·        -  ·        -  ·           0  ·          -  │
·······················|······································|···········|···········|···········|··············|··············
│  ValidatingMock      ·  checkEmptyValidZero                 ·        -  ·        -  ·    23077  ·           1  ·       0.60  │
·······················|······································|···········|···········|···········|··············|··············
│  Deployments                                                ·                                   ·  % of limit  ·             │
······························································|···········|···········|···········|··············|··············
│  Approval                                                   ·        -  ·        -  ·   127020  ·       1.9 %  ·       3.31  │
······························································|···········|···········|···········|··············|··············
│  Fee                                                        ·  2233605  ·  2335825  ·  2323048  ·      34.6 %  ·      60.61  │
······························································|···········|···········|···········|··············|··············
│  HumanStandardToken                                         ·        -  ·        -  ·  1243730  ·      18.5 %  ·      32.45  │
······························································|···········|···········|···········|··············|··············
│  SafeMathMock                                               ·        -  ·        -  ·   209976  ·       3.1 %  ·       5.48  │
······························································|···········|···········|···········|··············|··············
│  Stake                                                      ·        -  ·        -  ·  2839247  ·      42.2 %  ·      74.08  │
······························································|···········|···········|···········|··············|··············
│  StakeMock                                                  ·        -  ·        -  ·  2846396  ·      42.3 %  ·      74.27  │
······························································|···········|···········|···········|··············|··············
│  Token                                                      ·        -  ·        -  ·   269607  ·         4 %  ·       7.03  │
······························································|···········|···········|···········|··············|··············
│  ValidatingMock                                             ·        -  ·        -  ·   154538  ·       2.3 %  ·       4.03  │
·-------------------------------------------------------------|-----------|-----------|-----------|--------------|-------------·

```
