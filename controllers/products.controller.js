const productsController = {};

const Product = require("../models/Product.js");

productsController.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

productsController.createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image || "",
    of: req.body.of || "",
    garnish: req.body.garnish || "",
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

productsController.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

productsController.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

productsController.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      res.status(404).json({
        message: "Cannot find product",
      });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

productsController.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({
        message: "Cannot find product",
      });
    }
    res.json({
      message: "Deleted product",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = productsController;
