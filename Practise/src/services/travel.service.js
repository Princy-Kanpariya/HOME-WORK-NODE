const { Travel } = require("../models");

/**
 * Create travel
 * @param {object} reqBody
 * @returns {Promise<Travel>}
 */
const createTravel = async (reqBody) => {
  return Travel.create(reqBody);
};

/**
 * Get travel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Travel>}
 */
const getTravelList = async () => {
    return Travel.find({$or : [{is_active: true}]})
};

/**
 * Get travel details by id
 * @param {ObjectId} travelId
 * @returns {Promise<Travel>}
 */
const getTravelById = async (travelId) => {
  return Travel.findById(travelId);
};

/**
 * travel details update by id
 * @param {ObjectId} travelId
 * @param {object} updateBody
 * @returns {Promise<Travel>}
 */
const updateDetails = async (travelId, updateBody) => {
  return Travel.findByIdAndUpdate(travelId, { $set: updateBody });
};

/**
 * Delete travel
 * @param {ObjectId} travelId
 * @returns {Promise<Travel>}
 */
const deleteTravel = async (travelId) => {
  return Travel.findByIdAndDelete(travelId);
};

module.exports = {
  createTravel,
  getTravelList,
  getTravelById,
  updateDetails,
  deleteTravel,
};
