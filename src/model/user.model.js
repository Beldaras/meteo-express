const database = require('./database.js');

const findAll = async () => {
  try {
    const [users] = await database.query('SELECT * FROM user');
    return users;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { findAll };
