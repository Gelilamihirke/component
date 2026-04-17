import React from "react";
import { FaCogs, FaCode, FaThLarge } from "react-icons/fa";

const EngagementModels = () => {
  const models = [
    {
      icon: <FaCogs />,
      title: "Per Project",
      description:
        "An approach suitable for projects with a clear scope of work and well-identified goals that can be executed in a waterfall working method. Perfect to stay with a specific budget and timeframe.",
    },
    {
      icon: <FaCode />,
      title: "Semi-Agile Approach",
      description:
        "Have long-term projects that don't have well-identified goals yet, and the scope may change over time? Let our team help set up a custom agile approach to match your needs.",
    },
    {
      icon: <FaThLarge />,
      title: "Dedicated Developer or Team",
      description:
        "Get skilled developers or an entire team to work exclusively on your projects, ensuring a high level of expertise, commitment, and timely project completion.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-4">
          <span className="border-b-4 border-primary">Engagement Models</span> That Work
        </h2>
        <p className="max-w-3xl text-gray-900 mb-16 text-base md:text-lg leading-relaxed">
          Our flexible and effective approaches ensure that we can deliver customized
          solutions that meet our client's specific needs and exceed their expectations.
          Proven to be successful with more than 1000+ agencies globally.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-16 space-y-12 md:space-y-0 max-w-7xl">
          {models.map((model, idx) => (
            <div key={idx} className="flex-1 text-center md:text-left">
              <div className="mb-4 text-3xl text-black flex justify-center md:justify-start">
                {model.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{model.title}</h3>
              <p className="text-gray-900 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;