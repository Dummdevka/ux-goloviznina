import MessagePanel from '../components/MessagePanel'

const Message = () => {
    return (
        <div class="message-det-container flex flex-row justify-around max-sm:flex-col">
            <div class="w-full flex gap-3 p-2">
                <div class="message-desc flex gap-4 flex-col">
                    <p>Another benefit of this method is that you can just type your text naturally and let line breaks be entered automatically by textwidth setting. (Just make sure that LaTeX formatting lines dont break automatically in textwidth area; you want them to have non-space char as last char in line.</p>

                    <div class="block max-md:hidden">
                        <MessagePanel class="block max-md:hidden"/>
                    </div>
                </div>

            </div>
            <div class="message-stats flex flex-col w-3/4 border-l-2">
                <div class="stat py-3 px-4 border-b-2">
                    <h3 class="text-black small-title">Last seen</h3>
                    <p>Some text about this thing</p>
                </div>
                <div class="stat py-3 px-4 border-b-2">
                    <h3 class="text-black small-title">First seen</h3>
                    <p>Some text about this thing</p>
                </div>
                <div class="stat py-3 px-4 border-b-2">
                    <h3 class="text-black small-title">Number of occurences</h3>
                    <p>PASTE GRAPH HERE</p>
                </div>
            </div>
            <div class="hidden max-md:block">
                <MessagePanel class="hidden max-md:block"/>
            </div>
        </div>
    )
}
export default Message
