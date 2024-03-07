import express from "express"
import cors from "cors"    
import { connectDb } from "./db/database";    

const app =express();
app.use(cors());

app.use (express.json());

connectDb();

app.listen(8000, ()=>{
    console.log("http://localhost:8000");
    
})
