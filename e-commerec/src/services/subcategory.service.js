const { Subcategory } = require("../models");

/**
 * Create subcategory
 * @param {object} reqBody
 * @returns {Promise<Subcategory>}
 */
const createSubcategory = async (reqBody) => {
  return Subcategory.create(reqBody);
};

/**
 * Get subcategory list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Subcategory>}
 */
const getSubcategoryList = async () => {
  return Subcategory.find().populate("category");
};

/**
 * Get subcategory details by id
 * @param {ObjectId} subcategoryId
 * @returns {Promise<Subcategory>}
 */
const getSubcategoryById = async (subcategoryId) => {
  return Subcategory.findById(subcategoryId);
};

/**
 * subcategory details update by id
 * @param {ObjectId} subcategoryId
 * @param {object} updateBody
 * @returns {Promise<Subcategory>}
 */
const updateDetails = async (subcategoryId, updateBody) => {
  return Subcategory.findByIdAndUpdate(subcategoryId, { $set: updateBody });
};

/**
 * Delete subcategory
 * @param {ObjectId} subcategoryId
 * @returns {Promise<Subcategory>}
 */
const deleteSubcategory = async (subcategoryId) => {
  return Subcategory.findByIdAndDelete(subcategoryId);
};

module.exports = {
  createSubcategory,
  getSubcategoryList,
  getSubcategoryById,
  updateDetails,
  deleteSubcategory,
};
