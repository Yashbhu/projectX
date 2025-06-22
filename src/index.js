import mongoose from "mongoose";
import {DB_NAME } from "./constants.js";
import connectDB from "./db";



















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