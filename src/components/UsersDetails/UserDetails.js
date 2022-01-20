import React from 'react';

import './UserDetails.css'

const UserDetails = ({user: {id, name, username, email, address, phone, website, company}, getUserId}) => {
    return (
        <div className={'item3'}>
            <h4>Id: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Username: {username}</h4>
            <h4>Email: {email}</h4>
            <h4>Address:</h4>
            <ul>
                <li>Street: {address.street}</li>
                <li>Suite: {address.suite}</li>
                <li>City: {address.city}</li>
                <li>Zipcode: {address.zipcode}</li>
            </ul>
            <h4>Geo:</h4>
            <ul>
                <li>lat: {address.geo.lat}</li>
                <li>lng: {address.geo.lng}</li>
            </ul>
            <h4>Phone: {phone}</h4>
            <h4>Website: {website}</h4>
            <h4>Company:</h4>
            <ul>
                <li>Name: {company.name}</li>
                <li>CatchPhrase: {company.catchPhrase}</li>
                <li>Bs: {company.bs}</li>
            </ul>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;