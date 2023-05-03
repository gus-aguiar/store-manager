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

const updateById = async (reqBody) => {
  const result = await salesModel.updateById(reqBody);
  const updateReturn = {
    id: result[0],
    itemsSold: result[1],

  };
  return { type: null, message: updateReturn };
};

const deleteById = async (id) => {
  const [result] = await salesModel.deleteById(id);
  console.log('result', result);
  if (result.affectedRows === 0) {
    return { type: 404, message: 'Sale not found' };
  }
  return { type: null };
};

module.exports = {
  getAllSales,
  getSaleById,
  deleteById,
  updateById,
};
