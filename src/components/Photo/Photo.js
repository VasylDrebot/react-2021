import React from 'react';

import '../Photo/photo.css';

const Photo = ({photo}) => {
    const {albumId, id, title, url} = photo;
    return (
        <div className={'photo'}>
            <p>albumId:{albumId}</p>
            <p>id:{id}</p>
            <p>title:{title}</p>
            <img src={url} alt=""/>
        </div>
    );
};

export default Photo;