const express = require("express");
const { favListController } = require("../../controllers");

const router = express.Router();

/* Get all list */
router.get("/favlist", favListController.getAllList);

module.exports = router;