import React from 'react';

function User(props) {
    const {id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs} = props;
    return (
        <div>
        <h3>id: {id}</h3>
        <h3>name: {name}</h3>
        <h3>username: {username}</h3>
            <h3>email: {email}</h3>
            <h3>Adress:</h3>
            <p>street: {street}</p>
            <p>suite: {suite}</p>
            <p>city: {city}</p>
            <p>zipcode: {zipcode}</p>
            <p>lat: {lat}</p>
            <p>lng: {lng}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
            <p>city: {city}</p>
            <p>companyName: {companyName}</p>
            <p>catchPhrase: {catchPhrase}</p>
            <p>bs: {bs}</p>





        </div>
    );
}

export default User;