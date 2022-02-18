import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {movieService} from '../services/movie.service';


const initialState = {
    moviesInfo: [],
    status: null,
    error: null
}


export const getMoviesInfo = createAsyncThunk(
    'moviesInfo/getMoviesInfo',

    async (_, {rejectWithValue}) => {

        try {
            const moviesInfo = await movieService.getAll(initialState.page);
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
        // nextPage: () => {
        //         initialState.page + 1;
        // },
        // prevPage: () => {
        //     initialState.page - 1
        // }
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