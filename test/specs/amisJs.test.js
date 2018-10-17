/* global describe it beforeEach afterEach */
import { expect } from 'chai';
import sinon from 'sinon';
import AmisJS from '../../src/amisJs';
import Contracts from '../../src/utils/contracts';
import Providers from '../../src/utils/providers';

import contractMock from '../mock/contract';
import storageMock from '../mock/storage';

describe('amis js', () => {
  describe('instanciation', () => {
    let amis;

    it('should instanciate with provider', () => {
      const p = sinon.stub(Providers, 'getProvider');
      const c = sinon.stub(Contracts, 'getAmisContract');
      const s = sinon.stub(Contracts, 'getAmisStorageContract');

      p.returns('provider');
      c.returns('contractInstance');
      s.returns('storageInstance');

      amis = new AmisJS({
        network: 'ropsten',
      });

      expect(amis.provider).to.eq('provider');

      expect(amis.contractInstance).to.equal('contractInstance');
      expect(amis.storageInstance).to.equal('storageInstance');

      expect(c.calledWith(amis.provider)).to.be.true;
      expect(s.calledWith(amis.provider)).to.be.true;

      p.restore();
      c.restore();
      s.restore();
    });
  });

  describe('calls', () => {
    let amis = [];
    let stubs = [];

    beforeEach(async () => {
      stubs = [];

      amis = new AmisJS({
        network: 'kovan',
      });

      amis.contractInstance = contractMock;
      amis.storageInstance = storageMock;
    });

    afterEach(() => {
      stubs.forEach(s => s.restore());
      stubs = [];
    });


    it('should get user', async () => {
      const wallet = AmisJS.Ethers.Wallet.createRandom();
      const encryptedWallet = await wallet.encrypt('password');

      const user = amis.getUser(encryptedWallet);

      expect(user.amis).to.eq(amis);
      expect(user.encryptedWallet).to.eq(encryptedWallet);
    });

    describe('getTeller', () => {
      it('should get teller', async () => {
        stubs.push(sinon.spy(contractMock, 'getTellerPos'));
        stubs.push(sinon.spy(contractMock, 'getTellerProfile'));

        const teller = await amis.getTeller('addr');

        expect(stubs[0].calledWith('addr')).to.be.true;
        expect(stubs[1].calledWith('addr')).to.be.true;

        expect(teller.id).to.eq('addr');
        expect(teller.ethAddress).to.eq('addr');
        expect(teller.name).to.eq('Haqry');
        expect(teller.messengerAddr).to.eq('Harqy');
        expect(teller.lat).to.eq(9.12312);
        expect(teller.lng).to.eq(8.12312);
        expect(teller.zoneId).to.eq(789);
        expect(teller.escrowBalance).to.eq(2.2);
        expect(teller.rates).to.eq(23.13);
        expect(teller.volumeTrade).to.eq(1.2);
        expect(teller.nbTrade).to.eq(12);
        expect(teller.currencyId).to.eq(1);
        expect(teller.avatarId).to.eq(2);
      });
    });

    describe('getTellerBalance', () => {
      it('should be a function', () => {
        expect(typeof amis.getTellerBalance).to.equal('function');
      });

      it('should get user escrow balance', async () => {
        const spy = sinon.spy(contractMock, 'getTellerBalances');
        const balance = await amis.getTellerBalance('0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb623');
        expect(balance).to.eq(2.2);
        expect(spy.calledWith('0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb623')).to.be.true;
        spy.restore();
      });

      it('should get user escrow balance throw invalid address', async () => {
        expect(amis.getTellerBalance).to.throw;
        expect(amis.getTellerBalance.bind(amis, 'fiezfij')).to.throw;
      });
    });

    it('filter null&duplicates', async () => {
      const list = [
        null,
        { ethAddress: 1 },
        { ethAddress: 2 },
        { ethAddress: 3 },
        undefined,
        { ethAddress: 4 },
        null,
      ];

      const fil = AmisJS._filterTellerList(list);

      expect(fil.length).to.eq(4);
      expect(fil[0].ethAddress).to.eq(1);
      expect(fil[1].ethAddress).to.eq(2);
      expect(fil[2].ethAddress).to.eq(3);
      expect(fil[3].ethAddress).to.eq(4);
    });

    describe('getAllTellers', () => {
      it('should be a function', () => {
        expect(typeof amis.getAllTellers).to.equal('function');
      });

      it('should get all tellers', async () => {
        const stub = sinon.stub(amis, 'getTeller');

        stub.onCall(0).returns({ ethAddress: 'a' });
        stub.onCall(1).returns({ ethAddress: 'b' });
        stub.onCall(2).returns({ ethAddress: 'c' });

        const allTellers = await amis.getAllTellers();
        expect(allTellers.length).to.eq(3);
        expect(allTellers[0].ethAddress).to.eq('a');
        expect(allTellers[1].ethAddress).to.eq('b');
        expect(allTellers[2].ethAddress).to.eq('c');

        stub.restore();
      });

      it('should get all tellers without duplicate', async () => {
        const stub = sinon.stub(amis, 'getTeller');

        stub.onCall(0).returns({ ethAddress: 'a' });
        stub.onCall(1).returns({ ethAddress: 'b' });
        stub.onCall(2).returns({ ethAddress: 'a' });

        const allTellers = await amis.getAllTellers();
        expect(allTellers.length).to.eq(2);
        expect(allTellers[0].ethAddress).to.eq('a');
        expect(allTellers[1].ethAddress).to.eq('b');

        stub.restore();
      });

      it('should get array of teller', async () => {
        const tab = [
          '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb621',
          '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb622',
        ];
        const allTellers = await amis.getAllTellers(tab);
        expect(allTellers.length).to.eq(2);
        expect(allTellers[0].ethAddress).to.eq('0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb621');
        expect(allTellers[1].ethAddress).to.eq('0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb622');
      });

      it('should returns empty array if error', async () => {
        const stub = sinon.stub(amis.storageInstance, 'getAllTellers');

        let allTellers;

        stub.returns(null);
        allTellers = await amis.getAllTellers();
        expect(allTellers).to.deep.eq([]);

        stub.returns([]);
        allTellers = await amis.getAllTellers();
        expect(allTellers).to.deep.eq([]);

        stub.returns([null]);
        allTellers = await amis.getAllTellers();
        expect(allTellers).to.deep.eq([]);

        stub.restore();
      });

      it('should throw for one teller', async () => {
        const addr = '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb621';
        try {
          await amis.getAllTellers(addr);
          expect(false).to.be.true;
        } catch (e) {

        }
      });
    });

    describe('getTellersInZone', () => {
      it('should be a function', () => {
        expect(typeof amis.getTellersInZone).to.equal('function');
      });


      it('should get all tellers in zone', async () => {
        const stub = sinon.stub(amis, 'getTeller');

        stub.onCall(0).returns({ ethAddress: 'a', zoneId: 42 });
        stub.onCall(1).returns({ ethAddress: 'b', zoneId: 42 });
        stub.onCall(3).returns({ ethAddress: 'c', zoneId: 43 });

        const zone = 42;
        const allTellers = await amis.getTellersInZone(zone);
        expect(allTellers.length).to.eq(2);
        expect(allTellers[0].ethAddress).to.eq('a');
        expect(allTellers[1].ethAddress).to.eq('b');

        stub.restore();
      });

      it('should get all tellers in zone without duplicates', async () => {
        const stub = sinon.stub(amis, 'getTeller');

        stub.onCall(0).returns({ ethAddress: 'a', zoneId: 42 });
        stub.onCall(1).returns({ ethAddress: 'b', zoneId: 42 });
        stub.onCall(2).returns({ ethAddress: 'a', zoneId: 42 });

        const zone = 42;
        const allTellers = await amis.getTellersInZone(zone);
        expect(allTellers.length).to.eq(2);
        expect(allTellers[0].ethAddress).to.eq('a');
        expect(allTellers[1].ethAddress).to.eq('b');

        stub.restore();
      });

      it('should get all tellers in multiple zone', async () => {
        const stub = sinon.stub(amis, 'getTeller');

        stub.onCall(0).returns({ ethAddress: 'a', zoneId: 42 });
        stub.onCall(1).returns({ ethAddress: 'b', zoneId: 42 });
        stub.onCall(2).returns({ ethAddress: 'c', zoneId: 101 });
        stub.onCall(3).returns({ ethAddress: 'd', zoneId: 101 });
        stub.onCall(4).returns({ ethAddress: 'c', zoneId: 101 });
        stub.onCall(5).returns({ ethAddress: 'd', zoneId: 101 });
        stub.onCall(6).returns({ ethAddress: 'e', zoneId: 100 });
        stub.onCall(7).returns({ ethAddress: 'f', zoneId: 58 });

        const zones = [42, 101];
        const allTellers = await amis.getTellersInZone(zones);
        expect(allTellers.length).to.eq(4);
        expect(allTellers[0].ethAddress).to.eq('a');
        expect(allTellers[1].ethAddress).to.eq('b');
        expect(allTellers[2].ethAddress).to.eq('c');
        expect(allTellers[3].ethAddress).to.eq('d');
        stub.restore();
      });
    });
  });
});
