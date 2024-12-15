import React from "react";
import './Widget.css';

const Widget = ({ content, description }) => {
    if (content === "text") {
        return (
            <div className="widget flex items-start flex-col justify-between p-5 rounded-md h-fit">
                <p className="title mb-5">Widget</p>
                <p className="content">{description}</p>
            </div>
        )
    }
    return (
        <div className="widget flex flex-col items-start justify-between p-5 rounded-md">
            <p className="title mb-3">Widget</p>
            <img height="50" width="50" src={content} alt="Graph" className="h-full w-full"/>
        </div>
    );
}
export default Widget;
