const express = require("express");
const { schoolValidation } = require("../../validations");
const { schoolController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create school
router.post(
  "/create-school",
  validate(schoolValidation.createSchool),
  schoolController.createSchool
);

// Get school list
router.get(
  "/list",
  validate(schoolValidation.getSchoolList),
  schoolController.getSchoolList
);

// Get school details by id
router.get(
  "/get-details/:schoolId",
  validate(schoolValidation.getDetails),
  schoolController.getSchoolDetails
);

// school details update by id
router.put(
  "/update-details/:schoolId",
  validate(schoolValidation.updateDetails),
  schoolController.updateDetails
);

// Delete school
router.delete(
  "/delete-school/:schoolId",
  validate(schoolValidation.getDetails),
  schoolController.deleteSchool
);

module.exports = router;
