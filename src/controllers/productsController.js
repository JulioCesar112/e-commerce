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


const createProducts = async (data) => {
    try {
        const existingProduct = await Product.findOne({
            where: { upc: data.upc }
        })
        if (existingProduct) {
            throw new Error("PRODUCT_EXISTS")
        }
        const newProduct = await Product.create({
            id: uuid.v4(),
            name: data.name,
            price:data.price,
            stock:data.stock,
            category:data.category,
        })
    } catch (error) { }
}