const categoryController = require("../controllers/categoryController")

const getAllCategories = async (req, res) => {
    try {
        const data = await categoryController.getAllCategories()
        return res.status(200).json(data)
    } catch (error) {
        console.error("Error in getAllCategories:", error)
        return res.status(500).json({
            message: "An error occurred while getting categories"
        })
    }
}

const registerCategories = async (req, res) => {
    try {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const newCategory = await categoryController.createCategory(name)

        return res.status(201).json({
            message: "Category registered successfully",
            category: newCategory
        })

    } catch (error) {
        console.error("Error in registerCategories:", error)
        return res.status(500).json({
            message: "An error occurred while creating category"
        })
    }
}


module.exports = {
    getAllCategories,
    registerCategories
}