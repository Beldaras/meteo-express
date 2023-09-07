const express = require("express");

const { getAllUsers } = require("../controller/user.controller.js");

const router = express.Router();

router.get("/", getAllUsers);

module.exports = router;
