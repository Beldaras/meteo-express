const {findAll, addOne} = require("../model/fav.model.js");
// const validateFav = require("../validator/fav.validator.js"); => need to create validator

const getAllFavs = async (req, res) => {
  try {
    const favs = await findAll();
    res.send(favs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createOneFav = async (req, res) => {
  try {
    // const errors = validateFav(req.body);
    // if (errors) return res.status(400).send(errors);
    const result = await addOne(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllFavs, createOneFav };
