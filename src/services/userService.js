const userControllers = require("../controllers/userController")
const userController = require("../controllers/userController")

const getAllUsers = async (req, res) => {
    try {
        const data = await userControllers.getAllUsers()

        return res.status(200).json(data)

    } catch (error) {
        console.error("Error in getAllUsers service")

        return res.status(500).json({
            message: "An error occurred while retrieving users."
        })
    }
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    // Validación básica
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {
        const newUser = await userControllers.createUser({
            name,
            email,
            password
        })

        return res.status(201).json({
            message: "User registered successfully",
            user: newUser
        })

    } catch (error) {
        console.error("Error in registerUser:", error)

        // Error personalizado
        if (error.message === "EMAIL_EXISTS") {
            return res.status(400).json({
                message: "El email ya está registrado"
            })
        }

    }
}

const getUserById = async (req, res) => {

    try {
        const id = req.params.id
        const data = await userController.getUserById(id)

        return res.status(200).json(data)

    } catch (error) {

        console.error("Error in getUserById Service")
        if (error.message === "ID_NOT_FOUND") {
            return res.status(404).json({
                message: "User not found"
            })
        }


    }
}

module.exports = {
    getAllUsers,
    registerUser,
    getUserById
}