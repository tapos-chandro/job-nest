import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Software Engineer",
      photo: "/testimonials/alice.jpg",
      feedback:
        "This platform helped me land my dream job quickly. The search and application process was smooth and intuitive!",
    },
    {
      id: 2,
      name: "Mark Smith",
      role: "Product Manager",
      photo: "/testimonials/mark.jpg",
      feedback:
        "A fantastic resource for job seekers. The job listings are up-to-date and from reputable companies.",
    },
    {
      id: 3,
      name: "Sara Lee",
      role: "UI/UX Designer",
      photo: "/testimonials/sara.jpg",
      feedback:
        "The user interface is clean and easy to navigate. Applying to jobs has never been easier!",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          What Our Users Say
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Real feedback from our satisfied job seekers.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, role, photo, feedback }) => (
            <div
              key={id}
              className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={photo}
                alt={name}
                className="w-20 h-20 rounded-full object-cover mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">“{feedback}”</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
              <p className="text-indigo-600 dark:text-indigo-400">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
