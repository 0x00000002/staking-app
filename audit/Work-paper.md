# Work paper

performed Feb 16, 2019 by [tikonoff](https://github.com/tikonoff)


|     Contract       |                  Function               		    | Visibility | Constant |  Returns  |                   Modifiers                    | Static Analysis    |   Test Coverage    | Functional Analysis |
|--------------------|--------------------------------------------------|------------|----------|-----------|------------------------------------------------|--------------------|--------------------|---------------------|
| StandardToken 	 | transfer(address,uint256)                   		| public     | false    | success   |                                                | :white_check_mark: | :white_check_mark: | 					 |
| StandardToken 	 | transferFrom(address,address,uint256)       		| public     | false    | success   |                                                | :white_check_mark: | :white_check_mark: | 					 |
| StandardToken 	 | balanceOf(address)                          		| public     | true     | balance   |                                                | :white_check_mark: | :white_check_mark: | 				     |
| StandardToken 	 | approve(address,uint256)                    		| public     | false    | success   |                                                | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| StandardToken 	 | allowance(address,address)                  		| public     | true     | remaining |                                                | :white_check_mark: | :white_check_mark: | 					 |
| HumanStandardToken | HumanStandardToken(uint256,string,uint8,string)  | public     | false    |         	| 										         | :white_check_mark: | :white_check_mark: | 					 |
| HumanStandardToken | approveAndCall(address,uint256,bytes)            | public     | false    | success 	|           									 | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| Owned         	 | setOperator(address)                        		| external   | false    |           | onlyOwner                                      | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| Owned         	 | removeOwner(address)                        		| public     | false    |           | onlyOwner                                      | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| Owned         	 | addOwner(address)                           		| external   | false    |           | onlyOwner                                      | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| Owned         	 | setOwners(address)                          		| internal   | false    |           |                                                | :white_check_mark: | :white_check_mark: | 					 |
| Owned         	 | getOwners()                                 		| public     | true     |           |                                                | :white_check_mark: | :white_check_mark: | 					 |
| Fee           	 | Fee(address,string,uint8,string)            		| public     | false    |           | notEmpty,notEmpty                              | :white_check_mark: | :white_check_mark: | 					 |
| Fee           	 | setMinter(address)                          		| external   | false    |           | onlyOwner,validAddress                         | :white_check_mark: | :white_check_mark: | 					 |
| Fee           	 | burnTokens(uint)                            		| public     | false    |           | notZero                                        | :white_check_mark: | :white_check_mark: | 					 |
| Fee           	 | sendTokens(address,uint)                    		| public     | false    |           | onlyMinter,validAddress,notZero                | :white_check_mark: | :white_check_mark: | 					 |
| Stake         	 | ()                                          		| public     | false    |           | payable                                        | :white_check_mark: | :white_check_mark: | 					 |
| Stake         	 | Stake(address,address,address,uint,address) 		| public     | false    |           | validAddress,validAddress,validAddress,notZero | :white_check_mark: | :white_check_mark: | 					 |
| Stake         	 | version()                                   		| external   | false    | string    | pure                                           | :white_check_mark: | :white_check_mark: | 					 |
| Stake         	 | checkOperator()                             		| external   | false    | string    | view,onlyOperator,isStaking,isDoneStaking      | :white_check_mark: | :white_check_mark: | 					 |
| Stake         	 | setLevToken(address)                        		| external   | false    |           | validAddress,onlyOwner                         | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| Stake         	 | setFeeToken(address)                        		| external   | false    |           | validAddress,onlyOwner                         | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| Stake         	 | setWallet(address)                          		| external   | false    |           | validAddress,onlyOwner                         | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| Stake         	 | stakeTokens(uint)                           		| external   | false    |           | isStaking,notZero                              | :white_check_mark: | :white_check_mark: | 					 |
| Stake         	 | revertFeeCalculatedFlag(bool)               		| external   | false    |           | onlyOwner,isDoneStaking                        | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| Stake         	 | updateFeeForCurrentStakingInterval()        		| external   | false    |           | onlyOperator,isDoneStaking                     | :white_check_mark: | :white_check_mark: | 					 |
| Stake         	 | redeemLevAndFeeByStaker()                   		| external   | false    |           |                                                | :white_check_mark: | :white_check_mark: | 					 |
| Stake         	 | redeemLevAndFeeToStakers(address)           		| external   | false    |           | onlyOperator                                   | :white_check_mark: | :white_check_mark: | 					 |
| Stake              | redeemLevAndFee(address)                    		| private    | false    |           | validAddress,isDoneStaking                     | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
| Stake              | startNewStakingInterval(uint,uint)          		| external   | false    |           | notZero,notZero,onlyOperator,isDoneStaking     | :white_check_mark: | :white_check_mark: | :white_check_mark:  |
