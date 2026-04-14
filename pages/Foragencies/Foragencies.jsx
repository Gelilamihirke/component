import React from "react";
import { Link } from "react-router-dom";
import Why from "../../components/Why/Why";
import map from "../../assets/images/map.png"
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import ll from "../../assets/images/ll.png"
import PilotRun from "../../components/PilotRun/PilotRun";
import EngagementModels from "../../components/EngagementModels/EngagementModels";
import Faq from "../../components/Faq/Faq";
import GetStarted from "../../components/GetStarted/GetStarted";
const Foragencies = () => {
  return (
  <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <p className="text-lg font-normal text-black mb-2">
            White-Label Web Development Services
          </p>
          <h1 className="text-3xl font-extrabold text-black leading-tight">
            for <span className="border-b-4 border-primary">Creative Agencies</span>
          </h1>
          <p className="mt-6 text-base font-normal text-black max-w-md leading-relaxed">
            A reliable coding partner that delivers solutions to your business challenges
            and stays by your side in the long term. Having the whole spectrum of web
            development expertise, we are here to take care of your projects while making
            it possible for you to focus on growing your own business.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src="https://storage.googleapis.com/a1aa/image/d2ae26b0-55a0-40a8-32ea-543928ea33f4.jpg"
            alt="Illustration of web development services"
            className="w-full max-w-md"
            width={600}
            height={300}
          />
        </div>
      </div>
      <Why/>
        <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-extrabold text-4xl leading-5 mb-2">Our Clients</h2>
        <p className="text-xs text-gray-900 leading-tight max-w-2xl mx-auto">
         We are a white-label partner for more than 1000+ digital agencies from countries
          across the globe, including the US, Canada, Ireland, the UK, France, and Australia.
           We know the ins and outs, and we're here to assist you in growing your agency business.


        </p>

         <img
            
                src={map}
                className="max-w-7xl mx-auto px-4 py-12"
                width={320}
                height={200}
              />
      </div>
    
    </div>
    <WhatWeDo/>
     <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
         
          <h1 className="text-3xl font-extrabold text-black leading-tight">
            Work & Collaborate With The Tool Of Your Choice
          </h1>
          <p className="mt-6 text-base font-normal text-black max-w-md leading-relaxed">
           Now, you can take complete control over your projects with the flexibility
            to choose the tools and processes that best fit your agency. We value your
             time like our own. We will learn the tricks and build a working method shaped 
             around you.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={ll}
            alt="Illustration of web development services"
            className="w-full max-w-md"
            width={600}
            height={300}
          />
        </div>
      </div>
      <PilotRun/>
      <EngagementModels/>
      <Faq/>
      <GetStarted/>
    </div>

  
  );
};

export default Foragencies;