import React from 'react';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import { Outlet, Link } from "react-router-dom";

const Layout = ({children}) => {
    return (
    <div className="main flex flex-row justify-between max-sm:flex-col">
        <Sidebar></Sidebar>
        <div className="flex flex-col w-full px-2 mt-4">
            <h1 class="my-2">Page header</h1>
            <Container>
                <Outlet />
            </Container>
        </div>

    </div>
    )
}

export default Layout;
