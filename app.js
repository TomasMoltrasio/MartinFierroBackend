const express = require("express");
const app = express();
const cors = require("cors");

// settings

app.set("port", process.env.PORT || 8000);

// middlewares

app.use(cors());
app.use(express.json());

// routes

app.use("/api/users", require("./routes/users.routes"));
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/orders", require("./routes/orders.routes"));

module.exports = app;
