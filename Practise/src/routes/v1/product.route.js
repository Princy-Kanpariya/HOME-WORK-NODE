const express = require("express");
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create product
router.post(
  "/create-product",
  validate(productValidation.createProduct),
  productController.createProduct
);

module.exports = router;
