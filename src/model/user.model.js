const database = require('./database.js');

const findAll = async () => {
  try {
    const [users] = await database.query('SELECT * FROM user');
    return users;
  } catch (error) {
    console.log(error);
  }
};

const findOne = async (id) => {
  try {
    const [user] = await database.query('SELECT * FROM user WHERE id = ?', [id]);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const addOne = async (user) => {
  try {
    const [result] = await database.query('INSERT INTO user SET ?', [user]);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { findAll, findOne, addOne };
