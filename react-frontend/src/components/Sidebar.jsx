import React from "react";
import "./Sidebar.css";
import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between h-screen w-40 sidebar-container pt-14 pb-5 max-sm:w-full max-sm:flex-row max-sm:h-12 max-sm:pt-1 max-sm:pb-5">
            <nav className="flex flex-col h-1/3 justify-evenly max-sm:flex-row max-sm:w-100vw max-sm:items-stretch">
                <li className="nav-item text-center"><Link to='/'>Dashboard</Link></li>
                <li className="nav-item text-center"><Link to='/discover'>Discover</Link></li>
                <li className="nav-item text-center"><a href='#'>Reports</a></li>
                <li className="nav-item text-center"><a href='#'>Datasets</a></li>
                <li className="nav-item text-center"><Link to='messages'>Messages</Link></li>
                <li className="nav-item text-center hidden max-sm:block"><a href='#'>Log out</a></li>
            </nav>
            <nav className="flex flex-col justify-evenly max-sm:hidden">
                <li className="nav-item"><a href='#'>Log out</a></li>
                <li className="nav-item"><a href='#'>Collapse</a></li>
            </nav>
        </div>
    );
};

export default Sidebar;
