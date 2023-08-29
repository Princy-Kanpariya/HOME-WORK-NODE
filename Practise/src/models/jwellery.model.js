const mongoose = require("mongoose");

const jwellerySchema = new mongoose.Schema(
    {
        item_name: {
            type: String,
            trim: true,
        },
        item_type: {
            type: String,
            trim: true,
        },
        material: {
            type: String,
            trim: true,
        },
        metal_purity: {
            type: Number,
            trim: true,
        },
        weight: {
            type: Number,
            trim: true,
        },
        stock: {
            type: Number,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        cost: {
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

const Jwellery = mongoose.model("jwellery", jwellerySchema)

module.exports = Jwellery