import { useEffect, useState } from "react"
import { getMessages } from "../API/messages"
import CreateNewMessage from "./CreateNewMessage"
import MessageList from "./MessageList"
 

function ChatDisplay() {

    const [messages, setMessages] = useState([])
    const [messagesLoading, setMessagesLoading] = useState(true)

    const loadMessages = async () => {
        setMessagesLoading(true)
        const messagesFromBackend = await getMessages()
        setMessages(messagesFromBackend)
        setMessagesLoading(false)
    }

    useEffect(() => {
        loadMessages()
    }, [])


    let messageList = <div className="m-3"><h5>Loading...</h5></div>
    if (messagesLoading === false && messages.length > 0) {
        messageList = <MessageList messages={messages} loadMessages={loadMessages} />
    } else if (messagesLoading === false && messages.length === 0) {
        messageList = <div className="m-3"><h5>No messages found</h5></div>
    }

    return (
        <div>
            <div className="row justify-content-center m-2">
                <div className="col-12 rounded" style={{height: '20rem', backgroundColor: "white", border: "2px black solid", overflowY: 'scroll'}}>
                    {messageList}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 m-2 font-baskerville">
                    <CreateNewMessage loadMessages={loadMessages} />
                </div>
            </div>
        </div>
    )
}

export default ChatDisplay
