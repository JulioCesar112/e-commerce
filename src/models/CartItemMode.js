const { DataTypes } = require("sequelize");
const db = require("../config/database");

const CartItem = db.define("CartItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  }
});

module.exports = CartItem;
