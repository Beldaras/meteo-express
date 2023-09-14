const { findUserByEmail } = require("../model/user.model.js");
const { verifyPassword } = require("../helper/argon.helper.js");
const { encodeJWT } = require("../helper/jwt.helper.js");
const validateLogin = require("../validator/login.validator.js");

const login = async (req, res) => {
  try {
    const errors = validateLogin(req.body);
    if (errors) return res.status(400).send(errors);

    const [user] = await findUserByEmail(req.body.email);
    if (!user) return res.status(400).send({ message: "Email not found" });

    const passwordMatch = await verifyPassword(user.password, req.body.password);
    if (!passwordMatch) return res.status(400).send({ message: "Wrong password" });

    delete user.password;

    const token = encodeJWT(user);
    
    res.send(token);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

const logout = async (req, res) => {
  try {
    return res.status(200).json({ message: "Logout success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { login, logout };
