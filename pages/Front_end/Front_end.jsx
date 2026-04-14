import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Frontend from "../../assets/images/frontend.png";
import teamMembers from "../../data/teamMembers.json";
import { Link } from "react-router-dom";
import acelab from "../../assets/images/acelab.jpg";
import amyc from "../../assets/images/amyc.png";
import kadonation from "../../assets/images/kadonation.png";
import tamerin from "../../assets/images/tamerin.png";
import socapa from "../../assets/images/socapa.png";
import molin from "../../assets/images/molin.png";
import never from "../../assets/images/never.png";
import tech from "../../assets/images/tech.png";
import pilot from "../../assets/images/pilot.png";
import smooth from "../../assets/images/smooth.png";
import quality from "../../assets/images/quality.png";
import star from "../../assets/images/star.png";
import pixel from "../../assets/images/pixel.png";
import responsive from "../../assets/images/responsive.png";
import accessibility from "../../assets/images/accessibility.png";
import version from "../../assets/images/version.png";
import cross from "../../assets/images/cross.png";

const Front_end = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const currentMember = teamMembers[currentMemberIndex];
  const benefits = [
    {
      id: 1,
      src: never,
      title: "Never-Ending Support",
      description:
        "Reliability is of utmost importance to us. We stand behind you and the work we deliver. If any bugs emerge in the future, just get in touch with us to get them fixed.",
    },
    {
      id: 2,
      src: tech,
      title: "Tech Savvy project Managers",
      description:
        "Your own dedicated manager that also has experience in development and perfectly understands the specifications of any front-end conversion",
    },
    {
      id: 3,
      src: star,
      title: "5-Star Developers",
      description:
        "With 150+ highly experienced developers in different fields, we always have the right person/team to handle your project, no matter its size or complexity.",
    },
    {
      id: 4,
      src: smooth,
      title: "Smooth Workflow",
      description:
        "We know the ins and outs of front-end development. As a result, we've developed an efficient and smooth workflow that saves you time.",
    },
    {
      id: 5,
      src: pilot,
      title: "Pilot Project Test",
      description:
        "Evaluate our work via a pilot run and see if we are a match. Get an idea of the code quality, communication, and everything that is essential to you.",
    },
    {
      id: 6,
      src: quality,
      title: "Quality Standards",
      description:
        "Developing our own coding standards and an additional 3-step QA process, helps us always deliver the same high-quality code to you over and over again.",
    },
  ];
  const models = [
    {
      src: pixel,
      description: "Pixel-perfect implementation from Figma, Sketch, or XD",
    },
    {
      src: responsive,
      description: "Responsive layouts for desktop, tablet, and mobile",
    },
    {
      src: accessibility,
      description:
        "Accessibility (WCAG-compliant) and performance optimization",
    },
    {
      src: version,
      description: "Version control and component-based workflows",
    },
    {
      src: cross,
      description: "Cross-browser and device compatibility",
    },
  ];
  const styles = {
    blurCircle: {
      position: "absolute",
      left: "-100px",
      bottom: "-100px",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      background: "rgba(255, 0, 0, 0.2)",
      filter: "blur(50px)",
      zIndex: 0,
    },
  };

  return (
    <div className="bg-white text-black mt-28 font-Inter">
      <div className="w-full ">
        <main className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 font-Inter">
          <div className="w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 mx-auto">
            <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4 sm:gap-6 text-center lg:text-left">
              <p className="w-full text-black text-lg sm:text-xl lg:text-[23px] font-semibold font-['Inter'] leading-7">
                Website Pages, Banners, Custom Animations
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[55px] text-black font-extrabold mb-3">
                <div className="flex flex-col lg:hidden">
                  <span className="relative inline-block leading-tight">
                    HTML/CSS Front-End
                    <span className="absolute bottom-0 left-0 w-full h-2 sm:h-[5px] lg:h-[7px] bg-primary z-0"></span>
                  </span>
                  <span className="leading-tight">Development Services</span>
                </div>

                <div className="hidden lg:block">
                  <span className="relative inline-block">
                    <span className="relative z-10">HTML/CSS Front-End</span>
                    <span className="absolute left-0 bottom-0 w-full h-[9px] bg-primary z-0"></span>
                  </span>
                  <br />
                  <span>Development Services</span>
                </div>
              </h1>

              <ul className="w-full flex flex-col sm:flex-row flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 mb-3">
                {[
                  "Unbeatable Quality",
                  "Fast Turnarounds",
                  "Reasonable Pricing",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-red-600 text-sm sm:text-[20px] min-w-[14.2px] mr-2 sm:mr-[9px]" />
                    <span className="font-inter font-semibold text-base sm:text-lg leading-[1.6] text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full sm:w-[200px] h-12 sm:h-[64px] bg-primary hover:bg-secondary transition-colors text-white text-lg font-bold rounded sm:rounded-[7.2px]">
                GET A QUOTE
              </button>
              <div className="transform scale-90 origin-left">
                <ul className="flex flex-col gap-y-1 text-[13px] font-normal leading-[1.6] font-inter text-black list-none align-middle">
                  <li className="relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[4px] before:w-[4px] before:bg-black before:rounded-full before:content-['']">
                    No Payment Required
                  </li>
                  <li className="relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[4px] before:w-[4px] before:bg-black before:rounded-full before:content-['']">
                    No Strings Attached
                  </li>
                  <li className="relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[4px] before:w-[4px] before:bg-black before:rounded-full before:content-['']">
                    100% Risk-Free
                  </li>
                </ul>
              </div>
            </section>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={Frontend}
                alt="Front-End Development"
                className="w-full max-w-full sm:min-w-[550px] lg:max-w-[737px] object-contain rounded-lg"
              />
            </div>
          </div>
        </main>
        <br />
        <p className="w-full max-w-[1004px] mx-auto text-center text-gray-500 mt-[9px] text-xl font-medium leading-[1.2] align-middle font-inter mb-8">
          Trusted by international businesses and creative agencies worldwide
          from all shapes and sizes.
        </p>
        <div className="w-full mb-20">
          <div className="relative">
            <div className="hidden sm:block absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="hidden sm:block absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="w-full overflow-x-auto sm:overflow-visible scrollbar-hide py-2">
              <div
                className="flex sm:inline-flex flex-nowrap items-center justify-start sm:justify-center
          gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-[47px]
          min-w-max sm:min-w-0
          px-4 sm:px-0
          w-auto sm:w-full"
              >
                {[acelab, amyc, kadonation, tamerin, socapa, molin].map(
                  (logo, index) => (
                    <div key={index} className="flex-shrink-0 px-2 sm:px-0">
                      <img
                        src={logo}
                        alt="Client logo"
                        className="h-5 sm:h-7 md:h-8 lg:h-9 xl:h-10 object-contain transition-opacity duration-300 min-w-[60px] sm:min-w-0"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <section
          id="benefits"
          className="relative bg-white py-12 sm:py-16 lg:py-16"
        >
          <div className="max-w-[1670px] lg:h-[800px] text-center mb-12 sm:mb-16 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mt-3">
              <div className="text-center font-inter font-bold text-2xl sm:text-3xl lg:text-[28px] xl:text-4xl leading-[1.2] tracking-[-0.12px] align-middle mb-6 sm:mb-8 lg:mb-8">
                <span className="relative inline-block">
                  <span className="relative z-10">Why Jirtuu</span>
                  <span className="absolute left-0 right-0 bottom-0 h-1.5 bg-primary z-0"></span>
                </span>
                ? Because we care.
              </div>
            </h2>
            <p className="text-center font-inter font-normal text-base sm:text-lg lg:text-[16px] xl:text-xl leading-loose tracking-normal align-middle max-w-[90%] sm:max-w-[80%] lg:max-w-[730.92px] h-auto mx-auto px-4 mb-6 lg:mb-6 justify-start">
              We work with frameworks like React, Vue, and Next.js to build
              performant web apps. Our process includes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-18 max-w-[90%] sm:max-w-[90%] lg:max-w-[1350px] h-auto mx-auto px-4 sm:px-0 lg:px-0 mb-12 lg:transform lg:scale-90">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex flex-col items-center text-center px-4 sm:px-4 lg:px-4 w-full sm:w-auto lg:w-[449.55px]"
                >
                  <img
                    src={benefit.src}
                    alt={benefit.title}
                    className="w-14 sm:w-16 lg:w-[54px] xl:w-[70px] h-14 sm:h-16 lg:h-[62px] xl:h-[72px] mb-6 sm:mb-8 lg:mb-9"
                  />
                  <h3 className="font-inter font-semibold text-lg sm:text-xl lg:text-[20px] xl:text-[22px] leading-7 tracking-wide text-center mb-4 sm:mb-5 lg:mb-5">
                    {benefit.title}
                  </h3>
                  <p className="font-inter font-normal text-base sm:text-lg lg:text-[16px] xl:text-[20px] leading-relaxed text-center text-gray-800 mb-6 lg:mb-6">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className="max-w-[1590px] lg:h-[837px] py-12 sm:py-16 lg:py-19 px-4 sm:px-6 md:px-12 lg:px-24 relative  ">
        <div className="relative left-0 sm:left-13 px-4 sm:px-0 ">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl lg:text-[28.8px] xl:text-4xl leading-[1.3] sm:leading-[48px] tracking-[-0.12px] mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">What We Build</span>
              <span className="absolute left-0 right-0 bottom-0 h-1.5 sm:h-2 bg-primary z-0"></span>
            </span>{" "}
            With
          </h2>
          <p className="max-w-full sm:max-w-[90%] lg:max-w-[896.61px] h-auto sm:h-[56px] text-gray-900 mb-8 sm:mb-18 font-inter font-normal text-base sm:text-lg lg:text-[14.4px] xl:text-xl leading-relaxed sm:leading-loose">
            We work with frameworks like React, Vue, and Next.js to build
            performant web apps. Our process includes:
          </p>

          <div className="flex flex-col ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start mb-6">
              {models.slice(0, 3).map((model, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-between border border-gray-300 rounded-xl lg:rounded-[20px] p-4 sm:p-3 bg-white w-full sm:w-full lg:w-[420px] h-auto sm:h-[180px] lg:h-[198px] relative ${
                    idx === 0 ? "overflow-visible" : ""
                  }`}
                >
                  {idx === 0 && (
                    <div
                      className="absolute -left-10 -bottom-10 
                w-40 h-40
                sm:-left-12 sm:-bottom-12
                sm:w-48 sm:h-48
                lg:-left-[50px] lg:-bottom-[50px] 
                lg:w-[200px] lg:h-[200px]"
                      style={{
                        borderRadius: "50%",
                        background: "rgba(255, 0, 0, 0.15)",
                        filter: "blur(50px)",
                        zIndex: 0,
                      }}
                    ></div>
                  )}

                  <div className="relative z-10">
                    <p className="font-inter text-base sm:text-lg leading-relaxed text-gray-900 px-2 sm:px-4 py-2 sm:py-4">
                      {model.description}
                    </p>
                    <div className="flex justify-end mr-2 sm:mr-3 mb-2 sm:mb-5">
                      <img
                        src={model.src}
                        alt={model.description}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[64px] lg:h-[64px] xl:w-[74px] xl:h-[74.1px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start ">
              {models.slice(3).map((model, idx) => (
                <div
                  key={idx + 3}
                  className="flex flex-col justify-between border border-gray-300 rounded-xl lg:rounded-[20px] p-4 bg-white w-full sm:w-full lg:w-[420px] h-auto sm:h-[180px] lg:h-[198px] xl:h-[199px] relative"
                >
                  <p className="font-inter text-base sm:text-lg leading-relaxed text-gray-900 px-4 sm:px-7 pt-4 sm:pt-[42px]">
                    {model.description}
                  </p>
                  <div className="flex justify-end mr-2 mb-2">
                    <img
                      src={model.src}
                      alt={model.description}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[64px] lg:h-[64px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="w-full bg-primary-20 py-20 sm:py-26 px-4 text-center"
      >
        <h1 className="transform scale-90 text-[38px] sm:text-[48px] lg:text-[60px] leading-[1.2] tracking-normal text-center font-inter align-middle mb-3 font-extrabold">
          Start Your Project. It's Risk-Free.
        </h1>

        <p
          className=" transform scale-90 max-w-[1010px] mx-auto mb-9 text-center font-inter font-normal text-[18px] sm:text-[22px] leading-[1.6] tracking-normal align-middle px-4"
          style={{ fontStyle: "normal", verticalAlign: "middle" }}
        >
          Let's make it happen! With our risk-free approach, you can rest
          assured that your project is in good hands. Submit your inquiry today
          and receive a prompt response from our team.
        </p>

        <div className="flex justify-center">
          <button
            type="button"
            className="w-full sm:w-auto flex lg:ml-50 justify-center"
          >
            <Link
              to="/quote"
              className="inline-flex items-center justify-center bg-secondary text-white font-bold py-2 lg:w-[370.27px] lg:h-[64px] text-base lg:text-lg px-4 sm:py-3 sm:px-6 rounded-md hover:bg-primary hover:text-white transition w-full sm:w-auto text-center"
            >
              GET A QUOTE FOR YOUR PROJECT
            </Link>
          </button>
        </div>

        <div className="mt-6 max-w-[221.5px] mx-auto">
          <Link
            to="/consultation"
            className="transform scale-90 font-inter font-bold text-[16px] sm:text-[20px] leading-[1.6] tracking-normal text-center align-middle underline decoration-solid decoration-black decoration-auto"
          >
            or start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Front_end;
