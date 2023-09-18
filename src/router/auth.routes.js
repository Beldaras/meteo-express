const express = require("express");

const router = express.Router();

const { login, logout } = require("../controller/auth.controller.js");

router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
