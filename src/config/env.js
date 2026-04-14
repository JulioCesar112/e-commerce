const dotenv =require("dotenv")
dotenv.config()

const config = {
    port:process.env.PORT,
    db:{
        host:process.env.DB_HOST,
        dbName:process.env.DB_NAME,
        username:process.env.DB_USER,
        password:process.env.DB_PASS,
    },
    // 🔐 Configuración JWT
    jwt: {
        secret: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRES
    }
}

module.exports = config