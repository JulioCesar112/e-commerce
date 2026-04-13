const sequelize = require("../config/database")
const { DataTypes } = require("sequelize")


const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})


module.exports = Category
