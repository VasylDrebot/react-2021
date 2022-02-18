import React from 'react';
import {Link} from "react-router-dom";

import './Movie.css';

const Movie = ({movie}) => {
    const {id, original_title, poster_path, release_date, vote_average} = movie
    const img = 'https://image.tmdb.org/t/p/w300';
    return (
        <div className={'movie'}>
            <Link to={`${id.toString()}/info`} state={movie}><img src={img+poster_path} alt={original_title}/></Link>
            <h2>{original_title}</h2>
            <p>Release date:{release_date}</p>
            <p>Rating:{vote_average}</p>
        </div>
    );
};

export default Movie;