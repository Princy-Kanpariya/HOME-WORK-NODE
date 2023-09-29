const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
    {
        player_name: {
            type: String,
            trim: true,
        },
        age: {
            type: Number,
            trim: true,
        },
        role: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true
        },
        injuries: {
            type: String,
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

const Player = mongoose.model("player",playerSchema)

module.exports = Player

//   team_id number [ref: > teams.team_id]