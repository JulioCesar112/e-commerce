const Category = require("../models/categoryModel")
const uuid = require("uuid")

const getAllCategories = async () => {
    try {
        const data = await Category.findAll()
        return data
    } catch (error) {
        console.error("Error in getAllCategories")
        throw error       
    }
}

const createCategory = async (name) => {
    try {

        const newCategory = await Category.create({
          id: uuid.v4(),
          name
        })

        return newCategory

    } catch (error) {
        console.error("Error in createCategory")
        throw error
    }
}


module.exports = {
    getAllCategories,
    createCategory
}