import React from "react";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const Home=()=> {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://my-json-server.typicode.com/pranayBaynineventures/assignment-get_all_books/books");
      if (!res.ok) throw new Error("Failed to fetch books");
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
   <div className="p-4">

  <input
    type="text"
    placeholder="Search books..."
    className="w-full p-2 border rounded mb-4 bg-white dark:bg-black text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  {loading && <p className="text-gray-700 dark:text-gray-300">Loading books...</p>}
  {error && <p className="text-red-500">{error}</p>}

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {filteredBooks.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>

</div>

  );
}

export default Home;
