const express = require("express");

const app = express();

app.get("*", (req, res) => {
  res.status(404).json({message: "Not found"});
})

module.exports = app;