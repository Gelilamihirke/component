import React, { useState, useEffect } from "react";
import processStepsData from "../../data/processSteps.json";

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const { header, steps } = processStepsData;

  useEffect(() => {
    let interval;
    if (autoRotate) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoRotate, steps.length]);

  const handleStepHover = (index) => {
    setAutoRotate(false);
    setActiveStep(index);
  };

  const handleMouseLeave = () => {
    setAutoRotate(true);
  };

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
          {header.title}
          <span className="underline decoration-red-400 decoration-[6px] underline-offset-2">
            {header.highlighted}
          </span>
        </h2>
        <p className="text-sm sm:text-base text-gray-900 mb-12 max-w-xl mx-auto">
          {header.description.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>

        <div
          className="flex justify-center items-center space-x-12 mb-12"
          onMouseLeave={handleMouseLeave}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div
                className="flex flex-col items-center space-y-2 cursor-pointer transition-all duration-300"
                onMouseEnter={() => handleStepHover(index)}
              >
                <img
                  alt={`Step ${step.id}`}
                  className={`w-12 h-12 transition-opacity duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-40"
                  }`}
                  src={step.icon}
                />
                <span
                  className={`text-xs transition-all duration-300 ${
                    activeStep === index
                      ? "font-bold text-black"
                      : "text-gray-400"
                  }`}
                >
                  Step {step.id}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="text-gray-400 text-xl select-none">&gt;</div>
              )}
            </React.Fragment>
          ))}
        </div>

        <h3 className="font-bold text-lg sm:text-xl mb-2 max-w-xs mx-auto animate-fadeIn">
          {steps[activeStep].title}
        </h3>

        <div className="h-1 w-36 bg-gray-300 rounded-full mx-auto mb-8" />

        <p className="text-xs sm:text-sm text-gray-900 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
          {steps[activeStep].description}
        </p>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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

export default ProcessSteps;
