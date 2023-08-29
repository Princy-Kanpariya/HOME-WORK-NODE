const express = require("express");
const { stationaryValidation } = require("../../validations");
const { stationaryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create stationary
router.post(
  "/create-stationary",
  validate(stationaryValidation.createStationary),
  stationaryController.createStationary
);

// Get stationary list
router.get(
  "/list",
  validate(stationaryValidation.getStationaryList),
  stationaryController.getStationaryList
);

// Get stationary details by id
router.get(
  "/get-details/:stationaryId",
  validate(stationaryValidation.getDetails),
  stationaryController.getStationaryDetails
);

// stationary details update by id
router.put(
  "/update-details/:stationaryId",
  validate(stationaryValidation.updateDetails),
  stationaryController.updateDetails
);

// Delete bus
router.delete(
  "/delete-stationary/:stationaryId",
  validate(stationaryValidation.getDetails),
  stationaryController.deleteStationary
);

module.exports = router;
