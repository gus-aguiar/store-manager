const productModel = require('../models/productModel');

const insertSaleValidation = async (req, res, next) => {
  const sale = req.body;
  const productId = sale.every((item) => item.productId);
  if (!productId) return res.status(400).json({ message: '"productId" is required' });
  const quantity = sale.every((item) => item.quantity !== undefined);
  if (!quantity) return res.status(400).json({ message: '"quantity" is required' });
  const quantityNumber = sale.every((item) => item.quantity > 0);
  if (!quantityNumber) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  const productExists = (await Promise
    .all(sale.map((item) => productModel
      .getById(item.productId))))
    .every((item) => item);  
  if (!productExists) return res.status(404).json({ message: 'Product not found' });
  return next();
};

module.exports = insertSaleValidation;
