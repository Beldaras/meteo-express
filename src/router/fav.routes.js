const express = require("express");

const { getAllFavs, createOneFav, deleteOneFav } = require("../controller/fav.controller.js");
const router = express.Router();

router.get("/fav/:id", getAllFavs);
router.post("/fav", createOneFav);
router.delete("/fav/:id", deleteOneFav);

module.exports = router;
