import React from "react";
import { FaCheckCircle } from "react-icons/fa"; 
import Navbar from "../../components/Navbar/Navbar";
const Quote = () => {
  return (
    <>
       <Navbar bgColor="bg-[#F4F4F4]" />
    <main className="bg-[#F4F4F4]  min-h-screen flex items-center justify-center p-6 py-30">
      <div className="max-w-[1250px] w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <section className="max-w-[400px] mx-auto md:mx-0">
          <p className="mb-1 text-[32px] font-normal lg:mt-6 xl:mt-12">Submit Your Project &</p>
          <h1 className="text-[48px] font-extrabold mb-6 leading-tight">
            <span className="underline decoration-[5px] underline-offset-[6px] decoration-primary">
              Get a Precise Quote
            </span>
          </h1>
          <p className="text-[20px] font-normal mb-8 leading-relaxed">
            Send us a brief describing all your project requirements. Then, we will prepare a detailed quote providing
            information about pricing, terms, and project timeline, and send it off for your approval.
          </p>
          <div className="flex gap-6 text-[18px] font-semibold">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-black text-[14px]" />
              <span>No Strings Attached</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-black text-[14px]" />
              <span>NDA</span>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg p-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)] max-w-[320px]">
            <p className="text-[18px] font-bold leading-snug mb-8">
              Our business relies on fast and reliable talent and support. Jirtu Software Labs gives us that and much more, while
              freeing us to do what we do best: great digital design.
              
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://storage.googleapis.com/a1aa/image/1001f2b6-6366-4b46-669c-3197aa25ebc2.jpg"
                alt="Dino Pelle"
                className="rounded"
                width={40}
                height={40}
              />
              <div className="text-[16px]">
                <p className="font-bold leading-none">Dino Pelle</p>
                <p className="leading-none text-[13px] text-gray-600">Managing Partner @ Engage321</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section - Form */}
<form className="max-w-[499.2px] mx-auto md:mx-0 mt-12 space-y-4 text-[16px] font-normal">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input 
      type="text" 
      placeholder="Your Name" 
      required 
      className="border border-gray-300 rounded-md px-3 py-2 text-[16px] placeholder:text-gray-400 invalid:border-red-500" 
    />
    <input 
      type="email" 
      placeholder="Your Email" 
      required 
      className="border border-gray-300 rounded-md px-3 py-2 text-[16px] placeholder:text-gray-400 invalid:border-red-500" 
    />
  </div>
  <select 
    required 
    className="border border-gray-300 rounded-md px-3 py-2 w-full text-[16px] text-gray-700 invalid:border-red-500"
  >
    <option value="" disabled selected>What service are you looking for?</option>
    <option>Front-end Development</option>
    <option>WordPress Development</option>
    <option>Shopify Development</option>
  </select>
  <textarea 
    rows="5" 
    placeholder="Tell us about your project" 
    required 
    className="border border-gray-300 rounded-md px-3 py-2 w-full text-[16px] placeholder:text-gray-400 resize-none invalid:border-red-500" 
  />
  <label htmlFor="file-upload" className="block border border-dashed border-[#3a8edc] rounded-md px-3 py-2 text-[16px] text-[#3a8edc] cursor-pointer">
    Browse or Drag and Drop your files here
    <input id="file-upload" type="file" className="hidden" />
    <button type="button" className="ml-2 border border-gray-300 rounded px-2 py-0.5 text-[16px] text-gray-700">
      Browse
    </button>
  </label>
  <select className="border border-gray-300 rounded-md px-3 py-2 w-full text-[16px] text-gray-700">
    <option>How time sensitive is your project?</option>
    <option>i need it ASAP</option>
    <option>i'm not in a rush</option>
  </select>
  <select className="border border-gray-300 rounded-md px-3 py-2 w-full text-[16px] text-gray-700">
    <option>How did you hear about us?</option>
    <option>Paid Ad</option>
    <option>Referral</option>
    <option>Other</option>
  </select>
  <p className="text-[9px] text-gray-700 leading-tight">
    This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.
  </p>
  <div className="space-y-1 text-[16px] text-gray-700">
    <label className="flex items-center gap-2">
      <input type="checkbox" className="w-3 h-3" />
      <span>
        I consent to the processing of my personal data and agree to the <a href="#" className="underline">Terms & Conditions</a>.
      </span>
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" className="w-3 h-3" />
      <span>I want to receive news and service updates from Jirtu Software Labs.</span>
    </label>
  </div>
  <button type="submit" className="bg-red-600 text-white font-bold text-[16px] px-5 py-2 rounded mt-2">
    SUBMIT
  </button>
</form>
      </div>
    </main>
    </>
  
  );
};

export default Quote;