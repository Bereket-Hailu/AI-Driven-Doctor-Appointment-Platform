import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Profile = ({user}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  // const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('');
  const [clinicType, setClinicType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    bloodType: '',
    address: '', 
    phone: '',   
  });

  const navigate = useNavigate();
  useEffect(() => {
    setFormData({name: user.name, email: user.email, photo:user.photo, gender:user.gender, bloodType:user.bloodType, address:user.address})
  }, [user])

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    // setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log('formData')
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/$users._id`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/users/profile/me');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='mt-10'>
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
                      aria-readonly
                      readOnly 
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
                  <label className='text-black font-bold text-[16px] leading-7'> Password</label>
                    <input 
                      type="text" 
                      placeholder='Blood Type' 
                      name='bloodType' 
                      value={formData.bloodType} 
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
                  <div className='mb-5 flex items-center gap-3'>
                    {formData.photo && (
                      <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                        {<img src={formData.photo} alt="Preview" className='w-full rounded-full' />}
                      </figure>
                    )}
                    <div className='relative w-[130px] h-[50px]'>
                    <input 
                      type="file" 
                      name='photo' 
                      id='customFile'
                      onChange={handleFileInputChange} 
                      accept='.jpg, .jpeg, .png' 
                      required
                      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' 
                    />

                    <label 
                       htmlFor='customFile'
                       className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem]
                       text-[15px] leading-8 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold
                       rounded-lg truncate cursor-pointer'
                      >{selectedFile? selectedFile.name: 'Upload Photo'}
                    </label>
                    </div>
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
                        {loading ? <HashLoader size={35} color='#ffffff'/> : 'Signup'}
                      </button>
                    )}
                  </div>
                </form>
    </div>
  )
}

export default Profile