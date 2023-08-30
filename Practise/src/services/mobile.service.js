const { Mobile } = require("../models");

/**
 * Create mobile
 * @param {object} reqBody
 * @returns {Promise<Mobile>}
 */
const createMobile = async (reqBody) => {
  return Mobile.create(reqBody);
};

/**
 * Get mobile list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Mobile>}
 */
const getMobileList = async () => {
    return Mobile.find({$or : [{is_active: true}]})
};

/**
 * Get mobile details by id
 * @param {ObjectId} mobileId
 * @returns {Promise<Mobile>}
 */
const getMobileById = async (mobileId) => {
  return Mobile.findById(mobileId);
};

/**
 * mobile details update by id
 * @param {ObjectId} mobileId
 * @param {object} updateBody
 * @returns {Promise<Mobile>}
 */
const updateDetails = async (mobileId, updateBody) => {
  return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

/**
 * Delete mobile
 * @param {ObjectId} mobileId
 * @returns {Promise<Mobile>}
 */
const deleteMobile = async (mobileId) => {
  return Mobile.findByIdAndDelete(mobileId);
};

module.exports = {
  createMobile,
  getMobileList,
  getMobileById,
  updateDetails,
  deleteMobile,
};
