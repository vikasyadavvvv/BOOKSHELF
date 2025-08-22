import React from "react"; 
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 bg-white dark:bg-black">

      <img
        src={book.coverImage || "https://via.placeholder.com/150"}
        alt={book.title}
        className="w-full h-52 object-cover rounded-md"
      />

      <h3 className="font-semibold mt-3 text-lg text-gray-800 dark:text-white">
        {book.title}
      </h3>

      <p className="text-sm text-gray-600 mt-1 dark:text-white">
        {book.authors}
      </p>

      <p className="text-xs text-gray-500 mt-1 dark:text-white">
        Published: {book.publishedYear}
      </p>

      <Link
        to={`/book/${book.id}`}
        className="inline-block mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline transition-colors duration-200"
      >  View Details →
      </Link>

    </div>
  );
}
export default BookCard;

