import React from "react";
import { FaCheckCircle } from "react-icons/fa"; 

const WhatWeDo = () => {
  const services = [
    {
      title: "Front-End",
      items: [
        "Design to HTML Conversions",
        "Custom JavaScript Coding",
        "React Development",
        "Vue JS Development",
        "HTML Email Templates",
        "HTML5 Banners",
      ],
    },
    {
      title: "Website CMS",
      items: [
        "WordPress",
        "HubSpot CMS",
        "Contentful",
        "Craft CMS",
        "Squarespace",
        "Other Website Builders",
      ],
    },
    {
      title: "E-Commerce",
      items: [
        "Shopify",
        "WooCommerce",
        "BigCommerce",
        "Craft Commerce",
        "Squarespace",
        "Custom eCommerce",
      ],
    },
    {
      title: "Other Services",
      items: [
        "Web Applications",
        "Headless Solutions",
        "Design - UI / UX",
        "Quality Assurance",
        "Project Discovery",
        "Server Administration",
      ],
    },
  ];

  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-extrabold text-2xl md:text-3xl mb-4">
            What We Can Do For You
          </h2>
          <p className="text-base md:text-lg text-gray-900">
            Our white-label services allow you to expand your offerings to
            clients with top-notch web development solutions. Our expert team
            of developers, designers, and project managers work behind the
            scenes to deliver exceptional results that meet your clients'
            specific needs.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 max-w-6xl mx-auto">
          {services.map((category, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-6">{category.title}</h3>
              <ul className="space-y-4 text-gray-900">
                {category.items.map((item, subIdx) => (
                  <li key={subIdx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-black text-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;