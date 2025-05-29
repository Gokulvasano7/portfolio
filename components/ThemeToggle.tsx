
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white' 
          : 'bg-gradient-to-r from-violet-500 to-blue-500 text-white'
      } hover:shadow-2xl`}
      aria-label="Toggle theme"
    >
      <div className="relative">
        {isDarkMode ? (
          <FaSun className="text-xl animate-pulse" />
        ) : (
          <FaMoon className="text-xl animate-pulse" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
