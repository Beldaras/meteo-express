const express = require("express");

const { getAllUsers, getOneUser } = require("../controller/user.controller.js");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);

module.exports = router;
