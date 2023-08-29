const Joi = require("joi");

// create stationary
const createStationary = {
    body: Joi.object().keys({
        item_id: Joi.number().integer().required(),
        item_name: Joi.string().required().trim(),
        item_price: Joi.number().integer().required(),
        item_stock: Joi.number().integer().required(),
        item_category: Joi.string().required().trim()
    }),
  };

// GEt stationary list
const getStationaryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get stationary details by id
const getDetails = {
    params: Joi.object().keys({
        stationaryId: Joi.string().required().trim(),
    }),
};

// stationary details update by id
const updateDetails = {
    params: Joi.object().keys({
        stationaryId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        stationary_name: Joi.string().trim()
    }),
};

module.exports = {
    createStationary,
    getDetails,
    getStationaryList,
    updateDetails,
};