import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header fixed top-0 left-0 w-full bg-transparent z-50 shadow-md'>
      <div className='flex items-center justify-between p-4 min-[480px]:gap-8 backdrop-blur-lg'>
        <Link to="/">
          <img className='h-12 w-12 min-[480px]:h-16 min-[480px]:w-16 rounded-lg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" />
        </Link>
        <div className='min-[480px]:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className={`flex-col min-[480px]:flex-row gap-4 min-[480px]:gap-8 min-[480px]:flex ${isOpen ? 'flex' : 'hidden'}`}>
          <Link to="/movies/popular" className='text-white hover:text-gray-300'>Popular</Link>
          <Link to="/movies/top_rated" className='text-white hover:text-gray-300'>Top Rated</Link>
          <Link to="/movies/upcoming" className='text-white hover:text-gray-300'>Upcoming</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
