const express = require("express")
const app = express()
const config = require("./config/env")
const port = config.port
const db = require("./config/database")







app.get("/", (req, res) => {
    res.status(200).json({ message: "welcome to the E-commerce API" })

})

const initDatabase = async () => {
    try {
        console.log("Connecting to DB...")

        await db.authenticate()
        console.log("✅ Connection to the database has been established successfully")

        await db.sync({ alter: true })
        console.log("✅ DB Synced")

    } catch (error) {
        console.error("❌ Unable to connect to the database:")
        console.error(error)
        throw error
    }
}




const startServer = async () => {
    try {
        await initDatabase()

        app.listen(port, () => {
            console.log(`🚀 Server Started at port ${port}`)
        })

    } catch (error) {
        console.error("❌ Server not started due to DB error")
    }
}

startServer()