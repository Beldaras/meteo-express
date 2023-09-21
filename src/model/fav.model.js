const database = require("./database.js");

const findAll = async () => {
  try {
    const [favorites] = await database.query("SELECT * FROM favorites join user where user_id = user.id");
    return favorites;
  } catch (error) {
    console.log(error);
  }
};

const addOne = async (favorite) => {
  try {
    const { city, lat, lon } = favorite;
    const [result] = await database.query(
      "INSERT INTO favorites (city, lat, lon, user_id) VALUES (?, ?, ?, 4)",
      [city, lat, lon]
    );
    return { id: result.insertId, city, lat, lon };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { findAll, addOne };
