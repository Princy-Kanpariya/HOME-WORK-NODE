const Joi = require("joi");

// create music
const createMusic = {
    body: Joi.object().keys({
        music_name: Joi.string().required().trim(),
        artist_name: Joi.string().required().trim(),
        duration: Joi.number().integer().required(),
        track_number: Joi.number().integer().required(),
        lyrics: Joi.string().required().trim(),
        awards: Joi.number().integer().required()
    }),
  };

// GEt music list
const getMusicList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow(""),
    }),
};

// Get music details by id
const getDetails = {
    params: Joi.object().keys({
        musicId: Joi.string().required().trim(),
    }),
};

// music details update by id
const updateDetails = {
    params: Joi.object().keys({
        musicId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        music_name: Joi.string().trim()
    }),
};

module.exports = {
    createMusic,
    getDetails,
    getMusicList,
    updateDetails,
};