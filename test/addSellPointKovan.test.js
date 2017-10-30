/* global describe it before */
import 'babel-polyfill';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import ethers from 'ethers';

import withdrawAll from '../src/tellers/deleteSellPoint';
import dtrRegisterPoint from '../src/tellers/addTellers';

chai.use(chaiAsPromised);
chai.should();

const { expect } = chai;
const password = 'Abcd';
const seedPhrase = 'forward romance subway tool scatter hazard predict trip scout faculty quiz safe';
let encrypted;

before(async () => {
  try {
    const Wallet = ethers.Wallet;
    const wallet = Wallet.fromMnemonic(seedPhrase);
    encrypted = await wallet.encrypt(password);
  } catch (e) {
    console.log('e', e);
  }
});

describe('dtrRegisterPoint KOVAN', () => {
  it('should be a function', () => {
    expect(typeof dtrRegisterPoint).to.equal('function');
  });
  it('should work', async () => {
    try {
      try {
       const tsx1 = await withdrawAll(encrypted, password, 'https://kovan.infura.io/v604Wu8pXGoPC41ARh0B');
       console.log('withdraw tsx', tsx1);
      } catch (ex) {
        console.log('e', ex);
      } finally {
        // const tsx = await dtrRegisterPoint({
        //   lat: 48.84793,
        //   lng: 2.31617,
        //   zone: 123,
        //   rates: 100,
        //   avatar: 2,
        //   currency: 1,
        //   telegram: 'dether',
        //   amount: 0.1,
        //   username: 'dether.js',
        //   encrypted,
        //   password,
        //   providerUrl: 'https://kovan.infura.io/v604Wu8pXGoPC41ARh0B',
        // });
        // expect(typeof tsx).to.equal('object');
      }
    } catch (e) {
      console.log('e', e);
    }
  });
});
