import { Link } from "react-router-dom";
import { useState } from "react"; // State for handling the dropdown menu

const Navbar = () => {
  // State to toggle the dropdown menu for mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-3xl font-bold text-white tracking-wider drop-shadow-lg">
          <Link
            to="/"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            📚 Online Library
          </Link>
        </h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6">
          {/* Static Links Map */}
          {[
            { name: "Home", path: "/" },
            { name: "Browse Books", path: "/browse-books" },
            { name: "Add Book", path: "/add-book" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-4 py-2 text-lg font-semibold text-white hover:bg-white hover:text-indigo-600 rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-600 text-white">
          {[
            { name: "Home", path: "/" },
            { name: "Browse Books", path: "/browse-books" },
            { name: "Add Book", path: "/add-book" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
              className="block px-4 py-3 text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
