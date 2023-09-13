const { findAll, findOne, addOne } = require("../model/user.model.js");
const validateUser = require("../validator/user.validator.js");
const getAllUsers = async (req, res) => {
  try {
    const users = await findAll();
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    if(isNaN(id)) throw new Error("Id must be a number");

    const [user] = await findOne(id);
    res.send(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOneUser = async (req, res) => {
  try {
    const errors = validateUser(req.body);
    if (errors) return res.status(400).send(errors);

    const result = await addOne(req.body);
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllUsers, getOneUser, createOneUser };
