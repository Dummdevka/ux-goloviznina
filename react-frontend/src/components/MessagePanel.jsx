import Message from './Message'
import Table from './Table'
import './MessagePanel.css'
import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const MessagePanel = () => {
    const [selected, setSelected] = useState(1);
    const handleSelect = (value) => {
        setSelected(value);
    };
    return (
        <div className="message-table flex flex-col shadow rounded-lg output-hidden border w-full">
            <div className="panel w-full flex flex-row justify-evenly py-2">
                <div className="btn h-full hover:cursor-pointer" onClick={() => {handleSelect(1)}}>
                    Comments
                </div>
                <div className="btn hover:cursor-pointer" onClick={() => {handleSelect(2)}}>
                    Show in context
                </div>
                <div className="btn hover:cursor-pointer" onClick={()=> {handleSelect(3)}}>
                    Tracestack
                </div>
            </div>
            <div className="info items-start w-full dutch flex flex-col justify-evenly">
            {selected == 1 &&
                <div class="p-4 w-full">
                    <h3>Comments</h3>
                    <div class="flex flex-col w-1/2 gap-1 height-aspect-1 mt-3">
                        <Message with_label={false} type="2"></Message>
                        <Message with_label={false} type="2"></Message>
                        <Message with_label={false} type="2"></Message>
                        <Message with_label={false} type="2"></Message>
                    </div>

                    <div className="flex gap-2 flex-col items-start w-full mt-5">
                        <label htmlFor="comm"></label>
                        <textarea id="comm" name="" cols="30" rows="10" class="w-full bg-gray-100 rounded-sm"></textarea>
                        <button className="btn p-2 tea shadow rounded-sm hover:text-white">Send</button>
                    </div>
                </div>
            }
            {selected == 2 &&
                <div class="p-4 w-full gap-2 flex flex-col">
                    <Message with_label={true} type="2"></Message>
                    <Message with_label={true} type="2"></Message>
                    <Message with_label={true} type="2"></Message>
                    <Message with_label={true} type="2"></Message>
                </div>
            }
            {selected == 3 &&
                <div class="p-4 flex flex-col items-start gap-4">
                    <Table />
                    <div class="btn p-3 rounded-sm tea hover:text-white">
                        <Link to='/dicover'>
                            <p>Show in Discover</p>
                        </Link>
                    </div>
                </div>
            }
            </div>


        </div>
    )
}

export default MessagePanel;
