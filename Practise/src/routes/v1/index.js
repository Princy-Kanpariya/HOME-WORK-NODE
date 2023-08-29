const express = require("express");
// const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const bookRoute = require("./book.route");
const busRoute = require("./bus.route");
const hotelRoute = require("./hotel.route");
const stationaryRoute = require("./stationary.route");
const schoolRoute = require("./school.route");
const travelRoute = require("./travel.route");
const pharmacyRoute = require("./pharmacy.route");
const jwelleryRoute = require("./jwellery.route");
const movieRoute = require("./movie.route");
const musicRoute = require("./music.route");
const groceryRoute = require("./grocery.route");


const router = express.Router();

// router.use("ex:/user", userRoute);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/book", bookRoute);
router.use("/bus", busRoute);
router.use("/hotel", hotelRoute);
router.use("/stationary", stationaryRoute);
router.use("/school", schoolRoute);
router.use("/travel", travelRoute);
router.use("/pharmacy", pharmacyRoute);
router.use("/jwellery", jwelleryRoute);
router.use("/movie", movieRoute);
router.use("/music", musicRoute);
router.use("/grocery", groceryRoute);


module.exports = router;
