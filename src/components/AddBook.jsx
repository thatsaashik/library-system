import { useDispatch } from "react-redux";
import { useState } from "react";
import { addBook } from "../redux/booksSlice"; 
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  // State for form fields
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState(""); // State for book description
  const [imageUrl, setImageUrl] = useState(""); // State for book cover image URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (title && author && category && description && imageUrl) {
      // Dispatch the action to add the new book
      dispatch(
        addBook({
          id: Date.now(), // Unique ID for the book
          title,
          author,
          category,
          description,
          imageUrl,
        })
      );
      // Navigate to the Browse Books page after submission
      navigate("/browse-books");
    } else {
      // Alert the user if fields are missing
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-white via-gray-100 to-blue-50 min-h-screen flex items-center justify-center">
      {/* Form container */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {/* Form heading */}
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          Add a New Book
        </h2>
        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Book Title Input */}
          <div>
            <label className="block font-medium text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter book title"
              required
            />
          </div>
          {/* Author Input */}
          <div>
            <label className="block font-medium text-gray-700">Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter author's name"
              required
            />
          </div>
          {/* Category Dropdown */}
          <div>
            <label className="block font-medium text-gray-700">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select a category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
          {/* Description Textarea */}
          <div>
            <label className="block font-medium text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              placeholder="Enter book description"
              required
            />
          </div>
          {/* Image URL Input */}
          <div>
            <label className="block font-medium text-gray-700">Image URL:</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter image URL"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
