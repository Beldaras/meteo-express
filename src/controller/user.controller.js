const { findAll } = require("../model/user.model.js");

const getAllUsers = async (req, res) => {
  try {
    const users = await findAll();
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllUsers };
