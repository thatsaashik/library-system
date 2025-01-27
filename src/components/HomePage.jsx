import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <header className="w-full h-[60vh] bg-gradient-to-r from-indigo-700 to-purple-700 relative overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1555116505-38ab61800975?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D"
          alt="Library"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="text-center z-10 max-w-2xl">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-md tracking-widest animate-fade-in">
            Online Library
          </h1>
          <p className="text-lg text-white mt-4 font-medium tracking-wide animate-fade-in-up">
            A world of knowledge at your fingertips
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </header>

      {/* Categories Section */}
      <section className="w-full px-6 py-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Category Card */}
          {["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Biography", "Fantasy"].map(
            (category) => (
              <div
                key={category}
                className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-indigo-600">{category}</h3>
                <p className="text-gray-600 mt-4 text-base">
                  Discover a variety of books in the {category} genre.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="w-full py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h3 className="text-3xl font-extrabold mb-6">
          Start Your Reading Journey Today
        </h3>
        <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-transform">
          Browse All Books
        </button>
      </footer>
    </div>
  );
};

export default HomePage;
