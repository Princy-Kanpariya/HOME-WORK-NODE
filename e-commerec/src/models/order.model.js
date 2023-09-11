const { boolean } = require("joi");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        Order_id: {
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

const Order = mongoose.model("order", orderSchema)

module.exports = Order