const { Router } = require("express");
const {
  getProducts,
  createProduct,
  getProduct,
  getProductsByCategory,
  changeActiveDay,
  getActiveDay,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");

const { auth, handleError } = require("../auth");

const router = Router();

router.route("/").get(getProducts).post(auth, createProduct);

router.route("/day").get(getActiveDay);

router.route("/day/:id").put(auth, changeActiveDay);

router
  .route("/:id")
  .get(getProduct)
  .put(auth, updateProduct)
  .delete(auth, deleteProduct);

router.route("/category/:category").get(getProductsByCategory);

router.use(handleError);

module.exports = router;
