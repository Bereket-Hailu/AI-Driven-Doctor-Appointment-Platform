import React from 'react';
import aboutImg from "../../assets/images/about.png";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-12 lg:gap-32 xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="About" className="w-full" />
          </div>
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 flex flex-col items-center lg:items-start justify-center">
            <h2 className="text-center text-lg lg:text-xl xl:text-2xl font-semibold mb-4">
              Proud to be one of the best
            </h2>
            <p className="text__para mb-4">
              I am Dr. Mihret, a dedicated Dermatologist with over 10 years of experience in internal medicine.
              Our best is something we strive for each day, caring for our patients—not looking back at what we accomplished,
              but toward what we can do tomorrow, providing the best service.
            </p>
            <Link to="/">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
