const express = require("express")
const router = express.Router()
const productService = require("../services/productService")

const passport = require("passport")
const auth = passport.authenticate("jwt", { session: false })
const { adminValidate } = require("../middlewares/isAdmin")


router
    .route("/")
    .get(productService.getAllProduct)
    .post(auth, adminValidate, productService.createProduct)


router
    .route("/:id")
    .delete(auth, adminValidate, productService.deleteProduct)


module.exports = router