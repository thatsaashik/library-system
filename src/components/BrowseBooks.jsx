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
    return <p>Loading books...</p>;
  }

  if (status === "failed") {
    return <p>Failed to load books. Please try again later.</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Browse Books
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title or subtitle"
          className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.subtitle}</p>
                <Link
                  to={`/book/${book.isbn13}`}
                  className="block mt-4 text-center bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
