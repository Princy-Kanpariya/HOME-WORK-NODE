const { boolean } = require("joi");
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        cart_id: {
            type: Number,
            trim: true,
        },
        status: {
            type: boolean,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        total: {
            type: Number,
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

const Cart = mongoose.model("cart", cartSchema)

module.exports = Cart