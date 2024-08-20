import React from 'react';
import {doctors} from '../../assets/data/doctors';
import DoctorCard from './DoctorCard'

const DoctorList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid -cols-2 md:grid-col-3 gap-5 lg:gap-30px mt-30px lg:nt-55px'>
        {doctors.map((doctor,index) =><DoctorCard key={doctor} doctor={doctor} />)}
      
    </div>
  )
}

export default DoctorList
