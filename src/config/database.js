const sequelize = require("sequelize")
const config = require("./env")

db = new sequelize(
    config.db.dbName,
    config.db.password,
    config.db.username,
    {
        host: config.db.host,
        dialect: "postgres"
    }
)

module.exports = db