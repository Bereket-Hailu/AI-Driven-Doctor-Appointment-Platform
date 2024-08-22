import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualification: [{ startingDate: "", endingDate: "", degree: "", university: "" }],
    experience: [{ startingDate: "", endingDate: "", position: "", hospital: "" }],
    timeslots: [{ day: "", startingTime: "", endingTime: "" }],
    about: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: URL.createObjectURL(file) });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Update profile logic here
  };

  const addItem = (key, newItem) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], newItem],
    }));
  };

  const handleQualificationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQualifications = [...formData.qualification];
    updatedQualifications[index][name] = value;
    setFormData({ ...formData, qualification: updatedQualifications });
  };

  const addQualification = (e) => {
    e.preventDefault();
    addItem("qualification", { startingDate: "", endingDate: "", degree: "", university: "" });
  };

  const removeQualification = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      qualification: prevFormData.qualification.filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">Profile Information</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-5">
          <p className="form__label">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Phone</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Bio</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
            maxLength={100}
          />
        </div>

        {/* Qualification Section */}
        <div className="mb-5">
          <p className="form__label">Qualification</p>
          {formData.qualification.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Starting Date</p>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    onChange={(e) => handleQualificationChange(index, e)}
                    className="form__input"
                  />
                </div>
                <div>
                  <p className="form__label">Ending Date</p>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    onChange={(e) => handleQualificationChange(index, e)}
                    className="form__input"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <p className="form__label">Degree</p>
                  <input
                    type="text"
                    name="degree"
                    value={item.degree}
                    onChange={(e) => handleQualificationChange(index, e)}
                    placeholder="Degree"
                    className="form__input"
                  />
                </div>
                <div>
                  <p className="form__label">University</p>
                  <input
                    type="text"
                    name="university"
                    value={item.university}
                    placeholder="University"
                    className="form__input"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeQualification(index)}
                className="bg-red-600 p-2 rounded-full text-white text-[16px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button onClick={addQualification} className="bg-[#000] py-2 px-5 rounded text-white h-fit">
            Add Qualification
          </button>
        </div>

        {/* Photo Upload */}
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={formData.photo} alt="Profile" className="w-full rounded-full" />
            </figure>
          )}
        </div>

        <div className="relative w-[130px] h-[50px]">
          <input
            type="file"
            name="photo"
            id="customFile"
            onChange={handleFileInputChange}
            accept=".jpg, .png"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
          <label
            htmlFor="customFile"
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#0066ff46] text-headingColor font-semibold rounded-lg cursor-pointer"
          >
            Upload Photo
          </label>
        </div>

        <div className="mt-2">
          <button
            type="submit"
            className="bg-primaryColor text-white text-[16px] leading-[30px] w-full py-3 px-4 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
