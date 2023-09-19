const express = require("express");

const router = require("./router");

const errorHandler = require("./middlewares/errorHandler.js");

const app = express();
app.use(express.json());

app.use("/api", router, errorHandler);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = app;
