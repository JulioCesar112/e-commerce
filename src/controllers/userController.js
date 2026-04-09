const Users = require("../models/userModel")
const uuid = require("uuid")
const hashPassword = require("../utils/bcrypt")

const getAllUsers = async () => {
    try {
        const users = await Users.findAll({
            attributes:{exclude:["password","createdAt","updatedAt"]}
        })
        return users

    } catch (error) {
        console.error("Error in getAllUsers")
        throw error
    }
}

const getUserById = async (id) => {
    try {
        const user = await Users.findByPk(id)

        if (!user) {
            throw new Error("ID_NOT_FOUND")
        }

        return user 

    } catch (error) {
        console.log("Error in getUserById")
        throw error
    }
}

const createUser = async (data) => {
    try {
        const existingUser = await Users.findOne({
            where: { email: data.email }
        })

        if (existingUser) {
            throw new Error("EMAIL_EXISTS")
        }

        const hashedPassword = await hashPassword.hashPassword(data.password)

        const newUser = await Users.create({
            id: uuid.v4(),
            name: data.name,
            email: data.email,
            password: hashedPassword,
        })

        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }

    } catch (error) {
        console.error("Error in createUser")
        throw error
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById
}