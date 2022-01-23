import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div>{id}){name}
            <Link to={id.toString()} state={user}><button>UserDetails</button></Link>
        </div>
        </div>
    );
};

export default User;