const { Router } = require("express");
const { sendWhatsappMessage } = require("../controllers/checkout.controller");

const router = Router();

router.route("/").post(sendWhatsappMessage);

module.exports = router;
