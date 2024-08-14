import jwt from "jsonwebtoken"
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const authenticate = async(req, res, next) => {
    //get token from headers
    const authToken = req.headers.authorization

    //check token is exist
    if (!authToken || !authToken.startsWith("Bearer")){
        return res
           .status(401)
           .json({ success: false, message: "No token, authorization denied"})
    }


    try{
        const token  = authToken.split(" ")[1];
         
        // verify token
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userId = decode.id
        req.role = decode.role

        next();// calls the next function
    }catch(err){

        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({message:'Token is Expired'})
        }

        return res.status(401).json({success: false, message: 'Invalid token'})

    }
} 
