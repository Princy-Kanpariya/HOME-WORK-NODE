const mongoose = require("mongoose")
const config = require("../config/config");

const productSchema = new mongoose.Schema(
    {
        product_id: {
            type: Number,
            trim: true,
        },
        product_name: {
            type: String,
            trim: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        is_active: {
            type: Boolean,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Product = mongoose.model("product",productSchema)

module.exports = Product