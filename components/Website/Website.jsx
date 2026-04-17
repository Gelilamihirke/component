import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import right from "../../assets/images/right.png";
import left from "../../assets/images/left.png";
import { portfolioProjects } from "../../data/Work"; 

const Website = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const scrollAmount = 344;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Convert portfolioProjects object to array for mapping
  const projects = Object.values(portfolioProjects);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-auto px-4 py-12">
        <h1 className="text-center font-bold text-[32px] mt-18 lg:text-[40px] leading-tight text-black">
          We create{" "}
          <span className="relative inline-block">
            <span className="relative z-10">high-quality</span>
            <span className="absolute left-0 bottom-1 w-full h-2 bg-primary z-0" aria-hidden="true"></span>
          </span>{" "}
          custom websites
        </h1>

        <p className="mt-4 max-w-4xl mx-auto text-center text-[16px] lg:text-xl text-gray-900 leading-relaxed">
          There is no too-custom or complex design, nor a too simple or small
          project. Free up your imagination and resources, and let's build the
          next award-winning website together.
        </p>

        <div className="relative lg:ml-30 mx-auto mt-20">
          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-hidden scroll-smooth"
          >
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => navigate(`/work/${project.id}`)}
                className="flex-shrink-0 w-[424px] h-[279.83px] relative cursor-pointer group"
              >
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="w-full h-full object-cover mb-10 rounded transition-transform duration-300 "
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-transparent bg-opacity-0 group-hover:bg-white/20 transition-all duration-300 rounded flex items-center justify-center">
                
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="mt-6 mb-17 flex justify-between items-center px-4 md:px-0">
            <button
              aria-label="Previous"
              onClick={scrollLeft}
              className="hover:opacity-70 transition-opacity"
            >
              <img src={left} alt="Previous" className="w-12 h-8" />
            </button>

            <button
              aria-label="Next"
              onClick={scrollRight}
              className="hover:opacity-70 transition-opacity"
            >
              <img src={right} alt="Next" className="w-12 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;