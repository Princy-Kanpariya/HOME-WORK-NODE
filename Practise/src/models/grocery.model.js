const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        brand: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            trim: true,
        },
        quantity: {
            type: Number,
            trim: true,
        },
        quality: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        stock: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Grocery = mongoose.model("grocery", grocerySchema)

module.exports = Grocery