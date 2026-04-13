const initModel = () => {


    Product.belongsTo(Category, {
        foreignKey: "categoryId",
        as: "category"
    })

    Category.hasMany(Product, {
        foreignKey: "categoryId",
        as: "products"
    })
}

module.exports = initModel
