import React from 'react';

import './Post.css';

const Post2 = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div className={'post2'}>
            <p>userId:{userId}</p>
            <p>id:{id}</p>
            <p>title:{title}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Post2;