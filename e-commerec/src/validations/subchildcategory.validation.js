const Joi = require("joi");

// create subchildcategory
const createSubchildcategory = {
    body: Joi.object().keys({
      subchildcategory_name: Joi.string().required().trim(),
      subchildcategory_id: Joi.number().integer().required(),
      status: Joi.string().required().trim(),
      subchildcategory_desc: Joi.string().required().trim(),
    }),
  };
// Get subchildcategory list
const getSubchildcategoryList = {
  query: Joi.object().keys({
      search: Joi.string().trim().allow(""),
      sortBy: Joi.string().trim().allow(""),
      limit: Joi.number().integer().allow(""),
      page: Joi.number().integer().allow(""),
  }),
};

// Get subchildcategory details by id
const getDetails = {
  params: Joi.object().keys({
      subchildcategoryId: Joi.string().required().trim(),
  }),
};

// subchildcategory details update by id
const updateDetails = {
  params: Joi.object().keys({
      subchildcategoryId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
      first_name: Joi.string().trim(),
      last_name: Joi.string().trim(),
  }),
};

module.exports = {
  createSubchildcategory,
  getDetails,
  getSubchildcategoryList,
  updateDetails,
};