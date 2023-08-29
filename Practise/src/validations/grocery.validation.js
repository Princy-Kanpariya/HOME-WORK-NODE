const Joi = require("joi");

// create grocery
const createGrocery = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        brand: Joi.string().required().trim(),
        category: Joi.string().required().trim(),
        quantity: Joi.number().integer().required(),
        quality: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        stock: Joi.number().integer().required(),
    }),
  };

// GEt grocery list
const getGroceryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get grocery details by id
const getDetails = {
    params: Joi.object().keys({
        groceryId: Joi.string().required().trim(),
    }),
};

// grocery details update by id
const updateDetails = {
    params: Joi.object().keys({
        groceryId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        grocery_name: Joi.string().trim()
    }),
};

module.exports = {
    createGrocery,
    getDetails,
    getGroceryList,
    updateDetails,
};