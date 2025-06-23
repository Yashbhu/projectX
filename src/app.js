import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors()){
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}

app.use(express.json({limit: "10mb"}));//kitne bhi kb elo agr url sd data aye to conifg bhi krna niche
app.use(express.urlencoded({extended:true,limit:"16kb"}))//extended for nested objects
app.use(express.static(public))//public asset ke lie kuch agr store krna ho
app.use(cookieParser())//cookie parser for cookies
 
export {app}