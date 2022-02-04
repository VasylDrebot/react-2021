import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {userService} from '../services/user.service';

const initialState = {
    users: [],
    status: null,
    error: null
}

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
           const users = await userService.getAll();
           return users
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {

        }
    }
});

const userReducer = userSlice.reducer;

export default userReducer;

