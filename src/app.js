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

// ✅ Export app for use in index.js
export { app };
