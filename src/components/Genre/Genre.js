import React from 'react';
import {Link} from "react-router-dom";

import './Genre.css';

const Genre = ({genre}) => {
    const {id, name} = genre
    return (
            <div className={'genre'}>
                <Link to={`${id.toString()}`}><h2>{name}</h2></Link>
            </div>
    );
};

export default Genre;