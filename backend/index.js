 const mongoose=require("mongoose")
 const express=require("express")
 const app=express()
 const catRoutes=require("./routes/categoryRoutes")
 const bookRoutes=require("./routes/bookRoutes")
 app.use(express.json())
 app.use("/categories",catRoutes)
 app.use("/books",bookRoutes)

require("dotenv").config()

      mongoose.connect(process.env.MONGO_URL).then(result=>
        app.listen(process.env.PORT,()=>{
            console.log("server is running")
        })
        
        ).catch(error=>console.log(error))

     
