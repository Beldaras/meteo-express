const argon2 = require('argon2');

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 19,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password, hashingOptions);
    return hash;
  } catch (error) {
    console.log(error);
  }
}

const verifyPassword = async (hash, password) => {
  try {
    const isCorrect = await argon2.verify(hash, password, hashingOptions  );
    return isCorrect;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { hashPassword, verifyPassword };