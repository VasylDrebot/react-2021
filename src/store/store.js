import {configureStore} from '@reduxjs/toolkit';

import carReducer from './car.slice';
import commentReducer from './comment.slice';
import postReducer from './post.slice';
import userReducer from './user.slice';

const store = configureStore({
    reducer:{
        cars: carReducer,
        comments: commentReducer,
        users: userReducer,
        posts: postReducer
    }
});


export default store;



