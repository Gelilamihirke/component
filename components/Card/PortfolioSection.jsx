import Card from './Card'
import sample1 from "../../assets/images/Sample1.png"
import sample2 from "../../assets/images/Sample2.png"

const PortfolioSection = () => (
  <main className="max-w-[1800px] mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-5 overflow-x-hidden">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-12 mb-12 sm:mb-16">
      <Card
        link="/work/vinera"
        images={[
          {
            src: "https://storage.googleapis.com/a1aa/image/483dbb26-da2c-4d13-61ca-cdade55852ac.jpg",
            alt: "Interior of a venue with bar stools and tables, warm lighting",
            width:  385.04,
            height: 334.94,
            className: "w-full h-auto"
          },
          {
            src: "https://storage.googleapis.com/a1aa/image/0fd5c5e6-7c46-4d68-2b11-e5713b1911b0.jpg",
            alt: "Cozy venue seating area with blue tufted chairs and tables",
            width: 164.31,
            height: 334.94,
            className: "w-full h-auto"
          },
        ]}
        title="The Venue Collective"
        description="UI/UX Design & WordPress Development"
        containerClass="flex flex-col sm:flex-row gap-4"
      />

      <Card
        link="/work/ecommerce"
        images={[
          {
            src: "https://storage.googleapis.com/a1aa/image/65f63f88-d985-48a1-ede5-8d0ae4f82887.jpg",
            alt: "Website homepage with a purple gaming controller on white background",
            width:  385.04,
            height: 334.94,
            className: "w-full h-auto"
          },
          {
            src: sample1,
            alt: "XYAB company webpage with text and yellow highlight blocks",
            width: 164.31,
            height: 334.94,
            className: "w-full h-auto"
          },
        ]}
        title="XYAB.com"
        description="Custom Shopify Theme Development"
        containerClass="flex flex-col sm:flex-row gap-4"
      />
         <Card
        link="/work/portfolio3"
        images={[
          {
            src: "https://storage.googleapis.com/a1aa/image/65f63f88-d985-48a1-ede5-8d0ae4f82887.jpg",
            alt: "Website homepage with a purple gaming controller on white background",
            width:  385.04,
            height: 334.94,
            className: "w-full h-auto"
          },
          {
            src: sample1,
            alt: "XYAB company webpage with text and yellow highlight blocks",
            width: 164.31,
            height: 334.94,
            className: "w-full h-auto"
          },
        ]}
        title="XYAB.com"
        description="Custom Shopify Theme Development"
        containerClass="flex flex-col sm:flex-row gap-4"
      />
        <Card
        link="/work/portfolio4"
        images={[
          {
            src: "https://storage.googleapis.com/a1aa/image/65f63f88-d985-48a1-ede5-8d0ae4f82887.jpg",
            alt: "Website homepage with a purple gaming controller on white background",
            width:  385.04,
            height: 334.94,
            className: "w-full h-auto"
          },
          {
            src: sample1,
            alt: "XYAB company webpage with text and yellow highlight blocks",
            width: 164.31,
            height: 334.94,
            className: "w-full h-auto"
          },
        ]}
        title="XYAB.com"
        description="Custom Shopify Theme Development"
        containerClass="flex flex-col sm:flex-row gap-4"
      />
        <Card
        link="#"
        images={[
          {
            src: "https://storage.googleapis.com/a1aa/image/65f63f88-d985-48a1-ede5-8d0ae4f82887.jpg",
            alt: "Website homepage with a purple gaming controller on white background",
            width:  385.04,
            height: 334.94,
            className: "w-full h-auto"
          },
          {
            src: sample1,
            alt: "XYAB company webpage with text and yellow highlight blocks",
            width: 164.31,
            height: 334.94,
            className: "w-full h-auto"
          },
        ]}
        title="XYAB.com"
        description="Custom Shopify Theme Development"
        containerClass="flex flex-col sm:flex-row gap-4"
      />
      
    </section>
  </main>
)

export default PortfolioSection