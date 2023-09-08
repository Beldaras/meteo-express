const { findAll, findOne, addOne } = require("../model/user.model.js");

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
    const user = req.body;
    const result = await addOne(user);
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllUsers, getOneUser, createOneUser };
