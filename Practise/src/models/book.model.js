const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
        },
        book_author: {
            type: String,
            trim: true,
        },
        book_id: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Book = mongoose.model("book",bookSchema)

module.exports = Book