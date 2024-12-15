import React from "react";
import './Widget.css';

const Widget = ({ content }) => {
    if (content === "text") {
        return (
            <div className="widget flex flex-col justify-between p-5 rounded-md h-fit">
                <p className="title">Widget</p>
                <p className="content">Widget desc</p>
            </div>
        )
    }
    return (
        <div className="widget flex flex-col justify-between p-5 rounded-md">
            <p className="title">Widget</p>
            <img src={content} alt="Graph" className="h-full w-full"/>
        </div>
    );
}
export default Widget;