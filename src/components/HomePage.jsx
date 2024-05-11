import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/hello.png'; // Background image

const HomePage = () => (
  <div
    className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
    style={{
      backgroundImage: `url(${backgroundImage})`, // Background image
      backgroundSize: 'cover', // Ensures the image covers the entire screen
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    }}
  >
    {/* Parallax Gradient Overlay for Better Contrast */}
    <div
      className="absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-75" // Increased opacity for better contrast
    />

    {/* Foreground Content */}
    <div className="relative z-10 flex flex-col justify-center items-center text-white p-8">
      {/* Animated Heading with Strong Text Shadow */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }} // Fade-in animation
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-6xl md:text-8xl font-extrabold drop-shadow-xl" // Text shadow for better contrast
        role="heading"
        aria-level="1"
      >
        InvestCraft
      </motion.h1>

      {/* Animated Subtitle with Clear Text Shadow */}
      <motion.p
        initial={{ opacity: 0, y: 50 }} // Fade-in from below
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        className="text-xl md:text-3xl mt-4 drop-shadow-lg" // Text shadow for readability
      >
        Your one-stop solution for managing your investment portfolio.
      </motion.p>

      {/* Call-to-Action Button with Strong Interaction */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }} // Initial scaling effect
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8"
      >
        <Link
          to="/portfolio"
          className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
          aria-label="Explore Portfolio"
        >
          <FaChartBar className="mr-2" /> Explore Portfolio
        </Link>
      </motion.div>
    </div>
  </div>
);

export default HomePage;
