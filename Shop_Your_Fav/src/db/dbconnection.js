const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
  mongoose
    .connect("mongodb+srv://princykanpariya321:Pks6B7lFYptuVCHU@princy.0ucw4un.mongodb.net/", config.mongodb.options)
    .then((data) => {
      console.log("Database connection successfully!");
    })
    .catch((error) => {
      console.log("Database connetion error: ", error);
    });
};

module.exports = { connectDB };