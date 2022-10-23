const { Router } = require("express");
const {
  getOrderTime,
  sendWhatsappMessage,
} = require("../controllers/checkout.controller");

const router = Router();

router.route("/orderTime").get(getOrderTime);
router.route("/").post(sendWhatsappMessage);

module.exports = router;
