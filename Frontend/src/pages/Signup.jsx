import { useState } from 'react';
import signupImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

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
    address: '', 
    phone: '',   
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
    console.log('formData')
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

    // Redirect to DoctorSignup page
    navigate('/doctor-signup');
  };

  return (
    <section className='px-5 xl:px-0'>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>
          {/* Sign Up Form */}
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
                  {/* Common Fields */}
                  <div className="mb-5">
                  <label className='text-black font-bold text-[16px] leading-7'> Full Name</label>
                    <input 
                      type="text" 
                      placeholder='Enter your full name' 
                      name='name' 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required
                      className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' 
                    />
                  </div>
                  <div className="mb-5">
                  <label className='text-black font-bold text-[16px] leading-7'> Email</label>
                    <input 
                      type="email" 
                      placeholder='Enter your Email' 
                      name='email' 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required
                      className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' 
                    />
                  </div>
                  <div className="mb-5">
                  <label className='text-black font-bold text-[16px] leading-7'> Password</label>
                    <input 
                      type="password" 
                      placeholder='Password' 
                      name='password' 
                      value={formData.password} 
                      onChange={handleInputChange} 
                      required
                      className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' 
                    />
                  </div>
                  <div className="mb-5">
                  <label className='text-black font-bold text-[16px] leading-7'> Phone no</label>
                    <input 
                      type="text" 
                      placeholder='Phone' 
                      name='phone' 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      required
                      className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' 
                    />
                  </div>
                  
                  <div className='mb-5'>
                    <label className='text-black font-bold text-[16px] leading-7'>
                      Gender:
                      <select 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleInputChange} 
                        required
                        className='text-black font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                      >
                        <option value="select">-Select-</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </label>
                  </div>
                  <div className='mb-5'>
                    <input 
                      type="file" 
                      name='photo' 
                      onChange={handleFileInputChange} 
                      accept='.jpg, .jpeg, .png' 
                      required
                      className='w-full' 
                    />
                    {previewURL && <img src={previewURL} alt="Preview" className='mt-3 w-32 h-32 object-cover' />}
                  </div>

                  
                  {role === 'patient' && (
                    <>
                      <div className="mb-5">
                      <label className='text-black font-bold text-[16px] leading-7'>  Address</label>
                        <input 
                          type="text" 
                          placeholder='Insert your address' 
                          name='address' 
                          value={formData.address} 
                          onChange={handleInputChange} 
                          required
                          className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' 
                        />
                      </div>
                     
                    </>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-between mt-7">
                    {role !== '' && (
                      <button disabled = {loading && true}
                        type='submit' 
                        className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 mt-10'>
                        {loading ? <HashLoader size={25} color='#ffffff'/> : 'Signup'}
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
