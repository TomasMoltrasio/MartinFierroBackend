const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

// settings

dotenv.config();
app.set("port", process.env.PORT || 8000);

// middlewares

app.use(cors());
app.use(express.json());

// routes

app.use("/api/users", require("./routes/users.routes"));
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/orders", require("./routes/orders.routes"));
app.use("/api/checkout", require("./routes/checkout.routes"));

module.exports = app;
