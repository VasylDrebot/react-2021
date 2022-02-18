import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';

import Movie from '../../components/Movie/Movie';
import {getAllMovies} from '../../store/movie.slice';
import {nextPage, prevPage} from '../../store/movie.slice'
import './MoviesPage.css';

const MoviesPage = () => {
    let {movies, page} = useSelector(state => state.movies)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllMovies(page))
        window.scrollTo(0,0)
    }, [page])
    return (
        <div>
            <div className={'movies'}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            {page !== 1 && <button onClick={()=> dispatch(prevPage())}>prev</button>}
            {page!==500 && <button onClick={()=> dispatch(nextPage())}>next</button>}
        </div>
    );
};

export default MoviesPage;
