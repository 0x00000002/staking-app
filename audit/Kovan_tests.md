### CLIENT Kovan Network Deployment and Function Testing Passing


#### Successfully deploy Fee contract
 - [x] [0x320709](https://kovan.etherscan.io/tx/0x320709273ec3aae9c2f2895add02ad7c9f16fb2dbe87d9f8b0c656e3a9be3b91)

#### Successfully  deploy HumanStandardToken contract
 - [x] [0xcf0ce1](https://kovan.etherscan.io/tx/0xcf0ce180412f0d784ea001a8698abef98009d2abfb740488a8c6fc7c0bc59487)

#### Successfully deploy Stake contract
 - [x] [0x604c8f](https://kovan.etherscan.io/tx/0x604c8fbe7b29f4a39f5c4890f6ee24a99103ece2b01d2ef30a3765f28371ea1a)

#### approve Fee Owner allows a spender to withdraw from their account
 - [x] [0x2cc13d](https://kovan.etherscan.io/tx/0x2cc13de037f5ae1ab19d8433352c6dd3ca64a354e0aa500bff70b4025588110a)

#### approveAndCall Fee Owner approves and executes function in one call
 - [x] [0x4d284b](https://kovan.etherscan.io/tx/0x4d284bf9fc6c543f3c9f249b5298e63dcc040f9de845b4a57bde23e38ca8d58d)

#### addOwner Stake Owner can add a new owner
 - [x] [0x585065](https://kovan.etherscan.io/tx/0x5850657bf7e0ecdc3a5096c4a4f259512d7146e0ab4bee711ed071de09a90077)

#### removeOwner Owner can remove an owner
 - [x] [0x9b702d](https://kovan.etherscan.io/tx/0x9b702d788da45842b1198c997b6e689211dc0ed378bd5f5f16dbfd8b0614e599)

#### revertFeeCalculatedFlag Owner can set feeCalculated to true/false
 - [x] [0x3e98fc](https://kovan.etherscan.io/tx/0x3e98fc462a8e07efdaac345cb085efdda5d54df658873bb788d625965731dc66)

#### setFeeToken Owner can set the Fee token's address
 - [x] [0x674e5d](https://kovan.etherscan.io/tx/0x674e5d8942a965b4f95e2e66a6b38ae0b6a0099515a164e710fd37310f2b6401)

#### setLevToken Owner can set the Lev token's address
 - [x] [0x97502c](https://kovan.etherscan.io/tx/0x97502cc59b8892bdf8c7219fdb2d1834d2cee3d224ff4d790fbabb02ec8fec97)

#### setOperator Owner can set new Operator
 - [x] [0xb0df4c](https://kovan.etherscan.io/tx/0xb0df4cd771c97d3da421114066fa634a25b9be03575f7c3431aab6155959d813)

#### setWallet Owner can set the wallet address
 - [x] [0x6b9266](https://kovan.etherscan.io/tx/0x6b92668289e4e3faf476d0d7ef92ecd6974a803ff185dedb43ba74d9407fa0d4)

### CLIENT Kovan Function Testing Failing


#### receiveApproval This function can be called with any parameters
  - [x] [0x8a2801](https://kovan.etherscan.io/tx/0x8a280157f45614e7a2e3fa2daae1ed7c2932a69bb20d49acf27b066547a69e75)

#### approveAndCall Cannot be called by account other than Owner
  - [x] [0x4d284b](https://kovan.etherscan.io/tx/0x4d284bf9fc6c543f3c9f249b5298e63dcc040f9de845b4a57bde23e38ca8d58d)

#### addOwner Cannot be called by account other than Owner
  - [x] [0x2b1892](https://kovan.etherscan.io/tx/0x2b1892c0748bf4c24b84e08d6da926565697d2a865456743e43511038926d53b)

#### redeemLevAndFeeToStakers Cannot be called by account other than Owner
  - [x] [0xc3013f9](https://kovan.etherscan.io/tx/0xc3013f9d0c55dbb0a64e9068c87b9e2ce6f8c9b1c25f04463fb3e6d55ddcebb8 )

#### removeOwner Cannot be called by account other than Owner
  - [x] [0xb2ef83](https://kovan.etherscan.io/tx/0xb2ef83a6441d813ebb9f172aff9be892c7ec3e2860a3575843e5f21dd2c10a8c )

#### revertFeeCalculatedFlag Cannot be called by account other than Owner
  - [x] [0xec7ab8](https://kovan.etherscan.io/tx/0xec7ab881198d35a03b083d4da71eaecae275e51aa62541de53be04e47caa02f6 )

#### setFeeToken Cannot be called by account other than Owner
  - [x] [0xd2c9ed](https://kovan.etherscan.io/tx/0xd2c9ed80117a34bc417895db8e724e015f900be171400c7efeaa3c0f4e7929ba )

#### setLevToken Cannot be called by account other than Owner
  - [x] [0xc8bbec](https://kovan.etherscan.io/tx/0xc8bbec4c6971e2a32581065b354fbec5d1dc7deeb6c69049e290b80802b2fbb7)

#### setOperator Cannot be called by account other than Owner
  - [x] [0x7ecb12](https://kovan.etherscan.io/tx/0x7ecb12f81c48e12be3e2bd2fc7c7dd18d55a0d61c41363936c7059daa66bec1e )

#### setOperator Try to set new operator without address
  - [x] [0x3ff1ac](https://kovan.etherscan.io/tx/0x3ff1ac0092443dd33fe046d465eb05ed80e5174c6a82e2b164c6fce3d04ee2df )

#### setWallet Cannot be called by account other than Owner
  - [x] [0x11c49b](https://kovan.etherscan.io/tx/0x11c49bb91dc7482ce34c6d0a374e251190e72e31e7bc47cfb790c5fab1a24866)

#### startNewStakingInterval Cannot be called by account other than Owner
   - [x] [0x811ab6](https://kovan.etherscan.io/tx0x811ab6b0ebca84e1e51246e302bdffd0be308e439f8b372ee9516b9017496339)

#### startNewStakingInterval Can be called with a startBlock later than endBlock
   - [x] [0x2945df](https://kovan.etherscan.io/tx0x2945dfcd664b7cc6ee64c8baaf72ea9b2956eec5fb078f72d5c268d6071da154 )


### CLIENT Leverj staking Ropsten


#### Purchased 10000 Lev for 1 rtETH
    - [x] [0x4721a8](https://ropsten.etherscan.io/tx/0x4721a8c1b6affedeac42683036cc83fe71abadf067256b854d47f35520e77efb)

#### 5000 Lev approved
    - [x] [0x1a25a9](https://ropsten.etherscan.io/tx/0x1a25a984e0ebc2cdae65bbccf8f67ebab6258342231b0f1a3f11a0f8483d2224)

#### 5000 Lev staked
    - [x] [0x249773](https://ropsten.etherscan.io/tx/0x249773e6356e99648f85bf26afaac692e4090055e0cba626ef6d73bce94b88c4)

#### Received 500 Fee and 5000 staked Lev returned to balance
    - [x] [0xf21c62](https://ropsten.etherscan.io/token/0xf21c62cae1de18ac3235e05889bf9a46129705cdf160f25559af961d06a3669d)
