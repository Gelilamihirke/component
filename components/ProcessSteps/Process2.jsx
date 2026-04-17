import React, { useState, useEffect } from "react";
const processStepsData = [
  {
    header: {
      title: "4 Simple Steps to Success",
      highlighted: "",
      description:
        "Here is how the actual process of custom WordPress development happens with us.",
    },
    steps: [
      {
        id: 1,
        title: "1. Clear up the expectations",
        description:
          "The first step after you submit your request is for us to assign you a dedicated manager that will be the best fit for you. They will then take care of everything else - review the design files and project specs, make sure we are on the same page, and clear up your expectations from us.",
        icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSyrqVGba7oCKNVFgZ1Bp3F94SslLNft_A5RRnATWeFHne_yrD7",
      },
      {
        id: 2,
        title: "2. Development & Testing",
        description:
          "After we agree on everything, it's time for us to assign you the perfect developer/s for your project. Your manager keeps an eye on the progress, provides feedback to the dev, and gives you regular updates. After the coding phase is done, a QA also checks it for the 3rd time.",
        icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9p-oBvqhGxo6103A59roYkZ3Ui0L_xkgW_MEmWv6gLHMSWOd3",
      },
      {
        id: 3,
        title: "3. Delivery",
        description:
          "When the green light is given from the QA, we will send you previews to see for yourself. This is the time to tell us if anything needs to be altered. Once you are completely happy with the result, it's time for the champagne! Let's celebrate the success of the project.",
        icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRgPTszEtc7jYn-clfa_PK8tlyFpa6-3NHe5CWsfs-8HUulbf5I",
      },
      {
        id: 4,
        title: "4. Ongoing Support",
        description:
          "We know that after we’ve completed the development, your work is just starting and we're here to help. We will do the installation on the live server, and provide assistance when you need new features, some corrections, maintenance, security checks, etc. You name it, we will do it.",
        icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOayFCjBgsQqJFD_Gl_d5li1z6CHdlD4nnG4neHsRRNopjqCBe",
      },
    ],
  },
];

const Process2 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const { header, steps } = processStepsData[0]; // ✅ FIXED: Access index 0

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
          <span className="underline decoration-yellow-400 decoration-2">
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

        <div className="h-1 w-36 bg-yellow-300 rounded-full mx-auto mb-8" />

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

export default Process2;
