<img align="left" src="https://raw.githubusercontent.com/amisolution/ERC20-AMIS/master/amis-logo3.png" alt="amis-logo3"/>
<img align="right" src="https://raw.githubusercontent.com/amisolution/ERC20-AMIS/master/images/AMIS-QRCODE.png" alt="AMIS-QRCODE" width="100"/>

[![Website Down](https://img.shields.io/badge/website-down-red.svg)](http://erc20-amis.amisolution.net/)&nbsp;
[![Join the Gitchat at https://gitter.im/amis-delta-dex/Lobby](https://badges.gitter.im/amis-delta-dex/Lobby.svg)](https://gitter.im/AMIS-DELTA-DEX/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)&nbsp;[![Trade Bounty](https://img.shields.io/badge/trade-bounty-orange.svg)](https://github.com/amisolution/ERC20-AMIS/issues/)&nbsp;[![Twitter AirDrop](https://img.shields.io/badge/Twitter-Airdrop-red.svg)](https://twitter.com/AMIStoken_ERC20)&nbsp;[![Official Twitter](https://img.shields.io/badge/official-twitter-brightgreen.svg)](https://twitter.com/amis_erc20)&nbsp;[![Official AmisForkdelta](https://img.shields.io/badge/official-forkdelta-brightgreen.svg)](https://forkdelta.app/#!/trade/0x949bed886c739f1a3273629b3320db0c5024c719-ETH)
&nbsp;[![Official AmisEtherDelta](https://img.shields.io/badge/official-etherdelta-brightgreen.svg)](https://etherdelta.com/#0x949bed886c739f1a3273629b3320db0c5024c719-ETH)
&nbsp;[![Official BambooRelay](https://img.shields.io/badge/official-bamboorelay-brightgreen.svg)](https://bamboorelay.com/trade/AMIS-WETH)&nbsp;[![Official AmisTokenJar](https://img.shields.io/badge/official-tokenjar-brightgreen.svg)](https://tokenjar.io/amis)
&nbsp;[![ßtesting Dubiex](https://img.shields.io/badge/ßtesting-dubiex-yellow.svg)](https://dubiex.com/AMIS/ETH)&nbsp;[![Official AmisLedgerDex](https://img.shields.io/badge/official-ledgerdex-1330e3.svg)](https://app.ledgerdex.com/#/app/orders/maker-taker/AMIS/0x949bed886c739f1a3273629b3320db0c5024c719/WETH/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
)&nbsp;[![Official Cryptoderivatives](https://img.shields.io/badge/official-cryptoderivatives-4330e7.svg)](https://cryptoderivatives.market/token/AMIS)&nbsp;[![Official Cryptocompare](https://img.shields.io/badge/official-cryptocompare-brightgreen.svg)](https://www.cryptocompare.com/coins/amis)&nbsp;[![Official DexTracker](https://img.shields.io/badge/official-dextracker-brightgreen.svg)](https://etherscan.io/dextracker?filter=&q=AMIS)
&nbsp;[![ßtesting TokenStore](https://img.shields.io/badge/ßtesting-TokenStore-yellow.svg)](https://token.store/trade/0x949bed886c739f1a3273629b3320db0c5024c719)
&nbsp;[![αtesting EthenMarket](https://img.shields.io/badge/αtesting-ethenmarket-lightgrey.svg)](https://ethen.market/949bed886c739f1a3273629b3320db0c5024c719)&nbsp;[![ßtesting AmisDex](https://img.shields.io/badge/ßtesting-amisdex-lightblue.svg)](https://amisdex.github.io/amis-exchange-www)&nbsp;
[![Build Status](https://travis-ci.com/ami-solution/amisjs.svg?token=xxxx&branch=master)](https://travis-ci.com/ami-solution/amis.js) ![npm](https://img.shields.io/npm/v/amishop-contracts.svg)


**[https://amishop.glitch.me](https://amishop.glitch.me)**


#What is AmisJS ?


AmisJS is an experimental SDK which interacts with Amis and other designated smart contracts. AmisJS is part of the ERC20-AMIS Token Future, options and crypto derivatives Project. Amishop is a web front end designed to interact with Amis project smart contracts powered by the ethereum blockchain.

# AmisJS
[![Build Status](https://circleci.com/ami-solution/amisjs.svg?token=xxxx&branch=master)](https://circleci.com/ami-solution/amis.js) ![npm](https://img.shields.io/npm/v/amishop-contracts.svg)

AmisJS is Javascript SDK which is built to easily interact with [amishop-contracts](https://github.com/ami-solution/amishop-contracts)

It provides wrappers for all the public methods of the contract and formats values in and out.

v0.1.1
[v0.1.0](https://github.com/ami-solution/amis.js/)
## Table of Contents

* [Install](#install)
* [Docs](#doc)
* [Example](#example)
* [Dev](#dev)
* [Test](#test)
* [Build doc](#build-doc)
* [Dependencies](#dependencies)
* [Bugs](#bugs)
* [License](#license)
* [Donation](#donation)

## Install

Use NPM to get the package

```
npm install --save amis.js
```

## Docs

Extensive documentation of all the methods can be found on the [API documentation](https://ami-solution.github.io/amis.js)

## Usage

You can find more examples of method usage in [examples/usage.js](https://github.com/ami-solution/amis.js/blob/v1.x/examples/usage.js)
```
import AmisJS from 'amis.js';

const amis = new AmisJS({ network: 'kovan' });
const allTellers = await dether.getAllTellers();

const wallet = AmisJS.Wallet.createRandom();
const encryptedWallet = await wallet.encrypt('password');

const user = amis.getUser(encryptedWallet);
const info = await amis.getInfo();
```

## Dev
```
git clone https://github.com/ami-solution/amis.js.git
cd amis.js
npm i
```

## Test
```
npm test
```

## Build doc
```
npm run esdoc
```

## Dependencies

* [amishop-contracts](https://github.com/ami-solution/amishop-contracts.git)
* [eth-toolbox](https://github.com/dethertech/eth-toolbox)
* [web3](https://github.com/ethereum/web3.js/)
* [ethers.js](https://github.com/ethers-io/ethers.js)

## Bugs

When you find issues, please report them:

* web: [https://github.com/ami-solution/amis.js/issues](https://github.com/ami-solution/amis.js/issues)

## License

* __MIT__: [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)

## Donation
* [Ethereum Foundation](https://ethereum.org/donate)
* [Etherscan](https://etherscan.io/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f)
* [MyEtherWallet](https://etherscan.io/address/0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8)
