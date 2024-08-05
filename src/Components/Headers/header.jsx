import React from 'react'
import { Link }  from "react-router-dom"

function header() {
  return (
    <div className='header top-0'>
        <div className='flex items-center top-0 left-0 flex-row p-4 gap-8 '>
            <Link to="/" ><img className='h-16 w-16 rounded-lg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/></Link>
            <Link to="/moveis/populer" >Populer</Link>
            <Link to="/movies/top_rated">Top Rated</Link>
            <Link to="/movies/upcoming">Upcoming</Link>
        </div>
    </div>
  )
}

export default header