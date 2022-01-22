import React from 'react';
import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {commentService} from '../../services/comment.service';
import Comment from '../Comments/Comment';

const Comments = (postId) => {
    const [comments, setComments] = useState(null);
    useEffect(()=>{
        commentService.getByPostId(postId).then(value => setComments([...value]))
    }, [])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            <div><Outlet/></div>
        </div>
    );
};

export default Comments;