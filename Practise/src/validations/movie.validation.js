const Joi = require("joi");

// create movie
const createMovie = {
    body: Joi.object().keys({
        movie_name: Joi.string().required().trim(),
        title: Joi.string().required().trim(),
        genre: Joi.string().required().trim(),
        rating: Joi.number().integer().required(),
        production_studio: Joi.string().required().trim(),
        awards: Joi.number().integer().required()
    }),
  };

// GEt movie list
const getMovieList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get movie details by id
const getDetails = {
    params: Joi.object().keys({
        movieId: Joi.string().required().trim(),
    }),
};

// movie details update by id
const updateDetails = {
    params: Joi.object().keys({
        movieId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        movie_name: Joi.string().trim()
    }),
};

module.exports = {
    createMovie,
    getDetails,
    getMovieList,
    updateDetails,
};