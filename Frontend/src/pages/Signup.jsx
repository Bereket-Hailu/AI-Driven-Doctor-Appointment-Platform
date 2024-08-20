import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Register Here</h1>
      <div className="flex space-x-8">
        {" "}
\
        <Link to="/">
          <div className="flex items-center justify-center w-80 h-80 border-2 border-blue-500 rounded-lg shadow-lg hover:bg-blue-100 cursor-pointer">
            <span className="text-xl">Register as Patient</span>
          </div>
        </Link>
        <Link to="/">
          <div className="flex items-center justify-center w-80 h-80 border-2 border-green-500 rounded-lg shadow-lg hover:bg-green-100 cursor-pointer">
            <span className="text-xl">Register as Doctor</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
