const express = require("express");

const { getAllUsers, getOneUser, createOneUser } = require("../controller/user.controller.js");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createOneUser);

module.exports = router;
