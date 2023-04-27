const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');
const { products } = require('./mocks/productModelMocks');


describe('Testa os models de produtos', function () {
  it('getAll', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productModel.getAll();
    expect(result).to.be.deep.equal(products);
  });

  it('getById', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productModel.getById(1);
    expect(result).to.be.deep.equal(products[0]);
  });

  it('insert', async function () {
    const insertId = 1;
    sinon.stub(connection, 'execute').resolves([{ insertId }]);
    const result = await productModel.insert(products[0]);
    expect(result).to.be.equal(insertId);
  });


  afterEach(function () {
    sinon.restore();
  });
});