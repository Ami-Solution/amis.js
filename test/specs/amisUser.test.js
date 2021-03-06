/* global describe it beforeEach afterEach */
import { expect } from 'chai';
import sinon from 'sinon';
import AmisJS from '../../src/amisJs';
import AmisUser from '../../src/amisUser';
import Contracts from '../../src/utils/contracts';

import contractMock from '../mock/contract';

describe('amis user', () => {
  let sandbox = null;
  let amis = null;
  let wallet = null;
  let user = null;

  beforeEach(async () => {
    sandbox = sinon.sandbox.create();

    amis = new AmisJS({
      network: 'kovan',
    });

    wallet = AmisJS.Ethers.Wallet.createRandom();
    const encryptedWallet = await wallet.encrypt('password');
    user = new AmisUser({ amis, encryptedWallet });

    user.signedAmisContract = contractMock;
  });

  afterEach(() => {
    if (sandbox) {
      sandbox.restore();
    }
  });

  it('should instanciate', async () => {
    const password = 'password';
    const localWallet = AmisJS.Ethers.Wallet.createRandom();
    const encryptedWallet = await localWallet.encrypt(password);

    const localAmis = { provider: { chainId: 42 } };

    const amisuser = new AmisUser({
      amis: localAmis,
      encryptedWallet,
    });
    expect(amisuser.amis).to.eq(localAmis);
    expect(amisuser.encryptedWallet).to.eq(encryptedWallet);

    const decryptedWallet =
      await AmisJS.Ethers.Wallet.fromEncryptedWallet(amisuser.encryptedWallet, password);
    expect(decryptedWallet.privateKey).to.eq(localWallet.privateKey);
  });

  it('should get wallet', async () => {
    const customWallet = {};
    amis.provider = 'provider';

    const restore = AmisJS.Ethers.Wallet;
    AmisJS.Ethers.Wallet = {
      fromEncryptedWallet: sinon.stub().returns(customWallet),
    };

    const wallet = await user._getWallet('password');

    expect(AmisJS.Ethers.Wallet.fromEncryptedWallet.calledWith(user.encryptedWallet, 'password')).to.be.true;
    expect(wallet.provider).to.eq('provider');

    AmisJS.Ethers.Wallet = restore;
  });

  it('should get user address', async () => {
    const address = await user.getAddress();
    expect(address).to.eq(wallet.address.toLowerCase());
  });

  it('should get user info', async () => {
    const stub = sandbox.stub(amis, 'getTeller');
    stub.returns('info');

    const info = await user.getInfo();

    expect(stub.calledWith(wallet.address.toLowerCase())).to.be.true;
    expect(info).to.eq('info');
  });

  it('should get user escrow balance', async () => {
    const stub = sandbox.stub(amis, 'getTellerBalance');
    stub.returns('balance');
    const balance = await user.getBalance();

    expect(stub.calledWith(wallet.address.toLowerCase())).to.be.true;
    expect(balance).to.eq('balance');
  });

  it('should register point', async () => {
    const transaction = {
      hash: 'hash',
    };
    const sellPoint = {
      lat: 1,
      lng: 2,
      zone: 42,
      rates: 20.20,
      avatar: 1,
      currency: 2,
      telegram: 'abc',
      username: 'cba',
      amount: 0.01,
    };

    const registerPoint = sinon.stub();
    registerPoint.returns(transaction);
    const _getCustomContract = sandbox.stub(Contracts, 'getCustomContract');
    _getCustomContract.returns({
      registerPoint,
    });

    const waitForTransaction = sinon.stub();
    waitForTransaction.resolves(transaction);
    user.amis.provider = {
      waitForTransaction,
    };

    const result = await user.addSellPoint(sellPoint, 'password');
    expect(result).to.deep.eq(transaction);

    expect(registerPoint.args[0][0]).to.eq(100000);
    expect(registerPoint.args[0][1]).to.eq(200000);
    expect(registerPoint.args[0][2]).to.eq(42);
    expect(registerPoint.args[0][3]).to.eq(2020);
    expect(registerPoint.args[0][4]).to.eq(1);
    expect(registerPoint.args[0][5]).to.eq(2);
    expect(registerPoint.args[0][6][0]).to.eq(97);
    expect(registerPoint.args[0][6][1]).to.eq(98);
    expect(registerPoint.args[0][6][2]).to.eq(99);
    expect(registerPoint.args[0][7][0]).to.eq(99);
    expect(registerPoint.args[0][7][1]).to.eq(98);
    expect(registerPoint.args[0][7][2]).to.eq(97);

    const transactionValue = AmisJS.Ethers.utils.parseEther('0.01');
    expect(_getCustomContract.args[0][0].value.eq(transactionValue)).to.be.true;
    expect(_getCustomContract.args[0][0].password).to.eq('password');
    expect(waitForTransaction.calledWith(transaction.hash));
  });

  it('should send coin', async () => {
    const transaction = {
      hash: 'hash',
    };

    const opts = {
      amount: 1,
      receiver: '0x57b00c981363c67b11e07eaa71364bf20e8025fe',
    };

    const sendCoin = sinon.stub();
    sendCoin.returns(transaction);

    const _getCustomContract = sandbox.stub(Contracts, 'getCustomContract');
    _getCustomContract.returns({
      sendCoin,
    });

    const waitForTransaction = sinon.stub();
    waitForTransaction.resolves(transaction);
    user.amis.provider = {
      waitForTransaction,
    };

    const result = await user.sendToBuyer(opts, 'password');
    expect(result).to.deep.eq(transaction);

    expect(sendCoin.calledWith(
      '0x57b00c981363c67b11e07eaa71364bf20e8025fe',
      AmisJS.Ethers.utils.parseEther('1'),
    )).to.be.true;
    expect(_getCustomContract.args[0][0].password).to.eq('password');
    expect(waitForTransaction.calledWith(transaction.hash));
  });

  it('should withdraw all', async () => {
    const transaction = {
      hash: 'hash',
    };
    const withdrawAll = sinon.stub();
    withdrawAll.returns(transaction);
    const _getCustomContract = sandbox.stub(Contracts, 'getCustomContract');
    _getCustomContract.returns({
      withdrawAll,
    });

    const waitForTransaction = sinon.stub();
    waitForTransaction.resolves(transaction);
    user.amis.provider = {
      waitForTransaction,
    };

    const result = await user.deleteSellPoint('password');
    expect(result).to.deep.eq(transaction);
    expect(_getCustomContract.args[0][0].password).to.eq('password');
    expect(waitForTransaction.calledWith(transaction.hash));
  });
});
