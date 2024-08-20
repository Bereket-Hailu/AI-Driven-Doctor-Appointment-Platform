import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment';

const DoctorSignup = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    photo: '',
    phone: '',
    address: '',
    specialization: '',
    experience: '',
    clinicType: '',
    bio: '',
    ticketPrice: '',
    qualifications: '',
    timeSlots: [],
  });

  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data.url });
  };
// State to hold the currently selected date and time
const [selectedDateTime, setSelectedDateTime] = useState(null);

// Function to add the selected time slot to the formData
const addTimeSlot = () => {
  if (selectedDateTime) {
    setFormData({ 
      ...formData, 
      timeSlots: [...formData.timeSlots, selectedDateTime.format('YYYY-MM-DD HH:mm')] 
    });
    setSelectedDateTime(null); // Reset the selectedDateTime after adding
  }
};



  
// Function to remove a time slot
  const removeTimeSlot = (index) => {
    const newTimeSlots = formData.timeSlots.filter((_, i) => i !== index);
    setFormData({ ...formData, timeSlots: newTimeSlots });
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

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <section className='flex items-center justify-center min-h-screen'>
      <div className="bg-blue-500 p-10 rounded-lg shadow-lg max-w-[800px] w-full">
        <h3 className='text-white text-[24px] text-center font-bold mb-8'>
          Doctor Registration
        </h3>
        <form onSubmit={submitHandler}>
          {currentPage === 1 && (
            <>
              <div className="mb-5">
              <label className='text-white font-bold text-[16px] leading-7'> Full name</label>
                <input type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleInputChange} required
                  className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' />
              </div>
              <div className="mb-5">
              <label className='text-white font-bold text-[16px] leading-7'> Email</label>
                <input type="email" placeholder='Enter your Email' name='email' value={formData.email} onChange={handleInputChange} required
                  className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' />
              </div>
              
              <div className="mb-5">              
                <label className='text-white font-bold text-[16px] leading-7'> Password</label>
                <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} required
                  className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' />
              </div>

              <div className="mb-5">
              <label className='text-white font-bold text-[16px] leading-7'> Phone number</label>
                <input type="text" placeholder='Phone' name='phone' value={formData.phone} onChange={handleInputChange} required
                  className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' />
              </div>
              
              <div className='mb-5'>
                <label className='text-white font-bold text-[16px] leading-7'>
                  Gender:
                  <select name="gender" value={formData.gender} onChange={handleInputChange} required
                    className='text-black font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none rounded-md'>
                    <option value="">-Select-</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>
              <div className='mb-5'>
                <input type="file" name='photo' onChange={handleFileInputChange} accept='.jpg, .jpeg, .png' required
                  className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' />
              </div>
            </>
          )}

          {currentPage === 2 && (
            <>
              <div className="mb-5">
                <label className='text-white font-bold text-[16px] leading-7'>
                  Specialization:
                  <select name="specialization" value={formData.specialization} onChange={handleInputChange} required
                    className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-black font-semibold text-[15px] leading-7 rounded-md'>
                    <option value="">-Select-</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="anesthesiology">Anesthesiology</option>
                    <option value="general-surgery">General surgery</option>
                    <option value="oncology">Oncology</option>
                    <option value="ophthalmology">Ophthalmology</option>
                    <option value="gynecology">Gynecology</option>
                    <option value="radiology">Radiology</option>
                  </select>
                </label>
              </div>
              <div className="mb-5">
                 <label className='text-white font-bold text-[16px] leading-7'>
                   Experience:
                   <select name="experience" value={formData.experience} onChange={handleInputChange} required
                    className=' w-full pr-4 py-3 border-b border-solid focus:outline-none text-black font-semibold text-[15px] leading-7 rounded-md'>
                    <option value="select">-Select</option>
                    <option value="< 1 years">less than 1 year</option>
                    <option value="1-5 years">1-5 years</option>
                    <option value="6-10 years">6-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </label>
              </div>
              <div className="mb-5">
              <label className='text-white font-bold text-[16px] leading-7'>Add Qualifications</label> 
              <select name="qualifications" 
               value={formData.qualifications} 
               onChange={handleInputChange} required
                className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black font-semibold placeholder:text-black-500 rounded-md'
                >
                    <option value="select">-Select Qualification-</option>
                    <option value="Bachelor of Medicine">Bachelor of Medicine</option>
                    <option value="Bachelor of Surgery">Bachelor of Surgery</option>
                    <option value="Doctor of Medicine">Doctor of Medicine</option>
                    <option value="Master of Surgery">Master of Surgery</option>
                    <option value="Master of Medicine">Master of Medicine</option>
                    <option value="Doctorate of Medicine">Doctorate of Medicine</option>
                    <option value="Doctorate of Surgery">Doctorate of Surgery</option>
              {/* Add more options as necessary */}
              </select>
              </div>
              <div className="mb-5">
								<div className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black font-semibold placeholder:text-black-500 rounded-md'>
											<label className='text-white font-bold text-[16px] leading-7'>Add Hospital</label> 
											<div class="form-group field-userprofile-hospital_id required">

                          <select  name="hospital" 
                              value={formData.hospitals} 
                              onChange={handleInputChange} required
                                className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black font-semibold placeholder:text-black-500 rounded-md'>
                                  <option value="">-Select Hospital-</option>
                                  <option value="18">Muse Hospital</option>
                                  <option value="19">Yoya Hospital</option>
                                  <option value="20">Adama General Hospital</option>
                                  <option value="21">Adama Referal Hospital</option>
                                  <option value="22">Eyor Higher Clinic</option>
                                  <option value="23">Meseker Clinic</option>
                                  <option value="24">Rift ValleyL Hospital</option>
                                  <option value="25">Sister Aklesia Memorial Hospital</option>
                                  <option value="26">Medhin Beza Hospital</option>
                                  <option value="27">Bati Hospital</option>
                                  <option value="28">Dire Godana Hospital</option>
                                  <option value="29">TEKELEHAYMANOT GENERAL Hospital</option>
                                  <option value="30">Tazma Medical and Surgical Specialized Center</option>
                                  <option value="31">ST. GABRIEL GENERAL Hospital</option>
                                  <option value="32">KIDUS YARED Hospital</option>
                                  <option value="33">Marie Stopes Ethiopia</option>
                                  <option value="34">KADISCO GENERAL Hospital</option>
                                  <option value="35">BETEZATHA GENERAL HOSPITA</option>
                                  <option value="36">DR EMEBET SPECIAL DENTAL CLINIC</option>
                                  <option value="37">NATIONAL GENERAL Hospital</option>
                      </select>
                        </div>										
                       </div>
                    </div>  
               </>
          )}

          {currentPage === 3 && (
            <>
                <div className="mb-5">
                <label className='text-white font-bold text-[16px] leading-7'>Brief Profile</label>
                  <textarea placeholder='Add your Bio here' name='bio' value={formData.bio} onChange={handleInputChange} required
                    className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md'></textarea>
                </div>

                <div className="mb-5">
                <label className='text-white font-bold text-[16px] leading-7'> Ticket price</label>
                  <input type="number" placeholder='Ticket Price' name='ticketPrice' value={formData.ticketPrice} onChange={handleInputChange} required
                    className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' />
                </div>
              
                <div className="mb-5">
                  <label className='text-white font-bold text-[16px] leading-7'>
                    Available Time Slots:
                    <Datetime 
                    value={selectedDateTime}
                    onChange={(date) => setSelectedDateTime(date)} // Set the selectedDateTime on change
                    inputProps={{ placeholder: 'Select Date & Time' }}
                      dateFormat="YYYY-MM-DD"
                      timeFormat="HH:mm"
                      isValidDate={(current) => current.isAfter(moment())}
                      className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md'
                      />
                      </label>
                      </div>
                        <div className="mb-5">
                          <button 
                          type="button" 
                          onClick={() => addTimeSlot()} // Call the function to add time slot
                          className='bg-primaryColor text-white px-4 py-2 rounded'>
                            Add Time Slot
                            </button>
                              </div>
                          <div className="mb-5">
                            {formData.timeSlots.length > 0 && (
                              <ul className='text-white'>
                                {formData.timeSlots.map((slot, index) => (
                                  <li key={index} className="flex justify-between mb-2">
                                    <span>{slot}</span>
                                    <button
                                    type="button"
                                    onClick={() => removeTimeSlot(index)}
                                    className="text-red-500"
                                    >
                                      Remove
                                      </button>
                                      </li>
                                    ))}
                                    </ul>
                                  )}
                                  </div>
              <div className="mb-5">
              <label className='text-white font-bold text-[16px] leading-7'> Address</label>
                <input type="text" placeholder='Your address here' name='address' value={formData.address} onChange={handleInputChange} required
                  className='w-full pr-4 py-3 border-b border-solid focus:outline-none text-[16px] leading-7 text-black placeholder:text-gray-500 rounded-md' />
              </div>
            </>
          )}
          <div className="mt-7">
            <div className="flex justify-between">
              {currentPage > 1 && (
                <button type="button" 
                onClick={prevPage} 
                className='bg-gray-300 px-4 py-2 rounded'>
                  Previous
                  </button>
                )}
                {currentPage < 3 && (
                  <button  type="button" 
                  onClick={nextPage} 
                  className='bg-primaryColor text-white px-4 py-2 rounded'>
                    Next</button>)}
                    </div>
                    {currentPage >= 3 && (<button type='submit' 
                     className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 mt-10'>
                      {loading ? <HashLoader size={25} color='#ffffff'/> : 'Signup'}
                      </button>
                    )}
                    </div>

        </form>
      </div>
    </section>
  );
}

export default DoctorSignup;

