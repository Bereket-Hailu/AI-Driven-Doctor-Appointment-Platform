
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ServiceCard = ({ item, index }) => {

  const { name, desc, bgColor, textColor } = item

  return (
    <div className="py-[30px] px-3 lg:px-5 bg-gradient-to-r from-blue-500 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-[26px] leading-9 text-black font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-black mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link 
          to='/doctors' 
          className="w-[44px] h-[44px] rounded-full border border-solid border-white flex items-center justify-center group hover:bg-yellow-500 hover:border-none transition-colors duration-300"
        >
          <BsArrowRight className="group-hover:text-white text-white w-6 h-5" />
        </Link>
        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{ 
            background: `${bgColor}`, 
            color: `${textColor}`, 
            borderRadius: '6px 0 0 6px',
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  )
}

export default ServiceCard
