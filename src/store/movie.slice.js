import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {movieService} from '../services/movie.service';


const initialState = {
    movies: [],
    status: null,
    error: null,
    page: 1
}


export const getAllMovies = createAsyncThunk(
    'movies/getAllMovies',

    async (page, {rejectWithValue}) => {

        try {
            const movies = await movieService.getAll(page);
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        nextPage: (state, action) => {
            state.page=++state.page
        },
        prevPage: (state, action) => {
            state.page =--state.page
        }
    },
    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload.results
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const movieReducer = movieSlice.reducer;

export const {nextPage, prevPage} = movieSlice.actions;
export default movieReducer;