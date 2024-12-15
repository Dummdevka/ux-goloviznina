import React from 'react';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import { Outlet, Link } from "react-router-dom";

const Layout = ({children}) => {
    return (
    <div className="main flex flex-row justify-between">
        <Sidebar></Sidebar>
        <Container>
            <Outlet />
        </Container>
    </div>
    )
}

export default Layout;
