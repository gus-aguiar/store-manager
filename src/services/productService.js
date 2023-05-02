const productModel = require('../models/productModel');
const schema = require('./validations/validate');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

const insert = async (product) => {
  const error = schema.validateName(product);
  if (error.type) return error;
  const insertId = await productModel.insert(product);
  return { type: null, message: { ...product, id: insertId } };
};

const updateById = async (id, name) => {
  const error = schema.validateNamePut(name);
  if (error.type) return error;
  const [result] = await productModel.updateById(id, name);
  console.log('result', result);
  
  if (result.affectedRows === 0) {
    return { type: 404, message: 'Product not found' };
  } 
  return { type: null, message: { id, name } };
};

const deleteById = async (id) => {
  const [result] = await productModel.deleteById(id);
  console.log('result', result);
  if (result.affectedRows === 0) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null };
};

module.exports = {
  getAll,
  getById,
  insert,
  updateById,
  deleteById,
};
