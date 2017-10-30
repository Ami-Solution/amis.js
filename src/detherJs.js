import Web3 from 'web3';
import ethToolbox from 'eth-toolbox';

import DetherUser from './detherUser';
import Contracts from './utils/contracts';
import Providers from './utils/providers';
import Parsers from './utils/parsers';

class DetherJS {
  constructor(opts) {
    this.provider = Providers.getProvider(opts);
    this.web3 = new Web3();
  }

  /**
   * Asynchronously initialize this instance
   */
  // TODO put in constructor
  async init() {
    this.contractInstance = await Contracts.getDetherContract(this.provider);
    this.storageInstance = await Contracts.getDetherStorageContract(this.provider);

    if (!this.contractInstance || !this.storageInstance) throw new Error('Unable to load contracts');
  }

  /**
   * Get instance of DetherUser linked to this Dether instance
   * @param  {object}  keystore User keystore
   * @return {Object} DetherUser
   */
  getUser(keystore) {
    return new DetherUser({
      keystore,
      dether: this,
    });
  }

  /**
   * get teller by address
   * @param  {string}  address ethereum address
   * @return {Promise<Object>} teller
   */
  async getTeller(address) {
    const [rawTellerPos, rawTellerProfile] = await Promise.all([
      this.contractInstance.getTellerPos(address),
      this.contractInstance.getTellerProfile(address),
    ]);

    //     if (tellerPos[3].toNumber() === 0) return null; TODO

    const teller = {};

    Object.assign(
      teller,
      Parsers.tellerPosFromContract(rawTellerPos),
      Parsers.tellerProfileFromContract(rawTellerProfile),
      {
        id: address,
        ethAddress: address,
      },
    );

    return teller;
  }

  /**
   * @ignore
   * Filter null and removes tellers with same address
   * @param {Array} list tellers
   * @return {Array} filtered tellers
   */
  static _filterTellerList(list) {
    return list
      .filter(teller => !!teller)
      .reduce(
        (acc, teller) =>
          (!acc.some(t => t.ethAddress === teller.ethAddress) ? [...acc, teller] : acc),
        [],
      );
  }

  /**
   * Get All tellers on the map
   * @return {Promise<Array>} array of tellers
   */
  async getAllTellers() {
    const result = await this.storageInstance.getAllTellers.call();
    if (!result || !result.length) return [];

    const tellersAddresses = result[0]; // TODO pourquoi ??

    const tellers = await Promise.all(tellersAddresses.map(this.getTeller.bind(this)));

    return DetherJS._filterTellerList(tellers);
  }
  /**
   * Get All tellers per zone
   * @param  {string}  zone
   * @return {Promise<Array>} array of tellers in zone
   */
  async getTellersInZone(zone) {
    const result = await this.storageInstance.getZone.call();
    if (!result || !result.length) return [];

    const tellersAddressesInZone = result[0]; // TODO pourquoi ??

    const zoneInt = parseInt(zone, 10);
    const tellers = await Promise.all(tellersAddressesInZone.map(this.getTeller.bind(this)));

    return DetherJS._filterTellerList(tellers).filter(t => t.zoneId === zoneInt);
  }

  /**
   * get dtr balance
   * @param  {string}  address ethereum address
   * @return {Promise<Number>} Escrow balance of teller at address
   */
  async getBalance(address) {
    if (!ethToolbox.utils.isAddr(address)) throw new TypeError('Invalid ETH address');

    const result = await this.contractInstance.getTellerBalances
      .call(ethToolbox.utils.add0x(address));

    if (Number.isNaN(Number(result))) return 0;

    return Number(this.web3.fromWei(result.toNumber(), 'ether'));
  }
}

export default DetherJS;