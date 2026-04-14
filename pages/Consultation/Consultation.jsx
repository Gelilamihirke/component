import React, { useState } from 'react';
import InquiryModal from "../../components/InquiryModal/InquiryModal";
import MeetingPage from "../../components/MeetingPage/MeetingPage";

const Consultation = () => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [isLoadingMeeting, setIsLoadingMeeting] = useState(false);

  const handleOpenMeeting = () => {
    setIsLoadingMeeting(true);
    setTimeout(() => {
      setIsLoadingMeeting(false);
      setShowMeetingModal(true);
    }, 2000); 
  };

  return (
    <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 min-h-screen flex flex-col justify-center mt-27">
      <div className="w-full text-center">
        <p className="text-[32px] font-normal mb-2">Get a Free Consultation</p>
        <h1 className="font-extrabold text-3xl lg:text-[56px] sm:text-4xl md:text-5xl lg:ml-5 mt-5   leading-tight mb-7">
          Let's explore how we can{' '}
          <span className="relative inline-block">
            <span className="relative font-inter z-10">Work together</span>
            <span
              className="absolute left-0 bottom-3 w-full h-2 bg-primary z-0"
              aria-hidden="true"
            ></span>
          </span>
        </h1>
        <p className="text-[20px] lg:w-[1100px] mx-auto">
          Our team will work with you to understand your business needs, your goals, and your vision. We'll listen carefully,
          and then provide you with a detailed plan of action outlining the steps we'll take to bring your project to life.
        </p>
      </div>

      <div className="mt-20 w-full lg:ml-1 flex flex-col sm:flex-row gap-8">
        {/* Inquiry Section */}
        <div className="bg-primary rounded-md p-12 flex-1">
          <h2 className="font-bold text-[24px] mb-4">Submit an Inquiry</h2>
            <p className="mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-[18px] max-w-full sm:max-w-md">
            This is a simple way to connect with us, request information, ask a question, or even get started with a new project.
          </p>
          <div>
             <button
              className="border border-black font-bold text-black px-4 py-2 sm:px-5 sm:py-2 mb-3 sm:mb-4 hover:bg-black hover:text-primary transition-colors duration-300 text-sm sm:text-base"
              type="button"
              onClick={() => setShowInquiryModal(true)}
            >
              LEAVE US A MESSAGE
            </button>

            {showInquiryModal && (
              <InquiryModal onClose={() => setShowInquiryModal(false)} />
            )}
          </div>
          <p className="text-[12px] max-w-xs">The first reply takes around a business day.</p>
        </div>

        {/* Meeting Section */}
        <div className="bg-[#0099cc] rounded-md p-12 flex-1 text-white">
          <h2 className="font-semibold text-[24px] ">Schedule a Meeting</h2>
           <p className="mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-[18px] max-w-full sm:max-w-md">
            Select a suitable time slot and have a video call with a project manager to discuss your needs.
          </p>

          <div>
           <button
      className="border border-white font-bold text-white px-5 py-2 mb-4 hover:bg-white hover:text-[#0099cc] transition-colors duration-300"
      onClick={handleOpenMeeting}
    >
      BOOK A VIDEO MEETING
    </button>

            {/* Custom Dot Loader */}
            {isLoadingMeeting && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
                </div>
              </div>
            )}

            {showMeetingModal && (
              <MeetingPage onClose={() => setShowMeetingModal(false)} />
            )}
          </div>

          <p className="text-[12px] max-w-xs">Synced with the availability on both sides.</p>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
