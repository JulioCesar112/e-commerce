const express = require("express")
const router = express.Router()
const userService = require("../services/userService")



router.get("/", userService.getAllUsers)
router.get("/:id", userService.getUserById)

module.exports = router