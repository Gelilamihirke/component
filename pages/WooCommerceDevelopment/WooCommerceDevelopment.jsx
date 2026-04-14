import React, { useState, useEffect } from "react";
import css_cup from "../../assets/images/css-cup.png";
import { FaCheckCircle } from "react-icons/fa";
import html_cup from "../../assets/images/html-cup.png";
import { FaCogs, FaCode, FaThLarge } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Testimonial from "../../components/Testimonial/Testimonial";
import Sample2 from "../../components/Sample/Sample2";
import SideNavbar2 from "../../components/SideNavbar/SideNavbar2";
import Process3 from "../../components/ProcessSteps/Process3";

const FAQItem = ({ question }) => (
  <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
    <p className="font-semibold text-sm md:text-base">{question}</p>
    <div className="flex items-center space-x-1 text-black font-semibold text-sm md:text-base">
      <FaCheckSquare className="text-blue-600 text-lg" />
      <span>Yes</span>
    </div>
  </div>
);

const teamMembers = [
  {
    id: "a1f57d0e-3c9b-4d5b-bf3e-7f9c12345678",
    name: "Simeon",
    position: "Manager WordPress Projects",
    photo: "https://htmlburger.com/assets/images/temp/thumb-manager-scott.jpg",
    stats: [
      { value: "11+", label: "Years at htmlBurger" },
      { value: "9+", label: "Years as Manager" },
      { value: "3600+", label: "Projects Completed" },
    ],
    bio: "Simeon is one of the most experienced managers with the company, and his team of 10 strong WordPress experts aren't far behind. If it can be built with WordPress they can do it. Problem solvers and clear thinkers kept on track by strong leadership.",
  },
  {
    id: "c3d8eab4-7f20-4a59-9d28-123456789abc",
    name: "Jane",
    position: "Manager WordPress Projects",
    photo: "https://htmlburger.com/assets/images/temp/thumb-manager-jane.jpg",
    stats: [
      { value: "6+", label: "Years at htmlBurger" },
      { value: "3+", label: "Years in Development" },
      { value: "320+", label: "Projects Completed" },
    ],
    bio: "Jane is an experienced WordPress manager with a background in the front-end development, where she inherited her attention to detail and the love of WordPress builders like Elementor. She also likes hanging out with her team and discussing the new technologies over a beer",
  },
  {
    id: "e7b6f32c-5d81-4b9a-8c55-abcdef123456",
    name: "Ilya",
    position: "Manager WordPress Projects",
    photo: "https://htmlburger.com/assets/images/temp/thumb-manager-elon.jpg",
    stats: [
      { value: "5+", label: "Years at htmlBurger" },
      { value: "2+", label: "Years as Team Lead" },
      { value: "150+", label: "Projects Completed" },
    ],
    bio: "Starting as a full-stack developer, Ilya has always been fascinated by the power of WordPress. With his natural talent and diverse expertise in web development, he effortlessly switched to the manager role. He and his team spend hours perfecting every detail of clients' websites.",
  },
];

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

  const currentMember = teamMembers[currentMemberIndex];
  const benefits = [
    {
      id: 1,
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSL4LU2Q-g3q34Bn527EhEGsgv42vmssH5tGRV7oBDsiehrLOVg",
      title: "5-Star WooCommerce Developers",
      description:
        "With 100+ highly experienced developers in different fields, we always have the right person/team to handle your WooCommerce project, no matter its size or complexity.",
    },
    {
      id: 2,
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZycuXk_lPS0PaOaoRswNSwVqmk3oNe2-Z0t-WXqncxSTiLC1f",
      title: "Pilot Project Test",
      description:
        "Evaluate our work via a pilot run and see if we are a match. Get an idea of the code quality, communication, and everything that is essential to you.",
    },
    {
      id: 3,
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_8imzpEVurDUjYikvpi9Ws11_Vkfeks1Yrevm5gR3nE09BMMI",
      title: "Always Available",
      description:
        "You don't need to deal with sick leave, holidays, unavailability. We will take care of that and find a developer or a team that is ready to start working on your project right away.",
    },
    {
      id: 4,
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuD-AZ5A7BTr-Zdgo9pbh4ZEHJEjkGmaMsPi-omXkB1EbDhf0D",
      title: "Managers Who Know WooCommerce",
      description:
        "For all your development needs, we will assign you a dedicated WordPress manager, that will keep the developers management process smooth and on track.",
    },
    {
      id: 5,
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaDh_AissmeDG7-d8fQacpI_nXwj2p6rasD1QKSgYYAw7tyT-",
      title: "Support & Maintenance",
      description:
        "If anything stops working properly on the WooCommerce store, contact us. We will be happy to fix it for you, even if it’s years after the project completion.",
    },
    {
      id: 6,
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5YTHhmyf0obasDvLkFYuf95YV00Nhj5OlcpyBihonu42N74Eq",
      title: "20,000+ Completed Projects",
      description:
        "We are proud to be behind more than 20,000 websites since 2007. We are now successfully releasing almost 3 websites each day of the year.",
    },
  ];
  const benefitsData = [
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQEQBIJcCE1l-eDoX63XOiz78WwWFGJGSyDp2nb-hNKfxos1tb",
      title: "No Unnecessary Plugins",
      description:
        "We don't use plugins for every small simple task. We build custom WordPress functionality and only use plugins when it's really necessary - Yoast, WooCommerce, etc.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFjNhjRSc-OMyx_lBqC8m5fjiSymCZEAQ9boRXBJYtZ6UBrP3F",
      title: "Server Installation",
      description:
        "Count on us to install your WordPress website on a staging or live server of your preference. No additional costs involved. We've got you covered!",
    },
    {
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTU-uKTshzwidxd76U2ZOYt5u1EBkxuZrKIcNmd4_BUne-P_eVp",
      title: "Responsive by Default",
      description:
        "Optimization for tablets and mobile devices is nowadays our default. No designs? That's fine. Our developers will handle it. It's part of the deal.",
    },
    {
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqeH7yxNs3Av5tG1UsIGEsGcwFBm0E7Q1v6KzPVuC7neuCUzbW",
      title: "Intuitive Admin Panels",
      description:
        "Creating simple admin panel is not a simple task. We develop easy-to-use admin panels, so the end user is not overwhelmed by tons of confusing options.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRRK3SBiIKWyOm-3fLQBM0xl_2HFS30yCUBaTEB6TUKfTLVX6d0",
      title: "Bespoke Theme Development",
      description:
        "Custom WordPress development without using premade templates. That's how we do it. Everything is crafted based on your specifics and includes only what you need. No unnecessary things.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRRK3SBiIKWyOm-3fLQBM0xl_2HFS30yCUBaTEB6TUKfTLVX6d0",
      title: "Builder of Your Preference",
      description:
        "Elementor, DiVi, Beaver Builder, Visual Composer, Themify Builder. We have experience with all modern builders and can use one if you prefer.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRhhQ1YIQSGoIaZTBO5cFgdwHNIzPj6rowxTn3-fCcbKkXjeYT",
      title: "Our Own Staging Servers",
      description:
        "Before we go live, we will first setup your project on our staging servers, so you can test, add your own content and make sure everything is perfect.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2s_YmikdmHzgHO17PLlVE7S1Qakl0neuZpAaMWn3_f5QUlnqQ",
      title: "Fast Loading Optimization",
      description:
        "We use tools to measure and optimize all aspects of the website: page size, load time, render time. We take care of everything: from sprites to server tuning.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6S9l-1PYLk5NJpl1sFh1rADS1a3356KqnC2NxP-J4jDKtXI9c",
      title: "Custom Fields",
      description:
        "We will use any custom fields library you prefer - ACF, CFS, or Carbon Fields - our most advanced WordPress custom fields library developed by our team.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUkw-evcdROy6pQPMJkzduJsNi6DOKosSrkmglSYPXzUiphad",
      title: "CSS Framework Usage",
      description:
        "Bootstrap, Foundation, Bulma, Materialize, Skeleton. Just let us know which framework you need and we will use it. It doesn't cost extra.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcio9DdzwXROr4udmW7fpK-dRho_foomyvVSObkZz7J4NhzIP2",
      title: "Commented Markup",
      description:
        "It's worth mentioning you don't have to ever again pay extra for commented markup. Get HTML and CSS so well commented, even a child can understand.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZS9H570fkhPamcGdHc_hL0TGWAd411YBJyBmBMX8XfhQnplJc",
      title: "SASS/LESS/PostCSS",
      description:
        "Using CSS preprocessors is part of our coding standards. We use them for all our projects. Just let us know which one is your favorite and we'll use it.",
    },
  ];
  const faqItems = [
    "Will you sign a NDA (non-disclosure agreement)?",
    "Do you offer unlimited revisions?",
    "Do you offer rush delivery?",
    "Do you accept Ai, Adobe XD, PNG, Indd, Sketch, JPG, EPS design files?",
    "Will you add rollovers/hovers at no additional charge?",
    "Will you add basic JavaScript at no additional charge?",
    "Will you use Bootstrap for my project at no additional charge?",
    "Will you build my project with SASS/Less at no additional charge?",
    "Do you use a version control system for maintaining your projects?",
    "Can you upload the files on my server once you are done?",
  ];
  const why = [
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-1C_G2AypxpBGOhqvmDjFp1Au2GXhekd4djvfgK3eCmg-qYff",
      title: "Design to WooCommerce",
      description:
        "Send your design mock-ups and we will convert them to a fully functional and responsive WooCommerce store with a custom theme.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSL4LU2Q-g3q34Bn527EhEGsgv42vmssH5tGRV7oBDsiehrLOVg",
      title: "WordPress eCommerce",
      description:
        "With its advance capabilities WordPress is a prefered platform for eCommerce. Let's help you build a new eCommerce website or update an existing one.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR86GsfPwjg9eJT8W8VVVhEmuQKg9uu29fdwt9C1h6TGhAYNZwy",
      title: "Custom WordPress Plugins",
      description:
        "We've compiled a team of seasoned developers that can build nearly everything you can imagine on the WordPress platform.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaDh_AissmeDG7-d8fQacpI_nXwj2p6rasD1QKSgYYAw7tyT-",
      title: "WooCommerce Speed Optimization",
      description:
        "Have a sluggish WooCommerce site? Let us have a look and we'll find the bottlenecks, and then propose a plan for the optimization.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtItEHTBjET1NfxbrxrowKw4qodFrJQIii3Oc7MOQ8VtHh7z-",
      title: "Security Hardening",
      description:
        "Due to the popularity of WordPress, sites built on it are often a target of hacker attacks. We'll make sure that the site follows the best security practices so it's safe.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzlYQeS1oXLl5KlKjeXUBDDUKyNMRabp1TXZpeSZi03s_0JpJX",
      title: "Migration to WooCommerce",
      description:
        "We take the existing site code and make it WordPress CMS driven. We will take care of the content migration and map old URLs to the new ones.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzlYQeS1oXLl5KlKjeXUBDDUKyNMRabp1TXZpeSZi03s_0JpJX",
      title: "Migration to WooCommerce",
      description:
        "We take the existing site code and make it WordPress CMS driven. We will take care of the content migration and map old URLs to the new ones.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRu6hGlT8I83gkJwRUmsOZDcn8M_fkszaAU8db8CdVAiD5O6C8D",
      title: "Content & Products Transfer",
      description:
        "Transferring content and products is tedious and error-prone work. We've developed tools for automating the process and checklists for verification of the results.",
    },
    {
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxJ_AfGwtGIfvwBVZG4lXMgxooXsFnIAZGtPAPBFFYiuvZlBzv",
      title: "Plugins Installation and Customization",
      description:
        "Do you need a feature added to a free or premium plugin (e.g. Gravity Forms)? Or possibly need a bug fixed? We can take care of that.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6KJVTRx2z3bZ1S2eNYy09U7zskavz3I2tMXYZCw7yzxiWqKq1",
      title: "WooCommerce Maintenance",
      description:
        "We are part of your team and we'll never leave you on your own. If you have issues or questions - just let us know. We'll be glad to help you ASAP.",
    },
  ];
  return (
    <div className="bg-[#f3f3f3] mt-6">
      <main
        id="intro"
        className="bg-[#f3f3f3] min-h-screen flex items-center justify-center px-6 py-12 font-['Inter'] "
      >
        <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <section className="flex-1 max-w-xl">
            <p className="text-base font-semibold mb-2 text-black">
              Bespoke eCommerce, Plugins, Custom Functionality
            </p>
            <h1 className="font-extrabold text-4xl sm:text-5xl leading-tight text-black max-w-[18ch] border-b-4 border-yellow-400 pb-1 mb-6">
              WooCommerce Development Services
            </h1>

            <ul className="flex flex-wrap gap-x-8 gap-y-3 mb-8 text-black font-semibold text-sm">
              {[
                "30+ In-House WordPress Experts",
                "200+ WooCommerce Projects Completed",
                "8+ Years Experience in WooCommerce",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  <FaCheckCircle className="text-black" /> {item}
                </li>
              ))}
            </ul>
            <button className="bg-yellow-300 hover:bg-yellow-400 transition-colors font-bold text-black rounded-md px-8 py-4 mb-4">
              GET A QUOTE
            </button>
            <ul className="text-xs text-black max-w-[180px] list-disc list-inside space-y-1">
              <li>No Payment Required</li>
              <li>No Strings Attached</li>
              <li>100% Risk-Free</li>
            </ul>
          </section>

          <section className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-[0_0_60px_0_rgba(0,0,0,0.1)] flex flex-col ml-16">
            <h2 className="font-extrabold text-lg mb-6 text-black">
              Your tech-savvy managers
            </h2>

            <div className="flex items-center gap-6 mb-6">
              <img
                src={currentMember.photo}
                alt={currentMember.name}
                className={`w-20 h-20 rounded-full object-cover transition-opacity duration-500 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`transition-opacity duration-500 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="text-sm font-semibold text-black mb-1">
                  {currentMember.name}
                </p>
                <p className="text-xs text-gray-700">
                  {currentMember.position}
                </p>
              </div>
            </div>

            <div
              className={`flex justify-between text-center mb-6 text-black transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              {currentMember.stats.map((item, i) => (
                <div key={i}>
                  <p className="font-bold text-xl">{item.value}</p>
                  <p className="text-xs">{item.label}</p>
                </div>
              ))}
            </div>

            <div
              className={`mb-6 text-black text-sm leading-relaxed transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="font-semibold mb-2">
                A few words about {currentMember.name.split(" ")[0]}
              </p>
              <p>{currentMember.bio}</p>
            </div>

            <div className="mb-6 text-black text-sm font-semibold">
              Already know htmlBurger?
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1 border border-gray-300 rounded px-3 py-1 text-sm text-black hover:border-green-600"
            >
              Review us on
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Trustpilot
            </a>

            <img
              src={html_cup}
              alt="HTML5 Cup"
              className="cups w-25 h-25 absolute left-[-4rem] top-[5rem] drop-shadow-lg"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/8574e892-f0e7-41b9-0397-aea44da6af6f.jpg"
              alt="HTML5 Logo"
              className="w-25 h-25 absolute right-[-4rem] top-1/4 -translate-y-1/2 drop-shadow-lg rounded-full"
            />
            <img
              src={css_cup}
              alt="CSS3 Cup"
              className="cups w-25 h-25 absolute right-[-4rem] bottom-[2rem] drop-shadow-lg"
            />

            {/* Bottom Avatars - Navigation */}
            <div className="absolute -bottom-8 left-1/3 -translate-x-1/2 flex gap-2">
              {teamMembers.map((member, i) => (
                <button
                  key={member.id}
                  onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                      setCurrentMemberIndex(i);
                      setFade(false);
                    }, 500);
                  }}
                  className="relative"
                >
                  <img
                    src={member.photo}
                    alt={`Avatar ${i + 1}`}
                    className={`w-12 h-12 rounded-full object-cover border transition-all duration-300 ${
                      currentMemberIndex === i
                        ? "scale-125 transform"
                        : "opacity-80 hover:opacity-100 scale-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
      <section
        id="services"
        className="relative bg-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              <span className="relative pb-2">
                Why WooCommerce Development by htmlBurger?
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-50 h-1 bg-yellow-400"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are just some of the reasons why choose us as your partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-start text-left px-4 gap-4"
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-12 h-12 flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div id="testimonials">
        <Testimonial />
      </div>

      <div id="features" className="bg-[#fddc5c]">
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
              We Keep The Bar High
            </h2>
            <p className="text-xs sm:text-sm mt-2">
              Let's bring some more value to the table. Here's what you can take
              for granted with us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-6xl mx-auto text-[10px] sm:text-[11px] md:text-[12px] leading-tight text-black">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="flex space-x-3">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-5 h-5 mt-1 object-contain"
                  onError={(e) => (e.target.style.display = "none")} // fallback if image fails
                />
                <div>
                  <h3 className="font-semibold text-[11px] sm:text-[12px] md:text-[13px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 max-w-[230px]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section
        id="why-htmlburger"
        className="py-16 px-4 md:px-20 text-center bg-white"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            <span className="relative pb-2">
              WordPress WooCommerce Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-50 h-1 bg-yellow-400"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here is a list of WooCommerce services we've designed for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-6xl mx-auto text-[10px] sm:text-[11px] md:text-[12px] leading-tight text-black px-4">
          {why.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
              <div>
                <h3 className="font-semibold text-[11px] sm:text-[12px] md:text-[13px]">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-[230px] mx-auto">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div id="how-it-works">
        <Process3 />
      </div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
          <span className="relative pb-2">
            Wondering What You Will Get?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-50 h-1 bg-yellow-400"></span>
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We have prepared a sample archive for you. Feel free to download it
          and have a sneak peek.
        </p>

        {/* Centered content row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://htmlburger.com/assets/images/temp/section-image9.svg"
              alt=""
              className="h-56 object-contain"
            />
          </div>

          {/* Paragraph on the right */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <p className="text-center md:text-left max-w-md">
              Need the new WooCommerce store installed on a server, so you can
              start using its full functionality right away? Sure! We'll gladly
              take care of this process and we'll do it for free. We'll also
              make sure everything works properly, so you can fully enjoy all
              the possibilities this user-friendly CMS provides you with. No
              additional cost. No worries. Be our guest.
            </p>
          </div>
        </div>
      </div>

      <section id="faq" className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 py-12 bg-white">
          <h2 className="text-center font-bold text-xl md:text-2xl mb-3">
            Have a Question? The Answer is Yes!
          </h2>
          <p className="text-center text-sm md:text-base mb-8 text-gray-700">
            These are the questions we get from you the most.
          </p>
          <div className="space-y-2 max-w-3xl mx-auto">
            {faqItems.map((question, index) => (
              <FAQItem key={index} question={question} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="get-a-quick-quote"
        className="bg-yellow-300 py-16 px-4 text-center"
      >
        <h1 className="font-extrabold text-3xl mb-4">
          Start Your Project. It's Risk-Free.
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-base leading-relaxed">
          Let's make it happen! With our risk-free approach, you can rest
          assured that your project is in good hands. Submit your inquiry today
          and receive a prompt response from our team.
        </p>

        <button type="button">
          <Link
            to="/quote"
            className="bg-black text-white font-bold py-3 px-8 rounded-md hover:bg-sky-700 transition-colors inline-block"
          >
            GET A QUOTE FOR YOUR PROJECT
          </Link>
        </button>

        <div className="mt-6">
          <Link to="/consultation" className="font-semibold underline">
            or start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Front_end;
