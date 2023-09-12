const joi = require("joi");

const validateUser = (user, createMod) => {
  const mode = createMod ? "required" : "optional";
  const result = joi
    .object({
      email: joi.string().email().presence(mode),
      password: joi.string().min(8).presence(mode),
      firstname: joi.string().min(3).max(100).presence(mode),
      lastname: joi.string().min(3).max(100).presence(mode),
    })
    .required()
    .min(1)
    .validate(user, { abortEarly: false }).error;

  if (result) {
    const errorMessages = result.details.map((err) => ({
      message: err.message,
    }));
    return { errorCount: result.details.length, errorMessages };
  }

  return false;
};

module.exports = validateUser;
