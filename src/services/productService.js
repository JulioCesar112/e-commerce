const productsControler = require("../controllers/productsController")

const getAllProduct = async (req, res) => {
    try {
        const data = await productsControler.getAllProducts()
        return res.status(200).json(data)
    } catch (error) {
        console.error("Error in getAllProducts")
        return res.status(500).json({
            message: "Error in getAllProucts service"
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params

    
        const deleteProduct = await productsControler.deleteProduct(id)


        return res.status(200).json({
            message: "Product deleted successfuly"
        })
    } catch (error) {
       
        if (error.message === "PRODUCT_NOT_FOUND") {
            return res.status(400).json({
                message: "Product not found"
            })
        }

    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price, upc, categoryId } = req.body

        const newProduct = await productsControler.createProducts({
            name,
            price,
            upc,
            categoryId
        })

        return res.status(201).json({
            message: "Product created successfully",
            product: newProduct
        })

    } catch (error) {
        console.error("Error in createProduct controller:", error.message)

        if (error.message === "ALL_FIELDS_REQUIRED") {
            return res.status(400).json({
                message: "All fields (name, upc, price, categoryId) are required"
            })
        }

        if (error.message === "PRODUCT_ALREADY_EXISTS") {
            return res.status(400).json({
                message: "Product already exists"
            })
        }

        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = {
    getAllProduct,
    createProduct,
    deleteProduct
}