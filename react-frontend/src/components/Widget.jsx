import React from "react";
import './Widget.css';

const Widget = ({ content, description }) => {
    if (content === "text") {
        return (
            <div className="widget bg-white flex items-start flex-col justify-between p-3 rounded-md h-fit">
                <h3 className="title mb-2">Widget</h3>
                <p className="content">{description}</p>
            </div>
        )
    }
    return (
        <div className="widget flex flex-col bg-white items-start justify-between p-3 rounded-md">
            <h3 className="title mb-2">Widget</h3>
            <img height="50" width="50" src={content} alt="Graph" className="h-full w-full"/>
        </div>
    );
}
export default Widget;
