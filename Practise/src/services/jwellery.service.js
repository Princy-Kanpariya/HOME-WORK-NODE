const { Jwellery } = require("../models");

/**
 * Create jwellery
 * @param {object} reqBody
 * @returns {Promise<Jwellery>}
 */
const createJwellery = async (reqBody) => {
  return Jwellery.create(reqBody);
};

/**
 * Get jwellery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Jwellery>}
 */
const getJwelleryList = async () => {
    return Jwellery.find({$or : [{is_active: true}]})
};

/**
 * Get jwellery details by id
 * @param {ObjectId} jwelleryId
 * @returns {Promise<Jwellery>}
 */
const getJwelleryById = async (jwelleryId) => {
  return Jwellery.findById(jwelleryId);
};

/**
 * jwellery details update by id
 * @param {ObjectId} jwelleryId
 * @param {object} updateBody
 * @returns {Promise<Jwellery>}
 */
const updateDetails = async (jwelleryId, updateBody) => {
  return Jwellery.findByIdAndUpdate(jwelleryId, { $set: updateBody });
};

/**
 * Delete jwellery
 * @param {ObjectId} jwelleryId
 * @returns {Promise<Jwellery>}
 */
const deleteJwellery = async (jwelleryId) => {
  return Jwellery.findByIdAndDelete(jwelleryId);
};

module.exports = {
  createJwellery,
  getJwelleryList,
  getJwelleryById,
  updateDetails,
  deleteJwellery,
};
