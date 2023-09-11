const { Product } = require("../models");

/**
 * Create product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/**
 * Get product list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Product>}
 */
const getProductList = async () => {
  return Product.find({$or : [{is_active: true}]})
};

/**
 * Get product details by id
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const getProductById = async (productId) => {
  return Product.findById(productId);
};

/**
 * product details update by id
 * @param {ObjectId} productId
 * @param {object} updateBody
 * @returns {Promise<Product>}
 */
const updateDetails = async (productId, updateBody) => {
  return Product.findByIdAndUpdate(productId, { $set: updateBody });
};

/**
 * Delete product
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateDetails,
  deleteProduct,
};
