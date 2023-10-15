import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.listen(3000, () => {
    console.log("server is running on port 3000");
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//error-handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.StatusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});