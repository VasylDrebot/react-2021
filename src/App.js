import React from 'react';
import {Routes, Route, Link, Navigate} from "react-router-dom";

import Layout from './components/Layout/Layout';
import UsersPage from './Pages/UsersPage/UsersPage';
import PostsPage from './Pages/PostsPage/PostsPage';
import CommentsPage from './Pages/CommentsPage/CommentsPage';
import CarsPage from './Pages/CarsPage/CarsPage';
import './App.css';

const App = () => {
    return (
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>
            </Routes>
    );
};

export default App;

