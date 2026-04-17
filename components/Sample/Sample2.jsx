import React, { useState } from "react";
import leftArrow from "../../assets/images/left.png";
import rightArrow from "../../assets/images/right.png";
import { FaCheckCircle } from "react-icons/fa";

const galleryData = [
  {
    src: "https://s3.amazonaws.com/samples-thumbs/uploads/2017/04/kasra-768x504.jpg",
    alt: "Image 1",
    title: "Kasra Design - WordPress Website",
    description:
      "With just 3 responsive page templates and a unique section builder, we created over 15 pages. We implemented several animations and parallax effects throughout the site. It was also carefully optimized to reach 88 points in Google PageSpeed Insights!",
    features: [
      "15+ pages",
      "HTML5 / CSS3",
      "Responsive",
      "Custom JavaScript",
      "Custom Animations",
    ],
  },
  {
    src: "https://s3.amazonaws.com/samples-thumbs/uploads/2017/05/sofa-thumb-768x504.jpg",
    alt: "Image 2",
    title: "Sofa Lab - WordPress Project",
    description:
      "We handled a project of 10+ pages, using HTML5 and CSS3. Besides making everything responsive, which today is the standard, we dazzled the project with some custom made JavaScript. Even more, the client enjoyed our custom animations.",
    features: [
      "10+ pages",
      "HTML5 / CSS3",
      "Responsive",
      "Custom JavaScript",
      "Custom Animations",
    ],
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeZIndex, setActiveZIndex] = useState({
    background: 0,
    middle: 10,
    foreground: 20,
  });

  const backgroundImage =
    galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length];
  const middleImage = galleryData[currentIndex];
  const foregroundImage = galleryData[(currentIndex + 1) % galleryData.length];

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryData.length) % galleryData.length
    );
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
      foreground: 20,
    });
  };

  const handleLayerClick = (layer) => {
    setActiveZIndex({
      background: layer === "background" ? 30 : 0,
      middle: layer === "middle" ? 30 : 10,
      foreground: layer === "foreground" ? 30 : 20,
    });
  };

  const getActiveImage = () => {
    if (activeZIndex.background === 30) return backgroundImage;
    if (activeZIndex.middle === 30) return middleImage;
    return foregroundImage;
  };

  const activeImage = getActiveImage();

  return (
    <div
      className="w-full flex flex-col md:flex-row font-sans min-h-screen bg-white relative"
      id="samples"
    >
      <div className="relative flex-1 flex items-center justify-center min-h-[400px] p-4">
        <div className="relative w-full max-w-[500px] aspect-video">
          <div
            onClick={() => handleLayerClick("background")}
            className="absolute w-full h-full transition-all duration-300 cursor-pointer"
            style={{
              zIndex: activeZIndex.background,
              top: "3rem",
              left: "3rem",
            }}
          >
            <img
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              className="w-full h-full object-contain rounded-md shadow"
            />
          </div>

          <div
            onClick={() => handleLayerClick("middle")}
            className="absolute w-full h-full transition-all duration-300 cursor-pointer"
            style={{
              zIndex: activeZIndex.middle,
              top: "1.5rem",
              left: "1.5rem",
            }}
          >
            <img
              src={middleImage.src}
              alt={middleImage.alt}
              className="w-full h-full object-contain rounded-md shadow"
            />
          </div>
          <div
            onClick={() => handleLayerClick("foreground")}
            className="relative w-full h-full transition-all duration-300 cursor-pointer"
            style={{ zIndex: activeZIndex.foreground }}
          >
            <img
              src={foregroundImage.src}
              alt={foregroundImage.alt}
              className="w-full h-full object-contain rounded-md shadow"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#ffdb5e] flex flex-col justify-center px-8 md:px-20 py-16 md:w-1/2 z-10">
        <div>
          <h2 className="text-xl font-bold mb-4">Selected Samples</h2>
          <h3 className="text-base font-bold mb-3">{activeImage.title}</h3>
          <p className="text-xs leading-tight mb-6">
            {activeImage.description.split(". ").map((line, i) => (
              <React.Fragment key={i}>
                {line.trim()}
                <br />
              </React.Fragment>
            ))}
          </p>

          <ul className="text-xs space-y-1 mb-6">
            {activeImage.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-black text-sm" /> {feature}
              </li>
            ))}
          </ul>

          <button className="bg-black text-white text-[10px] px-2 py-1 font-bold rounded-sm tracking-wider hover:opacity-90 w-16">
            VIEW
          </button>
        </div>

        <div className="mt-6 flex gap-4">
          <button onClick={handlePrev}>
            <img src={leftArrow} alt="Previous" className="w-4 h-4" />
          </button>
          <button onClick={handleNext}>
            <img src={rightArrow} alt="Next" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
