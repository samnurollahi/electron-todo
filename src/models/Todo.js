const { DataTypes } = require("sequelize");
const db = require("../config/db");

module.exports = db.define(
  "todo",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    todo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    check: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "todo",
    timestamps: true,
  }
);
