import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import rush from "../../assets/images/rush.png"; // Adjust the path if needed

// Data array for FAQ items
const faqItems = [
  {
    value: "item-1",
    icon: rush,
    label: "Fast Turnaround",
    content:
      "Time frames that don't sacrifice the quality a project deserves. With a great team of experts and a well-optimized working process, we are geared to meet any deadline while providing the same grade level of quality every single time.",
  },
  {
    value: "item-2",
    icon: null,
    label: "Semantic Code",
    content:
      "Our developers write clean, semantic HTML and maintainable code that aligns with modern standards.",
  },
  // Example repeated item, you can add more or adjust as needed
  {
    value: "item-3",
    icon: null,
    label: "Trusted by Agencies",
    content:
      "Our long-term clients include design and marketing agencies who count on us for consistency and excellence.",
  },
  {
    value: "item-4",
    icon: null,
    label: "Trusted by Agencies",
    content:
      "Our long-term clients include design and marketing agencies who count on us for consistency and excellence.",
  },
  {
    value: "item-5",
    icon: null,
    label: "Trusted by Agencies",
    content:
      "Our long-term clients include design and marketing agencies who count on us for consistency and excellence.",
  },
  {
    value: "item-6",
    icon: null,
    label: "Trusted by Agencies",
    content:
      "Our long-term clients include design and marketing agencies who count on us for consistency and excellence.",
  },
];

const Faq = () => {
  return (
    <main className="bg-white text-black font-sans max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-center font-extrabold text-2xl mb-4">FAQ</h1>
      <p className="text-center max-w-3xl mx-auto mb-12">
        Looking for answers about our web development service? We've compiled a comprehensive list of frequently asked questions to help you navigate. Start exploring today and unleash your business's full web development potential!
      </p>
      <section>
        <Accordion.Root
          type="single"
          collapsible
         
          defaultValue="item-1" 
          className="w-full max-w-xl mx-auto space-y-4"
        >
          {faqItems.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
  <Accordion.Header>
    <Accordion.Trigger className="group flex justify-between items-center w-full px-4 py-3 bg-white shadow rounded text-left font-medium transition-all text-black hover:text-primary">
      <div className="flex items-center">
        <span className={`ml-2 relative inline-block ${item.icon ? "ml-2" : ""}`}>
          {item.label}
          
          <span className="absolute left-0 -bottom-0.5 h-0.5 bg-primary w-0 transition-all duration-600 ease-in-out group-hover:w-full group-data-[state=open]:w-full" />
        </span>
      </div>
      <ChevronDownIcon className="ml-2 transition-transform duration-300 group-data-[state=open]:rotate-180" />
    </Accordion.Trigger>
  </Accordion.Header>
  <Accordion.Content className="px-4 py-3 bg-gray-50 rounded-b text-sm text-gray-700">
    {item.content}
  </Accordion.Content>
</Accordion.Item>

          ))}
        </Accordion.Root>
      </section>
    </main>
  );
};

export default Faq;