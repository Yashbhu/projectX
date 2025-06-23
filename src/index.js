// Import dotenv to read .env file
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js"; // make sure you import your express app here

// Load env variables
dotenv.config({
  path: "./.env"
});

// Connect to database, then start the server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✅ Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("❌ DB connect nhi hua:", error);
  });






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