import React, { useState, useEffect } from "react";
import css_cup from "../../assets/images/css-cup.png";
import { FaCheckCircle } from "react-icons/fa";
import html_cup from "../../assets/images/html-cup.png";
import { FaCogs, FaCode, FaThLarge } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Testimonial from "../../components/Testimonial/Testimonial";

import Sample2 from "../../components/Sample/Sample2";
import Process2 from "../../components/ProcessSteps/Process2";
import SideNavbar2 from "../../components/SideNavbar/SideNavbar2";

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
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSePLzZPpJ9k-QKPdQeqTR8dMjqQHcbAoB61mVwnqij06YUt8Va",
      title: "Custom WordPress Website Development",
      description:
        "We can build almost everything on the top of WordPress towards the highest standards. Send your design mock-ups and we will convert them to a fully functional and responsive website, with custom WordPress CMS capabilities, so you have full control over the content of your site.",
    },
    {
      id: 2,
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSx2-6JT-k1e-oG3ysmE0Sk8DC_l1H26PQlZ0caEyIYfHWdP8EP",
      title: "WordPress Plugin Development",
      description:
        "We've compiled a team of professional WordPress Plugin development experts that can build nearly everything you can imagine on the WordPress platform. We can extend your website functionality beyond what's available in the WordPress ecosystem. We will help you build a custom WordPress plugin that matches your needs.",
    },
    {
      id: 3,
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxr1LWAu8CcspqTYouVDhOcLWWyGeSJH4m77McLOTGmH0xkDnj",
      title: "WordPress Website Maintenance",
      description:
        "WordPress requires consistent maintenance to remain up to date, stable, and secure. We are part of your team so we'll never leave you on your own. Let us handle WordPress maintenance and monitoring for you by taking care of updates, customizations, and stability of your WordPress-driven websites.",
    },
    {
      id: 4,
      icon: "https://thumbs.dreamstime.com/b/three-connected-boxes-one-icon-element-simple-icon-websites-web-design-mobile-app-info-graphics-thin-line-icon-fo-114179549.jpg?w=768",
      title: "Custom WordPress Multisite",
      description:
        "With WordPress Multisite we can help you create and manage a network of multiple websites from a single WordPress dashboard. An especially great option for businesses, schools, corporations, and Saas-based projects. Our custom WordPress development approach will guarantee the architecture is built precisely according to your needs.",
    },
    {
      id: 5,
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNT7DT5qd05mf-xs3poOGGAqPBtB-Z-Ci6lfnEETJp3V0rAnVs",
      title: "WordPress Security Services",
      description:
        "Due to the popularity of WordPress, sites built on it are often a target of hacker attacks. We will go through your server and network infrastructure and your existing setup, to ensure that its intact. During the diagnostic process, we will let you know if your WordPress needs to be updated or if you are using an insecure host, as well as give a secure and reliable alternative.",
    },
    {
      id: 6,
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRS9MLRr-85GwTCqXPvkeyRT0vGRwGHukoc2kY_HAap7QBRs4Qz",
      title: "Custom WooCommerce Development",
      description:
        "WooCommerce is a preferred choice for websites that have nontrivial eCommerce functionalities, powering 28% of all eCommerce websites on the web. Let's help you build a new professional and fully functioning eCommerce store on WordPress or update an existing one. Our experienced WooCommerce development team is here to assist.",
    },
    {
      id: 7,
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHi0f4qSJjlszMaoUeK8W8zBdcg3JEolCdZ0OcFIXh85z45Epz",
      title: "Performance and Speed Optimization",
      description:
        "Do you have a sluggish WordPress site? Let's have look. We'll do a detailed performance audit of your website to establish performance and optimization issues that may affect your digital presence, and propose a plan for the optimization. We have the know-how to build lightning-fast WordPress websites.",
    },
    {
      id: 8,
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNIvzjMaDIR13f838mJexfOqKCY2fHZTh1qwGq1h2P_c3UVpqf",
      title: "WordPress Migration",
      description:
        "Perfect custom WordPress development solution, for websites driven on another platform or when you're switching your WordPress website to a different hosting provider. We will make sure with your new CMS you don't lose any capabilities and the migration process to be very smooth, without website visitors even noticing the difference.",
    },
    {
      id: 9,
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRM9HoUk4errU1v9X4CrtiIViDgj4mSCnki0bWRTTe-_8MU5u6Z",
      title: "WordPress Development Retainers",
      description:
        "You can hire our WordPress retainer experts for your long-term custom WordPress development needs. The team will handle any consultancy, optimizations, scalability, custom plugins development, performance improvements, and security checks to ensure your platform is always up to the standards.",
    },
    {
      id: 10,
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPZO_g1ncqFRJi6aLAyZerbt6nhVa07LEJv7VcCB23176raCHu",
      title: "Custom WordPress CMS on a Static Site",
      description:
        "If you have a static website, but you need capabilities to control the content, our custom WordPress development service is the right solution. We will build a tailored CMS on WordPress with a user-friendly admin panel that makes the content editing experience look easy.",
    },
    {
      id: 11,
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSW72HdPZsbEKJq9Mui0b1GbOFExY1EPgxDUvUIu_nl7c7mVMBm",
      title: "WordPress Headless CMS",
      description:
        "Thanks to our experience in custom WordPress development and through the use of the WordPress REST API, we can help you build complex web apps and lighting-fast websites, with APIs that count on the WordPress core and use WordPress as a headless CMS.",
    },
    {
      id: 12,
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyPEM5ZhL-B-Wc0C1olCoQfc3qZz2E_Bc_WD6NUhwaBDkUx3vS",
      title: "WordPress Content Transfer",
      description:
        "Transferring content is tedious and error-prone work. We've developed tools for automating the process and checklists for verification of the results. We will make sure everything's intact.",
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
      title: "Tech Savvy Project Managers",
      description:
        "Your own dedicated manager that also has experience in WordPress and perfectly understands the specifications of any WordPress conversion.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSL4LU2Q-g3q34Bn527EhEGsgv42vmssH5tGRV7oBDsiehrLOVg",
      title: "5-Star WordPress Developers",
      description:
        "With 100+ highly experienced developers in different fields, we always have the right person/team to handle your WordPress project, no matter its size or complexity.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR86GsfPwjg9eJT8W8VVVhEmuQKg9uu29fdwt9C1h6TGhAYNZwy",
      title: "Pilot Project Test",
      description:
        "Evaluate our work via a pilot run and see if we are a match. Get an idea of the code quality, communication, and everything that is essential to you.",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaDh_AissmeDG7-d8fQacpI_nXwj2p6rasD1QKSgYYAw7tyT-",
      title: "WordPress Support & Maintenance",
      description:
        "If anything stops working properly on your WordPress website, contact us. We'll be happy to fix it for you, even if it’s years after the project completion.",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuW7c-TyOHR5ZqHUlLV_05-zVhWiSyCjdEGG3fMXXoHNZBXovD",
      title: "We Respect Confidentiality (NDA)",
      description:
        "We'd never claim any rights on your designs, or share it with 3rd parties. We will willingly sign an NDA prior to the start of the project.",
    },
    {
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzlYQeS1oXLl5KlKjeXUBDDUKyNMRabp1TXZpeSZi03s_0JpJX",
      title: "20,000+ Completed Projects",
      description:
        "We are proud to be behind more than 20,000 websites since 2007. We are now successfully releasing almost 3 websites each day of the year.",
    },
  ];
  return (
    <div className="bg-[#f3f3f3] mt-6">
      <SideNavbar2 />
      <main
        id="intro"
        className="bg-[#f3f3f3] min-h-screen flex items-center justify-center px-6 py-12 font-['Inter'] "
      >
        <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <section className="flex-1 max-w-xl">
            <p className="text-base font-semibold mb-2 text-black">
              Websites, Stores, Blogs, Portals, Plugins
            </p>
            <h1 className="font-extrabold text-4xl sm:text-5xl leading-tight text-black max-w-[18ch] border-b-4 border-yellow-400 pb-1 mb-6">
              Custom WordPress Development Services
            </h1>

            <ul className="flex flex-wrap gap-x-8 gap-y-3 mb-8 text-black font-semibold text-sm">
              {[
                "60+ In-House WordPress Experts",
                "6000+ WordPress Projects Completed",
                "10+ Years Experience in WordPress",
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
                WordPress Development Services
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-50 h-1 bg-yellow-400"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here is a list of WordPress development services we've designed
              for you.
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

      <div id="samples">
        <Sample2 />
      </div>

      <section
        id="why-htmlburger"
        className="py-16 px-4 md:px-20 text-center bg-white"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why{" "}
          <span className="relative inline-block">
            htmlBurger?
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-300 z-[-1]" />
          </span>{" "}
          Because we care.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Here are just some of the reasons why to choose us as your partner.
        </p>

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
        <Process2 />
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
