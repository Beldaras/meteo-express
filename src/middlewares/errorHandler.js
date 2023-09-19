const ModelValidationError = require("../errors/ModelValidationError.js");
const InvalidCredentialsError = require("../errors/InvalidCredentialsError.js");

const errorHandler = (error, req, res, next) => {
  const errorTypes = [ModelValidationError, InvalidCredentialsError];
  if (
    errorTypes.some((errorType) => errorType.prototype.isPrototypeOf(error))
  ) {
    return res.status(error.statusCode).send(error.details);
  }

  return res.status(500).send({ error: "Internal server error" });
};

module.exports = errorHandler;
