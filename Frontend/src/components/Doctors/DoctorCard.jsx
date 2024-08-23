import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowBarRight } from 'react-icons/bs'; 
import starIcon from '../../assets/images/Star.png'; 

const DoctorCard = ({ doctor }) => {
  const { name, avRating, totalRating, photo, specialization } = doctor;

  return (
    <div className="p-3 lg:p-5 flex flex-col items-center">
      <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mb-3">
        <img
          src={photo}
          className="w-full h-full object-cover mx-auto"
          alt={name}
        />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] text-center mb-2">
        {name}
      </h2>
      <div className="flex flex-col items-center">
        <span className="bg-[#CCF0F3] text-blue-500 py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 mb-2">
          {specialization}
        </span>
        <div className="flex items-center gap-2">
          <img src={starIcon} alt="Star icon" className="w-5 h-5" />
          <span className="text-[16px] leading-7 font-semibold text-headingColor">
            {avRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        

        </div>
      </div>
      <div className="[nt-18px] lg:nt-5 flex item-center justify-between">
        <div>
          <p className="[text-14px] leading-6 font-[400] text-textColor">
            At {experiances && experiances[0] ?.hospital}
          </p>
        </div>
        <Link
                  to={'/doctors/${doctor._id}'}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
