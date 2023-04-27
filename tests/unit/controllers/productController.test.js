const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');

chai.use(sinonChai);

const { expect } = chai;

const productController = require('../../../src/controllers/productController')
const productService = require('../../../src/services/productService');
const { mockGetAllProducts, mockGetProductById, allProductsResponse, } = require('./mocks/productControllerMocks');


describe('Testa o controller de produtos', () => {
  describe('Testes de sucesso', () => {
    afterEach(() => sinon.restore());
    it('getAll', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productService, 'getAll')
        .resolves(allProductsResponse);

      await productController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProductsResponse);
    });
    }
    );

  it('getById', async () => {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'getById')
      .resolves({ type: null, message: { "id": 1, "name": "Martelo de Thor" } });

    await productController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ "id": 1, "name": "Martelo de Thor" });
  });
  });
// });
