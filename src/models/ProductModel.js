const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    upc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
})

module.exports = Product