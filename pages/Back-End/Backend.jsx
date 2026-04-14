import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import teamMembers from "../../data/teamMembers.json";
import { Link } from "react-router-dom";
import backend from "../../assets/images/backend.png";
import acelab from "../../assets/images/acelab.jpg";
import amyc from "../../assets/images/amyc.png";
import kadonation from "../../assets/images/kadonation.png";
import tamerin from "../../assets/images/tamerin.png";
import socapa from "../../assets/images/socapa.png";
import molin from "../../assets/images/molin.png";
import business from "../../assets/images/business.png";
import clean from "../../assets/images/clean.png";
import scalable from "../../assets/images/scalable.png";
import security from "../../assets/images/security.png";
import apid from "../../assets/images/apid.png";
import performance from "../../assets/images/performance.png";
import node from "../../assets/images/node.png";
import laravel from "../../assets/images/laravel.png";
import postgre from "../../assets/images/postgre.png";
import docker from "../../assets/images/docker.png";
import optional from "../../assets/images/optional.png";
import calander from "../../assets/images/SVG.png";

const Front_end = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentMemberIndex((prevIndex) =>
          prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      id: 1,
      src: business,
      title: "Business-First Engineering",
      description:
        "We align our technical decisions with your business goals. Whether you need rapid delivery, long-term scalability, or cost-effective architecture — we build with your priorities in mind.",
    },
    {
      id: 2,
      src: clean,
      title: "Clean, Maintainable Code",
      description:
        "We follow proven development patterns (MVC, modular structure, SOLID principles) to ensure your backend is readable, testable, and easy to scale — even if another team takes over later",
    },
    {
      id: 3,
      src: scalable,
      title: "Scalable & Cloud-Ready",
      description:
        "From day one, we plan for scale. Whether your app has 100 users or 1 million, our backend systems are built with infrastructure in mind — ready to run on AWS, Vercel, DigitalOcean, or Kubernetes.",
    },
    {
      id: 4,
      src: security,
      title: "Security-First Mindset",
      description:
        "We build with modern security practices at the core — including encrypted authentication, role-based access control (RBAC), input validation, rate limiting, and OWASP-compliant workflows.",
    },
    {
      id: 5,
      src: apid,
      title: "API-Driven & Integration-Ready",
      description:
        "Need your backend to connect with external services or power mobile/web frontends? No problem. We deliver RESTful or GraphQL APIs, built with stability and versioning in mind.",
    },
    {
      id: 6,
      src: performance,
      title: "Performance Optimized",
      description:
        "We optimize for speed at every level — query efficiency, caching (Redis), background jobs, and lean data structures — all contributing to a faster experience for your end users. ",
    },
  ];
  const models = [
    {
      id: 1,
      src: node,
      title: "Node.js",
      description:
        "We use Node.js to build high-performance server-side applications with JavaScript. It's perfect for real-time applications, microservices, and systems that require fast response times.",
      points: [
        "REST & GraphQL APIs",
        "WebSockets for real-time apps",
        "Lightweight and highly scalable",
        "Seamless JS stack from frontend to backend",
      ],
    },
    {
      id: 2,
      src: laravel,
      title: "Laravel (PHP)",
      description:
        "Laravel allows us to build robust applications quickly, with clean code and built-in features like routing, caching, and ORM (Eloquent).",
      points: [
        "Secure authentication systems",
        "API & MVC structure",
        "Blade templating (for full-stack apps)",
        "Queue jobs, task scheduling & more",
      ],
    },
    {
      id: 3,
      src: postgre,
      title: "PostgreSQL",
      description:
        "PostgreSQL is our preferred relational database for projects that require strong consistency, complex queries, and excellent performance at scale.",
      points: [
        "ACID-compliant transactions",
        "Advanced indexing and full-text search",
        "JSONB for hybrid relational + NoSQL use cases",
        "Scalable performance for high-traffic systems",
      ],
    },
    {
      id: 4,
      src: docker,
      title: "Docker",
      description:
        "We use Docker to containerize our apps — ensuring they run the same across development, staging, and production. This allows for smoother collaboration, deployment, and scaling.",
      points: [
        "Local development environments",
        "Microservice isolation",
        "CI/CD integration",
        "Cloud-native deployment ready (Kubernetes, AWS ECS, etc.)",
      ],
    },
    {
      id: 5,
      src: optional,
      title: "Optional Tools (based on project needs):",
      description: "",
      points: [
        "Redis — for caching and real-time queues",
        "GraphQL — for flexible data querying",
        "JWT & OAuth — secure token-based authentication",
        "MongoDB — for NoSQL projects or hybrid databases",
        "NGINX / Apache — server-level optimization",
      ],
    },
  ];
  return (
    <div className="bg-white text-black mt-28 font-Inter">
      <div className=" w-full ">
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 font-Inter">
          <div className="py-12 w-full flex flex-col lg:flex-row items-center gap-8 sm:gap-29 mx-auto">
            <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
              <p className="w-full text-black text-lg sm:text-xl lg:text-[23px] font-semibold font-['Inter'] leading-7">
                SaaS Apps, Enterprise Apps, Figma to React
              </p>

              <h1 className="w-full sm:w-[695px] text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3">
                <span className="inline-block relative mb-1">
                  <span className="relative z-10">Back-End</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 sm:h-[5px] lg:h-[7px] bg-primary z-0"></span>
                </span>
                <br className="hidden sm:block" />{" "}
                <span className="sm:whitespace-nowrap">
                  Development Services
                </span>
              </h1>

              <p className="w-full sm:w-[90%] lg:w-[648.68px] text-[10] sm:text-[18px] md:text-[20px] leading-relaxed mb-6 sm:mb-8 lg:mb-9">
                A great frontend means nothing without a strong backend. We
                build scalable, secure, and maintainable backend systems that
                handle everything from user authentication to complex data
                operations. Our solutions are built to grow as you grow.
              </p>
              <ul className="w-full flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-5">
                {[
                  "Unbeatable Quality",
                  "Fast Turnarounds",
                  "Reasonable Pricing",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-red-600 text-base sm:text-[20px] min-w-[16px] mr-2" />
                    <span className="font-inter font-semibold text-base sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="transform scale-90 origin-left">
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 w-full">
                  <button className="bg-primary hover:bg-secondary text-white font-bold rounded-[8px] transition-colors w-[130%] mx-auto sm:w-[238.09px] h-[64px] text-[16px] sm:text-lg leading-[1.6] align-middle uppercase font-inter">
                    GET STARTED NOW
                  </button>

                  <button className="bg-white hover:bg-primary-40 border border-gray-300 font-bold rounded-[8px] transition-colors shadow-sm flex items-center justify-center gap-2  w-[130%] sm:w-[257.5px] h-12 sm:h-[64px] text-sm sm:text-[16px]  lg:text-[18px] leading-[1.6] uppercase font-inter">
                    <img
                      src={calander}
                      alt="Calendar icon"
                      className="w-5 h-5 sm:w-10 sm:h-6 lg:w-[35px] lg:h-[25px] lg:pr-2"
                    />
                    BOOK A MEETING
                  </button>
                </div>
              </div>

              <div className="transform scale-90 origin-left ">
                <ul className="flex flex-wrap gap-x-3 gap-y-2 text-[13px] font-normal leading-[1.6] font-inter text-black list-none align-middle">
                  <li className="relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[4px] before:w-[4px] before:bg-black before:rounded-full before:content-['']">
                    No Payment Required
                  </li>
                  <li className="relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[4px] before:w-[4px] before:bg-black before:rounded-full before:content-['']">
                    No Strings Attached
                  </li>
                  <li className="relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[4px] before:w-[4px] before:bg-black before:rounded-full before:content-['']">
                    100% Risk-Free
                  </li>
                </ul>
              </div>
            </section>

            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={backend}
                alt="Back-End Development"
                className="w-full max-w-full sm:min-w-[637px] lg:max-w-[737px] object-contain rounded-lg"
              />
            </div>
          </div>
        </main>
        <p className="w-full max-w-[903.6px] mx-auto text-center text-gray-500 mt-[7.2px] text-[16.2px] sm:text-[19.8px] font-medium leading-[1.2] align-middle font-inter mb-4">
          Trusted by international businesses and creative agencies worldwide
          from all shapes and sizes.
        </p>

        <div className="w-full overflow-x-auto sm:overflow-visible scrollbar-hide py-2 mb-24">
          <div
            className="flex sm:inline-flex flex-nowrap items-center justify-start sm:justify-center
                  gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-[47px]
                  min-w-max sm:min-w-0
                  px-4 sm:px-0
                  w-auto sm:w-full"
          >
            {[acelab, amyc, kadonation, tamerin, socapa, molin].map(
              (logo, index) => (
                <div key={index} className="flex-shrink-0 px-2 sm:px-0">
                  <img
                    src={logo}
                    alt="Client logo"
                    className="h-5 sm:h-7 md:h-8 lg:h-9 xl:h-10 object-contain transition-opacity duration-300 min-w-[60px] sm:min-w-0"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <section id="benefits" className="relative w-full bg-[#F4F4F4]">
          <div className="w-full">
            <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  <div className="text-center font-inter font-bold text-[28px] sm:text-[40px] leading-[1.2] tracking-[-0.12px] align-middle mb-6">
                    <span className="relative inline-block">
                      <span className="relative z-10">Why Jirtuu</span>
                      <span className="absolute left-0 right-0 bottom-0 h-[7px] bg-primary z-0"></span>
                    </span>
                    ? Because we care.
                  </div>
                </h2>
                <p className="text-center font-inter font-normal  text-base sm:text-lg lg:text-[16px] xl:text-xl  leading-relaxed  sm:mb-8  tracking-normal align-middle max-w-[90%] sm:max-w-[80%] lg:max-w-[700px] h-auto mx-auto px-4  lg:mb-6 justify-start">
                  Here are just some of the reasons why to choose us as your
                  partner.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 max-w-[1350px] h-auto mx-auto px-4 sm:px-0 mb-12 transform scale-90">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.id}
                      className="flex flex-col items-center text-center px-4"
                    >
                      <img
                        src={benefit.src}
                        alt={benefit.title}
                        className="w-[54px] sm:w-[70px] h-[60px] sm:h-[68px] mb-6"
                      />
                      <h3 className="font-inter font-semibold text-lg sm:text-xl lg:text-[20px] xl:text-[22px] leading-7 tracking-wide text-center mb-4 sm:mb-5 lg:mb-5">
                        {benefit.title}
                      </h3>
                      <p className="ont-inter font-normal text-base sm:text-lg lg:text-[16px] xl:text-[20px] leading-relaxed text-center text-gray-800 mb-6 lg:mb-6">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 items-center mx-auto ">
          <div className="max-w-[1350px] mx-auto">
            <div className="text-center">
              <h2 className="text-[27px] font-extrabold mb-[8.1px] inline-block">
                <div className="text-center mb-5">
                  <span className="relative font-inter font-bold text-4xl sm:text-[36px] leading-[1.2] tracking-[-0.108px] align-middle">
                    <span className="relative z-10 ">Our Stack</span>
                    <span className="absolute left-0 right-0 bottom-0 h-[7px] bg-primary z-0"></span>
                  </span>
                </div>
              </h2>
              <p className="max-w-[828.42px] mx-auto text-gray-900 mb-[6px] sm:mb-[21px] font-inter text-[14.4px] sm:text-xl leading-[1.6] text-center align-middle ">
                We're heavily using all of the technologies below on a daily
                basis, and enjoy all of them.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-[1340px] mx-auto transform scale-90">
              {models.map((model) => (
                <div
                  key={model.id}
                  className="flex flex-col text-left px-4 sm:px-0"
                >
                  <div className="mb-7 text-3xl text-black flex items-center">
                    <img
                      src={model.src}
                      alt={model.title}
                      className="w-10 h-10 mr-3 object-contain"
                    />
                    <h3 className="font-inter font-semibold text-[20px] sm:text-2xl leading-[1.3] tracking-[-0.24px]">
                      {model.title}
                    </h3>
                  </div>

                  {model.description && (
                    <p className="pl-13 sm:pl-[53px] font-inter font-normal text-[16px] sm:text-lg leading-[1.6] tracking-[-0.11px] text-gray-900 mb-13 max-w-[523px]">
                      {model.description}
                    </p>
                  )}

                  <ul className="list-none space-y-4 sm:space-y-5 text-left pl-0 sm:pl-[108px] mb-12">
                    {model.points &&
                      model.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="pl-23 sm:pl-[1px] font-inter font-bold text-[14px] sm:text-[16px] leading-[1] tracking-[-0.11px] align-middle"
                        >
                          {point}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>{" "}
          </div>
        </section> 
        <section
          id="quote"
          className="w-full bg-primary-20 py-30 sm:py-26 px-4 text-center"
        > 
          <h1 className="transform scale-90 text-[38px] sm:text-[48px] lg:text-[60px] leading-[1.2] tracking-normal text-center font-inter align-middle mb-3 font-extrabold">
            Start Your Project. It's Risk-Free.
          </h1>

          <p
            className=" transform scale-90 max-w-[1010px] mx-auto mb-9 text-center font-inter font-normal text-[18px] sm:text-[22px] leading-[1.6] tracking-normal align-middle px-4"
            style={{ fontStyle: "normal", verticalAlign: "middle" }}
          >
            Let's make it happen! With our risk-free approach, you can rest
            assured that your project is in good hands. Submit your inquiry
            today and receive a prompt response from our team.
          </p>

          <div className="flex justify-center">
            <button
              type="button"
              className="w-full sm:w-auto flex lg:ml-50 justify-center"
            >
              <Link
                to="/quote"
                className="inline-flex items-center justify-center bg-secondary text-white font-bold py-2 lg:w-[370.27px] lg:h-[64px] text-base lg:text-lg px-4 sm:py-3 sm:px-6 rounded-md hover:bg-primary hover:text-white transition w-full sm:w-auto text-center"
              >
                GET A QUOTE FOR YOUR PROJECT
              </Link>
            </button>
          </div>

          <div className="mt-6 max-w-[221.5px] mx-auto">
            <Link
              to="/consultation"
              className="transform scale-90 font-inter font-bold text-[16px] sm:text-[20px] leading-[1.6] tracking-normal text-center align-middle underline decoration-solid decoration-black decoration-auto"
            >
              or start a conversation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Front_end;
