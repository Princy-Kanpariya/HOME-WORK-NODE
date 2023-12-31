const express = require("express");
const { pharmacyValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create pharmacy
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);

// Get pharmacy list
router.get(
  "/list",
  validate(pharmacyValidation.getPharmacyList),
  pharmacyController.getPharmacyList
);

// Get pharmacy details by id
router.get(
  "/get-details/:pharmacyId",
  validate(pharmacyValidation.getDetails),
  pharmacyController.getPharmacyDetails
);

// pharmacy details update by id
router.put(
  "/update-details/:pharmacyId",
  validate(pharmacyValidation.updateDetails),
  pharmacyController.updateDetails
);

// Delete pharmacy
router.delete(
  "/delete-pharmacy/:pharmacyId",
  validate(pharmacyValidation.getDetails),
  pharmacyController.deletePharmacy
);

module.exports = router;
