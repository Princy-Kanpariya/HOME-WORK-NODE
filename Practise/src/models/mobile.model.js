const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
    {
        mobile_name: {
            type: String,
            trim: true,
        },
        brand: {
            type: String,
            trim: true,
        },
        model: {
            type: Number,
            trim: true,
        },
        color: {
            type: String,
            trim: true,
        },
        operating_system: {
            type: String,
            trim: true,
        },
        storage: {
            type: Number,
            trim: true,
        },
        processor: {
            type: String,
            trim: true,
        },
        ram: {
            type: Number,
            trim: true,
        },
        rom: {
            type: Number,
            trim: true,
        },
        battery_capacity: {
            type: Number,
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
        ratings: {
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

const Mobile = mongoose.model("mobile", mobileSchema)

module.exports = Mobile