import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import rush from "../../assets/images/rush.png"; // Adjust the path if needed


const faqItems = [
  {
    value: "item-1",
    icon: rush,
    label: "What does JSL actually do?",
    content:
      "JSL is a web development company specializing in delivering high-quality solutions that puts project owners in full control from start to finish. We collaborate with businesses of any kind and provide them with a reliable & easy to use custom web development service.",
  },
  {
    value: "item-2",
    icon: null,
    label: "Do you work with big or small companies?",
    content:
      "We collaborate with web agencies, startups, small & medium businesses, and enterprises. If you are looking for a quality web development service, we are probably just the right fit for you.",
  },

  {
    value: "item-3",
    icon: null,
    label: "Can you guarantee results?",
    content:
      "We are a reliable and easy-to-use web development service. We stand behind the work we deliver and provide various guarantees, starting from risk-free trial runs, code quality guarantees, and life-time post-delivery support.",
  },
  {
    value: "item-4",
    icon: null,
    label: "How many people do you have on staff?",
    content:
      "We are a team of 150+ experts in web design & development. We are separated into small teams, each specializing in a different area - from HTML/CSS coding, static websites, CMS integrations, and eCommerce solutions. We have highly-profiled experts to help you in every step of the web development process.",
  },
  {
    value: "item-5",
    icon: null,
    label: "How will we communicate?",
    content:
      "We can have video meetings on demand, share Slack channels, or send emails. Whatever you prefer. On top of that, we've built our own centralized platform for communication with clients, which we can use for any general needs - sharing files, discussing cases, making payments, downloading invoices, etc.",
  },
  {
    value: "item-6",
    icon: null,
    label: "Can your team work within our project management environment?",
    content:
      "Sure, we will be happy to explore your processes and inherit the project management styles, tools, and flows you follow. We will come up with a solution that is adapted to you, suits your needs, and achieves the best results.",
  },
   {
    value: "item-7",
    icon: null,
    label: "How can I pay for your services?",
    content:
      "We offer a range of payment options like all major credit cards, PayPal, bank wires, and Wise.",
  }, {
    value: "item-8",
    icon: null,
    label: "What’s the average turnaround time?",
    content:
      "The turnaround time for a project may vary depending on its complexity, the scope of work, and urgency. We evaluate every project individually and in detail to provide options adapted to your needs..",
  }, {
    value: "item-9",
    icon: null,
    label: "Can you help us with the discovery phase and requirement gathering?",
    content:
      "Our team understands the importance of the discovery phase and requirement-gathering process in guaranteeing the success of a project. We are committed to working with you every step of the way to ensure that your project is delivered on time, within budget, and meets all your requirements and expectations.",
  }, {
    value: "item-10",
    icon: null,
    label: "Do I need my own staging server?",
    content:
      "We can set up your project on a staging instance on our servers, where you can make your own tests and reviews. We will also be happy to assist you in creating a staging instance on your hosting to guarantee everything operates well in a close-to-production environment.",
  },
   {
    value: "item-11",
    icon: null,
    label: "Do you provide bug fixes?",
    content:
      "Yes, that's part of the guarantees we offer for projects executed by us. We provide free bug fixes in the post-delivery period. We will also be happy to take care of any bug fixes on websites that been developed by someone else.",
  },
   {
    value: "item-12",
    icon: null,
    label: "Do you offer maintenance on delivered sites?",
    content:
      "Yes. We offer website maintenance and support as an add-on service, no matter if these sites have been developed by our team of experts or someone else. We will conduct a detailed project review and offer you a maintenance plan that suits your needs.",
  }, {
    value: "item-13",
    icon: null,
    label: "Do you have any partner references I can connect with?",
    content:
      "Yes, many satisfied clients and partners who have worked with us would be happy to provide references. We believe that our partners are our best advocates, and we are confident that they will speak highly of the quality of our work and the level of service we provide.",
  },

 {
    value: "item-14",
    icon: null,
    label: "What if I have more questions?",
    content:
      "We welcome any questions you might have. Our team is always open to providing support and guidance throughout the whole process. Please, don't hesitate to reach out to us via email, phone, or any other communication channel you prefer. We believe that clear and open communication is essential for the success of any project. That's why we are committed to ensuring that all your questions will be answered in a timely and thorough manner.",
  },  
  


];

const Faq_home = () => {
  return (
    <main className="bg-white text-black font-sans max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-center font-bold text-xl text-[32px]  md:text-[36px] lg:text-[40px]  mb-4">FAQ</h1>
      <p className="text-center lg:w-[904.4px]  mx-auto text-[16px] md:text-[18px] xl:text-[20px]  mb-12">
        Looking for answers about our web development service? We've compiled a comprehensive list of frequently asked questions to help you navigate. Start exploring today and unleash your business's full web development potential!
      </p>
      <section>
<Accordion.Root
  type="single"
  collapsible
  defaultValue="item-1" 
  className="w-full flex flex-col items-center px-4 space-y-4 mb-18"
>
  {faqItems.map((item) => (
    <Accordion.Item 
      key={item.value} 
      value={item.value}
      className="w-full max-w-xl lg:max-w-[872px]"
    >
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full justify-between items-center text-lg font-semibold px-4 sm:px-8 py-3 bg-white data-[state=open]:pt-8 rounded text-left transition-all data-[state=open]:bg-[#F4F4F4] text-black hover:text-primary">
          <div className="flex items-center">
            <span className={`ml-2 relative inline-block ${item.icon ? "ml-2" : ""}`}>
              {item.label}
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-primary w-0 transition-all duration-600 ease-in-out group-hover:w-full group-data-[state=open]:w-full" />
            </span>
          </div>
          <ChevronDownIcon className="ml-2 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content 
        className="px-4 sm:px-10 py-3 bg-gray-50 data-[state=open]:bg-[#F4F4F4] w-full data-[state=open]:py-5 rounded-b"
        style={{
          fontFamily: 'Inter',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '16px',
          lineHeight: '28px',
          letterSpacing: '0%',
          verticalAlign: 'middle'
        }}
      >
        {item.content}
      </Accordion.Content>
    </Accordion.Item>
  ))}
</Accordion.Root>
      </section>
    </main>
  );
};

export default Faq_home;