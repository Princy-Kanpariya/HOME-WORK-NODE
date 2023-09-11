const { boolean } = require("joi");
const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
    {
        subcategory_name: {
            type: String,
            trim: true,
        },
        subcategory_id: {
            type: Number,
            trim: true,
        },
        stock: {
            type: String,
            trim: true,
        },
        subcategory_desc: {
            type: String,
            trim: true,
        },
        category : {
            type: mongoose.Types.ObjectId,
            ref: "category"
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

const Subcategory = mongoose.model("subcategory", subcategorySchema)

module.exports = Subcategory