import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import enviro from "../../assets/images/enviro.png";
import MasonryCarousel from "../../components/MasonryCarousel/MasonryCarousel";
import PilotRun from "../../components/PilotRun/PilotRun";
import What from "../../components/What/What";
import Why from "../../components/Why/Why";
import Website from "../../components/Website/Website";
import Faq from "../../components/Faq/Faq";
import GetStarted from "../../components/GetStarted/GetStarted";
import homeImage from "../../assets/home.png";
import acelab from "../../assets/images/acelab.jpg";
import amyc from "../../assets/images/amyc.png";
import kadonation from "../../assets/images/kadonation.png";
import tamerin from "../../assets/images/tamerin.png";
import socapa from "../../assets/images/socapa.png";
import molin from "../../assets/images/molin.png";
import Faq_home from "../../components/Faq/Faq_home";
import Testimonials from "../../components/Testimonials/Testimonials"

const Home = () => {
  return (
     <div className="bg-white w-full overflow-hidden  text-black">
<div className="bg-white text-black   mt-3 lg:mt-28 font-Inter flex justify-center">
  <div className="w-full max-w-full flex  justify-center">
    <main className="w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-0 lg:ml-7 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-10">
      <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left px-4 lg:px-0">
     <h1 className="text-[34px] leading-[1.3] xs:text-[38px] sm:text-[48px] md:text-[38px] md:w-[700px] lg:text-[48px] lg:w-[570px] xl:w-[679px] xl:text-[56px] font-extrabold">
  <span className="block">Reliable, Scalable, &</span>
  <span className="block">
    Efficient -Built to Solve{' '}
    <span className="underline decoration-primary">
      Real Problems<span className="text-primary">.</span>
    </span>
  </span>
</h1>

        <p className="text-[10] sm:text-[18px] -mt-2 md:text-[20px] leading-relaxed mb-5">
          At Jirtuu Software Labs, we build scalable, tailor-made digital
          products with speed and precision — from idea to launch.
        </p>

        <button type="button" className="mt-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[425px]">
          <Link
            to="/quote"
            className="block bg-primary text-white font-bold text-base sm:text-lg px-6 sm:px-16 py-3 sm:py-4 rounded-md shadow hover:bg-black hover:text-white transition duration-300 text-center"
          >
            GET A QUOTE
          </Link>
        </button>

        <ul className="flex flex-wrap justify-center lg:justify-start gap-3 xs:gap-4 text-[13px] xs:text-[16px] text-black mt-1">
          <li className="flex items-center gap-1">
            <span className="text-[13px]">•</span> 100% Risk-Free
          </li>
          <li className="flex items-center gap-1">
            <span className="text-[13px]">•</span> Try Before You Buy
          </li>
          <li className="flex items-center gap-1">
            <span className="text-[13px]">•</span> No Payment Required
          </li>
        </ul>
      </section>

      {/* RIGHT: IMAGE */}
      <section className="hidden lg:block xl:block">
        <img
          src={homeImage}
          alt="Hero illustration"
          className="w-[683.9999389648438px] h-[661px]  -mt-20"
        />
      </section>
    </main>
  </div>
</div>


<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8   mb- lg:mb-20 ">
  <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
    <p className="text-[#757575] text-center text-[14px]   sm:text-base md:text-base lg:text-[14px] xl:text-base transition-all duration-200 ease-in-out">
      Trusted by international businesses and creative agencies worldwide
      from all shapes and sizes
    </p>

    <div className="w-full overflow-hidden">
      <div className="relative">
        
        <div className="md:hidden w-full overflow-x-auto no-scrollbar">
          <div className="inline-flex items-center animate-slide gap-8 px-4">
           
            {[...[acelab, amyc, kadonation, tamerin, socapa, molin], ...[acelab, amyc, kadonation, tamerin, socapa, molin]].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-[35px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop static layout */}
        <div className="hidden md:flex justify-center">
          <div className="inline-flex items-center justify-center gap-4 lg:gap-6 xl:gap-[47px] px-5">
            {[acelab, amyc, kadonation, tamerin, socapa, molin].map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-1">
                <img
                  src={logo}
                  alt="Client logo"
                  className="lg:h-[39px] md:h-[25px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




<section id="red" className="relative w-full lg:mb-20 overflow-hidden">
  <div className="flex flex-col lg:flex-row w-full">
    {/* Image Section */}
    <div className="relative w-full lg:w-9/19 overflow-hidden h-64 sm:h-96 lg:h-auto">
      <div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${enviro})` }}
      />
      
      {/* Spacer for mobile/tablet */}
      <div className="pt-[50vh] lg:pt-0 lg:h-full"></div>
      
      {/* ===== LARGE SCREEN EFFECTS (lg and above) ===== */}
      {/* Original diagonal white cast */}
      <div
        className="absolute top-0 left-0 h-full hidden lg:block z-20"
        style={{
          right: "73px",
          content: "''",
          border: "117px solid #eee",
          borderRight: "0",
          opacity: 0.55,
        }}
      />
      {/* Original pink borders */}
      <div
        className="absolute top-0 right-0 h-full w-[73px] hidden lg:block z-30"
        style={{
          borderTop: "117px solid #FF6781",
          borderBottom: "117px solid #FF6781",
        }}
      />
      
      {/* ===== MEDIUM/SMALL SCREEN EFFECTS (md and below) ===== */}
      {/* Top white cast */}
      <div
        className="absolute top-0 left-0 w-full  h-[40px] md:h-[50px] lg:hidden z-20"
        style={{
          backgroundColor: '#eee',
          opacity: 0.85,
        }}
      />
      {/* Left white cast */}
      <div
        className="absolute top-0 left-0 h-full w-[40px] md:w-[40px] lg:hidden z-20"
        style={{
          backgroundColor: '#eee',
          opacity: 0.85,
        }}
      />
      {/* Right white cast */}
      <div
        className="absolute top-0 right-0 h-full w-[40px] md:w-[40px] lg:hidden z-20"
        style={{
          backgroundColor: '#eee',
          opacity: 0.85,
        }}
      />
      {/* Bottom pink accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-[50px] lg:hidden z-30"
        style={{
          borderLeft: "40px solid #FF6781",
          borderRight: "40px solid #FF6781",
          boxSizing: "border-box"
        }}
      />
    </div>
    
   
    <div className="w-full lg:w-10/19 flex items-stretch">
      <div className="flex-1 flex items-center min-h-[400px] lg:min-h-[641.8px] bg-primary-60 px-4 sm:px-6 py-12 text-center lg:text-left">
        <div className="mx-auto lg:ml-15 max-w-full lg:max-w-xl">
          <h1 className="font-bold xl:text-[40px] lg:text-[36px] text-[32px] xl:mt-10 xl:ml-5  mb-6">
            Delivering Reliable
            <br />
            Solutions, Every Time
          </h1>
          <p className="mb-1 w-full max-w-[530px] xl:ml-5 text-base sm:text-lg xl:text-[20px] lg:text-[18px] leading-relaxed">
            Unlock your business's potential with our trusted software product
            solutions. We offer an easy-to-use service that puts you in command
            from concept to launch. Our commitment to open communication, superior
            code quality, and robust post-delivery support ensures your project
            scales seamlessly and helps you reach your objectives.
          </p>

          <button className="mt-6 bg-black xl:ml-5 text-white font-bold py-3 px-6 rounded-md hover:bg-primary transition">
            <Link to="/consultation" className="block text-center sm:text-left">
              START A CONVERSATION
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  <Why />
      
     <Testimonials />
      <PilotRun />
      <What />
      <Website />
      <Faq_home />
      <GetStarted />
    </div>
  );
};

export default Home;