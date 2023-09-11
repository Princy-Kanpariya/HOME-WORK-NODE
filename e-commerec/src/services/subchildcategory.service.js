const { Subchildcategory } = require("../models");

/**
 * Create subchildcategory
 * @param {object} reqBody
 * @returns {Promise<Subchildcategory>}
 */
const createSubchildcategory = async (reqBody) => {
  return Subchildcategory.create(reqBody);
};

/**
 * Get subchildcategory list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Subchildcategory>}
 */
const getSubchildcategoryList = async () => {
  return Subchildcategory.find().populate("subcategory");
};

/**
 * Get subchildcategory details by id
 * @param {ObjectId} subchildcategoryId
 * @returns {Promise<Subchildcategory>}
 */
const getSubchildcategoryById = async (subchildcategoryId) => {
  return Subchildcategory.findById(subchildcategoryId);
};

/**
 * subchildcategory details update by id
 * @param {ObjectId} subchildcategoryId
 * @param {object} updateBody
 * @returns {Promise<Subchildcategory>}
 */
const updateDetails = async (subchildcategoryId, updateBody) => {
  return Subchildcategory.findByIdAndUpdate(subchildcategoryId, { $set: updateBody });
};

/**
 * Delete subchildcategory
 * @param {ObjectId} subchildcategoryId
 * @returns {Promise<Subchildcategory>}
 */
const deleteSubchildcategory = async (subchildcategoryId) => {
  return Subchildcategory.findByIdAndDelete(subchildcategoryId);
};

module.exports = {
  createSubchildcategory,
  getSubchildcategoryList,
  getSubchildcategoryById,
  updateDetails,
  deleteSubchildcategory,
};
