const { School } = require("../models");

/**
 * Create school
 * @param {object} reqBody
 * @returns {Promise<School>}
 */
const createSchool = async (reqBody) => {
  return School.create(reqBody);
};

/**
 * Get school list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<School>}
 */
const getSchoolList = async () => {
    return School.find({$or : [{is_active: true}]})
};

/**
 * Get school details by id
 * @param {ObjectId} schoolId
 * @returns {Promise<School>}
 */
const getSchoolById = async (schoolId) => {
  return School.findById(schoolId);
};

/**
 * school details update by id
 * @param {ObjectId} schoolId
 * @param {object} updateBody
 * @returns {Promise<School>}
 */
const updateDetails = async (schoolId, updateBody) => {
  return School.findByIdAndUpdate(schoolId, { $set: updateBody });
};

/**
 * Delete school
 * @param {ObjectId} schoolId
 * @returns {Promise<School>}
 */
const deleteSchool = async (schoolId) => {
  return School.findByIdAndDelete(schoolId);
};

module.exports = {
  createSchool,
  getSchoolList,
  getSchoolById,
  updateDetails,
  deleteSchool,
};
