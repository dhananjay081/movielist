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
                <div className="movie__intro w-4/5">
                    <img className="movie__backdrop w-full h-[500px] object-cover object-[0_35%]" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
                </div>
                <div className="movie__detail flex items-center w-3/4 relative bottom-[225px]">
                    <div className="movie__detailLeft mr-[30px]">
                        <div className="movie__posterBox">
                            <img className="movie__poster w-[300px] rounded-[10px] shadow-[0px_22px_40px_6px_rgba(0,0,0,0.86)]" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className="movie__detailRight text-white flex flex-col h-[450px] justify-between">
                        <div className="movie__detailRightTop text-shadow-[0px_0px_5px_#000000] mb-2">
                            <div className="movie__name font-semibold text-3xl">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                            <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                            <div className="movie__rating">
                                {currentMovieDetail ? currentMovieDetail.vote_average : ""} <span className='ml-1'> <IoIosStar /> </span>
                                <span className="movie__voteCount ml-4">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                            </div>
                            <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                            <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                            <div className="movie__genres my-5">
                                {currentMovieDetail && currentMovieDetail.genres ?
                                    currentMovieDetail.genres.map(genre => (
                                        <span key={genre.id} className="movie__genre p-2 border-2 border-white rounded-[20px] mr-4">{genre.name}</span>
                                    ))
                                    : ""
                                }
                            </div>
                        </div>
                        <div className="movie__detailRightBottom my-8 flex-[0.8]">
                            <div className="synopsisText text-xl mb-5 font-semibold flex relative items-center">Synopsis</div>
                            <div className="ml-auto">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                        </div>
                    </div>
                </div>
                <div className="movie__links relative bottom-[120px] flex justify-between w-3/4">
                    <div className="movie__heading text-2xl">Useful Links</div>
                    {currentMovieDetail && currentMovieDetail.homepage &&
                        <a href={currentMovieDetail.homepage} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <p><span className="movie__homeButton movie__Button bg-red-600 flex justify-center items-center px-8 py-2 rounded-[20px] cursor-pointer w-[150px] text-black font-bold">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p>
                        </a>
                    }
                    {currentMovieDetail && currentMovieDetail.imdb_id &&
                        <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <p><span className="movie__imdbButton movie__Button bg-[#f3ce13] flex justify-center items-center px-8 py-2 rounded-[20px] cursor-pointer w-[150px] text-black font-bold">IMDb<i className="newTab fas fa-external-link-alt ml-6"></i></span></p>
                        </a>
                    }
                </div>
                <div className="movie__heading">Production companies</div>
                <div className="movie__production w-11/12 flex justify-center items-end mb-16">
                    {currentMovieDetail && currentMovieDetail.production_companies &&
                        currentMovieDetail.production_companies.map(company => (
                            <React.Fragment key={company.id}>
                                {company.logo_path &&
                                    <span className="productionCompanyImage flex flex-col items-center justify-center">
                                        <img className="movie__productionCompany w-[200px] m-8" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt={company.name} />
                                        <span>{company.name}</span>
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
