import mongoose from "mongoose";

const clinicAdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  role: {
    type: String,
  },

  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  clinic_id: { type: mongoose.Types.ObjectId, ref: "Clinic" },
  approvedBy: { type: mongoose.Types.ObjectId, refPath: 'role' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model("ClinicAdmin", clinicAdminSchema); 