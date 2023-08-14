require("dotenv").config();
const Sequelize = require("sequelize");
const favoriteModel = require("./models/Favorite");
const userModel = require("./models/User");

const {
    DB_USER,
    DB_PASSWORD,
    DB_SERVER,
    DB_PORT,
    DB_DATABASE
} = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}:${DB_PORT}/${DB_DATABASE}`,
    {
        logging: false,
    }
)

favoriteModel(sequelize);
userModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'User_Favorite' });
Favorite.belongsToMany(User, { through: 'User_Favorite' });


module.exports = {
    User,
    Favorite,
    conn: sequelize,
};





