const { expect } = require('chai');
const sinon = require('sinon');

const productService = require('../../../src/services/productService');
const productModel = require('../../../src/models/productModel');
const { getalAllProductsMockService, product } = require('../../unit/services/mocks/productServiceMocks');


describe('Testa o service de produtos', () => {
  describe('Testes de sucesso', () => {
    afterEach(() => sinon.restore());
    it('getAll', async () => {
      sinon.stub(productModel, 'getAll').returns(getalAllProductsMockService);

      const result = await productService.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(3);
     
    });

    it('getById', async () => {

      sinon.stub(productModel, 'getById').resolves(product);

      const result = await productService.getById(1);

      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.deep.equal(product);

    });

    it('insert', async () => {
      const insertId = 1;
      sinon.stub(productModel, 'insert').resolves(insertId);

      const result = await productService.insert(product);

      expect(result).to.be.an('object');
    });
  });
});

