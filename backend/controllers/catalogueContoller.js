const Category = require("../models/Category")
const catalServices = require("../services/catalogueServices")

const getAllBooks=async(req,res)=>{
    try {
        const books = await catalServices.getAllBooks()
        res.status(200).json(books)
    }catch (error){
        res.status(500).json(error)
    }
}
const getBook=async(req,res)=>{
    try{
        const book = await catalServices.getBookById(req.params.id)
        res.status(200).json(book)
    }catch (error){
        res.status(500).json(error)
    }
}
const deleteBookById=async(req,res)=>{
    try{
        await catalServices.deleteBookById(req.params.id)
        res.status(200).json("book was deleted successfully")
    }catch (error){
        res.status(500).json(error)
    }
}
const editBook=async(req,res)=>{
    try{
        const book = await catalServices.editBook(req.params.id,req.body)
        res.status(200).json(book)
    }catch (error){
        res.status(500).json(error)
    }
}
const addBook=async(req,res)=>{
    try{
        await catalServices.addBook(req.body)
        res.status(201).json("book was added successfully")
    }catch (error){
        res.status(500).json(error)
    }
}
const addCategory=async(req,res)=>{
    try{
        await catalServices.addCategory(req.body)
        res.status(201).json("category was added succuefully")
    }catch (error){
        res.status(500).json(error)
    }
}
const getAllCategories=async(req,res)=>{
    try{
        const categories = await catalServices.getAllCategories()
        res.status(200).json(categories)
    }catch (error){
        res.status(500).json(error)
    }
}
const getCategory=async(req,res)=>{
    try{
        const category = await catalServices.getCategoryById(req.params.id)
        res.status(200).json(category)
    }catch (error){
        res.status(500).json(error)
    }
}
const deleteCategoryById=async(req,res)=>{
    try{
        await catalServices.deleteCategoryById(req.params.id)
        res.status(200).json("category was deleted successfully")
    }catch (error){
        res.status(500).json(error)
    }
}

module.exports={
    getAllBooks,
    getAllCategories,
    getBook,
    addBook,
    addCategory,
    editBook,
    deleteBookById,
    deleteCategoryById,
    getCategory
}