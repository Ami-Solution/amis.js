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

# How to contribute

I'm really glad you're reading this, because we need volunteer developers to help this project come to fruition.

If you haven't already, come find us in Slack and/ or gitchat ([amisolution Slack](https://amisolution.slack.com). We want you working on things you're excited about.

Here are some important resources:

  * [Gitchat](https://gitter.im/erc20-amis/Lobby). We're usually there during business hours.
  * [SubReddit](https://www.reddit.com/r/amis_erc20/)
  * [Medium blog](https://medium.com/@amis_erc20) is where we explain our project and do announcements
  * [Twitter](https://twitter.com/amis_erc20) to follow us
  * [Facebook](https://www.facebook.com/amis.token/) to follow us

  * Non critical Bug? [Github issue](https://github.com/ami-solution/amis.js/issues) is where to report them
  * Critical Bug? [Github bug](https://github.com/ami-solution/amis.js/issues) is where to report them

## Testing

We are testing the smart contracts with Javascript in async/await style, and the Truffle framework to run them. Please write test examples for new code you create.

## Submitting changes

Please send a [GitHub Pull Request to Amis.js](https://github.com/ami-solution/amis.js/pulls) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we will love you forever if you include tests. We can always use more test coverage. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    >
    > A paragraph describing what changed and its impact."

## Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

  * We indent using two spaces (soft tabs)
  * We use async/await for tests
