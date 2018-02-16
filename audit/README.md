# LEV staking Smart Contract Audit Report
<br>

## Preamble
This audit report was undertaken by <b>BlockchainLabs.nz</b> for the purpose of providing feedback to <b>Leverj</b>. <br>It has subsequently been shared publicly without any express or implied warranty.

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
- **[Unable to test this function due to inaccessibility of the external function](https://github.com/tikonoff/staking-app/issues/5)** `Correctness` - Lines: [54](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/HumanStandardToken.sol#L54)
- **[Expected ' { ' after for statement](https://github.com/tikonoff/staking-app/issues/7)** - `Best Practice` - Lines: [153](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L153)
- **[Lock pragma to specific compiler version](https://github.com/tikonoff/staking-app/issues/8)** - Lines: [11](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L11) etc
- **[Code layout problem](https://github.com/tikonoff/staking-app/issues/12)** - `Best practice` - Line: [75](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L75)
- **[Suggest add event log in fallback function](https://github.com/tikonoff/staking-app/issues/10)** - Lines: [70](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L70)
- **[startNewStakingInterval can be called with a startBlock later than endBlock](https://github.com/tikonoff/staking-app/issues/13)** - Lines: [181](https://github.com/tikonoff/staking-app/blob/291d5a8c8bd61073d732ef0d31bf07a13ec3cd4b/contracts/Stake.sol#L181)
- **[No fallback function in Fee.sol](https://github.com/tikonoff/staking-app/issues/17)** - `Best practice`
- **[Formulas of the FEE calculations in the code and whitepaper are contradicting each other](https://github.com/tikonoff/staking-app/issues/18)** `Readability` Lines: [140]

### Moderate
- **[Favor pull over push](https://github.com/tikonoff/staking-app/issues/9)** - `Best practice` - Lines: [152](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L152)
 
### Major
- **[Different solidity versions have been used in different contracts](https://github.com/tikonoff/staking-app/issues/1)** - Lines: [11](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/Stake.sol#L11), [1](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/SafeMath.sol#L1)

### Critical
- **[Single owner has too much power](https://github.com/tikonoff/staking-app/issues/14)** - `Security`
- **[Check overflow](https://github.com/tikonoff/staking-app/issues/16)** - `Best practice` `Correctness` Lines: [19](https://github.com/tikonoff/staking-app/blob/8306bb8deebe0f554e99bf4e525ea4a3f5672397/contracts/StandardToken.sol#L19)
<br>

## Dynamic Analysis
[![Coverage Status](https://coveralls.io/repos/github/tikonoff/staking-app/badge.svg?branch=alex)](https://coveralls.io/github/tikonoff/staking-app?branch=alex)


<table class=“coverage-summary”>
<thead>
<tr>
   <th data-col=“file” data-fmt=“html” data-html=“true” class=“file”>File</th>
   <th data-col=“statements” data-type=“number” data-fmt=“pct” class=“pct”>Statements</th>
   <th data-col=“statements_raw” data-type=“number” data-fmt=“html” class=“abs”></th>
   <th data-col=“branches” data-type=“number” data-fmt=“pct” class=“pct”>Branches</th>
   <th data-col=“branches_raw” data-type=“number” data-fmt=“html” class=“abs”></th>
   <th data-col=“functions” data-type=“number” data-fmt=“pct” class=“pct”>Functions</th>
   <th data-col=“functions_raw” data-type=“number” data-fmt=“html” class=“abs”></th>
   <th data-col=“lines” data-type=“number” data-fmt=“pct” class=“pct”>Lines</th>
   <th data-col=“lines_raw” data-type=“number” data-fmt=“html” class=“abs”></th>
</tr>
</thead>
<tbody><tr>
  <td class=“file high” data-value=“Fee.sol”>Fee.sol</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“13” class=“abs high”>13/13</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“4” class=“abs high”>4/4</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“5” class=“abs high”>5/5</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“14” class=“abs high”>14/14</td>
  </tr>

<tr>
  <td class=“file high” data-value=“HumanStandardToken.sol”>HumanStandardToken.sol</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“9" class=“abs high”>9/9</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“2" class=“abs high”>2/2</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“2" class=“abs high”>2/2</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“9" class=“abs high”>9/9</td>
  </tr>

<tr>
  <td class=“file high” data-value=“Owned.sol”>Owned.sol</td>
  <td data-value=“95.45” class=“pct high”>95.45%</td>
  <td data-value=“22” class=“abs high”>21/22</td>
  <td data-value=“75” class=“pct medium”>75%</td>
  <td data-value=“16” class=“abs medium”>12/16</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“7” class=“abs high”>7/7</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“25” class=“abs high”>25/25</td>
  </tr>

<tr>
  <td class=“file high” data-value=“SafeMath.sol”>SafeMath.sol</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“10" class=“abs high”>10/10</td>
  <td data-value=“66.67" class=“pct medium”>66.67%</td>
  <td data-value=“6" class=“abs medium”>4/6</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“4" class=“abs high”>4/4</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“10" class=“abs high”>10/10</td>
  </tr>

<tr>
  <td class=“file high” data-value=“Stake.sol”>Stake.sol</td>
  <td data-value=“97.87” class=“pct high”>97.87%</td>
  <td data-value=“47” class=“abs high”>46/47</td>
  <td data-value=“69.23” class=“pct medium”>69.23%</td>
  <td data-value=“26” class=“abs medium”>18/26</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“16” class=“abs high”>16/16</td>
  <td data-value=“96” class=“pct high”>96%</td>
  <td data-value=“50” class=“abs high”>48/50</td>
  </tr>

<tr>
  <td class=“file high” data-value=“StandardToken.sol”>StandardToken.sol</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“16" class=“abs high”>16/16</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“4" class=“abs high”>4/4</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“5" class=“abs high”>5/5</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“16" class=“abs high”>16/16</td>
  </tr>

<tr>
  <td class=“file high” data-value=“Token.sol”>Token.sol</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“0” class=“abs high”>0/0</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“0” class=“abs high”>0/0</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“0” class=“abs high”>0/0</td>
  <td data-value=“100” class=“pct high”>100%</td>
  <td data-value=“0” class=“abs high”>0/0</td>
  </tr>

<tr>
  <td class=“file high” data-value=“Validating.sol”>Validating.sol</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“3" class=“abs high”>3/3</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“6" class=“abs high”>6/6</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“3" class=“abs high”>3/3</td>
  <td data-value=“100" class=“pct high”>100%</td>
  <td data-value=“6" class=“abs high”>6/6</td>
  </tr>

</tbody>
</table>

Build: [coveralls.io](https://coveralls.io/builds/15519613)

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
