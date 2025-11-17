const { Sequelize } = require("sequelize");

module.exports = new Sequelize({
  dialect: "sqlite",
  storage: "./src/.db",
  logging: false,
});
