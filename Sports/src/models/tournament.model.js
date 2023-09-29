const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
  {
    tournament_name: {
      type: String,
      trim: true,
    },
    tournament_date: {
      type: Date,
    },
    orgainzation: {
      type: String,
      trim: true,
    },
    team: {
      type: mongoose.Types.ObjectId,
      ref: "team",
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

const Tournament = mongoose.model("tournament", tournamentSchema);

module.exports = Tournament;
