import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import rush from "../../assets/images/two.svg";
import medal from "../../assets/images/one.svg";
import chart from "../../assets/images/four.svg";
import ribbo from "../../assets/images/three.svg";
import porto from "../../assets/images/porto.png";
import pm from "../../assets/images/six.svg";
import pok from "../../assets/images/seven.svg";
import tens from "../../assets/images/five.svg";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Data array for Why Us accordion items
const whyItems = [
  {
    value: "item-1",
    icon: medal,
    label: "Top Notch Quality",
    content:
      "High quality every step of the way - detailed project reviews to guarantee a great understanding of your project needs, handcrafted code that speaks for itself, direct and open communication, and use of the latest best tools and practices. And that’s just a part of it all.",
  },
  {
    value: "item-2",
    icon: rush,
    label: "Fast Turnaround",
    content:
      "Time frames that don't sacrifice the quality a project deserves. With a great team of experts and a well-optimized working process, we are geared to meet any deadline while providing the same grade level of quality every single time.",
  },
  {
    value: "item-3",
    icon: ribbo,
    label: "Diverse Expertise",
    content:
      "Your convenience - placed first. Now, you can take complete control over your projects with the flexibility to choose the tools and processes that best fit your business needs. We will adapt to you, and not the other way around.",
  },
  {
    value: "item-4",
    icon: chart,
    label: "Reasonable Pricing",
    content:
      "Why have one person with average knowledge in multiple areas when you can have an expert in every field of the web development? We hedge our bets on team-level expertise diversity that amplifies individual creativity and efficiency, optimizes time and costs, and brings out the best results.",
  },
  {
    value: "item-5",
    icon: tens,
    label: "Reliability & Flexibility",
    content:
      "Your convenience - placed first. Now, you can take complete control over your projects with the flexibility to choose the tools and processes that best fit your business needs. We will adapt to you, and not the other way around.",
  },
  {
    value: "item-6",
    icon: pm,
    label: "Dedicated Project Manager",
    content:
      "Effective project management, done right. By default, you get a dedicated manager who is both tech-savvy and highly skilled in managing web projects. Your go-to person throughout the entire process who ensures your project stays on track and all your needs are met.",
  },
  {
    value: "item-7",
    icon: pok,
    label: "Post-Delivery Support",
    content:
      "We're committed to providing our clients with the best possible post-delivery support. You have everything you need to keep a website running smoothly and efficiently, with fast and reliable assistance whenever you need it - even years after a project is completed.",
  },
];

const Why = () => {
  return (

    <section className="w-full max-w-[1380px] font-inter mx-auto mt-4  sm:px-6 py-12">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 sm:gap-12">
        {/* Left side */}
        <div className="w-full lg:w-1/2 mx-auto text-center  xl:text-left">
<h2 className="flex items-baseline flex-wrap justify-center  lg:justify-start xl:justify-start mb-4 text-black text-center md:text-left">
  <span className="flex items-baseline">
    <span className="font-inter font-bold text-[32px] md:text-[36px] xl:text-[40px] leading-[1.2] tracking-[-0.12px]">
      So,
    </span>
  </span>
  <span className="relative inline-block md:ml-2">
    <span className="relative z-10 font-inter font-bold text-[32px] md:text-[36px] xl:text-[40px] leading-[1.2] tracking-[-0.12px]">
      Why Us?
    </span>
    <span
      className="absolute left-0 bottom-1 w-full h-2 bg-primary z-0"
      aria-hidden="true"
    ></span>
  </span>
</h2>
          <p className="text-[16px] sm:text-xl w-full xl:w-[650px] leading-relaxed font-inter mb-8 sm:mb-12">

            Unbeatable code quality at reasonable cost and delivery terms. A
            perfect choice for businesses who prioritize semantic code over the
            lowest possible price.
            <img
              src={porto}
              alt="pro.logo"
              className="w-340 h-100 inline-block"
              width="50"
              height="50"
            />
          </p>

          {/* Cards container */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <img
              src="../../assets/image.png"
              alt=""
              className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-full mx-auto"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/">

   <Accordion.Root 
          type="single" 
          collapsible 
          defaultValue="item-1"  
          className="w-full xl:w-[537px] space-y-3   sm:space-y-4 font-inter"
        >
          {whyItems.map((item) => (
            <Accordion.Item 
              key={item.value} 
              value={item.value} 
              className="rounded-lg px-4  sm:px-6 data-[state=open]:bg-[#F4F4F4] data-[state=open]:pb-5 transition-colors"
            >
              <Accordion.Header className="data-[state=open]:pt-7">
                <Accordion.Trigger className="flex justify-between items-center w-full px-3 sm:px-4 py-2 sm:py-3 bg-white text-left font-medium transition-all hover:text-primary group data-[state=open]:bg-[#F4F4F4] rounded-t-lg">
                  <div className="flex items-center">
                    <img 
                      src={item.icon} 
                      alt="" 
                      className="w-6 h-7 inline-block" 
                    />
                    <span className="ml-3 sm:ml-5  font-bold text-xl sm:text-2xl">
                      {item.label}
                    </span>
                  </div>
                  <ChevronDownIcon className="ml-2 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-600 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-3 pr-10 sm:px-4 py-2 sm:py-3 ml-8  sm:ml-12 w-full max-w-[430px] rounded-b-lg font-inter font-normal text-base sm:text-[16px] leading-[28.64px] tracking-[-0.05px] align-middle">
                {item.content}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        </div>
      </div>
    </section>
  );
};

export default Why;
