import about from "../assets/images/about.png";
import sample2 from "../assets/images/Sample2.png";
import sample3 from "../assets/images/Sample3.png"; // example new project image


export const portfolioProjects = {
  vinera: {
    id: 'vinera',
    title: "Vinera Wines",
    subtitle: "Custom WordPress Theme Development + WooCommerce",
    scope: "The main goal of this project was to improve the user experience and functionality of the 'Our Venues' page on The Venue Collective's website. We focused on updating the drop-down filter menus to make them cleaner",
    buttons: [
      "HTML/CSS Conversion",
      "Fully Responsive Website",
      "WordPress integration",
      "JavaScript / CSS Animations"
    ],
    image: {
      src: "https://placehold.co/600x350/04283a/cc9c6a/png?text=Vinera+Wines",
      alt: "Vinera Wines website screenshot"
    },
    proj: {
      src: "https://placehold.co/600x350/2563eb/ffffff/png?text=Project+Details",
      alt:  ""
    },
    features: [
      "HTML/CSS Conversion",
      "Fully Responsive Website",
      "Modern Browsers Support",
      "WordPress integration"
    ],
  },

  ecommerce: {
    id: 'ecommerce',
    title: "E-Commerce Platform",
    subtitle: "React + Node.js E-commerce Solution",
    buttons: [
      "React Frontend",
      "Node.js Backend",
      "Payment Processing",
      "Admin Dashboard"
    ],
    image: {
      src: sample2,
      alt: "E-commerce platform screenshot"
    },
    features: [
      "React Functional Components",
      "Redux State Management",
      "Stripe Integration",
      "Responsive Design"
    ], 
    finalResult: {
      description: "The final product is a complex e-commerce solution for wine enthusiasts.",
      features: [
        "Custom theme built from scratch",
        "Advanced WooCommerce integration",
        "Mobile-first responsive design",
        "SEO optimized structure"
      ],
      testimonial: "\"The team delivered exceptional results that exceeded our expectations. The site performs beautifully on all devices!\"",
      image: {
        src: sample2,
        alt: "Vinera Wines final result"
      }
    },
    liveUrl: "https://vinera-wines.com"
  },

  portfolio3: {
    id: 'portfolio3',
    title: "Corporate Website",
    subtitle: "Custom React Corporate Site",
    scope: "Designed a responsive corporate website with modern UI and seamless navigation.",
    buttons: [
      "React Frontend",
      "Responsive Design",
      "SEO Optimization",
      "Custom Animations"
    ],
    image: {
      src: sample3,
      alt: "Corporate website screenshot"
    },
    features: [
      "Modern UI/UX Design",
      "Responsive Layout",
      "Fast Loading Pages",
      "SEO Optimized"
    ],
    finalResult: {
      description: "The corporate site fully reflects the brand and provides easy navigation.",
      features: [
        "Smooth animations",
        "Cross-browser compatibility",
        "Mobile-first design",
        "Accessible components"
      ],
      testimonial: "\"This website has elevated our corporate presence online!\"",
      image: {
        src: sample3,
        alt: "Corporate site final result"
      }
    },
    liveUrl: "https://corporate-example.com"
  },

  portfolio4: {
    id: 'portfolio4',
    title: "Portfolio Showcase",
    subtitle: "Creative Portfolio Template",
    scope: "Created a modern, visually appealing portfolio template for designers and artists.",
    buttons: [
      "HTML/CSS/JS",
      "Responsive Design",
      "Animation Effects",
      "Gallery Integration"
    ],
    image: {
      src: sample3,
      alt: "Portfolio showcase screenshot"
    },
    features: [
      "Creative Layouts",
      "Interactive Gallery",
      "Responsive Design",
      "Smooth Animations"
    ],
    finalResult: {
      description: "A visually stunning portfolio template that highlights creative work effectively.",
      features: [
        "Interactive image galleries",
        "Mobile-first design",
        "Custom animations",
        "Fast loading"
      ],
      testimonial: "\"The portfolio template perfectly represents creative works with elegance!\"",
      image: {
        src: sample3,
        alt: "Portfolio showcase final result"
      }
    },
    liveUrl: "https://portfolio-example.com"
  }
};
