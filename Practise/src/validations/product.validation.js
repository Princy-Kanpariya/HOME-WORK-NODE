const Joi = require("joi");

// create product
const createProduct = {
    body: Joi.object().keys({
      product_id: Joi.number().integer().required(),
      product_name: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createProduct
}