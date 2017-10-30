import ethToolbox from 'eth-toolbox';
import Web3 from 'web3';

import ethers from 'ethers';
import DetherJson from 'dethercontract/contracts/DetherInterface.json';

import { GAS_PRICE, getSignedContractInstance } from '../constants/appConstants';

const check = (teller) => {
  if (!teller.lat || Number.isNaN(teller.lat) || teller.lat > 90 || teller.lat < -90) {
    return { error: true, msg: 'Invalid latitude' };
  }
  if (!teller.lng || Number.isNaN(teller.lng) || teller.lng > 180 || teller.lng < -180) {
    return { error: true, msg: 'Invalid longitude' };
  }
  if (!teller.zone || !Number.isInteger(teller.zone)) {
    return { error: true, msg: 'Invalid zone' };
  }
  if (!teller.rates || teller.rates <= 0 || teller.rates > 100) {
    return { error: true, msg: 'Invalid rates' };
  }
  if (!teller.avatar || !Number.isInteger(teller.avatar) || teller.avatar < 0) {
    return { error: true, msg: 'Invalid avatar' };
  }
  if (!teller.currency || !Number.isInteger(teller.currency) || teller.currency < 0) {
    return { error: true, msg: 'Invalid currency' };
  }
  if (!teller.telegram || teller.telegram.length < 3 || teller.telegram.length > 30) {
    return { error: true, msg: 'Invalid telegram' };
  }
  if (!teller.amount || Number.isNaN(teller.amount) || teller.amount < 0.01) {
    return { error: true, msg: 'Invalid amount' };
  }
  if (!teller.username || teller.username.length < 3 || teller.username.length > 30) {
    return { error: true, msg: 'Invalid username' };
  }
  // if (!teller.keystore) {
  //   return { error: true, msg: 'Invalid keystore' };
  // }
  if (!teller.password || teller.password.length < 1) {
    return { error: true, msg: 'Invalid password' };
  }
  if (!teller.providerUrl) {
    return { error: true, msg: 'Invalid provider url' };
  }
  // if (!teller.gasPrice || teller.gasPrice < 0) {
  //   return { error: true, msg: 'Invalid gas Price' };
  // }
  return {};
};

// gas used = 223319
// gas price average (mainnet) = 25000000000 wei
// 250000 * 25000000000 = 0.006250000000000000 ETH
// need 0.006250000000000000 ETH to process this function
/**
 * @param {number} lat latitude min -90 max +90
 * @param {number} lng longitude min -180 max +180
 * @param {string} zone geographic zone
 * @param {number} rates Margin (0-100 * 100)
 * @param {number} avatar (1-9)
 * @param {number} currency number (0-4)
 * @param {string} telegam pseudo telegram
 * @param {number} amount escrow
 * @param {string} username username
 * @param {object} keystore deserialize keystore
 * @param {string} password
 * @param {string} providerUrl
 * @return {object} Return txs
 */
const dtrRegisterPoint = async (teller) =>
  new Promise(async (res, rej) => {
    // const secu = check(teller);
    // if (secu.error) return rej(new TypeError(secu.msg));

    try {
      const provider = ethers.providers;
      const Wallet = ethers.Wallet;
      const infuraProvider = new provider.InfuraProvider({name: 'kovan', chainId: 42}, 'v604Wu8pXGoPC41ARh0B');
      let decrypted = await Wallet.fromEncryptedWallet(teller.encrypted ,teller.password);
      decrypted.provider = new provider.InfuraProvider({name: 'kovan', chainId: 42}, 'v604Wu8pXGoPC41ARh0B');
      let contract = new ethers.Contract(DetherJson.networks[infuraProvider.chainId].address, DetherJson.abi, decrypted);

      const utilityWeb3 = new Web3(new Web3.providers.HttpProvider(teller.providerUrl));

      let tsxAmount = parseInt(utilityWeb3.toWei(teller.amount, 'ether'), 10);
      if (teller.providerUrl !== 'test') {
        const balance = await utilityWeb3.eth.getBalance(decrypted.address);
        console.log('balance', balance);
         // check if enough gas is present to sendCoin once after registering
         if (balance.toNumber() < (tsxAmount + (GAS_PRICE * 650000))) {
           tsxAmount = balance.toNumber() - (GAS_PRICE * 650000);
           if (tsxAmount < 0.0025) return rej(new TypeError('Insufficient funds'));
         }
      }
      console.log(teller);
      const result = await contract.registerPoint(
        teller.lat.toFixed(6) * (10 ** 5),
        teller.lng.toFixed(6) * (10 ** 5),
        teller.zone,
        teller.rates * 100,
        teller.avatar,
        teller.currency,
        teller.telegram,
        teller.username,
        {
          from: ethToolbox.utils.add0x(decrypted.address),
          value: parseInt(tsxAmount, 10),
          gas: 450000,
          gasPrice: GAS_PRICE,
        },
      );
      console.log('result', result);
      return res({
          from: decrypted.address,
          to: coontract.address,
          value: teller.amount,
          date: new Date().toLocaleString('en-US', { hour12: false }),
          dether: {
            detherContract: true,
            receive: false,
          },
          etherscan: {
            kovan: `https://kovan.etherscan.io/tx/${result}`,
            ropsten: `https://ropsten.etherscan.io/tx/${result}`,
            ether: `https://etherscan.io/tx/${result}`,
          },
      });
    } catch (e) {
      console.log('error', e);
      return rej(new TypeError(e));
    }
  });

export default dtrRegisterPoint;
