# AmisJS
[![Build Status](https://travis-ci.com/ami-solution/amisjs.svg?token=xxxx&branch=master)](https://travis-ci.com/ami-solution/amis.js) ![npm](https://img.shields.io/npm/v/amishop-contracts.svg)

AmisJS is Javascript SDK to easily interact with [amishop-contracts](https://github.com/ami-solution/amishop-contracts)

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
