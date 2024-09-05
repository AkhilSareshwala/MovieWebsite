import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-800 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-4xl font-extrabold tracking-wide hover:text-gray-200 transition duration-300">
          MyMovies
        </Link>
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-lg font-semibold hover:text-gray-200 transition duration-300">
            Home
          </Link>
          <Link to="/signup" className="text-lg font-semibold hover:text-gray-200 transition duration-300">
            Sign Up
          </Link>
          <Link to="/login" className="text-lg font-semibold hover:text-gray-200 transition duration-300">
            Login
          </Link>
          <Link to="/booking" className="text-lg font-semibold hover:text-gray-200 transition duration-300">
            Booking
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 transition duration-300"
          />
          <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
