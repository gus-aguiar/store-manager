const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const insert = async (req, res) => {
  const { type, message } = await productService.insert(req.body);

  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

module.exports = {
  insert,
  getAll,
  getById,
};
