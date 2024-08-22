import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
<<<<<<< HEAD
import bookingRoute from './Routes/booking.js'
=======
import clinicRoute from "./Routes/clinicRoutes.js";
import clinicAdminRoute from "./Routes/clinicAdminRoutes.js";
import adminRoute from "./Routes/adminRoutes.js";
>>>>>>> a709a73ad9aa069a9aa6fdee1477bead889eb05f
dotenv.config()
const app = express()
const port = process.env.PORT || 8000

const corsOptions = {  
    origin: true
}; 

app.get("/", (req, res) => {
    res.send("App is working");
});

//connect database
mongoose.set("strictQuery", false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB database connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

//Middleware for the server
app.use(express.json()); 
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)
<<<<<<< HEAD
app.use('/api/v1/bookings', bookingRoute)
=======
app.use('/api/v1/clinics', clinicRoute);
app.use('/api/v1/clinic-admin', clinicAdminRoute);
app.use('/api/v1/admin', adminRoute);
>>>>>>> a709a73ad9aa069a9aa6fdee1477bead889eb05f

app.listen(port, () => {
    connectDB();
    console.log("server is running on port" +  port);
})