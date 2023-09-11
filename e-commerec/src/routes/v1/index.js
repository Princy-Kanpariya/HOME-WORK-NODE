const express = require("express");

const userRoute = require("./user.route");
const productRoute = require("./product.route");
const categoryRoute = require("./category.route");
const subcategoryRoute = require("./subcategory.route");
const subchildcategoryRoute = require("./subchildcategory.route");
const orderRoute = require("./order.route");
const cartRoute = require("./cart.route");

const router = express.Router();

// router.use("ex:/user", userRoute);
router.use("/user", userRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);
router.use("/subcategory", subcategoryRoute);
router.use("/subchildcategory", subchildcategoryRoute);
router.use("/cart", cartRoute);
router.use("/order", orderRoute);

module.exports = router;