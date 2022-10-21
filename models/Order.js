const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
  userId: {
    type: String,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  orderTime: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = model("Order", OrderSchema);
