import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import { BsFillAspectRatioFill } from "react-icons/bs";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div className="mb-[50px]">
      <h4 className="text-[20px] leading-[30px] font-bold text-black mb-[30px]">
        All reviews (1058)
      </h4>
      <div className="flex justify-between gap-10 mb-[30px]">
        <div className="flex gap-3">
          <figure className="w-10 h-10 rounded-full">
            <img className="w-full" src={avatar} alt="" />
          </figure>
          
          <div>
            <h5 className="text-[16px] leading-6 text-blue-500">Misgana Dawit</h5>
            <p className="text-[14px] leading-6 text-black">
              {formateDate("02-14-2023")}
              <p className="text__para mt-3 font-medium text-[15px]">
                Great services, highly recommended.👍
              </p>
            </p>
          </div>
        </div>

        <div className="flex gap-1">
          {[...Array(5).keys()].map((_, index) => (
            <AiFillStar key={index} color="#0067FF" />
          ))}
        </div>
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <button
            className="btn"
            onClick={() => setShowFeedbackForm(true)}
          >
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
