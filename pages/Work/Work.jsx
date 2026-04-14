import React from "react";
import PortfolioSection from "../../components/Card/PortfolioSection";
import Portfolio_Page from "../../components/Our_Work/Portfoliopage";
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section className="max-w-[1300px] mx-auto px-8 py-10 lg:mt-33 text-center mt-15 ">
      <h1
        className="font-semibold text-[28px] sm:text-3xl md:text-5xl lg:text-[56px] leading-tight md:leading-[63.84px] text-center"
        style={{ fontFamily: "Inter" }}
      >
        <span className="min-[321px]:inline block">Selected </span>
        <span className="relative inline-block">
          Projects
          <span className="absolute left-0 -bottom-0 w-full h-2 bg-primary"></span>
        </span>
      </h1>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-[20px] max-w-[900px]  mx-auto leading-relaxed">
        This showcase features a tiny fraction of the websites we have done for
        our amazing clients over the years. We include case studies that cover
        various areas of our expertise in web design, front-end development, and
        integrations with different platforms like WordPress, Shopify, Hubspot,
        Craft CMS, and more.
      </p>
      <PortfolioSection />
  
    </section>
  );
};

export default Work;
