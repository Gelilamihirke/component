import React from 'react';
import './MasonryCarousel.css'; 

const testimonials = [
  {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. ",
    user: {
      type: "initials",
      value: "JO",
      name: "Josh",
      role: null,
      stars: 5
    }
  },
  {
    text: "Jirtu Software Labs has been very open to us and all of our crazy ideas. ",
    user: {
      type: "image",
      value: "https://storage.googleapis.com/a1aa/image/e8392ed1-0e37-4581-c6ed-b00bc2ab0298.jpg",
      name: "Jon Paul",
      role: "Executive Chef, apmealprep",
      stars: null
    }
  },
  {
    text: "Jirtu Software Labs offer such a great service for designers who don't like to code.",
    user: {
      type: "image",
      value: "https://storage.googleapis.com/a1aa/image/c408d6c7-6e0e-4356-85c7-56ebd291c548.jpg",
      name: "Roy Sasson",
      role: "Chief Executive Officer, eSasson Studios",
      stars: null
    },
  },
  {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. ",
    user: {
      type: "initials",
      value: "JO",
      name: "Josh",
      stars: 5
    }
  },
  {
    text: "Working with Jirtu Software Labs is like having a whole team of highly skilled colleagues. A winning team, definitely.",
    user: {
      type: "image",
      value: "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
      name: "Sam Maldonado",
      role: "Co-owner @ Wwwanted"
    },
  },
  {
    text: "Working with Jirtu Software Labs is like having a whole team of highly skilled colleagues. A winning team, definitely.",
    user: {
      type: "image",
      value: "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
      name: "Sam Maldonado",
      role: "Co-owner @ Wwwanted"
    },
  },
  {
    text: "Working with Jirtu Software Labs is like having a whole team of highly skilled colleagues. A winning team, definitely.",
    user: {
      type: "image",
      value: "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
      name: "Sam Maldonado",
      role: "Co-owner @ Wwwanted"
    },
  },
  {
    text: "Working with Jirtu Software Labs is like having a whole team of highly skilled colleagues. A winning team, definitely.",
    user: {
      type: "image",
      value: "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
      name: "Sam Maldonado",
      role: "Co-owner @ Wwwanted"
    },
  },
  {
    text: "Working with Jirtu Software Labs is like having a whole team of highly skilled colleagues. A winning team, definitely.",
    user: {
      type: "image",
      value: "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
      name: "Sam Maldonado",
      role: "Co-owner @ Wwwanted"
    },
  }
];

const Testimonial = ({ text, user, extra }) => {
  const renderUser = (u) => (
    <div className="flex items-center gap-2 mt-auto">
      {u.type === 'image' ? (
        <img src={u.value} alt={u.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover" />
      ) : (
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-gray-300 flex justify-center items-center font-bold text-sm sm:text-lg text-gray-700">
          {u.value}
        </div>
      )}
      <div>
        <p className="text-sm sm:text-base text-left">{u.name}</p>
        {u.role && <p className="text-xs sm:text-[13px] text-gray-600">{u.role}</p>}
        {u.stars && (
          <p className="text-xs text-yellow-500">
            {'★'.repeat(u.stars)}{'☆'.repeat(5 - u.stars)}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg w-full max-w-[280px] sm:w-[320px] flex flex-col transition-all duration-300 relative z-10">
      <p className="font-medium sm:font-semibold text-left leading-relaxed text-gray-800 mb-4 sm:mb-5 text-sm sm:text-lg">
        {text}
      </p>
      {renderUser(user)}
      {extra && (
        <div className="mt-4 sm:mt-6 border-t pt-3 sm:pt-4">
          <p className="text-xs sm:text-sm font-medium leading-relaxed text-gray-900 mb-3 sm:mb-4">
            {extra.text}
          </p>
          {renderUser(extra.user)}
        </div>
      )}
    </div>
  );
};

const SliderTrack = () => {

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials,...testimonials,...testimonials];
  
  return (
    <div className="slider-track grid grid-flow-col auto-cols-[min(280px,80vw)] sm:auto-cols-[285px] grid-rows-2 gap-x-1  sm:gap-x-2 gap-y-2 sm:gap-y-4 items-start animate-scrollLeft">
      {duplicatedTestimonials.map((t, i) => (
        <Testimonial key={i} {...t} />
      ))}
    </div>
  );
};

const MasonryCarousel = () => (
  <div className="masonry-container bg-gray-100 py-8 sm:py-10 px-4 sm:px-6 text-center mx-auto font-inter overflow-hidden">
     <h2 className="font-extrabold text-[40px] leading-[22px] text-black mb-2 inline-block">
  <span className="relative inline-block">
    <span className="relative z-10">People</span>
    <span
      className="absolute left-0 -bottom-1.5 w-full h-2 bg-primary rounded z-0"
      aria-hidden="true"
    ></span>
  </span>
  <span className="font-extrabold  text-[32px] lg:text-[40px] leading-[22px]"> are talking</span>
</h2>
    <p className="text-base sm:text-xl leading-relaxed text-gray-800 max-w-[90%] sm:max-w-[900px] mt-6 sm:mt-8 mx-auto">
      Making our clients happy isn't just about building beautiful websites. It's about building a relationship, earning trust, and growing together.
    </p>
    <div className="slider-container overflow-hidden relative w-full mt-6 sm:mt-8">
      <SliderTrack />
    </div>
  </div>
);

export default MasonryCarousel;