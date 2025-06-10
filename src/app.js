import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./db/index.js";
import userrouter from "./routes/user.routes.js";
const app=express();
dotenv.config();

app.use(cors());
app.use(express.json());


connectDB();

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

// console.log("abhi karunga  tabahi");
app.use("/api/user",userrouter);







