const Joi = require("joi");

// create cart
const createCart = {
    body: Joi.object().keys({
        cart_id: Joi.number().integer().required(),
        status: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        total: Joi.number().integer().required(),
    }),
  };

// Get cart list
const getCartList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get cart details by id
const getDetails = {
    params: Joi.object().keys({
        cartId: Joi.string().required().trim(),
    }),
};

// cart details update by id
const updateDetails = {
    params: Joi.object().keys({
        cartId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        first_name: Joi.string().trim(),
        last_name: Joi.string().trim(),
    }),
};

module.exports = {
    createCart,
    getDetails,
    getCartList,
    updateDetails,
};