const { Sequelize } = require("sequelize")
const config = require("./env")

const db = new Sequelize(
    config.db.dbName,
    config.db.username,
    config.db.password,
    {
        host: config.db.host,
        dialect: "postgres"
    }
)
module.exports = db