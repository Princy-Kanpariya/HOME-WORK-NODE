const mongoose = require("mongoose");
const config = require("../config/config");

const stationarySchema = new mongoose.Schema(
    {
        item_id: {
            type: Number,
            trim: true,
        },
        item_name: {
            type: String,
            trim: true,
        },
        item_price: {
            type: Number,
            trim: true,
        },
        item_stock: {
            type: Number,
            trim: true,
        },
        item_category: {
            type: String,
            trim: true,
        },
        book: {
            type: mongoose.Types.ObjectId,
            ref: "book",
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

const Stationary = mongoose.model("stationary", stationarySchema)

module.exports = Stationary