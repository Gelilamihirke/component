import React from 'react';
import Navbar from "../../components/Navbar/Navbar";


const ContactPage = () => {
  return (
    <>
   <Navbar bgColor="bg-gray-100" />

      <div className="bg-gray-100 ">
        <div className="max-w-7xl mx-auto px-4  pt-40 py-10 text-center">
          <p className="text-[32px]">Contact Us</p>
          <h1 className="font-extrabold text-[56px] mt-2 mb-4 inline-block">
            We Speak <span className="relative inline-block"><span>HTMLish</span><span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span></span>
          </h1>
          <p className="max-w-3xl mx-auto text-[20px]">
            We are located in Europe (GMT +02:00) and we operate internationally with clients from the US, UK, Canada, Australia, and many other countries.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col sm:flex-row justify-center text-center gap-10 sm:gap-0">
          <div className="flex-1 border-r border-gray-300 sm:border-r flex flex-col items-center">
            <div className="text-gray-600 text-2xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h2 className="font-bold text-[24px] mb-4">Postal Address:</h2>
            <div className='text-[16px]'>
  <p>Kemp House</p>
            <p>152-160 City Road</p>
            <p>London EC1V 2NX</p>
            <p>United Kingdom</p>
            </div>
          
          </div>

          <div className="flex-1 border-r border-gray-300 sm:border-r flex flex-col items-center mt-10 sm:mt-0">
            <div className="text-gray-600 text-2xl mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h2 className="font-bold text-[24px] mb-4">Get in Touch:</h2>
            <div className='text-[16px]'>
 <p>info@htmlburger.com</p>
            <p><strong>US:</strong> +1 844 224 1228</p>
            <p><strong>UK:</strong> +44 203 637 5848</p>
            </div>
           
          </div>

          <div className="flex-1 flex flex-col items-center mt-10 sm:mt-0">
            <div className="text-gray-600 text-2xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h2 className="font-bold text-[24px] leading-1.5 mb-4">Business Address:</h2>
          <div className='text-[16px] '>
             <p>Floor 3</p>
            <p>8 Neptune str</p>
            <p>Western Industrial Area</p>
            <p>Varna 9000, Bulgaria</p>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;