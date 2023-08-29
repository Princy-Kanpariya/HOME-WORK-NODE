const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create book
router.post(
  "/create-book",
  validate(bookValidation.createBook),
  bookController.createBook
);

module.exports = router;
