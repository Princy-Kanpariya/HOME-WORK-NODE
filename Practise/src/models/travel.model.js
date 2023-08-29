const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
    {
        destination: {
            type: String,
            trim: true,
        },
        departure_date: {
            type: String, // // date
            // default: null,
            trim: true,
        },
        arrival_date: {
            type: String, // // date
            // default: null,
            trim: true,
        },
        contact_number: {
            type: Number,
            trim: true,
        },
        prices: {
            type: Number,
            trim: true,
        },
        transportation: {
            type: String,
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

const Travel = mongoose.model("travle", travelSchema)

module.exports = Travel