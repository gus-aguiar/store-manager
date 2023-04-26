const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
}

const getById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const product = await productService.getById(id);
  const { type, message } = await productService.getById(id)
  if (type) return res.status(type).json({ "message" : message });
  return res.status(200).json(message);
}

module.exports = {
  getAll,
  getById,
};

