import React, { useState } from "react";
import blog from "../../assets/images/blog.png";
import logo from "../../assets/images/mainlogo.png";
import { FaCheckCircle, FaSearch, FaTimes } from "react-icons/fa";
import ArticleGrid from "../../components/Card/blog/ArticleGrid";

const Blog = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const categories = [
    "Insights",
    "Website Examples",
    "Inside Jirtu Software Labs",
    "Design, UI, UX",
    "Web Development",
    "Inspiration",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchError("");

    if (!searchQuery.trim()) {
      setSearchError("Please enter a search term");
      return;
    }

    setSubmittedQuery(searchQuery);

    const matchedCategory = categories.find((cat) =>
      cat.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedCategory) {
      setSelectedCategory(matchedCategory);
      setSearchQuery("");
    } else {
      setSearchError("No matching category found");
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchError("");
    setSubmittedQuery("");
  };

  return (
    <div className="bg-white text-gray-600 font-inter mt-35 mx-auto">
      <nav className="bg-gray-100 rounded-lg py-2 xl:py-5 mx-4 md:mx-6 xl:mx-14 pr-5 lg:h[4px] flex flex-col md:flex-row items-center md:justify-between gap-4 overflow-x-visible mt-2">
        <div className="w-full md:overflow-visible mt-2 md:mt-0">
          <ul className="flex flex-row flex-nowrap gap-x-4 pl-1 md:pl-7 items-center whitespace-nowrap overflow-x-auto scrollbar-hide">
            {categories.map((cat, idx) => (
              <li key={idx}>
                <button
                  className={`transition px-4 py-1 rounded-md focus:outline-none gap-1 text-[18px] font-inter ${
                    selectedCategory === cat
                      ? "bg-white "
                      : "bg-transparent hover:bg-white text-gray-700"
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSearchQuery("");
                    setSearchError("");
                    setSubmittedQuery("");
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden xl:block w-auto order-1 lg:order-2">
          <form
            onSubmit={handleSearch}
            role="search"
            aria-label="Search Blog"
            className="flex items-center bg-white rounded-md px-4 py-2 relative flex-grow md:flex-grow-0"
          >
            <input
              type="search"
              placeholder="Search Blog"
              aria-label="Search Blog"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`outline-none text-[16px]  placeholder-black transition-all duration-300 w-full sm:w-36 ${
                isFocused ? "sm:w-56" : ""
              } pr-10`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="text-gray-400 hover:text-gray-600 transition-colors absolute right-8"
                aria-label="Clear search"
              >
                <FaTimes className="w-3 h-3" />
              </button>
            )}
            <button
              type="submit"
              className="text-gray-400 hover:text-gray-600 transition-colors absolute right-2"
              aria-label="Search"
            >
              <FaSearch className="w-5 h-5" />
            </button>
            {searchError && (
              <div className="absolute top-full left-0 mt-1 w-full bg-red-100 text-red-700 text-xs p-2 rounded-md shadow-md z-10">
                {searchError}
              </div>
            )}
          </form>
        </div>
      </nav>

      <header className="text-center max-w-3xl mx-auto px-4 my-12">
        <h1 className="font-semibold text-black md:text-3xl mb-1">
          {selectedCategory === "All"
            ? "Jirtu Software Labs Blog"
            : `Jirtu Software Labs Blog: ${selectedCategory}`}
        </h1>
        {searchError && selectedCategory === "All" ? (
          <p className="text-xs md:text-sm text-red-600">{searchError}</p>
        ) : (
          <p className="text-xs md:text-sm text-gray-700">
            {selectedCategory === "All" && !submittedQuery
              ? "Mix of website design inspiration and updates, business tips and WordPress news. Served hot."
              : ""}
          </p>
        )}
      </header>
      <section className="max-w-6xl mx-auto mt-10 px-4 ">
        <div className="bg-primary-60 group lg:w-[1170px] lg:-ml-6 flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg md:h-[260px] ">
          <div className="flex flex-col justify-between px-6 py-5 md:w-full md:h-[240px] relative">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:mt-6 sm:ml-0 lg:ml-0 xl:ml-6">
              <div className="w-32 mb-1">
                <img
                  src={logo}
                  alt="Jirtu Software Labs"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex space-x-3 mb-2">
                {[
                  "6e0dc3d8-e322-43b5-e3af-b7ef4ba2e9f1",
                  "380e8fc0-0af7-42f5-fac5-70753bc29cde",
                  "62fbd426-91e6-4454-322d-f80efe84d907",
                  "f9f4647c-7adf-43e0-5b29-d70e762579a7",
                  "4725fd6e-5491-4b22-7942-19f0f0cddb5d",
                ].map((id, index) => (
                  <img
                    key={index}
                    src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
                    alt={`Tech logo ${index + 1}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row justify-between items-start md:items-start lg:items-start xl:items-center mb-5 md:ml-0 lg:ml-0 xl:ml-6 xl:mt-10 sm:mt-4">
              <div className="mb-4 md:mb-2">
                <h1 className="font-sans font-semibold text-3xl text-black mb-2">
                  White-Label Web Development Services
                </h1>
                <ul className="flex flex-wrap gap-3 text-base font-semibold">
                  {[
                    "Fast Turnarounds",
                    "Reasonable Pricing",
                    "NDA Protected Work",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-black gap-3"
                    >
                      <FaCheckCircle className="text-black text-xl" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-black text-white font-semibold text-sm uppercase px-4 py-2 rounded-md group-hover:bg-transparent group-hover:text-black border border-transparent group-hover:border-black transition-colors duration-200 mt-4 xl:mt-0 xl:ml-6">
                Get Started
              </button>
            </div>
          </div>

          <div className="hidden lg:block w-1/3 max-h-[260px] overflow-hidden">
            <img
              src={blog}
              alt="Man working on laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <ArticleGrid
          selectedCategory={selectedCategory}
          searchQuery={submittedQuery}
        />
      </section>
<section className="bg-[#525252] w-full py-6 md:py-4 lg:h-[118px] mt-5 mb-8">
  <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
    
    <div className="text-white w-full lg:w-[553px] text-center lg:text-left">
      <p className="font-semibold text-lg sm:text-[20px] leading-tight">
        Subscribe for our newsletter
      </p>
      <p className="text-xs sm:text-[14px] italic mt-1 leading-tight">
        We hate boring. Our newsletters are relevant and on point. Excited? Let's do this!
      </p>
    </div>

   
    <form className="w-full lg:w-auto mt-3 lg:mt-0 flex max-w-full lg:max-w-md">
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-grow px-4 py-2 text-sm leading-tight rounded-l bg-white text-gray-900 placeholder-gray-400 focus:outline-none min-w-0"
      />
      <button
        type="submit"
        className="bg-[#353535] text-white text-xs sm:text-sm font-semibold px-4 py-2 h-[42px] lg:h-[45px] rounded-r hover:bg-primary whitespace-nowrap"
      >
        SUBSCRIBE
      </button>
    </form>
  </div>
</section>
    </div>
  );
};

export default Blog;