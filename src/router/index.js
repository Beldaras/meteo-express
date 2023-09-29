const express = require("express");

const userRoutes = require("./user.routes.js");
const authRoutes = require("./auth.routes.js");
const favRoutes = require("./fav.routes.js");

const auth = require("../middlewares/auth.js");

const router = express.Router();

router.use("/user", userRoutes);
router.use(authRoutes);
router.use(auth, favRoutes);

module.exports = router;
