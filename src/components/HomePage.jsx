import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen  relative">

      {/* Carousel Section */}
      <div className="relative mt-1 z-10">
        <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
          {/* Single Carousel Image */}
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Heading Section */}
      <div className="text-center mt-8 z-10 relative">
        <h2 className="text-4xl font-extrabold text-black mb-6 text-shadow-lg">
          Welcome to the Online Library
        </h2>

        {/* Categories Section */}
        <div className="mt-8">
          <h3 className="text-3xl font-semibold text-black mb-4 text-shadow-lg">
            Explore Categories
          </h3>
          <ul className="flex flex-wrap justify-center gap-6">
            {/* Category Items */}
            <li className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer transform hover:scale-105">
              Fiction
            </li>
            <li className="bg-green-100 hover:bg-green-200 text-green-800 font-medium px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer transform hover:scale-105">
              Non-Fiction
            </li>
            <li className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-medium px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer transform hover:scale-105">
              Sci-Fi
            </li>
          </ul>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 transition duration-300">
            Browse All Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
