const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.getAll();
  const salesReturn = sales.map((sale) => ({
    saleId: sale.id,
    date: sale.date,
    productId: sale.product_id,
    quantity: sale.quantity,
  }));

  return salesReturn;
};

const getSalleById = async (id) => {
  const product = await salesModel.getById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  getAllSales,
  getSalleById,
};
