const joi = require("joi");

const validateLogin = (user) => {
  
  const result = joi
    .object({
      email: joi.string().email().presence("required"),
      password: joi.string().min(8).presence("required"),
    })
    .required()
    //.min(1)
    .validate(user, { abortEarly: false }).error;

  if (result) {
    const errorMessages = result.details.map((err) => ({
      message: err.message,
    }));
    return { errorCount: result.details.length, errorMessages };
  }

  return false;
};

module.exports = validateLogin;
