import React from "react";
import './Testimony.css'

// Data array for testimonials
const testimonials = [
  {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
    user: {
      type: "initials",
      value: "JO",
      name: "Josh",
      role: null,
      stars: 5
    }
  },
  {
    text: "Jirtu Software Labs has been very open to us and all of our crazy ideas. They made it very easy for someone that has no idea how to code, develop a functional & welcoming E-commerce site.",
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
    extra: {
      text: "Jirtu Software Labs is reasonably priced, quick to respond, and attentive to details. Working with them was easy and stress-free. I highly recommend them to anyone who needs a web developer.",
      user: {
        type: "initials",
        value: "AE",
        name: "Alex Exum",
        stars: 5
      }
    }
  },
  {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
    extra: {
      text: "Working with the Jirtu Software Labs team has been a huge success! They're good people who care deeply about our business!",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/6bf1af82-24a2-4410-682f-b6f968677fb1.jpg",
        name: "Evan Shoemaker",
        role: "Founder + CEO @ WeBuild"
      }
    },
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
    extra: {
      text: "My company engaged with Jirtu Software Labs on a critical web development project that involved custom Wordpress theming and customized interactive features. We've been very impressed with the quality of work, thorough communications throughout, and support process after we launched the site. The team is knowledgeable and highly responsive.",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/bd1707bd-02f7-4502-49fe-eba3a511c0c0.jpg",
        name: "Dave Onkels",
        stars: 5
      }
    }
  },
    {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
    user: {
      type: "initials",
      value: "JO",
      name: "Josh",
      role: null,
      stars: 5
    }
  },
  {
    text: "Jirtu Software Labs has been very open to us and all of our crazy ideas. They made it very easy for someone that has no idea how to code, develop a functional & welcoming E-commerce site.",
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
    extra: {
      text: "Jirtu Software Labs is reasonably priced, quick to respond, and attentive to details. Working with them was easy and stress-free. I highly recommend them to anyone who needs a web developer.",
      user: {
        type: "initials",
        value: "AE",
        name: "Alex Exum",
        stars: 5
      }
    }
  },
  {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
    extra: {
      text: "Working with the Jirtu Software Labs team has been a huge success! They're good people who care deeply about our business!",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/6bf1af82-24a2-4410-682f-b6f968677fb1.jpg",
        name: "Evan Shoemaker",
        role: "Founder + CEO @ WeBuild"
      }
    },
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
    extra: {
      text: "My company engaged with Jirtu Software Labs on a critical web development project that involved custom Wordpress theming and customized interactive features. We've been very impressed with the quality of work, thorough communications throughout, and support process after we launched the site. The team is knowledgeable and highly responsive.",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/bd1707bd-02f7-4502-49fe-eba3a511c0c0.jpg",
        name: "Dave Onkels",
        stars: 5
      }
    }
  },  {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
    user: {
      type: "initials",
      value: "JO",
      name: "Josh",
      role: null,
      stars: 5
    }
  },
  {
    text: "Jirtu Software Labs has been very open to us and all of our crazy ideas. They made it very easy for someone that has no idea how to code, develop a functional & welcoming E-commerce site.",
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
    extra: {
      text: "Jirtu Software Labs is reasonably priced, quick to respond, and attentive to details. Working with them was easy and stress-free. I highly recommend them to anyone who needs a web developer.",
      user: {
        type: "initials",
        value: "AE",
        name: "Alex Exum",
        stars: 5
      }
    }
  },
  {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
    extra: {
      text: "Working with the Jirtu Software Labs team has been a huge success! They're good people who care deeply about our business!",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/6bf1af82-24a2-4410-682f-b6f968677fb1.jpg",
        name: "Evan Shoemaker",
        role: "Founder + CEO @ WeBuild"
      }
    },
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
    extra: {
      text: "My company engaged with Jirtu Software Labs on a critical web development project that involved custom Wordpress theming and customized interactive features. We've been very impressed with the quality of work, thorough communications throughout, and support process after we launched the site. The team is knowledgeable and highly responsive.",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/bd1707bd-02f7-4502-49fe-eba3a511c0c0.jpg",
        name: "Dave Onkels",
        stars: 5
      }
    }
  },
  {
    text: "Jirtu Software Labs has been very open to us and all of our crazy ideas. They made it very easy for someone that has no idea how to code, develop a functional & welcoming E-commerce site.",
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
    extra: {
      text: "Jirtu Software Labs is reasonably priced, quick to respond, and attentive to details. Working with them was easy and stress-free. I highly recommend them to anyone who needs a web developer.",
      user: {
        type: "initials",
        value: "AE",
        name: "Alex Exum",
        stars: 5
      }
    }
  },
  {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
    extra: {
      text: "Working with the Jirtu Software Labs team has been a huge success! They're good people who care deeply about our business!",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/6bf1af82-24a2-4410-682f-b6f968677fb1.jpg",
        name: "Evan Shoemaker",
        role: "Founder + CEO @ WeBuild"
      }
    },
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
    extra: {
      text: "My company engaged with Jirtu Software Labs on a critical web development project that involved custom Wordpress theming and customized interactive features. We've been very impressed with the quality of work, thorough communications throughout, and support process after we launched the site. The team is knowledgeable and highly responsive.",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/bd1707bd-02f7-4502-49fe-eba3a511c0c0.jpg",
        name: "Dave Onkels",
        stars: 5
      }
    }
  },
  {
    text: "Jirtu Software Labs has been very open to us and all of our crazy ideas. They made it very easy for someone that has no idea how to code, develop a functional & welcoming E-commerce site.",
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
    extra: {
      text: "Jirtu Software Labs is reasonably priced, quick to respond, and attentive to details. Working with them was easy and stress-free. I highly recommend them to anyone who needs a web developer.",
      user: {
        type: "initials",
        value: "AE",
        name: "Alex Exum",
        stars: 5
      }
    }
  },
  {
    text: "JirtuSoftwareLabs.com is a trusted and valuable partner that I have worked with on several websites. My specific projects spanned WordPress & WooCommerce and I was extremely happy with the finished product. Their communication is great, pricing fair, and overall quality fantastic. I highly recommend this team.",
    extra: {
      text: "Working with the Jirtu Software Labs team has been a huge success! They're good people who care deeply about our business!",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/6bf1af82-24a2-4410-682f-b6f968677fb1.jpg",
        name: "Evan Shoemaker",
        role: "Founder + CEO @ WeBuild"
      }
    },
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
    extra: {
      text: "My company engaged with Jirtu Software Labs on a critical web development project that involved custom Wordpress theming and customized interactive features. We've been very impressed with the quality of work, thorough communications throughout, and support process after we launched the site. The team is knowledgeable and highly responsive.",
      user: {
        type: "image",
        value: "https://storage.googleapis.com/a1aa/image/bd1707bd-02f7-4502-49fe-eba3a511c0c0.jpg",
        name: "Dave Onkels",
        stars: 5
      }
    }
  }
  // ...add more testimonials as needed
];

const Testimony = () => {
  return (
    <div>
      <section className="bg-[#f5f5f5] py-10 px-4 text-center max-w-[auto] mx-auto font-inter">
       <h2 className="font-extrabold text-[40px] leading-[22px] text-black mb-2 inline-block">
  <span className="relative inline-block">
    <span className="relative z-10">People</span>
    <span
      className="absolute left-0 -bottom-1.5 w-full h-2 bg-primary rounded z-0"
      aria-hidden="true"
    ></span>
  </span>
  <span className="font-extrabold text-[40px] leading-[22px]"> are talking</span>
</h2>
       <p className="text-xl leading-relaxed text-[#1a1a1a] max-w-[900px] mt-8 mx-auto">
  Making our clients happy isn't just about building beautiful websites. It's about building a relationship, earning trust, and growing together.
</p>

      </section>
      <section className="max-w-[auto] mx-auto px-4 pb-10">
        <div className="slider-wrapper">
          <div className="slider">
            {testimonials.map((testimonial, idx) => (
              <article key={idx} className="flex-shrink-0 w-[280px]  bg-whitez rounded-md p-4 text-[11px] leading-[14px] font-bold text-[#1a1a1a]">
                {testimonial.text}
                <div className="flex items-center gap-3 mt-6">
                  {testimonial.user.type === "image" ? (
                    <img alt={testimonial.user.name} className="w-8 h-8 rounded" height="32" src={testimonial.user.value} width="32" />
                  ) : (
                    <div className="flex font-semibold text-lg items-center justify-center w-8 h-8 rounded bg-[#d9e8e7]   text-[#1a1a1a]">
                      {testimonial.user.value}
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-normal text-[10px] leading-[12px] text-[#1a1a1a]">{testimonial.user.name}</p>
                    {testimonial.user.role && (
                      <p className="text-[8px] leading-[10px] text-[#666666] font-normal">{testimonial.user.role}</p>
                    )}
                    {testimonial.user.stars && (
                      <div className="text-[#00a86b] text-[10px] leading-[12px] flex gap-[2px]">
                        {[...Array(testimonial.user.stars)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {testimonial.extra && (
                  <div className="mt-4 bg-[#f5f5f5] rounded-md p-4 text-[11px] leading-[14px] font-bold text-[#1a1a1a]">
                    {testimonial.extra.text}
                    <div className="flex items-center gap-3 mt-6">
                      {testimonial.extra.user.type === "image" ? (
                        <img alt={testimonial.extra.user.name} className="w-8 h-8 rounded" height="32" src={testimonial.extra.user.value} width="32" />
                      ) : (
                        <div className="flex items-center justify-center w-8 h-8 rounded bg-[#d9e8e7] text-[10px] font-bold text-[#1a1a1a]">
                          {testimonial.extra.user.value}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="font-bold text-[10px] leading-[12px] text-[#1a1a1a]">{testimonial.extra.user.name}</p>
                        {testimonial.extra.user.role && (
                          <p className="text-[8px] leading-[10px] text-[#666666] font-normal">{testimonial.extra.user.role}</p>
                        )}
                        {testimonial.extra.user.stars && (
                          <div className="text-[#00a86b] text-[10px] leading-[12px] flex gap-[2px]">
                            {[...Array(testimonial.extra.user.stars)].map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimony;