const express = require("express")
const router = express.Router()
const categoryServices = require("../services/categoryService")

const passport = require("passport")
const auth = passport.authenticate("jwt", { session: false })

const { adminValidate } = require("../middlewares/isAdmin")

router
    .route("/")
    .get(auth, adminValidate, categoryServices.getAllCategories)
    .post(auth, adminValidate, categoryServices.registerCategories)



module.exports = router