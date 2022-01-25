import React from 'react';
import {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {postService} from '../../services/post.service';
import Post2 from '../Post/Post2';
import {Outlet} from 'react-router-dom';

const UsersPostPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        postService.getById(id).then(value => setPosts([...value]))
    }, [id])
    return (
        <div>
            {posts && (
                posts.map(value => <Post2 key={value.id} post={value}/>))
            }
        </div>
    );
};

export default UsersPostPage;