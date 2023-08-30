const { Pharmacy } = require("../models");

/**
 * Create pharmacy
 * @param {object} reqBody
 * @returns {Promise<Pharmacy>}
 */
const createPharmacy = async (reqBody) => {
  return Pharmacy.create(reqBody);
};

/**
 * Get pharmacy list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyList = async () => {
    return Pharmacy.find({$or : [{is_active: true}]})
};

/**
 * Get pharmacy details by id
 * @param {ObjectId} pharmacyId
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyById = async (pharmacyId) => {
  return Pharmacy.findById(pharmacyId);
};

/**
 * pharmacy details update by id
 * @param {ObjectId} pharmacyId
 * @param {object} updateBody
 * @returns {Promise<Pharmacy>}
 */
const updateDetails = async (pharmacyId, updateBody) => {
  return Pharmacy.findByIdAndUpdate(pharmacyId, { $set: updateBody });
};

/**
 * Delete pharmacy
 * @param {ObjectId} pharmacyId
 * @returns {Promise<Pharmacy>}
 */
const deletePharmacy = async (pharmacyId) => {
  return Pharmacy.findByIdAndDelete(pharmacyId);
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  getPharmacyById,
  updateDetails,
  deletePharmacy,
};
