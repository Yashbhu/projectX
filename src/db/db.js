import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB CONNECTED DB HOST : ${connectionInstance.connection.host}`);
    } catch(error) {
        console.error("MONGODB FAILED :", error);
        process.exit(1)
    }
}

export default connectDB;
//ERROR HANDLEING BASICLLY APOKI CATCH KME LIKHE HUE KI LANGUAEG IMP HAI JB AP ERROR AYEGA TO AP USSE PATA LAGA SKTE KI KNIS FILE ME DIKKTR HAI 
//VAHA AJAKR FIR AP DEKHO JO CHEEZE IMPORT HORI JESE ISME DB NAME AND PROCESS.ENV FIR HUM DKEHEEGE
//DB AND THEN PICHE JAKR MONGODBURI ME US FILE ME DEKHO KI SB SHI HAIS