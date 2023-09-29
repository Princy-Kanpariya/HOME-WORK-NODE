const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
    {
        team_name: {
            type: String,
            trim: true,
        },
        sport_type: {
            type: String,
            trim: true,
        },
        schedule: {
            type: String,
            trim: true,
        },
        established_year: {
            type: Number,
            trim: true
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

const Team = mongoose.model("team",teamSchema)

module.exports = Team

// coach_id number [ref: > coaches.coach_id]