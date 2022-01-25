import {Routes, Route, Link, Navigate} from "react-router-dom";

import UsersPage from './pages/UsersPage/UsersPage';
import PostsPage from './pages/PostsPage/PostsPage';
import Layout from './components/Layout/Layout';
import SinglePost from './pages/SinglePost/SinglePost';
import Comments from '../src/components/Comments/Comments';
import UserDetails from './components/UserDetails/UserDetails';
import UsersPostPage from './components/UsersPostPage/UsersPostPage';
import Albums from './components/Albums/Albums';
import PhotosPage from './components/PhotosPage/PhotosPage';
import './App.css';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetails/>}>
                        <Route path={'posts'} element={<UsersPostPage/>}/>
                    </Route>

                    <Route path={':id/albums'} element={<Albums/>}>
                        <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                    </Route>
                </Route>


                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePost/>}>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default App;