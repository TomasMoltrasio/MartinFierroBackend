const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
    required: true,
    default: ["papas", "ensalada"],
  },
  of: {
    type: Array,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = model("Product", ProductSchema);
