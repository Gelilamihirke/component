import React from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/images/mainlogo.png";
import loggo from "../../assets/images/logo.png";
import DateTimePicker from "../../components/DateTimePicker/DateTimePicker";

const MeetingPage = ({ onClose }) => {


  const handleClosePage = () => {
    window.open('', '_self');
    window.close();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white z-50"
        aria-label="Close"
      >
        <FaTimes size={24} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[95%] sm:max-w-xl md:max-w-3xl max-h-[80vh] lg:w-[679px] lg:mt-16 overflow-y-auto bg-white  sm:p-10  rounded-md shadow-xl"
      >
       <header className="border-b border-gray-300 mb-9">
  <div className="flex items-center justify-center  -mt-3">
    <img
      alt="Jirtuu software lab logo"
      className="h-10 sm:h-14 md:h-16"
      src={logo}
    />
  </div>
</header>

        <main className="mt-5 text-center">
          <img
            src={loggo}
            alt="Jirtuu icon"
            className="mx-auto mb-3 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
          />
          <h2 className="text-gray-600 font-semibold text-sm sm:text-base mb-1">
            Jirtuu software labs
          </h2>
          <h3 className="text-slate-900 font-extrabold lg:text-[28px] sm:text-2xl md:text-3xl mb-4 leading-tight">
            30 Minute Meeting
          </h3>

          <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-3 text-gray-600 mb-4 text-sm font-medium">
            <div className="flex items-center gap-1">
              <i className="far fa-clock text-base"></i>
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-1 text-center sm:text-left">
              <i className="far fa-video text-base"></i>
              <span>Web conferencing details provided upon confirmation.</span>
            </div>
          </div>
        </main>

        <p className="text-slate-900 ml-32 mt-9 text-sm sm:text-base max-w-md mx-auto text-left mb-6">
          Book a 30-minute meeting with a manager at Jirtuu software labs.
        </p>

        <div className="border-b border-gray-300 mb-6 "></div>

        <DateTimePicker />
      </div>
    </div>
  );
};

export default MeetingPage;
