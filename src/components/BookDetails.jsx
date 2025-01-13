import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.items.find((book) => book.isbn13 === id)
  );

  if (!book) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-lg font-semibold">Book not found!</p>
        <Link
          to="/"
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Book Image */}
        <div className="relative h-64 bg-gray-200">
          <img
            src={book.image}
            alt={book.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Book Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Author:</span>{" "}
            {book.author || "Unknown Author"}
          </p>
          <p className="text-gray-700 mb-4">
            {book.description || "No description available."}
          </p>
          <p className="text-gray-600 text-sm mb-6">
            <span className="font-semibold">ISBN:</span> {book.isbn13}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-blue-600">
              Rating: {book.rating || "N/A"} / 5
            </span>
            <Link
              to="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Back to Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
