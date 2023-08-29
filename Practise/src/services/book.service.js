const { Book } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

module.exports = {
    createBook,
  };