const Users = require("../models/userModel")
const { comparePassword } = require("../utils/bcrypt")

const loginUser = async (email, password) => {
    try {
        console.log("📩 EMAIL:", email)
        console.log("🔑 PASSWORD:", password)

        if (!email || !password) {
            throw new Error("EMAIL_AND_PASSWORD_ARE_REQUIRED")
        }

        const user = await Users.findOne({
            where: { email }
        })

        console.log("👤 USER:", user)

        if (!user) {
            throw new Error("INVALID_CREDENTIALS")
        }

        console.log("🔐 HASH DB:", user.password)

        const isValidPassword = await comparePassword(password, user.password)

        console.log("✅ MATCH:", isValidPassword)

        if (!isValidPassword) {
            throw new Error("INVALID_CREDENTIALS")
        }

        return {
            success: true,
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        }

    } catch (error) {
        console.error("❌ ERROR loginUser:", error)
        throw error
    }
}

module.exports ={
  loginUser  
} 