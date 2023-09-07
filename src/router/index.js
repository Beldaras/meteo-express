const express = require("express");

const userRoutes = require("./user.routes.js");

const router = express.Router();

router.use("/user", userRoutes);

module.exports = router;
