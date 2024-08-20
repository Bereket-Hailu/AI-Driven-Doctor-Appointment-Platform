import React, { useState } from 'react';
import signupImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('');
  const [clinicType, setClinicType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient',
    
    
  });
  const navigate = useNavigate();
 


  

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setFormData({ ...formData, role: selectedRole });
  };
  

  const handleClinicTypeSelection = (selectedClinicType) => {
    setClinicType(selectedClinicType);
    setFormData({ ...formData, clinicType: selectedClinicType });
  };

  return (
    <section className='px-5 xl:px-0'>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* =----------img--------- */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>
          {/* ----------------sign up form------------ */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            {role === '' ? (
              <>
                <h3 className='text-headingColor text-[22px] text-center leading-9 font-bold mb-10'>
                  Register Here
                </h3>
                <div className="flex space-x-8 justify-center">
                  <div onClick={() => handleRoleSelection('patient')} className="flex items-center justify-center w-80 h-80 border-2 border-blue-500 rounded-lg shadow-lg hover:bg-blue-100 cursor-pointer">
                    <span className="text-xl">Register as Patient</span>
                  </div>
                  <div onClick={() => handleRoleSelection('doctor')} className="flex items-center justify-center w-80 h-80 border-2 border-green-500 rounded-lg shadow-lg hover:bg-green-100 cursor-pointer">
                    <span className="text-xl">Register as Doctor</span>
                  </div>
                </div>
              </>
            ) : role === 'doctor' && clinicType === '' ? (
              <>
                <h3 className='text-headingColor text-[22px] text-center leading-9 font-bold mb-10'>
                  Are you a <span className='text-primaryColor'>Clinic Doctor</span> or <span className='text-primaryColor'>Self-doctor</span>?
                </h3>
                <div className="flex space-x-8 justify-center">
                  <div onClick={() => handleClinicTypeSelection('clinic')} className="flex items-center justify-center w-80 h-80 border-2 border-blue-500 rounded-lg shadow-lg hover:bg-blue-100 cursor-pointer">
                    <span className="text-xl">Clinic Doctor</span>
                  </div>
                  <div onClick={() => handleClinicTypeSelection('self')} className="flex items-center justify-center w-80 h-80 border-2 border-green-500 rounded-lg shadow-lg hover:bg-green-100 cursor-pointer">
                    <span className="text-xl">Self-doctor</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className='text-headingColor text-[22px] text-center leading-9 font-bold mb-10'>
                  Create an <span className='text-primaryColor'>Account</span>
                </h3>

                <form onSubmit={submitHandler}>
                  <div className="mb-5">
                    <input type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleInputChange}
                      className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer font-semibold' required
                    />
                  </div>
                  <div className="mb-5">
                    <input type="email" placeholder='Enter your Email' name='email' value={formData.email} onChange={handleInputChange}
                      className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer font-semibold' required
                    />
                  </div>
                  <div className="mb-5">
                    <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleInputChange}
                      className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer font-semibold' required
                    />
                  </div>
                  <div className='mb-5 flex items-center justify-between'>
                    <label className='text-headingColor font-bold text-[16px] leading-7'>
                      Gender:
                      <select name="gender" value={formData.gender} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                        <option value="select">-Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </label>
                  </div>

                  <div className='mb-5 flex items-center gap-3'>
                    {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center '>
                      <img src={previewURL} className='w-full rounded-full' alt="" />
                    </figure>}

                    <div className='relative w-[130px] h-[50px]'>
                      <input type="file" name='photo' id='customfile' onChange={handleFileInputChange} accept='.jpg, .jpeg, .png'
                        className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                      />
                      <label
                        htmlFor="customfile"
                        className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer hover:bg-[#0066ff80] hover:text-white'>
                        Upload Photo
                      </label>
                    </div>
                  </div>

                  

                  <div className='mt-7'>
                    <button disabled={loading && true} type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 '>{loading ? <HashLoader size={35} color='#fffff' /> : `Sign Up`}</button>
                  </div>

                  <p className='mt-5 text-textColor text-center'>
                    Already have an account?<Link to="/login" className='text-primaryColor font-medium ml-1'>Login</Link>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
