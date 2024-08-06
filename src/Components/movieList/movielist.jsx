import { useEffect, useState } from 'react';
import React from 'react';
import Card from '../cards/card';
import { useParams } from 'react-router-dom';

function Movielist() {
    const [movielist, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results));
    };

    return (
        <div className="movie_list pt-20 p-4 sm:pt-30 sm:pr-8 sm:pl-8 sm:pb-8   md:pt-30 md:pr-8 md:pl-8 md:pb-8 ">
           <h2 className="list_title text-2xl md:text-3xl font-extrabold text-gradient bg-clip-text bg-transparent m-6">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className='list_cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center'>
                {
                    movielist.map((movie, index) => (
                        <Card key={index} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
}

export default Movielist;
