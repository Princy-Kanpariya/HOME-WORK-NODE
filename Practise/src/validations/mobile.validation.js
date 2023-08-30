const Joi = require("joi");

// create mobile
const createMobile = {
    body: Joi.object().keys({
        mobile_name: Joi.string().required().trim(),
        brand: Joi.string().required().trim(),
        model: Joi.number().integer().required(),
        color: Joi.string().required().trim(),
        operating_system: Joi.string().required().trim(),
        storage: Joi.number().integer().required(),
        processor: Joi.string().required().trim(),
        ram: Joi.number().integer().required(),
        rom: Joi.number().integer().required(),
        battery_capacity: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
        stock: Joi.number().integer().required(),
        ratings: Joi.number().integer().required(),
    }),
  };

// GEt mobile list
const getMobileList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get mobile details by id
const getDetails = {
    params: Joi.object().keys({
        mobileId: Joi.string().required().trim(),
    }),
};

// mobile details update by id
const updateDetails = {
    params: Joi.object().keys({
        mobileId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        mobile_name: Joi.string().trim()
    }),
};

module.exports = {
    createMobile,
    getDetails,
    getMobileList,
    updateDetails,
};