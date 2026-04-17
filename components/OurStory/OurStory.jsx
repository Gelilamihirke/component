import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import year5 from "../../assets/images/2005.png"
import year7 from "../../assets/images/2007.png"

import year11 from "../../assets/images/2011.png"

import year15 from "../../assets/images/2015.png"

import year23 from "../../assets/images/2023.png"


const OurStory = () => {
  const stories = [
    {
      year: "2005",
      title: "From Idea to Startup",
      text: "Back in 2005 a few friends, filled with enthusiasm and dreams, laid the foundations of a web development company. Over the course of the next 2 years the first clients arrived. Many of them remain with us today.",
      img: year5,
      alt: "Illustration representing the year 2005 with building blocks forming the number 1",
      
     
    },
    {
      year: "2007",
      title: "Growing the Team",
      text: "The year we started flippin' burgers! In other words, we founded a brand providing coding services while focusing on PSD to HTML conversions. Turned out, we were better at coding than cooking.",
      img: year7,
      alt: "Illustration representing the year 2007 with colorful building blocks",
    
    },
    {
      year: "2009",
      title: "From Micro to Small",
      text: "We spent the next 2 years ambitiously expanding our horizons. The team behind Jirtu Software Labs grew to 15 talented web designers and developers, turning us officially from a micro company into a small one. Yay!",
      img: "https://storage.googleapis.com/a1aa/image/36c3b331-a44a-438a-a3c0-3dadd5aadaea.jpg",
      alt: "Illustration of colorful building blocks arranged to form the number 15 with outlines and shadows",
      bg: "#f3f4f6", // default light gray
    },
    {
      year: "2011",
      title: "Scaling Up",
      text: "We officially took it to the next level. Things were going really well, really rapidly. The workload increased, the team numbered over 50 and we took quite a big step: we moved to a bigger office.",
      img: year11,
      alt: "Illustration representing the year 2011 with building blocks and growth",
      
    },
    {
      year: "2015",
      title: "Innovation and Expansion",
      text: "By 2015 things got huge - the team's number of coders and designers kept growing and hit 100! Having come a long way, we had already completed thousands of projects and turned lots of happy clients into partners.",
      img: year15,
      alt: "Illustration representing the year 2015 with colorful blocks and growth",
      
    },
    {
      year: "2023",
      title: "Today and Beyond",
      text: "A dream come true! These days, we are more ambitious than ever. Being full of ideas and inspired by passion for success, we are constantly learning how to be better and turn our vision into reality. We are all we ever dreamed of!",
      img: year23,
      alt: "Illustration representing the year 2023 with futuristic building blocks",
  
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  const handleYearClick = (year) => {
    const newIndex = stories.findIndex(story => story.year === year);
    if (newIndex !== currentIndex && !isAnimating) {
      setDirection(newIndex > currentIndex ? 'next' : 'prev');
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setDirection('prev');
      setCurrentIndex(prev => (prev - 1 + stories.length) % stories.length);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setDirection('next');
      setCurrentIndex(prev => (prev + 1) % stories.length);
    }
  };

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentStory = stories[currentIndex];

  return (
    <div 
      className="min-h-screen bg-[#f3f3f3] text-black transition-colors duration-700" 
      style={{ backgroundColor: currentStory.bg }}
    >
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl font-semibold">
            <span className="underline decoration-red-600 decoration-4 underline-offset-4">
              Our Story
            </span>
            In a Nutshell
          </h1>
          <p className="mt-4 text-base font-normal text-black/80">
            We've been having the time of our lives for more than 15 years now.
          </p>
        </section>

        <section className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 max-w-6xl mx-auto">
          {/* Image Container */}
          <div className="flex-shrink-0 max-w-[400px] w-full relative overflow-hidden h-[300px]">
            <img
              key={`image-${currentIndex}`}
              alt={currentStory.alt}
              className={`w-full h-full object-contain absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
                direction === 'next' 
                  ? 'animate-[slideInRight_0.5s_ease-in-out_forwards]'
                  : 'animate-[slideInLeft_0.5s_ease-in-out_forwards]'
              }`}
              src={currentStory.img}
              height="300"
              width="400"
            />
          </div>

          {/* Text Container */}
          <div className="max-w-xl w-full text-left relative overflow-hidden h-[180px]">
            <div 
              key={`text-${currentIndex}`}
              className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
                direction === 'next' 
                  ? 'animate-[slideInRight_0.5s_ease-in-out_forwards]'
                  : 'animate-[slideInLeft_0.5s_ease-in-out_forwards]'
              }`}
            >
              <h2 className="text-lg font-bold mb-1 underline decoration-red-600 decoration-2 underline-offset-2">
                {currentStory.year}
              </h2>
              <h3 className="text-xl font-extrabold mb-4">
                {currentStory.title}
              </h3>
              <p className="text-base font-normal text-black/80 leading-relaxed">
                {currentStory.text}
              </p>
            </div>
          </div>
        </section>

        <nav className="mt-20 flex items-center justify-center gap-6 text-base font-semibold flex-wrap">
          <button 
            aria-label="Previous year" 
            className="text-black/70 hover:text-black transition" 
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          
          {stories.map((story, index) => (
            <button
              key={story.year}
              className={`year-btn hover:text-black transition ${
                currentIndex === index ? 'bg-red-600 rounded-md px-3 py-1' : ''
              }`}
              data-year={story.year}
              onClick={() => handleYearClick(story.year)}
            >
              {story.year}
            </button>
          ))}
          
          <button 
            aria-label="Next year" 
            className="text-black/70 hover:text-black transition" 
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </nav>
      </main>

      <style jsx global>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default OurStory;