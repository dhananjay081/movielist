import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header fixed top-0 left-0 w-full bg-zinc-800 z-50'>
      <div className='flex items-center p-4 gap-8'>
        <Link to="/">
          <img className='h-16 w-16 rounded-lg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" />
        </Link>
        <Link to="/movies/popular" className='text-white hover:text-gray-300'>Popular</Link>
        <Link to="/movies/top_rated" className='text-white hover:text-gray-300'>Top Rated</Link>
        <Link to="/movies/upcoming" className='text-white hover:text-gray-300'>Upcoming</Link>
      </div>
    </div>
  );
}

export default Header;
