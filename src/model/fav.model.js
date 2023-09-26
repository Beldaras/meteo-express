const database = require("./database.js");

const findAllByUser = async (id) => {
  try {
    
    const favorites = await database.query(
      "SELECT favorites.id as favid, city, lat, lon, user_id, user.id FROM favorites join user on user_id = user.id WHERE user.id = ?",
      [id] // test requête pour user courant
    );
    return favorites;
  } catch (error) {
    console.log(error);
  }
};

const addOne = async (favorite) => {
  try {
    const { city, lat, lon, user_id } = favorite;
    const [result] = await database.query(
      "INSERT INTO favorites (city, lat, lon, user_id) VALUES (?, ?, ?, ?)",
      [city, lat, lon, user_id]
    );
    return { id: result.insertId, city, lat, lon };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { findAllByUser, addOne };
