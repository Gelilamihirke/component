import "@radix-ui/themes/styles.css";
import "./Navbar.css";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  CaretDownIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import logo from "../../assets/images/mainlogo.png";

const navLabels = {
  "/work": "OUR WORK",
  "/about": "ABOUT",
  "/blog": "BLOG",
};

const services = [
  { to: "/front_end", title: "Front-End Development" },
  { to: "/backend", title: "Back-End Development" },
  { to: "/fledged", title: "Full-Fledged Systems" },
  { to: "/mobile", title: "Mobile App Development" },
  { to: "/design", title: "Design Services" },
  { to: "/consultations", title: "Consultations" },
];

const Navbar = ({ bgColor = "bg-white" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavLinkClick = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`w-full ${bgColor} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 shadow-sm pt-0"
          : "pt-2 sm:pt-3 md:pt-4 lg:pt-5 border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4 lg:px-8 lg:py-4 xl:px-10 xl:py-4">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setSelectedNavItem("")}
        >
          <img
            src={logo}
            alt="Jirtuu Software Labs logo"
            className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation - Aligned to right */}
        <div className="hidden md:flex items-center flex-1 justify-end">
          <NavigationMenu.Root className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8 list-none font-inter font-medium text-sm sm:text-[13px] md:text-[14px] leading-[18px] tracking-[0%] align-middle">
            <NavigationMenu.Item className="relative group cursor-pointer">
              <NavigationMenu.Trigger className="flex items-center space-x-1 hover:text-primary transition">
                <Link
                  to="/services"
                  className={`transition px-0 py-2 rounded-md ${
                    selectedNavItem === "/services"
                      ? "text-primary bg-white"
                      : "text-gray-700 hover:text-primary"
                  }`}
                  onClick={() => setSelectedNavItem("/services")}
                >
                  ALL SERVICES
                </Link>
                <CaretDownIcon className="text-xs sm:text-sm" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                className="absolute right-0 mt-2 bg-white shadow-xl p-4 sm:p-5 md:p-6 z-10 rounded-md"
                style={{ width: "300px" }}
              >
                <ul>
                  {services.map((service) => (
                    <ListItem
                      key={service.to}
                      to={service.to}
                      title={service.title}
                    />
                  ))}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {["/work", "/about", "/blog"].map((route) => (
              <NavigationMenu.Item key={route}>
                <NavigationMenu.Link asChild>
                  <Link
                    to={route}
                    className={`transition px-0 py-2 rounded-md ${
                      selectedNavItem === route
                        ? "text-primary bg-white"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => setSelectedNavItem(route)}
                  >
                    {navLabels[route]}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.Root>

          {/* Desktop CTA - Now part of the right-aligned group */}
          <div className="ml-1  lg:ml-6 xl:ml-20">
            <Link to="/consultation">
              <button className="font-bold border border-black rounded-md py-1 px-3 sm:py-2 sm:px-4 hover:bg-black hover:text-white transition text-xs sm:text-sm md:text-[15px] lg:text-[16px]">
                START A CONVERSATION
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Cross1Icon width={20} height={20} />
            ) : (
              <HamburgerMenuIcon width={20} height={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start text-left bg-white px-5 py-4 space-y-3 sm:space-y-4">
          <div className="w-full">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left font-medium hover:text-primary flex items-center justify-between space-x-2 py-2 text-sm sm:text-[16px]"
            >
              <span>ALL SERVICES</span>
              <CaretDownIcon
                className={`transform transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <ul className="mt-2 space-y-2 ml-4 text-sm sm:text-[16px]">
                {services.map((service) => (
                  <li key={service.to}>
                    <Link
                      to={service.to}
                      onClick={handleMobileNavLinkClick}
                      className="block py-2 hover:text-primary"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Other Mobile Nav Links */}
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-[16px] w-full">
            {["/work", "/about", "/blog"].map((route) => (
              <li key={route}>
                <Link
                  to={route}
                  onClick={handleMobileNavLinkClick}
                  className="block py-2 hover:text-primary"
                >
                  {navLabels[route]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-full  pt-3 sm:pt-4">
            <Link to="/consultation" onClick={handleMobileNavLinkClick}>
              <button className="w-full font-bold border border-black rounded-md py-2 px-4 sm:py-3 sm:px-4 hover:bg-gray-100 transition text-sm sm:text-[16px]">
                START A CONVERSATION
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const ListItem = ({ title, to }) => (
  <li className="mb-2 last:mb-0 list-none">
    <NavigationMenu.Link asChild>
      <Link
        to={to}
        className="block px-3 py-2 sm:px-4 sm:py-2 rounded-md text-gray-700 hover:bg-primary hover:text-white transition text-sm sm:text-[16px]"
      >
        {title}
      </Link>
    </NavigationMenu.Link>
  </li>
);

export default Navbar;
