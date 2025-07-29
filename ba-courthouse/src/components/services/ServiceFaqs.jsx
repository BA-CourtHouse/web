import { a } from "framer-motion/client";
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web and app development, career coaching, project management, Agile consulting, HR solutions, and more.",
    },
    {
      question: "How do I request a service?",
      answer:
        "Click the 'Request a Service' button and fill out the form. We'll get back to you shortly after reviewing your request.",
    },
    {
      question: "Do you offer custom packages?",
      answer:
        "Yes, all our services are customizable based on your business needs. Let's discuss and tailor a plan that works for you.",
    },
    {
      question: "Is there a consultation before booking?",
      answer:
        "Absolutely! We offer a free 15-minute consultation to understand your needs before starting any project.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing varies based on the service and complexity of the project. We provide transparent quotes after our initial consultation.",
    },
    {
      question: "How can I contact support?",
      answer: "We are always available to answer you 24/7. Find contact information on our Contact page or use the chat feature on our website.",
    }, 
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support packages to ensure your project runs smoothly even after launch.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have experience across multiple industries including technology, healthcare, finance, and education. Our team adapts to your specific sector needs.",
    },
    {
      question: "Can you help with digital marketing?",
      answer:
        "Yes, we offer digital marketing services including SEO, social media management, and content marketing to help grow your online presence.",
    },
    {
      question: "What is your project turnaround time?",
      answer:
        "Turnaround times vary by project scope. We provide estimated timelines during our initial consultation.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-gray-50 py-5 md:py-10 lg:py-15">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
          FAQs
        </h2>

        {/* Responsive grid: 1 col on small screens, 2 cols on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-medium text-lg text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                {faq.question}
                <span className="ml-4 text-2xl text-blue-600">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="mt-3 text-gray-600 transition-all duration-300 ease-in-out">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
