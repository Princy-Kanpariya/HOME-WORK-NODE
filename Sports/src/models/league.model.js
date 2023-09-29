const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema(
  {
    league_name: {
      type: String,
      trim: true,
    },
    league_time: {
      type: Date,
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

const League = mongoose.model("league", leagueSchema);

module.exports = League
