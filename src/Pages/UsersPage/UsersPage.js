import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import User from '../../components/User/User';
import {getAllUsers} from '../../store/user.slice';
import './UsersPage.css';

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    }, [])
    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;