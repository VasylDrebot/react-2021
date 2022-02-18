import React from 'react';
import {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {movieService} from '../../services/movie.service';

const MoviesInfo = () => {
    const {state:{overview}} = useLocation();
    console.log(overview)
    return (
        <div>
            <div>Overview{overview}</div>
        </div>
    );
};

export default MoviesInfo;