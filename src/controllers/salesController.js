const salesService = require('../services/salesService');

const getAllSales = async (_req, res) => {
  const products = await salesService.getAll();
  return res.status(200).json(products);
};

const getSalleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getAllSales,
  getSalleById,
};