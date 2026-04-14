const { loginUser } = require("../controllers/loginController")
const config = require("../config/env") 
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const data = await loginUser(email, password)

        if (data.success) {

            console.log("JWT EXPIRES:", process.env.JWT_EXPIRES)
            // 🔥 Generar token correctamente
            const token = jwt.sign(
                {
                    id: data.user.id,
                    email: data.user.email,
                    role: data.user.role
                },
                config.jwt.secret,
                {
                    expiresIn: config.jwt.expires
                }
            )

            // 🔥 Respuesta final
            return res.status(200).json({
                success: true,
                token,
                user: data.user
            })
        }

    } catch (error) {
        // 🔥 Manejo de errores profesional
        if (error.message === "EMAIL_AND_PASSWORD_ARE_REQUIRED") {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            })
        }

        if (error.message === "INVALID_CREDENTIALS") {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        console.error("Error in login controller:", error.message)

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = {
    login
}