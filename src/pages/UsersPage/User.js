import React from 'react';

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div>{id}){name}</div>
        </div>
    );
};

export default User;