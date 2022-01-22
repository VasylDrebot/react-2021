import React from 'react';
import {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';

import {postService} from '../../services/post.service';
import Post from '../../components/Post/Post';
import './PostPage.css';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        postService.getAll().then(value => setPosts([...value]))

    }, [])

    return (
        <div className={'target'}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;