import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Layout.css';

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <NavLink to='/'>Movies</NavLink>
                <NavLink to='/genres'>Genres</NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;