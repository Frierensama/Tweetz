import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from 'dotenv';
import { connect } from "mongoose";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 2000;

dotenv.config();

app.use(cookieParser())

app.use(express.json()) //to parse req.body
app.use(express.urlencoded({extended:true})) //to parse form data

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log("server started");
    connectMongoDB();
})