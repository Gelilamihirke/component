import React from "react";
import { Link } from 'react-router-dom';
import notes from "../../assets/images/notes.png";

const PilotRun = () => {
  return (
    <section className="bg-primary-60 min-h-[486px] py-10 px-4 sm:px-6 md:px-10 lg:px-16 flex justify-center items-center font-inter">
      <div className="max-w-6xl w-full mt-8 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
        <img
          src={notes}
          alt="Clipboard with strategy map"
          className="w-[280px] sm:w-[320px]  md:w-[387px] md:h-[395px] h-auto max-h-[375px] -mt-7"
        />

        <div className="max-w-xl md:ml-8 lg:ml-30 -mt-8  text-center md:text-left">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] mb-4">
            Risk-Free Pilot Run
          </h2>
          
          <p 
            className="font-inter font-normal not-italic text-base sm:text-lg md:text-[20px] w-full max-w-[520px] align-middle mb-6 sm:mb-8 md:mb-10 mx-auto md:mx-0"
            style={{
              lineHeight: "1.6",
              letterSpacing: "0%",
              leadingTrim: "none", 
              verticalAlign: "middle",
            }}
          >
            We will invest hours in actual coding as part of your first project
            and deliver quick proof of our capabilities. You can then decide if
            you want to commission us with the full scope. If you think we are
            not a match, all good. There are no strings attached, and you will
            get a full refund. Sounds good?
          </p>

          <Link
            to="/consultation"
            className="inline-block bg-black text-white text-sm sm:text-base font-bold uppercase px-6 py-3 rounded hover:bg-primary transition-colors duration-300"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PilotRun;