const { Router } = require("express");
const {
  getProducts,
  createProduct,
  getProduct,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");

const router = Router();

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

router.route("/category/:category").get(getProductsByCategory);

module.exports = router;
