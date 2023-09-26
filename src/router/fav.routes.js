const express = require("express");

const { getAllFavs, createOneFav } = require("../controller/fav.controller.js");
const router = express.Router();

router.get("/fav/:id", getAllFavs);
router.post("/fav", createOneFav);

module.exports = router;
