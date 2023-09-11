const { boolean } = require("joi");
const mongoose = require("mongoose");

const subchildcategorySchema = new mongoose.Schema(
    {
        subchildcategory_name: {
            type: String,
            trim: true,
        },
        subchildcategory_id: {
            type: Number,
            trim: true,
        },
        stock: {
            type: String,
            trim: true,
        },
        subchildcategory_desc: {
            type: String,
            trim: true,
        },
        subcategory: {
            type: mongoose.Types.ObjectId,
            ref: "subcategory"
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

const Subchildcategory = mongoose.model("subchildcategory", subchildcategorySchema)

module.exports = Subchildcategory