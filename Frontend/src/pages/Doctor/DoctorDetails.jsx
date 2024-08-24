import { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import {BASE_URL} from '../../config';
import useFetchData from '../../hooks/useFetchData';
import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const{id} = useParams()
  const {data:doctor, loading, error} = useFetchData('${BASE_URL}/doctors/${id}');

  const {
    name,
    qualification,
    experiance,
    timeslots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrices,
    photo,
  } =doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
      {loading && <Loader />}
      {error && <Error />}
       { !loading && !error && (<div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[500px]">
                <img src={photo} alt="Doctor" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-teal-600 py-1 px-6 lg:py-2 lg:px-6 text-[12px]">
                  {specialization}
                </span>
                <h3 className="text-black text-[22px] leading-9 mt-3 font-bold">
                  {name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-black">
                    <img src={starIcon} alt="Star" /> {averageRating}
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-black">
                    ({totalRating})
                  </span>
                  
              </div>
              <div>
                     <p  className="flex items-center gap-[6px]">{bio} </p></div>
                </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about"
                    ? "border-b border-solid border-[#0066ff34]"
                    : ""
                } py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}
              >
                About
              </button>

              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback"
                    ? "border-b border-solid border-[#0066ff34]"
                    : ""
                } py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout name={name}
               about={about}
                qualification={qualification} 
                experiance ={experiance} />}
              {tab === "feedback" && <Feedback reviews={reviews} totalRating={totalRating} />}
            </div>
          </div>
          <div>
            <SidePanel  doctor={doctor.id} ticketPrices={ticketPrices} timeslots={timeslots}  />
          </div>
        </div>)}
      </div>
    </section>
  );
};

export default DoctorDetails;
