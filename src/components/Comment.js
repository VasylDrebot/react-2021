import React from 'react';

const Comment = (props) => {
    const {postId, id, name, email, body} = props;
    return (
        <div>
          <h3>postId: {postId}</h3>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default Comment;