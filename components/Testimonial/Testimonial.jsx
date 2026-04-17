import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import testimonials from '../../data/testimonials.json';

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const currentTestimonial = testimonials[currentTestimonialIndex];


  useEffect(() => {
    let intervalId;
    
    if (isAutoRotating) {
      intervalId = setInterval(() => {
        setCurrentTestimonialIndex((prevIndex) => 
          (prevIndex + 1) % testimonials.length
        );
      }, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoRotating, testimonials.length]);

  const handleImageClick = () => {
    setIsAutoRotating(false);
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const handleThumbnailClick = (index) => {
    setIsAutoRotating(false);
    setCurrentTestimonialIndex(index);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center font-extrabold text-xl md:text-2xl mb-20">
          Not Just Clients.{' '}
          <span className="underline decoration-yellow-400">
            Partners &amp; Friends.
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-24">
          <div className="relative group">
            <button 
              onClick={handleImageClick}
              className="relative overflow-hidden rounded-full focus:outline-none"
              aria-label="View next testimonial"
            >
              <img
                src={currentTestimonial.mainImage}
                alt={`${currentTestimonial.name} portrait`}
                className="w-48 h-48 rounded-full object-cover transition-all duration-300 group-hover:brightness-90"
                width={200}
                height={200}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/200?text=Photo+Not+Available";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white bg-black bg-opacity-50 rounded-full px-3 py-1 text-sm font-medium">
                  Next
                </span>
              </div>
            </button>
          </div>

          <div className="flex flex-col max-w-xl">
            <div className="flex items-start gap-4 mb-4">
              <FaQuoteLeft className="text-5xl font-black text-gray-300" />
              <p className="text-sm font-semibold leading-snug">
                {currentTestimonial.quote}
              </p>
            </div>
            <div className="text-xs font-semibold mb-1">{currentTestimonial.name}</div>
            <div className="text-xs mb-1">{currentTestimonial.position}</div>
            <div className="text-xs mb-6">{currentTestimonial.company}</div>

            <div className="flex items-center gap-3 flex-wrap">
              {testimonials.map((testimonial, idx) => (
                <button 
                  key={testimonial.id}
                  onClick={() => handleThumbnailClick(idx)}
                  className={`w-10 h-10 rounded-full overflow-hidden transition-all duration-200 ${
                    currentTestimonialIndex === idx 
                      ? '  scale-125 z-10' 
                      : 'filter grayscale brightness-75 hover:grayscale-0 hover:brightness-100'
                  }`}
                  aria-label={`View ${testimonial.name}'s testimonial`}
                >
                  <img
                    src={testimonial.mainImage}
                    alt={`${testimonial.name} thumbnail`}
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://via.placeholder.com/40?text=Photo";
                    }}
                  />
                </button>
              ))}
              <a
                href="#"
                className="text-[10px] underline underline-offset-2 ml-6 hover:text-yellow-600 transition-colors"
              >
                Read more reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;