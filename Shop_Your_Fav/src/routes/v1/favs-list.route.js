const express = require("express");
const { favListController } = require("../../controllers");

const router = express.Router();

/* Get all list */
router.get("/all-list", favListController.getAllList);

module.exports = router;