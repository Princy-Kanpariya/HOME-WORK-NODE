const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema(
    {
        Coach_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            trim: true,
        },
        teams_coached: {
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
        versionKey: false
    }
)

const Coach = mongoose.model("coach",coachSchema)

module.exports = Coach