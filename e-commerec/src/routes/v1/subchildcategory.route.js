const express = require("express");
const { subchildcategoryValidation } = require("../../validations");
const { subchildcategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create subchildcategory
router.post(
  "/create-subchildcategory",
  validate(subchildcategoryValidation.createsubchildCategory),
  subchildcategoryController.createsubchildCategory
);

// Get subchildcategory list
router.get(
  "/list",
  validate(subchildcategoryValidation.getsubchildCategoryList),
  subchildcategoryController.getsubchildCategoryList
);

// Get subchildcategory details by id
router.get(
  "/get-details/:subchildcategoryId",
  validate(subchildcategoryValidation.getDetails),
  subchildcategoryController.getsubchildCategoryDetails
);

// subchildcategory details update by id
router.put(
  "/update-details/:subchildcategoryId",
  validate(subchildcategoryValidation.updateDetails),
  subchildcategoryController.updateDetails
);

// Delete subchildcategory
router.delete(
  "/delete-subchildcategory/:subchildcategoryId",
  validate(subchildcategoryValidation.getDetails),
  subchildcategoryController.deletesubchildCategory
);
module.exports = router;
