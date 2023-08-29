const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        school_name: {
            type: String,
            trim: true,
        },
        register_number: {
            type: Number,
            trim: true,
        },
        school_location: {
            type: String,
            trim: true,
        },
        contact_number: {
            type: Number,
            trim: true,
        },
        course_info: {
            type: String,
            trim: true,
        },
        terms_and_policy: {
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

const School = mongoose.model("school", schoolSchema)

module.exports = School