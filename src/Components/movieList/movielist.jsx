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
        <div className="movie_list p-4 sm:p-8 md:p-12">
            <h2 className='list_title text-xl sm:text-2xl md:text-3xl m-4 sm:m-6 md:m-10'>{(type ? type : "POPULAR").toUpperCase()}</h2>
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
