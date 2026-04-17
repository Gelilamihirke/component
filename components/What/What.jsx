import React from "react";
import setting from "../../assets/images/setting.png"
import cms from '../../assets/images/cms.png';
import fon from '../../assets/images/fon.png';
import web from '../../assets/images/web.png';
import com from '../../assets/images/com.png';
import more from '../../assets/images/more.png';

const What = () => {
  const services = [
    {
      icon: setting,
      title: "White-Label Web Development",
      description:
        "A dedicated service that allows agencies to outsource their web development projects and expand their business offerings with a solution fully customizable according to their needs and ready to meet their goals.",
    },
    {
      icon: cms,
      title: "CMS Integrations",
      description:
        "From static site generators and website builders to advanced CMS solutions, we have experience with platforms that suit every project's requirements: WordPress, HubSpot, Squarespace, Hugo, Webflow, and more.",
    },
    {
      icon: fon,
      title: "Front-End Coding",
      description:
        "The perfect solution for teams focused on back-end programming looking for experts in writing pixel-perfect and hand-crafted code built according to their specifics. Increase the code quality and speed up the dev process.",
    },
    {
      icon: web,
      title: "Web Apps Development",
      description:
        "Fully custom web applications development using a tech stack that meets the project needs. We specialize in building PHP-based applications with React and Vue.",
    },
    {
      icon: com,
      title: "E-commerce Websites",
      description:
        "From one-page stores to fully custom eCommerce solutions, we have experience in various platforms like WooCommerce, Shopify, and BigCommerce to develop a store that fits any business specifics.",
    },
    {
      icon: more,
      title: "Many More",
      description:
        "Coding email templates, marketing landing pages, alternative CMS integrations, headless implementations, and more. End-to-end web development solutions at your fingertips.",
    },
  ];

  return (
    <div className="max-w-6xl  mx-auto px-6 py-12 mt-21">
      <div className="max-w-6xl mx-auto text-center">
       <h2 className="font-bold leading-5  xl:-ml-16 text-4xl mb-4   text-center lg:text-left text-black">
  <span className="relative inline-block">
    <span className="relative  text-[40px] z-10">What We Do</span>
    <span
      className="absolute left-0 -bottom-1.5 w-full h-2 bg-primary rounded z-0"
      aria-hidden="true"
    ></span>
  </span>
</h2>

   <p 
  className="text-gray-900 max-w-5xl text-center lg:text-left font-normal mt-10 xl:-ml-17"
  style={{
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "20px",
    lineHeight: "32px",
    letterSpacing: "0%",
    verticalAlign: "middle",
  }}
>
  Access a range of services. Save time and resources. Get experts onboard quickly. Agencies and businesses use
  our web development services to convert their great ideas and designs <br/>into functional web products.
</p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:-ml-17 lg:grid-cols-3 gap-x-8 gap-y-10 mb-16 text-gray-900">
        {services.map((service, index) => (
          <div key={index} className="group">
            <div className="mb-3">
              <img 
                src={service.icon} 
                alt={service.title} 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <h3 className="font-semibold text-xl sm:text-2xl mb-2 font-Inter">{service.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed font-normal">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default What;