import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import Movielist from '../movieList/movielist';

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results));
    }, []);

    return (
        <div className="poster pt-32 ">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {popularMovies.map(movie => (
                    <Link key={movie.id} className='text-white h-screen' to={`/movie/${movie.id}`}>
                        <div className="relative h-3/4 w-full ">
                            <img className='m-auto w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-5 ">
                                <div className="font-black text-lg sm:text-2xl md:text-4xl mb-2">{movie ? movie.original_title : ""}</div>
                                <div className="flex items-center text-sm sm:text-lg md:text-xl mb-4">
                                    {movie ? movie.release_date : " "} 
                                    <span className='bg-red-500 ml-2 sm:ml-4 px-1 sm:px-2 py-0.5 sm:py-1 rounded'>{movie ? movie.vote_average : " "}</span>
                                    <span className='ml-1 sm:ml-2'> <IoIosStar /> </span>
                                </div>
                                <div className="italic text-sm sm:text-lg">{movie ? movie.overview : " "}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </Carousel>
            <Movielist />
        </div>
    );
}

export default Home;
