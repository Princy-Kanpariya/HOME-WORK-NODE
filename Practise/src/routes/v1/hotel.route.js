const express = require("express");
const { hotelValidation } = require("../../validations");
const { hotelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create hotel
router.post(
  "/create-hotel",
  validate(hotelValidation.createHotel),
  hotelController.createHotel
);

// Get hotel list
router.get(
  "/list",
  validate(hotelValidation.getHotelList),
  hotelController.getHotelList
);

// Get hotel details by id
router.get(
  "/get-details/:hotelId",
  validate(hotelValidation.getDetails),
  hotelController.getHotelDetails
);

// hotel details update by id
router.put(
  "/update-details/:hotelId",
  validate(hotelValidation.updateDetails),
  hotelController.updateDetails
);

// Delete bus
router.delete(
  "/delete-hotel/:hotelId",
  validate(hotelValidation.getDetails),
  hotelController.deleteHotel
);

module.exports = router;
