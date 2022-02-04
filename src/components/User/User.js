import React from 'react';

import './User.css';

const User = ({user: {id, name, username, email, address, phone, website, company}}) => {
    return (
        <div className={'user'}>
            <p>Id:{id}</p>
            <p>Name:{name}</p>
            <p>Username:{username}</p>
            <p>Email:{email}</p>
            <ul>
                <p>Address:</p>
                <li>Street:{address.street}</li>
                <li>Suite:{address.suite}</li>
                <li>City:{address.city}</li>
                <li>Zipcode:{address.zipcode}</li>
                <ul>
                    <p>Geo:</p>
                    <li>Lat:{address.geo.lat}</li>
                    <li>Lng:{address.geo.lng}</li>
                </ul>
            </ul>
            <p>Phone:{phone}</p>
            <p>Website:{website}</p>
            <ul>
                <p>Company:</p>
                <li>Name:{company.name}</li>
                <li>CatchPhrase:{company.catchPhrase}</li>
                <li>Bs:{company.bs}</li>
            </ul>

        </div>
    );
};

export default User;