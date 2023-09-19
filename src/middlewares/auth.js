const { decodeJWT } = require("../helper/jwt.helper.js");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    console.log(token);
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decodedToken = decodeJWT(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = auth;
