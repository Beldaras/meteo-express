const asyncHandler = require("express-async-handler");
const { findUserByEmail } = require("../model/user.model.js");
const { verifyPassword } = require("../helper/argon.helper.js");
const { encodeJWT } = require("../helper/jwt.helper.js");
const validateLogin = require("../validator/login.validator.js");
const ModelValidationError = require("../errors/ModelValidationError.js");
const InvalidCredentialsError = require("../errors/InvalidCredentialsError.js");

const login = asyncHandler(async (req, res) => {
  const errors = validateLogin(req.body);
  if (errors) throw new ModelValidationError(errors);

  const [user] = await findUserByEmail(req.body.email);
  if (!user) throw new InvalidCredentialsError();

  const passwordMatch = await verifyPassword(user.password, req.body.password);
  if (!passwordMatch) throw new InvalidCredentialsError();

  delete user.password;

  const token = encodeJWT(user);

  res.json({ token });
});

const logout = async (req, res) => {
  try {
    return res.status(200).json({ message: "Logout success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { login, logout };
