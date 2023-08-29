const { Movie } = require("../models");

/**
 * Create movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const createMovie = async (reqBody) => {
  return Movie.create(reqBody);
};

/**
 * Get movie list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Movie>}
 */
const getMovieList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Movie.find(filter).skip(skip).limit(options.limit).select("-password");
    // return Movie.find({$or : [{is_active: true}]})
};

/**
 * Get movie details by id
 * @param {ObjectId} movieId
 * @returns {Promise<Movie>}
 */
const getMovieById = async (movieId) => {
  return Movie.findById(movieId);
};

/**
 * movie details update by id
 * @param {ObjectId} movieId
 * @param {object} updateBody
 * @returns {Promise<Movie>}
 */
const updateDetails = async (movieId, updateBody) => {
  return Movie.findByIdAndUpdate(movieId, { $set: updateBody });
};

/**
 * Delete movie
 * @param {ObjectId} movieId
 * @returns {Promise<Movie>}
 */
const deleteMovie = async (movieId) => {
  return Movie.findByIdAndDelete(movieId);
};

module.exports = {
  createMovie,
  getMovieList,
  getMovieById,
  updateDetails,
  deleteMovie,
};
