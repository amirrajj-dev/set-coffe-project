const mongoose = require("mongoose");
import commentsModel from "./comment";
import discountsModel from "./discount";
const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  longDesc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  suitableFor: {
    type: String,
    required: false,
  },
  feverAmount: {
    type: String,
    required: false,
  },
  score: {
    type: Number,
    required: true,
    default: 5,
    min: 0,
    max: 5,
  },
  scoreYouGet: {
    type: Number,
    required: true,
  },
  comments: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  tags: {
    type: [String],
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  discountId: {
    type: mongoose.Types.ObjectId,
    ref: "discount",
    required: false,
  },
});

const productsModel =
  mongoose.models.product || mongoose.model("product", schema);

export default productsModel;
