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
    const { email, password, firstname, lastname } = user;
    const [result] = await database.query('INSERT INTO user (email, password, firstname, lastname) VALUES (?, ?, ?, ?)', [email, password, firstname, lastname]);
    return { id: result.insertId, email, firstname, lastname } ;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { findAll, findOne, addOne };
