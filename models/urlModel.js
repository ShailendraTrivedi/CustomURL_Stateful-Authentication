const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema(
  {
    timeStamp: { type: Number },
    ipAddress: { type: String },
  },
  { _id: false }
);

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    visitHistory: [visitSchema],
  },
  { timestamps: true }
);

const urlModel = mongoose.model("Url", urlSchema);

module.exports = urlModel;
