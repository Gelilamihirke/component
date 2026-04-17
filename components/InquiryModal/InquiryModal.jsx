import React, { useState } from "react";

const InquiryModal = ({ onClose }) => {
  const [result, setResult] = useState({ message: "", type: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);



  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get('name')?.trim()) newErrors.name = "Please enter your full name";
    if (!formData.get('email')?.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.get('email'))) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.get('message')?.trim()) newErrors.message = "Please enter your message";
    if (!formData.get('consent')) newErrors.consent = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (!validateForm(formData)) {
    
      return;
    }

    setResult({ message: "Sending...", type: "loading" });

    formData.append("access_key", "8fe94175-9956-40b5-89b6-54ca950248a7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult({ message: "Form Submitted Successfully", type: "success" });
        setIsSubmitted(true);
        event.target.reset();
      } else {
        setResult({ message: data.message || "Submission failed", type: "error" });
      }
    } catch (error) {
      setResult({ message: "Network error. Please try again.", type: "error" });
      console.error("Error:", error);
    }
  };

  if (isSubmitted && result.type === "success") {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
        <div className="relative max-w-[800px] w-full bg-white p-6 md:p-10 rounded-sm drop-shadow-lg mx-auto my-8 text-center">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="mb-6">{result.message}</p>
          <p className="mb-6">We'll get back to you soon.</p>
          <button
            onClick={onClose}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[800px] w-full bg-white p-6 md:p-10 rounded-sm drop-shadow-lg mx-auto my-8"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          div[style*="overflow-y: auto"]::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <h2
          id="modal-title"
          className="text-center font-semibold text-[26px] md:text-2xl mb-4"
        >
          Submit an Inquiry
        </h2>

        <p className="text-center text-base md:text-lg mb-8 max-w-xl mx-auto">
          Tell us more about your needs, and how we can assist you with. We will
          get in touch with you and do our best to help.
        </p>

        {result.type === "error" && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p>{result.message}</p>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6" noValidate>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name *"
                required
                className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-md px-4 py-3 placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="flex-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email *"
                required
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md px-4 py-3 placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Tell us about your project or the challenge you have. *"
              required
              className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-md px-4 py-3 placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="flex flex-col  space-y-3 max-w-3xl mx-auto text-sm text-gray-900">
            <div>
              <label className="flex items-center  space-x-2">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className={`w-4 h-4 ${errors.consent ? 'border-red-500' : 'border-gray-300'}  rounded-sm text-cyan-600 focus:ring-cyan-500`}
                />
                <span>
                  I consent to the processing of my personal data and agree to the{" "}
                  <a
                    href="#"
                    className="underline hover:text-cyan-600 focus:text-cyan-600"
                  >
                    Terms &amp; Conditions
                  </a>
                  .
                </span>
              </label>
              {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
            </div>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="news"
                className="w-4 h-4 border border-gray-300 rounded-sm text-cyan-600 focus:ring-cyan-500"
              />
              <span>
                I want to receive news and service updates from Jitruu Software Lab.
              </span>
            </label>
          </div>

          <div className="flex justify-center mt-6">
         <button
  type="submit"
  className="bg-cyan-500 hover:bg-white text-white hover:text-cyan-500 border border-transparent hover:border-cyan-500 font-semibold text-lg md:text-xl rounded-md px-10 py-4 transition-colors duration-200"
  disabled={result.type === "loading"}
>
  {result.type === "loading" ? (
    <span className="flex items-center justify-center">
      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    </span>
  ) : (
    "Submit"
  )}
</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;