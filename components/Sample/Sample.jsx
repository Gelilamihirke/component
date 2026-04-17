import React, { useState } from "react";
import leftArrow from "../../assets/images/left.png";
import rightArrow from "../../assets/images/right.png";
import { FaCheckCircle } from "react-icons/fa";
import galleryData from "../../data/galleryData.json";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeZIndex, setActiveZIndex] = useState({
    background: 0,
    middle: 10,
    foreground: 20
  });


  const backgroundImage = galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length];
  const middleImage = galleryData[currentIndex];
  const foregroundImage = galleryData[(currentIndex + 1) % galleryData.length];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
    resetZIndexes();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
    resetZIndexes();
  };

  const resetZIndexes = () => {
    setActiveZIndex({
      background: 0,
      middle: 10,
      foreground: 20
    });
  };

  const handleLayerClick = (layer) => {
   
    const newZIndexes = {
      background: layer === 'background' ? 30 : 0,
      middle: layer === 'middle' ? 30 : 10,
      foreground: layer === 'foreground' ? 30 : 20
    };
    setActiveZIndex(newZIndexes);
  };

 
  const getActiveImage = () => {
    if (activeZIndex.background === 30) return backgroundImage;
    if (activeZIndex.middle === 30) return middleImage;
    return foregroundImage;
  };

  const activeImage = getActiveImage();

  return (
    <div className="flex flex-col md:flex-row font-sans relative min-h-[400px]">
    
      <div className="absolute left-1/2 top-1/2 transform -translate-x-[5%] -translate-y-1/2 w-[500px] max-w-[90%] h-[300px] z-30">
       
        <div 
          onClick={() => handleLayerClick('background')}
          className={`absolute top-13 left-30 w-full h-full transition-all duration-300 cursor-pointer z-${activeZIndex.background}`}
          style={{ zIndex: activeZIndex.background }}
        >
          <img
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            className="w-full h-full object-cover rounded-md shadow"
          />
        </div>

      
        <div 
          onClick={() => handleLayerClick('middle')}
          className={`absolute -top-1/5 left-20 w-full h-full transition-all duration-300 cursor-pointer z-${activeZIndex.middle}`}
          style={{ zIndex: activeZIndex.middle }}
        >
          <img
            src={middleImage.src}
            alt={middleImage.alt}
            className="w-full h-full object-cover rounded-md shadow"
          />
        </div>

       
        <div 
          onClick={() => handleLayerClick('foreground')}
          className={`relative w-full h-full transition-all duration-300 cursor-pointer z-${activeZIndex.foreground}`}
          style={{ zIndex: activeZIndex.foreground }}
        >
          <img
            src={foregroundImage.src}
            alt={foregroundImage.alt}
            className="w-full h-full object-cover rounded-md shadow"
          />
        </div>
      </div>

      
      <div className="bg-[#ffdb5e] flex flex-col justify-center px-8 md:px-20 py-16 md:w-1/2 relative z-10">
        <div className="ml-60">
          <h2 className="text-xl font-bold mb-4">Selected Samples</h2>
          <h3 className="text-base font-bold mb-3">{activeImage.title}</h3>
          <p className="text-xs leading-tight mb-6">
            {activeImage.description.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
  
          <ul className="text-xs space-y-1 mb-6">
            {activeImage.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-black" /> {feature}
              </li>
            ))}
          </ul>

          <button className="bg-black text-white text-[8px] px-1 py-1 font-bold rounded-sm tracking-wider hover:opacity-90 w-12">
            VIEW
          </button>
        </div>

        <div className="-mt-8">
          <ul className="relative space-y-1">
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2">  
              </span>
              <button onClick={handlePrev}>
                <img src={leftArrow} alt="Previous" className="w-4 h-4 mr-19" />
              </button>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2">
              </span>
              <button onClick={handleNext}>
                <img src={rightArrow} alt="Next" className="w-4 h-4 mr-19" />
              </button>
            </li>
          </ul>
        </div>
      </div>

    
      <div className="relative md:w-1/2 bg-[#f5f5f5] flex justify-center items-start overflow-hidden p-6">
       
      </div>
    </div>
  );
};

export default Gallery;