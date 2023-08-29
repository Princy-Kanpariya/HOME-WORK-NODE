const express = require("express");
const { groceryValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create grocery
router.post(
  "/create-grocery",
  validate(groceryValidation.createGrocery),
  groceryController.createGrocery
);

// Get grocery list
router.get(
  "/list",
  validate(groceryValidation.getGroceryList),
  groceryController.getGroceryList
);

// Get grocery details by id
router.get(
  "/get-details/:groceryId",
  validate(groceryValidation.getDetails),
  groceryController.getGroceryDetails
);

// grocery details update by id
router.put(
  "/update-details/:groceryId",
  validate(groceryValidation.updateDetails),
  groceryController.updateDetails
);

// Delete grocery
router.delete(
  "/delete-grocery/:groceryId",
  validate(groceryValidation.getDetails),
  groceryController.deleteGrocery
);

module.exports = router;
