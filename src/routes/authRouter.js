const express = require("express")
const router = express.Router()

const userService = require("../services/userService")
const loginService = require("../services/loginService")


router.post("/register", userService.registerUser)
router.post("/login" , loginService.login)


module.exports = router