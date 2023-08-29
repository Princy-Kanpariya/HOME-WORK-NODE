const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
    {
        bus_name: {
            type: String,
            trim: true,
        },
        bus_plate_number: {
            type: Number,
            trim: true,
        },
        bus_type: {
            type: String,
            trim: true,
        },
        bus_departure: {
            type: String, // Time(moment)
            // default: null,
            trim: true,
        },
        bus_arrival: {
            type: String, // Time(moment)
            // default: null,
            trim: true,
        },
        bus_route: {
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

const Bus = mongoose.model("bus", busSchema)

module.exports = Bus