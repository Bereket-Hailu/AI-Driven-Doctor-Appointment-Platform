const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }, 
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  role: {
    type: String,
    default: 'admin'
  },
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
