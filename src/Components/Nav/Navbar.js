import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Brand */}
        <div className="text-white text-xl font-semibold">
          Delux
        </div>

        {/* Navbar items for larger screens */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>

        {/* Hamburger icon for smaller screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

      </div>

      {/* Responsive Navbar Menu (hidden by default) */}
      <div className={`md:hidden ${isMenuOpen ? '' : 'hidden'} bg-gray-800 p-4`}>
        <a href="#" className="text-white block py-2">Home</a>
        <a href="#" className="text-white block py-2">About</a>
        <a href="#" className="text-white block py-2">Contact</a>
      </div>

    </nav>
  );
};

export default Navbar;
