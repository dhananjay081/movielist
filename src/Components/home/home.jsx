import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results));
    }, []);

    return (
        <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {popularMovies.map(movie => (
                    <Link className='text-white' to={`/movie/&{movie.id}`}>
                      <div className="h-[38rem]">
                         <img className='m-auto w-full h-[38rem] block' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                      </div>
                      <div className="absolute p-5 bottom-0 h-3/4 flex flex-col w-full justify-end bg-custom-gradient opacity-1 transition-opacity duration-300">
                        <div className="font-black text-6xl mb-2 text-left">{movie? movie.original_title: ""}</div>
                        <div className="flex flex-row left-0 text-3xl mb-4">
                          {movie ? movie.release_date : " "} 
                          <span className='bg-red ml-12'>
                             {movie ? movie.vote_average : " "}
                          </span>
                          <span className='ml-3'> <IoIosStar /> </span>
                        </div>
                        <div className="italic font- text-xl mb-1 flex text-left w-1/2" >{movie? movie.overview : " "}</div>
                      </div>

                    </Link>
                ))}
            </Carousel>
        </div>
    );
}

export default Home;
