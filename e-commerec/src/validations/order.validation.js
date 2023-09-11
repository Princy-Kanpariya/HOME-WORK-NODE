const Joi = require("joi");

// create order
const createOrder = {
    body: Joi.object().keys({
        Order_id: Joi.number().integer().required(),
        status: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        total: Joi.number().integer().required(),
    }),
  };

// Get order list
const getOrderList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get order details by id
const getDetails = {
    params: Joi.object().keys({
        orderId: Joi.string().required().trim(),
    }),
};

// order details update by id
const updateDetails = {
    params: Joi.object().keys({
        orderId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        first_name: Joi.string().trim(),
        last_name: Joi.string().trim(),
    }),
};

module.exports = {
    createOrder,
    getDetails,
    getOrderList,
    updateDetails,
};