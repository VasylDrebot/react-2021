import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';

import {getAllGenres} from '../../store/genre.slice';
import Genre from '../../components/Genre/Genre';
import './GenresPage.css';

const GenresPage = () => {
    const {genres, status, error} = useSelector(state => state.genres)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllGenres())
    }, [])
    return (
        <div className={'genres'}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            <Outlet/>
        </div>
    );
};

export default GenresPage;