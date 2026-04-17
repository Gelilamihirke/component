import React, { useState, useEffect } from "react";
import right from "../../assets/images/right.png";
import left from "../../assets/images/left.png";
import {
  FaMedal,
  FaHandshake,
  FaAward,
  FaEye,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";

const BeliefSlider = () => {
  const beliefs = [
    {
      id: "win-win",
      icon: <FaMedal className="text-[40px] md:text-[64px]  w-[47px] h-[80px]" />,
      text: "A partnership flourishes in the long term only when both parties make equally weighted efforts in favor of their mutual development and both draw lasting benefits",
    },
    {
      id: "trust",
      icon: <FaHandshake className="text-[40px] md:text-[64px]  w-[47px] h-[80px]" />,
      text: "Trust is the foundation of every successful relationship, built through consistent actions and honest communication",
    },
    {
      id: "top Quality",
      icon: <FaAward className="text-[40px] md:text-[64px]  w-[47px] h-[80px]" />,
      text: "We pursue excellence in everything we do, delivering top quality results that exceed expectations",
    },
    {
      id: "transparency",
      icon: <FaEye className="text-[40px] md:text-[64px]  w-[47px] h-[80px]" />,
      text: "Clear, open communication and visibility into our processes create stronger partnerships and better outcomes",
    },
    {
      id: "talent",
      icon: <FaUsers className="text-[40px] md:text-[64px]  w-[47px] h-[80px]" />,
      text: "Our greatest asset is our people - we invest in talented individuals and help them grow to their full potential",
    },
    {
      id: "collaboration",
      icon: <FaProjectDiagram className="text-[40px] md:text-[64px]  w-[47px] h-[80px]" />,
      text: "Great things happen when diverse minds work together toward a shared vision with mutual respect",
    },
  ];


  const [isAnimating, setIsAnimating] = useState(false);

  const handleBeliefClick = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);
  const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
  setCurrentIndex((prev) => (prev + 1) % beliefs.length);
};

const handlePrev = () => {
  setCurrentIndex((prev) => (prev - 1 + beliefs.length) % beliefs.length);
};


  return (
    <div className="max-w-7xl mx-auto px-4 font-inter py-8 md:py-16 text-center h-auto md:h-[491px] mt-10 md:mt-20  md:mb-30">
      <h1 className=" sm:text-3xl text-[32px] md:text-[40px] font-bold mb-8 md:mb-15">
        What{" "}
        <span className="relative inline-block">
          <span className="relative z-10">We Believe In</span>
          <span
            className="absolute left-0 bottom-0 md:bottom-1 w-full h-2 bg-primary z-0"
            aria-hidden="true"
          ></span>
        </span>
      </h1>

<nav className="mb-8 md:mb-15 flex justify-center items-center gap-4">
  {/* Small screens: arrows only */}
  <div className="flex md:hidden items-center gap-4">
    <button onClick={handlePrev}>
      <img src={left} alt="Previous" className="w-6 h-6" />
    </button>

    <button onClick={handleNext}>
      <img src={right} alt="Next" className="w-6 h-6" />
    </button>
  </div>

  {/* Medium and above: full navbar */}
  <div className="hidden md:flex flex-wrap justify-center gap-2 lg:text-[18px] sm:text-base md:text-2xl text-[18px] font-bold text-black">
    {beliefs.map((belief, index) => (
      <button
        key={belief.id}
        className={`rounded-md px-2 py-1 md:px-4 md:py-2 transition-colors ${
          currentIndex === index ? "bg-primary-20 font-bold" : "hover:bg-gray-100"
        }`}
        onClick={() => setCurrentIndex(index)}
      >
        {belief.id
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("-")}
      </button>
    ))}
  </div>
</nav>


      <div className="belief-content relative mb-6 md:mb-8 min-h-[120px] md:min-h-[180px]">
        <div
          key={beliefs[currentIndex].id}
          className={`flex flex-col items-center justify-center ${
            isAnimating ? "animate-fadeIn" : ""
          }`}
        >
          {beliefs[currentIndex].icon}
          <p className="max-w-full md:max-w-6xl mx-auto lg:text-[18px] sm:text-lg md:text-2xl  leading-6 md:leading-10 text-gray-700 mt-4 md:mt-9">
            {beliefs[currentIndex].text}
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BeliefSlider;