import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Sign up and build your professional profile to showcase your skills and experience.",
    },
    {
      number: 2,
      title: "Search for Jobs",
      description: "Use our powerful search to find jobs that match your interests and qualifications.",
    },
    {
      number: 3,
      title: "Apply & Get Hired",
      description: "Apply easily with your saved profile and track your applications in one place.",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">How It Works</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Follow these simple steps to land your dream job with us.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white font-bold text-lg mb-4">
                {number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
