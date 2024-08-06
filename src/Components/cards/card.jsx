import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';

function Card({ movie }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="inline-block transition-transform duration-200 relative rounded-lg overflow-hidden m-1 cursor-pointer min-w-[150px] sm:min-w-[200px] h-[225px] sm:h-[300px] z-0 border border-gray-600 hover:scale-110 hover:z-[1000] hover:shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        <Skeleton height={225} sm:height={300} duration={1} />
                    </SkeletonTheme>
                </div>
            ) : (
                <Link to={`/movie/${movie.id}`} className="text-white" style={{ textDecoration: 'none' }}>
                    <div className="inline-block transition-transform duration-200 relative rounded-lg overflow-hidden m-1 cursor-pointer min-w-[150px] sm:min-w-[200px] h-[225px] sm:h-[300px] z-0 border border-gray-600 hover:scale-110 hover:z-[40] hover:shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]">
                        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${movie?.poster_path || ''}`} alt={movie?.original_title || ''} />
                        <div className="card_overlay absolute px-2 sm:px-4 pb-2 sm:pb-4 bottom-0 h-full flex flex-col w-full justify-end bg-gradient-to-t from-black/100 to-black/0 opacity-0 transition-opacity duration-200 hover:opacity-100">
                            <div className="card_title font-extrabold text-sm sm:text-base mb-1 sm:mb-1.5">{movie?.original_title || ''}</div>
                            <div className="card_runtime font-extrabold text-xs sm:text-sm mb-0.5 sm:mb-1 flex flex-col">
                                {movie?.release_date || ''}
                                <span className="float-right flex flex-row text-xs sm:text-sm">{movie?.vote_average || ''}
                                    <span className="ml-1 sm:ml-3"><IoIosStar /></span>
                                </span>
                            </div>
                            <div className="card_description italic text-xs sm:text-sm mb-0.5 sm:mb-1">{movie?.overview?.slice(0, 80) + '...' || ''}</div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}

export default Card;
