const Joi = require("joi");

// create jwellery
const createJwellery = {
    body: Joi.object().keys({
        item_name: Joi.string().required().trim(),
        item_type: Joi.string().required().trim(),
        material: Joi.string().required().trim(),
        metal_purity: Joi.number().integer().required(),
        weight: Joi.number().integer().required(),
        stock: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
        cost: Joi.number().integer().required()
    }),
  };

// GEt jwellery list
const getJwelleryyList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get jwellery details by id
const getDetails = {
    params: Joi.object().keys({
        jwelleryId: Joi.string().required().trim(),
    }),
};

// jwellery details update by id
const updateDetails = {
    params: Joi.object().keys({
        jwelleryId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        jwellery_name: Joi.string().trim()
    }),
};

module.exports = {
    createJwellery,
    getDetails,
    getJwelleryyList,
    updateDetails,
};