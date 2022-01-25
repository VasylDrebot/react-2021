import React from 'react';
import {useEffect, useState} from 'react';
import {Outlet, useParams} from 'react-router-dom';
import {albumService} from '../../services/album.service';
import Album from './Album';

const Albums = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);
    useEffect(()=> {
        albumService.getById(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <div>
            {albums &&
            (albums.map(value => <Album key={value.id} album={value}/> ))
            }
            <div><Outlet/></div>
        </div>
    );
};

export default Albums;