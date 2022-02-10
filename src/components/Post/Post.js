import React from 'react';

import './Post.css';

const Post = ({post:{userId, id, title, body}}) => {
    return (
        <div className={'post'}>
            <div>userId:{userId}</div>
            <div>Id:{id}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default Post;