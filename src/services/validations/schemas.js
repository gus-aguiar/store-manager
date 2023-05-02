const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const productNameSchema = Joi.string().min(5).required();

module.exports = {
  productSchema,
  productNameSchema,
};