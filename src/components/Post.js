import React from 'react';

const Post = (props) => {
    const {userId, id, title, body} = props;
    return (
        <div>
            <h3>userId: {userId}</h3>
            <h3>id: {id}</h3>
            <h3>title: {title}</h3>
            <h3>body: {body}</h3>
        </div>
    );
};

export default Post;