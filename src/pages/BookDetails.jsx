import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/pranayBaynineventures/assignment-get_all_books/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch(err => console.log("Error fetching book:", err));
  }, [id]);

  const addToFavorites = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favs.find((f) => f.id === book.id)) {
      favs.push(book);
      localStorage.setItem("favorites", JSON.stringify(favs));
      toast.success("Book added to favorites!", { position: "top-right" });
    } else {
      toast.info("Book is already in favorites", { position: "top-right" });
    }
  };

  if (!book) return <p className="text-center mt-10 text-gray-600">Loading book...</p>;

  return (
  <div className="max-w-lg mx-auto mt-8 border rounded-lg shadow-lg p-6 bg-white dark:bg-black transition-colors duration-300">

  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
    {book.title}
  </h2>

  <p className="text-gray-700 dark:text-white mt-1">
    <span className="font-semibold">Author:</span> {book.authors}
  </p>

  <p className="text-gray-600 dark:text-white mt-1">
    <span className="font-semibold">First Published:</span> {book.publishedYear}
  </p>

  <p className="text-gray-600 dark:text-white mt-1">
    <span className="font-semibold">Subject:</span> {Array.isArray(book.subjects) ? book.subjects.join(" ") : book.subjects}
  </p>

  <p className="mt-4 text-gray-700 dark:text-white">
    {book.description || "No description available."}
  </p>

  <button
    onClick={addToFavorites}
    className="mt-5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:shadow-md transition"  >
    Add to Favorites
  </button>
  <ToastContainer />
</div>

  );
}

export default BookDetails;
