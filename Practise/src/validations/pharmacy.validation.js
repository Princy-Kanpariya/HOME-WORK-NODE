const Joi = require("joi");

// create pharmacy
const createPharmacy = {
    body: Joi.object().keys({
        medacation_name: Joi.string().required().trim(),
        dosage: Joi.number().integer().required(),
        mfg_date: Joi.number().integer().required(),
        exp_date: Joi.number().integer().required(),
        quntaty: Joi.number().integer().required(),
        allergies: Joi.string().required().trim(),
        storage_condition: Joi.string().required().trim()
    }),
  };

// GEt pharmacy list
const getPharmacyList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get pharmacy details by id
const getDetails = {
    params: Joi.object().keys({
        pharmacyId: Joi.string().required().trim(),
    }),
};

// pharmacy details update by id
const updateDetails = {
    params: Joi.object().keys({
        pharmacyId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        pharmacy_name: Joi.string().trim()
    }),
};

module.exports = {
    createPharmacy,
    getDetails,
    getPharmacyList,
    updateDetails,
};