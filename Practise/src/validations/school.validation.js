const Joi = require("joi");

// create school
const createSchool = {
    body: Joi.object().keys({
        school_name: Joi.string().required().trim(),
        register_number: Joi.number().integer().required(),
        school_location: Joi.string().required().trim(),
        contact_number: Joi.number().integer().required(),
        course_info: Joi.string().required().trim(),
        terms_and_policy: Joi.string().required().trim()
    }),
  };

// GEt school list
const getSchoolList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get school details by id
const getDetails = {
    params: Joi.object().keys({
        schoolId: Joi.string().required().trim(),
    }),
};

// school details update by id
const updateDetails = {
    params: Joi.object().keys({
        schoolId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        school_name: Joi.string().trim()
    }),
};

module.exports = {
    createSchool,
    getDetails,
    getSchoolList,
    updateDetails,
};