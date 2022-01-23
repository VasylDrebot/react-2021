import React from 'react';
import {useEffect, useState} from 'react';
import {Outlet, useParams, useLocation} from 'react-router-dom';

import {commentService} from '../../services/comment.service';
import Comment from '../Comments/Comment';

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
            .then(response => response.json())
            .then(json => setComments(json))
        // commentService.getByPostId(postId).then(value => setComments([...value]))
    }, [])
    return (
        <div>
            {comments && (
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            )}
            <div><Outlet/></div>
        </div>
    );
};

export default Comments;