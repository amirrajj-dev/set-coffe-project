const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    percent: {
      type: String,
      required: true,
    },
    maxUsage: {
      type: Number,
      required: true,
    },
    usage: {
      type: Number,
      required: true,
      default: 0,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "product",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const discountsModel =
  mongoose.models.discount || mongoose.model("discount", schema);

module.exports = discountsModel;
