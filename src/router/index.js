const express = require("express");

const userRoutes = require("./user.routes.js");
const authRoutes = require("./auth.routes.js");

const router = express.Router();

router.use("/user", userRoutes);
router.use(authRoutes);

module.exports = router;
