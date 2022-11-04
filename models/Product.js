const { Schema, model } = require("mongoose");
const User = require("./User");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  garnish: {
    type: Array,
    required: false,
    default: null,
  },
  of: {
    type: Array,
    required: false,
    default: null,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  activeDay: {
    type: Boolean,
    required: false,
    default: false,
  },
});

module.exports = model("Product", ProductSchema);
