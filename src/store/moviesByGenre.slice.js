import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {movieService} from '../services/movie.service';

const initialState = {
    moviesByGenre: [],
    status: null,
    error: null
}

export const getMoviesByGenre = createAsyncThunk(
    'moviesByGenre/getMoviesByGenre',
    async (genre_id, {rejectWithValue}) => {
        try {
            const moviesByGenre = await movieService.getMoviesByGenre(genre_id);
            return moviesByGenre
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const moviesByGenre = createSlice({
    name: 'moviesByGenre',
    initialState,
    reducers: {},
    extraReducers: {
        [getMoviesByGenre.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getMoviesByGenre.fulfilled]: (state, action) => {
            state.moviesByGenre = action.payload.results
        },
        [getMoviesByGenre.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const moviesByGenreReducer = moviesByGenre.reducer;

export default moviesByGenreReducer;