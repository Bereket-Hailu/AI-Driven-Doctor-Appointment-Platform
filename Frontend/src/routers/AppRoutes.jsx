import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Signup from '../pages/Signup';
import DoctorSignup from '../pages/DoctorSignup';
import Login from '../pages/Login';
import Doctors from '../pages/Doctor/Doctors';
import DoctorDetails from '../pages/Doctor/DoctorDetails';
import MyAccount from '../Dashboard/user-account/MyAccount'; 
import Dashboard from "../Dashboard/doctor-account/Dashboard"
import CheckoutSuccess from '../pages/CheckoutSuccess'

import { Routes, Route, Navigate } from 'react-router-dom'; 
import ProtectedRoute from './ProtectedRoute';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Default route */}
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/doctor-signup" element={<DoctorSignup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout-success" element={<CheckoutSuccess/>}/>
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirects unknown routes to Home */}
      <Route path='/users/profile/me' element = {<ProtectedRoute allowedRoles= {['patient']} ><MyAccount /></ProtectedRoute>} />
      <Route path='/doctors/profile/me' element = {<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
