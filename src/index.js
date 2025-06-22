// require("dotenv").config({path:"./env"})//gets above all bcs need it above all also it breakss the code constency
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path:"./.env"
}); //not even in docs but inrtroduecxd new way to load env variables can be used as experimentakl feature
//go in package.json file and -r and stuff tyo use as epermntal puit in dev scroipt
connectDB()
















/*import express from "express";
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/$
        {DB_NAME}`)
        app.on('error',(error)=>{
            console.log("ERR",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log('server is running on port${process.env.PORT}')
        }
        )
    } catch(error) {
        console.error("ERROR:",error)
        throw err
    }}
)()
*/