import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom;

import {getMoviesByGenre} from '../../store/moviesByGenre.slice';

const MoviesByGenre = () => {
    const {id} = useParams();
    const {moviesByGenre, status, error} = useSelector(state => state.moviesByGenre)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getMoviesByGenre(id))
    }, [])
    return (
        <div>
            {moviesByGenre.original_title}
        </div>
    );
};

export default GenresPage;