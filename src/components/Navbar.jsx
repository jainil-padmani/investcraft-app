import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaTachometerAlt, FaLightbulb, FaUser } from 'react-icons/fa';

const Navbar = () => (
  <nav className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      {/* Brand/Logo */}
      <Link to="/" className="text-white text-3xl font-bold flex items-center">
        InvestCraft
      </Link>

      {/* Navigation Links (Aligned to the Right) */}
      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-white hover:text-gray-300 flex items-center"
          aria-label="Home"
        >
          <FaHome className="mr-1" /> Home
        </Link>
        <Link
          to="/portfolio"
          className="text-white hover:text-gray-300 flex items-center"
          aria-label="Portfolio"
        >
          <FaChartBar className="mr-1" /> Portfolio
        </Link>
        <Link
          to="/dashboard"
          className="text-white hover:text-gray-300 flex items-center"
          aria-label="Dashboard"
        >
          <FaTachometerAlt className="mr-1" /> Dashboard
        </Link>
        <Link
          to="/financial-advice"
          className="text-white hover:text-gray-300 flex items-center"
          aria-label="Financial Advice"
        >
          <FaLightbulb className="mr-1" /> Financial Advice
        </Link>
        <Link
          to="/about-us"
          className="text-white hover:text-gray-300 flex items-center"
          aria-label="About Us"
        >
          <FaUser className="mr-1" /> About Us
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
