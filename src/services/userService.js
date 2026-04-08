const userControllers = require("../controllers/userController")

const getAllUsers = async (req, res) => {
    try {
        const data = await userControllers.getAllUsers()
        res.status(200).json(data)
    } catch (error) {
        console.error("Error in getAllUsers services")
        res.status(500).json({ message: "An error occurred while retrieving users." })
    }
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" })
    }

   try{
    const newUser = await userControllers.createUser({name,email,password})
    return res.status(200).json({message: "User registered successfully", user: newUser})
   } catch(error){
    console.error(error)
    throw error
   }
}



module.exports = {
    getAllUsers,
    registerUser
}