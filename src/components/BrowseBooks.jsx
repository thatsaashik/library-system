import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBooks } from "../redux/booksSlice";
import { Link } from "react-router-dom";

const BrowseBooks = () => {
  const dispatch = useDispatch();
  const { items: books, status } = useSelector((state) => state.books);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, [dispatch, status]);

  const filteredBooks = books.filter(
    (book) =>
      book.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-blue-600">Loading books...</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-red-600">
          Failed to load books. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-indigo-700 text-center mb-8">
        Browse Our Collection
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search books by title or subtitle..."
          className="border border-gray-300 rounded-lg p-3 w-full max-w-md focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.isbn13}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 truncate">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500 truncate mt-1">
                    {book.subtitle}
                  </p>
                </div>
                <Link
                  to={`/book/${book.isbn13}`}
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 text-center rounded-lg hover:bg-indigo-500 transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center col-span-full">
            <p className="text-lg font-semibold text-gray-700">
              No books found. Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
