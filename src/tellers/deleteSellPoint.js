// import ethToolbox from 'eth-toolbox';
import ethers from 'ethers';
import DetherJson from 'dethercontract/contracts/DetherInterface.json';

/**
 * The encrypted wallet and the provider can be move on the class creation
 */
const withdrawAll = (encrypted, password, providerUrl) =>
  new Promise(async (res, rej) => {

    try {
      const provider = ethers.providers;
      const Wallet = ethers.Wallet;
      let decrypted = await Wallet.fromEncryptedWallet(encrypted ,password);
      // We need build the provider inside the function cause the decrypt wallet doesn't keep the original provider
      // Impossible to create in infura provider on kovan, its already fixed on github it will be publish on the next npm upgrade

      decrypted.provider = new provider.InfuraProvider(true);
      // decrypted.provider.chainId = 42;
      // decrypted.provider.name = 'kovan';

      console.log('provider', decrypted.provider );
      // const contract = new ethers.Contract(DetherJson.networks[decrypted.provider.chainId].address, DetherJson.abi, decrypted);
      const contract = new ethers.Contract(DetherJson.networks[42].address, DetherJson.abi, decrypted);

      // the transaction will not work cause we are on ropsten
      return res(contract
        .withdrawAll());
    } catch (e) {
      return rej(new TypeError(e));
    }
  });

export default withdrawAll;
