const express = require("express")
const router = express.Router()
const userService = require("../services/userService")

const passport = require("passport")
const { adminValidate } = require("../middlewares/isAdmin")

const auth = passport.authenticate("jwt", { session: false })

router
    .route("/")
    .get(auth, adminValidate, userService.getAllUsers)

router
    .route("/:id")
    .get(auth, adminValidate, userService.getUserById)

module.exports = router