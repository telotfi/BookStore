const bookControllers = require("../controllers/catalogueContoller")
const express = require("express")
const router = express.Router()

router.route("/").get(bookControllers.getAllBooks).post(bookControllers.addBook),
router.get("/:id",bookControllers.getBook),
router.put("/:id",bookControllers.editBook),
router.delete("/:id",bookControllers.deleteBookById)
 
module.exports= router