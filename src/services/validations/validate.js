const { productSchema } = require('./schemas');

const validateName = (product) => {
  if (!product.name) return { type: 400, message: '"name" is required' };

  const { error } = productSchema.validate(product);

  if (error) {
 return { type: 422, message: '"name" length must be at least 5 characters long' };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateName,
};