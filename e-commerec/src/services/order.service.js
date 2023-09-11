const { Order } = require("../models");

/**
 * Create order
 * @param {object} reqBody
 * @returns {Promise<Order>}
 */
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

/**
 * Get order list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Order>}
 */
const getOrderList = async () => {
  return Order.find({$or : [{is_active: true}]})
};

/**
 * Get order details by id
 * @param {ObjectId} orderId
 * @returns {Promise<Order>}
 */
const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};

/**
 * order details update by id
 * @param {ObjectId} orderId
 * @param {object} updateBody
 * @returns {Promise<Order>}
 */
const updateDetails = async (orderId, updateBody) => {
  return Order.findByIdAndUpdate(orderId, { $set: updateBody });
};

/**
 * Delete order
 * @param {ObjectId} orderId
 * @returns {Promise<Order>}
 */
const deleteOrder = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  updateDetails,
  deleteOrder,
};
