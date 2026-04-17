import React, { useState } from "react";
import { Link } from "react-scroll";

const SideNavbar2 = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
  { id: "intro", name: "INTRO" },
  { id: "services", name: "SERVICES" },
  { id: "testimonials", name: "TESTIMONIALS" },
  { id: "features", name: "FEATURES" },
  { id: "samples", name: "SAMPLES" },
  { id: "why-htmlburger", name: "WHY HTMLBURGER" },
  { id: "how-it-works", name: "HOW IT WORKS" },
  { id: "faq", name: "FAQ" },
  { id: "get-a-quick-quote", name: "GET A QUICK QUOTE" },
];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-end space-y-2">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="group relative flex items-center justify-end"
          >
            <Link
              to={section.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onSetActive={() => setActiveSection(section.id)}
              className="flex items-center justify-end cursor-pointer"
            >
              <span
                className={`mr-2 text-xs font-medium text-gray-700 bg-white px-2 py-1  shadow transition-opacity duration-200 ${
                  activeSection === section.id ? "opacity-100" : "opacity-0"
                } group-hover:opacity-100`}
              >
                {section.name}
              </span>

              <div
                className={`
                w-6 h-6 flex items-center justify-center rounded-full border-2 text-xs font-medium
                ${
                  activeSection === section.id
                    ? "bg-white  text-sky-700 hover:text-sky-700"
                    : "border-gray-300 text-gray-600 group-hover:bg-gray-100"
                }
              `}
              >
                {index + 1}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNavbar2;
