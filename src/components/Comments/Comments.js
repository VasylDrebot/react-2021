import React from 'react';
import {useEffect, useState} from 'react';
import {Outlet, useParams, useLocation} from 'react-router-dom';

import {commentService} from '../../services/comment.service';
import Comment from '../Comments/Comment';

const Comments = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        commentService.getByPostId(id).then(value => setComments([...value]))
    }, [id])
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