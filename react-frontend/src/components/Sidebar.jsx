import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between h-screen w-40 sidebar-container pt-14 pb-5">
            <nav className="flex flex-col h-1/3 justify-evenly">
                <li className="nav-item"><a href='#'>Dashboards</a></li>
                <li className="nav-item"><a href='#'>Discover</a></li>
                <li className="nav-item"><a href='#'>Reports</a></li>
                <li className="nav-item"><a href='#'>Datasets</a></li>
                <li className="nav-item"><a href='#'>Messages</a></li>
            </nav>
            <nav className="flex flex-col justify-evenly">
                <li className="nav-item"><a href='#'>Log out</a></li>
                <li className="nav-item"><a href='#'>Collapse</a></li>
            </nav>
        </div>
    );
};

export default Sidebar;