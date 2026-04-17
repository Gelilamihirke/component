import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const SampleArchive = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl font-extrabold">
            Wondering What
            <span className="underline decoration-yellow-400 decoration-2">
              You Will Get?
            </span>
          </h2>
          <p className="mt-3 text-sm text-gray-900">
            We have prepared a sample archive for you. Feel free to download it and have a sneak peek.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-20 max-w-5xl mx-auto">
          <div className="flex justify-center md:flex-1 mb-10 md:mb-0">
            <img 
              alt="Illustration of a briefcase with a blue front panel, yellow folded corner, and red lock, outlined in black lines" 
              className="max-w-full h-auto" 
              height="300" 
              src="https://storage.googleapis.com/a1aa/image/81fc73e0-a0a7-484e-579a-d371f0207cd5.jpg" 
              width="400"
            />
          </div>
          
          <div className="md:flex-1 max-w-md">
            <ul className="space-y-4 text-sm text-black">
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 text-black" />
                <span className="ml-3">
                  Hand coded, pixel-perfect HTML/CSS from your design files
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 text-black" />
                <span className="ml-3">
                  jQuery animations – sliders, tooltips & more
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 text-black" />
                <span className="ml-3">
                  Semantic code (think SEO)
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 text-black" />
                <span className="ml-3">
                  Tested and compatible with all modern browsers
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 text-black" />
                <span className="ml-3">
                  Custom fonts included
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mt-1 text-black" />
                <span className="ml-3">
                  W3C validated code
                </span>
              </li>
            </ul>
            
            <button 
              className="mt-8 bg-black text-white font-bold text-xs uppercase px-5 py-3 rounded-md hover:bg-gray-900 transition-colors w-full md:w-auto" 
              type="button"
            >
              DOWNLOAD SAMPLE ARCHIVE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SampleArchive;