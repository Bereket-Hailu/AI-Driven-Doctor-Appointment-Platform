import express from "express"
import cookieparser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authroute from "./Routes/auth.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

app.get("/", (req, res) => {
    res.send("App is working");
}) 

//connect database
mongoose.set("strictQuery", false)
const connectDB = async()=> {
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            userUnifiedTopology: true,
        })
        console.log('MongoDB database is connected')
    }
    catch(error){
        console.log('MongoDB database is connection failed')
    }
}

//Middleware for the server
app.use(express.json());
app.use(cookieparser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authroute)

app.listen(port, () => {
    connectDB();
    console.log("server is running on port" +  port);
})