import React from 'react';
import About from '../components/About/About';
import ServicesList from "../components/Services/ServicesList";
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import { BsArrowRight } from 'react-icons/bs';
import featureImg from '../assets/images/feature-img.png'
import { Link } from 'react-router-dom';
import DoctorList from '../components/Doctors/DoctorList';

const Home = () => {
  return (
    <>
      <section className="hero__section pt-16 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-24 items-center justify-between">
            <div className="lg:w-[576px]">
              <h1 className="text-[64px] leading-[68px] text-headingColor font-bold md:text-[56px] md:leading-[62px]">
                Find a Doctor and <br /> Book an Appointment
              </h1>
              <button className="btn">Request an appointment</button>
            </div>
          
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="Hero Image 1" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} className="w-full mb-[30px]" alt="Hero Image 2" />
              </div>
            
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="Icon 1" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a doctor
                  </h2>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="Icon 1" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Symptom checker
                  </h2>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="Icon 1" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book an appointment
                  </h2>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
          </div>
          <ServicesList />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, <br />and use the online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn mt-4">Learn more</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-770px flex justify-end mt-50px lg:nt-0">
              <img src={featureImg}  className="w-3/4" alt="" />
            </div>
          </div>
        </div>
      </section>
     
      <section>
      <div className="container">
        <div className="xl:w-470px mx-auto">
          <h2 className="heading text-textColor">Our great Doctors</h2>
        </div>
        <DoctorList />
      </div>
      </section>
    </>
  );
};

export default Home;
