import React from "react";

export default function TopCompanies() {
  const companies = [
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Facebook", logo: "/logos/facebook.svg" },
    { name: "Apple", logo: "/logos/apple.svg" },
    { name: "Netflix", logo: "/logos/netflix.svg" },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Top Companies</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Work with the world’s leading companies trusted by thousands of job seekers.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {companies.map(({ name, logo }) => (
            <div
              key={name}
              className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md"
            >
              <img
                src={logo}
                alt={`${name} logo`}
                className="max-h-12 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
