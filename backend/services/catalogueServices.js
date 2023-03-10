const Book=require("../models/Book")
const Category=require("../models/Category")

const getAllBooks=async ()=>{
    return await Book.find()
}

const getBookById=async (id)=>{
    return await Book.findById({_id:id})
}

const deleteBookById=async (id)=>{
    return await Book.findByIdAndDelete({_id:id})
}

const addBook=async (b)=>{
    return await Book.create(b)
}

const editBook=async (id,Book)=>{
    return await Book.findByIdAndUpdate({_id:id},Book);
}

const getAllCategories=async ()=>{
    return await Category.find()
}

const getCategoryById=async (id)=>{
    return await Category.findById({_id:id})
}

const addCategory=async (b)=>{
    return await Category.create(b)
}

const deleteCategoryById=async (id)=>{
    return await Category.findByIdAndDelete({_id:id})
}

module.exports={
    getAllBooks,
    getAllCategories,
    getBookById,
    addBook,
    addCategory,
    editBook,
    deleteBookById,
    deleteCategoryById,
    getCategoryById
}