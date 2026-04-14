const path = require("path")
const dotenv = require("dotenv")

// 🔥 Cargar .env correctamente SIEMPRE
dotenv.config({
  path: path.resolve(__dirname, "../../.env")
})

// 🔥 Configuración centralizada
const config = {
  port: process.env.PORT || 3000,

  db: {
    host: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  },

  jwt: {
    secret: process.env.JWT_SECRET || "default_secret",
    expires: process.env.JWT_EXPIRES || "1h" // 🔥 fallback seguro
  }
}

module.exports = config