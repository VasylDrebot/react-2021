import React from 'react';
import {Outlet, Link} from "react-router-dom";

const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            <p>userId:{userId}</p>
            <p>id:{id}</p>
            <p>title:{title}</p>
            <Link to={`${id.toString()}/photos`}>
                <button>Photos</button>
            </Link>
        </div>
    );
};

export default Album;