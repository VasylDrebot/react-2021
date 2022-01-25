import React from 'react';
import {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {Outlet} from 'react-router-dom';

import {userService} from '../../services/user.service';
import User from '../../pages/User/User';
import {Link} from "react-router-dom";

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();
    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [id])
    return (
        <div>
            {user && (
                <div>
                    <div>Id:{user.id}</div>
                    <div>Name:{user.name}</div>
                    <div>Username:{user.username}</div>
                    <div>Email:{user.email}</div>
                    <Link to={'posts'}>
                        <button>Posts</button>
                    </Link>
                    <div><Outlet/></div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;