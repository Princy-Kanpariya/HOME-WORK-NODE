const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
    {
        medacation_name: {
            type: String,
            trim: true,
        },
        dosage: {
            type: Number,
            trim: true,
        },
        mfg_date: {
            type: Number,
            trim: true,
        },
        exp_date: {
            type: Number,
            trim: true,
        },
        quntaty: {
            type: Number,
            trim: true,
        },
        allergies: {
            type: String,
            trim: true,
        },
        storage_condition: {
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

const Pharmacy = mongoose.model("pharmacy", pharmacySchema)

module.exports = Pharmacy