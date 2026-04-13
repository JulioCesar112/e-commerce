const Product = require("../models/ProductModel")
const uuid = require("uuid")

const getAllProducts = async () => {
    try {
        const data = await Product.findAll()
        return data
    } catch (error) {
        console.error("Error in getAllProduct")
        throw error
    }
}

const deleteProduct = async (id) => {
    try {

        const deleteProduct = await Product.destroy({
            where:{id:id}
        })
        if(deleteProduct === 0 ){
            throw new Error("PRODUCT_NOT_FOUND")
        }
        return {message: "Product deleted successfuly"} 

    } catch (error) {
        console.error("Error in deleteProduct controller")
        throw error
    }
}

const createProducts = async (data) => {
    try {
        console.log(data)

        if (!data.name || !data.upc || !data.price || !data.categoryId) {
            throw new Error("ALL_FIELDS_REQUIRED")
        }

        const existingProduct = await Product.findOne({
            where: { upc: data.upc }
        })

        if (existingProduct) {
            throw new Error("PRODUCT_ALREADY_EXISTS")
        }

        const newProduct = await Product.create({
            id: uuid.v4(),
            name: data.name,
            upc: data.upc,
            price: data.price,
            categoryId: data.categoryId,
        })

        return newProduct

    } catch (error) {
        console.error("Error in createProduct service:", error.message)
        throw error
    }
}


module.exports = {
    getAllProducts,
    createProducts,
    deleteProduct
}