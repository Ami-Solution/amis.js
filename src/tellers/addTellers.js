import ethToolbox from 'eth-toolbox';

import { GAS_PRICE, UTILITYWEB3 } from '../constants/appConstants';

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
 * @param {string} name username
 * @param {object} keystore deserialize keystore
 * @param {string} password
 * @return {object} Return txs
 */
const dtrRegisterPoint = async ({
  lat,
  lng,
  zone,
  rates,
  avatar,
  currency,
  telegram,
  amount,
  name,
  keystore,
  password,
}) =>
  new Promise(async (res, rej) => {
    if (!lat || !lng || !zone || !telegram || !amount || !name || !keystore || !password) {
        return rej(new TypeError('Invalid arguments'));
      }

    if (rates < 0 || rates > 10000) return rej(new TypeError('Invalid rates'));
    if (telegram.length < 3 || telegram.length > 32) return rej(new TypeError('Invalid telegram'));
    if (amount < 0.0025) return rej(new TypeError('Invalid amount'));
    if (name.length < 3 || name.lenght > 32) return rej(new TypeError('Invalid name'));

    const keys = await ethToolbox.decodeKeystore(keystore, password);

    const dtrContractInstance = await ethToolbox.utils.getSignedWeb3(keys.privateKey, keys.address);

    let tsxAmount = parseInt(UTILITYWEB3.toWei(amount, 'ether'), 10);

    const balance = await UTILITYWEB3.eth.getBalance(keys.address);

    if (balance.toNumber() < (tsxAmount + (GAS_PRICE * 650000))) {
      // add if tsxAmount < 0.0025 reject
      tsxAmount = balance.toNumber() - (GAS_PRICE * 650000);
    }
    const result = await dtrContractInstance.registerPoint(
      lat,
      lng,
      zone,
      rates,
      avatar,
      currency,
      telegram,
      name,
      {
        from: ethToolbox.utils.add0x(keys.address),
        value: parseInt(tsxAmount, 10),
        gas: 450000,
        gasPrice: 25000000000,
      },
    );
    return res({
        from: ethToolbox.utils.add0x(keys.address),
        to: dtrContractInstance.address,
        value: amount,
        date: new Date().toLocaleString('en-US', { hour12: false }),
        receive: 'no',
        myEther: 'yes',
        etherscan: `https://kovan.etherscan.io/tx/${result}`,
    });
  });

export default dtrRegisterPoint;