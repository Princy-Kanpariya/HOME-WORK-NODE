const Joi = require("joi");

// create hotel
const createHotel = {
    body: Joi.object().keys({
        hotel_branch_number: Joi.number().integer().required(),
        hotel_name: Joi.string().required().trim(),
        hotel_location: Joi.string().required().trim(),
        contact_number: Joi.number().integer().required(),
        room_types: Joi.string().required().trim(),
        room_prices: Joi.number().integer().required()
    }),
  };

// GEt hotel list
const getHotelList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get hotel details by id
const getDetails = {
    params: Joi.object().keys({
        hotelId: Joi.string().required().trim(),
    }),
};

// hotel details update by id
const updateDetails = {
    params: Joi.object().keys({
        hotelId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        hotel_name: Joi.string().trim()
    }),
};

module.exports = {
    createHotel,
    getDetails,
    getHotelList,
    updateDetails,
};