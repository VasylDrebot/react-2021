import {useEffect, useState} from "react";

import User from "../User/User";
import {userService} from '../../services/user.service';

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])


    return (
        <div>
            <div>{users.map(value => <User key={value.id} user={value} getUser={getUser}/>)}</div>
        </div>
    );
};

export default Users;