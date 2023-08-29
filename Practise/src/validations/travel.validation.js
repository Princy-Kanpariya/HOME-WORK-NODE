const Joi = require("joi");

// create travel
const createTravel = {
    body: Joi.object().keys({
        destination: Joi.string().required().trim(),
        departure_date: Joi.string().required().trim(),
        arrival_date: Joi.string().required().trim(),
        contact_number: Joi.number().integer().required(),
        prices: Joi.number().integer().required(),
        transportation: Joi.string().required().trim()
    }),
  };

// GEt travel list
const getTravelList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get travel details by id
const getDetails = {
    params: Joi.object().keys({
        travelId: Joi.string().required().trim(),
    }),
};

// travel details update by id
const updateDetails = {
    params: Joi.object().keys({
        travelId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        travel_name: Joi.string().trim()
    }),
};

module.exports = {
    createTravel,
    getDetails,
    getTravelList,
    updateDetails,
};