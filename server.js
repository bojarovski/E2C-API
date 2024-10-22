import express from "express";
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();



const port = process.env.PORT || 5000;

const app = express();

connectDB(); // Connect to MongoDB
app.use(express.json()); // Body parser
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send("API is running");
});


app.use('/api/users', userRoutes);
