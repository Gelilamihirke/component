import React from 'react';



const Testimonials = () => {
  const testimonialls = [
    {
      quote:
        "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites.",
      name: "Josh",
      title: "",
      rating: "★★★★★",
      avatar: "", 
    },
    {
      quote:
        "Jirtuu software lab has been very open to us and all of our crazy ideas. They made it very easy for someone that has no idea how to code, develop a functional & welcoming E-commerce site.",
      name: "Jon Paul",
      title: "Executive Chef, apmealprep",
      rating: "",
      avatar:
        "https://storage.googleapis.com/a1aa/image/e8392ed1-0e37-4581-c6ed-b00bc2ab0298.jpg",
    },
    {
      quote:
        "Jirtuu software labs is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
      name: "Roy Sasson",
      title: "Chief Executive Officer, eSasson Studios",
      rating: "",
      avatar:
        "https://storage.googleapis.com/a1aa/image/c408d6c7-6e0e-4356-85c7-56ebd291c548.jpg",
    },
    {
      quote:
        "Jirtuu software lab has been very open to us and all of our crazy ideas. They made it very easy for someone that has no idea how to code, develop a functional & welcoming E-commerce site.",
      name: "Josh",
      title: "",
      rating: "★★★★★",
      avatar: "", 
    },
    {
      quote:
        "Jirtuu software labs is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
      name: "Sam Maldonado",
      title: "Co-owner @ Wwwanted",
      rating: "",
      avatar:
        "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
    },
    {
      quote:
        "Jirtuu software lab has been very open to us and all of our crazy ideas. They made it very easy for someone that has no idea how to code, develop a functional & welcoming E-commerce site.",
      name: "Sam Maldonado",
      title: "Co-owner @ Wwwanted",
      rating: "",
      avatar:
        "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
    },
    {
      quote:
        "My company engaged with Jirtuu software lab on a critical web development project that involved custom Wordpress theming and customized interactive features. We've been very impressed with the quality of work, thorough communications throughout, and support process after we launched the site. The team is knowledgeable and highly responsive.",
      name: "Sam Maldonado",
      title: "Co-owner @ Wwwanted",
      rating: "",
      avatar:
        "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
    },
    {
      quote:
        "Jirtuu software labs is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
      name: "Sam Maldonado",
      title: "Co-owner @ Wwwanted",
      rating: "",
      avatar:
        "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
    },
    {
      quote:
        "jirtuu software lab is reasonably priced, quick to respond, and attentive to details. Working with them was easy and stress-free. I highly recommend them to anyone who needs a web developer.",
      name: "Sam Maldonado",
      title: "Co-owner @ Wwwanted",
      rating: "",
      avatar:
        "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
    },
    
    {
      quote:
        "jirtuu software lab is reasonably priced, quick to respond, and attentive to details. Working with them was easy and stress-free. I highly recommend them to anyone who needs a web developer.",
      name: "Sam Maldonado",
      title: "Co-owner @ Wwwanted",
      rating: "",
      avatar:
        "https://storage.googleapis.com/a1aa/image/226e97fa-488f-4094-414a-0caaa66055fc.jpg",
    },
  ];




   const TestimonialCard = ({ quote, name, title, rating, avatar }) => (
   <div className="bg-[#FFFFFF]  sm:p-6 rounded-lg shadow-lg flex flex-col  transition-all duration-300 w-full max-w-[400px] sm:max-w-[440px]">
      <p className="mb-4 font-semibold sm:font-semibold text-[18px] sm:text-lg  px-4 py-6 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3 mt-auto">
        {avatar ? (
          <img src={avatar} alt={name} className="w-10 h-10 rounded-md object-cover" />
        ) : (
          <div className="bg-[#E1F0EE] w-10 h-10 rounded-md flex items-center justify-center font-bold text-sm text-gray-600">
            {name?.substring(0, 2).toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-[16px] sm:text-base font-medium text-black">{name}</p>
          {title && <p className="text-[13px] sm:text-sm text-gray-600">{title}</p>}
          {rating && <p className="text-green-500 text-xs">{rating}</p>}
        </div>
      </div>
    </div>
  );

  const testimonialColumns = [];
  for (let i = 0; i < testimonialls.length; i += 2) {
    testimonialColumns.push(testimonialls.slice(i, i + 2));
  }

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <style>
        {`
          @keyframes slide-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .slider-container {
            display: flex;
            animation: slide-left 250s linear infinite;
            width: max-content;
          }
          .slider-column {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            flex-shrink: 0;
            padding: 0 0.75rem;
          }
         .slider-column-responsive {
  width: min(440px, 80vw);
          }
       @media (min-width: 640px) {
  .slider-column-responsive {
    width: 440px;
  }
}
        `}
      </style>

      <section className="w-full px-0 py-16 overflow-hidden bg-[#F4F4F4]">
        <div className="text-center mt-16 font-inter">
      <h2 className="font-bold text-[40px] leading-[48px] tracking-[-0.12px] text-center align-middle inline-block mb-2" style={{ fontFamily: 'Inter' }}>
  <span className="relative inline-block">
    <span className="relative z-10">People</span>
    <span className="absolute left-0 -bottom-0.5 w-full h-2 bg-primary z-0"></span>
  </span>
  <span className="font-bold text-[32px] lg:text-[40px] leading-[48px] tracking-[-0.12px]"> are talking</span>
</h2>
          <p className="text-base md:text-[18px] sm:text-xl leading-relaxed text-gray-800 max-w-[90%] sm:max-w-[800px] mt-6 sm:mt-8 mx-auto">
            Making our clients happy isn't just about building beautiful websites. It's about building a relationship, earning trust, and growing together.
          </p>
        </div>

        <div className="mt-18">
          <div className="slider-container">
            {[...Array(12)].map((_, index) =>
              testimonialColumns.map((column, colIndex) => (
                <div key={`${index}-${colIndex}`} className="slider-column slider-column-responsive">
                  {column.map((testimonial, i) => (
                    <TestimonialCard key={`${index}-${colIndex}-${i}`} {...testimonial} />
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;