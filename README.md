# Ethernaut Solution

This project aims to record solutions for challenges on [ethernaut](https://ethernaut.openzeppelin.com/). \
On ethernaut, it is available to solve some levels only using browser setups, but often needs tools outside browser, such as truffle or remix. \
So I thought reproducable, sharable, recordable project would help some people on new to ethernaut.

## requirement
Only thing you need is truffle!
```bash
bash> sudo npm install truffle -g
```

## project structure

project is created by using `web3.js` + `truffle`.

- contracts: solidity smartcontracts will be placed.
- scripts: helper scripts will be placed.
- scripts\/<level-title\>: solution of level.

## environment
You have to create .env first, just copy .env.example!
```bash
bash> cp .env.example .env
```
Fill variables!
```bash
PRIVATE=blah-blah
WSRPC=wss://polygon-mumbai-bor.publicnode.com
```

## Run
Check commands using --help option
```bash
# run command
npm run start -- --help
# deploy
npm run start -- deploy CoinFlip
# deploy with arguments
npm run start -- deploy CoinFlipHack --args 0x6993Db3723F321003f8a047DB7E49fAcd0ce6390
# execute script
npm run start -- execute CoinFlip --args 0x6993Db3723F321003f8a047DB7E49fAcd0ce6390
```

## current status table
Resolved means it's done to writing contract & execution script.

| #   | name             | resolved | blog post                                                                                         |
| :-- | ---------------- | -------- | ------------------------------------------------------------------------------------------------- |
| 00  | hello ethernaut  | won't do | won't do                                                                                          |
| 01  | Fallback         | won't do | [link](https://velog.io/@tmdwls3364/ethernaut-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-01-Fallback)   |
| 02  | Fallout          | won't do | won't do                                                                                          |
| 03  | CoinFlip         | done     | [link](https://velog.io/@tmdwls3364/ethernaut-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-03-CoinFlip)   |
| 04  | Telephone        | done     | [link](https://velog.io/@tmdwls3364/ethernaut-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-04-Telephone)  |
| 05  | Token            | done     | [link](https://velog.io/@tmdwls3364/ethernaut-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-05-Token)      |
| 06  | Delegation       | done     | [link](https://velog.io/@tmdwls3364/ethernaut-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-06-Delegation) |
| 07  | Force            | done     |                                                                                                   |
| 08  | Vault            | won't do |                                                                                                   |
| 09  | King             | done     |                                                                                                   |
| 10  | Re-entrancy      | done     |                                                                                                   |
| 11  | Elevator         | done     |                                                                                                   |
| 12  | Privacy          |          |                                                                                                   |
| 13  | GateKeeperOne    |          |                                                                                                   |
| 14  | GateKeeperTwo    |          |                                                                                                   |
| 15  | NaughtCoin       |          |                                                                                                   |
| 16  | Preservation     |          |                                                                                                   |
| 17  | Recovery         |          |                                                                                                   |
| 18  | MagicNumber      |          |                                                                                                   |
| 19  | Ailen Code       |          |                                                                                                   |
| 20  | Denial           |          |                                                                                                   |
| 21  | Shop             |          |                                                                                                   |
| 22  | Dex              |          |                                                                                                   |
| 23  | Dex Two          |          |                                                                                                   |
| 24  | Puzzle Wallet    |          |                                                                                                   |
| 25  | Motorbike        |          |                                                                                                   |
| 26  | DoubleEntryPoint |          |                                                                                                   |
| 27  | Good Samaritan   |          |                                                                                                   |
| 28  | GateKeeperThree  |          |                                                                                                   |
| 29  | Switch           |          |                                                                                                   |
| 30  | Higher Order     |          |                                                                                                   |
| 31  | Stake            |          |                                                                                                   |
