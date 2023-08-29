const express = require("express");
const { musicValidation } = require("../../validations");
const { musicController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create music
router.post(
  "/create-music",
  validate(musicValidation.createMusic),
  musicController.createMusic
);

// Get music list
router.get(
  "/list",
  validate(musicValidation.getMusicList),
  musicController.getMusicList
);

// Get music details by id
router.get(
  "/get-details/:musicId",
  validate(musicValidation.getDetails),
  musicController.getMusicDetails
);

// music details update by id
router.put(
  "/update-details/:musicId",
  validate(musicValidation.updateDetails),
  musicController.updateDetails
);

// Delete music
router.delete(
  "/delete-music/:musicId",
  validate(musicValidation.getDetails),
  musicController.deleteMusic
);

module.exports = router;
