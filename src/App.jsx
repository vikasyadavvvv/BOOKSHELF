import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favourite";

function App() {
  return (
<div className="min-h-screen bg-white text-gray-900 dark:bg-gradient-to-b dark:from-black dark:to-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
