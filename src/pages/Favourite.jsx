import React from "react";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const Favorites=()=> {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((f) => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((book) => (
            <div key={book.id}>
              <BookCard book={book} />
              <button
                onClick={() => removeFavorite(book.id)}
                className="mt-2 w-full bg-red-500 text-white py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
