import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// ✅ Enable CORS for frontend origin
app.use(cors({
  origin: process.env.CORS_ORIGIN,  // e.g., http://localhost:3000
  credentials: true
}));

// ✅ Parse incoming JSON (limit to 10MB)
app.use(express.json({ limit: "10mb" }));

// ✅ Parse URL-encoded data (extended true = allow nested objects)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ✅ Serve static files (e.g., images, assets) from /public
app.use(express.static('public'));

// ✅ Parse cookies from requests (required for auth sessions/tokens)
app.use(cookieParser());


//routes
import userRouter from './routes/user.routes.js';

//routes declaration ab app.get nhi likh skte ab middleware chhaiye jiss jo router utha kr laye ho usse connect kr paye
app.use('/api/v1/users',userRouter)//jese hi user pr click vese hi userourter ka access
//ab jayega user router file me
//agr login banana hoga to ye vapas jayega router me login ke lie and u dont need to have 
//diff route login and register
//user prefix like htttp localhost 8000/useers/register which is url
//BEST [PRACTICS ]USE API/V1/USERS ONSTEAD OF USER






// ✅ Export app for use in index.js
export default app;
