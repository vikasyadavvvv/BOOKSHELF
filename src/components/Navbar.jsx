import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";       
import { AiFillHome } from "react-icons/ai";   
import { MdFavorite } from "react-icons/md";   
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-black dark:to-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-lg transition-colors duration-300">

            <Link to='/' className="flex items-center gap-2 font-bold text-2xl tracking-wider hover:text-yellow-300 transition duration-200">
                <FaBook size={24} /> 
                BookShelf
            </Link>

            <div className="flex items-center gap-6 mr-5 text-lg font-medium">
                <Link to='/' className="flex items-center gap-1 hover:text-gray-200 hover:underline">
                    <AiFillHome size={20} />
                </Link>

                <Link to='/favorites' className="flex items-center gap-1 hover:text-gray-200 hover:underline">
                    <MdFavorite size={20} />
                </Link>

                <button 
                    onClick={handleToggle} 
                    className="ml-4 p-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                    {darkMode ? <BsSunFill size={18} /> : <BsMoonFill size={18} />}
                </button>
            </div>

        </nav>
    )
}
export default Navbar;

