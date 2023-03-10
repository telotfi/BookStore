const categoryControllers = require("../controllers/catalogueContoller")
const express = require("express")
const router = express.Router()

router.route("/").get(categoryControllers.getAllCategories).post(categoryControllers.addCategory),
router.get("/:id",categoryControllers.getCategory),
router.delete("/:id",categoryControllers.deleteCategoryById)

module.exports= router