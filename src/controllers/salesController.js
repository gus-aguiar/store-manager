const salesService = require('../services/salesService');

const getAllSales = async (_req, res) => {
  const products = await salesService.getAllSales();
  return res.status(200).json(products);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteById(id);
  if (type) return res.status(type).json({ message });
  res.status(204).json('');
};

module.exports = {
  getAllSales,
  getSaleById,
  deleteById,
};