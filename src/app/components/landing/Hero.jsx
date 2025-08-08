import React from 'react';

const Hero = () => {
    return (
        <div>
            <header className={`bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white`}>
                <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                            Find Your Dream Job Today
                        </h1>
                        <p className="mt-4 text-lg text-indigo-100">
                            Explore thousands of job opportunities from top companies and take the next step in your career.
                        </p>

                        {/* Search Bar */}
                        <form
                            // onSubmit={(e) => {
                            //     e.preventDefault();
                            //     const keyword = e.target.keyword.value.trim();
                            //     if (keyword && onSearch) onSearch(keyword);
                            // }}
                            className="mt-8 flex flex-col sm:flex-row bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="flex items-center px-4 py-3 flex-1">
                                <div className="w-5 h-5 text-gray-400 mr-3" />
                                <input
                                    type="text"
                                    name="keyword"
                                    placeholder="Search jobs, companies, or skills..."
                                    className="w-full text-gray-800 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 font-semibold text-white"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Hero;