import React from "react";
import "./Message.css";
import { Outlet, Link } from "react-router-dom";

const Message = ({with_label, type}) => {
    return (
        <Link to='/message'>
            <div className="bg-white message-container flex flex-row justify-between p-2 rounded-md items-center w-full max-h-12">
                <div className="message-text flex flex-col justify-evenly h-full items-start">
                    <p className="title">Message</p>
                    <p className="content">This is very important message!</p>
                </div>
                {with_label && type == 1 &&
                <p className="message-label error rounded-sm text-white">ERROR</p>}
                {with_label && type == 2 &&
                <p className="message-label message rounded-sm text-white">INFO</p>}
                {with_label && type == 3 &&
                <div className="message-label warning rounded-sm text-white">WARNING</div>}
            </div>
        </Link>
    );
};

export default Message;
