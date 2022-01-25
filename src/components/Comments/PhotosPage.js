import React from 'react';
import {useEffect, useState} from 'react';
import {Outlet, useParams} from 'react-router-dom';

import {photoService} from '../../services/photo.service';
import Photo from './Photo';

const PhotosPage = () => {
    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(()=> {
        photoService.getById(albumId)
            .then(value => setPhotos([...value]))
    }, [albumId])

    return (
        <div>
            <div>{photos.map(value => <Photo key={value.id} photo={value}/>)}</div>
        </div>
    );
};

export default PhotosPage;