import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (

    <section className="bg-primary-60 py-10 sm:py-16 lg:h-[569px] px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-extrabold ml-0 sm:ml-33 mt-6 sm:mt-10 lg:ml-2 lg:mt-15 text-3xl sm:text-[34px] lg:text-[56px] mb-3 sm:mb-4">
          Let's Get Started Now!
        </h1>
        
        <p className="mb-6 sm:mb-8 w-full lg:w-[909.26px] lg:-ml-18 mx-auto text-base lg:text-xl leading-relaxed">

          Ready to bring your project to life? Our team of experts is here to
          help. Request a quote today to get started or begin a conversation to
          learn more about our services. We pride ourselves on delivering
          high-quality work at reasonable cost. Don't wait – let's get started!
        </p>
<button type="button" className="w-full sm:w-auto flex lg:ml-50 justify-center">
  <Link
    to="/quote"
    className="inline-flex items-center justify-center bg-secondary text-white font-bold py-2 lg:w-[370.27px] lg:h-[64px] text-base lg:text-lg px-4 sm:py-3 sm:px-6 rounded-md hover:bg-primary hover:text-white transition w-full sm:w-auto text-center"
  >
    GET A QUOTE FOR YOUR PROJECT
  </Link>
</button>


        <div className="mt-3 sm:mt-6">
          <Link 
            to="/consultation" 
           className="font-inter font-bold text-center align-middle underline lg:text-[20px] sm:text-xl md:text-base"
  style={{
    lineHeight: '32px',
    letterSpacing: '0%',
    textDecorationStyle: 'solid',
    textUnderlineOffset: '0%',
    textDecorationThickness: 'auto',
    textDecorationSkipInk: 'auto'
  }}


          >
            or start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
