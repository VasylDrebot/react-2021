import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {postService} from '../../services/post.service';
import {Link} from "react-router-dom";
import Comments from '../../components/Comments/Comments';
import './SinglePost.css';

const SinglePost = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();
    useEffect(()=> {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])
    return (
        <div>
            {post && (
                <div className={'post'}>
                    <div>Id:{post.id}</div>
                    <div>UserId:{post.userId}</div>
                    <div>Title:{post.title}</div>
                    <div>Body:{post.body}</div>
                    <Link to={'comments'}><button>Comments</button></Link>
                    <div><Outlet/></div>
                </div>
            )}
        </div>
    );
};

export default SinglePost;