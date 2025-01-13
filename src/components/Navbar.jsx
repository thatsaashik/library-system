import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" p-4  flex bg-blue-400 text-white justify-between items-center shadow-lg">
      <h1 className="text-3xl font-extrabold text-white  tracking-wide">
        Online Library
      </h1>
      <div>
        <Link
          className="px-4 py-2 text-lg font-medium hover:text-blue-200 transition-colors duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-4 py-2 text-lg font-medium hover:text-blue-200 transition-colors duration-300"
          to="/browse-books"
        >
          Browse Books
        </Link>
        <Link
          className="px-4 py-2 text-lg font-medium hover:text-blue-200 transition-colors duration-300"
          to="/add-book"
        >
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
