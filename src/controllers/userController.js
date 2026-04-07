const Users = require("../models/userModel")
const uuid = require("uuid")
const hashPassword = require("../utils/bcrypt")

const getAllUsers = async () => {
    try {
        const data = await Users.findAll()
        return data
    } catch (error) {
        console.error("Error in getAllUsers")
        throw error
    }
}

const createUser = async (data) => {

    try {
        const hashedPassword = await hashPassword(data.password)
        const newUser = await Users.create({
            id: uuid.v4(),
            name: data.name,
            email: data.email,
            password: hashedPassword,
        })
        return newUser
    } catch (error) {
        console.error("Error in createUser")
        throw error
    }
}

module.exports = {
    getAllUsers,
    createUser
}