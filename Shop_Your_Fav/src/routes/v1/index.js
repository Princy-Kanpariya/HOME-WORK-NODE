const express = require("express");

const userRoute = require("./user.route");
const productRoute = require("./product.route");
const categoryRoute = require("./category.route");
const favslistroute = require("./favslist.route");

const router = express.Router();

// router.use("ex:/user", userRoute);
router.use("/user", userRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);
router.use("/favslist", favslistroute);

module.exports = router;