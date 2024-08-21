import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Doctors from '../pages/Doctor/Doctors';
import Doctorsdetails from '../pages/Doctor/DoctorDetails';
import { Routes, Route, Navigate } from 'react-router-dom';  

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Default route */}
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctorsdetails" element={<Doctorsdetails />} /> {}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirects unknown routes to Home */}
    </Routes>
  );
};

export default AppRoutes;
