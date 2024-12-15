import React from "react";
import "./Message.css";

const Message = () => {
    return (
        <div className="message-container flex flex-row justify-between p-4 rounded-md items-center w-full">
            <div className="message-text flex flex-col justify-between h-full">
                <p className="title">Message</p>
                <p className="content">This is very important message!</p>
            </div>
            <div className="message-label error rounded-sm">ERROR</div>
        </div>
    );
};

export default Message;
