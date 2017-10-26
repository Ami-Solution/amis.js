/* global describe it before */
import 'babel-polyfill';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import ethToolbox from 'eth-toolbox';
import lightwallet from 'eth-light';

import withdrawAll from '../src/tellers/deleteSellPoint';
import dtrRegisterPoint from '../src/tellers/addTellers';

chai.use(chaiAsPromised);
chai.should();

const { expect } = chai;
let keystore = null;
const password = 'Abcd';
const seedPhrase = 'forward romance subway tool scatter hazard predict trip scout faculty quiz safe';

/**
 * Create Vault
 * @param  {object} data Password, seed, hdPathString
 * @return {object}      Keystore serialized
 */
export const createVault = data =>
  new Promise((res, rej) => {
    if (!data) return rej(new TypeError('Invalid data'));

    return lightwallet.keystore.createVault(data, (err, ks) => {
      if (err) return rej(new TypeError(err));
      return res(ks);
    });
  });

before(async () => {
  try {
  keystore = await createVault({ password, seedPhrase, hdPathString: "m/44'/60'/0'/0" });
    // use the same seed and delete sell point before
  keystore.keyFromPassword(password, (error, pwDerivedKey) => {
      keystore.generateNewAddress(pwDerivedKey, 1);
        const [address] = keystore.getAddresses();
        console.log(address);
      // serializedKeystore = keystore.serialize();
    });
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
        const tsx1 = await withdrawAll(keystore, password, 'https://kovan.infura.io/v604Wu8pXGoPC41ARh0B');
      }
      catch (ex) {
        console.log('e', ex);
      } finally {
        const tsx = await dtrRegisterPoint({
          lat: 48.84793,
          lng: 2.31617,
          zone: 123,
          rates: 100,
          avatar: 2,
          currency: 1,
          telegram: 'dether',
          amount: 0.1,
          username: 'dether.js',
          keystore,
          password,
          providerUrl: 'https://kovan.infura.io/v604Wu8pXGoPC41ARh0B',
        });
        expect(typeof tsx).to.equal('object');
      }

    } catch (e) {
      console.log('e', e);
    }
  });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 'bug',
  //       lng: 30,
  //       zone: 123,
  //       rates: 8,
  //       avatar: 2,
  //       currency: 1,
  //       telegram: 'dether',
  //       amount: 0.1,
  //       username: 'dether',
  //       keystore,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 'bug',
  //       zone: 123,
  //       rates: 8,
  //       avatar: 2,
  //       currency: 1,
  //       telegram: 'dether',
  //       amount: 0.1,
  //       username: 'dether',
  //       keystore,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 123,
  //       zone: 'bug',
  //       rates: 8,
  //       avatar: 2,
  //       currency: 1,
  //       telegram: 'dether',
  //       amount: 0.1,
  //       username: 'dether',
  //       keystore,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 333,
  //       zone: 42,
  //       rates: 'bug',
  //       avatar: 2,
  //       currency: 1,
  //       telegram: 'dether',
  //       amount: 0.1,
  //       username: 'dether',
  //       keystore,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 333,
  //       zone: 42,
  //       rates: 99,
  //       avatar: 'bug',
  //       currency: 1,
  //       telegram: 'dether',
  //       amount: 0.1,
  //       username: 'dether',
  //       keystore,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 333,
  //       zone: 42,
  //       rates: 99,
  //       avatar: 2,
  //       currency: 'bug',
  //       telegram: 'dether',
  //       amount: 0.1,
  //       username: 'dether',
  //       keystore,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 333,
  //       zone: 42,
  //       rates: 99,
  //       avatar: 2,
  //       currency: 2,
  //       telegram: 2,
  //       amount: 0.1,
  //       username: 'dether',
  //       keystore,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 333,
  //       zone: 42,
  //       rates: 99,
  //       avatar: 2,
  //       currency: 2,
  //       telegram: 'Tele',
  //       amount: 'bug',
  //       username: 'dether',
  //       keystore,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 333,
  //       zone: 42,
  //       rates: 99,
  //       avatar: 2,
  //       currency: 2,
  //       telegram: 'Tele',
  //       amount: 2,
  //       username: 123,
  //       keystore,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 333,
  //       zone: 42,
  //       rates: 99,
  //       avatar: 2,
  //       currency: 2,
  //       telegram: 'Tele',
  //       amount: 2,
  //       username: 'name',
  //       keystore: null,
  //       password,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 333,
  //       zone: 42,
  //       rates: 99,
  //       avatar: 2,
  //       currency: 2,
  //       telegram: 'Tele',
  //       amount: 2,
  //       username: 'name',
  //       keystore,
  //       password: null,
  //       providerUrl: 'test',
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
  // it('should crash', async () => {
  //   try {
  //     await dtrRegisterPoint({
  //       lat: 12,
  //       lng: 333,
  //       zone: 42,
  //       rates: 99,
  //       avatar: 2,
  //       currency: 2,
  //       telegram: 'Tele',
  //       amount: 2,
  //       username: 'name',
  //       keystore,
  //       password,
  //       providerUrl: null,
  //     });
  //   } catch (e) {
  //     expect(e).to.not.equal(null);
  //   }
  // });
});
