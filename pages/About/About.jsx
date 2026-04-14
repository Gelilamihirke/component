
import React from "react";
import { Link } from "react-router-dom";
import blog from "../../assets/images/blog.png";
import working from "../../assets/images/working.png";
import OurStory from "../../components/OurStory/OurStory";
import BeliefSlider from "../../components/BeliefSlider/BeliefSlider";
import GetStarted from "../../components/GetStarted/GetStarted";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";

const About = () => {
  const sections = [
    {
      title: "Mission",
      description:
        "To become first choice of businesses looking for a quality partner in coding. Think coding, think Jirtu Software Labs.",
      image: {
        src: about2,
        alt: "Icon of a target with an arrow hitting the bullseye",
        width: 62,   // example px
      height: 64,
      },
    },
    {
      title: "Vision",
      description:
        "Smart and steady growth with a beneficial outcome for each and every stakeholder.",
      image: {
        src: about3,
        alt: "Icon of a balance scale",
        width: 82,   // example px
      height: 64,
      },
    },
  ];

  return (
    <div className="bg-white mt-3 lg:mt-30">

   <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-2 lg:py-15 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 font-Inter">
        <div className="max-w-xl md:mx-2">
          <p className="font-Medium text-2xl md:text-[28px] lg:text-[32px] lg:text-left text-center text-black mb-1">
            About
          </p>
          <h1 className="text-3xl md:text-[38px]  lg:text-left  lg:text-[56px] text-center font-extrabold text-black leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Jirtuu Software</span>
              <span
                className="absolute left-0 bottom-2 w-full h-2 bg-primary rounded z-0"
                aria-hidden="true"
              ></span>
            </span>
          </h1>
    <p className="mt-7 font-inter font-normal not-italic text-[18px] lg:text-[20px] lg:text-left text-center  leading-8 tracking-normal align-middle  lg:max-w-[540px]">
  Jirtuu Software Labs is a dynamic software company specializing in
  Web design, app development, integration solutions, and expert
  consultation services. We craft cutting-edge digital experiences to
  help businesses thrive in the ever-evolving digital landscape.
</p>
        </div>
        <div className="hidden lg:block w-51/139 items-center ml-15 justify-center flex-shrink-0 mt-8 md:mt-0">
          <img
            src={blog}
            alt="Illustration of web development services"
            className="w-[450px] h-[435px] "
          />
        </div>
      </div>

 <section id="red" className="relative w-full lg:mb-20 overflow-hidden">
  <div className="flex flex-col lg:flex-row w-full">
    {/* Image Section */}
    <div className="relative w-full lg:w-9/19 overflow-hidden h-64 sm:h-96 lg:h-auto">
      <div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${working})` }}
      />
      
      {/* Spacer for mobile/tablet */}
      <div className="pt-[50vh] lg:pt-0 lg:h-full"></div>
      
      {/* ===== LARGE SCREEN EFFECTS (lg and above) ===== */}
      {/* Diagonal white cast */}
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
      {/* Pink borders */}
      <div
        className="absolute top-0 right-0 h-full w-[75px] hidden lg:block z-30"
        style={{
          borderTop: "117px solid #FF6781",
          borderBottom: "117px solid #FF6781",
        }}
      />
      
      {/* ===== MEDIUM/SMALL SCREEN EFFECTS (md and below) ===== */}
      {/* Top white cast */}
      <div
        className="absolute top-0 left-0 w-full h-[40px] md:h-[50px] lg:hidden z-20"
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
    
    {/* Text Content Section */}
    <div className="w-full lg:w-10/19 flex items-stretch">
      <div className="flex-1 flex items-center min-h-[400px] lg:min-h-[641.8px] bg-primary-60 px-4 sm:px-6 py-12 text-center  lg:text-left">
        <div className="mx-auto lg:ml-15 max-w-full lg:max-w-xl">
          <h1 className="font-bold xl:text-[40px] lg:text-[36px] text-[32px] xl:mt-10 xl:ml-5  mb-6">
            When Work Feels Like Play, You Know You Are Doing It Right
          </h1>
          
          <p className="mb-6 w-full max-w-[530px] xl:ml-5 text-base sm:text-lg xl:text-[20px] md:ml-20 lg:ml-0 lg:text-[18px] leading-relaxed">
            Our long-standing expertise along with careful precision to
            detail, constant pursuit of improvement, and key ability to
            adapt to the ever-changing environments make htmlBurger the
            reliable partner you want on your path to success.
          </p>
          
          <p className="mb-6 w-full max-w-[530px] xl:ml-5 text-base sm:text-lg xl:text-[20px]  md:ml-20 lg:ml-0 lg:text-[18px] leading-relaxed">
            Equipped with diverse sets of skills, we can see the full
            picture in parallel to focusing on every detail. As a result, we
            can develop optimal solutions that meet the unique needs of each
            client.
          </p>

          <button className="mt-6 bg-black xl:ml-5 text-white font-bold py-3 px-6 rounded-md hover:bg-primary transition">
            <Link to="/quote" className="block text-center sm:text-left">
              GET A QUICK QUOTE
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
      <div className="max-w-7xl mx-auto px-10 py-10    grid  lg:grid-cols-2 gap-y-9">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center text-center h-full"
          >
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="mb-6 object-contain"
               style={{ width: section.image.width, height: section.image.height }}
            />
            <h3 className="lg:text-[40px] md:text-[36px] text-[32px]  font-bold mb-4">
              {section.title}
            </h3>
            <p className="text-gray-700 lg:text-[20px] md:text-[16px] md:text-lg leading-relaxed max-w-[550px]">
              {section.description}
            </p>
          </div>
        ))}
      </div>

      <BeliefSlider />
      <GetStarted />
    </div>
  );
};

export default About;