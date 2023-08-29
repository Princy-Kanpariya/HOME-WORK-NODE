const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
    {
        hotel_branch_number: {
            type: Number,
            trim: true,
        },
        hotel_name: {
            type: String,
            trim: true,
        },
        hotel_location: {
            type: String,
            trim: true,
        },
        contact_number: {
            type: Number,
            trim: true,
        },
        room_types: {
            type: String,
            trim: true,
        },
        room_prices: {
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

const Hotel = mongoose.model("hotel", hotelSchema)

module.exports = Hotel