import React from 'react';

import './photo.css';

const Photo = ({photo}) => {
    const {albumId, id, title, url} = photo;
    return (
        <div className={'photo'}>
            <div>albumId:{albumId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <img src= {url} alt=""/>
        </div>
    );
};

export default Photo;