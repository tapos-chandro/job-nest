'use client'
import { useState } from "react";


const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click on the Sign Up button at the top-right corner and fill in your details to create a new account.",
  },
  {
    question: "Can I apply to multiple jobs?",
    answer:
      "Yes, you can apply to as many jobs as you like using your profile.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We use industry-standard encryption and security measures to protect your data.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Go to the login page and click on 'Forgot password?' to receive instructions via email.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
          Frequently Asked Questions
        </h2>

        <dl className="mt-8 space-y-6">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow p-6"
            >
              <dt>
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full text-left text-gray-900 dark:text-white text-lg font-medium focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-desc-${index}`}
                >
                  <span>{question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </dt>
              <dd
                id={`faq-desc-${index}`}
                className={`mt-2 text-gray-600 dark:text-gray-300 overflow-hidden transition-max-height duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p>{answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
