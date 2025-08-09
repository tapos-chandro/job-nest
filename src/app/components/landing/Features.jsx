import React from "react";

export default function Features() {
  const features = [
    {
      title: "Wide Job Selection",
      description: "Access thousands of job listings from various industries and locations.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      ),
    },
    {
      title: "Easy Application",
      description: "Apply to jobs quickly with saved profiles and one-click applications.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 21v-2a4 4 0 00-8 0v2m8-10a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Trusted Companies",
      description: "Work with verified and top-rated companies for a secure career move.",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-3.866-3.582-7-8-7m16 0v14a2 2 0 01-2 2H8a2 2 0 01-2-2v-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4m0 0l-4-4m4 4l4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Why Choose Us</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Our platform is designed to help you find the perfect job effortlessly.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map(({ title, description, icon }) => (
            <div key={title} className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
