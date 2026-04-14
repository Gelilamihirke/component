import React from "react";
import html from "../../assets/images/Front-End.png";
import back from "../../assets/images/custom.png";
import ff from "../../assets/images/Shopify.png";
import mobile from "../../assets/images/Woocommerce.png";
import pp from "../../assets/images/Hubspot.png";
import cons from "../../assets/images/Vue React.png";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceItems = [
    {
      id: 1,
      title: "Front-End Development",
      description:
        "We convert any design files (PSD, Sketch, Figma, Adobe XD) into pixel-perfect, semantic and standard-compliant HTML/CSS templates.",
      image: html,
      buttonText: "START YOUR PROJECT",
      link: "/quote",
    },
    {
      id: 2,
      title: "Back-End Development",
      description:
        "Powerful, scalable backend systems using clean code, reliable architecture, and the right stack for your project — Node.js, Laravel, Django, and beyond.",
      image: back,
      buttonText: "START YOUR PROJECT",
      link: "/quote",
    },
    {
      id: 3,
      title: "Full-Fledged Systems",
      description:
        "Need an end-to-end solution? We plan, design, build, and deploy complex systems that scale — from enterprise dashboards to custom platforms.",
      image: ff,
      buttonText: "START YOUR PROJECT",
      link: "/quote",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "We build native and cross-platform mobile apps that feel great, perform smoothly, and keep users engaged — for iOS, Android, or both.",
      image: mobile,
      buttonText: "START YOUR PROJECT",
      link: "/quote",
    },
    {
      id: 5,
      title: "Design Services",
      description:
        "From wireframes to high-fidelity prototypes, we design elegant user experiences grounded in usability and business goals.",
      image: pp,
      buttonText: "GET A QUICK QUOTE",
      link: "/quote",
    },
    {
      id: 6,
      title: "Consultations",
      description:
        "Need expert insight or support for your team? We offer audits, reviews, and tailored guidance to help your product succeed.",
      image: cons,
      buttonText: "SEE MORE DETAILS",
      link: "/quote",
    },
  ];

  return (
    <div className="bg-white">
<section className="w-full mx-auto mt-28">
  <div className="text-center pt-8 pb-4 bg-[#f4f4f4]">
    <p
      className="font-bold text-[40px] leading-[36.48px] text-center text-black"
      style={{ fontFamily: "Inter" }}
    >
      Our
    </p>

    <h2
      className="font-extrabold text-[56px] leading-[63.84px] text-center underline decoration-primary decoration-6 underline-offset-4"
      style={{ fontFamily: "Inter" }}
    >
      Services
    </h2>

    <br />

    <p className="font-normal text-[20px] leading-[32px] text-center text-black mt-1 max-w-[720px] mx-auto">
      From design sprints to final launch — we offer the full stack of
      services to bring your digital product to life.
    </p>
  </div>

<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
  
    <div className="absolute top-0 left-[10%] right-[10%] border-t border-gray-200"></div>

    {serviceItems.map((service, index) => {
      const isLastColLg = (index + 1) % 3 === 0;
      const isLastColMd = (index + 1) % 2 === 0; 

      
      const isLastRowLg = index >= serviceItems.length - (serviceItems.length % 3 || 3);
      
      const isLastRowMd = index >= serviceItems.length - (serviceItems.length % 2 || 2);

      return (
        <div key={service.id} className="relative">
          <ServiceCard service={service} />

          
          <div
            className={`absolute bottom-0 left-[10%] right-[10%] border-b  border-gray-200
              ${isLastRowLg ? "lg:hidden" : ""}
              ${isLastRowMd ? "md:hidden lg:block" : ""}`}
          ></div>

          
          {!isLastColLg && (
            <div className="absolute top-[10%] bottom-[10%] right-0 border-r border-gray-200 hidden lg:block"></div>
          )}

   
          {!isLastColMd && (
            <div className="absolute top-[10%] bottom-[10%] right-0 border-r border-gray-200 hidden md:block lg:hidden"></div>
          )}
        </div>
      );
    })}
  </div>
</div>




</section>
      <section className="bg-primary-60 py-8 md:py-12 lg:py-16 px-4 sm:px-6 text-center mt-10 md:mt-16 lg:mt-20">
  <div className="max-w-4xl mx-auto">
    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-snug mb-4 md:mb-6">
      Need Something Else? <br className="hidden sm:block" />
      <span className="sm:hidden"> </span>Sure We can help
    </h1>
    
    <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
      Although we keep our focus on the services listed above, we do have
      experience with other CMS, eCommerce, and custom solutions. Do not
      hesitate to get in touch with us and check our availability.
    </p>

    <button type="button" className="inline-block">
      <Link
        to="/contactPage"
        className="inline-block bg-black text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-md hover:bg-primary hover:text-white transition text-sm sm:text-base"
      >
        JUST CONTACT US
      </Link>
    </button>
  </div>
</section>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const titleStyles = {
    1: {
      width: "291.57px",
      fontWeight: 700,
      
      lineHeight: "32px",
      weight: 700,
      Top: "270px",
    },
    2: {
      width: "209px",
      fontWeight: 700,
   
      lineHeight: "30px",
    },
    3: {
      width: "250px",
      fontWeight: 700,
   
      lineHeight: "34px",
    },
    4: {
      width: "209px",
      fontWeight: 700,
   
      lineHeight: "31px",
    },
    5: {
      width: "138px",
      fontWeight: 700,
     
      lineHeight: "29px",
    },
    6: {
      width: "220px",
      fontWeight: 700,
   
      lineHeight: "32px",
 
    },
  };

const descStyles = {
  1: {
    fontWeight: 400,
    fontSize: "16px",
    "@media (min-width: 1280px)": { width: "352px" }, // xl
    "@media (min-width: 1024px) and (max-width: 1279px)": { width: "300px" }, // lg
    "@media (min-width: 768px) and (max-width: 1023px)": { width: "260px" }, // md
    "@media (max-width: 767px)": { width: "100%" }, // mobile
  },
  2: {
    fontWeight: 400,
    fontSize: "16px",
    "@media (min-width: 1280px)": { width: "356px" },
    "@media (min-width: 1024px) and (max-width: 1279px)": { width: "305px" },
    "@media (min-width: 768px) and (max-width: 1023px)": { width: "265px" },
    "@media (max-width: 767px)": { width: "100%" },
  },
  3: {
    fontWeight: 400,
    fontSize: "16px",
    "@media (min-width: 1280px)": { width: "352px" },
    "@media (min-width: 1024px) and (max-width: 1279px)": { width: "300px" },
    "@media (min-width: 768px) and (max-width: 1023px)": { width: "260px" },
    "@media (max-width: 767px)": { width: "100%" },
  },
  4: {
    fontWeight: 400,
    fontSize: "16px",
    "@media (min-width: 1280px)": { width: "352px" },
    "@media (min-width: 1024px) and (max-width: 1279px)": { width: "300px" },
    "@media (min-width: 768px) and (max-width: 1023px)": { width: "260px" },
    "@media (max-width: 767px)": { width: "100%" },
  },
  5: {
    fontWeight: 400,
    fontSize: "16px",
    "@media (min-width: 1280px)": { width: "358px" },
    "@media (min-width: 1024px) and (max-width: 1279px)": { width: "305px" },
    "@media (min-width: 768px) and (max-width: 1023px)": { width: "265px" },
    "@media (max-width: 767px)": { width: "100%" },
  },
  6: {
    fontWeight: 400,
    fontSize: "16px",
    "@media (min-width: 1280px)": { width: "343.5px" },
    "@media (min-width: 1024px) and (max-width: 1279px)": { width: "295px" },
    "@media (min-width: 768px) and (max-width: 1023px)": { width: "255px" },
    "@media (max-width: 767px)": { width: "100%" },
  },
};


  return (
    <div className="py-28  px-6   flex flex-col  items-center text-center bg-white">
      <img
        alt={`Service icon for ${service.title}`}
        className="mb-6 h-[260px] w-[240px]   object-contain"
        src={service.image}
      />
      <h3
        className="font-bold text-[28px] lg:text-[32px]"
        style={titleStyles[service.id]}
      >
        {service.title}
      </h3>
      <br />
      <p className="text-gray-900  mb-4" style={descStyles[service.id]}>
        {service.description}
      </p>
     <div className="line w-[50px] h-[2px] bg-[#E5E5E5] -mb-2 mt-4"></div>
      <br />
      <Link
        to={service.link}
        className="bg-primary text-white text-[12px] font-semibold px-5 py-3 rounded-[8px] inline-block hover:bg-primary-60 transition-colors"
      >
        {service.buttonText}
      </Link>
    </div>
  );
};

export default Services;