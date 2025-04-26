import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeToggle } from "../ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-neon-blue transition-colors">
            About
          </Link>
          <Link to="/" className="hover:text-neon-purple transition-colors">
            Projects
          </Link>
          <Link to="/" className="hover:text-neon-teal transition-colors">
            Experience
          </Link>
          <Link to="/" className="hover:text-neon-blue transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed top-16 left-0 w-full bg-dark-200 z-50 overflow-hidden ${
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="px-6 py-8 flex flex-col space-y-4">
          <Link to="/" className="block py-2 border-b border-gray-700 hover:text-neon-blue transition-colors">
            About
          </Link>
          <Link to="/" className="block py-2 border-b border-gray-700 hover:text-neon-purple transition-colors">
            Projects
          </Link>
          <Link to="/" className="block py-2 border-b border-gray-700 hover:text-neon-teal transition-colors">
            Experience
          </Link>
          <Link to="/" className="block py-2 border-b border-gray-700 hover:text-neon-blue transition-colors">
            Contact
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
