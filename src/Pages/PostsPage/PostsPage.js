import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import Post from '../../components/Post/Post';
import {getAllPosts} from '../../store/post.slice';
import './Posts.css';

const PostsPage = () => {
    const {posts, status, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllPosts())
    }, [])
    return (
        <div className={'posts'}>
            {error && <h1>{error}</h1>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;