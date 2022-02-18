import {configureStore} from '@reduxjs/toolkit';

import movieReducer from './movie.slice';
import genreReducer from './genre.slice';
import moviesByGenre from './moviesByGenre.slice';

const store = configureStore({
    reducer:{
        movies: movieReducer,
        genres: genreReducer,
        moviesByGenre: moviesByGenre
    }
});


export default store;