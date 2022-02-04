import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {postService} from '../services/post.service';

const initialState = {
    posts: [],
    status: null,
    error: null
}

export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await postService.getAll();
            return posts
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
   }
});

const postReducer = postSlice.reducer;

export default postReducer;

