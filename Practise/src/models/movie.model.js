const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        movie_name: {
            type: String,
            trim: true,
        },
        title: {
            type: String,
            trim: true,
        },
        genre: { //movie type
            type: String,
            trim: true,
        },
        rating: {
            type: Number,
            trim: true,
        },
        production_studio: {
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

const Movie = mongoose.model("movie", movieSchema)

module.exports = Movie