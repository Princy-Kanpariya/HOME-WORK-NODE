const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
    {
        music_name: {
            type: String,
            trim: true,
        },
        artist_name: {
            type: String,
            trim: true,
        },
        duration: { //movie type
            type: Number,
            trim: true,
        },
        track_number: {
            type: Number,
            trim: true,
        },
        lyrics: {
            type: String,
            trim: true,
        },
        awards: {
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

const Music = mongoose.model("music", musicSchema)

module.exports = Music