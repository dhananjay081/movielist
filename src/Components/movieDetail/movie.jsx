import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

function Movie() {
    const [currentMovieDetail, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, []);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data));
    };

    return (
        <>
            <div className="movie w-full relative flex flex-col items-center pt-20">
                <div className="movie__intro w-full sm:w-4/5">
                    <img className="movie__backdrop w-full h-[300px] sm:h-[500px] object-cover object-[0_35%]" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
                </div>
                <div className="movie__detail flex flex-col sm:flex-row items-center w-full sm:w-3/4 relative sm:bottom-[225px] px-4 sm:px-0">
                    <div className="movie__detailLeft sm:mr-[30px]">
                        <div className="movie__posterBox">
                            <img className="movie__poster w-[150px] sm:w-[300px] rounded-[10px] shadow-[0px_22px_40px_6px_rgba(0,0,0,0.86)]" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className="movie__detailRight text-white flex flex-col h-auto sm:h-[450px] justify-between mt-4 sm:mt-0">
                        <div className="movie__detailRightTop text-shadow-[0px_0px_5px_#000000] mb-2">
                            <div className="movie__name font-semibold text-2xl sm:text-3xl">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                            <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                            <div className="movie__rating flex items-center">
                                {currentMovieDetail ? currentMovieDetail.vote_average : ""} <span className='ml-1'> <IoIosStar /> </span>
                                <span className="movie__voteCount ml-4">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                            </div>
                            <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                            <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                            <div className="movie__genres my-5">
                                {currentMovieDetail && currentMovieDetail.genres ?
                                    currentMovieDetail.genres.map(genre => (
                                        <span key={genre.id} className="movie__genre p-2 border-2 border-white rounded-[20px] mr-2 sm:mr-4">{genre.name}</span>
                                    ))
                                    : ""
                                }
                            </div>
                        </div>
                        <div className="movie__detailRightBottom my-8 sm:my-0 flex-[0.8]">
                            <div className="synopsisText text-lg sm:text-xl mb-3 sm:mb-5 font-semibold flex relative items-center">Synopsis</div>
                            <div className="ml-auto">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                        </div>
                    </div>
                </div>
                <div className="movie__links relative sm:bottom-[120px] flex flex-col sm:flex-row justify-between w-full sm:w-3/4 px-4 sm:px-0 mt-8 sm:mt-0">
                    <div className="movie__heading text-lg sm:text-2xl mb-4 sm:mb-0">Useful Links</div>
                    <div className="flex flex-col sm:flex-row">
                        {currentMovieDetail && currentMovieDetail.homepage &&
                            <a href={currentMovieDetail.homepage} target="_blank" rel="noopener noreferrer" className="mb-4 sm:mb-0 sm:mr-4">
                                <span className="movie__homeButton movie__Button bg-red-600 flex justify-center items-center px-8 py-2 rounded-[20px] cursor-pointer w-full sm:w-[150px] text-black font-bold">Homepage <i className="newTab fas fa-external-link-alt ml-2"></i></span>
                            </a>
                        }
                        {currentMovieDetail && currentMovieDetail.imdb_id &&
                            <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" rel="noopener noreferrer">
                                <span className="movie__imdbButton movie__Button bg-[#f3ce13] flex justify-center items-center px-8 py-2 rounded-[20px] cursor-pointer w-full sm:w-[150px] text-black font-bold">IMDb<i className="newTab fas fa-external-link-alt ml-2"></i></span>
                            </a>
                        }
                    </div>
                </div>
                <div className="movie__heading text-lg sm:text-2xl mt-8 sm:mt-0">Production companies</div>
                <div className="movie__production w-full sm:w-11/12 flex flex-wrap justify-center items-center mb-16 px-4 sm:px-0">
                    {currentMovieDetail && currentMovieDetail.production_companies &&
                        currentMovieDetail.production_companies.map(company => (
                            <React.Fragment key={company.id}>
                                {company.logo_path &&
                                    <span className="productionCompanyImage flex flex-col items-center justify-center m-4">
                                        <img className="movie__productionCompany w-[100px] sm:w-[200px]" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt={company.name} />
                                        <span className="text-center mt-2">{company.name}</span>
                                    </span>
                                }
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Movie;
