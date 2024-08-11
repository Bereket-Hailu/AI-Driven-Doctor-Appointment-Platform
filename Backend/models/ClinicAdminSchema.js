import mongoose from "mongoose";

const clinicAdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  clinic_id: { type: mongoose.Types.ObjectId, ref: "Clinic" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model("ClinicAdmin", clinicAdminSchema); 