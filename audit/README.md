# LEV staking Smart Contract Audit Report
<br>

## Preamble
This audit report was undertaken by <b>BlockchainLabs.nz</b> for the purpose of providing feedback to <b>Leverj Limited</b>. <br>It has subsequently been shared publicly without any express or implied warranty.

Solidity contracts were sourced from the public Github repo [github.com/leverj/staking](https://github.com/leverj/staking) prior to commit [e8716e4a11881fad181b5330206d8b0c27a58510](https://github.com/leverj/staking/commit/e8716e4a11881fad181b5330206d8b0c27a58510) - we would encourage all community members and token holders to make their own assessment of the contracts.

<br>

## Scope
All Solidity code contained in [Staking/Contract](https://github.com/leverj/staking/tree/master/contracts) was considered in scope as a basis for static and dynamic analysis. The scope is outlined in the [work paper](https://github.com/leverj/staking/audit/Work_paper.MD).

<br>

## Focus Areas
The audit report is focused on the following key areas - though this is not an exhaustive list.

### Correctness
- No correctness defects uncovered during static analysis?
- No implemented contract violations uncovered during execution?
- No other generic incorrect behaviour detected during execution?
- Adherence to adopted standards such as ERC20?

### Testability
- Test coverage across all functions and events?
- Test cases for both expected behaviour and failure modes?
- Settings for easy testing of a range of parameters?
- No reliance on nested callback functions or console logs?
- Avoidance of test scenarios calling other test scenarios?

### Security
- No presence of known security weaknesses?
- No funds at risk of malicious attempts to withdraw/transfer?
- No funds at risk of control fraud?
- Prevention of Integer Overflow or Underflow?

### Best Practice
- Explicit labeling for the visibility of functions and state variables?
- Proper management of gas limits and nested execution?
- Latest version of the Solidity compiler?

<br>


## Classification
### Defect Severity
- Minor - A defect that does not have a material impact on the contract execution and is likely to be subjective.
- Moderate - A defect that could impact the desired outcome of the contract execution in a specific scenario.
- Major - A defect that impacts the desired outcome of the contract execution or introduces a weakness that may be exploited.
- Critical - A defect that presents a significant security vulnerability or failure of the contract across a range of scenarios.

<br>


## Findings

List of all issues: [Github](https://github.com/tikonoff/staking-app/issues)

### Minor

- **[Explicit UINT256 vs UINT](https://github.com/tikonoff/staking-app/issues/2)** - `Best Practice` - Lines: [35](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L35)
- **[Differentiate functions and events](https://github.com/tikonoff/staking-app/issues/3)** - `Best Practice` - Lines: [24](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L24)
- **[Expected ' { ' after for statement](https://github.com/tikonoff/staking-app/issues/7)** - `Best Practice` - Lines: [153](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L153)
- **[Lock pragma to specific compiler version](https://github.com/tikonoff/staking-app/issues/8)** - Lines: [11](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L11) etc
- **[Code layout problem](https://github.com/tikonoff/staking-app/issues/12)** - `Best practice` - Line: [75](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L75)
- **[Suggest add event log in fallback function](https://github.com/tikonoff/staking-app/issues/10)** - Lines: [70](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L70)
- **[startNewStakingInterval can be called with a startBlock later than endBlock](https://github.com/tikonoff/staking-app/issues/13)** - Lines: [181](https://github.com/tikonoff/staking-app/blob/291d5a8c8bd61073d732ef0d31bf07a13ec3cd4b/contracts/Stake.sol#L181)
- **[No fallback function in Fee.sol](https://github.com/tikonoff/staking-app/issues/17)** - `Best practice`
- **[Formulas of the FEE calculations in the code and whitepaper are contradicting each other](https://github.com/tikonoff/staking-app/issues/18)** `Readability` Lines: [140]



### Moderate
- **[Wrong syntex when call external contract's function using keccak keyword](https://github.com/tikonoff/staking-app/issues/6)** `Correctness` - Lines: [54](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/HumanStandardToken.sol#L54)
- **[Favor pull over push](https://github.com/tikonoff/staking-app/issues/9)** - `Best practice` - Lines: [152](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L152)
 
### Major
- **[Different solidity versions have been used in different contracts](https://github.com/tikonoff/staking-app/issues/1)** - Lines: [11](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L11), [1](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/SafeMath.sol#L1)

### Critical
- **[Single owner's security authority level is too high](https://github.com/tikonoff/staking-app/issues/14)** - `Security`
- **[Check overflow](https://github.com/tikonoff/staking-app/issues/16)** - `Best practice` `Correctness` Lines: [19](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/StandardToken.sol#L19)
<br>

## Dynamic Analysis
[![Coverage Status](https://coveralls.io/repos/github/gabriel-canaan/gifto/badge.svg?branch=gabedojo)](https://coveralls.io/github/gabriel-canaan/gifto?branch=gabedojo)

```
-------------------------|----------|----------|----------|----------|----------------|
File                     |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------------------|----------|----------|----------|----------|----------------|
 contracts/              |    16.77 |    13.24 |    23.21 |    17.61 |                |
  Gifto.sol              |    15.23 |    12.12 |    19.23 |    16.37 |... 713,714,715 |
  Migration.sol          |       75 |       50 |       75 |       60 |          15,16 |
 contracts/helpers/      |      100 |      100 |        0 |        0 |                |
  MockMultiSigWallet.sol |      100 |      100 |        0 |        0 |             11 |
-------------------------|----------|----------|----------|----------|----------------|
All files                |    16.77 |    13.24 |    22.41 |    17.51 |                |
-------------------------|----------|----------|----------|----------|----------------|
```

Build: [coveralls.io](https://coveralls.io/github/gabriel-canaan/gifto)

<br>

## Gas Consumption

Upon finalization of the contracts to be used by Leverj, the contracts were assessed on the gas usage of each function to ensure there aren't any unforeseen issues with exceeding the block size GasLimit. A detailed report can be found in [./gas_consumption_report.md](https://github.com/tikonoff/staking-app/blob/master/audit/gas-consumption-report.md).

<br>

## Functional tests

Functions were tested according the business scenario and available here [./kovan-tests.md](https://github.com/tikonoff/staking-app/blob/master/audit/Kovan_tests.md)

<br>


## Conclusion
Of the issues we have raised a few of them are critical and major. There are also some moderate and minor issues that should be resolved. 

This de-centralised app has a middle level risk of ethereum being hacked or stolen. Be cautious about the contract owner selection and management. It is strongly recommended to resolve all issues before to proceed with the staking period. 

<br>