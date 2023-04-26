const productModel = require('../models/productModel');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  getAll,
  getById,
};
