import mongoose from "mongoose";

const Doctorschema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    name: { type: String, required: true},
    phone: { type: Number},
    photo: { type: String},
    ticketprice: { type: Number},
    role: {
        type: String, 
    },

    //Doctors Field
    specialization: { type: String},
    qualification: {
        type: Array,
    },
    experience: {
        type: Array,
    },
    bio: {type: String, maxLength: 50},
    about: {type: String},
    timeslots: { type: Array},
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review"}],
    averageRating: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
    isApproved: {
        type: String,
        enum: ["pending", "approved", "cancelation"],
        default: "pending",
    },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment"}],
});

export default mongoose.model("Doctor", DoctorSchema);