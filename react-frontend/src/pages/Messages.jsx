import Message from '../components/Message'
import Input from '../components/Input'
import Select from '../components/Select'
import { Outlet, Link } from "react-router-dom";

const Messages = () => {
    return (
        <div class="content w-full">
            <div class="my-3">
                <Input></Input>
            </div>

            <Select names={['Env', 'Dashboard', 'Period']}/>
            <div class=" gap-3 mt-5 messages flex flex-col">
                <Message with_label={true} type="1"></Message>
                <Message with_label={true} type="2"></Message>
                <Message with_label={true} type="1"></Message>
                <Message with_label={true} type="3"></Message>
                <Message with_label={true} type="2"></Message>
                <Message with_label={true} type="2"></Message>
            </div>
        </div>
    )
}

export default Messages;
