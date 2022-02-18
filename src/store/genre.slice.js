import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {movieService} from '../services/movie.service';

const initialState = {
    genres: [],
    status: null,
    error: null
}

export const getAllGenres = createAsyncThunk(
    'genres/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await movieService.getAllGenres();
            return genres
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllGenres.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.genres = action.payload.genres
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const genreReducer = genreSlice.reducer;

export default genreReducer;