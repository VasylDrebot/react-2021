import React from 'react';
import {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';

import {userService} from '../../services/user.service';
import User from '../User/User';
import './UsersPage.css';


const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])
    return (

        <div className={'users'}>
            <div className={'users1'}>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div className={'outlet'}><Outlet/></div>
        </div>
    );
};

export default UsersPage;