import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import Comment from '../../components/Comment/Comment';
import {getAllComments} from '../../store/comment.slice';

const CommentsPage = () => {
    const {comments, status, error} = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllComments())
    }, [])
    return (
        <div>
            {error && <h1>{error}</h1>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;