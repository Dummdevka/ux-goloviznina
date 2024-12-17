import React from 'react';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router'
//import React, { useState } from 'react';

const Layout = ({children}) => {
    const titleMap = [
        {'path': '/', 'title': 'General'},
        {'path': '/messages', 'title': 'Messages'},
        {'path': '/message', 'title': 'Message'},
        {'path': '/discover', 'title': 'Discover'}
    ]
    const [title, setTitle] = useState("Title")

    let curLoc = useLocation();
    useEffect(() => {
        const curTitle = titleMap.find(item => item.path === curLoc.pathname)
        if(curTitle && curTitle.title){
          setTitle(curTitle.title)
          document.title = curTitle.title
        }
    }, [curLoc])
    return (
    <div className="main flex flex-row justify-between max-sm:flex-col">
        <Sidebar></Sidebar>
        <div className="flex flex-col w-full px-2 mt-4">
            <h1 class="my-2">{title}</h1>
            <Container>
                <Outlet />
            </Container>
        </div>

    </div>
    )
}

export default Layout;
