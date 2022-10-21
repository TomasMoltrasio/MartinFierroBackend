const orderController = {};

const Order = require("../models/Order.js");

orderController.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders) {
      return res.status(400).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

orderController.createOrder = async (req, res) => {
  try {
    const { userId, products, orderTime, address, phone } = req.body;
    const total = products.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    );
    const newOrder = new Order({
      userId,
      products,
      total,
      orderTime,
      address,
      phone,
    });
    const orderSaved = await newOrder.save();
    res.status(201).json(orderSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

orderController.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

orderController.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id });
    if (!orders) {
      return res.status(400).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

orderController.getOrdersOfTheDay = async (req, res) => {
  try {
    const orders = await Order.find({
      date: { $gte: new Date().setHours(0, 0, 0, 0) },
    });
    if (!orders) {
      return res.status(400).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

orderController.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

orderController.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

orderController.deletePastOrders = async (req, res) => {
  try {
    const orders = await Order.deleteMany({
      date: { $lt: new Date().setHours(0, 0, 0, 0) },
    });
    if (!orders) {
      return res.status(400).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = orderController;
