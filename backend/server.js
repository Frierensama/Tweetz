import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from 'dotenv';
import { connect } from "mongoose";
import connectMongoDB from "./db/connectMongoDB.js";
const app = express();

const PORT = process.env.PORT || 2000;

dotenv.config();

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log("server started");
    connectMongoDB();
})