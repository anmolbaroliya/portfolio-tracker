import express from "express";
import cors from "cors";
import coinRoutes from "./routes/coinRoutes.js";
import "dotenv/config";


const app=express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/coins",coinRoutes);


//Test Api's
app.get("/",(req,res)=>{
    res.send("API is running");
});

const PORT = process.env.PORT || 5000;

//start server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})