const Users = require("../models/userModel")
const { comparePassword } = require("../utils/bcrypt")

const loginUser = async (email, password) => {
    try {
        // 1. Validación básica
        if (!email || !password) {
            throw new Error("EMAIL_AND_PASSWORD_ARE_REQUIRED")
        }

        // 2. Buscar usuario
        const user = await Users.findOne({
            where: { email }
        })

        // 3. Mensaje genérico (seguridad)
        if (!user) {
            throw new Error("INVALID_CREDENTIALS")
        }

        // 4. Comparar contraseña
        const isValidPassword = await comparePassword(password, user.password)

        if (!isValidPassword) {
            throw new Error("INVALID_CREDENTIALS")
        }

        // 5. Retornar solo datos seguros
        return {
            success: true,
            user: {
                id: user.id,
                email: user.email,
                role: user.role // opcional si manejas roles
            }
        }

    } catch (error) {
        console.error("Error in loginUser:", error.message)
        throw error
    }
}

module.exports ={
  loginUser  
} 