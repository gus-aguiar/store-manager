const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  const salesReturn = sales.map((sale) => ({
    saleId: sale.id,
    date: sale.date,
    productId: sale.product_id,
    quantity: sale.quantity,
  }));

  return salesReturn;
};

const getSaleById = async (id) => {
  const sales = await salesModel.getSaleById(id);
  const salesReturn = sales.map((sale) => ({
    date: sale.date,
    productId: sale.product_id,
    quantity: sale.quantity,
  }));
  if (sales.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: salesReturn };
};

module.exports = {
  getAllSales,
  getSaleById,
};
