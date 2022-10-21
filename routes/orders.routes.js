const { Router } = require("express");
const {
  getOrders,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUser,
  deletePastOrders,
  getOrdersOfTheDay,
} = require("../controllers/orders.controller");

const router = Router();

router.route("/").get(getOrders).post(createOrder);

router.route("/deletePastOrders").delete(deletePastOrders);

router.route("/day").get(getOrdersOfTheDay);

router.route("/:id").get(getOrder).put(updateOrder).delete(deleteOrder);

router.route("/user/:id").get(getOrdersByUser);

module.exports = router;
