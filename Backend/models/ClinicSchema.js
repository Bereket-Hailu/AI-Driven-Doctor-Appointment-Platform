import mongoose from "mongoose";

const clinicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address_street: { type: String, required: true },
  address_city: { type: String, required: true },
  address_state: { type: String, required: true },
  address_postalCode: { type: String},
  address_country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  website: { type: String },
  isApproved: { type: String, enum: ["pending", "approved", "cancelled"], default: "pending" },
  approvedBy: { type: mongoose.Types.ObjectId, ref: "Admin" },
  createdBy: { type: mongoose.Types.ObjectId, ref: "ClinicAdmin", required: true },
  updatedBy: { type: mongoose.Types.ObjectId, ref: "ClinicAdmin" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model("Clinic", clinicSchema);