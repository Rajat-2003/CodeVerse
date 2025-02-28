import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/dbConnect.js'
import userRoute from './routes/user.route.js'
dotenv.config({});

const app = express(); 
const PORT =process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:8080",
    credentials:true
}));
connectDB();

app.use("/api/v1/user",userRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})