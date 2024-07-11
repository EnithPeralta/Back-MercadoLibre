import express from "express"
import mongoose from "mongoose";
import { config } from "dotenv";
config();
import userRoutes from "./routers/user.routes.js";

const app = express();  
const port = process.env.PORT || 7000;

app.use(express.json())


app.use('/api', userRoutes)


mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connect to MongoDB Altas"))
.catch((error)=>console.error(error));

app.listen(port,()=> console.log('server listening on port',port))