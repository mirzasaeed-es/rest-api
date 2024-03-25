const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");
const sequelize = db

const user = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});
module.exports = user