const Joi = require("joi");

// create book
const createBook = {
    body: Joi.object().keys({
      book_name: Joi.string().required().trim(),
      book_author: Joi.string().required().trim(),
      book_id: Joi.number().integer().required(),
    }),
  };

module.exports = {
    createBook
};