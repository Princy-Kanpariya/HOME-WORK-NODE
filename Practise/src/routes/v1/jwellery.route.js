const express = require("express");
const { jwelleryValidation } = require("../../validations");
const { jwelleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create jwellery
router.post(
  "/create-jwellery",
  validate(jwelleryValidation.createJwellery),
  jwelleryController.createJwellery
);

// Get jwellery list
router.get(
  "/list",
  validate(jwelleryValidation.getJwelleryList),
  jwelleryController.getJwelleryList
);

// Get jwellery details by id
router.get(
  "/get-details/:jwelleryId",
  validate(jwelleryValidation.getDetails),
  jwelleryController.getJwelleryDetails
);

// jwellery details update by id
router.put(
  "/update-details/:jwelleryId",
  validate(jwelleryValidation.updateDetails),
  jwelleryController.updateDetails
);

// Delete jwellery
router.delete(
  "/delete-jwellery/:jwelleryId",
  validate(jwelleryValidation.getDetails),
  jwelleryController.deleteJwellery
);

module.exports = router;
