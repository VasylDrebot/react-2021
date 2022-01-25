import React from 'react';

import './Post.css';

const Post = ({post:{id, userId, title, body}}) => {
    return (
        <div className={'item4'}>
            <div>Id:{id}</div>
            <div>UserId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export default Post;