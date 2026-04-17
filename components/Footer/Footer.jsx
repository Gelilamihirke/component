import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo 1.png";

const Footer = () => {
  return (
    <>
      <footer className="max-w-7xl mx-auto lg:h-[560px] mt-3 px-6 py-16 flex flex-wrap justify-between gap-y-10">
        <div className="w-1/2 sm:w-auto">
          <h3 className="font-poppins font-bold text-[16px] leading-[16px] tracking-normal align-middle text-gray-900 mb-6">
            Quick Links
          </h3>

          <div className="flex flex-wrap gap-x-20 gap-y-2 text-sm max-w-xs">
            <div className="flex flex-col space-y-3">
              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="#"
              >
                Home
              </a>

              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="/services"
              >
                Services
              </a>
              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="/about"
              >
                About
              </a>
              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="/work"
              >
                Our Work
              </a>
              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="#"
              >
                Reviews
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h3 className="font-poppins font-bold text-[16px] leading-[16px] tracking-normal align-middle text-gray-900 mb-6">
            Services
          </h3>
          <ul className="space-y-3 max-w-xs font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle">
            <li>Front-End Development</li>
            <li>Backend Development</li>
            <li>Full-fledged Systems</li>
            <li>Mobile Application Development</li>
            <li>React Development</li>
            <li>Product Design</li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-auto">
          <h3 className="font-poppins font-bold text-[16px] leading-[16px] tracking-normal align-middle text-gray-900 mb-6">
            Get in Touch
          </h3>
          <ul className="text-sm space-y-4 max-w-xs">
            <li>
              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="#"
              >
                Get a Quote
              </a>
            </li>
            <li>
              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="#"
              >
                Start a Conversation
              </a>
            </li>
            <li>
              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="#"
              >
                Submit an Inquiry
              </a>
            </li>
            <li>
              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="#"
              >
                Book a Call
              </a>
            </li>
            <li>
              <a
                className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle hover:underline"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <br />
          <ul className="font-inter font-normal text-[14px] leading-[25.06px] tracking-normal align-middle">
            <li className="flex items-center gap-3 py-2 hover:underline cursor-pointer">
              <FontAwesomeIcon icon={faMobileAlt} />
              <span>ET: +44 203 637 5848</span>
            </li>
            <li className="flex items-center gap-3 py-2 hover:underline cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>admin@jirtuu.com</span>
            </li>
          </ul>

          <ul className="mt-6 flex gap-4 text-base max-w-xs">
            <li className="py-2">
              <a aria-label="GitHub" href="#" className="hover:underline">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="py-2">
              <a aria-label="Instagram" href="#" className="hover:underline">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="py-2">
              <a aria-label="Twitter" href="#" className="hover:underline">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 sm:w-auto max-w-xs">
          <div className="flex items-center gap-2 mb-6">
            <div>
              <img
                alt="htmlBurger logo"
                className="inline-block mr-2"
                height="190"
                src={logo}
                width="190"
              />
            </div>
          </div>
          <p className="font-poppins font-normal text-[13px] leading-[20px] align-middle">
            Jirtuu Software Labs specializes in building modern digital products
            and providing tailors tech services that solve real-world problems.
          </p>
        </div>
      </footer>
      
    </>
  );
};

export default Footer;
