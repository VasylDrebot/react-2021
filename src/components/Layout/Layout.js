import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

import './Layout.css';

const Layout = () => {
    return (
        <>

            <div className={'header'}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;